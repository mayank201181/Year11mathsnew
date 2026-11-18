EP = dict(
    topic="trigonometry-3d",
    logline="Dad tries to fit a ceremonial flagpole diagonally inside the family box room, triggering a Sigma intervention on 3D shadow triangles, the obtuse Sine Rule ambush, and negative cosines.",
)

DIAG_CUBOID = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">'
    '<rect x="10" y="10" width="500" height="180" rx="14" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>'
    '<polygon points="55,165 235,165 305,120 125,120" fill="#1e293b" stroke="#64748b" stroke-width="1.8"/>'
    '<polygon points="55,165 305,120 305,36" fill="#facc15" fill-opacity="0.28"/>'
    '<line x1="55" y1="165" x2="305" y2="120" stroke="#facc15" stroke-width="2.6" stroke-dasharray="6,4"/>'
    '<line x1="55" y1="165" x2="305" y2="36" stroke="#f87171" stroke-width="3"/>'
    '<line x1="305" y1="120" x2="305" y2="36" stroke="#38bdf8" stroke-width="2.8"/>'
    '<rect x="55" y="81" width="180" height="84" fill="none" stroke="#cbd5e1" stroke-width="1.8"/>'
    '<line x1="55" y1="81" x2="125" y2="36" stroke="#cbd5e1" stroke-width="1.8"/>'
    '<line x1="235" y1="81" x2="305" y2="36" stroke="#cbd5e1" stroke-width="1.8"/>'
    '<line x1="125" y1="36" x2="305" y2="36" stroke="#cbd5e1" stroke-width="1.8"/>'
    '<text x="40" y="174" font-size="14" font-weight="bold" fill="#f8fafc">A</text>'
    '<text x="312" y="126" font-size="14" font-weight="bold" fill="#facc15">C (shadow)</text>'
    '<text x="312" y="40" font-size="14" font-weight="bold" fill="#f87171">G</text>'
    '<text x="145" y="182" font-size="12" fill="#e2e8f0">12 m</text>'
    '<text x="282" y="152" font-size="12" fill="#e2e8f0">9 m</text>'
    '<text x="345" y="84" font-size="12" fill="#38bdf8">height 8 m</text>'
    '<text x="365" y="156" font-size="13" font-weight="bold" fill="#facc15">AC = 15 m, AG = 17 m</text>'
    '</svg>'
)

DIAG_AMBIGUOUS = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 190">'
    '<rect x="10" y="10" width="500" height="170" rx="14" fill="#0f172a" stroke="#f87171" stroke-width="2"/>'
    '<line x1="45" y1="152" x2="475" y2="152" stroke="#94a3b8" stroke-width="2"/>'
    '<line x1="45" y1="152" x2="295" y2="32" stroke="#f8fafc" stroke-width="2.6"/>'
    '<line x1="295" y1="32" x2="205" y2="152" stroke="#f87171" stroke-width="3"/>'
    '<line x1="295" y1="32" x2="385" y2="152" stroke="#38bdf8" stroke-width="2.4" stroke-dasharray="6,4"/>'
    '<text x="30" y="158" font-size="14" font-weight="bold" fill="#f8fafc">P</text>'
    '<text x="292" y="26" font-size="14" font-weight="bold" fill="#f8fafc">Q</text>'
    '<text x="155" y="144" font-size="13" font-weight="bold" fill="#f87171">180° − θ (OBTUSE)</text>'
    '<text x="392" y="144" font-size="13" font-weight="bold" fill="#38bdf8">θ (acute)</text>'
    '<text x="228" y="96" font-size="12" fill="#fca5a5">a = 9 cm</text>'
    '<text x="352" y="96" font-size="12" fill="#93c5fd">a = 9 cm</text>'
    '</svg>'
)

DIAG_COSINE = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 185">'
    '<rect x="10" y="10" width="500" height="165" rx="14" fill="#0f172a" stroke="#a78bfa" stroke-width="2"/>'
    '<polygon points="185,148 430,148 95,38" fill="#4c1d95" fill-opacity="0.45" stroke="#c4b5fd" stroke-width="2.4"/>'
    '<text x="176" y="168" font-size="13" font-weight="bold" fill="#facc15">A = 120°</text>'
    '<text x="305" y="168" font-size="13" fill="#e2e8f0">c = 8 cm</text>'
    '<text x="112" y="104" font-size="13" fill="#e2e8f0">b = 7 cm</text>'
    '<text x="275" y="82" font-size="14" font-weight="bold" fill="#4ade80">a = √(49 + 64 + 56) = 13 cm</text>'
    '</svg>'
)

DIAG_WAVES = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 185">'
    '<rect x="10" y="10" width="500" height="165" rx="14" fill="#0f172a" stroke="#34d399" stroke-width="2"/>'
    '<line x1="50" y1="95" x2="475" y2="95" stroke="#64748b" stroke-width="1.6"/>'
    '<line x1="55" y1="28" x2="55" y2="162" stroke="#64748b" stroke-width="1.6"/>'
    '<path d="M 55 95 Q 107 28 160 28 Q 212 28 265 95 Q 317 162 370 162 Q 422 162 475 95" fill="none" stroke="#38bdf8" stroke-width="2.8"/>'
    '<path d="M 55 28 Q 107 28 160 95 Q 212 162 265 162 Q 317 162 370 95 Q 422 28 475 28" fill="none" stroke="#fbbf24" stroke-width="2.2" stroke-dasharray="6,4"/>'
    '<line x1="55" y1="62" x2="475" y2="62" stroke="#f87171" stroke-width="1.6" stroke-dasharray="4,4"/>'
    '<circle cx="90" cy="62" r="4" fill="#38bdf8"/>'
    '<circle cx="230" cy="62" r="4" fill="#38bdf8"/>'
    '<text x="90" y="50" font-size="12" fill="#38bdf8">30°</text>'
    '<text x="218" y="50" font-size="12" fill="#38bdf8">150°</text>'
    '<text x="360" y="44" font-size="12" fill="#fbbf24">cos: 360° − x</text>'
    '</svg>'
)

# ------------------------------ COLD OPEN ----------------------------------
scene("living", [("vani", 320), ("dad", 680), ("mum", 940)], "Living Room · Sunday Morning")
L("dad", "Stand back! I bought a sixteen-foot bamboo flagpole, and it is fitting inside our twelve-by-nine-by-eight box room!", mood="excited", shot="wide", prop="paintroller")
L("mum", "You saw a twelve-foot floor and still bought sixteen? Say goodbye to the plasterboard.", mood="eyeroll", shot="two")
L("dad", "Maybe if I butter both ends and push?", mood="thinking", shot="close")
L("mum", "Put the butter back in the fridge.", mood="annoyed", shot="two")
L("vani", "Hold on! Tilt it corner-to-corner through three-dimensional space!", mood="determined", shot="two", prop="calculator")
sfx("poof")
poof("sigma", 500)
L("sigma", "Did somebody summon a three-dimensional shadow triangle? Step back before that pole hits the fan.", mood="smug", shot="wide")
L("dad", "Does he pay rent, or just appear whenever triangles are threatened?", mood="shock", shot="two")
L("vani", "Definitely the second one. Grab a notebook!", mood="happy", shot="two")
freeze("SPACE DIAGONAL TIME!")

title()

# ------------------------ ACT 1: 3D TRIG & PYRAMIDS ------------------------
scene("classroom", [("vani", 300), ("sigma", 760)], "Holo-Board Lab · 3D Trigonometry")
L("sigma", "Quick warm-up first! Give me exact sines for zero, thirty, forty-five, sixty, and ninety degrees.", mood="teach", shot="two", board="sin: √0/2, √1/2, √2/2, √3/2, √4/2")
L("vani", "Root zero, root one, root two, root three, root four, all over two! And cosine counts backwards!", mood="excited", shot="close")
L("sigma", "And where do you measure an angle of depression?", mood="thinking", shot="two", board="Depression: ALWAYS from horizontal!")
L("vani", "Always down from the horizontal eyeline, matching alternate elevation from below!", mood="determined", shot="close")
L("sigma", "Clean! Now in three dimensions, never squint at a skewed solid. Shine a vertical torch straight down to find the shadow!", mood="teach", shot="two", boardClear=True, diagram=DIAG_CUBOID, board="d = √(l² + w² + h²)")
L("vani", "On a twelve-by-nine floor, Pythagoras gives a shadow diagonal of fifteen!", mood="happy", shot="close", board="Shadow AC = √(12² + 9²) = 15")
L("sigma", "Stand up the vertical triangle on that shadow: base fifteen, height eight, hypotenuse seventeen! Dad's sixteen-foot pole fits.", mood="excited", shot="two", board="AG = √(15² + 8²) = 17")
L("vani", "And the angle with the floor is inverse tan of eight over fifteen!", mood="thinking", shot="close")
L("sigma", "Now watch Edexcel's favourite pyramid word-swap: sloping edge versus sloping face.", mood="teach", shot="two", boardClear=True, board="Pyramid EDGE: corner half-diag OC")
L("vani", "That caught me last week! Sloping edge uses the corner and half the base diagonal.", mood="shock", shot="close")
L("sigma", "Whereas sloping face drops to the midpoint of the base edge, using half the side length!", mood="teach", shot="two", board="Pyramid FACE: midpoint OM = half side")
L("vani", "Shorter base leg means the face angle is always steeper than the edge angle!", mood="happy", shot="close")

confess("vani", "Vani's Revision Cam")
L("vani", "Edge to the corner, face to the midpoint. Four words and that pyramid trap is toast!", mood="smug", shot="close")

challenge(
    1,
    "Cuboid 8 cm × 6 cm × 24 cm: find exact space diagonal.",
    "26 cm",
    "Floor √(8² + 6²) = 10; space √(10² + 24²) = 26 cm.",
    "Try this! A cuboid is eight by six by twenty-four centimetres. Find its exact space diagonal!",
    "Floor diagonal ten centimetres, and root of ten squared plus twenty-four squared is twenty-six centimetres!",
)

# ---------------- ACT 2: EXAMINER ROAST & AMBIGUOUS SINE RULE --------------
scene("classroom", [("vani", 260), ("sigma", 600), ("examiner", 940)], "Mark-Scheme Tribunal")
sfx("buzzer")
L("examiner", "Calculators down! Every June, candidates press inverse sine, write fifty-five point five degrees, and lose two marks!", mood="annoyed", shot="wide", prop="book")
L("vani", "Because the question stated the angle is obtuse!", mood="worried", shot="two")
L("examiner", "Precisely! Inverse sine on a calculator never goes past ninety degrees. It hides the obtuse twin!", mood="deadpan", shot="close", diagram=DIAG_AMBIGUOUS, board="sin(180° − θ) = sin θ")
L("sigma", "See the compass arc? A shorter opposite side cuts the base twice: once acute, once obtuse.", mood="teach", shot="two", board="Obtuse angle = 180° − acute θ")
L("vani", "So if inverse sine gives thirty degrees, the obtuse answer is one hundred and eighty minus thirty: one hundred and fifty degrees!", mood="excited", shot="close")
L("examiner", "Next trap: Cosine Rule with an obtuse angle! What is cosine of one hundred and twenty degrees?", mood="teach", shot="two", boardClear=True, diagram=DIAG_COSINE, board="a² = b² + c² − 2bc cos A")
L("vani", "Negative one half! Wait... minus times minus turns minus two b c cos A into a PLUS!", mood="shock", shot="close", board="cos 120° = −0.5  ⇒  ADD 2bc(0.5)!")
L("examiner", "Bravo! Forty-nine plus sixty-four PLUS fifty-six gives one hundred and sixty-nine, square root thirteen!", mood="happy", shot="two")
L("sigma", "Opening compass arms past ninety degrees must stretch the third side longer than Pythagoras!", mood="smug", shot="two")
L("examiner", "And what formula gives the area of any non-right-angled triangle?", mood="thinking", shot="two", board="Area = ½ bc sin A (included!)")
L("vani", "Half b c sine A, using the included angle sandwiched between those two sides!", mood="happy", shot="close")
L("examiner", "And in a three-side triangle, where is the largest angle?", mood="deadpan", shot="two")
L("vani", "Opposite the longest side, keeping full calculator accuracy until the end!", mood="determined", shot="close")
L("examiner", "Full marks. Carry on.", mood="happy", shot="wide")

challenge(
    2,
    "Given sin θ = √3 / 2 and θ is obtuse, find θ.",
    "120°",
    "Acute angle = 60°, so obtuse θ = 180° − 60° = 120°.",
    "Your turn! Sine theta equals root three over two, and theta is obtuse. Find angle theta!",
    "The acute angle is sixty degrees, so one hundred and eighty minus sixty gives one hundred and twenty degrees!",
)

# --------------- ACT 3: BEARINGS AT THE HAWKER & WAVE SYMMETRY -------------
scene("hawker", [("vani", 280), ("dad", 620), ("uncle", 1000)], "Hawker Centre · Navigation & Waves")
L("uncle", "Your father texted me directions: walk ten metres at sixty-eight degrees from East! Who measures from East, lah?", mood="annoyed", shot="wide", prop="plate")
L("dad", "East is where the chilli crab stall is!", mood="excited", shot="two")
L("uncle", "Chilli crab is not magnetic North, brother!", mood="eyeroll", shot="two")
L("vani", "Dad! Bearings have three rules: start at North, turn clockwise, and write three digits!", mood="eyeroll", shot="two", prop="compass")
L("dad", "Fine, zero-six-eight degrees! Wait, whose North line do I use for B from A?", mood="thinking", shot="two")
L("vani", "Follow the word FROM! Bearing from A puts the North arrow on A!", mood="teach", shot="close")
L("dad", "Then what is my back-bearing from Uncle's stall back to A?", mood="thinking", shot="two")
L("vani", "Parallel North lines add one hundred and eighty degrees: two hundred and forty-eight degrees!", mood="happy", shot="close")
sfx("poof")
poof("sigma", 450)
L("sigma", "And parallel North arrows unlock the interior angle for Cosine Rule journeys!", mood="teach", shot="wide")
L("uncle", "Listen to the floating tutor and eat your laksa!", mood="happy", shot="wide")

scene("classroom", [("vani", 300), ("sigma", 760)], "Holo-Board · Wave Symmetry (0° to 360°)")
L("sigma", "Final boss: trig waves from zero to three hundred and sixty degrees. Always catch the second root!", mood="teach", shot="two", boardClear=True, diagram=DIAG_WAVES, board="sin: 180° − x | cos: 360° − x")
L("vani", "Sine mirrors around ninety degrees, pairing x with one hundred and eighty minus x!", mood="determined", shot="close")
L("sigma", "And cosine and tangent?", mood="thinking", shot="two", board="tan period = 180°  ⇒  x + 180°")
L("vani", "Cosine mirrors around one hundred and eighty, giving three hundred and sixty minus x! Tangent repeats every one hundred and eighty, so add one hundred and eighty!", mood="excited", shot="close")

challenge(
    3,
    "Solve cos x = 0.5 for 0° ≤ x ≤ 360°.",
    "60°, 300°",
    "Acute x = 60°; cosine symmetry 360° − 60° = 300°.",
    "Last challenge! Find both solutions to cosine x equals zero point five from zero to three hundred and sixty degrees!",
    "Acute angle sixty degrees, and three hundred and sixty minus sixty gives three hundred degrees!",
)

# ------------------------------ TAG SCENE ----------------------------------
scene("living", [("vani", 320), ("dad", 680), ("mum", 940)], "Living Room · Pole Installed")
L("dad", "Behold! Thanks to Vani's seventeen-foot space diagonal, the flagpole fits inside the box room!", mood="happy", shot="wide")
L("mum", "And how do we open the door with bamboo wedged diagonally across it?", mood="deadpan", shot="two")
sfx("trombone")
L("dad", "We may have overlooked the locus of the door.", mood="worried", shot="close")
L("vani", "Case closed! Grade Nine, here I come!", mood="happy", shot="two")

end_card()
