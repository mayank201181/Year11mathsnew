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
  if [ -s "$MP4" ] && [ -s "$JPG" ]; then
    INFO="$(ffprobe -v error -show_entries stream=codec_name -show_entries format=duration -of csv=p=0 "$MP4" 2>/dev/null || true)"
    if echo "$INFO" | grep -q "h264" && echo "$INFO" | grep -q "aac"; then
      DUR="$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$MP4" 2>/dev/null || echo 0)"
      if awk "BEGIN {exit !($DUR > 60)}"; then
        # Ensure timeline.json exists if needed for gen_shorts.py
        [ -s "out/$T/timeline.json" ] || "$PY" build.py "episodes/$T.py" "out/$T"
        echo "=== $T: already valid (${DUR}s), skipping video render"
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
  ffmpeg -nostdin -y -loglevel error -f concat -safe 0 -i "out/$T/parts.txt" -i "out/$T/audio.wav" \
    -c:v copy -color_range tv \
    -af "loudnorm=I=-16:TP=-1.5:LRA=11" -ar 48000 -c:a aac -b:a 128k -movflags +faststart -shortest \
    "$MP4"
  "$PY" render.py "out/$T" --poster "$JPG"
  rm -f "out/$T"/part*.mp4
  echo "=== $T: done $(du -h "$MP4" | cut -f1) $(ffprobe -v error -show_entries format=duration -of csv=p=0 "$MP4")s"
done
