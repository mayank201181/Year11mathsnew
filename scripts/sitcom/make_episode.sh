#!/usr/bin/env bash
# Build + render one or more episodes end to end (strictly 1 worker + ultrafast to avoid CPU contention).
#   scripts/sitcom/make_episode.sh <topic-id> [<topic-id> ...]
# Output: public/videos/<topic>.mp4 and public/videos/posters/<topic>.jpg
set -euo pipefail
cd "$(dirname "$0")"
ROOT="$(cd ../.. && pwd)"
SEARCH_BASE="$(cd "$ROOT/../.." && pwd)"
TTS_ROOT="${TTS_ENV_ROOT:-$(find "$SEARCH_BASE" -maxdepth 2 -type d -name ".tts-env" | head -n 1)}"
VENV="$TTS_ROOT/.venv/bin"
export PATH="$VENV:$PATH"
PY="$VENV/python"

mkdir -p "$ROOT/public/videos/posters"
rm -f tts_cache/*.tmp.wav out/*/part*.mp4 2>/dev/null || true

for T in "$@"; do
  MP4="$ROOT/public/videos/$T.mp4"
  JPG="$ROOT/public/videos/posters/$T.jpg"
  if [ "${FORCE_RENDER:-0}" != "1" ] && [ -s "$MP4" ] && [ -s "$JPG" ]; then
    INFO="$(ffprobe -v error -select_streams v:0 -show_entries stream=codec_name,pix_fmt,color_range,r_frame_rate -of csv=p=0 "$MP4" 2>/dev/null || true)"
    if echo "$INFO" | grep -q "h264,yuv420p,tv,24/1"; then
      DUR="$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$MP4" 2>/dev/null || echo 0)"
      if awk "BEGIN {exit !($DUR > 60)}"; then
        [ -s "out/$T/timeline.json" ] || "$PY" build.py "episodes/$T.py" "out/$T"
        echo "=== $T: already valid V3 (${DUR}s), skipping video render"
        continue
      fi
    fi
  fi
  echo "=== $T: lint"
  "$PY" lint_episode.py "episodes/$T.py"
  echo "=== $T: voices + timeline"
  "$PY" build.py "episodes/$T.py" "out/$T"
  echo "=== $T: frames (workers=1, ultrafast)"
  rm -f "out/$T"/part*.mp4
  "$PY" render.py "out/$T" --workers 1
  echo "=== $T: encode"
  # 2-pass EBU R128 loudnorm + -2.6 dBFS lookahead alimiter before AAC encoding so final MP4 stays strictly <= -1.5 dBTP and ~-16 LUFS
  LN_AF="$("$PY" - "out/$T/audio.wav" <<'PYEOF'
import json, re, subprocess, sys
p = subprocess.run(["ffmpeg", "-nostdin", "-hide_banner", "-i", sys.argv[1], "-af", "loudnorm=I=-16:TP=-2.2:LRA=11:print_format=json", "-f", "null", "-"], capture_output=True, text=True).stderr
j = json.loads(re.search(r'\{[^{}]*"input_i"[^{}]*\}', p, re.S).group(0))
print(f"loudnorm=I=-16:TP=-2.2:LRA=11:measured_I={j['input_i']}:measured_LRA={j['input_lra']}:measured_TP={j['input_tp']}:measured_thresh={j['input_thresh']}:offset={j['target_offset']}:linear=true,aresample=48000,alimiter=limit=0.74:level=false:attack=5:release=50")
PYEOF
)"
  ffmpeg -nostdin -y -loglevel error -f concat -safe 0 -i "out/$T/parts.txt" -i "out/$T/audio.wav" \
    -c:v copy -color_range tv \
    -af "$LN_AF" -ar 48000 -c:a aac -b:a 128k -movflags +faststart -shortest \
    "$MP4"
  "$PY" render.py "out/$T" --poster "$JPG"
  rm -f "out/$T"/part*.mp4
  echo "=== $T: done $(du -h "$MP4" | cut -f1) $(ffprobe -v error -show_entries format=duration -of csv=p=0 "$MP4")s"
done
