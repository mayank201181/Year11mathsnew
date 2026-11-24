# Episode 6 — "Frustum Of Frustration" (Topic 6: 3D Mensuration, Similarity & Circle Theorems)

EP = dict(
    topic="mensuration-circles",
    logline="Uncle's overpriced Milo bucket and Dad's gold-foil half-melon trigger a rescue mission through frustums, the k-bridge, and Edexcel circle theorems.",
)

DIAG_HEMI_SEG = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="8" y="8" width="764" height="334" rx="14" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>'
    '<path d="M 60 228 A 120 120 0 0 1 300 228 Z" fill="#f59e0b" fill-opacity="0.35" stroke="#fbbf24" stroke-width="3.2"/>'
    '<ellipse cx="180" cy="228" rx="120" ry="26" fill="#fde68a" fill-opacity="0.45" stroke="#f59e0b" stroke-width="2.5"/>'
    '<text x="180" y="54" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde68a" text-anchor="middle">Solid Hemisphere</text>'
    '<text x="180" y="168" font-family="sans-serif" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle">Dome = 2πr²</text>'
    '<text x="180" y="236" font-family="sans-serif" font-size="28" font-weight="bold" fill="#0f172a" text-anchor="middle">Base = πr²</text>'
    '<text x="180" y="314" font-family="sans-serif" font-size="28" font-weight="bold" fill="#4ade80" text-anchor="middle">Total SA = 3πr²</text>'
    '<path d="M 432 252 L 668 252 A 236 236 0 0 0 550 48 Z" fill="#1e3a8a" stroke="#60a5fa" stroke-width="3"/>'
    '<path d="M 668 252 A 236 236 0 0 0 550 48 L 668 252 Z" fill="#f43f5e" fill-opacity="0.58" stroke="#fb7185" stroke-width="3"/>'
    '<line x1="550" y1="48" x2="668" y2="252" stroke="#fda4af" stroke-width="3" stroke-dasharray="7,5"/>'
    '<text x="572" y="314" font-family="sans-serif" font-size="28" font-weight="bold" fill="#93c5fd" text-anchor="middle">Seg = Sec − ½r²sinθ</text>'
    '</svg>'
)

DIAG_FRUSTUM = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="8" y="8" width="764" height="334" rx="14" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>'
    '<polygon points="185,34 125,146 245,146" fill="#334155" fill-opacity="0.55" stroke="#f87171" stroke-width="2.8" stroke-dasharray="7,5"/>'
    '<polygon points="125,146 65,258 305,258 245,146" fill="#1d4ed8" fill-opacity="0.55" stroke="#60a5fa" stroke-width="3.2"/>'
    '<line x1="185" y1="34" x2="185" y2="258" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="5,4"/>'
    '<text x="260" y="142" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fca5a5">r=3</text>'
    '<text x="314" y="256" font-family="sans-serif" font-size="28" font-weight="bold" fill="#93c5fd">R=6</text>'
    '<text x="34" y="106" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fca5a5">h=4</text>'
    '<text x="28" y="216" font-family="sans-serif" font-size="28" font-weight="bold" fill="#bfdbfe">4cm</text>'
    '<text x="200" y="316" font-family="sans-serif" font-size="28" font-weight="bold" fill="#4ade80" text-anchor="middle">V = V_big − V_small</text>'
    '<rect x="404" y="34" width="350" height="282" rx="12" fill="#1e293b" stroke="#475569" stroke-width="2"/>'
    '<text x="579" y="86" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde68a" text-anchor="middle">Linear k-Bridge</text>'
    '<text x="579" y="152" font-family="sans-serif" font-size="28" fill="#93c5fd" text-anchor="middle">Length = k</text>'
    '<text x="579" y="218" font-family="sans-serif" font-size="28" fill="#c084fc" text-anchor="middle">Area = k² (√ → k)</text>'
    '<text x="579" y="284" font-family="sans-serif" font-size="28" font-weight="bold" fill="#4ade80" text-anchor="middle">Vol = k³ (∛ → k)</text>'
    '</svg>'
)

DIAG_CIRCLES = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="8" y="8" width="764" height="334" rx="14" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>'
    '<circle cx="195" cy="148" r="108" fill="#1e293b" stroke="#60a5fa" stroke-width="3"/>'
    '<polyline points="104,204 195,148 286,204" fill="none" stroke="#f87171" stroke-width="3.2"/>'
    '<polyline points="104,204 205,40 286,204" fill="none" stroke="#4ade80" stroke-width="3"/>'
    '<circle cx="195" cy="148" r="5" fill="#ffffff"/>'
    '<text x="195" y="136" font-family="sans-serif" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle">O</text>'
    '<text x="195" y="196" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fca5a5" text-anchor="middle">2x</text>'
    '<text x="205" y="92" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac" text-anchor="middle">x</text>'
    '<text x="195" y="314" font-family="sans-serif" font-size="28" font-weight="bold" fill="#e2e8f0" text-anchor="middle">Centre = 2 × Edge</text>'
    '<circle cx="585" cy="144" r="102" fill="#1e293b" stroke="#fbbf24" stroke-width="3"/>'
    '<line x1="436" y1="246" x2="734" y2="246" stroke="#f43f5e" stroke-width="3.5"/>'
    '<polygon points="585,246 672,92 498,94" fill="#3b82f6" fill-opacity="0.32" stroke="#93c5fd" stroke-width="3"/>'
    '<text x="642" y="236" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fda4af">x</text>'
    '<text x="520" y="128" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fda4af">x</text>'
    '<text x="585" y="314" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde68a" text-anchor="middle">Alternate Segment</text>'
    '</svg>'
)

DIAG_SECANT = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="8" y="8" width="764" height="334" rx="14" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>'
    '<circle cx="515" cy="158" r="104" fill="#1e293b" stroke="#f59e0b" stroke-width="3.5"/>'
    '<line x1="130" y1="224" x2="478" y2="62" stroke="#f43f5e" stroke-width="3.8"/>'
    '<line x1="130" y1="224" x2="618" y2="178" stroke="#38bdf8" stroke-width="3.5"/>'
    '<circle cx="130" cy="224" r="6" fill="#ffffff"/>'
    '<circle cx="478" cy="62" r="6" fill="#f43f5e"/>'
    '<circle cx="412" cy="197" r="6" fill="#38bdf8"/>'
    '<circle cx="618" cy="178" r="6" fill="#38bdf8"/>'
    '<text x="96" y="234" font-family="sans-serif" font-size="28" font-weight="bold" fill="#ffffff">P</text>'
    '<text x="488" y="54" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fda4af">T</text>'
    '<text x="394" y="242" font-family="sans-serif" font-size="28" font-weight="bold" fill="#7dd3fc">A</text>'
    '<text x="634" y="188" font-family="sans-serif" font-size="28" font-weight="bold" fill="#7dd3fc">B</text>'
    '<text x="270" y="124" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fda4af" text-anchor="middle">PT = 12</text>'
    '<text x="275" y="256" font-family="sans-serif" font-size="28" font-weight="bold" fill="#7dd3fc" text-anchor="middle">PA = 8</text>'
    '<text x="518" y="232" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde68a" text-anchor="middle">AB = 10</text>'
    '<text x="390" y="318" font-family="sans-serif" font-size="30" font-weight="bold" fill="#4ade80" text-anchor="middle">PT² = PA × PB   (PB = 8 + 10 = 18!)</text>'
    '</svg>'
)

# ------------------------------ COLD OPEN -----------------------------------
scene("hawker", [("vani", 320), ("dad", 620), ("uncle", 1000)], "Tanglin Hawker Centre · Saturday afternoon")

L("uncle", "Step right up! New Mega Milo Frustum Bucket, triple the price of the baby cone cup!", mood="excited", shot="wide", prop="plate")
L("dad", "Sold! Put me down for two buckets, Uncle.", mood="happy", shot="two")
L("dad", "Also, Vani, look at this solid wooden half-sphere I bought to wrap in gold foil for Mum.", mood="excited", shot="two")
L("vani", "Hold your wallet, Dad! How much gold foil did you buy for that solid hemisphere?", mood="worried", shot="close", prop="calculator")
L("dad", "Sphere surface area is four pi r squared, so half is two pi r squared!", mood="smug", shot="close")
L("dad", "With radius four centimetres, I bought thirty-two pi square centimetres. Nailed it.", mood="happy", shot="close")
freeze("FOIL SHORTAGE!", dur=2.4, s="scratch", narrator="Dad forgot what sawing a solid sphere exposes.")

poof("sigma", 800)
L("sigma", "Did somebody just leave a naked circular base in public?", mood="deadpan", shot="wide", prop="compass")
L("sigma", "Vanishree, confiscate your father's geometry licence immediately.", mood="smug", shot="two")

title()

# ------------------- ACT 1: HEMISPHERES, SECTORS & SEGMENTS -----------------
scene("hawker", [("vani", 280), ("dad", 560), ("sigma", 800), ("uncle", 1020)])

L("sigma", "Slice a solid sphere in half: the dome is two pi r squared, yes.", mood="teach", shot="two",
  boardClear=True, diagram=DIAG_HEMI_SEG, board="Solid hemisphere SA = 3πr²")
L("sigma", "But the saw exposes a flat circular base of pi r squared!", mood="teach", shot="close")
L("vani", "Two pi r squared plus pi r squared gives three pi r squared!", mood="excited", shot="close",
  board="r = 4 → 3π(16) = 48π cm²")
L("vani", "For radius four, that is forty-eight pi. Dad, you are sixteen pi short!", mood="determined", shot="two")
L("dad", "What if I glue it flat-side down so nobody checks underneath?", mood="worried", shot="close")
L("sigma", "Edexcel examiners have X-ray vision, sir. Solid cone does the same thing: pi r l plus pi r squared, using slant height l from Pythagoras!", mood="smug", shot="two")
L("uncle", "Oi, test me on sectors! My pandan pancake slice has radius ten and angle sixty degrees.", mood="happy", shot="close", prop="plate")
L("uncle", "Arc length is sixty over three hundred and sixty times two pi r.", mood="excited", shot="close")
L("vani", "Nice, Uncle! Just remember sector perimeter adds both straight radii too: arc plus two r!", mood="happy", shot="two",
  board="Perimeter = Arc + 2r")
L("sigma", "And for the crispy minor segment beyond the chord, subtract triangle area half r squared sine theta from the sector.", mood="teach", shot="close")

challenge(
    1,
    "Solid hemisphere of radius 6 cm: find exact total surface area.",
    "108π cm²",
    "Total SA = 3πr² = 3 × π × 36 = 108π cm²",
    "Challenge one! A solid hemisphere has radius six centimetres. Find its exact total surface area in terms of pi.",
    "Dome two pi r squared plus base pi r squared gives three pi r squared. Six squared is thirty-six, times three gives one hundred and eight pi!",
)

# ------------------- ACT 2: FRUSTUMS & THE K-BRIDGE -------------------------
scene("living", [("vani", 300), ("mum", 620), ("dad", 920)], "Home · Measuring Uncle's Milo Bucket")

L("dad", "Okay, Uncle's frustum has narrow radius three, wide radius six, and vertical height four centimetres.", mood="thinking", shot="wide")
L("dad", "I just plug height four straight into one-third pi r squared h, right?", mood="happy", shot="close")
sfx("buzzer")
poof("sigma", 460)
L("sigma", "Step away from the calculator! A frustum is a big cone minus a ghost cone on top.", mood="annoyed", shot="wide",
  boardClear=True, diagram=DIAG_FRUSTUM, board="r/R = h/H (Similar triangles)")
L("vani", "Extend the sloping sides to meet at the ghost apex!", mood="determined", shot="close", prop="tablet")
L("vani", "By similar triangles, three over six equals small height h over h plus four.", mood="teach", shot="close",
  board="3/6 = h/(h+4) → h = 4, H = 8")
L("mum", "Cross-multiply: two h equals h plus four, so small height h is four and full height H is eight!", mood="happy", shot="two")
L("vani", "Big cone volume is ninety-six pi, ghost cone is twelve pi, so the frustum is eighty-four pi!", mood="excited", shot="close",
  board="V = 96π − 12π = 84π cm³")

confess("dad", "Dad's Private Maths Confession")
L("dad", "I genuinely thought frustum meant the frustration I feel during Year Eleven revision.", mood="deadpan", shot="close")

scene("living", [("vani", 280), ("sigma", 580), ("mum", 900)])
L("mum", "Sigma, my two similar vases have surface areas thirty-six and one hundred square centimetres.", mood="thinking", shot="two")
L("mum", "Does the big vase hold one hundred over thirty-six times as much water?", mood="worried", shot="close")
L("sigma", "Never jump from area straight to volume! Always cross the linear bridge k first.", mood="teach", shot="close",
  boardClear=True, board="Area ratio k² = 100/36 = 25/9")
L("vani", "Simplify to twenty-five ninths, then square-root to step onto the bridge: k equals five thirds!", mood="excited", shot="two")
L("vani", "Now cube k for volume: five thirds cubed is one hundred and twenty-five over twenty-seven!", mood="happy", shot="close",
  board="k = 5/3 → Vol ratio k³ = 125/27")
L("mum", "Simplify first, root to k, then cube. That bridge rule is foolproof!", mood="happy", shot="two")

challenge(
    2,
    "Similar jugs have heights 2 : 3. Small holds 40 ml. Large capacity?",
    "135 ml",
    "k = 3/2, k³ = 27/8, V = 40 × 27/8 = 135 ml",
    "Challenge two! Two mathematically similar jugs have heights in the ratio two to three. The smaller jug holds forty millilitres. Find the capacity of the larger jug.",
    "Linear factor k is three halves, so volume factor k cubed is twenty-seven eighths. Forty over eight is five, times twenty-seven gives one hundred and thirty-five millilitres!",
)

# --------------- ACT 3: THE EXAMINER & CIRCLE THEOREMS ----------------------
scene("classroom", [("vani", 280), ("sigma", 620), ("examiner", 960)], "Tanglin Exam Hall Simulation")

L("examiner", "Good afternoon. My crimson pen is hungry for sloppy circle theorem wording.", mood="deadpan", shot="wide", prop="book")
L("vani", "Try me! The angle at the centre is twice the angle at the circumference.", mood="determined", shot="close")
L("vani", "And when a chord is a diameter, the angle in a semicircle is ninety degrees!", mood="happy", shot="close")
L("examiner", "Correct. Now why do candidates lose marks on this crossed-chord shape every June?", mood="smug", shot="two",
  boardClear=True, diagram=DIAG_CIRCLES, board="Angles in the same segment")
L("vani", "Because they write bowtie rule or Z-angle instead of angles in the same segment are equal!", mood="excited", shot="close")
L("examiner", "Precisely! Next crime: arrowhead O A B C where O is the centre and B sits on the minor arc.", mood="annoyed", shot="close")
L("examiner", "Half the exam hall claims opposite angles sum to one hundred and eighty degrees!", mood="eyeroll", shot="two")
L("sigma", "Tragic! Cyclic quadrilaterals need all four corners on the circumference.", mood="teach", shot="two",
  board="Cyclic quad: all 4 on circle!")
L("sigma", "When O is at the centre, find the reflex angle around O and halve it!", mood="determined", shot="close")
L("examiner", "Better. Now rattle off your three tangent weapons, Vanishree.", mood="thinking", shot="two")
L("vani", "One: a tangent is perpendicular to the radius at the point of contact.", mood="determined", shot="close")
L("vani", "Two: tangents from an external point are equal, making an isosceles triangle!", mood="happy", shot="close")
L("sigma", "Three: the alternate segment theorem! Tangent-chord angle equals the angle in the alternate segment.", mood="excited", shot="two",
  board="Alternate segment theorem")
L("examiner", "Final boss: external point P, tangent P T equals twelve, secant P A B has external piece P A equal to eight.", mood="smug", shot="two",
  boardClear=True, diagram=DIAG_SECANT, board="PT² = PA × PB (Whole secant!)")
L("examiner", "Find the internal chord length A B, and watch out for the classic trap!", mood="smug", shot="close")
L("vani", "Inside a circle, intersecting chords satisfy A P times P B equals C P times P D.", mood="teach", shot="close")
L("vani", "Outside from P, every distance starts at P! So P T squared equals P A times whole secant P B, never P A times A B!", mood="determined", shot="close", prop="calculator")
L("vani", "One hundred and forty-four divided by eight gives P B equals eighteen, minus eight leaves chord A B equal to ten!", mood="excited", shot="close",
  board="144 = 8 × PB → PB = 18, AB = 10")
sfx("ding")
L("examiner", "Exact wording and whole secants measured from P. Full marks, reluctantly.", mood="happy", shot="wide")

challenge(
    3,
    "Tangent PT = 6 cm, external secant PA = 4 cm. Find chord AB.",
    "5 cm",
    "6² = 4 × PB → PB = 9, so AB = 9 − 4 = 5 cm",
    "Final challenge! From external point P, tangent P T has length six centimetres and secant P A B has external part P A equal to four centimetres. Find chord A B.",
    "P T squared equals P A times whole secant P B, so thirty-six equals four times P B, giving P B equals nine. Subtract four to get chord A B equals five centimetres!",
)

# ------------------------------ TAG SCENE -----------------------------------
scene("hawker", [("vani", 320), ("dad", 640), ("uncle", 1000)], "Back at Uncle's Stall")

L("vani", "Uncle! Baby cone volume is twelve pi, and your frustum bucket is eighty-four pi.", mood="shock", shot="wide")
L("vani", "That is seven times the Milo for triple the price!", mood="excited", shot="two")
L("uncle", "Uncle's k-cubed generosity undefeated! Free Milo Dinosaur for the Grade Nine champion!", mood="happy", shot="two", prop="plate")
L("dad", "And I bought the extra sixteen pi of gold foil. Three pi r squared forever!", mood="happy", shot="close")

end_card()
