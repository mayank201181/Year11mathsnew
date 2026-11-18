"""Generate lib/shorts.ts from rendered sitcom timelines in scripts/sitcom/out/<topic>/timeline.json.
Slices each episode into 4 punchy Concept & Mark-Saver Shorts (Cold Open, Holo-Board Method,
Examiner Mark-Scheme Trap, and Pause-Challenge Showdown) so /shorts and /watch have rich bite-size clips!
"""
import json, os

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))

TOPIC_META = {
    "number-bounds-surds": ("Bounds, Standard Form, Indices & Surds", "Bounds & Surds", "🔢", "Number"),
    "algebra-quadratics": ("Quadratics, Algebraic Fractions & Proof", "Quadratics & Proof", "𝑥²", "Algebra"),
    "equations-inequalities": ("Equations, Simultaneous & Inequalities", "Equations & Inequalities", "⚖️", "Algebra"),
    "sequences-functions-graphs": ("Series, Functions & Graph Transformations", "Functions & Graphs", "📈", "Functions & Calculus"),
    "calculus-kinematics": ("Differentiation & Kinematics", "Calculus & Kinematics", "𝑑𝑦", "Functions & Calculus"),
    "mensuration-circles": ("3D Mensuration, Similarity & Circle Theorems", "3D & Circle Theorems", "⭕", "Geometry & Trigonometry"),
    "trigonometry-3d": ("Sine/Cosine Rules, Bearings & 3D Trig", "3D Trig & Sine/Cosine", "📐", "Geometry & Trigonometry"),
    "vectors-sets-stats": ("Vectors, Venn Sets, Probability & Histograms", "Vectors, Sets & Stats", "📊", "Vectors & Statistics"),
}

WHO_NAMES = {
    "vani": "Vanishree",
    "dad": "Dad",
    "mum": "Mum",
    "sigma": "Sigma",
    "examiner": "Examiner",
    "uncle": "Uncle Hock",
    "cashier": "Kai",
}

ns = {}
exec(open(os.path.join(HERE, "common.py")).read(), ns)

clips = []
for num, topic, short_label, ep_title in ns["SEASON"]:
    mp4 = os.path.join(ROOT, "public", "videos", f"{topic}.mp4")
    tl_path = os.path.join(HERE, "out", topic, "timeline.json")
    if not (os.path.exists(mp4) and os.path.exists(tl_path)):
        continue
    tl = json.load(open(tl_path, "r", encoding="utf-8"))
    dur = float(tl["duration"])
    segs = tl["segments"]
    t_title, t_short, icon, strand = TOPIC_META[topic]

    # Collect captions across the episode
    all_caps = []
    for s in segs:
        if s.get("kind") == "line":
            who = WHO_NAMES.get(s.get("who", ""), s.get("who", "Cast"))
            for sub in s.get("subs", []):
                all_caps.append((float(sub["t"]), who, sub["text"]))
        elif s.get("kind") == "challenge" and s.get("phase") in ("q", "a") and s.get("text"):
            all_caps.append((float(s.get("say0", s["t0"])), "Sigma", s["text"]))

    # Find key landmarks: title end, first board teaching beat, examiner entrance, first challenge
    title_end = next((float(s["t1"]) for s in segs if s["kind"] == "title"), 55.0)
    board_t0 = next((float(s["t0"]) for s in segs if s["kind"] == "line" and s.get("board")), title_end + 5.0)
    exam_t0 = next((float(s["t0"]) for s in segs if s["kind"] in ("poof", "line") and s.get("who") == "examiner"), dur * 0.52)
    ch1_t0 = next((float(s["t0"]) for s in segs if s["kind"] == "challenge"), dur * 0.35)

    windows = [
        ("Cold Open: Real-World Disaster", f"Watch the chaos before {short_label} saves the day in “{ep_title}”.", 0.6, min(dur, max(35.0, title_end - 5.0))),
        ("Sigma's Holo-Board Method", f"Core Edexcel 4MA1 working steps and visual diagram for {short_label}.", max(0.0, board_t0 - 3.0), min(dur, board_t0 + 62.0)),
        ("Examiner's Mark-Scheme Trap", f"The #1 mark-loser in {short_label} — and exact 4MA1 wording that saves A1/M1 marks.", max(0.0, exam_t0 - 2.0), min(dur, exam_t0 + 58.0)),
        ("5-Second Challenge Showdown", f"Pause and beat Vanishree on an exam-grade {short_label} question.", max(0.0, ch1_t0 - 2.0), min(dur, ch1_t0 + 42.0)),
    ]

    for idx, (ctitle, csum, w0, w1) in enumerate(windows, start=1):
        w0 = round(max(0.0, w0), 1)
        w1 = round(min(dur, max(w0 + 20.0, w1)), 1)
        caps = [
            dict(t=round(ct - w0, 2), who=cwho, text=ctext)
            for (ct, cwho, ctext) in all_caps
            if w0 <= ct <= w1
        ][:18]
        clips.append(dict(
            id=f"{topic}-s{idx}",
            topicId=topic,
            topicTitle=t_title,
            topicShort=t_short,
            topicIcon=icon,
            strand=strand,
            episodeTitle=ep_title,
            index=idx,
            totalInTopic=len(windows),
            title=f"{t_short}: {ctitle}",
            summary=csum,
            startSec=w0,
            endSec=w1,
            durationSec=round(w1 - w0),
            src=f"/videos/{topic}.mp4",
            poster=f"/videos/posters/{topic}.jpg",
            captions=caps,
        ))

out_path = os.path.join(ROOT, "lib", "shorts.ts")
with open(out_path, "w", encoding="utf-8") as f:
    f.write("// Auto-generated concept Shorts manifest for IGCSE Maths 4MA1 Higher — do not edit by hand.\n")
    f.write("export interface ShortCaption {\n  t: number;\n  who: string;\n  text: string;\n}\n\n")
    f.write("export interface ShortPart {\n  src: string;\n  start: number;\n  duration: number;\n}\n\n")
    f.write("export interface ShortClip {\n"
            "  id: string;\n  topicId: string;\n  topicTitle: string;\n  topicShort: string;\n"
            "  topicIcon: string;\n  strand: string;\n  episodeTitle: string;\n  index: number;\n"
            "  totalInTopic: number;\n  title: string;\n  summary: string;\n  startSec: number;\n"
            "  endSec: number;\n  durationSec: number;\n  src?: string;\n  parts?: ShortPart[];\n"
            "  poster?: string;\n  embedHref?: string;\n  chapterId?: string;\n  captions: ShortCaption[];\n}\n\n")
    f.write("export const SHORTS: ShortClip[] = " + json.dumps(clips, indent=2, ensure_ascii=False) + ";\n")

print(f"wrote {out_path}: {len(clips)} shorts")
