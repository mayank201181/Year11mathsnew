import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "vectors-sets-stats-m1",
    title: "MCQ Paper 1 — Core Foundations & Notation",
    questions: [
      {
        kind: "mcq",
        id: "vectors-sets-stats-m1-q01",
        question:
          "Given the column vectors {{p = (3, -2)}} and {{q = (-1, 5)}}, work out {{2p - 3q}}.",
        options: ["{{(9, 11)}}", "{{(3, -19)}}", "{{(3, 11)}}", "{{(9, -19)}}"],
        answerIndex: 3,
        explanation:
          "{{2p = (6, -4)}} and {{3q = (-3, 15)}}. Subtracting component-by-component gives {{(6 - (-3), -4 - 15) = (9, -19)}}. {{(3, -19)}} comes from forgetting that {{6 - (-3) = +9}}.",
        difficulty: "warmup",
        guideRef: "vector-geometry-proofs",
        hints: ["First multiply {{p}} by 2 and {{q}} by 3.", "Watch the double negative in the horizontal component: {{6 - (-3)}}."],
        strategy: "Work component by component",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m1-q02",
        question:
          "Find the magnitude (length) of the column vector {{v = (-8, 15)}}.",
        options: ["{{13}}", "{{7}}", "{{17}}", "{{23}}"],
        answerIndex: 2,
        explanation:
          "By Pythagoras, {{|v| = sqrt((-8)^2 + 15^2) = sqrt(64 + 225) = sqrt(289) = 17}}. {{13}} comes from typing {{-8^2 = -64}} without brackets around {{-8}}, giving {{sqrt(225 - 64)}}.",
        difficulty: "warmup",
        guideRef: "vector-geometry-proofs",
        hints: ["Use Pythagoras' theorem {{sqrt(x^2 + y^2)}}.", "Remember squaring {{-8}} gives {{+64}}, not {{-64}}."],
        strategy: "Apply 2D Pythagoras",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m1-q03",
        question:
          "In triangle {{OAB}}, {{OA = a}} and {{OB = b}}. Point {{P}} lies on {{AB}} such that {{AP : PB = 3 : 2}}. Express {{OP}} in terms of {{a}} and {{b}}.",
        options: ["{{(3/5)a + (2/5)b}}", "{{a + (3/2)(b - a)}}", "{{(2/5)a - (3/5)b}}", "{{(2/5)a + (3/5)b}}"],
        answerIndex: 3,
        explanation:
          "{{AB = b - a}} and {{AP = (3/5)AB}} since there are {{3 + 2 = 5}} parts altogether. Thus {{OP = OA + AP = a + (3/5)(b - a)=(2/5)a + (3/5)b}}. Using {{3/2}} instead of {{3/5}} divides by the second ratio part rather than the total parts.",
        difficulty: "core",
        guideRef: "vector-geometry-proofs",
        hints: [
          "First find {{AB}} in terms of {{a}} and {{b}}.",
          "With ratio {{3 : 2}}, {{AP}} is {{3/5}} of {{AB}}, then use {{OP = OA + AP}}.",
        ],
        strategy: "Route nose-to-tail through A",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m1-q04",
        question:
          "Given {{ξ = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}}}, {{A = {2, 3, 5, 7}}}, and {{B = {1, 3, 5, 7, 9}}}, find {{n(A' ∩ B)}}.",
        options: ["{{6}}", "{{3}}", "{{2}}", "{{5}}"],
        answerIndex: 2,
        explanation:
          "{{A' ∩ B}} means elements in {{B}} that are NOT in {{A}}. Removing {{3, 5, 7}} from {{B}} leaves `{1, 9}`, which contains {{2}} elements. {{3}} is {{n(A ∩ B)}}, the trap of ignoring the complement dash.",
        difficulty: "warmup",
        guideRef: "sets-venn-diagrams",
        hints: ["{{A'}} means not in {{A}}, and {{∩}} means in both.", "Which members of {{B}} are NOT prime numbers in {{A}}?"],
        strategy: "Filter elements step by step",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m1-q05",
        question:
          "In a universal set {{ξ}} with {{n(ξ) = 45}}, {{n(A) = 24}}, {{n(B) = 19}}, and {{n((A ∪ B)') = 8}}. Find {{n(A ∩ B)}}.",
        options: ["{{8}}", "{{2}}", "{{6}}", "{{14}}"],
        answerIndex: 2,
        explanation:
          "Since {{8}} elements lie outside both sets, {{n(A ∪ B)=45 - 8 = 37}}. By inclusion–exclusion, {{n(A ∩ B)=24 + 19 - 37 = 6}}. {{2}} is the trap of computing {{45 - (24 + 19)}} while forgetting the {{8}} outside.",
        difficulty: "core",
        guideRef: "sets-venn-diagrams",
        hints: [
          "First subtract the {{8}} outside elements from {{45}} to get {{n(A ∪ B)}}.",
          "Now use {{n(A)+n(B)-n(A ∩ B)=n(A ∪ B)}}.",
        ],
        strategy: "Inclusion–exclusion with outside region",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m1-q06",
        question:
          "Which set notation represents the shaded Venn region containing elements that belong to set {{P}} **only** (in {{P}}, and not in {{Q}})?",
        options: ["{{(P ∩ Q)'}}", "{{P ∩ Q'}}", "{{P ∪ Q'}}", "{{P' ∩ Q}}"],
        answerIndex: 1,
        explanation:
          "\"In {{P}} AND not in {{Q}}\" translates directly to {{P ∩ Q'}}. {{(P ∩ Q)'}} means everything outside the central lens (including outside {{P}} altogether), which is a classic Venn shading trap.",
        difficulty: "warmup",
        guideRef: "sets-venn-diagrams",
        hints: ["Replace 'AND' with {{∩}} and 'not in Q' with {{Q'}}."],
        strategy: "Translate English connectives to set symbols",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m1-q07",
        question:
          "A bag contains 5 red beads and 3 green beads. Two beads are taken at random **without replacement**. Find the probability that both beads are red.",
        options: ["{{25/64}}", "{{9/15}}", "{{5/14}}", "{{5/16}}"],
        answerIndex: 2,
        explanation:
          "First bead red is {{5/8}}; with one red removed, 4 red remain out of 7 beads, so {{(5/8) * (4/7) = 20/56 = 5/14}}. {{25/64}} assumes replacement ({{(5/8)^2}}), and {{5/16}} reduces the numerator to 4 while forgetting to reduce the denominator from 8 to 7.",
        difficulty: "core",
        guideRef: "conditional-probability-trees",
        hints: [
          "There are 8 beads at the start.",
          "After picking 1 red bead without replacement, how many red beads and how many total beads remain?",
        ],
        strategy: "Update both numerator and denominator",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m1-q08",
        question:
          "A pouch holds 4 white counters and 5 black counters. Two counters are drawn at random **without replacement**. What is the probability of getting **one counter of each colour**?",
        options: ["{{40/81}}", "{{4/9}}", "{{5/18}}", "{{5/9}}"],
        answerIndex: 3,
        explanation:
          "There are TWO valid orders — White then Black OR Black then White: {{(4/9)*(5/8) + (5/9)*(4/8) = 20/72 + 20/72 = 40/72 = 5/9}}. {{5/18}} ({{20/72}}) is the classic Edexcel trap of calculating only WB and forgetting BW.",
        difficulty: "core",
        guideRef: "conditional-probability-trees",
        hints: [
          "List the two possible orders that give one white and one black.",
          "Work out {{P(WB) + P(BW)}} using denominators 9 then 8.",
        ],
        strategy: "Sum both orders (WB + BW)",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m1-q09",
        question:
          "In a group of 60 students, 25 play tennis, 30 swim, and 10 both play tennis and swim. Given that a randomly chosen student swims, what is the probability that this student also plays tennis?",
        options: ["{{2/11}}", "{{1/3}}", "{{2/5}}", "{{1/6}}"],
        answerIndex: 1,
        explanation:
          "\"Given that the student swims\" restricts the denominator to the {{30}} swimmers, of whom {{10}} also play tennis: {{P(T | S) = 10/30 = 1/3}}. {{1/6}} ({{10/60}}) wrongly uses the entire group instead of the condition.",
        difficulty: "core",
        guideRef: "conditional-probability-trees",
        hints: [
          "Conditional probability restricts the sample space to the 30 swimmers.",
          "Divide {{n(\"tennis and swim\")}} by {{n(\"swim\")}}.",
        ],
        strategy: "Restrict denominator to the given set",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m1-q10",
        question:
          "In a cumulative frequency table, the class {{20 < t <= 35}} has cumulative frequency {{48}}. Which point should be plotted on the cumulative frequency graph for this row?",
        options: ["{{(27.5, 48)}}", "{{(15, 48)}}", "{{(35, 48)}}", "{{(20, 48)}}"],
        answerIndex: 2,
        explanation:
          "Cumulative frequency counts values less than or equal to the **upper class boundary**, so plot at {{(35, 48)}}. {{(27.5, 48)}} uses the midpoint — midpoints are for grouped mean, never cumulative frequency!",
        difficulty: "warmup",
        guideRef: "cumulative-frequency-quartiles",
        hints: ["Cumulative frequency answers 'how many are <= upper limit?'."],
        strategy: "Plot CF at upper boundaries",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m1-q11",
        question:
          "A cumulative frequency curve is drawn for {{120}} sunflowers. Reading across gives {{Q_1 = 18}} cm and {{Q_3 = 43}} cm. What is the interquartile range, and at what cumulative frequency value was {{Q_3}} read?",
        options: ["IQR = {{25}} cm, read at CF = {{90}}", "IQR = {{25}} cm, read at CF = {{30}}", "IQR = {{61}} cm, read at CF = {{90}}", "IQR = {{25}} cm, read at CF = {{75}}"],
        answerIndex: 0,
        explanation:
          "{{IQR = Q_3 - Q_1 = 43 - 18 = 25}} cm, and {{Q_3}} sits three-quarters of the way up {{N = 120}}, which is {{(3/4) * 120 = 90}}. Reading at CF = {{75}} confuses {{75%}} of {{120}} with the raw number {{75}}!",
        difficulty: "core",
        guideRef: "cumulative-frequency-quartiles",
        hints: [
          "{{IQR = Q_3 - Q_1}}.",
          "Three-quarters of {{120}} is NOT {{75}} — calculate {{0.75 * 120}}.",
        ],
        strategy: "Take 3N/4 of the actual total N",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m1-q12",
        question:
          "Masses {{m}} (kg) of 20 suitcases: {{0 < m <= 10}} ({{f = 5}}), {{10 < m <= 20}} ({{f = 9}}), {{20 < m <= 40}} ({{f = 6}}). Work out an estimate for the mean mass.",
        options: ["{{113.3}} kg", "{{23.5}} kg", "{{15}} kg", "{{17}} kg"],
        answerIndex: 3,
        explanation:
          "Midpoints are {{5}}, {{15}}, and {{30}}. Then {{sum(f * x) = 5(5) + 9(15) + 6(30) = 25 + 135 + 180 = 340}}. Dividing by total frequency {{20}} gives {{340 / 20 = 17}} kg. {{113.3}} kg comes from dividing {{340}} by {{3}} rows instead of {{20}} suitcases!",
        difficulty: "core",
        guideRef: "cumulative-frequency-quartiles",
        hints: [
          "Find each interval's midpoint ({{5}}, {{15}}, and {{30}} — notice the third class has width 20!).",
          "Divide {{sum(f * x)}} by total frequency {{20}}.",
        ],
        strategy: "Multiply midpoints by frequencies",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m1-q13",
        question:
          "In a grouped table for a histogram, the class {{15 <= t < 35}} has frequency {{50}}. What is its **Frequency Density**?",
        options: ["{{1.43}}", "{{50}}", "{{2.0}}", "{{2.5}}"],
        answerIndex: 3,
        explanation:
          "Class width is {{35 - 15 = 20}}, so {{FD = 50 / 20 = 2.5}}. {{1.43}} ({{50/35}}) divides by the upper bound instead of the class width.",
        difficulty: "warmup",
        guideRef: "histograms-frequency-density",
        hints: ["First find the class width {{35 - 15}}, then divide frequency by class width."],
        strategy: "FD = Frequency ÷ Class Width",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m1-q14",
        question:
          "On a histogram, the bar for {{20 <= m < 45}} has a Frequency Density of {{1.8}}. How many items lie in this class?",
        options: ["{{13.9}}", "{{45}}", "{{81}}", "{{36}}"],
        answerIndex: 1,
        explanation:
          "Frequency equals bar area = {{Width * FD = (45 - 20) * 1.8 = 25 * 1.8 = 45}}. {{36}} multiplies by the lower bound {{20}}, and {{13.9}} divides {{25 / 1.8}} instead of multiplying.",
        difficulty: "warmup",
        guideRef: "histograms-frequency-density",
        hints: ["In a histogram, area of bar = class width × frequency density."],
        strategy: "Area = Width × FD",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m1-q15",
        question:
          "In a histogram, the interval {{10 <= x < 25}} contains {{36}} items. Estimate how many items lie in the sub-interval {{15 <= x < 25}}.",
        options: ["{{36}}", "{{12}}", "{{21.6}}", "{{24}}"],
        answerIndex: 3,
        explanation:
          "The class width is {{25 - 10 = 15}}, so {{FD = 36 / 15 = 2.4}}. The sub-interval {{15 <= x < 25}} has width {{10}}, giving {{10 * 2.4 = 24}} items (two-thirds of the bar). {{12}} finds {{10 <= x < 15}} instead.",
        difficulty: "core",
        guideRef: "histograms-frequency-density",
        hints: [
          "Find the Frequency Density of {{10 <= x < 25}} (or notice what fraction of width {{15}} is spanned by {{15}} to {{25}}).",
          "Multiply width {{10}} by the Frequency Density.",
        ],
        strategy: "Take proportional bar area",
      },
    ],
  },
  {
    id: "vectors-sets-stats-m2",
    title: "MCQ Paper 2 — Multi-Step Higher Exam Traps",
    questions: [
      {
        kind: "mcq",
        id: "vectors-sets-stats-m2-q01",
        question:
          "Relative to origin {{O}}, {{OA = 2a + b}} and {{OB = 5a - 3b}}. Find {{AB}} in terms of {{a}} and {{b}}.",
        options: ["{{-3a + 4b}}", "{{7a - 2b}}", "{{3a - 2b}}", "{{3a - 4b}}"],
        answerIndex: 3,
        explanation:
          "{{AB = OB - OA = (5a - 3b)-(2a + b)=3a - 4b}}. {{-3a + 4b}} computes {{OA - OB}} (actually {{BA}}), and {{3a - 2b}} forgets to distribute the minus sign onto {{+b}}.",
        difficulty: "core",
        guideRef: "vector-geometry-proofs",
        hints: [
          "Use {{AB = OB - OA}} (destination minus start).",
          "Put brackets around {{(2a + b)}} before subtracting.",
        ],
        strategy: "Destination minus start with brackets",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m2-q02",
        question: "Which of the following vectors is parallel to {{6a - 9b}}?",
        options: ["{{3a - 6b}}", "{{4a - 6b}}", "{{6a + 9b}}", "{{9a - 6b}}"],
        answerIndex: 1,
        explanation:
          "Factorising gives {{6a - 9b = 3(2a - 3b)}} and {{4a - 6b = 2(2a - 3b) = (2/3)(6a - 9b)}}, a non-zero scalar multiple so they are parallel. None of the other vectors share the {{2 : -3}} coefficient ratio.",
        difficulty: "core",
        guideRef: "vector-geometry-proofs",
        hints: [
          "Factorise {{6a - 9b = 3(2a - 3b)}}.",
          "Look for another scalar multiple of {{(2a - 3b)}}.",
        ],
        strategy: "Factorise to reveal direction vector",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m2-q03",
        question:
          "In parallelogram {{ABCD}}, {{AB = p}} and {{AD = q}}. {{M}} is the midpoint of {{BC}}. Express {{AM}} in terms of {{p}} and {{q}}.",
        options: ["{{(1/2)p + q}}", "{{p + (1/2)q}}", "{{p - (1/2)q}}", "{{(1/2)(p + q)}}"],
        answerIndex: 1,
        explanation:
          "Opposite sides of a parallelogram are equal and parallel, so {{BC = AD = q}} and {{BM = (1/2)q}}. Routing {{A -> B -> M}} gives {{AM = p + (1/2)q}}. {{(1/2)(p + q)}} finds the midpoint of diagonal {{AC}} instead of side {{BC}}.",
        difficulty: "core",
        guideRef: "vector-geometry-proofs",
        hints: [
          "Sketch parallelogram {{ABCD}} in order round the perimeter so {{BC}} is parallel to {{AD}}.",
          "Use {{AM = AB + BM}}.",
        ],
        strategy: "Label vertices cyclically around the polygon",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m2-q04",
        question:
          "Sets {{A}} and {{B}} satisfy {{A ⊂ B}} inside {{ξ}}, with {{n(A) = 9}}, {{n(B) = 21}}, and {{n(ξ) = 30}}. What are {{n(A ∪ B)}} and {{n(A ∩ B)}}?",
        options: ["{{n(A ∪ B) = 30}} and {{n(A ∩ B) = 0}}", "{{n(A ∪ B) = 12}} and {{n(A ∩ B) = 9}}", "{{n(A ∪ B) = 21}} and {{n(A ∩ B) = 12}}", "{{n(A ∪ B) = 21}} and {{n(A ∩ B) = 9}}"],
        answerIndex: 3,
        explanation:
          "{{A ⊂ B}} means circle {{A}} sits completely inside circle {{B}}. Therefore every member of {{A}} is already in {{B}}, giving {{A ∪ B = B}} ({{n = 21}}) and {{A ∩ B = A}} ({{n = 9}}). {{12}} is {{n(B ∩ A')}}, the ring around {{A}}.",
        difficulty: "core",
        guideRef: "sets-venn-diagrams",
        hints: [
          "{{A ⊂ B}} means {{A}} is a subset completely inside {{B}}.",
          "Draw circle {{A}} wholly inside circle {{B}} and inspect their union and overlap.",
        ],
        strategy: "Draw concentric circles for subsets",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m2-q05",
        question:
          "In a 2-set Venn diagram with {{n(ξ) = 40}}, the '{{A}} only' region has {{2x + 1}} elements, {{A ∩ B}} has {{x}} elements, '{{B}} only' has {{3x - 4}} elements, and {{7}} elements lie outside both circles. Find {{n(A)}}.",
        options: ["{{6}}", "{{19}}", "{{13}}", "{{25}}"],
        answerIndex: 1,
        explanation:
          "Summing all four disjoint regions gives {{(2x + 1) + x + (3x - 4) + 7 = 40 => 6x + 4 = 40 => x = 6}}. Crucially, {{n(A)}} includes BOTH '{{A}} only' and the overlap: {{(2(6) + 1) + 6 = 13 + 6 = 19}}. Stopping at {{x = 6}} or '{{A}} only' = {{13}} loses the final mark!",
        difficulty: "core",
        guideRef: "sets-venn-diagrams",
        hints: [
          "Sum all four regions equal to {{40}} to find {{x}}.",
          "Careful: {{n(A)}} is the whole of circle {{A}}, which is {{(2x + 1) + x}}.",
        ],
        strategy: "Answer for the whole set requested, not just x",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m2-q06",
        question: "Which expression is identically equal to {{(A ∪ B)'}} for all sets {{A}} and {{B}}?",
        options: ["{{A' ∩ B'}}", "{{A ∩ B'}}", "{{(A ∩ B)'}}", "{{A' ∪ B'}}"],
        answerIndex: 0,
        explanation:
          "Outside {{A ∪ B}} means an element is in **neither** {{A}} **nor** {{B}} — i.e. NOT in {{A}} **AND** NOT in {{B}}, written {{A' ∩ B'}} (De Morgan's Law). {{A' ∪ B'}} equals {{(A ∩ B)'}}, which includes the 'only' crescents.",
        difficulty: "core",
        guideRef: "sets-venn-diagrams",
        hints: [
          "{{(A ∪ B)'}} is the region completely outside both circles.",
          "Must an element there fail {{A}} AND fail {{B}}, or just one of them?",
        ],
        strategy: "Test regions against verbal meaning",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m2-q07",
        question:
          "Whether it rains on Saturday is independent of Sunday. Given {{P(\"rain Saturday\") = 0.3}} and {{P(\"rain Sunday\") = 0.4}}, find the probability that it rains on **at least one** of the two days.",
        options: ["{{0.58}}", "{{0.46}}", "{{0.12}}", "{{0.70}}"],
        answerIndex: 0,
        explanation:
          "{{P(\"at least one rainy day\") = 1 - P(\"dry both days\") = 1 - (0.7 * 0.6) = 1 - 0.42 = 0.58}}. Adding {{0.3 + 0.4 = 0.70}} double-counts the {{0.3 * 0.4 = 0.12}} weekend when it rains on **both** days!",
        difficulty: "core",
        guideRef: "conditional-probability-trees",
        hints: [
          "What is the probability of NO rain on Saturday AND NO rain on Sunday?",
          "Use {{1 - P(\"neither day\")}}.",
        ],
        strategy: "Use 1 − P(none)",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m2-q08",
        question:
          "A deck of 10 cards consists of 4 Aces and 6 Kings. Three cards are dealt without replacement. Find the probability that **at least one** of the three cards is an Ace.",
        options: ["{{98/125}}", "{{29/30}}", "{{5/6}}", "{{1/6}}"],
        answerIndex: 2,
        explanation:
          "The opposite of 'at least one Ace' is 'all 3 cards are Kings': {{P(KKK) = (6/10) * (5/9) * (4/8) = 120/720 = 1/6}}. Subtracting from {{1}} gives {{1 - 1/6 = 5/6}}. {{98/125}} wrongly uses replacement ({{1 - 0.6^3}}).",
        difficulty: "challenge",
        guideRef: "conditional-probability-trees",
        hints: [
          "Don't list 7 branches — find {{P(\"zero Aces\") = P(\"all 3 Kings\")}} instead!",
          "Multiply the three dependent King probabilities: {{(6/10) * (5/9) * (4/8)}}.",
          "Subtract that product from {{1}}.",
        ],
        strategy: "Complement rule on multi-stage tree",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m2-q09",
        question:
          "On any school morning, the probability Sam's bus is late is {{0.2}}. If the bus is late, the probability Sam misses assembly is {{0.7}}; if the bus is on time, the probability Sam misses assembly is {{0.1}}. Find the overall probability Sam misses assembly.",
        options: ["{{0.22}}", "{{0.30}}", "{{0.80}}", "{{0.14}}"],
        answerIndex: 0,
        explanation:
          "Sam can miss assembly via two mutually exclusive paths: (bus late AND misses) OR (bus on time AND misses) = {{0.2 * 0.7 + 0.8 * 0.1 = 0.14 + 0.08 = 0.22}}. {{0.14}} forgets the second branch where the bus is on time.",
        difficulty: "core",
        guideRef: "conditional-probability-trees",
        hints: [
          "If {{P(\"late\") = 0.2}}, then {{P(\"on time\") = 0.8}}.",
          "Sum the two branches ending in 'misses assembly'.",
        ],
        strategy: "Law of total probability across tree branches",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m2-q10",
        question:
          "A cumulative frequency curve for the heights of {{80}} trees passes through {{(12, 54)}}, where height is in metres. Estimate how many trees are **taller than** {{12}} m.",
        options: ["{{54}}", "{{34}}", "{{68}}", "{{26}}"],
        answerIndex: 3,
        explanation:
          "Cumulative frequency {{54}} means {{54}} trees have height **{{12}} m or less**. Therefore {{80 - 54 = 26}} trees are taller than {{12}} m. Answering {{54}} forgets to subtract from the total {{N = 80}}.",
        difficulty: "core",
        guideRef: "cumulative-frequency-quartiles",
        hints: [
          "The vertical axis counts trees *up to* {{12}} m.",
          "Subtract {{54}} from the total number of trees ({{80}}).",
        ],
        strategy: "Subtract CF(k) from N for 'above k'",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m2-q11",
        question:
          "In a mock exam, Set A had median {{68%}} and {{IQR = 11%}}, while Set B had median {{68%}} and {{IQR = 24%}}. Which statement earns full marks when comparing the two sets?",
        options: ["Both sets achieved the same average mark (68%), and Set A's marks were more consistent (smaller IQR).", "Set B performed better overall because its IQR of 24% is higher than 11%.", "Both sets achieved the same average mark, and Set A's marks are more accurate.", "Set B's marks were more consistent because 24% covers a wider range of students."],
        answerIndex: 0,
        explanation:
          "Median measures central average (equal at {{68%}}), while IQR measures spread of the middle {{50%}}: a **smaller** IQR ({{11% < 24%}}) means **less spread / more consistent** marks. Edexcel explicitly penalises saying 'more accurate' for spread!",
        difficulty: "core",
        guideRef: "cumulative-frequency-quartiles",
        hints: [
          "Does a smaller IQR mean scores are closer together or further apart?",
          "Use 'more consistent' for spread — never 'more accurate'.",
        ],
        strategy: "Compare median (average) + IQR (consistency)",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m2-q12",
        question:
          "Lengths {{L}} of beetles, measured to the nearest millimetre, are grouped as `10–14` ({{f = 8}}) and `15–19` ({{f = 12}}). At what horizontal value should cumulative frequency {{8}} be plotted?",
        options: ["{{14.5}}", "{{15}}", "{{14}}", "{{12}}"],
        answerIndex: 0,
        explanation:
          "Because lengths were rounded to the nearest mm, `10–14` actually represents the continuous interval {{9.5 <= L < 14.5}}, whose upper class boundary is {{14.5}}. Plotting at {{14}} ignores the rounding gap between {{14}} and {{15}}.",
        difficulty: "challenge",
        guideRef: "cumulative-frequency-quartiles",
        hints: [
          "Notice the gap between `14` and `15` for continuous lengths rounded to the nearest mm.",
          "Expand `10–14` to its true continuous interval boundaries.",
          "What is the upper bound of values that round down to `14`?",
        ],
        strategy: "Close gaps using continuous class boundaries",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m2-q13",
        question:
          "An incomplete histogram has no scale on its Frequency Density axis. The bar for {{0 <= x < 10}} represents frequency {{25}} and is drawn {{5}} cm tall. The bar for {{10 <= x < 25}} is drawn {{4}} cm tall. Find the frequency of {{10 <= x < 25}}.",
        options: ["{{20}}", "{{30}}", "{{60}}", "{{37.5}}"],
        answerIndex: 1,
        explanation:
          "For {{0 <= x < 10}}, {{FD = 25 / 10 = 2.5}}, which is drawn {{5}} cm tall (scale: {{2}} cm per {{1}} unit of FD). Thus {{4}} cm corresponds to {{FD = 2.0}}, giving frequency {{(25 - 10) * 2.0 = 15 * 2.0 = 30}}. {{20}} forgets that the second bar is {{15}} units wide rather than {{10}}.",
        difficulty: "core",
        guideRef: "histograms-frequency-density",
        hints: [
          "Use the first bar to find its Frequency Density ({{25 / 10 = 2.5}}) and compare with {{5}} cm.",
          "Find the Frequency Density of the {{4}} cm bar, then multiply by width {{25 - 10 = 15}}.",
        ],
        strategy: "Calibrate the unlabelled FD axis from the known bar",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m2-q14",
        question:
          "A histogram consists of three bars: {{0 <= t < 10}} (`FD = 1.4`), {{10 <= t < 20}} (`FD = 3.2`), and {{20 <= t < 40}} (`FD = 0.7`). Estimate the **median** value of {{t}}.",
        options: ["{{20}}", "{{15}}", "{{19.4}}", "{{16.25}}"],
        answerIndex: 1,
        explanation:
          "Bar areas (frequencies) are {{10(1.4) = 14}}, {{10(3.2) = 32}}, and {{20(0.7) = 14}}, giving total {{N = 60}}. The median sits at area {{60 / 2 = 30}}. Subtracting the first bar leaves {{30 - 14 = 16}} needed inside {{10 <= t < 20}}, which takes width {{16 / 3.2 = 5}}, so {{t = 10 + 5 = 15}}.",
        difficulty: "challenge",
        guideRef: "histograms-frequency-density",
        hints: [
          "Find all three bar areas to get total frequency {{N}}, then halve {{N}}.",
          "Subtract the first bar's area (`14`) from `N/2 = 30`.",
          "Divide the remaining needed area (`16`) by `FD = 3.2` and add to `t = 10`.",
        ],
        strategy: "Slice histogram area at N/2",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m2-q15",
        question:
          "Given column vectors {{a = (4, -3)}} and {{b = (-2, k)}}, and {{2a + b = (6, 5)}}, find the value of {{k}}.",
        options: ["{{-1}}", "{{2}}", "{{11}}", "{{8}}"],
        answerIndex: 2,
        explanation:
          "Looking at the vertical components: {{2(-3) + k = 5 => -6 + k = 5 => k = 11}}. {{-1}} comes from doing {{5 - 6}} instead of {{5 - (-6)}}.",
        difficulty: "warmup",
        guideRef: "vector-geometry-proofs",
        hints: ["Set up an equation from the bottom component: {{2(-3) + k = 5}}."],
        strategy: "Equate corresponding vector components",
      },
    ],
  },
  {
    id: "vectors-sets-stats-m3",
    title: "MCQ Paper 3 — Grade 8–9 Synthesis & Reasoning",
    questions: [
      {
        kind: "mcq",
        id: "vectors-sets-stats-m3-q01",
        question:
          "In triangle {{OAB}}, {{OA = 3a}} and {{OB = 3b}}. Point {{M}} lies on {{OA}} with {{OM = a}}, and point {{N}} lies on {{OB}} with {{ON = b}}. Which geometric statement about {{MN}} and {{AB}} is completely true?",
        options: ["{{MN = a - b}} and {{AB = 3a - 3b}}.", "{{AB}} is parallel to {{MN}} and {{3}} times the length of {{MN}}.", "{{AB}} is parallel to {{MN}} and twice the length of {{MN}}.", "Points {{M}}, {{N}} and {{B}} are collinear."],
        answerIndex: 1,
        explanation:
          "{{MN = ON - OM = b - a}}, while {{AB = OB - OA = 3b - 3a = 3(b - a)=3 * MN}}. Because {{AB = 3 * MN}}, {{AB}} is parallel to {{MN}} and {{3}} times its length. Confusing {{NB = 2b}} with {{OB = 3b}} produces the factor-of-2 trap.",
        difficulty: "core",
        guideRef: "vector-geometry-proofs",
        hints: [
          "Express both {{MN}} and {{AB}} in terms of {{a}} and {{b}}.",
          "Factorise {{AB}} and compare with {{MN}}.",
        ],
        strategy: "Compare factorised displacement vectors",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m3-q02",
        question:
          "Points {{P}}, {{Q}}, and {{R}} lie in order on a straight line such that {{PQ = 6a - 4b}} and {{QR = 9a - 6b}}. Find the ratio {{PQ : PR}} in its simplest form.",
        options: ["{{3 : 5}}", "{{3 : 2}}", "{{2 : 5}}", "{{2 : 3}}"],
        answerIndex: 2,
        explanation:
          "Notice {{PQ = 2(3a - 2b)}} and {{QR = 3(3a - 2b)}}, so {{PR = PQ + QR = 5(3a - 2b)}}. Therefore {{PQ : PR = 2 : 5}}. {{2 : 3}} gives {{PQ : QR}}, forgetting that {{PR}} is the whole segment!",
        difficulty: "core",
        guideRef: "vector-geometry-proofs",
        hints: [
          "Factorise {{PQ = 2(3a - 2b)}} and {{QR = 3(3a - 2b)}}.",
          "Remember the question asks for {{PQ : PR}}, where {{PR = PQ + QR}}.",
        ],
        strategy: "Express collinear segments in a common base vector",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m3-q03",
        question:
          "The column vector {{v = (k, -12)}} has magnitude {{|v| = 13}}, where {{k < 0}}. Find {{k}}.",
        options: ["{{-1}}", "{{-5}}", "{{5}}", "{{-25}}"],
        answerIndex: 1,
        explanation:
          "{{k^2 + (-12)^2 = 13^2 => k^2 + 144 = 169 => k^2 = 25}}. Since {{k < 0}}, {{k = -5}} (ignoring {{k < 0}} gives the positive root {{+5}}).",
        difficulty: "core",
        guideRef: "vector-geometry-proofs",
        hints: [
          "Square both sides of {{sqrt(k^2 + (-12)^2) = 13}}.",
          "Take the negative square root since {{k < 0}}.",
        ],
        strategy: "Solve magnitude equation and check sign condition",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m3-q04",
        question:
          "In a 3-set Venn diagram for sets {{A, B, C}}, {{n(A ∩ B ∩ C) = 4}}, {{n(A ∩ B) = 11}}, {{n(A ∩ C) = 9}}, and {{n(A) = 25}}. Find {{n(A ∩ B' ∩ C')}} (elements in {{A}} only).",
        options: ["{{1}}", "{{5}}", "{{9}}", "{{13}}"],
        answerIndex: 2,
        explanation:
          "Work outward from the centre {{4}}: '{{A}} and {{B}} only' = {{11 - 4 = 7}}, and '{{A}} and {{C}} only' = {{9 - 4 = 5}}. Subtracting all three overlapping parts inside {{A}} gives {{25 - (7 + 4 + 5) = 25 - 16 = 9}}. Doing {{25 - 11 - 9 = 5}} subtracts the centre {{4}} twice!",
        difficulty: "challenge",
        guideRef: "sets-venn-diagrams",
        hints: [
          "Put {{4}} in the central {{A ∩ B ∩ C}} region first.",
          "Subtract {{4}} from {{11}} and from {{9}} to get the two petals inside {{A}} (`7` and `5`).",
          "Subtract `7 + 4 + 5` from `n(A)=25`.",
        ],
        strategy: "Work from innermost 3-way intersection outward",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m3-q05",
        question:
          "Let {{ξ = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}}}, {{E = {\"even numbers\"}}}, and {{F = {\"factors of 12\"}}}. Find {{n(E ∪ F)}}.",
        options: ["{{12}}", "{{10}}", "{{8}}", "{{4}}"],
        answerIndex: 2,
        explanation:
          "{{E = {2, 4, 6, 8, 10, 12}}} ({{6}} elements) and {{F = {1, 2, 3, 4, 6, 12}}} ({{6}} elements), with overlap {{E ∩ F = {2, 4, 6, 12}}} ({{4}} elements). By inclusion–exclusion, {{n(E ∪ F) = 6 + 6 - 4 = 8}} (`{1, 2, 3, 4, 6, 8, 10, 12}`). {{12}} simply adds {{6 + 6}} without subtracting the overlap.",
        difficulty: "core",
        guideRef: "sets-venn-diagrams",
        hints: [
          "List all 6 factors of 12.",
          "Count distinct elements in {{E}} or {{F}} without double-counting `{2, 4, 6, 12}`.",
        ],
        strategy: "List members explicitly before counting",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m3-q06",
        question:
          "Given {{n(ξ) = 60}}, {{n(A) = 32}}, {{n(B') = 25}}, and {{n(A ∩ B) = 18}}, find {{n((A ∪ B)')}}.",
        options: ["{{21}}", "{{11}}", "{{7}}", "{{49}}"],
        answerIndex: 1,
        explanation:
          "First deduce {{n(B)=60 - 25 = 35}} (don't use {{25}} as {{n(B)}}!). Then {{n(A ∪ B)=32 + 35 - 18 = 49}}, so {{n((A ∪ B)')=60 - 49 = 11}}. Using {{25}} directly as {{n(B)}} gives {{60 - (32 + 25 - 18) = 21}}.",
        difficulty: "core",
        guideRef: "sets-venn-diagrams",
        hints: [
          "Careful: you are given {{n(B')=25}}, so find {{n(B)=60 - 25}} first!",
          "Find {{n(A ∪ B)}}, then subtract from {{60}}.",
        ],
        strategy: "Convert complements before inclusion–exclusion",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m3-q07",
        question:
          "A jar holds {{n}} sweets, of which {{3}} are lemon. Two sweets are chosen at random without replacement. Given that {{P(\"both sweets are lemon\") = 1/12}}, which quadratic equation must {{n}} satisfy?",
        options: ["{{n^2 - n - 72 = 0}}", "{{n^2 - 72 = 0}}", "{{n^2 + n - 72 = 0}}", "{{n^2 - n - 108 = 0}}"],
        answerIndex: 0,
        explanation:
          "{{P(\"both lemon\") = (3/n) * (2/(n - 1)) = 6 / (n(n - 1)) = 1/12}}. Cross-multiplying gives {{n(n - 1) = 72 => n^2 - n - 72 = 0}} (so {{n = 9}}). {{n^2 - n - 108 = 0}} keeps the second numerator as {{3}} instead of {{2}}!",
        difficulty: "challenge",
        guideRef: "conditional-probability-trees",
        hints: [
          "Write the 1st pick as {{3/n}} and the 2nd pick without replacement as {{2/(n - 1)}}.",
          "Equate {{6 / (n(n - 1)) = 1/12}}.",
          "Cross-multiply {{n(n - 1) = 72}} and rearrange to equal zero.",
        ],
        strategy: "Form algebraic probability equation without replacement",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m3-q08",
        question:
          "A box holds 10 pens: 4 are broken and 6 work. Three pens are selected at random without replacement. Find the probability that **all three** pens work.",
        options: ["{{27/125}}", "{{1/5}}", "{{1/3}}", "{{1/6}}"],
        answerIndex: 3,
        explanation:
          "Multiply across all three dependent draws: {{(6/10) * (5/9) * (4/8) = 120 / 720 = 1/6}}. {{27/125}} ({{(6/10)^3}}) assumes replacement.",
        difficulty: "core",
        guideRef: "conditional-probability-trees",
        hints: [
          "Write three fractions whose numerators drop `6, 5, 4` and denominators drop `10, 9, 8`.",
          "Multiply and simplify {{120 / 720}}.",
        ],
        strategy: "Chain conditional probabilities across 3 draws",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m3-q09",
        question:
          "Events {{A}} and {{B}} satisfy {{P(A) = 0.5}}, {{P(B) = 0.4}}, and {{P(A ∪ B) = 0.7}}. Find {{P(A | B)}}.",
        options: ["{{0.5}}", "{{0.28}}", "{{0.4}}", "{{0.2}}"],
        answerIndex: 0,
        explanation:
          "First find {{P(A ∩ B)=P(A)+P(B)-P(A ∪ B)=0.5 + 0.4 - 0.7 = 0.2}}. Then {{P(A | B)=P(A ∩ B)/P(B)=0.2 / 0.4 = 0.5}}. Dividing by {{P(A)=0.5}} instead gives {{P(B | A)=0.4}}.",
        difficulty: "challenge",
        guideRef: "conditional-probability-trees",
        hints: [
          "Recall {{P(A ∪ B)=P(A)+P(B)-P(A ∩ B)}}.",
          "Substitute `0.7 = 0.5 + 0.4 − P(A ∩ B)` to find the intersection.",
          "Divide {{P(A ∩ B)}} by {{P(B)}}.",
        ],
        strategy: "Combine addition law with conditional probability formula",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m3-q10",
        question:
          "A **cumulative frequency** table shows: {{0 < w <= 10}} (`CF = 7`), {{10 < w <= 25}} (`CF = 23`), {{25 < w <= 50}} (`CF = 40`). What is the **frequency** of the middle class {{10 < w <= 25}}?",
        options: ["{{17}}", "{{30}}", "{{23}}", "{{16}}"],
        answerIndex: 3,
        explanation:
          "To recover individual class frequencies from cumulative totals, subtract consecutive cumulative frequencies: {{23 - 7 = 16}}. Reading {{23}} straight off treats cumulative frequency as raw class frequency!",
        difficulty: "core",
        guideRef: "cumulative-frequency-quartiles",
        hints: [
          "Notice the column gives **cumulative** frequency (`up to 25` includes the first `7`).",
          "Subtract the previous cumulative total from {{23}}.",
        ],
        strategy: "Difference consecutive CF values to recover f",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m3-q11",
        question:
          "Commute times {{t}} (mins) for 30 teachers are: {{0 < t <= 10}} ({{f = 6}}), {{10 < t <= 20}} ({{f = 11}}), {{20 < t <= 30}} ({{f = 8}}), {{30 < t <= 50}} ({{f = 5}}). Which interval contains the **median**?",
        options: ["{{10 < t <= 20}}", "{{0 < t <= 10}}", "{{20 < t <= 30}}", "{{30 < t <= 50}}"],
        answerIndex: 0,
        explanation:
          "With {{30}} teachers in grouped continuous data, the median position is at {{30/2 = 15}} (or {{15.5}} discrete). Running totals are {{6}}, {{6 + 11 = 17}}, {{25}}, {{30}} — both {{15}} and {{15.5}} fall inside the second class {{10 < t <= 20}}.",
        difficulty: "warmup",
        guideRef: "cumulative-frequency-quartiles",
        hints: [
          "Keep a running cumulative total of frequencies: `6, 17, 25, 30`.",
          "Find which interval reaches the halfway mark of `30`.",
        ],
        strategy: "Track running cumulative totals to pass N/2",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m3-q12",
        question:
          "On a histogram with no vertical scale labels, the total area of all bars is {{48}} cm², representing {{120}} apples. How many apples are represented by a shaded region of area {{14}} cm²?",
        options: ["{{35}}", "{{28}}", "{{5.6}}", "{{42}}"],
        answerIndex: 0,
        explanation:
          "Area is directly proportional to frequency: {{120 / 48 = 2.5}} apples per cm², so {{14 * 2.5 = 35}} apples. {{5.6}} divides {{14 / 2.5}} the wrong way round.",
        difficulty: "core",
        guideRef: "histograms-frequency-density",
        hints: [
          "Find how many apples are represented by {{1}} cm² ({{120 / 48}}).",
          "Multiply that scale constant by {{14}} cm².",
        ],
        strategy: "Use area proportionality across the histogram",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m3-q13",
        question:
          "Integer quiz scores {{s}} are grouped as `1–10`, `11–15`, and `16–30`. When drawing a continuous histogram, what is the true class width of `11–15`?",
        options: ["{{4.5}}", "{{5.5}}", "{{4}}", "{{5}}"],
        answerIndex: 3,
        explanation:
          "Integers `11, 12, 13, 14, 15` span the continuous boundary interval {{10.5 <= s < 15.5}}, which has width {{15.5 - 10.5 = 5}} (five distinct integer scores!). Subtracting {{15 - 11 = 4}} loses a full unit of width.",
        difficulty: "challenge",
        guideRef: "histograms-frequency-density",
        hints: [
          "Notice there is a rounding gap between `10` and `11`, and between `15` and `16`.",
          "Expand discrete `11–15` to continuous boundaries `10.5` to `15.5`.",
          "Calculate {{15.5 - 10.5}}.",
        ],
        strategy: "Expand discrete intervals by ±0.5 before finding width",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m3-q14",
        question:
          "A histogram has just two bars: {{0 <= x < 10}} with `FD = 3`, and {{10 <= x < 30}} with `FD = 2`. One item is picked at random from all items in the histogram. Estimate {{P(x >= 15)}}.",
        options: ["{{3/7}}", "{{2/5}}", "{{4/7}}", "{{1/2}}"],
        answerIndex: 0,
        explanation:
          "Total items = {{10(3) + 20(2) = 30 + 40 = 70}}. Items with {{x >= 15}} occupy width {{30 - 15 = 15}} of the second bar, giving {{15 * 2 = 30}} items. Thus {{P(x >= 15) = 30 / 70 = 3/7}}. {{4/7}} uses the whole {{10 <= x < 30}} bar.",
        difficulty: "challenge",
        guideRef: "histograms-frequency-density",
        hints: [
          "Calculate total histogram area (`10 × 3 + 20 × 2`) for the denominator.",
          "Find the area of the slice from {{x = 15}} to {{x = 30}} (`15 × 2`) for the numerator.",
          "Simplify `30 / 70`.",
        ],
        strategy: "Probability from histogram = shaded area ÷ total area",
      },
      {
        kind: "mcq",
        id: "vectors-sets-stats-m3-q15",
        question:
          "In triangle {{OAB}}, {{OA = a}} and {{OB = b}}. {{X}} is the midpoint of {{OA}}, and {{Y}} lies on {{XB}} such that {{XY : YB = 1 : 2}}. Find {{OY}} in terms of {{a}} and {{b}}.",
        options: ["{{(1/6)a + (1/3)b}}", "{{(1/2)a + (1/3)b}}", "{{(1/3)a + (1/3)b}}", "{{(1/3)a + (2/3)b}}"],
        answerIndex: 2,
        explanation:
          "{{OX = (1/2)a}}, so {{XB = OB - OX = b - (1/2)a}}. Since {{XY : YB = 1 : 2}}, {{XY = (1/3)XB = (1/3)b - (1/6)a}}. Routing {{OY = OX + XY = (1/2)a - (1/6)a + (1/3)b = (1/3)a + (1/3)b}}. {{(1/2)a + (1/3)b}} forgets to subtract {{(1/6)a}} inside {{XB}}.",
        difficulty: "challenge",
        guideRef: "vector-geometry-proofs",
        hints: [
          "First write {{OX = (1/2)a}} and {{XB = b - (1/2)a}}.",
          "With ratio `1 : 2`, take {{XY = (1/3)XB}}.",
          "Route {{OY = OX + XY}} and collect like terms in {{a}}.",
        ],
        strategy: "Break multi-ratio triangles into two nose-to-tail steps",
      },
    ],
  },
];
