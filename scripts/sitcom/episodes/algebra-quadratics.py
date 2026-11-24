# Episode 2 — "Square Up Or Shut Up" (Topic: algebra-quadratics)
# common.py is executed before this file in the same namespace.

EP = dict(
    topic="algebra-quadratics",
    logline="Dad commits an algebraic felony by cancelling x squared across a plus sign, triggering Coach Sigma and a ruthless Edexcel Examiner intervention.",
)

DIAG_CTS = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="8" y="8" width="764" height="334" rx="14" fill="#0f172a" stroke="#334155" stroke-width="2.5"/>'
    '<line x1="36" y1="150" x2="326" y2="150" stroke="#64748b" stroke-width="2"/>'
    '<line x1="88" y1="28" x2="88" y2="310" stroke="#64748b" stroke-width="2"/>'
    '<line x1="196" y1="28" x2="196" y2="262" stroke="#f87171" stroke-width="2" stroke-dasharray="6,5"/>'
    '<path d="M 106 38 Q 196 420 286 38" fill="none" stroke="#38bdf8" stroke-width="4"/>'
    '<circle cx="196" cy="229" r="7" fill="#f87171"/>'
    '<text x="210" y="56" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fca5a5">x = 3</text>'
    '<text x="196" y="302" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fca5a5" text-anchor="middle">Min (3, −7)</text>'
    '<rect x="348" y="22" width="410" height="306" rx="12" fill="#1e293b" stroke="#475569" stroke-width="2"/>'
    '<text x="553" y="68" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fbbf24" text-anchor="middle">2x² − 12x + 11</text>'
    '<text x="553" y="126" font-family="sans-serif" font-size="28" fill="#e2e8f0" text-anchor="middle">= 2(x² − 6x) + 11</text>'
    '<text x="553" y="184" font-family="sans-serif" font-size="28" fill="#e2e8f0" text-anchor="middle">= 2[(x−3)² − 9] + 11</text>'
    '<text x="553" y="244" font-family="sans-serif" font-size="30" font-weight="bold" fill="#4ade80" text-anchor="middle">= 2(x − 3)² − 7</text>'
    '<text x="553" y="302" font-family="sans-serif" font-size="28" fill="#94a3b8" text-anchor="middle">Inside lies · Out true</text>'
    '</svg>'
)

DIAG_FRAC = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="14" y="14" width="368" height="322" rx="14" fill="#450a0a" stroke="#ef4444" stroke-width="2.5"/>'
    '<text x="198" y="62" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fca5a5" text-anchor="middle">ILLEGAL: Term Cut</text>'
    '<text x="198" y="140" font-family="sans-serif" font-size="32" font-weight="bold" fill="#ffffff" text-anchor="middle">x² + 5x + 6</text>'
    '<line x1="76" y1="162" x2="320" y2="162" stroke="#ffffff" stroke-width="3"/>'
    '<text x="198" y="212" font-family="sans-serif" font-size="32" font-weight="bold" fill="#ffffff" text-anchor="middle">x² − 4</text>'
    '<line x1="98" y1="112" x2="146" y2="148" stroke="#ef4444" stroke-width="4"/>'
    '<line x1="142" y1="184" x2="188" y2="220" stroke="#ef4444" stroke-width="4"/>'
    '<text x="198" y="294" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fecaca" text-anchor="middle">DO NOT SPLIT + / −</text>'
    '<rect x="398" y="14" width="368" height="322" rx="14" fill="#052e16" stroke="#22c55e" stroke-width="2.5"/>'
    '<text x="582" y="62" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac" text-anchor="middle">LEGAL: Factorise!</text>'
    '<text x="582" y="140" font-family="sans-serif" font-size="30" font-weight="bold" fill="#ffffff" text-anchor="middle">(x + 2)(x + 3)</text>'
    '<line x1="454" y1="162" x2="710" y2="162" stroke="#ffffff" stroke-width="3"/>'
    '<text x="582" y="212" font-family="sans-serif" font-size="30" font-weight="bold" fill="#ffffff" text-anchor="middle">(x − 2)(x + 2)</text>'
    '<line x1="482" y1="112" x2="574" y2="148" stroke="#4ade80" stroke-width="3.5"/>'
    '<line x1="590" y1="184" x2="682" y2="220" stroke="#4ade80" stroke-width="3.5"/>'
    '<text x="582" y="294" font-family="sans-serif" font-size="28" font-weight="bold" fill="#4ade80" text-anchor="middle">= (x + 3) / (x − 2)</text>'
    '</svg>'
)

DIAG_PROOF = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="14" y="14" width="368" height="322" rx="14" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>'
    '<text x="198" y="60" font-family="sans-serif" font-size="28" font-weight="bold" fill="#38bdf8" text-anchor="middle">SUBJECT TWICE</text>'
    '<text x="198" y="118" font-family="sans-serif" font-size="28" fill="#e2e8f0" text-anchor="middle">y = (3x−5)/(2x+1)</text>'
    '<text x="198" y="176" font-family="sans-serif" font-size="28" fill="#e2e8f0" text-anchor="middle">2xy + y = 3x − 5</text>'
    '<text x="198" y="234" font-family="sans-serif" font-size="28" fill="#fbbf24" text-anchor="middle">y + 5 = x(3 − 2y)</text>'
    '<text x="198" y="296" font-family="sans-serif" font-size="28" font-weight="bold" fill="#4ade80" text-anchor="middle">x = (y+5)/(3−2y)</text>'
    '<rect x="398" y="14" width="368" height="322" rx="14" fill="#1e293b" stroke="#c084fc" stroke-width="2.5"/>'
    '<text x="582" y="60" font-family="sans-serif" font-size="28" font-weight="bold" fill="#d8b4fe" text-anchor="middle">ODD PROOF</text>'
    '<text x="582" y="118" font-family="sans-serif" font-size="28" fill="#e2e8f0" text-anchor="middle">2n − 1  and  2n + 1</text>'
    '<text x="582" y="176" font-family="sans-serif" font-size="28" fill="#e2e8f0" text-anchor="middle">(2n+1)² − (2n−1)²</text>'
    '<text x="582" y="234" font-family="sans-serif" font-size="28" fill="#fbbf24" text-anchor="middle">= (4n²+4n+1) − (...)</text>'
    '<text x="582" y="296" font-family="sans-serif" font-size="28" font-weight="bold" fill="#4ade80" text-anchor="middle">= 8n  (mult. of 8!)</text>'
    '</svg>'
)

# ------------------------------ COLD OPEN -----------------------------------
scene("living", [("vani", 320), ("dad", 820)], "Living Room · Sunday Revision")

L("vani", "Dad, step away from my Higher Algebra sheet. Every question here is booby-trapped.", mood="worried", shot="two", prop="book")
L("dad", "Relax! Algebra is just Snap with letters. Look: x squared plus five x plus six, over x squared minus four.", mood="smug", shot="close")
L("dad", "Cross out both x squareds! Five x plus six over negative four. Kettle on!", mood="happy", shot="close", board="(x² + 5x + 6) / (x² − 4)", boardClear=True)
sfx("buzzer")
freeze("ALGEBRAIC FELONY!", dur=2.5, s="scratch")

poof("sigma", 570)
L("sigma", "Drop the pen, sir! You just assassinated an innocent quadratic across a plus sign!", mood="shock", shot="wide")
L("dad", "Coach Sigma?! Were you hiding behind the sofa cushions again?", mood="worried", shot="two", prop="cushion")
L("sigma", "Terms joined by plus or minus are married, sir. Only multiplied factors can cancel!", mood="teach", shot="close", board="Married by + · Divorced by ×")
L("vani", "Told you! Coach, drill me on quadratics, fractions and proof before tomorrow's mock.", mood="determined", shot="two")

title()

# ---------------- ACT 1: EXPANDING, FACTORISING & SQUARES -------------------
scene("classroom", [("vani", 300), ("sigma", 800)], "Coach Sigma's Algebra Dojo")

L("sigma", "Round one: triple brackets! Expand two x minus three, times x plus four, times x minus one.", mood="teach", shot="two", board="(2x − 3)(x + 4)(x − 1)", boardClear=True)
L("vani", "Last week I multiplied all three at once and got nine messy terms and a headache.", mood="annoyed", shot="close", prop="book")
L("sigma", "Never leap! Two stages: simplify the first two brackets into one clean quadratic first.", mood="teach", shot="close", board="Stage 1: 2x² + 5x − 12")
L("vani", "Got it: two x minus three times x plus four simplifies to two x squared plus five x minus twelve.", mood="thinking", shot="close")
L("vani", "Multiply that by x minus one: two x cubed plus three x squared minus seventeen x plus twelve!", mood="excited", shot="two", board="= 2x³ + 3x² − 17x + 12")
sfx("ding")
L("sigma", "And when subtracting a squared bracket, keep that second expansion inside protective brackets until you flip every sign!", mood="teach", shot="close")

L("sigma", "Now reverse it: factorise six x squared minus eleven x minus ten.", mood="teach", shot="two", board="Factorise: 6x² − 11x − 10", boardClear=True)
L("vani", "No common factor first, so a c method! Six times negative ten is negative sixty.", mood="determined", shot="close")
L("vani", "Negative fifteen and positive four multiply to negative sixty and add to negative eleven!", mood="happy", shot="close", board="6x² − 15x + 4x − 10")
L("sigma", "Group in pairs: three x plus two, times two x minus five!", mood="excited", shot="two", board="= (3x + 2)(2x − 5)")
L("vani", "And two square terms with a minus, like nine x squared minus twenty-five y squared, split into three x minus five y times three x plus five y!", mood="happy", shot="close")

L("sigma", "Now complete the square on two x squared minus twelve x plus eleven!", mood="teach", shot="two", board="2(x − 3)² − 7 · Min (3, −7)", boardClear=True, diagram=DIAG_CTS)
L("vani", "Because of the two in front, I cannot halve negative twelve yet, right?", mood="thinking", shot="close")
L("sigma", "Right! Factor two out of the x terms only, keeping eleven outside the shield: two lots of x squared minus six x, plus eleven.", mood="teach", shot="close")
L("vani", "Inside becomes x minus three squared, minus nine. Then the outer two multiplies BOTH inner parts!", mood="determined", shot="close")
L("sigma", "Two times negative nine is negative eighteen, plus eleven gives negative seven!", mood="excited", shot="two")
L("vani", "Two lots of x minus three squared, minus seven! Inside lies, outside tells the truth: minimum at three, negative seven!", mood="happy", shot="close")

confess("vani", "Vani's Revision Confessional")
L("vani", "Three mocks in a row I forgot to multiply that subtracted square by the outer number. Outer shield brackets just saved my grade!", mood="smug", shot="close")

challenge(
    1,
    "Find the minimum turning point of y = 2x² − 8x + 3",
    "(2, −5)",
    "2(x − 2)² − 8 + 3 = 2(x − 2)² − 5 → (2, −5)",
    "Pause and try it! Complete the square to find the minimum turning point of y equals two x squared minus eight x plus three.",
    "Factor out two to get two lots of x minus two squared, minus eight, plus three. That simplifies to two lots of x minus two squared minus five, giving vertex two, comma negative five!",
)

# ---------------- ACT 2: HAWKER STALL ALGEBRAIC FRACTIONS -------------------
scene("hawker", [("vani", 260), ("sigma", 600), ("uncle", 1000)], "Uncle's Hawker Stall · Study Break")

L("vani", "One plate of crispy buns please, Uncle! Brain fuel emergency.", mood="happy", shot="wide", prop="plate")
L("uncle", "No buns without clean algebra! Fix your father's fraction: x squared plus five x plus six over x squared minus four.", mood="smug", shot="two", board="Factorise BEFORE cancelling!", boardClear=True, diagram=DIAG_FRAC)
L("vani", "Factorise top into x plus two times x plus three, and bottom into x minus two times x plus two.", mood="determined", shot="close")
L("vani", "Now x plus two is a multiplied factor, so it cancels to leave x plus three over x minus two!", mood="excited", shot="two", board="= (x + 3) / (x − 2)")
sfx("ding")

L("uncle", "Now earn the chilli sauce: four over x minus two, minus the fraction x plus eighteen over x squared plus x minus six!", mood="teach", shot="two", board="4/(x−2) − (x+18)/(x²+x−6)", boardClear=True)
L("sigma", "Factorise that quadratic denominator first — never multiply denominators blindly!", mood="teach", shot="close")
L("vani", "Wait — x squared plus x minus six is x minus two times x plus three! It already contains x minus two!", mood="excited", shot="close", board="LCD = (x − 2)(x + 3)")
L("uncle", "Scale the first fraction by x plus three, and guard x plus eighteen with brackets!", mood="determined", shot="two")
L("vani", "Four x plus twelve, minus x minus eighteen, simplifies to three x minus six!", mood="thinking", shot="close", board="Top: 3x − 6 = 3(x − 2)")
L("sigma", "Do not stop one line early — check if that numerator factorises!", mood="shock", shot="two")
L("vani", "Three lots of x minus two! Cancel x minus two to finish on three over x plus three!", mood="happy", shot="wide", board="Final: 3 / (x + 3)")
sfx("ding")
L("uncle", "Double chilli sauce unlocked! Stopping before that final cancel costs thousands of students full marks.", mood="happy", shot="two", prop="plate")

challenge(
    2,
    "Simplify fully: (3x² − 12) / (x² + 5x + 6)",
    "3(x−2)/(x+3)",
    "3(x−2)(x+2) / ((x+2)(x+3)) = 3(x−2)/(x+3)",
    "Your turn! Simplify three x squared minus twelve, all over x squared plus five x plus six.",
    "Factor the top as three times x minus two times x plus two, and the bottom as x plus two times x plus three. Cancel x plus two to get three lots of x minus two, over x plus three!",
)

# ------------ ACT 3: EXAMINER ROAST, REARRANGING & PROOF --------------------
scene("classroom", [("vani", 260), ("sigma", 600), ("examiner", 960)], "Mock Exam Tribunal")

sfx("door")
L("examiner", "Good afternoon. My red pen from Edexcel headquarters is starving.", mood="deadpan", shot="wide", prop="tablet")
L("vani", "An actual Chief Examiner?! Coach, nobody mentioned a boss fight!", mood="worried", shot="two")
L("examiner", "Every summer, three identical blunders wreck Higher Grade Nine scripts.", mood="annoyed", shot="close")
L("examiner", "Blunder one: crossing out x in x plus three over x to write three or four. Instant zero.", mood="eyeroll", shot="close", board="Trap 1: (x + 3)/x ≠ 3", boardClear=True)
L("examiner", "Blunder two: completing the square without factoring out a first, or forgetting to multiply the subtracted square by a.", mood="deadpan", shot="close", board="Trap 2: Multiply −p² by a!")
L("examiner", "Blunder three: asked to prove a rule for all odd integers, candidates test three, five and seven and write pattern continues!", mood="shock", shot="two", board="Trap 3: Examples ≠ Proof!")
sfx("trombone")

L("sigma", "Show her how we nail rearranging twice and algebraic proof, Vani!", mood="determined", shot="two", board="CFFD & Parity Proof", boardClear=True, diagram=DIAG_PROOF)
L("examiner", "First: make x the subject of y equals three x minus five, over two x plus one.", mood="teach", shot="two")
L("vani", "Clear, Collect, Factorise, Divide! Multiply up: two x y plus y equals three x minus five.", mood="determined", shot="close")
L("vani", "Collect x terms on one side: y plus five equals three x minus two x y.", mood="thinking", shot="close")
L("vani", "Factorise x out so two x's merge into one: x bracket three minus two y. Divide to get y plus five over three minus two y!", mood="excited", shot="two")
sfx("ding")

L("examiner", "Clean! Now prove algebraically that the difference between the squares of two consecutive odd integers is a multiple of eight.", mood="teach", shot="two")
L("vani", "Let n be any integer, so consecutive odds are two n minus one and two n plus one.", mood="determined", shot="close")
L("vani", "Expand with brackets: four n squared plus four n plus one, minus bracket four n squared minus four n plus one.", mood="thinking", shot="close")
L("vani", "Squares and ones cancel, leaving eight n! Since n is an integer, eight n is always a multiple of eight!", mood="happy", shot="wide")
L("examiner", "Spotless parity, clean signs, factored multiple, clear conclusion. My red pen is officially unemployed.", mood="happy", shot="two")

challenge(
    3,
    "Make x the subject of y = (4x + 3) / (x − 2)",
    "(2y+3)/(y−4)",
    "xy − 2y = 4x + 3 → x(y − 4) = 2y + 3",
    "Final challenge! Make x the subject of y equals four x plus three, all over x minus two.",
    "Clear the fraction to get x y minus two y equals four x plus three. Collect x terms as x times y minus four equals two y plus three, then divide to get two y plus three, over y minus four!",
)

# ------------------------------ TAG SCENE -----------------------------------
scene("living", [("vani", 280), ("mum", 620), ("dad", 960)], "Living Room · That Evening")

L("mum", "Pop quiz for your father after today's crime scene: simplify x plus three over x!", mood="smug", shot="wide", prop="calculator")
L("dad", "Nice try! Those top terms are married by a plus sign. It stays x plus three over x!", mood="determined", shot="two")
L("vani", "Character development! Next up, equations and inequalities — Grade Nine, here we come!", mood="happy", shot="two")

end_card()
