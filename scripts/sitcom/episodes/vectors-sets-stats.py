# Season 1, Episode 8 — "Dense And Denser" (Vectors, Sets, Conditional Probability & Histograms)

EP = dict(
    topic="vectors-sets-stats",
    logline="Dad draws a misleading neighbourhood traffic chart, Uncle gambles curry puffs without replacement, and the Edexcel Examiner confiscates Vani's collinearity mark until she names the shared point.",
)

DIAG_VEC = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 190">'
    '<rect x="10" y="8" width="500" height="174" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>'
    '<line x1="65" y1="154" x2="195" y2="36" stroke="#38bdf8" stroke-width="3"/>'
    '<line x1="65" y1="154" x2="365" y2="154" stroke="#38bdf8" stroke-width="3"/>'
    '<line x1="195" y1="36" x2="365" y2="154" stroke="#94a3b8" stroke-width="2.2"/>'
    '<line x1="65" y1="154" x2="455" y2="50" stroke="#f43f5e" stroke-width="2.4" stroke-dasharray="6,4"/>'
    '<circle cx="65" cy="154" r="5" fill="#f8fafc"/>'
    '<circle cx="195" cy="36" r="5" fill="#f8fafc"/>'
    '<circle cx="365" cy="154" r="5" fill="#f8fafc"/>'
    '<circle cx="263" cy="83" r="5.5" fill="#fbbf24"/>'
    '<circle cx="455" cy="50" r="5.5" fill="#f43f5e"/>'
    '<text x="44" y="168" font-size="15" font-weight="700" fill="#f8fafc">O</text>'
    '<text x="186" y="26" font-size="15" font-weight="700" fill="#f8fafc">A</text>'
    '<text x="376" y="160" font-size="15" font-weight="700" fill="#f8fafc">B</text>'
    '<text x="272" y="77" font-size="13" font-weight="700" fill="#fbbf24">P (2 : 3)</text>'
    '<text x="464" y="54" font-size="14" font-weight="700" fill="#f43f5e">Q</text>'
    '<text x="112" y="88" font-size="14" font-weight="700" fill="#38bdf8">a</text>'
    '<text x="215" y="172" font-size="14" font-weight="700" fill="#38bdf8">b</text>'
    '</svg>'
)

DIAG_VENN = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 185">'
    '<rect x="12" y="8" width="496" height="168" rx="12" fill="#0f172a" stroke="#a78bfa" stroke-width="2"/>'
    '<text x="28" y="32" font-size="14" font-weight="700" fill="#e2e8f0">Total = 40</text>'
    '<circle cx="215" cy="96" r="62" fill="#38bdf8" fill-opacity="0.22" stroke="#38bdf8" stroke-width="2.5"/>'
    '<circle cx="305" cy="96" r="62" fill="#fbbf24" fill-opacity="0.22" stroke="#fbbf24" stroke-width="2.5"/>'
    '<text x="160" y="48" font-size="13" font-weight="700" fill="#38bdf8">Chilli (21)</text>'
    '<text x="336" y="48" font-size="13" font-weight="700" fill="#fbbf24">Lime (19)</text>'
    '<text x="172" y="101" text-anchor="middle" font-size="15" font-weight="700" fill="#f8fafc">21 - x</text>'
    '<text x="260" y="101" text-anchor="middle" font-size="16" font-weight="800" fill="#f43f5e">x = 6</text>'
    '<text x="348" y="101" text-anchor="middle" font-size="15" font-weight="700" fill="#f8fafc">19 - x</text>'
    '<text x="455" y="156" text-anchor="middle" font-size="14" font-weight="700" fill="#94a3b8">Outside = 6</text>'
    '</svg>'
)

DIAG_TREE = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 190">'
    '<rect x="10" y="8" width="500" height="174" rx="12" fill="#0f172a" stroke="#34d399" stroke-width="2"/>'
    '<line x1="45" y1="95" x2="175" y2="52" stroke="#f43f5e" stroke-width="2.5"/>'
    '<line x1="45" y1="95" x2="175" y2="138" stroke="#fbbf24" stroke-width="2.5"/>'
    '<text x="98" y="64" font-size="13" font-weight="700" fill="#f43f5e">4/10</text>'
    '<text x="98" y="134" font-size="13" font-weight="700" fill="#fbbf24">6/10</text>'
    '<text x="190" y="57" font-size="14" font-weight="800" fill="#f8fafc">Sardine</text>'
    '<text x="190" y="143" font-size="14" font-weight="800" fill="#f8fafc">Potato</text>'
    '<line x1="252" y1="52" x2="365" y2="32" stroke="#f43f5e" stroke-width="2"/>'
    '<line x1="252" y1="52" x2="365" y2="72" stroke="#fbbf24" stroke-width="2"/>'
    '<line x1="252" y1="138" x2="365" y2="118" stroke="#f43f5e" stroke-width="2"/>'
    '<line x1="252" y1="138" x2="365" y2="158" stroke="#fbbf24" stroke-width="2"/>'
    '<text x="305" y="37" font-size="12" font-weight="700" fill="#f43f5e">3/9</text>'
    '<text x="305" y="76" font-size="12" font-weight="700" fill="#fbbf24">6/9</text>'
    '<text x="305" y="122" font-size="12" font-weight="700" fill="#f43f5e">4/9</text>'
    '<text x="305" y="162" font-size="12" font-weight="700" fill="#fbbf24">5/9</text>'
    '<text x="378" y="36" font-size="12" font-weight="700" fill="#e2e8f0">SS = 12/90</text>'
    '<text x="378" y="76" font-size="12" font-weight="700" fill="#34d399">SP = 24/90</text>'
    '<text x="378" y="122" font-size="12" font-weight="700" fill="#34d399">PS = 24/90</text>'
    '<text x="378" y="162" font-size="12" font-weight="700" fill="#e2e8f0">PP = 30/90</text>'
    '</svg>'
)

DIAG_HIST = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">'
    '<rect x="10" y="8" width="500" height="184" rx="12" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>'
    '<line x1="68" y1="26" x2="68" y2="160" stroke="#e2e8f0" stroke-width="2"/>'
    '<line x1="68" y1="160" x2="480" y2="160" stroke="#e2e8f0" stroke-width="2"/>'
    '<rect x="68" y="108" width="80" height="52" fill="#38bdf8" fill-opacity="0.45" stroke="#38bdf8" stroke-width="2"/>'
    '<rect x="148" y="30" width="40" height="130" fill="#f43f5e" fill-opacity="0.45" stroke="#f43f5e" stroke-width="2"/>'
    '<rect x="188" y="82" width="120" height="78" fill="#34d399" fill-opacity="0.45" stroke="#34d399" stroke-width="2"/>'
    '<rect x="308" y="134" width="160" height="26" fill="#a78bfa" fill-opacity="0.45" stroke="#a78bfa" stroke-width="2"/>'
    '<text x="108" y="140" text-anchor="middle" font-size="11" font-weight="700" fill="#f8fafc">f=20</text>'
    '<text x="168" y="100" text-anchor="middle" font-size="11" font-weight="700" fill="#f8fafc">f=25</text>'
    '<text x="248" y="128" text-anchor="middle" font-size="11" font-weight="700" fill="#f8fafc">f=45</text>'
    '<text x="388" y="152" text-anchor="middle" font-size="11" font-weight="700" fill="#f8fafc">f=20 (FD=1)</text>'
    '<text x="68" y="178" text-anchor="middle" font-size="11" fill="#cbd5e1">0</text>'
    '<text x="148" y="178" text-anchor="middle" font-size="11" fill="#cbd5e1">10</text>'
    '<text x="188" y="178" text-anchor="middle" font-size="11" fill="#cbd5e1">15</text>'
    '<text x="308" y="178" text-anchor="middle" font-size="11" fill="#cbd5e1">30</text>'
    '<text x="468" y="178" text-anchor="middle" font-size="11" fill="#cbd5e1">50</text>'
    '</svg>'
)

# ---------------- COLD OPEN ----------------
scene("living", [("dad", 320), ("vani", 660), ("mum", 940)], "Tanglin Living Room · Sunday Evening")
L("dad", "Family emergency meeting! Look at this giant bar chart I drew for our condo council.", mood="excited", shot="wide", prop="tablet")
L("dad", "Twenty scooters zoomed past between ten and fifteen minutes, and twenty zoomed past between thirty and fifty minutes, so I drew both bars twenty centimetres tall!", mood="smug", shot="two")
L("vani", "Dad, that second interval is twenty minutes wide while the first one is only five minutes wide.", mood="deadpan", shot="close")
L("mum", "Your wide purple bar looks like a monster tsunami of scooters when it is actually four times quieter per minute!", mood="eyeroll", shot="two")
sfx("scratch")
freeze("RAW FREQUENCY CRIME", dur=2.4, narrator="Plotting raw frequency on unequal widths? Call Professor Sigma.")

title()

# ---------------- ACT 1: VECTORS & COLLINEARITY ----------------
scene("classroom", [("vani", 320), ("sigma", 820)], "Holo-Lab · Vector Routing & Proofs")
sfx("whoosh")
L("sigma", "Welcome to the Season Finale, Vani! Before we rescue your dad's histogram, let us lock down vector geometry.", mood="teach", shot="two", boardClear=True, diagram=DIAG_VEC, board="AB = OB - OA = b - a")
L("vani", "Right, going from A to B means walking backwards from A to O as negative a, then forwards from O to B as positive b.", mood="determined", shot="close")
L("sigma", "Spot on, destination minus start! Now look at point P splitting A B in the ratio two to three.", mood="teach", shot="two", board="AP = (2/5)(b - a)")
L("vani", "Wait, two to three means five equal parts altogether, not thirds! So A P is two fifths of b minus a.", mood="excited", shot="close")
L("sigma", "Exactly. Add that onto O A and O P simplifies to three fifths a plus two fifths b.", mood="happy", shot="two", board="OP = (3/5)a + (2/5)b")
L("vani", "And if point Q has position vector nine fifths a plus six fifths b, then O Q is simply three times O P. Boom, collinear, full marks!", mood="smug", shot="close")
sfx("poof")
poof("examiner", 570)
sfx("buzzer")
L("examiner", "Hold your pen right there, young lady! I am confiscating your final communication mark!", mood="annoyed", shot="wide", prop="book")
L("vani", "What?! I just proved O Q is three times O P!", mood="shock", shot="close")
L("examiner", "Showing one vector is a scalar multiple of another only proves those two segments are parallel, like railway tracks!", mood="teach", shot="close")
card("EXAMINER MARK-SCHEME TRAP", "Collinearity requires BOTH: Parallel (scalar multiple) AND a Shared Common Point!")
L("examiner", "On Edexcel Higher, unless you write that O Q is parallel to O P and they share the common point O, you drop the final mark every single time.", mood="smug", shot="two")
L("vani", "Parallel plus common point! O Q equals three O P so they are parallel, and they share common vertex O, therefore O, P and Q are collinear.", mood="determined", shot="close")
sfx("ding")
L("sigma", "Frame that sentence in gold! Try a quick magnitude warm-up before we grab snacks.", mood="happy", shot="two")

challenge(
    1,
    "Find the magnitude |v| of column vector v = (-5, 12).",
    "13",
    "sqrt((-5)^2 + 12^2) = sqrt(25 + 144) = sqrt(169) = 13",
    "Challenge one! Find the exact magnitude of the column vector negative five, twelve.",
    "Negative five squared is positive twenty five, plus one hundred and forty four gives one hundred and sixty nine, whose square root is thirteen!",
)

# ---------------- ACT 2: SETS, VENN & WITHOUT REPLACEMENT ----------------
scene("hawker", [("vani", 300), ("sigma", 620), ("uncle", 1000)], "Tanglin Hawker Stall · Sets & Dependent Trees")
L("uncle", "Aha, Vani! Forty regulars ordered snacks today: twenty one took chilli, nineteen took lime, and six took plain with neither.", mood="happy", shot="wide", prop="plate")
L("vani", "Let me draw a Venn diagram from the innermost overlap outward!", mood="excited", shot="two", boardClear=True, diagram=DIAG_VENN, board="n(C U L) = 40 - 6 = 34")
L("sigma", "Always subtract the outside six from forty first, leaving thirty four inside the union of Chilli and Lime.", mood="teach", shot="two", board="21 + 19 - x = 34 => x = 6")
L("vani", "Twenty one plus nineteen is forty, minus thirty four leaves an overlap of six regulars taking both chilli and lime!", mood="happy", shot="close")
L("uncle", "Sharp! And if I pick one lime lover at random, what is the conditional probability they also took chilli?", mood="thinking", shot="two")
L("vani", "Given they took lime, my denominator shrinks strictly to the nineteen lime people, NEVER all forty! So it is six over nineteen.", mood="determined", shot="close", board="P(C | L) = 6/19")
L("uncle", "Now test your luck on my mystery basket: four sardine puffs and six potato puffs, ten puffs altogether.", mood="smug", shot="wide")
L("uncle", "Eat two puffs without replacement! Surely getting both sardine is four tenths times four tenths?", mood="happy", shot="close")
sfx("buzzer")
L("vani", "Uncle, unless I regurgitate the first curry puff back into your basket, there are only three sardine puffs left out of nine!", mood="annoyed", shot="two", boardClear=True, diagram=DIAG_TREE, board="P(SS) = (4/10)(3/9) = 12/90")
L("sigma", "Without replacement drops both the total denominator and the picked puff's numerator by one.", mood="teach", shot="two", board="One each: SP + PS = 48/90")
L("vani", "And if you ask for one puff of each flavour, there are two valid orders: sardine then potato, OR potato then sardine!", mood="excited", shot="close")
L("sigma", "Twenty four ninetieths plus twenty four ninetieths makes forty eight ninetieths, which simplifies cleanly to eight fifteenths.", mood="happy", shot="two", board="Simplifies to 8/15")

confess("uncle", "Hawker Stall · Confession Cam")
L("uncle", "Keep fractions over ninety until the very end so all four tree branches add straight up to ninety over ninety. Pure kitchen magic!", mood="smug", shot="close")

challenge(
    2,
    "Bag: 3 red, 5 blue counters. Pick 2 without replacement. Find P(both red).",
    "3/28",
    "(3/8) * (2/7) = 6/56 = 3/28",
    "Challenge two! A bag holds three red and five blue counters. Two are picked without replacement. Find the probability that both are red, in simplest form.",
    "Three eighths times two sevenths gives six over fifty six, which simplifies to three over twenty eight!",
)

# ---------------- ACT 3: CUMULATIVE FREQUENCY & HISTOGRAMS ----------------
scene("living", [("dad", 260), ("vani", 560), ("sigma", 840), ("examiner", 1060)], "Living Room · Fixing Dad's Charts")
L("dad", "Okay team, I also plotted a cumulative frequency curve for eighty scooter speeds right at the midpoints of every interval!", mood="happy", shot="wide", prop="calculator")
L("examiner", "Midpoints on a cumulative frequency graph?! My red pen is weeping!", mood="shock", shot="close")
L("vani", "Dad! Mean uses midpoints, cumulative frequency plots at ceilings — the upper class boundaries!", mood="teach", shot="two", boardClear=True, board="Grouped Mean -> Midpoints", prop="tablet")
L("sigma", "Cumulative frequency asks how many scooters travelled at that speed or slower, which is only complete at the upper boundary.", mood="teach", shot="two", board="Cumul Freq -> Upper Bounds")
L("examiner", "And when comparing two cumulative frequency curves or box plots for two marks, give me median in context AND interquartile range in context!", mood="determined", shot="close", board="Smaller IQR = More Consistent")
L("vani", "Never say smaller interquartile range is more accurate — say the speeds were more consistent and less spread out!", mood="happy", shot="close")
L("dad", "Fine, fine! Now how do we fix my unequal-width scooter histogram?", mood="worried", shot="two")
L("sigma", "In a histogram, bar area equals frequency, so vertical height must be Frequency Density: frequency divided by class width!", mood="teach", shot="wide", boardClear=True, diagram=DIAG_HIST, board="FD = Frequency / Width")
L("vani", "Look at zero to ten with frequency twenty: width ten gives frequency density two.", mood="excited", shot="close")
L("vani", "Meanwhile thirty to fifty also has frequency twenty, but width twenty gives frequency density one — half as tall, twice as wide, identical area!", mood="determined", shot="two", board="Area = Width x FD = Freq")
L("dad", "Whoa, and the rush-hour spike between ten and fifteen has twenty five scooters in width five, shooting up to frequency density five!", mood="excited", shot="close")
L("examiner", "What if we ask how many scooters went faster than twenty kilometres per hour when the fifteen-to-thirty bar has frequency density three?", mood="smug", shot="two")
L("vani", "From twenty to thirty is width ten, times frequency density three gives thirty scooters, plus the twenty in the last bar makes fifty!", mood="happy", shot="close", board="Slice > 20: 10(3) + 20 = 50")
sfx("ding")

challenge(
    3,
    "Histogram class 15 <= x < 35 has frequency 50. Find its Frequency Density.",
    "2.5",
    "Width = 35 - 15 = 20; FD = 50 / 20 = 2.5",
    "Final challenge! On a histogram, the class from fifteen to thirty five has frequency fifty. Work out its frequency density.",
    "The class width is thirty five minus fifteen, which is twenty, and fifty divided by twenty gives two point five!",
)

L("examiner", "Common point stated, denominators reduced without replacement, upper bounds plotted, and frequency density mastered. Full marks approved!", mood="happy", shot="wide")
L("dad", "Next condo council meeting, I am bringing Frequency Density on a laser projector!", mood="excited", shot="two")
L("vani", "Season One complete! Edexcel Higher Paper One and Paper Two, bring it on!", mood="happy", shot="close")
sfx("ding")

end_card()
