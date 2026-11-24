# Episode 3 — "Simultaneous Chaos" (Equations, Simultaneous & Quadratic Inequalities)
EP = dict(
    topic="equations-inequalities",
    logline="Dad tries to price Uncle Hock's prata combos, builds a circular drone fence across a straight garden path, and writes a backwards inequality that summons the Chief Examiner.",
)

DIAG_DISCRIM = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect width="780" height="350" rx="14" fill="#0f172a"/>'
    '<rect x="16" y="16" width="366" height="318" rx="12" fill="#1e293b" stroke="#f87171" stroke-width="2.5"/>'
    '<text x="199" y="62" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle" fill="#fca5a5">TRAP: x²=5x (÷x)</text>'
    '<text x="199" y="120" font-family="sans-serif" font-size="30" font-weight="bold" text-anchor="middle" fill="#f8fafc">x = 5 ONLY  ✘</text>'
    '<text x="199" y="170" font-family="sans-serif" font-size="28" text-anchor="middle" fill="#fca5a5">Loses x = 0!</text>'
    '<text x="199" y="238" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle" fill="#fde047">TRAP: −7²=−49 ✘</text>'
    '<text x="199" y="294" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle" fill="#86efac">(−7)² = +49  ✔</text>'
    '<rect x="398" y="16" width="366" height="318" rx="12" fill="#1e293b" stroke="#4ade80" stroke-width="2.5"/>'
    '<text x="581" y="62" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle" fill="#86efac">GRADE 9: Set = 0</text>'
    '<text x="581" y="132" font-family="sans-serif" font-size="32" font-weight="bold" text-anchor="middle" fill="#f8fafc">x² − 5x = 0</text>'
    '<text x="581" y="204" font-family="sans-serif" font-size="32" font-weight="bold" text-anchor="middle" fill="#38bdf8">x(x − 5) = 0</text>'
    '<text x="581" y="280" font-family="sans-serif" font-size="32" font-weight="bold" text-anchor="middle" fill="#86efac">x = 0 or x = 5 ✔</text>'
    '</svg>'
)

DIAG_FRAC = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect width="780" height="350" rx="14" fill="#0f172a"/>'
    '<text x="390" y="48" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle" fill="#fde047">Clear Fractions: ×(x−2)(x+3) EVERYWHERE</text>'
    '<rect x="20" y="70" width="740" height="118" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>'
    '<text x="390" y="116" font-family="sans-serif" font-size="30" font-weight="bold" text-anchor="middle" fill="#f8fafc">6/(x−2) − 2/(x+3) = 1   (x ≠ 2, −3)</text>'
    '<text x="390" y="166" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle" fill="#93c5fd">6(x+3) − 2(x−2) = (x−2)(x+3)</text>'
    '<rect x="20" y="206" width="740" height="124" rx="12" fill="#14532d" stroke="#4ade80" stroke-width="2.5"/>'
    '<text x="390" y="252" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle" fill="#86efac">4x + 22 = x² + x − 6  ⇒  x²−3x−28 = 0</text>'
    '<text x="390" y="304" font-family="sans-serif" font-size="30" font-weight="bold" text-anchor="middle" fill="#fde047">(x−7)(x+4) = 0  ⇒  x = 7 or −4 ✔</text>'
    '</svg>'
)

DIAG_CIRCLE = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect width="780" height="350" rx="14" fill="#0f172a"/>'
    '<line x1="28" y1="175" x2="338" y2="175" stroke="#64748b" stroke-width="2"/>'
    '<line x1="175" y1="22" x2="175" y2="328" stroke="#64748b" stroke-width="2"/>'
    '<circle cx="175" cy="175" r="102" fill="none" stroke="#c084fc" stroke-width="3.5"/>'
    '<line x1="112" y1="300" x2="246" y2="42" stroke="#38bdf8" stroke-width="3.5"/>'
    '<circle cx="232" cy="90" r="7" fill="#4ade80"/>'
    '<circle cx="133" cy="268" r="7" fill="#4ade80"/>'
    '<text x="230" y="68" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac">(2.8, 4.6)</text>'
    '<text x="26" y="318" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac">(−2, −5)</text>'
    '<rect x="372" y="20" width="390" height="310" rx="12" fill="#1e293b" stroke="#a78bfa" stroke-width="2.5"/>'
    '<text x="567" y="66" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle" fill="#fde047">x²+y²=29 &amp; y=2x−1</text>'
    '<text x="567" y="124" font-family="sans-serif" font-size="28" text-anchor="middle" fill="#f8fafc">x² + (2x − 1)² = 29</text>'
    '<text x="567" y="182" font-family="sans-serif" font-size="28" text-anchor="middle" fill="#93c5fd">5x² − 4x − 28 = 0</text>'
    '<text x="567" y="242" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle" fill="#86efac">Sub in LINEAR eq!</text>'
    '<text x="567" y="300" font-family="sans-serif" font-size="28" text-anchor="middle" fill="#fca5a5">Not circle (±5 fake!)</text>'
    '</svg>'
)

DIAG_INEQ = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect width="780" height="350" rx="14" fill="#0f172a"/>'
    '<rect x="16" y="16" width="366" height="318" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>'
    '<text x="199" y="60" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle" fill="#93c5fd">(x+3)(x−5) &lt; 0</text>'
    '<line x1="40" y1="168" x2="358" y2="168" stroke="#64748b" stroke-width="2"/>'
    '<line x1="116" y1="168" x2="282" y2="168" stroke="#38bdf8" stroke-width="7"/>'
    '<path d="M 64 88 Q 199 278 334 88" fill="none" stroke="#f8fafc" stroke-width="3.2"/>'
    '<circle cx="116" cy="168" r="7" fill="#0f172a" stroke="#38bdf8" stroke-width="3.5"/>'
    '<circle cx="282" cy="168" r="7" fill="#0f172a" stroke="#38bdf8" stroke-width="3.5"/>'
    '<text x="199" y="248" font-family="sans-serif" font-size="28" text-anchor="middle" fill="#cbd5e1">Single Valley</text>'
    '<text x="199" y="302" font-family="sans-serif" font-size="30" font-weight="bold" text-anchor="middle" fill="#86efac">−3 &lt; x &lt; 5  ✔</text>'
    '<rect x="398" y="16" width="366" height="318" rx="12" fill="#1e293b" stroke="#f472b6" stroke-width="2.5"/>'
    '<text x="581" y="60" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle" fill="#fbcfe8">(x+3)(x−5) &gt; 0</text>'
    '<line x1="422" y1="168" x2="740" y2="168" stroke="#64748b" stroke-width="2"/>'
    '<line x1="422" y1="168" x2="498" y2="168" stroke="#f472b6" stroke-width="7"/>'
    '<line x1="664" y1="168" x2="740" y2="168" stroke="#f472b6" stroke-width="7"/>'
    '<path d="M 446 88 Q 581 278 716 88" fill="none" stroke="#f8fafc" stroke-width="3.2"/>'
    '<circle cx="498" cy="168" r="7" fill="#0f172a" stroke="#f472b6" stroke-width="3.5"/>'
    '<circle cx="664" cy="168" r="7" fill="#0f172a" stroke="#f472b6" stroke-width="3.5"/>'
    '<text x="581" y="248" font-family="sans-serif" font-size="28" text-anchor="middle" fill="#cbd5e1">Two Outer Tails</text>'
    '<text x="581" y="302" font-family="sans-serif" font-size="30" font-weight="bold" text-anchor="middle" fill="#fde047">x &lt; −3 or x &gt; 5 ✔</text>'
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
