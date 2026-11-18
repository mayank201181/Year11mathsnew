# "Grade Nine Or Bust" S01E01 "Upper Bound To Happen" (Topic: number-bounds-surds)
# Check with: python scripts/sitcom/lint_episode.py scripts/sitcom/episodes/number-bounds-surds.py

EP = dict(
    topic="number-bounds-surds",
    logline="Dad claims he broke sprint records by dividing upper bounds by upper bounds, summoning Sigma and the Chief Examiner over error intervals, recurring proofs, fractional indices, and surd conjugates.",
)

DIAG_BOUNDS = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 185">'
    '<rect x="12" y="10" width="496" height="165" rx="10" fill="#0f172a" fill-opacity="0.55" stroke="#38bdf8" stroke-width="2"/>'
    '<text x="260" y="36" fill="#fde047" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle">d = 100 m (nearest 10)   t = 10 s (nearest 1)</text>'
    '<line x1="60" y1="74" x2="460" y2="74" stroke="#94a3b8" stroke-width="2"/>'
    '<circle cx="120" cy="74" r="6" fill="#38bdf8"/>'
    '<circle cx="400" cy="74" r="6" fill="#0f172a" stroke="#4ade80" stroke-width="3"/>'
    '<line x1="120" y1="74" x2="400" y2="74" stroke="#4ade80" stroke-width="4"/>'
    '<text x="120" y="98" fill="#38bdf8" font-family="sans-serif" font-size="15" text-anchor="middle">LB = 95</text>'
    '<text x="260" y="64" fill="#f8fafc" font-family="sans-serif" font-size="15" text-anchor="middle">95 ≤ d &lt; 105</text>'
    '<text x="400" y="98" fill="#4ade80" font-family="sans-serif" font-size="15" text-anchor="middle">UB = 105</text>'
    '<text x="260" y="134" fill="#f87171" font-family="sans-serif" font-size="16" text-anchor="middle">WRONG: UB(d) ÷ UB(t) = 105 ÷ 10.5 = 10</text>'
    '<text x="260" y="160" fill="#86efac" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle">RIGHT: UB(d) ÷ LB(t) = 105 ÷ 9.5 = 11.05 m/s</text>'
    '</svg>'
)

DIAG_RECUR = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 175">'
    '<rect x="12" y="10" width="496" height="155" rx="10" fill="#0f172a" fill-opacity="0.55" stroke="#a78bfa" stroke-width="2"/>'
    '<rect x="255" y="22" width="180" height="66" rx="6" fill="#14532d" fill-opacity="0.7" stroke="#4ade80" stroke-width="1.5"/>'
    '<text x="245" y="48" fill="#f8fafc" font-family="monospace" font-size="20" text-anchor="end">1000x = 245.</text>'
    '<text x="260" y="48" fill="#86efac" font-family="monospace" font-size="20">454545...</text>'
    '<text x="245" y="78" fill="#f8fafc" font-family="monospace" font-size="20" text-anchor="end">-  10x =   2.</text>'
    '<text x="260" y="78" fill="#86efac" font-family="monospace" font-size="20">454545...</text>'
    '<line x1="70" y1="94" x2="450" y2="94" stroke="#fde047" stroke-width="2"/>'
    '<text x="260" y="122" fill="#fde047" font-family="sans-serif" font-size="20" font-weight="bold" text-anchor="middle">990x = 243   →   x = 243 / 990 = 27 / 110</text>'
    '<text x="260" y="150" fill="#cbd5e1" font-family="sans-serif" font-size="14" text-anchor="middle">Align the recurring tails right after the decimal point!</text>'
    '</svg>'
)

DIAG_INDICES = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 160">'
    '<rect x="12" y="10" width="496" height="140" rx="10" fill="#0f172a" fill-opacity="0.55" stroke="#fbbf24" stroke-width="2"/>'
    '<rect x="26" y="42" width="112" height="58" rx="8" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2"/>'
    '<text x="82" y="77" fill="#f8fafc" font-family="sans-serif" font-size="17" font-weight="bold" text-anchor="middle">(27/8)^(-2/3)</text>'
    '<text x="155" y="64" fill="#f87171" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Flip</text>'
    '<text x="155" y="84" fill="#fde047" font-family="sans-serif" font-size="20" text-anchor="middle">→</text>'
    '<rect x="172" y="42" width="106" height="58" rx="8" fill="#3b0764" stroke="#c084fc" stroke-width="2"/>'
    '<text x="225" y="77" fill="#f8fafc" font-family="sans-serif" font-size="17" font-weight="bold" text-anchor="middle">(8/27)^(2/3)</text>'
    '<text x="296" y="64" fill="#38bdf8" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Root</text>'
    '<text x="296" y="84" fill="#fde047" font-family="sans-serif" font-size="20" text-anchor="middle">→</text>'
    '<rect x="314" y="42" width="84" height="58" rx="8" fill="#064e3b" stroke="#34d399" stroke-width="2"/>'
    '<text x="356" y="77" fill="#f8fafc" font-family="sans-serif" font-size="17" font-weight="bold" text-anchor="middle">(2/3)^2</text>'
    '<text x="415" y="64" fill="#4ade80" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Power</text>'
    '<text x="415" y="84" fill="#fde047" font-family="sans-serif" font-size="20" text-anchor="middle">→</text>'
    '<rect x="432" y="42" width="62" height="58" rx="8" fill="#14532d" stroke="#86efac" stroke-width="2"/>'
    '<text x="463" y="78" fill="#fde047" font-family="sans-serif" font-size="20" font-weight="bold" text-anchor="middle">4/9</text>'
    '<text x="260" y="130" fill="#e2e8f0" font-family="sans-serif" font-size="14" text-anchor="middle">Flip for minus · Root for bottom · Power for top</text>'
    '</svg>'
)

DIAG_CONJUGATE = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 175">'
    '<rect x="12" y="10" width="496" height="155" rx="10" fill="#0f172a" fill-opacity="0.55" stroke="#4ade80" stroke-width="2"/>'
    '<text x="260" y="40" fill="#fde047" font-family="sans-serif" font-size="19" font-weight="bold" text-anchor="middle">12 / (3 + √5)  ×  (3 − √5) / (3 − √5)</text>'
    '<text x="260" y="78" fill="#7dd3fc" font-family="sans-serif" font-size="17" text-anchor="middle">Bottom: (3 + √5)(3 − √5) = 9 − 3√5 + 3√5 − 5 = 4</text>'
    '<text x="260" y="114" fill="#86efac" font-family="sans-serif" font-size="20" font-weight="bold" text-anchor="middle">Top ÷ Bottom: 12(3 − √5) / 4 = 3(3 − √5) = 9 − 3√5</text>'
    '<text x="260" y="146" fill="#cbd5e1" font-family="sans-serif" font-size="14" text-anchor="middle">Difference of Two Squares wipes out every surd in the denominator!</text>'
    '</svg>'
)

# ---------------- COLD OPEN ----------------
scene("park", [("vani", 260), ("dad", 580), ("mum", 900)], "EAST COAST PARK · SUNDAY SPRINT TRIALS")
L("dad", "Stop the press! One hundred metres to the nearest ten. Ten seconds to the nearest second. Call the Olympics!", mood="excited", shot="close", prop="phone")
L("vani", "Dad, a toddler on a scooter just overtook you.", mood="deadpan", shot="close")
L("dad", "Check my upper bound speed! Upper bound of distance is one hundred and five. Upper bound of time is ten point five.", mood="smug", shot="close")
L("dad", "One hundred and five divided by ten point five is ten metres per second! Pure science!", mood="happy", shot="close")
L("mum", "Vikram, your upper bound somehow stayed the exact same speed.", mood="eyeroll", shot="close")
freeze("UB ÷ UB = WRONG!", 2.4, narrator="Narrator: Dividing an upper bound by an upper bound is the fastest way to donate marks to Edexcel.")

confess("vani", "VANISHREE · YEAR ELEVEN · TANGLIN HIGHER MATHS SURVIVOR")
L("vani", "Higher Maths starts with bounds, recurring proofs, fractional indices, and surds. Dad treats all four like improv comedy.", mood="deadpan")
L("vani", "To make a fraction as large as possible, you divide by the smallest legal denominator, never the biggest.", mood="determined", gap=0.4)

title()

# ---------------- ACT 1: BOUNDS & EXAMINER ROAST ----------------
scene("living", [("vani", 250), ("dad", 560)])
sfx("poof")
poof("sigma", 880)
L("sigma", "Did somebody divide an upper bound by an upper bound? Step away from the stopwatch, sir.", mood="teach", shot="wide", prop="calculator")
L("sigma", "Write the error interval first: ninety five inclusive up to one hundred and five exclusive.", mood="teach", shot="close",
  boardClear=True, board="95 ≤ d < 105   and   9.5 ≤ t < 10.5", diagram=DIAG_BOUNDS)
L("vani", "Included at the bottom because halfway rounds up, strict less than at the top!", mood="happy", shot="close")
L("sigma", "Spot on! Speed is distance divided by time, so take upper bound of distance divided by lower bound of time.", mood="teach", shot="close",
  board="UB(d/t) = UB(d) ÷ LB(t) = 105 ÷ 9.5")
L("dad", "One hundred and five divided by nine point five is over eleven! Faster than Bolt!", mood="excited", shot="close")
L("vani", "And your lower bound is ninety five divided by ten point five. What if a number was truncated instead of rounded?", mood="thinking", shot="close",
  board="LB(d/t) = LB(d) ÷ UB(t) = 95 ÷ 10.5")
L("sigma", "Truncating four point seven chops digits off, so the interval runs from four point seven up to four point eight.", mood="teach", shot="close",
  boardClear=True, board="Truncated 4.7  →  4.7 ≤ x < 4.8")
L("dad", "Great! I just pick whichever bound flatters my calves!", mood="smug", shot="close")

sfx("buzzer")
poof("examiner", 1060)
L("examiner", "Zero marks! Chief Examiner speaking, and my red pen is ready!", mood="annoyed", shot="close", prop="book")
L("examiner", "When Edexcel asks for a suitable degree of accuracy, you must calculate both the upper bound and the lower bound!", mood="teach", shot="close",
  board="Suitable accuracy: find BOTH UB & LB!")
L("examiner", "Round both bounds to the highest accuracy where they match, and state that both bounds round to that same figure!", mood="determined", shot="close",
  board="Round to highest s.f. where UB & LB agree")
L("vani", "And listing all four individual bounds upfront locks in the first method mark!", mood="happy", shot="close")
L("examiner", "Music to my ears!", mood="smug", shot="close")
L("dad", "What about subtraction bounds, like perimeter minus length?", mood="thinking", shot="close")
L("examiner", "Cross-pair again! Upper bound of a minus b is upper bound of a minus lower bound of b!", mood="teach", shot="close",
  boardClear=True, board="UB(a − b) = UB(a) − LB(b)")
L("vani", "And lower bound of a minus b is lower bound of a minus upper bound of b!", mood="happy", shot="close",
  board="LB(a − b) = LB(a) − UB(b) ✔", gap=0.4)

# ---------------- ACT 2: RECURRING DECIMALS & STANDARD FORM ----------------
card("LATER AT UNCLE HOCK'S", "Recurring decimals and standard form traps.", 2.4)
scene("hawker", [("vani", 260), ("sigma", 620), ("uncle", 1000)])
L("uncle", "Vanishree! Bill splits into zero point two four five four five repeating! Can press calculator fraction button?", mood="excited", shot="close", prop="plate")
L("vani", "Never when it says prove algebraically, Uncle! Calculator-only scores zero.", mood="determined", shot="close")
L("sigma", "Align the tails! Notice two does not repeat, while four five repeats forever.", mood="teach", shot="close",
  boardClear=True, board="x = 0.2454545...", diagram=DIAG_RECUR)
L("vani", "Multiply by ten first so ten x equals two point four five four five repeating.", mood="happy", shot="close",
  board="10x = 2.4545...  |  1000x = 245.4545...")
L("vani", "Then one thousand x minus ten x gives nine hundred and ninety x equals two hundred and forty three!", mood="excited", shot="close",
  board="990x = 243  →  x = 27/110")
L("uncle", "Wah! Tail gone! Divide by nine for twenty seven over one hundred and ten!", mood="happy", shot="close")
L("sigma", "Now standard form: six times ten to the five multiplied by four times ten to the three gives twenty four times ten to the eight. Finished?", mood="teach", shot="close",
  boardClear=True, board="(6 × 10^5)(4 × 10^3) = 24 × 10^8 ❌")
L("vani", "Not yet! Front number must sit from one up to ten, so rewrite it as two point four times ten to the nine.", mood="smug", shot="close",
  board="= 2.4 × 10^9  (1 ≤ A < 10) ✔")
L("sigma", "And for adding or subtracting in standard form, match the powers of ten first!", mood="teach", shot="close",
  board="Add/Sub: match powers of 10 first!")
L("uncle", "So four point two times ten to the five plus eight point five times ten to the four is not twelve point seven!", mood="shock", shot="close")
L("vani", "Right! Rewrite as zero point eight five times ten to the five, then add for five point zero five times ten to the five!", mood="happy", shot="close",
  board="4.2×10^5 + 0.85×10^5 = 5.05×10^5", gap=0.4)

# ---------------- ACT 3: FRACTIONAL INDICES & SURD CONJUGATES ----------------
card("THAT EVENING", "Negative fractional powers and surd conjugates.", 2.4)
scene("kitchen", [("vani", 260), ("mum", 580), ("sigma", 900)])
L("mum", "Your dad saw twenty seven over eight to the power negative two thirds and claimed it must be negative.", mood="happy", shot="close")
L("vani", "Negative power means reciprocal, never negative! Use Flip, Root, Power!", mood="excited", shot="close",
  boardClear=True, board="(27/8)^(-2/3) : Flip → Root → Power", diagram=DIAG_INDICES)
L("sigma", "Minus flips it to eight over twenty seven. Denominator three takes the cube root, giving two thirds.", mood="teach", shot="close",
  board="Flip: 8/27  →  cbrt: 2/3")
L("vani", "Numerator two squares it to four ninths! Root first keeps the numbers tiny.", mood="happy", shot="close",
  board="Square: (2/3)^2 = 4/9 ✔")
L("sigma", "And for index equations like eight to the x equals four to the x plus three, rewrite both in base two and equate powers!", mood="teach", shot="close",
  boardClear=True, board="8^x = 4^(x+3) → 2^(3x) = 2^(2x+6) → x=6")
L("mum", "Wait, he also wrote root fifty plus root eighteen equals root sixty eight!", mood="annoyed", shot="close")
L("vani", "Never add under roots! Pull out square factors: five root two plus three root two!", mood="determined", shot="close",
  board="√50 + √18 = 5√2 + 3√2 = 8√2 ✔")
L("sigma", "Like surds add just like algebra to give eight root two!", mood="happy", shot="close")
L("mum", "And for twelve over three plus root five?", mood="eyeroll", shot="close")
L("vani", "Multiply top and bottom by the conjugate: three minus root five!", mood="determined", shot="close",
  boardClear=True, board="Conjugate of (3 + √5) is (3 − √5)", diagram=DIAG_CONJUGATE)
L("sigma", "Difference of two squares! Nine minus five leaves a pure integer four on the bottom!", mood="teach", shot="close",
  board="(3 + √5)(3 − √5) = 9 − 5 = 4")
L("vani", "Twelve divided by four is three, giving nine minus three root five!", mood="happy", shot="close",
  board="12(3 − √5) / 4 = 9 − 3√5 ✔")

confess("examiner", "CHIEF EXAMINER · GUARDIAN OF METHOD MARKS")
L("examiner", "Two final mark-savers! Squaring two root five squares both parts: four times five is twenty, never ten!", mood="teach",
  boardClear=True, board="(2√5)^2 = 4 × 5 = 20  (NOT 10!)")
L("examiner", "And on show-that surd questions, write every conjugate step explicitly or your calculator answer scores zero!", mood="determined",
  board="Show conjugate steps for full marks!", gap=0.4)

scene("living", [("vani", 260), ("mum", 580), ("dad", 900)])
L("dad", "Update! Both bounds of my jog agree to one significant figure: three metres per second!", mood="sad", shot="wide")
L("mum", "Brisk mall-walking pace, Olympian.", mood="smug", shot="close")
L("vani", "Hey, full marks for suitable accuracy though!", mood="happy", shot="two")
sfx("ding")
L("sigma", "Pause Challenge time! Let us lock in that Grade Nine!", mood="excited", shot="wide", offstage=True, gap=0.6)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Three 4MA1 Higher questions. Pause, solve, then check!", 2.8)

challenge(
    1,
    "a = 40 (nearest 10), b = 8 (nearest 1). Find UB of a / b.",
    "6",
    "UB(a) / LB(b) = 45 / 7.5 = 6",
    "Question one. Let a equal forty to the nearest ten, and b equal eight to the nearest integer. Find the upper bound of a divided by b.",
    "Six! Upper bound of a is forty five, divided by lower bound of b which is seven point five, giving six.",
)

challenge(
    2,
    "Evaluate (8 / 27)^(-2/3) as an improper fraction.",
    "9/4",
    "Flip -> (27/8)^(2/3) = (3/2)^2 = 9/4",
    "Question two. Work out the exact value of eight over twenty seven, raised to the power negative two thirds.",
    "Nine quarters! Flip to twenty seven over eight, cube root to get three halves, then square for nine over four.",
)

challenge(
    3,
    "Rationalise and simplify 8 / (3 - √5).",
    "6 + 2√5",
    "8(3 + √5) / (9 - 5) = 2(3 + √5) = 6 + 2√5",
    "Question three. Rationalise the denominator and simplify eight divided by three minus root five.",
    "Six plus two root five! Multiply top and bottom by three plus root five over denominator nine minus five, leaving two times three plus root five.",
)

end_card()
