# Episode 4 — "What The F Inverse" (Edexcel 4MA1 Higher: Arithmetic Series, Functions & Curve Transformations)

EP = dict(
    topic="sequences-functions-graphs",
    logline="Dad tries to sum fifteen rows of prata by hand, flips a fraction upside down for an inverse function, and shifts a parabola the wrong way into Mum's wall.",
)

DIAG_GAUSS = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">
  <rect width="780" height="350" rx="14" fill="#0f172a" stroke="#475569" stroke-width="2.5"/>
  <text x="390" y="48" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047" text-anchor="middle">Gauss Pairing: a = 6, d = 4, n = 15 → l = 62</text>
  <rect x="30" y="218" width="68" height="58" rx="6" fill="#6366f1"/>
  <rect x="108" y="186" width="68" height="90" rx="6" fill="#6366f1"/>
  <rect x="186" y="154" width="68" height="122" rx="6" fill="#6366f1"/>
  <rect x="288" y="106" width="68" height="170" rx="6" fill="#6366f1"/>
  <rect x="30" y="76" width="68" height="138" rx="6" fill="#f59e0b" opacity="0.92"/>
  <rect x="108" y="76" width="68" height="106" rx="6" fill="#f59e0b" opacity="0.92"/>
  <rect x="186" y="76" width="68" height="74" rx="6" fill="#f59e0b" opacity="0.92"/>
  <rect x="288" y="76" width="68" height="26" rx="6" fill="#f59e0b" opacity="0.92"/>
  <text x="64" y="257" font-family="sans-serif" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle">6</text>
  <text x="142" y="242" font-family="sans-serif" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle">10</text>
  <text x="220" y="226" font-family="sans-serif" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle">14</text>
  <text x="271" y="190" font-family="sans-serif" font-size="28" font-weight="bold" fill="#94a3b8" text-anchor="middle">…</text>
  <text x="322" y="202" font-family="sans-serif" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle">62</text>
  <text x="64" y="156" font-family="sans-serif" font-size="28" font-weight="bold" fill="#451a03" text-anchor="middle">62</text>
  <text x="193" y="322" font-family="sans-serif" font-size="28" font-weight="bold" fill="#cbd5e1" text-anchor="middle">15 columns wide</text>
  <text x="394" y="128" font-family="sans-serif" font-size="30" font-weight="bold" fill="#86efac">Pair = 6 + 62 = 68</text>
  <text x="394" y="196" font-family="sans-serif" font-size="28" fill="#e2e8f0">S₁₅ = (15/2)(2a+14d)</text>
  <text x="394" y="266" font-family="sans-serif" font-size="32" font-weight="bold" fill="#38bdf8">= 7.5 × 68 = 510 ✔</text>
</svg>"""

DIAG_FUNCS = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">
  <rect width="780" height="350" rx="14" fill="#0f172a" stroke="#475569" stroke-width="2.5"/>
  <text x="390" y="44" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047" text-anchor="middle">1) fg(3): Apply g FIRST (Inside-Out!)</text>
  <rect x="26" y="66" width="128" height="68" rx="10" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
  <text x="90" y="110" font-family="sans-serif" font-size="28" font-weight="bold" fill="#f8fafc" text-anchor="middle">x = 3</text>
  <text x="180" y="110" font-family="sans-serif" font-size="32" font-weight="bold" fill="#38bdf8" text-anchor="middle">→</text>
  <rect x="206" y="66" width="234" height="68" rx="10" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2"/>
  <text x="323" y="110" font-family="sans-serif" font-size="28" font-weight="bold" fill="#bfdbfe" text-anchor="middle">g(3) = 3²+2 = 11</text>
  <text x="466" y="110" font-family="sans-serif" font-size="32" font-weight="bold" fill="#c084fc" text-anchor="middle">→</text>
  <rect x="492" y="66" width="262" height="68" rx="10" fill="#4c1d95" stroke="#c084fc" stroke-width="2"/>
  <text x="623" y="110" font-family="sans-serif" font-size="28" font-weight="bold" fill="#f3e8ff" text-anchor="middle">f(11) = 33−5 = 28</text>
  <line x1="24" y1="158" x2="756" y2="158" stroke="#334155" stroke-width="2"/>
  <text x="390" y="202" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac" text-anchor="middle">2) Inverse h(x)=(2x+5)/(x−3): Swap x &amp; y</text>
  <text x="390" y="258" font-family="sans-serif" font-size="28" fill="#f8fafc" text-anchor="middle">xy − 3x = 2y + 5  →  y(x − 2) = 3x + 5</text>
  <text x="390" y="316" font-family="sans-serif" font-size="30" font-weight="bold" fill="#38bdf8" text-anchor="middle">h⁻¹(x) = (3x+5)/(x−2)   (x ≠ 2)</text>
</svg>"""

DIAG_TRANS = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">
  <rect width="780" height="350" rx="14" fill="#0f172a" stroke="#475569" stroke-width="2.5"/>
  <line x1="30" y1="184" x2="750" y2="184" stroke="#64748b" stroke-width="2"/>
  <line x1="365" y1="20" x2="365" y2="332" stroke="#64748b" stroke-width="2"/>
  <path d="M 442 64 Q 530 434 618 64" fill="none" stroke="#60a5fa" stroke-width="4"/>
  <circle cx="530" cy="249" r="7" fill="#60a5fa"/>
  <text x="615" y="294" font-family="sans-serif" font-size="28" font-weight="bold" fill="#93c5fd" text-anchor="middle">f(x): (4,−3)</text>
  <path d="M 162 64 Q 250 434 338 64" fill="none" stroke="#34d399" stroke-width="4" stroke-dasharray="9 5"/>
  <circle cx="250" cy="249" r="7" fill="#34d399"/>
  <text x="200" y="316" font-family="sans-serif" font-size="28" font-weight="bold" fill="#6ee7b7" text-anchor="middle">f(x+5): (−1,−3)</text>
  <path d="M 442 304 Q 530 -66 618 304" fill="none" stroke="#f472b6" stroke-width="3.5"/>
  <circle cx="530" cy="119" r="7" fill="#f472b6"/>
  <text x="530" y="54" font-family="sans-serif" font-size="28" font-weight="bold" fill="#f9a8d4" text-anchor="middle">−f(x): (4, 3)</text>
  <line x1="516" y1="249" x2="266" y2="249" stroke="#fde047" stroke-width="3.5"/>
  <text x="390" y="232" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047" text-anchor="middle">← LEFT 5</text>
</svg>"""

DIAG_CUBIC = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">
  <rect width="780" height="350" rx="14" fill="#0f172a" stroke="#475569" stroke-width="2.5"/>
  <text x="390" y="46" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047" text-anchor="middle">Curve: y=x³−3x+1 | Solve: x³−5x−2=0</text>
  <line x1="36" y1="205" x2="342" y2="205" stroke="#64748b" stroke-width="2"/>
  <line x1="189" y1="74" x2="189" y2="328" stroke="#64748b" stroke-width="2"/>
  <path d="M 70 318 C 122 86, 162 86, 189 190 C 216 294, 256 294, 308 82" fill="none" stroke="#a78bfa" stroke-width="4"/>
  <line x1="60" y1="280" x2="318" y2="104" stroke="#34d399" stroke-width="3.5"/>
  <circle cx="88" cy="260" r="7" fill="#fde047"/>
  <circle cx="201" cy="184" r="7" fill="#fde047"/>
  <circle cx="294" cy="120" r="7" fill="#fde047"/>
  <text x="374" y="118" font-family="sans-serif" font-size="28" fill="#f8fafc">Match curve LHS:</text>
  <text x="374" y="176" font-family="sans-serif" font-size="30" font-weight="bold" fill="#86efac">x³−3x+1 = 2x+3</text>
  <text x="374" y="236" font-family="sans-serif" font-size="28" font-weight="bold" fill="#38bdf8">Draw y = 2x + 3</text>
  <text x="374" y="296" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fca5a5">Read x-coords only!</text>
</svg>"""

title()

# --- SCENE 1: Hawker Centre — Arithmetic Series S_n ---
scene("hawker", [("dad", 260), ("vani", 560), ("uncle", 1000)], "Uncle Hock's Prata Palace · Sunday Morning")
L("uncle", "Big school carnival order today! I stack fifteen trays of prata in a neat tower.", mood="happy", shot="wide")
L("uncle", "Tray one has six pratas, tray two has ten, tray three has fourteen, adding four every tray!", mood="excited")
L("dad", "Stand back, Uncle! My phone calculator and lightning thumbs were born for this moment.", mood="smug", prop="phone", shot="two")
L("dad", "Six, ten, fourteen, eighteen, wait. Did I already tap eighteen or twenty-two?", mood="worried", prop="phone")
L("vani", "Dad, watching you add fifteen terms one by one is aging me by the minute.", mood="deadpan", shot="two")
L("vani", "That is an arithmetic series with first term six and common difference four.", mood="teach")
L("dad", "Quiet, genius! Starting over. Six, ten, oh great, a group-chat meme wiped the total!", mood="annoyed", prop="phone")
sfx("poof")
poof("sigma", 780)
L("sigma", "Drop the phone before nine-year-old Gauss haunts your breakfast!", mood="teach", shot="wide",
  board="AP: a = 6, d = 4, n = 15", boardClear=True)
L("sigma", "First find the fifteenth term with a plus n minus one times d.", mood="teach",
  board="u_15 = 6 + 14(4) = 62")
L("vani", "Fourteen jumps of four is fifty-six, plus six gives sixty-two on the bottom tray.", mood="happy")
L("sigma", "Now stack a reversed copy on top! Six pairs with sixty-two to make sixty-eight across all fifteen columns!", mood="excited",
  board="S_15 = (15/2)(6 + 62) = 510 ✔", diagram=DIAG_GAUSS)
L("vani", "Halve the rectangle: fifteen halves times sixty-eight gives five hundred and ten pratas!", mood="smug", shot="two")
L("uncle", "Five hundred and ten! Spot on! Meanwhile your father is still tapping tray four.", mood="happy")
L("dad", "Wait! What about a quadratic sequence like four, thirteen, twenty-eight, forty-nine?", mood="thinking",
  board="Quad seq: 4, 13, 28, 49", boardClear=True)
L("vani", "Take differences twice! First differences are nine, fifteen, twenty-one, so the second difference is six.", mood="teach",
  board="2nd diff = 6  →  2a = 6  →  a = 3 ✔")
L("sigma", "Remember second difference equals two a! Halve six to get three n squared.", mood="teach")
L("sigma", "Subtract three n squared from four, thirteen, twenty-eight to leave one, one, one, giving three n squared plus one!", mood="happy",
  board="Subtract 3n² → 3n² + 1 ✔")

challenge(
    1,
    "Sum first 12 terms: 5 + 8 + 11 + ...",
    "258",
    "S₁₂ = (12/2)(2×5 + 11×3) = 6 × 43 = 258",
    "Challenge one! Find the sum of the first twelve terms of the arithmetic series five, eight, eleven, and so on.",
    "First term five, common difference three: twelve halves is six, times ten plus thirty-three gives six times forty-three, which is two hundred and fifty-eight!",
)

# --- SCENE 2: Living Room — Composite & Inverse Functions ---
scene("living", [("dad", 260), ("vani", 580), ("sigma", 900)], "Living Room · Ten Minutes Later")
L("dad", "Time to redeem myself! I wrote two functions on my tablet for Mum's online cushion shop.", mood="determined", prop="tablet", shot="wide")
L("dad", "Function f of x is three x minus five, and function g of x is x squared plus two.", mood="happy", prop="tablet",
  board="f(x) = 3x - 5,  g(x) = x² + 2", boardClear=True)
L("dad", "To evaluate f g of three, I read left to right! First f of three is four, then g of four is eighteen!", mood="smug", prop="tablet",
  board="Dad: f(3)=4 → g(4)=18 ✘")
sfx("buzzer")
freeze("WRONG ORDER!", 2.2, "scratch")
L("vani", "Dad, f g of three means f of g of three! Whichever letter hugs x acts FIRST!", mood="annoyed", shot="two")
L("sigma", "Work from the inside out! Three enters g first: three squared plus two gives eleven.", mood="teach",
  board="fg(3) = f(g(3)) = f(11) = 28 ✔", diagram=DIAG_FUNCS)
L("vani", "Then eleven enters f: three elevens minus five equals twenty-eight, not eighteen!", mood="smug")
L("dad", "Fine, inside-out! At least I nailed the inverse of h of x equals two x plus five over x minus three.", mood="excited")
L("dad", "Minus one superscript means flip the fraction upside down: x minus three over two x plus five!", mood="smug")
sfx("trombone")
L("vani", "That is the reciprocal, Dad, NOT the inverse function!", mood="shock", shot="two")
L("vani", "Inverse means undo the machine by swapping x and y everywhere and making y the subject!", mood="teach")
L("sigma", "Write x equals two y plus five over y minus three, then multiply up to get x y minus three x equals two y plus five.", mood="teach",
  board="Swap: x(y - 3) = 2y + 5", boardClear=True)
L("vani", "Pull every y-term onto the left: x y minus two y equals three x plus five.", mood="determined",
  board="y(x - 2) = 3x + 5")
L("sigma", "Factorise out y times x minus two and divide! That gives three x plus five all over x minus two.", mood="happy",
  board="h⁻¹(x) = (3x + 5)/(x - 2), x ≠ 2 ✔")
L("vani", "And exclude x equals two from the domain, because a zero denominator breaks algebra!", mood="teach")

# --- SCENE 3: Chief Examiner Vault ---
confess("examiner", "Chief Examiner · Edexcel 4MA1 Marking Vault")
L("examiner", "Every summer, Higher Tier candidates donate easy marks to my red pen on functions!", mood="deadpan", prop="book",
  board="4MA1 FUNCTION TRAPS", boardClear=True)
L("examiner", "First crime: working f g of x left to right! Always rewrite f g of x with brackets as f of g of x first.", mood="teach",
  board="fg(x) = f(g(x)) — g FIRST! ✔")
L("examiner", "Second crime: writing one over f of x when asked for f inverse of x!", mood="annoyed")
L("examiner", "Third crime: writing the range of a quadratic using x instead of f of x! Range is outputs, never inputs!", mood="teach",
  board="Range uses f(x), NOT x! ✔")

challenge(
    2,
    "f(x) = 2x − 1, g(x) = x² + 3. Find fg(4).",
    "37",
    "g(4) = 16 + 3 = 19, then f(19) = 38 − 1 = 37",
    "Challenge two! Given f of x is two x minus one, and g of x is x squared plus three, evaluate f g of four.",
    "Apply g first: four squared plus three is nineteen. Feed nineteen into f: two times nineteen minus one gives thirty-seven!",
)

# --- SCENE 4: Living Room & Classroom — Transformations & Cubic Lines ---
scene("living", [("mum", 240), ("dad", 560), ("vani", 880)], "Living Room · DIY Disaster Hour")
L("mum", "Why is there a pencil cross on my framed batik painting, and why are you holding a paint roller?", mood="annoyed", shot="wide")
L("dad", "I am painting a modern parabolic arch! My template curve f of x has its vertex at four comma minus three.", mood="excited", prop="paintroller", shot="two")
L("dad", "The app says plot f of x plus five inside the bracket, so I measured five units right to nine!", mood="worried", prop="paintroller")
L("vani", "Freeze the roller! Plus five INSIDE the bracket shifts five units LEFT, not right!", mood="shock", shot="two")
sfx("poof")
scene("classroom", [("dad", 260), ("vani", 580), ("sigma", 900)], "Emergency Holo-Board Intervention")
L("sigma", "Chant the golden rule: Inside Horizontal Opposite, Outside Vertical Obeys!", mood="teach", shot="wide",
  board="Inside OPPOSITE: f(x+5) → (−1, −3) ✔", boardClear=True, diagram=DIAG_TRANS)
L("sigma", "For f of x plus five, solve x plus five equals four, shifting the vertex left to minus one comma minus three!", mood="teach")
L("vani", "Outside minus f of x flips y across the x-axis to four comma three.", mood="teach",
  board="−f(x): x-axis | f(−x): y-axis ✔")
L("vani", "Meanwhile inside f of minus x flips x across the y-axis to minus four comma minus three!", mood="happy")
L("sigma", "And inside f of two x acts oppositely by halving x-coordinates, squeezing four comma minus three to two comma minus three!", mood="excited",
  board="f(2x) halves x → (2, −3) ✔")
L("dad", "Wait, one last past-paper panic! Look at this plotted S-curve y equals x cubed minus three x plus one.", mood="thinking", prop="book",
  board="Plot: y = x³ - 3x + 1", boardClear=True)
L("dad", "Part b says: by drawing a suitable straight line on your grid, solve x cubed minus five x minus two equals zero!", mood="worried", prop="book")
L("vani", "Never draw a second cubic! Rearrange the target equation until the left side matches your plotted cubic.", mood="teach", shot="two")
L("sigma", "Take x cubed minus five x minus two equals zero, and add two x plus three to both sides!", mood="teach",
  board="x³ - 3x + 1 = 2x + 3  →  y = 2x + 3 ✔", diagram=DIAG_CUBIC)
L("vani", "Now the left side is your curve and the right side is the line y equals two x plus three!", mood="excited")
L("sigma", "Draw y equals two x plus three with a ruler, and read ONLY the x-coordinates at the intersections!", mood="teach")
L("vani", "And if part c wants a perpendicular normal to gradient two, flip and switch the sign to minus one half.", mood="smug",
  board="Perpendicular: m₁m₂ = −1 ✔")

challenge(
    3,
    "Vertex of y = f(x) is (6, −5). Vertex of y = −f(2x) + 1?",
    "(3, 6)",
    "2x = 6 → x = 3; y = −(−5) + 1 = 6 → (3, 6)",
    "Final challenge! The curve y equals f of x has a turning point at six comma minus five. Find the turning point of y equals minus f of two x, plus one.",
    "Inside, two x equals six gives x is three. Outside, minus negative five is positive five, plus one gives six. The new vertex is three comma six!",
)

confess("vani", "Vanishree · Exam Bag Packed")
L("vani", "Pair your arithmetic series, work composite functions from the inside out, and swap x and y for inverses.", mood="happy")
L("vani", "Most importantly, inside the bracket always moves x the opposite way. Mum's batik painting lives to see another day!", mood="smug")

end_card()
