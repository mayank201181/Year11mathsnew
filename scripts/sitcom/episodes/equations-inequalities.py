# Episode 3 — "Simultaneous Chaos" (Equations, Simultaneous & Quadratic Inequalities)
EP = dict(
    topic="equations-inequalities",
    logline="Dad tries to price Uncle Hock's prata combos, builds a circular drone fence across a straight garden path, and writes a backwards inequality that summons the Chief Examiner.",
)

DIAG_DISCRIM = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 180">'
    '<rect width="520" height="180" rx="12" fill="#0f172a"/>'
    '<rect x="14" y="14" width="238" height="152" rx="10" fill="#1e293b" stroke="#f87171" stroke-width="2"/>'
    '<text x="133" y="38" font-size="14" font-weight="bold" text-anchor="middle" fill="#fca5a5">TRAP: x² = 5x (÷ x)</text>'
    '<text x="133" y="68" font-size="15" text-anchor="middle" fill="#f8fafc">x = 5 ONLY  ✘</text>'
    '<text x="133" y="96" font-size="12" text-anchor="middle" fill="#fca5a5">Wipes out x = 0!</text>'
    '<text x="133" y="132" font-size="13" font-weight="bold" text-anchor="middle" fill="#fde047">TRAP: −7² = −49  ✘</text>'
    '<text x="133" y="152" font-size="12" text-anchor="middle" fill="#86efac">Bracket it: (−7)² = +49 ✔</text>'
    '<rect x="268" y="14" width="238" height="152" rx="10" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>'
    '<text x="387" y="38" font-size="14" font-weight="bold" text-anchor="middle" fill="#86efac">GRADE 9: Rearrange = 0</text>'
    '<text x="387" y="68" font-size="15" text-anchor="middle" fill="#f8fafc">x² − 5x = 0</text>'
    '<text x="387" y="96" font-size="15" text-anchor="middle" fill="#38bdf8">x(x − 5) = 0</text>'
    '<text x="387" y="134" font-size="15" font-weight="bold" text-anchor="middle" fill="#86efac">x = 0  or  x = 5  ✔</text>'
    '</svg>'
)

DIAG_FRAC = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 175">'
    '<rect width="520" height="175" rx="12" fill="#0f172a"/>'
    '<text x="260" y="30" font-size="15" font-weight="bold" text-anchor="middle" fill="#fde047">Clear Denominators: ×(x − 2)(x + 3) EVERYWHERE</text>'
    '<rect x="20" y="44" width="480" height="52" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.8"/>'
    '<text x="260" y="66" font-size="15" font-weight="bold" text-anchor="middle" fill="#f8fafc">6/(x − 2) − 2/(x + 3) = 1   (x ≠ 2, −3)</text>'
    '<text x="260" y="87" font-size="14" text-anchor="middle" fill="#93c5fd">6(x + 3) − 2(x − 2) = 1(x − 2)(x + 3)</text>'
    '<rect x="20" y="108" width="480" height="52" rx="8" fill="#14532d" stroke="#4ade80" stroke-width="1.8"/>'
    '<text x="260" y="130" font-size="14" font-weight="bold" text-anchor="middle" fill="#86efac">6x + 18 − 2x + 4 = x² + x − 6  ⇒  x² − 3x − 28 = 0</text>'
    '<text x="260" y="150" font-size="14" font-weight="bold" text-anchor="middle" fill="#fde047">(x − 7)(x + 4) = 0  ⇒  x = 7 or x = −4 ✔</text>'
    '</svg>'
)

DIAG_CIRCLE = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">'
    '<rect width="520" height="200" rx="12" fill="#0f172a"/>'
    '<line x1="30" y1="100" x2="230" y2="100" stroke="#64748b" stroke-width="1.5"/>'
    '<line x1="130" y1="16" x2="130" y2="184" stroke="#64748b" stroke-width="1.5"/>'
    '<circle cx="130" cy="100" r="68" fill="none" stroke="#c084fc" stroke-width="2.5"/>'
    '<line x1="90" y1="180" x2="176" y2="14" stroke="#38bdf8" stroke-width="2.5"/>'
    '<circle cx="168" cy="40" r="5" fill="#4ade80"/>'
    '<circle cx="103" cy="166" r="5" fill="#4ade80"/>'
    '<text x="176" y="38" font-size="12" font-weight="bold" fill="#86efac">(2.8, 4.6)</text>'
    '<text x="42" y="174" font-size="12" font-weight="bold" fill="#86efac">(−2, −5)</text>'
    '<rect x="252" y="20" width="250" height="160" rx="10" fill="#1e293b" stroke="#a78bfa" stroke-width="1.8"/>'
    '<text x="377" y="46" font-size="14" font-weight="bold" text-anchor="middle" fill="#fde047">x² + y² = 29  &amp;  y = 2x − 1</text>'
    '<text x="377" y="74" font-size="13" text-anchor="middle" fill="#f8fafc">x² + (2x − 1)² = 29</text>'
    '<text x="377" y="98" font-size="13" text-anchor="middle" fill="#93c5fd">5x² − 4x − 28 = 0</text>'
    '<text x="377" y="126" font-size="13" font-weight="bold" text-anchor="middle" fill="#86efac">Sub back into LINEAR y = 2x − 1!</text>'
    '<text x="377" y="152" font-size="12" text-anchor="middle" fill="#fca5a5">Never sub into circle (±5 fake!)</text>'
    '</svg>'
)

DIAG_INEQ = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 185">'
    '<rect width="520" height="185" rx="12" fill="#0f172a"/>'
    '<rect x="14" y="14" width="238" height="157" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>'
    '<text x="133" y="36" font-size="13" font-weight="bold" text-anchor="middle" fill="#93c5fd">(x + 3)(x − 5) &lt; 0  (Valley)</text>'
    '<line x1="30" y1="96" x2="236" y2="96" stroke="#64748b" stroke-width="1.5"/>'
    '<line x1="80" y1="96" x2="186" y2="96" stroke="#38bdf8" stroke-width="5"/>'
    '<path d="M 46 44 Q 133 166 220 44" fill="none" stroke="#f8fafc" stroke-width="2.2"/>'
    '<circle cx="80" cy="96" r="4.5" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>'
    '<circle cx="186" cy="96" r="4.5" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>'
    '<text x="133" y="154" font-size="14" font-weight="bold" text-anchor="middle" fill="#86efac">−3 &lt; x &lt; 5  ✔</text>'
    '<rect x="268" y="14" width="238" height="157" rx="10" fill="#1e293b" stroke="#f472b6" stroke-width="2"/>'
    '<text x="387" y="36" font-size="13" font-weight="bold" text-anchor="middle" fill="#fbcfe8">(x + 3)(x − 5) &gt; 0  (Two Tails)</text>'
    '<line x1="284" y1="96" x2="490" y2="96" stroke="#64748b" stroke-width="1.5"/>'
    '<line x1="284" y1="96" x2="334" y2="96" stroke="#f472b6" stroke-width="5"/>'
    '<line x1="440" y1="96" x2="490" y2="96" stroke="#f472b6" stroke-width="5"/>'
    '<path d="M 300 44 Q 387 166 474 44" fill="none" stroke="#f8fafc" stroke-width="2.2"/>'
    '<circle cx="334" cy="96" r="4.5" fill="#0f172a" stroke="#f472b6" stroke-width="2.5"/>'
    '<circle cx="440" cy="96" r="4.5" fill="#0f172a" stroke="#f472b6" stroke-width="2.5"/>'
    '<text x="387" y="154" font-size="14" font-weight="bold" text-anchor="middle" fill="#fde047">x &lt; −3  or  x &gt; 5  ✔</text>'
    '</svg>'
)

title()

# --- SCENE 1: Hawker Centre — Simultaneous Prata Chaos & Dividing by x ---
scene("hawker", [("vani", 300), ("dad", 620), ("uncle", 1000)], "Uncle Hock's Prata Stall · Saturday Morning")
L("uncle", "Morning Vanishree, morning Boss! Today no single item price on the board, only combo mystery!", mood="happy", shot="wide")
L("uncle", "Three egg pratas and two teh tariks cost eleven dollars.", mood="smug", prop="plate")
L("uncle", "And five egg pratas and two teh tariks cost seventeen dollars!", mood="happy")
L("dad", "Stand back, Vanishree! Your father is a simultaneous equations grandmaster.", mood="excited", prop="calculator")
L("dad", "Both clues have two teh tariks, so I just add them together!", mood="smug")
sfx("buzzer")
L("vani", "Dad, stop! Both equations have positive two t.", mood="annoyed", shot="two")
L("vani", "If you add positive two t and positive two t, you get four t, not zero!", mood="determined")
L("dad", "Wait. Why did the teh tarik double instead of disappearing?", mood="shock")
poof("sigma", 450)
sfx("poof")
scene("hawker", [("vani", 240), ("sigma", 500), ("dad", 760), ("uncle", 1020)])
L("sigma", "Did somebody commit an elimination crime before breakfast?", mood="teach", boardClear=True, board="DSA: Different Signs ADD")
L("sigma", "Remember the golden chant: Different Signs Add, Same Signs Subtract!", mood="excited", board="SSS: Same Signs SUBTRACT")
L("vani", "Since both equations have plus two t, we subtract! Five p minus three p equals seventeen minus eleven, so two p equals six!", mood="determined", board="2p = 6 => p = $3, t = $1 ✔")
L("uncle", "Steady lah! One egg prata is three dollars, and one teh tarik is one dollar!", mood="happy")

confess("dad", "Dad's Napkin Redemption")
L("dad", "Fine, I redeemed myself! Uncle Hock asked where x squared equals five x.", mood="smug", shot="close")
L("dad", "So I divided both sides by x and got x equals five. Clean! Fast!", mood="excited")

scene("hawker", [("vani", 240), ("sigma", 520), ("dad", 800), ("uncle", 1020)])
sfx("scratch")
freeze("DIVIDED BY X?!", dur=2.2)
L("sigma", "You divided by x?! What if x is zero, mortal?!", mood="shock", boardClear=True, diagram=DIAG_DISCRIM)
L("sigma", "Zero squared equals five times zero! You just threw a valid root into the bin!", mood="annoyed")
L("vani", "Never divide by x! Rearrange to equal zero first: x squared minus five x equals zero.", mood="teach", prop="book", board="x(x - 5) = 0 => 0 or 5 ✔")
L("vani", "Factor out x to get x times bracket x minus five equals zero, giving zero or five!", mood="determined")
L("sigma", "And in the quadratic formula, minus b plus or minus the square root of b squared minus four a c all over two a, always bracket negative b!", mood="teach", board="b = -7 => (-7)² = +49 ✔")
L("vani", "Right! Typing negative seven squared without brackets gives negative forty nine instead of positive forty nine!", mood="determined")

challenge(
    1,
    "Solve 3x² = 15x (give both roots)",
    "0, 5",
    "3x² - 15x = 0 => 3x(x - 5) = 0 => x = 0 or 5",
    "Pause and solve three x squared equals fifteen x. Do not lose a root!",
    "Rearrange to three x squared minus fifteen x equals zero, factor out three x, and you get zero or five!",
)

# --- SCENE 2: Living Room — Clearing Algebraic Fractions ---
scene("living", [("vani", 320), ("mum", 640), ("sigma", 940)], "Later · Tanglin Revision Table")
L("mum", "Vanishree, look at this five mark monster: six over x minus two, minus two over x plus three, equals one.", mood="neutral", prop="tablet", shot="wide")
L("vani", "First I note the excluded values: x cannot be two or negative three, so no denominator is zero.", mood="thinking", boardClear=True, diagram=DIAG_FRAC)
L("sigma", "Gorgeous! Now multiply every single term on both sides by x minus two times x plus three!", mood="excited", board="Multiply ALL terms by LCM!")
L("mum", "Watch trap one: students forget to multiply the one on the right hand side by those brackets!", mood="teach", shot="two")
L("vani", "And trap two is the minus sign! Minus two times bracket x minus two expands to minus two x plus four!", mood="determined", board="-2(x - 2) = -2x + 4 ✔")
L("sigma", "Rearranging gives x squared minus three x minus twenty eight equals zero.", mood="teach")
L("vani", "Which factorises into x minus seven times x plus four equals zero, giving seven or negative four!", mood="happy", board="x = 7 or x = -4 ✔")
L("mum", "Neither root is excluded. Five out of five marks banked!", mood="happy")

# --- SCENE 3: Park — Dad's Circular Drone Zone vs Straight Path ---
scene("park", [("vani", 260), ("dad", 600), ("sigma", 940)], "Back Garden · Dad's Drone Perimeter Test")
L("dad", "Behold! My security drone circles along x squared plus y squared equals twenty nine.", mood="excited", prop="map", shot="wide")
L("dad", "And your mother's stone path follows the straight line y equals two x minus one!", mood="smug")
L("vani", "Linear meets circle! Elimination fails here, so we substitute the linear equation into the circle.", mood="teach", boardClear=True, diagram=DIAG_CIRCLE)
L("dad", "Easy! Two x minus one squared is four x squared plus one!", mood="smug")
sfx("buzzer")
L("sigma", "FOIL IT, DAD! Two x minus one squared has a middle term: four x squared minus four x plus one!", mood="annoyed", board="(2x - 1)² = 4x² - 4x + 1 ✔")
L("vani", "Adding x squared gives five x squared minus four x minus twenty eight equals zero.", mood="determined")
L("vani", "Factorising five x minus fourteen times x plus two equals zero gives two point eight and negative two!", mood="happy", board="x = 2.8  or  x = -2")
L("dad", "Aha! Now I plug negative two back into the circle, get y squared equals twenty five, so y is plus or minus five!", mood="excited")
sfx("trombone")
L("vani", "NO! Never substitute back into the circle! Negative two comma positive five is not on the straight line!", mood="shock", shot="two")
L("sigma", "Always substitute back into the linear equation! At negative two, two x minus one gives negative five only!", mood="teach", board="(-2, -5) and (2.8, 4.6) ✔")
L("vani", "And to prove a line is a tangent to a circle, substitute it in and show b squared minus four a c equals zero!", mood="smug")

challenge(
    2,
    "y = x + 1 meets y = x² - 5 at x > 0. Find (x, y).",
    "(3, 4)",
    "x² - 5 = x + 1 => (x - 3)(x + 2) = 0 => x = 3, y = 4",
    "The line y equals x plus one meets y equals x squared minus five. Find the intersection where x is positive!",
    "Equating y gives x squared minus x minus six equals zero, so x equals three and y equals four. Coordinates three comma four!",
)

# --- SCENE 4: Chief Examiner Showdown — Quadratic Inequalities ---
scene("living", [("vani", 260), ("dad", 560), ("sigma", 920)], "Final Boss · Quadratic Inequalities")
L("dad", "Final question! Solve bracket x plus three times bracket x minus five is greater than zero.", mood="smug", prop="book")
L("dad", "Critical values are negative three and five, so I write negative three is greater than x is greater than five!", mood="excited")
poof("examiner", 740)
sfx("scratch")
scene("living", [("vani", 220), ("dad", 460), ("examiner", 740), ("sigma", 1020)])
L("examiner", "FREEZE THAT PEN! Chief Examiner for Edexcel four M A one Higher speaking!", mood="annoyed", shot="wide")
L("dad", "Why is there an examiner in my living room?!", mood="shock")
L("examiner", "Because writing negative three is greater than x is greater than five claims negative three exceeds five!", mood="teach", boardClear=True, diagram=DIAG_INEQ)
L("examiner", "That single backwards chain costs thousands of candidates their final mark every summer!", mood="determined")
L("vani", "Once the x squared term is positive, you must sketch the U shaped parabola through negative three and five!", mood="excited")
L("examiner", "Exactly! For less than zero, the valley below the axis is one connected sandwich: negative three is less than x is less than five.", mood="teach", board="< 0 : ONE sandwich (-3 < x < 5)")
L("examiner", "For greater than zero, the two outer arms are separate tails! Write x is less than negative three, OR x is greater than five!", mood="determined", board="> 0 : TWO tails (x < -3 or x > 5)")
L("sigma", "Never write the word AND between two tails, because no number is below negative three and above five at once!", mood="teach")
L("vani", "And if x squared starts negative, multiply by negative one first and flip the inequality sign!", mood="determined", board="×(-1) => FLIP < and > !")
L("examiner", "Plus on coordinate grids: dashed lines for strict inequalities, solid lines when equals is included. Grade Nine work, Vanishree!", mood="happy")

challenge(
    3,
    "Integers satisfying (x + 1)(x - 3) < 0?",
    "0, 1, 2",
    "Strict -1 < x < 3 => integers 0, 1, 2",
    "Final challenge! List all the integers satisfying bracket x plus one times bracket x minus three is strictly less than zero!",
    "Strictly between negative one and three, excluding the endpoints, the integers are zero, one, and two!",
)

confess("vani", "Vanishree's Exam Checklist")
L("vani", "Rearrange quadratics to zero, clear denominators everywhere, and sub back into the linear equation.", mood="determined", shot="close")
L("vani", "Then sketch the parabola before writing any quadratic inequality. Simultaneous chaos? Handled!", mood="smug", shot="close")

end_card()
