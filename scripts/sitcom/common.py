# Shared cast, season list and beat helpers for "Grade Nine Or Bust" (IGCSE Maths 4MA1 Higher).
# build.py / lint_episode.py exec this file, then the episode file, in one namespace.

TEACHER = "sigma"

VOICES = {
    "vani":     dict(voice="af_heart", speed=1.05, lang="en-us"),
    "mum":      dict(voice="bf_emma", speed=1.06, lang="en-gb"),
    "dad":      dict(voice="bm_george", speed=1.0, lang="en-gb"),
    "sigma":    dict(voice="am_fenrir", speed=0.96, lang="en-us", pitch=-2.0),
    "cashier":  dict(voice="am_puck", speed=1.10, lang="en-us"),
    "examiner": dict(voice="af_sarah", speed=1.02, lang="en-gb"),
    "uncle":    dict(voice="am_michael", speed=1.0, lang="en-us", pitch=-1.0),
}

# Season 1 running order = the app's 8 Edexcel 4MA1 Higher topics.
SEASON = [
    (1, "number-bounds-surds", "Bounds, Indices & Surds", "Upper Bound To Happen"),
    (2, "algebra-quadratics", "Quadratics, Fractions & Proof", "Square Up Or Shut Up"),
    (3, "equations-inequalities", "Equations & Inequalities", "Simultaneous Chaos"),
    (4, "sequences-functions-graphs", "Series, Functions & Curves", "What The F Inverse"),
    (5, "calculus-kinematics", "Calculus & Kinematics", "Zero Velocity, Maximum Drama"),
    (6, "mensuration-circles", "3D Mensuration & Circles", "Frustum Of Frustration"),
    (7, "trigonometry-3d", "3D Trig & Sine/Cosine Rules", "Ambiguous Case Closed"),
    (8, "vectors-sets-stats", "Vectors, Sets & Histograms", "Dense And Denser"),
]

CHARACTERS = set(VOICES)
SETS = {"living", "kitchen", "mall", "checkout", "classroom", "hawker", "park"}  # + confess_<character>
MOODS = {"neutral", "happy", "excited", "deadpan", "annoyed", "shock", "smug", "thinking", "worried", "sad",
         "determined", "teach", "bored", "eyeroll"}
SHOTS = {"close", "two", "wide"}
PROPS = {"phone", "tablet", "cushion", "book", "plate", "map", "dice", "calculator", "compass", "paintroller"}
SFX_NAMES = {"ding", "buzzer", "scratch", "trombone", "poof", "whoosh", "tick", "door", "drawer"}

B = []
def scene(id, cast, caption=None): B.append(dict(type="scene", id=id, cast=cast, caption=caption))
def L(who, text, **kw): B.append(dict(type="line", who=who, text=text, **kw))
def sfx(name, gap=0.0): B.append(dict(type="sfx", name=name, gap=gap))
def freeze(text, dur=2.6, s="scratch", narrator=""): B.append(dict(type="freeze", text=text, dur=dur, sfx=s, narrator=narrator))
def poof(who, x): B.append(dict(type="poof", who=who, x=x))
def card(text, sub="", dur=2.5): B.append(dict(type="card", text=text, sub=sub, dur=dur))
def challenge(n, q, a, work, qs, as_): B.append(dict(type="challenge", n=n, q=q, a=a, work=work, qs=qs, as_=as_))
def confess(who, caption): scene("confess_" + who, [(who, 640)], caption)

def _ep():
    ep = globals().get("EP") or {}
    row = next(r for r in SEASON if r[1] == ep["topic"])
    return row
def title(dur=5.0):
    num, _, _, t = _ep()
    B.append(dict(type="title", title="GRADE NINE OR BUST", sub=f"Episode {num} · “{t}”", dur=dur))
def end_card(dur=4.0):
    num = _ep()[0]
    nxt = next((r for r in SEASON if r[0] == num + 1), None)
    sub = f"Next time: {nxt[2]} — “{nxt[3]}”" if nxt else "Season 1 Complete — Go smash 4MA1 Higher!"
    B.append(dict(type="card", text="GRADE NINE OR BUST", sub=sub, dur=dur))
