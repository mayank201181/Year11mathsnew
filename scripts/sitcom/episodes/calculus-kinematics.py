# Episode 5 — "Zero Velocity, Maximum Drama" (Differentiation & Kinematics)

EP = dict(
    topic="calculus-kinematics",
    logline="Dad launches a drone indoors, Vani commits a fraction-differentiation crime, and the Chief Examiner materialises to rescue her stationary points and turnaround distances.",
)

DIAG_POWER = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="8" y="8" width="764" height="334" rx="14" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>'
    '<text x="390" y="54" font-family="sans-serif" font-size="30" font-weight="bold" fill="#38bdf8" text-anchor="middle">REWRITE BEFORE DIFFERENTIATING!</text>'
    '<rect x="24" y="78" width="356" height="244" rx="12" fill="#450a0a" stroke="#ef4444" stroke-width="2.5"/>'
    '<text x="202" y="124" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fca5a5" text-anchor="middle">NEVER DO THIS</text>'
    '<text x="202" y="188" font-family="sans-serif" font-size="28" fill="#fecaca" text-anchor="middle">y = (x³ − 4) / x²</text>'
    '<text x="202" y="256" font-family="sans-serif" font-size="28" font-weight="bold" fill="#ef4444" text-anchor="middle">dy/dx = 3x²/2x  ✘</text>'
    '<rect x="400" y="78" width="356" height="244" rx="12" fill="#052e16" stroke="#22c55e" stroke-width="2.5"/>'
    '<text x="578" y="124" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac" text-anchor="middle">SPLIT &amp; INDEX FIRST</text>'
    '<text x="578" y="182" font-family="sans-serif" font-size="28" fill="#bbf7d0" text-anchor="middle">y = x − 4x⁻²</text>'
    '<text x="578" y="242" font-family="sans-serif" font-size="30" font-weight="bold" fill="#4ade80" text-anchor="middle">dy/dx = 1 + 8x⁻³</text>'
    '<text x="578" y="296" font-family="sans-serif" font-size="28" fill="#86efac" text-anchor="middle">= 1 + 8 / x³  ✔</text>'
    '</svg>'
)

DIAG_TANGENT = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="8" y="8" width="764" height="334" rx="14" fill="#0f172a" stroke="#a855f7" stroke-width="2.5"/>'
    '<line x1="60" y1="298" x2="720" y2="298" stroke="#64748b" stroke-width="2"/>'
    '<line x1="110" y1="322" x2="110" y2="32" stroke="#64748b" stroke-width="2"/>'
    '<path d="M 105 278 Q 315 288 575 44" fill="none" stroke="#38bdf8" stroke-width="4.5"/>'
    '<line x1="190" y1="316" x2="605" y2="54" stroke="#4ade80" stroke-width="3.5"/>'
    '<line x1="278" y1="42" x2="478" y2="322" stroke="#f472b6" stroke-width="3.2" stroke-dasharray="9 6"/>'
    '<circle cx="388" cy="191" r="9" fill="#facc15"/>'
    '<text x="364" y="184" font-family="sans-serif" font-size="28" font-weight="bold" fill="#facc15" text-anchor="end">P(x₁, y₁)</text>'
    '<text x="742" y="114" font-family="sans-serif" font-size="28" font-weight="bold" fill="#4ade80" text-anchor="end">Tangent: m_T = dy/dx</text>'
    '<text x="300" y="64" font-family="sans-serif" font-size="28" font-weight="bold" fill="#f472b6">Normal: m_N = −1/m_T</text>'
    '</svg>'
)

DIAG_MAXMIN = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="8" y="8" width="764" height="334" rx="14" fill="#0f172a" stroke="#f59e0b" stroke-width="2.5"/>'
    '<path d="M 75 298 C 165 66, 285 66, 390 184 C 495 302, 615 302, 705 56" fill="none" stroke="#38bdf8" stroke-width="4.5"/>'
    '<line x1="150" y1="108" x2="310" y2="108" stroke="#f87171" stroke-width="3.2" stroke-dasharray="8 5"/>'
    '<line x1="470" y1="256" x2="630" y2="256" stroke="#4ade80" stroke-width="3.2" stroke-dasharray="8 5"/>'
    '<circle cx="230" cy="108" r="9" fill="#f87171"/>'
    '<circle cx="550" cy="256" r="9" fill="#4ade80"/>'
    '<text x="230" y="58" font-family="sans-serif" font-size="28" font-weight="bold" fill="#f87171" text-anchor="middle">LOCAL MAX (dy/dx=0)</text>'
    '<text x="230" y="156" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fca5a5" text-anchor="middle">d²y/dx² &lt; 0 (cap)</text>'
    '<text x="550" y="218" font-family="sans-serif" font-size="28" font-weight="bold" fill="#4ade80" text-anchor="middle">LOCAL MIN (dy/dx=0)</text>'
    '<text x="550" y="314" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac" text-anchor="middle">d²y/dx² &gt; 0 (cup)</text>'
    '</svg>'
)

DIAG_KIN = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="8" y="8" width="764" height="334" rx="14" fill="#0f172a" stroke="#22c55e" stroke-width="2.5"/>'
    '<text x="390" y="50" font-family="sans-serif" font-size="28" font-weight="bold" fill="#4ade80" text-anchor="middle">S → V=ds/dt → A=dv/dt  (Turns at v=0)</text>'
    '<line x1="70" y1="216" x2="710" y2="216" stroke="#94a3b8" stroke-width="3"/>'
    '<circle cx="135" cy="216" r="9" fill="#38bdf8"/>'
    '<text x="155" y="262" font-family="sans-serif" font-size="28" font-weight="bold" fill="#38bdf8" text-anchor="middle">Start s = 0</text>'
    '<path d="M 135 162 L 620 162 C 664 162, 664 108, 620 108 L 430 108" fill="none" stroke="#facc15" stroke-width="4.5"/>'
    '<polygon points="430,108 450,98 450,118" fill="#facc15"/>'
    '<circle cx="642" cy="135" r="9" fill="#f87171"/>'
    '<text x="545" y="92" font-family="sans-serif" font-size="28" font-weight="bold" fill="#f87171" text-anchor="middle">Rest v=0 (s=16m)</text>'
    '<text x="485" y="262" font-family="sans-serif" font-size="28" font-weight="bold" fill="#4ade80" text-anchor="middle">Finish s = 12 m</text>'
    '<text x="390" y="318" font-family="sans-serif" font-size="28" font-weight="bold" fill="#f8fafc" text-anchor="middle">Displ. = 12 m  vs  Distance = 16+4 = 20 m!</text>'
    '</svg>'
)

title()

# --- SCENE 1: Living room drone disaster & power rule ---
scene("living", [("vani", 330), ("dad", 790)], "Living Room · Sunday Afternoon")

L("dad", "Stand back, Vani! My mini-drone flies along y equals x cubed minus four, all over x squared!", mood="excited", shot="two", prop="tablet")
L("vani", "Dad, Mum's fruit bowl is right in the way! Let me differentiate that curve first.", mood="worried", shot="two", prop="book")
L("vani", "Top gives three x squared, bottom gives two x, so d y by d x is three x over two!", mood="smug", shot="close", board="Vani: (3x²) / (2x) ?!")
sfx("buzzer")
freeze("QUOTIENT CRIME!", dur=2.4, s="scratch", narrator="Never differentiate top and bottom separately.")
poof("sigma", 560)
L("sigma", "Drop the pencil! Differentiating numerator and denominator separately is illegal in Edexcel Maths!", mood="shock", shot="wide")
L("dad", "Professor Sigma! Did you just teleport out of my sofa cushions?", mood="shock", shot="two")
L("sigma", "Fake calculus summons me instantly. Every term must be a times x to the power n before you differentiate!", mood="teach", shot="close", boardClear=True, diagram=DIAG_POWER, board="Rule: y = axⁿ → dy/dx = naxⁿ⁻¹")
L("vani", "Oh! Split the fraction first! x cubed over x squared is x, minus four x to the negative two!", mood="thinking", shot="close", board="y = x − 4x⁻²")
L("sigma", "Now multiply by the power and subtract one. Watch the negative index!", mood="teach", shot="two")
L("vani", "Negative four times negative two is positive eight! And negative two minus one is negative three!", mood="excited", shot="close", board="dy/dx = 1 + 8x⁻³")
sfx("ding")
L("sigma", "Spot on! What about square root of x, and standalone constants?", mood="teach", shot="two")
L("vani", "Root x is x to the one half, giving one half x to the negative one half.", mood="happy", shot="close")
L("dad", "And standalone constants vanish to zero because flat lines have zero gradient!", mood="happy", shot="close")
L("sigma", "Expand brackets, split fractions, index form first! Ready for challenge one?", mood="determined", shot="close")

challenge(
    1,
    "Given y = 6/x² + 5x − 9, find dy/dx when x = 2",
    "7/2 (or 3.5)",
    "y = 6x⁻² + 5x − 9 → dy/dx = −12/x³ + 5 → −12/8 + 5 = 3.5",
    "Challenge one! Given y equals six over x squared, plus five x, minus nine, find d y by d x when x equals two.",
    "Six x to the negative two differentiates to negative twelve over x cubed, plus five. At x equals two, negative twelve over eight plus five gives three point five!",
)

# --- SCENE 2: Classroom — Tangents & Perpendicular Normals ---
scene("classroom", [("vani", 320), ("sigma", 760)], "Tanglin Study Pod · Ten Minutes Later")

L("vani", "Next question: find the normal to y equals x squared minus six x plus eleven at x equals four.", mood="thinking", shot="two", prop="book")
L("sigma", "Step one: plug x equals four into the curve y to get the y coordinate.", mood="teach", shot="two", boardClear=True, diagram=DIAG_TANGENT, board="At x = 4: y = 16 − 24 + 11 = 3")
L("vani", "Sixteen minus twenty-four plus eleven is three, so the point is four, three.", mood="determined", shot="close")
L("vani", "Differentiating gives d y by d x equals two x minus six.", mood="thinking", shot="close", board="dy/dx = 2x − 6 → m_T = 2")
L("sigma", "Evaluate that gradient at x equals four before touching y minus y one! Never put algebra into m!", mood="annoyed", shot="close")
L("vani", "At x equals four, tangent gradient is two. And the normal meets the tangent at ninety degrees!", mood="happy", shot="two")
L("sigma", "Perpendicular gradients multiply to negative one: flip it and negate it!", mood="teach", shot="close", board="Normal: y − 3 = −½(x − 4)")
L("vani", "Normal gradient is negative one half! Multiply by two: x plus two y minus ten equals zero!", mood="excited", shot="close")
sfx("ding")

confess("vani", "Vani's Exam Brain")
L("vani", "Need y? Plug into y. Need steepness? Plug into d y by d x. Need the normal? Negative reciprocal!", mood="smug", shot="close")

# --- SCENE 3: Kitchen — Stationary Points, Optimisation & Chief Examiner ---
scene("kitchen", [("vani", 260), ("mum", 620), ("sigma", 960)], "Kitchen · Baking Tray Crisis")

L("mum", "Vani, my folded pastry tray has volume V equals forty-eight x minus x cubed. What height x maximises it?", mood="happy", shot="wide", prop="plate")
L("vani", "At a turning point the curve is flat! Differentiating gives forty-eight minus three x squared.", mood="excited", shot="two", boardClear=True, diagram=DIAG_MAXMIN, board="V = 48x − x³ → dV/dx = 48 − 3x²")
L("vani", "Three x squared equals forty-eight, x squared is sixteen, so x equals four centimetres! Done!", mood="smug", shot="close")
sfx("scratch")
poof("examiner", 440)
L("examiner", "Freeze! Pearson Edexcel Chief Examiner here, and my red pen just took two marks!", mood="deadpan", shot="wide", prop="calculator")
L("vani", "Two marks?! How?! x equals four is right!", mood="shock", shot="two")
L("examiner", "First, write explicitly that d V by d x equals zero for a stationary point!", mood="annoyed", shot="close", board="State: dV/dx = 0 for stationary pt!")
L("examiner", "Second, prove it is a maximum and not a minimum! Never just assume it is a peak!", mood="teach", shot="close")
L("sigma", "Use the second derivative test, Vani! Differentiate d V by d x one more time.", mood="teach", shot="wide")
L("vani", "d two V by d x squared is negative six x! At x equals four, that is negative twenty-four, less than zero!", mood="determined", shot="close", board="d²V/dx² = −6x = −24 < 0 → MAX!")
L("examiner", "Negative second derivative bends down like a sad cap, proving a local maximum!", mood="happy", shot="two")
L("examiner", "Positive second derivative bends up like a smiley cup, proving a local minimum.", mood="teach", shot="two")
L("mum", "And plugging four back into V gives one hundred and twenty-eight cubic centimetres of tart!", mood="excited", shot="two", prop="plate")
sfx("ding")
L("examiner", "Also, in Show That questions, write every algebra line when eliminating h, or lose the proof mark!", mood="smug", shot="close")

challenge(
    2,
    "Find the minimum value of y = x² + 16/x for x > 0",
    "12",
    "dy/dx = 2x − 16/x² = 0 → 2x³ = 16 → x = 2 → y = 4 + 8 = 12",
    "Challenge two! Find the minimum value of y equals x squared plus sixteen over x, for positive x.",
    "Set d y by d x equal to two x minus sixteen over x squared equals zero, so two x cubed equals sixteen and x equals two. Substitute back into y: four plus eight equals twelve!",
)

# --- SCENE 4: Park — Kinematics S-V-A & The Reversal Trap ---
scene("park", [("vani", 290), ("dad", 640), ("sigma", 960)], "Neighbourhood Park · Drone Test Flight")

L("dad", "Safe in the park! The drone's displacement from O is s equals eight t minus t squared metres.", mood="excited", shot="wide", prop="tablet")
L("sigma", "Step down the S V A ladder by differentiating with respect to t!", mood="teach", shot="wide", boardClear=True, diagram=DIAG_KIN, board="s = 8t − t² → v = ds/dt = 8 − 2t")
L("vani", "Displacement s gives velocity v equals d s by d t, and velocity gives acceleration a equals d v by d t!", mood="happy", shot="two")
L("dad", "Why not use constant-acceleration SUVAT formulas?", mood="thinking", shot="two")
L("vani", "Because when s is cubic in t, acceleration changes every second! Only calculus works.", mood="determined", shot="two")
L("sigma", "Quick translation check: what do initially, at O, and instantaneous rest mean?", mood="teach", shot="close")
L("vani", "Initially is t equals zero! At O is s equals zero! Instantaneous rest is velocity v equals zero!", mood="determined", shot="close", board="Rest: v = 0 (at t = 4s, s = 16m)")
L("dad", "At t equals six seconds, s is forty-eight minus thirty-six, which is twelve metres. Total distance twelve!", mood="smug", shot="two", prop="tablet")
sfx("buzzer")
freeze("TURNAROUND TRAP!", dur=2.5, s="scratch", narrator="Check whether velocity hits zero inside the interval!")
L("vani", "Wait, Dad! Velocity eight minus two t hits zero at t equals four seconds! The drone turned around!", mood="shock", shot="close")
L("sigma", "From zero to four seconds it flew out to sixteen metres, then reversed four metres back to twelve!", mood="teach", shot="wide", board="Dist = |16 − 0| + |12 − 16| = 20 m")
L("dad", "Sixteen forward plus four back is twenty metres of total distance, even though net displacement is twelve!", mood="excited", shot="two")
L("vani", "And for maximum velocity, I differentiate v and set acceleration d v by d t equal to zero!", mood="happy", shot="close")
sfx("ding")
L("sigma", "Time for the final kinematics boss challenge!", mood="excited", shot="wide")

challenge(
    3,
    "Particle s = t³ − 6t² + 9t m. Find acceleration at t = 4 s",
    "12 m/s²",
    "v = 3t² − 12t + 9 → a = dv/dt = 6t − 12 → 6(4) − 12 = 12",
    "Final challenge! A particle has displacement s equals t cubed minus six t squared plus nine t metres. Find its acceleration at four seconds.",
    "Velocity d s by d t is three t squared minus twelve t plus nine, and acceleration d v by d t is six t minus twelve. At four seconds, twenty-four minus twelve gives twelve metres per second squared!",
)

L("vani", "Index form first, negative reciprocal normals, d two y by d x squared for nature, and split journeys at v equals zero!", mood="determined", shot="wide")
L("sigma", "Calculus conquered! Next episode: cones, frustums and circle theorems!", mood="happy", shot="wide")

end_card()
