import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      kind: "short",
      id: "vectors-sets-stats-quiz-q01",
      question:
        "Given column vectors {{u = (3, -2)}} and {{v = (-1, 16)}}, find the exact magnitude {{|2u + v|}}.",
      answer: { type: "number", value: 13 },
      traps: [
        { spec: { type: "number", value: 17 }, feedback: "Check 2u + v first: (6 − 1, −4 + 16) = (5, 12), whose magnitude is √(25 + 144) = 13, not 5 + 12!" },
      ],
      solution: [
        "First find {{2u + v = (6, -4) + (-1, 16) = (5, 12)}}.",
        "Magnitude = {{sqrt(5^2 + 12^2) = sqrt(25 + 144) = sqrt(169) = 13}}.",
      ],
      commonError: "Adding the components 5 + 12 = 17 instead of using Pythagoras' theorem.",
      difficulty: "warmup",
      guideRef: "vector-geometry-proofs",
      hints: ["Work out the single column vector {{2u + v}} first.", "Apply {{sqrt(x^2 + y^2)}} to {{(5, 12)}}."],
      strategy: "Combine components before taking magnitude",
    },
    {
      kind: "short",
      id: "vectors-sets-stats-quiz-q02",
      question:
        "In triangle {{OAB}}, {{OA = a}} and {{OB = b}}. Point {{P}} divides {{AB}} in the ratio {{AP : PB = 1 : 4}}. Express {{OP}} in terms of {{a}} and {{b}}.",
      answer: { type: "expression", expr: "(4/5)*a + (1/5)*b", form: "any", display: "{{(4/5)a + (1/5)b}}" },
      traps: [
        { spec: { type: "expression", expr: "(1/5)*a + (4/5)*b" }, feedback: "P is closer to A than B (1 : 4), so OP = a + (1/5)(b − a) = (4/5)a + (1/5)b!" },
        { spec: { type: "expression", expr: "(3/4)*a + (1/4)*b" }, feedback: "With ratio 1 : 4 there are 1 + 4 = 5 parts altogether, so use fifths, not quarters!" },
      ],
      solution: [
        "{{AB = OB - OA = b - a}}.",
        "Since {{AP : PB = 1 : 4}}, {{AP = (1/5)(b - a)}}.",
        "{{OP = OA + AP = a + (1/5)b - (1/5)a = (4/5)a + (1/5)b}}.",
      ],
      commonError: "Using 1/4 instead of 1/5 for the ratio 1 : 4.",
      difficulty: "core",
      guideRef: "vector-geometry-proofs",
      hints: ["Write {{AB = b - a}}.", "There are {{1 + 4 = 5}} parts, so {{OP = a + (1/5)(b - a)}}."],
      strategy: "Route nose-to-tail using m/(m+n)",
    },
    {
      kind: "short",
      id: "vectors-sets-stats-quiz-q03",
      question:
        "In a universal set {{ξ}} with {{n(ξ) = 50}}, {{n(A) = 28}}, {{n(B) = 23}}, and {{n(A ∩ B) = 11}}. Find {{n((A ∪ B)')}}.",
      answer: { type: "number", value: 10 },
      traps: [
        { spec: { type: "number", value: 40 }, feedback: "40 is n(A ∪ B) — subtract it from n(ξ) = 50 to get the outside region n((A ∪ B)')!" },
      ],
      solution: [
        "By inclusion–exclusion, {{n(A ∪ B) = 28 + 23 - 11 = 40}}.",
        "Outside both sets: {{n((A ∪ B)') = 50 - 40 = 10}}.",
      ],
      commonError: "Forgetting to subtract n(A ∪ B) from n(ξ) at the end.",
      difficulty: "warmup",
      guideRef: "sets-venn-diagrams",
      hints: ["Find {{n(A ∪ B) = n(A) + n(B) - n(A ∩ B)}} first.", "Subtract from {{50}}."],
      strategy: "Inclusion–exclusion then complement",
    },
    {
      kind: "short",
      id: "vectors-sets-stats-quiz-q04",
      question:
        "In a survey of 50 sixth-formers, {{n(M) = 28}} study Maths, {{n(P) = 23}} study Physics, and {{n(M ∩ P) = 11}} study both. One Physics student is chosen at random. Find the probability that this student also studies Maths. Give your answer as a fraction in simplest form.",
      answer: { type: "fraction", n: 11, d: 23, simplest: true },
      traps: [
        { spec: { type: "fraction", n: 11, d: 50 }, feedback: "We know the student studies Physics, so restrict the denominator to the 23 Physics students, not all 50!" },
        { spec: { type: "fraction", n: 11, d: 28 }, feedback: "The given condition is 'studies Physics' (23 students), not 'studies Maths' (28)!" },
      ],
      solution: [
        "Conditioning on Physics restricts the sample space to {{n(P) = 23}}.",
        "Of those 23 students, {{n(M ∩ P) = 11}} also study Maths, so {{P(M | P) = 11/23}}.",
      ],
      commonError: "Dividing by n(ξ) = 50 instead of n(P) = 23.",
      difficulty: "core",
      guideRef: "sets-venn-diagrams",
      hints: ["The student is chosen FROM the Physics students.", "Use {{n(M ∩ P) / n(P)}}."],
      strategy: "Restrict denominator to the given set",
    },
    {
      kind: "short",
      id: "vectors-sets-stats-quiz-q05",
      question:
        "A bag contains 6 red counters and 4 yellow counters. Two counters are drawn at random **without replacement**. Find the probability that both counters are yellow, in simplest form.",
      answer: { type: "fraction", n: 2, d: 15, simplest: true },
      traps: [
        { spec: { type: "fraction", n: 4, d: 25 }, feedback: "4/25 = (4/10)² assumes replacement! Without replacement, the second draw is 3/9." },
      ],
      solution: [
        "1st yellow = {{4/10}}; 2nd yellow = {{3/9}}.",
        "{{P(YY) = (4/10) * (3/9) = 12/90 = 2/15}}.",
      ],
      commonError: "Keeping 4/10 on the second draw instead of 3/9.",
      difficulty: "warmup",
      guideRef: "conditional-probability-trees",
      hints: ["There are 10 counters initially; after taking 1 yellow, 3 yellow remain out of 9."],
      strategy: "Drop numerator and denominator by 1",
    },
    {
      kind: "short",
      id: "vectors-sets-stats-quiz-q06",
      question:
        "A box holds 3 blue marbles and 5 green marbles. Two marbles are picked at random **without replacement**. Find the probability that **at least one** marble is blue, in simplest form.",
      answer: { type: "fraction", n: 9, d: 14, simplest: true },
      traps: [
        { spec: { type: "fraction", n: 5, d: 14 }, feedback: "5/14 is P(both green) — subtract it from 1 to get P(at least one blue)!" },
      ],
      solution: [
        "Use the complement: {{P(\"at least one blue\") = 1 - P(\"both green\")}}.",
        "{{P(GG) = (5/8) * (4/7) = 20/56 = 5/14}}.",
        "{{1 - 5/14 = 9/14}}.",
      ],
      commonError: "Calculating only BB + BG while forgetting GB, instead of using 1 − P(GG).",
      difficulty: "core",
      guideRef: "conditional-probability-trees",
      hints: [
          "The opposite of 'at least one blue' is 'no blue marbles' (both green).",
          "Calculate {{1 - (5/8) * (4/7)}}.",
      ],
      strategy: "Use 1 − P(none)",
    },
    {
      kind: "short",
      id: "vectors-sets-stats-quiz-q07",
      question:
        "Masses {{m}} (g) of 25 seed packets: {{0 < m <= 10}} ({{f = 6}}), {{10 < m <= 20}} ({{f = 11}}), {{20 < m <= 30}} ({{f = 8}}). Work out an estimate for the mean mass.",
      answer: { type: "number", value: 15.8, display: "15.8 g" },
      traps: [
        { spec: { type: "number", value: 20.8 }, feedback: "Use midpoints (5, 15, 25), not upper bounds (10, 20, 30)!" },
      ],
      solution: [
        "Midpoints are {{5, 15, 25}}.",
        "{{sum(f * x) = 6(5) + 11(15) + 8(25) = 30 + 165 + 200 = 395}}.",
        "Estimated mean = {{395 / 25 = 15.8}} g.",
      ],
      commonError: "Multiplying by upper class bounds or dividing by 3 instead of 25.",
      difficulty: "core",
      guideRef: "cumulative-frequency-quartiles",
      hints: ["Find midpoints `5, 15, 25`.", "Divide {{sum(f * x)}} by total packets `25`."],
      strategy: "Estimated mean = ∑fx ÷ ∑f",
    },
    {
      kind: "short",
      id: "vectors-sets-stats-quiz-q08",
      question:
        "A cumulative frequency curve for 100 phone batteries gives lower quartile {{Q_1 = 14.2}} hours, median {{18.0}} hours, and upper quartile {{Q_3 = 21.7}} hours. Calculate the interquartile range (IQR).",
      answer: { type: "number", value: 7.5, display: "7.5 hours" },
      traps: [
        { spec: { type: "number", value: 50 }, feedback: "50 is the count between CF = 25 and CF = 75; IQR is the difference on the horizontal axis: Q₃ − Q₁!" },
      ],
      solution: ["{{IQR = Q_3 - Q_1 = 21.7 - 14.2 = 7.5}} hours."],
      commonError: "Subtracting cumulative frequencies (75 − 25 = 50) instead of data values Q₃ − Q₁.",
      difficulty: "warmup",
      guideRef: "cumulative-frequency-quartiles",
      hints: ["Calculate {{Q_3 - Q_1}}."],
      strategy: "IQR = Q₃ − Q₁",
    },
    {
      kind: "short",
      id: "vectors-sets-stats-quiz-q09",
      question:
        "In a grouped frequency table for a histogram, the class {{25 <= x < 45}} has frequency {{54}}. Calculate its Frequency Density.",
      answer: { type: "number", value: 2.7 },
      traps: [
        { spec: { type: "number", value: 1.2 }, feedback: "Divide by the class width (45 − 25 = 20), not by the upper bound 45!" },
      ],
      solution: [
        "Class width = {{45 - 25 = 20}}.",
        "Frequency Density = {{54 / 20 = 2.7}}.",
      ],
      commonError: "Dividing by 45 instead of the class width 20.",
      difficulty: "warmup",
      guideRef: "histograms-frequency-density",
      hints: ["Divide {{54}} by class width {{45 - 25}}."],
      strategy: "FD = Frequency ÷ Width",
    },
    {
      kind: "short",
      id: "vectors-sets-stats-quiz-q10",
      question:
        "On a histogram, the bar spanning {{10 <= t < 35}} has a Frequency Density of {{1.6}}. Estimate the frequency in the sub-interval {{20 <= t < 35}}.",
      answer: { type: "number", value: 24 },
      traps: [
        { spec: { type: "number", value: 40 }, feedback: "40 is the frequency of the entire 10 ≤ t < 35 bar; only take width 35 − 20 = 15!" },
      ],
      solution: [
        "Width of sub-interval {{20 <= t < 35}} is {{35 - 20 = 15}}.",
        "Estimated frequency = {{15 * 1.6 = 24}}.",
      ],
      commonError: "Using full class width 25 instead of sub-interval width 15.",
      difficulty: "core",
      guideRef: "histograms-frequency-density",
      hints: ["Find the width from {{20}} to {{35}}.", "Multiply that width by `FD = 1.6`."],
      strategy: "Sub-interval count = sub-width × FD",
    },
  ],
  papers: [
    {
      id: "vectors-sets-stats-p1",
      title: "Practice Paper 1 — Calculator Higher (Vectors, Venn & Trees)",
      questions: [
        {
          kind: "short",
          id: "vectors-sets-stats-p1-q01",
          question:
            "Given column vectors {{a = (6, -5)}} and {{b = (-2, 3)}}, calculate the magnitude of {{a + 3b}}. Give your answer as an exact integer or simplified decimal if exact.",
          answer: { type: "number", value: 4 },
          traps: [
            { spec: { type: "number", value: 16 }, feedback: "Remember to take the square root at the end: √(0² + 4²) = 4!" },
          ],
          solution: [
            "{{a + 3b = (6, -5) + (-6, 9) = (0, 4)}}.",
            "Magnitude = {{sqrt(0^2 + 4^2) = 4}}.",
          ],
          commonError: "Forgetting to square-root 16, or sign slips in 6 + 3(−2).",
          difficulty: "warmup",
          guideRef: "vector-geometry-proofs",
          hints: ["Compute {{a + 3b}} as a single column vector first.", "Notice its horizontal component becomes zero!"],
          strategy: "Simplify vector sum before magnitude",
        },
        {
          kind: "short",
          id: "vectors-sets-stats-p1-q02",
          question:
            "In triangle {{OPQ}}, {{OP = 3a}} and {{OQ = 6b}}. Point {{M}} lies on {{PQ}} such that {{PM : MQ = 1 : 2}}. Express {{OM}} in terms of {{a}} and {{b}} in its simplest form.",
          answer: { type: "expression", expr: "2*a + 2*b", form: "simplified", display: "{{2a + 2b}}" },
          traps: [
            { spec: { type: "expression", expr: "a + 4*b" }, feedback: "PM : MQ = 1 : 2 means M is 1/3 of the way from P to Q, not 2/3!" },
            { spec: { type: "expression", expr: "(3/2)*a + 3*b" }, feedback: "1 : 2 means 1/3 of PQ (1 + 2 = 3 parts), not 1/2!" },
          ],
          solution: [
            "{{PQ = OQ - OP = 6b - 3a}}.",
            "{{PM = (1/3)PQ = (1/3)(6b - 3a) = 2b - a}}.",
            "{{OM = OP + PM = 3a + (2b - a) = 2a + 2b}}.",
          ],
          commonError: "Using 1/2 instead of 1/3 for ratio 1 : 2.",
          difficulty: "core",
          guideRef: "vector-geometry-proofs",
          hints: ["Find {{PQ = 6b - 3a}}.", "Since {{PM : MQ = 1 : 2}}, {{OM = 3a + (1/3)(6b - 3a)}}."],
          strategy: "Route O → P → M",
        },
        {
          kind: "written",
          id: "vectors-sets-stats-p1-q03",
          question:
            "In triangle {{OAB}}, {{OA = 2a}} and {{OB = 3b}}. Point {{P}} divides {{AB}} in the ratio {{AP : PB = 2 : 3}}, and point {{K}} has position vector {{OK = 6a + 6b}}. Show that {{OP = (6/5)a + (6/5)b}} and hence prove completely that {{O}}, {{P}}, and {{K}} are collinear.",
          marks: 4,
          modelAnswer:
            "First, {{AB = OB - OA = 3b - 2a}}. Since {{P}} splits {{AB}} in {{2 : 3}}, {{AP = (2/5)(3b - 2a)}}. Routing gives {{OP = 2a + (6/5)b - (4/5)a = (6/5)(a + b)}}. Factorising {{OK}} gives {{6(a + b) = 5 * OP}}. Because {{OK}} is a scalar multiple of {{OP}}, the two vectors are parallel, and since they share the common vertex {{O}}, the three points lie on a single straight line.",
          markScheme: [
            { point: "Finds AB = 3b − 2a (or −2a + 3b)", keywords: ["3b - 2a", "-2a + 3b"] },
            { point: "Uses 2/5 of AB to obtain (6/5)(a + b)", keywords: ["2/5", "(6/5)(a + b)", "6/5b - 4/5a"] },
            { point: "Shows OK = 5 OP (scalar multiple / parallel)", keywords: ["5 * op", "5op", "scalar multiple", "parallel"] },
            { point: "States shared / common vertex O to complete proof", keywords: ["common", "share", "shared"] },
          ],
          commonError: "Showing OK = 5 OP and claiming collinearity without stating both vectors are parallel and share the common point O.",
          difficulty: "core",
          guideRef: "vector-geometry-proofs",
          hints: [
            "Start with {{AB = 3b - 2a}} and {{AP = (2/5)AB}}.",
            "Factorise both {{OP}} and {{OK}} in terms of {{(a + b)}}.",
            "State BOTH 'parallel / scalar multiple' AND 'share common point O'!",
          ],
          strategy: "P + P: Parallel scalar multiple + common Point",
        },
        {
          kind: "short",
          id: "vectors-sets-stats-p1-q04",
          question:
            "In a year group of 70 students, 42 study French ({{F}}), 35 study German ({{G}}), and 12 study neither language. Find {{n(F ∩ G')}}, the number of students who study French **only**.",
          answer: { type: "number", value: 23 },
          traps: [
            { spec: { type: "number", value: 19 }, feedback: "19 is n(F ∩ G), the students studying BOTH! Subtract 19 from 42 to get French only." },
            { spec: { type: "number", value: 42 }, feedback: "42 includes the students who also study German — subtract the overlap!" },
          ],
          solution: [
            "{{n(F ∪ G) = 70 - 12 = 58}}.",
            "Overlap {{n(F ∩ G) = 42 + 35 - 58 = 19}}.",
            "French only {{n(F ∩ G') = 42 - 19 = 23}}.",
          ],
          commonError: "Stopping at the overlap 19 instead of subtracting from 42.",
          difficulty: "core",
          guideRef: "sets-venn-diagrams",
          hints: ["Find {{n(F ∪ G) = 70 - 12 = 58}}.", "Find the overlap {{n(F ∩ G)}}, then subtract it from {{42}}."],
          strategy: "Work from intersection outward",
        },
        {
          kind: "short",
          id: "vectors-sets-stats-p1-q05",
          question:
            "In a 3-set Venn diagram for clubs {{A}}, {{B}} and {{C}} with {{n(ξ) = 65}}: {{n(A ∩ B ∩ C) = 5}}, {{n(A ∩ B) = 13}}, {{n(B ∩ C) = 11}}, {{n(A ∩ C) = 9}}, {{n(A) = 28}}, {{n(B) = 30}}, and {{n(C) = 24}}. Find {{n((A ∪ B ∪ C)')}}, the number of students in none of the three clubs.",
          answer: { type: "number", value: 11 },
          traps: [
            { spec: { type: "number", value: 54 }, feedback: "54 is n(A ∪ B ∪ C) — subtract 54 from 65 to find those outside all three clubs!" },
            { spec: { type: "number", value: 16 }, feedback: "Don't subtract the central 5 three times without adding it back properly — fill the 7 inner regions one by one!" },
          ],
          solution: [
            "Centre {{A ∩ B ∩ C = 5}}.",
            "Three pairwise-only petals: {{A ∩ B}} only = {{13 - 5 = 8}}; {{B ∩ C}} only = {{11 - 5 = 6}}; {{A ∩ C}} only = {{9 - 5 = 4}}.",
            "Three 'only' crescents: {{A}} only = {{28 - (8 + 5 + 4) = 11}}; {{B}} only = {{30 - (8 + 5 + 6) = 11}}; {{C}} only = {{24 - (4 + 5 + 6) = 9}}.",
            "Sum inside circles = {{5 + 8 + 6 + 4 + 11 + 11 + 9 = 54}}. Outside = {{65 - 54 = 11}}.",
          ],
          commonError: "Forgetting to subtract the central 5 from each pairwise intersection.",
          difficulty: "challenge",
          guideRef: "sets-venn-diagrams",
          hints: [
            "Start with `5` at the very centre, then find the three petals `13 − 5`, `11 − 5`, `9 − 5`.",
            "Subtract the inner regions from `28`, `30`, and `24` to get the three 'only' crescents.",
            "Sum all 7 regions inside the circles and subtract from `65`.",
          ],
          strategy: "Fill all 7 disjoint circle regions from centre outward",
        },
        {
          kind: "short",
          id: "vectors-sets-stats-p1-q06",
          question:
            "A biscuit tin holds 5 custard creams and 4 bourbons. Vani takes two biscuits at random **without replacement**. Calculate the probability that she takes **one of each type**, giving your answer as a fraction in simplest form.",
          answer: { type: "fraction", n: 5, d: 9, simplest: true },
          traps: [
            { spec: { type: "fraction", n: 5, d: 18 }, feedback: "5/18 only counts Custard then Bourbon — double it to include Bourbon then Custard as well!" },
            { spec: { type: "fraction", n: 40, d: 81 }, feedback: "Without replacement! The second biscuit is picked out of 8 remaining biscuits, not 9." },
          ],
          solution: [
            "Total = {{9}} biscuits; second pick has denominator {{8}}.",
            "{{P(CB) + P(BC) = (5/9)*(4/8) + (4/9)*(5/8) = 20/72 + 20/72 = 40/72 = 5/9}}.",
          ],
          commonError: "Computing only one order (20/72 = 5/18).",
          difficulty: "core",
          guideRef: "conditional-probability-trees",
          hints: ["Add {{P(CB)}} and {{P(BC)}}.", "Use denominator `9` on the first draw and `8` on the second."],
          strategy: "Sum both orders without replacement",
        },
        {
          kind: "short",
          id: "vectors-sets-stats-p1-q07",
          question:
            "A drawer contains 3 black socks, 4 grey socks, and 3 white socks (10 socks altogether). Two socks are pulled out at random **without replacement**. Find the probability that they form a **matching pair** (same colour), in simplest form.",
          answer: { type: "fraction", n: 4, d: 15, simplest: true },
          traps: [
            { spec: { type: "fraction", n: 17, d: 50 }, feedback: "17/50 assumes replacement ((9+16+9)/100) — use n(n − 1) over 10 × 9 = 90!" },
          ],
          solution: [
            "Matching pair means **BB or GG or WW**.",
            "{{P(BB) + P(GG) + P(WW) = (3/10)*(2/9) + (4/10)*(3/9) + (3/10)*(2/9)}}.",
            "{{= (6 + 12 + 6) / 90 = 24 / 90 = 4/15}}.",
          ],
          commonError: "Forgetting one of the three colour pairs or simplifying too early.",
          difficulty: "core",
          guideRef: "conditional-probability-trees",
          hints: [
            "Keep denominator `10 × 9 = 90` across all three colour pairs: BB, GG, and WW.",
            "Sum `(3×2 + 4×3 + 3×2) / 90` and simplify.",
          ],
          strategy: "Sum mutually exclusive matching-colour branches over 90",
        },
        {
          kind: "short",
          id: "vectors-sets-stats-p1-q08",
          question:
            "When Maya shoots an arrow, the probability she hits the bullseye is {{0.4}}, independently on each shot. She shoots 3 arrows. Calculate the probability that she hits the bullseye **at least once**. Give your answer as an exact decimal.",
          answer: { type: "number", value: 0.784 },
          traps: [
            { spec: { type: "number", value: 0.216 }, feedback: "0.216 = 0.6³ is P(misses all 3) — subtract it from 1 to get P(at least one hit)!" },
            { spec: { type: "number", value: 0.936 }, feedback: "The probability of MISSING one shot is 1 − 0.4 = 0.6, so P(none) = 0.6³, not 0.4³!" },
          ],
          solution: [
            "{{P(\"miss single shot\") = 1 - 0.4 = 0.6}}.",
            "{{P(\"miss all 3\") = 0.6^3 = 0.216}}.",
            "{{P(\"at least one hit\") = 1 - 0.216 = 0.784}}.",
          ],
          commonError: "Subtracting 0.4³ = 0.064 from 1 instead of 0.6³ = 0.216.",
          difficulty: "core",
          guideRef: "conditional-probability-trees",
          hints: ["Find {{P(\"miss\") = 0.6}} first.", "Calculate {{1 - 0.6^3}}."],
          strategy: "1 − P(miss all three)",
        },
        {
          kind: "short",
          id: "vectors-sets-stats-p1-q09",
          question:
            "Reaction times {{t}} (ms) of 40 gamers are grouped as: {{150 < t <= 190}} ({{f = 8}}), {{190 < t <= 210}} ({{f = 18}}), {{210 < t <= 250}} ({{f = 10}}), {{250 < t <= 310}} ({{f = 4}}). Calculate an estimate for the mean reaction time.",
          answer: { type: "number", value: 209.5, display: "209.5 ms" },
          traps: [
            { spec: { type: "number", value: 226 }, feedback: "Use midpoints (170, 200, 230, 280), not upper bounds (190, 210, 250, 310)!" },
          ],
          solution: [
            "Midpoints are {{170}}, {{200}}, {{230}}, and {{280}}.",
            "{{sum(f * x) = 8(170) + 18(200) + 10(230) + 4(280) = 1360 + 3600 + 2300 + 1120 = 8380}}.",
            "Estimated mean = {{8380 / 40 = 209.5}} ms.",
          ],
          commonError: "Misreading unequal interval widths when finding midpoints.",
          difficulty: "core",
          guideRef: "cumulative-frequency-quartiles",
          hints: ["Find each midpoint carefully: `170, 200, 230, 280`.", "Divide {{sum(f * x)}} by `40`."],
          strategy: "Check every class width for midpoints",
        },
        {
          kind: "short",
          id: "vectors-sets-stats-p1-q10",
          question:
            "A cumulative frequency graph for the masses of 160 apples shows lower quartile {{Q_1 = 118}} g, median {{134}} g, and upper quartile {{Q_3 = 149}} g. At {{m = 155}} g, the cumulative frequency is {{136}}. Find (a) the IQR and (b) the number of apples heavier than {{155}} g. Give your answer as two numbers in order: `IQR, count`.",
          answer: { type: "list", values: [31, 24], ordered: true, display: "31, 24" },
          traps: [
            { spec: { type: "list", values: [31, 136], ordered: true }, feedback: "136 apples weigh 155 g OR LESS — subtract from 160 to get apples heavier than 155 g!" },
          ],
          solution: [
            "{{IQR = Q_3 - Q_1 = 149 - 118 = 31}} g.",
            "Apples heavier than {{155}} g = {{160 - 136 = 24}}.",
          ],
          commonError: "Writing 136 instead of 160 − 136 = 24 for the second value.",
          difficulty: "core",
          guideRef: "cumulative-frequency-quartiles",
          hints: ["{{IQR = 149 - 118}}.", "Subtract `136` from `160` for heavier than `155` g."],
          strategy: "Read IQR horizontally and subtract CF from N vertically",
        },
        {
          kind: "written",
          id: "vectors-sets-stats-p1-q11",
          question:
            "Two courier firms timed 80 parcel deliveries (in minutes). QuickDrop had Median = 34 mins and IQR = 9 mins. SwiftVan had Median = 41 mins and IQR = 18 mins. Compare the delivery times of the two firms.",
          marks: 2,
          modelAnswer:
            "On average, QuickDrop delivered parcels faster because its median of 34 minutes is lower than SwiftVan's 41 minutes. QuickDrop's delivery durations were also more consistent since its interquartile range of 9 minutes is smaller than 18 minutes.",
          markScheme: [
            { point: "Compares medians in context: QuickDrop is faster / shorter time on average (34 < 41)", keywords: ["faster", "quicker", "shorter", "lower on average"] },
            { point: "Compares IQRs in context: QuickDrop is more consistent / less varied / less spread out (9 < 18)", keywords: ["consistent", "less varied", "less spread", "less variation"] },
          ],
          commonError: "Quoting bare inequalities '34 < 41 and 9 < 18' without interpreting speed and consistency in context.",
          difficulty: "core",
          guideRef: "cumulative-frequency-quartiles",
          hints: [
            "Make one contextual comment comparing the medians (which firm is faster on average?).",
            "Make one contextual comment comparing the IQRs using 'more consistent'.",
          ],
          strategy: "Two-part comparison: average in context + consistency in context",
        },
        {
          kind: "short",
          id: "vectors-sets-stats-p1-q12",
          question:
            "A histogram records commute distances {{d}} (km): {{0 <= d < 4}} (`FD = 3.5`), {{4 <= d < 10}} (`FD = 4.0`), {{10 <= d < 20}} (`FD = 1.8`), and {{20 <= d < 35}} (`FD = 0.4`). Find the **total** number of commuters surveyed.",
          answer: { type: "number", value: 62 },
          traps: [
            { spec: { type: "number", value: 9.7 }, feedback: "Don't add Frequency Densities — multiply each FD by its class width first to get bar areas!" },
          ],
          solution: [
            "Frequencies (`Width × FD`): {{4 * 3.5 = 14}}, {{6 * 4.0 = 24}}, {{10 * 1.8 = 18}}, {{15 * 0.4 = 6}}.",
            "Total commuters = {{14 + 24 + 18 + 6 = 62}}.",
          ],
          commonError: "Summing FD heights instead of bar areas.",
          difficulty: "core",
          guideRef: "histograms-frequency-density",
          hints: [
            "Multiply each class width (`4, 6, 10, 15`) by its Frequency Density.",
            "Add the four frequencies.",
          ],
          strategy: "Sum Width × FD across all bars",
        },
        {
          kind: "short",
          id: "vectors-sets-stats-p1-q13",
          question:
            "In a histogram of waiting times {{w}} (minutes), the bar {{5 <= w < 20}} has frequency {{45}}, and the bar {{20 <= w < 40}} has frequency {{28}}. Estimate how many people waited between {{12}} and {{30}} minutes.",
          answer: { type: "number", value: 38 },
          traps: [
            { spec: { type: "number", value: 73 }, feedback: "73 is the total of both full bars — take proportional fractions from 12 to 20 and from 20 to 30!" },
          ],
          solution: [
            "For {{5 <= w < 20}}, width = {{15}} so {{FD = 45 / 15 = 3}}. Slice {{12}} to {{20}} has width {{8}}, giving {{8 * 3 = 24}}.",
            "For {{20 <= w < 40}}, width = {{20}} so {{FD = 28 / 20 = 1.4}}. Slice {{20}} to {{30}} has width {{10}}, giving {{10 * 1.4 = 14}}.",
            "Total = {{24 + 14 = 38}} people.",
          ],
          commonError: "Taking half of 5 ≤ w < 20 instead of exact fraction 8/15.",
          difficulty: "challenge",
          guideRef: "histograms-frequency-density",
          hints: [
            "Find `FD = 45 ÷ 15 = 3` for the first bar and multiply by width `20 − 12 = 8`.",
            "Find `FD = 28 ÷ 20 = 1.4` for the second bar and multiply by width `30 − 20 = 10`.",
            "Add both sub-interval counts together.",
          ],
          strategy: "Slice each bar using sub-width × FD",
        },
        {
          kind: "short",
          id: "vectors-sets-stats-p1-q14",
          question:
            "A bag contains {{4}} red balls and {{6}} blue balls. When a red ball is drawn on the 1st pick, it is **not** replaced; when a blue ball is drawn on the 1st pick, it **is** put back into the bag together with {{1}} extra blue ball before the 2nd pick! Find the probability that the 2nd ball drawn is red, as a fraction in simplest form.",
          answer: { type: "fraction", n: 58, d: 165, simplest: true },
          traps: [
            { spec: { type: "fraction", n: 19, d: 50 }, feedback: "After picking Blue, returning it PLUS 1 extra blue ball makes 11 balls total (4/11), not 10!" },
          ],
          solution: [
            "Case 1 (1st Red): {{P(R_1) = 4/10}}; not replaced leaves {{3}} red out of {{9}}, so {{P(R_1 ∩ R_2) = (4/10)*(3/9) = 12/90 = 2/15}}.",
            "Case 2 (1st Blue): {{P(B_1) = 6/10}}; returned + 1 extra blue gives {{4}} red and {{7}} blue ({{11}} total), so {{P(B_1 ∩ R_2) = (6/10)*(4/11) = 24/110 = 12/55}}.",
            "Sum: {{2/15 + 12/55 = 22/165 + 36/165 = 58/165}}.",
          ],
          commonError: "Using denominator 10 instead of 11 after adding the extra blue ball.",
          difficulty: "challenge",
          guideRef: "conditional-probability-trees",
          hints: [
            "Split into two branches according to the 1st pick: Red first vs Blue first.",
            "If Red is 1st (`4/10`), `3` red out of `9` remain; if Blue is 1st (`6/10`), `4` red out of `11` sit in the bag.",
            "Add {{(4/10)(3/9) + (6/10)(4/11)}} and simplify.",
          ],
          strategy: "Track physical bag state on each branch separately",
        },
      ],
    },
    {
      id: "vectors-sets-stats-p2",
      title: "Practice Paper 2 — Higher Problem Solving & Proof",
      questions: [
        {
          kind: "short",
          id: "vectors-sets-stats-p2-q01",
          question:
            "Relative to origin {{O}}, points {{A}} and {{B}} have position vectors {{OA = (-3, 7)}} and {{OB = (9, 2)}}. Find the exact length of segment {{AB}}.",
          answer: { type: "number", value: 13 },
          traps: [
            { spec: { type: "number", value: 10.8, tolerance: 0.1 }, feedback: "Check AB = OB − OA = (9 − (−3), 2 − 7) = (12, −5), not (9 − 3, 2 + 7)!" },
          ],
          solution: [
            "{{AB = OB - OA = (9 - (-3), 2 - 7) = (12, -5)}}.",
            "Length {{|AB| = sqrt(12^2 + (-5)^2) = sqrt(144 + 25) = sqrt(169) = 13}}.",
          ],
          commonError: "Computing 9 − 3 = 6 instead of 9 − (−3) = 12.",
          difficulty: "core",
          guideRef: "vector-geometry-proofs",
          hints: ["First find column vector {{AB = OB - OA}}.", "Watch {{9 - (-3)}}!"],
          strategy: "Displacement vector then Pythagoras",
        },
        {
          kind: "short",
          id: "vectors-sets-stats-p2-q02",
          question:
            "In trapezium {{OPQR}}, {{OP = 2a}}, {{OR = b}}, and {{RQ}} is parallel to {{OP}} with {{RQ = 5a}}. {{M}} is the midpoint of {{PQ}}. Express {{OM}} in terms of {{a}} and {{b}}.",
          answer: { type: "expression", expr: "(7/2)*a + (1/2)*b", form: "any", display: "{{(7/2)a + (1/2)b}}" },
          traps: [
            { spec: { type: "expression", expr: "(5/2)*a + (1/2)*b" }, feedback: "OQ = OR + RQ = b + 5a; averaging OP = 2a and OQ = 5a + b gives (7/2)a + (1/2)b!" },
          ],
          solution: [
            "First find {{OQ = OR + RQ = b + 5a}}.",
            "{{PQ = OQ - OP = 5a + b - 2a = 3a + b}}.",
            "{{OM = OP + (1/2)PQ = 2a + (3/2)a + (1/2)b = (7/2)a + (1/2)b}}.",
          ],
          commonError: "Taking RQ = 5a as OQ instead of routing O → R → Q.",
          difficulty: "core",
          guideRef: "vector-geometry-proofs",
          hints: ["Find {{OQ = OR + RQ = b + 5a}}.", "Use {{OM = OP + (1/2)(OQ - OP)}}."],
          strategy: "Midpoint position vector = ½(OP + OQ)",
        },
        {
          kind: "short",
          id: "vectors-sets-stats-p2-q03",
          question:
            "Vectors {{XY = 4a + (k - 1)b}} and {{YZ = 6a - 9b}} are parallel. Find the value of the scalar constant {{k}}.",
          answer: { type: "number", value: -5 },
          traps: [
            { spec: { type: "number", value: -6 }, feedback: "You found k − 1 = −6; add 1 to both sides to get k = −5!" },
          ],
          solution: [
            "Comparing coefficients of {{a}}: {{XY = (4/6)YZ = (2/3)(6a - 9b) = 4a - 6b}}.",
            "Equating coefficients of {{b}}: {{k - 1 = -6 => k = -5}}.",
          ],
          commonError: "Forgetting to solve k − 1 = −6 for k.",
          difficulty: "core",
          guideRef: "vector-geometry-proofs",
          hints: [
            "Compare the {{a}}-coefficients (`4` and `6`) to find the scalar multiplier `2/3`.",
            "Set {{k - 1 = (2/3)(-9)}}.",
          ],
          strategy: "Match ratio of coefficients of non-parallel base vectors",
        },
        {
          kind: "short",
          id: "vectors-sets-stats-p2-q04",
          question:
            "In a 2-set Venn diagram with {{n(ξ) = 52}}, {{n(A ∩ B') = 3x - 2}}, {{n(A ∩ B) = x + 1}}, {{n(A' ∩ B) = 2x + 3}}, and {{n((A ∪ B)') = 8}}. Find the value of {{x}}.",
          answer: { type: "number", value: 7 },
          traps: [
            { spec: { type: "number", value: 8 }, feedback: "Include +1 and −2 and +3 and +8 carefully: 6x + 10 = 52 → 6x = 42 → x = 7!" },
          ],
          solution: [
            "All four regions are already disjoint ('A only', 'both', 'B only', 'outside')!",
            "{{(3x - 2) + (x + 1) + (2x + 3) + 8 = 52}}.",
            "{{6x + 10 = 52 => 6x = 42 => x = 7}}.",
          ],
          commonError: "Subtracting (x + 1) again when A ∩ B' already means 'A only'.",
          difficulty: "core",
          guideRef: "sets-venn-diagrams",
          hints: [
            "Notice {{A ∩ B'}} and {{A' ∩ B}} are ALREADY the 'only' crescents!",
            "Sum all four expressions equal to `52`.",
          ],
          strategy: "Check whether given expressions are whole circles or 'only' crescents",
        },
        {
          kind: "short",
          id: "vectors-sets-stats-p2-q05",
          question:
            "Let {{ξ = {\"integers from 1 to 20 inclusive\"}}}, {{S = {\"square numbers\"}}}, and {{M = {\"multiples of 4\"}}}. One number is selected at random from {{ξ}}. Find {{P(S ∪ M)}}, giving your answer as a fraction in simplest form.",
          answer: { type: "fraction", n: 7, d: 20, simplest: true },
          traps: [
            { spec: { type: "fraction", n: 9, d: 20 }, feedback: "Don't double-count 4 and 16, which are BOTH square numbers and multiples of 4!" },
          ],
          solution: [
            "{{S = {1, 4, 9, 16}}} ({{4}} numbers) and {{M = {4, 8, 12, 16, 20}}} ({{5}} numbers).",
            "Overlap {{S ∩ M = {4, 16}}} ({{2}} numbers), so {{n(S ∪ M) = 4 + 5 - 2 = 7}} (`{1, 4, 8, 9, 12, 16, 20}`).",
            "Probability = {{7/20}}.",
          ],
          commonError: "Adding 4 + 5 = 9 without subtracting the overlap {4, 16}.",
          difficulty: "core",
          guideRef: "sets-venn-diagrams",
          hints: ["List {{S = {1, 4, 9, 16}}} and {{M = {4, 8, 12, 16, 20}}}.", "Count distinct elements in {{S ∪ M}} out of `20`."],
          strategy: "List elements and remove duplicates",
        },
        {
          kind: "short",
          id: "vectors-sets-stats-p2-q06",
          question:
            "A bag holds {{n}} counters, of which {{4}} are red and the rest are blue. Two counters are picked without replacement, and {{P(\"both red\") = 2/15}}. Find the total number of counters {{n}} in the bag.",
          answer: { type: "number", value: 10 },
          traps: [
            { spec: { type: "number", value: -9 }, feedback: "Number of counters n must be positive: n = 10!" },
          ],
          solution: [
            "{{(4/n) * (3/(n - 1)) = 2/15 => 12 / (n(n - 1)) = 2/15}}.",
            "Cross-multiply: {{2n(n - 1) = 180 => n^2 - n - 90 = 0}}.",
            "Factorise: {{(n - 10)(n + 9) = 0}}. Since {{n > 0}}, {{n = 10}}.",
          ],
          commonError: "Writing (4/n)² = 2/15 instead of (4/n)(3/(n − 1)) = 2/15.",
          difficulty: "challenge",
          guideRef: "conditional-probability-trees",
          hints: [
            "Set up {{(4/n) * (3/(n - 1)) = 2/15}}.",
            "Cross-multiply to obtain {{n(n - 1) = 90}}.",
            "Solve {{n^2 - n - 90 = 0}} for positive integer {{n}}.",
          ],
          strategy: "Form and solve quadratic from dependent probability",
        },
        {
          kind: "short",
          id: "vectors-sets-stats-p2-q07",
          question:
            "A medical screening test is given to a population where {{5%}} have a virus. If a person has the virus, the test is positive with probability {{0.96}}. If a person does NOT have the virus, the test still gives a false positive with probability {{0.08}}. Given that a randomly tested person receives a **positive** test result, find the probability they actually have the virus. Give your answer as a fraction in simplest form.",
          answer: { type: "fraction", n: 12, d: 31, simplest: true },
          traps: [
            { spec: { type: "fraction", n: 6, d: 125 }, feedback: "6/125 = 0.048 is P(virus AND positive); divide by total P(positive) = 0.048 + 0.076 = 0.124!" },
          ],
          solution: [
            "{{P(\"virus and +ve\") = 0.05 * 0.96 = 0.048}}.",
            "{{P(\"no virus and +ve\") = 0.95 * 0.08 = 0.076}}.",
            "Total {{P(\"+ve\") = 0.048 + 0.076 = 0.124}}.",
            "Conditional probability = {{0.048 / 0.124 = 48 / 124 = 12/31}}.",
          ],
          commonError: "Giving 0.048 without dividing by total P(positive) = 0.124.",
          difficulty: "challenge",
          guideRef: "conditional-probability-trees",
          hints: [
            "Calculate BOTH ways to test positive: `0.05 × 0.96` (true positive) and `0.95 × 0.08` (false positive).",
            "Add those two products to get overall `P(positive) = 0.124`.",
            "Divide `0.048` by `0.124` and simplify the fraction.",
          ],
          strategy: "Bayes tree: true positive ÷ (true positive + false positive)",
        },
        {
          kind: "short",
          id: "vectors-sets-stats-p2-q08",
          question:
            "The table shows daily screen times {{s}} (hours) for 50 teenagers: {{0 < s <= 1}} ({{f = 4}}), {{1 < s <= 3}} ({{f = 16}}), {{3 < s <= 5}} ({{f = 20}}), {{5 < s <= 9}} ({{f = 10}}). Calculate an estimate for the mean daily screen time.",
          answer: { type: "number", value: 3.68, display: "3.68 hours" },
          traps: [
            { spec: { type: "number", value: 4.8 }, feedback: "Use midpoints (0.5, 2, 4, 7), not upper boundaries (1, 3, 5, 9)!" },
          ],
          solution: [
            "Midpoints are {{0.5, 2, 4, 7}}.",
            "{{sum(f * x) = 4(0.5) + 16(2) + 20(4) + 10(7) = 2 + 32 + 80 + 70 = 184}}.",
            "Estimated mean = {{184 / 50 = 3.68}} hours.",
          ],
          commonError: "Finding midpoint of 5 < s ≤ 9 as 6.5 or 7.5 instead of (5 + 9)/2 = 7.",
          difficulty: "core",
          guideRef: "cumulative-frequency-quartiles",
          hints: ["Midpoints are `0.5, 2, 4, 7`.", "Compute {{184 / 50}}."],
          strategy: "Average lower and upper bounds for every midpoint",
        },
        {
          kind: "short",
          id: "vectors-sets-stats-p2-q09",
          question:
            "A cumulative frequency table for 80 seedlings connects {{(10, 12)}}, {{(20, 32)}}, {{(30, 62)}}, and {{(50, 80)}} with straight line segments (linear interpolation). Estimate the **median** height in cm, giving your answer to 1 decimal place.",
          answer: { type: "number", value: 22.7, tolerance: 0.1, display: "22.7 cm" },
          traps: [
            { spec: { type: "number", value: 25 }, feedback: "CF rises from 32 to 62 across 20 to 30; CF = 40 is 8/30 of the way across, not halfway!" },
          ],
          solution: [
            "Median sits at {{CF = 80 / 2 = 40}}, which lies between {{(20, 32)}} and {{(30, 62)}}.",
            "Fraction across the class = {{(40 - 32) / (62 - 32) = 8 / 30}}.",
            "Median = {{20 + (8/30) * 10 = 22.67}} cm ({{22.7}} cm to 1 d.p.).",
          ],
          commonError: "Assuming the median is simply the class midpoint 25.",
          difficulty: "challenge",
          guideRef: "cumulative-frequency-quartiles",
          hints: [
            "Half of `80` is `CF = 40`, which falls between `(20, 32)` and `(30, 62)`.",
            "Find what fraction of the rise `62 − 32 = 30` is needed to go from `32` to `40`.",
            "Interpolate: `20 + (8 / 30) × 10` to 1 decimal place.",
          ],
          strategy: "Linear interpolation across the median interval",
        },
        {
          kind: "short",
          id: "vectors-sets-stats-p2-q10",
          question:
            "In a histogram without vertical axis labels, the bar {{10 <= x < 25}} represents {{60}} items and is drawn {{8}} grid squares tall. How many grid squares tall should the bar {{25 <= x < 45}} be drawn if its frequency is {{50}}?",
          answer: { type: "number", value: 5 },
          traps: [
            { spec: { type: "number", value: 6.7, tolerance: 0.1 }, feedback: "Compare Frequency Densities (60/15 = 4 vs 50/20 = 2.5), not raw frequencies!" },
          ],
          solution: [
            "First bar: width = {{15}}, {{FD = 60 / 15 = 4}}, drawn {{8}} squares tall ({{2}} squares per unit of FD).",
            "Second bar: width = {{20}}, {{FD = 50 / 20 = 2.5}}.",
            "Height = {{2.5 * 2 = 5}} grid squares.",
          ],
          commonError: "Scaling 8 × (50/60) without dividing by the different class widths (15 vs 20).",
          difficulty: "core",
          guideRef: "histograms-frequency-density",
          hints: [
            "Compute `FD₁ = 60 ÷ 15 = 4` and `FD₂ = 50 ÷ 20 = 2.5`.",
            "Since `FD = 4` takes `8` squares, how many squares does `FD = 2.5` take?",
          ],
          strategy: "Convert frequencies to FD before scaling heights",
        },
        {
          kind: "short",
          id: "vectors-sets-stats-p2-q11",
          question:
            "A histogram has bars: {{0 <= t < 10}} (`FD = 1.4`), {{10 <= t < 25}} (`FD = 2.4`), and {{25 <= t < 40}} (`FD = 2.0`). Estimate the **upper quartile {{Q_3}}** of {{t}}.",
          answer: { type: "number", value: 30 },
          traps: [
            { spec: { type: "number", value: 60 }, feedback: "60 is the cumulative count 3N/4 — find the value of t on the horizontal axis where cumulative area reaches 60!" },
          ],
          solution: [
            "Bar areas: {{10(1.4) = 14}}, {{15(2.4) = 36}}, {{15(2.0) = 30}}. Total {{N = 14 + 36 + 30 = 80}}.",
            "{{Q_3}} sits at cumulative area {{(3/4) * 80 = 60}}.",
            "First two bars give {{14 + 36 = 50}}, so we need {{60 - 50 = 10}} inside {{25 <= t < 40}} (`FD = 2.0`), taking width {{10 / 2.0 = 5}}. Hence {{Q_3 = 25 + 5 = 30}}.",
          ],
          commonError: "Stopping at cumulative count 60 instead of interpolating t.",
          difficulty: "challenge",
          guideRef: "histograms-frequency-density",
          hints: [
            "Find the three bar areas (`14, 36, 30`), sum to `N = 80`, and compute `0.75 × 80 = 60`.",
            "First two bars total `14 + 36 = 50`, leaving `10` needed inside `25 ≤ t < 40`.",
            "Add `(10 ÷ 2.0)` to `t = 25`.",
          ],
          strategy: "Accumulate bar areas to 3N/4",
        },
        {
          kind: "written",
          id: "vectors-sets-stats-p2-q12",
          question:
            "Tariq draws a chart for grouped unequal intervals {{0 <= t < 5}} ({{f = 15}}), {{5 <= t < 15}} ({{f = 20}}), and {{15 <= t < 35}} ({{f = 30}}) by plotting bar heights {{15}}, {{20}}, and {{30}} directly on the vertical axis. Explain why Tariq's diagram is misleading and state the exact heights he should plot instead.",
          marks: 3,
          modelAnswer:
            "Because the class widths (`5, 10, 20`) are unequal, plotting raw counts distorts visual area; in a genuine histogram, bar area must represent frequency, so the vertical scale must show frequency density (`count ÷ width`). Dividing by widths `5, 10, 20` gives the correct heights `3, 2, 1.5`.",
          markScheme: [
            { point: "Explains that unequal widths distort bar areas / area must represent count", keywords: ["area", "frequency density", "count ÷ width", "divide by width"] },
            { point: "Finds widths 5, 10 and 20 (or uses FD formula)", keywords: ["5, 10, 20", "5, 10 and 20", "widths 5"] },
            { point: "States correct frequency densities 3, 2 and 1.5", keywords: ["3, 2, 1.5", "3, 2 and 1.5"] },
          ],
          commonError: "Saying 'there shouldn't be gaps' without mentioning Frequency Density and bar area.",
          difficulty: "core",
          guideRef: "histograms-frequency-density",
          hints: [
            "What represents frequency in a histogram when class widths differ?",
            "Calculate `FD = f ÷ width` for all three intervals (`15÷5`, `20÷10`, `30÷20`).",
          ],
          strategy: "Link unequal widths → bar area → Frequency Density",
        },
        {
          kind: "short",
          id: "vectors-sets-stats-p2-q13",
          question:
            "In a group of 48 musicians, {{x}} play both piano and violin, {{2x + 4}} play piano **only**, {{x + 5}} play violin **only**, and {{3}} play neither. Given that a randomly chosen musician plays the violin, find the probability they also play the piano, in simplest form.",
          answer: { type: "fraction", n: 9, d: 23, simplest: true },
          traps: [
            { spec: { type: "fraction", n: 9, d: 48 }, feedback: "Conditioning on 'plays the violin' sets the denominator to n(violin) = 9 + 14 = 23, not 48!" },
            { spec: { type: "fraction", n: 9, d: 14 }, feedback: "14 is 'violin only'; total violinists is x + (x + 5) = 9 + 14 = 23!" },
          ],
          solution: [
            "Sum all four disjoint regions: {{(2x + 4) + x + (x + 5) + 3 = 48 => 4x + 12 = 48 => x = 9}}.",
            "Total violinists = {{x + (x + 5) = 9 + 14 = 23}}, of whom {{x = 9}} play both.",
            "{{P(\"piano\" | \"violin\") = 9/23}}.",
          ],
          commonError: "Using 'violin only' (14) instead of total violinists (9 + 14 = 23) as denominator.",
          difficulty: "challenge",
          guideRef: "sets-venn-diagrams",
          hints: [
            "Equate `(2x + 4) + x + (x + 5) + 3 = 48` to find `x`.",
            "Work out total violinists = `x + (x + 5)` (both + violin only).",
            "Divide `x` by total violinists and check simplest form.",
          ],
          strategy: "Solve algebraic Venn first, then condition on target circle",
        },
        {
          kind: "written",
          id: "vectors-sets-stats-p2-q14",
          question:
            "In parallelogram {{OABC}}, {{OA = 4a}} and {{OC = 4c}}. {{M}} is the midpoint of {{AB}}, and {{N}} lies on {{OB}} such that {{ON : NB = 2 : 1}}. Prove using vectors that {{C}}, {{N}}, and {{M}} lie on a straight line.",
          marks: 4,
          modelAnswer:
            "Since {{OABC}} is a parallelogram, {{OB = 4a + 4c}}, so {{ON = (2/3)(4a + 4c) = (8/3)a + (8/3)c}}. Routing {{CN = ON - OC = (8/3)a - (4/3)c = (4/3)(2a - c)}}. Also {{OM = 4a + 2c}}, giving {{CM = OM - OC = 4a - 2c = 2(2a - c)}}. Thus {{CM = (3/2)CN}}, proving {{CM}} and {{CN}} are parallel; because they share the common vertex {{C}}, all three points are collinear.",
          markScheme: [
            { point: "Finds ON = (8/3)a + (8/3)c using OB = 4a + 4c", keywords: ["(8/3)a + (8/3)c", "8/3a + 8/3c", "(2/3)(4a + 4c)"] },
            { point: "Finds CN = (8/3)a − (4/3)c (or (4/3)(2a − c))", keywords: ["(8/3)a - (4/3)c", "(4/3)(2a - c)", "8/3a - 4/3c"] },
            { point: "Finds CM = 4a − 2c = 2(2a − c) and shows scalar multiple / parallel", keywords: ["4a - 2c", "2(2a - c)", "parallel"] },
            { point: "States shared / common vertex C", keywords: ["common", "share", "shared"] },
          ],
          commonError: "Writing OB = 4c − 4a instead of diagonal OB = OA + OC = 4a + 4c.",
          difficulty: "challenge",
          guideRef: "vector-geometry-proofs",
          hints: [
            "In parallelogram {{OABC}} (labelled around the perimeter!), {{OB = OA + OC = 4a + 4c}} and {{AB = OC = 4c}}.",
            "Find {{CN = ON - OC}} and {{CM = OM - OC}}, then factorise both.",
            "State both the scalar multiple (parallel) AND the shared vertex {{C}}!",
          ],
          strategy: "Route from origin O first, then form CN and CM",
        },
      ],
    },
  ],
  challenge: [
    {
      kind: "short",
      id: "vectors-sets-stats-ch-q01",
      question:
        "In triangle {{OAB}}, {{OA = a}} and {{OB = b}}. Point {{D}} lies on {{OA}} with {{OD : DA = 2 : 1}}. Point {{E}} lies on {{OB}} with {{OE : EB = 1 : 3}}. Lines {{AE}} and {{BD}} intersect at {{X}}. Given {{AX = k * AE}} and {{BX = m * BD}}, find the exact fraction {{k}}.",
      commonError: "Using OD = (1/2)a or OE = (1/3)b — a ratio 2 : 1 means 2/3 of the line and 1 : 3 means 1/4 of the line.",
      answer: { type: "fraction", n: 2, d: 5, simplest: true },
      solution: [
        "{{OD = (2/3)a}} and {{OE = (1/4)b}}.",
        "Via {{AE}}: {{OX = OA + k(OE - OA) = (1 - k)a + (k/4)b}}.",
        "Via {{BD}}: {{OX = OB + m(OD - OB) = (2m/3)a + (1 - m)b}}.",
        "Since {{a}} and {{b}} are non-parallel, equate coefficients: {{1 - k = (2/3)m}} and {{k/4 = 1 - m => m = 1 - k/4}}.",
        "Substitute: {{1 - k = (2/3)(1 - k/4) = 2/3 - k/6 => (5/6)k = 1/3 => k = 2/5}}.",
      ],
      difficulty: "challenge",
      guideRef: "vector-geometry-proofs",
      hints: [
        "Express {{OX}} in TWO ways: first along {{O -> A -> X}} using {{k}}, and second along {{O -> B -> X}} using {{m}}.",
        "Because {{a}} and {{b}} are non-parallel, equate the {{a}}-coefficients and equate the {{b}}-coefficients.",
        "Solve {{1 - k = (2/3)m}} and {{k/4 = 1 - m}} simultaneously for {{k}}.",
      ],
      strategy: "Express OX via two intersecting lines and equate coefficients",
    },
    {
      kind: "short",
      id: "vectors-sets-stats-ch-q02",
      question:
        "In triangle {{OAB}}, {{M}} is the midpoint of {{OA}} ({{OM = (1/2)a}}) and {{N}} is the midpoint of {{OB}} ({{ON = (1/2)b}}). Medians {{AN}} and {{BM}} intersect at centroid {{G}}. If {{OG = k(a + b)}}, find the exact fraction {{k}}.",
      commonError: "Guessing k = 1/2 (the midpoint) instead of equating coefficients of a and b along both medians to get the centroid OG = (1/3)(a + b).",
      answer: { type: "fraction", n: 1, d: 3, simplest: true },
      solution: [
        "Along median {{AN}}: {{OG = a + t((1/2)b - a) = (1 - t)a + (t/2)b}}.",
        "By symmetry (or equating with {{OG = b + s((1/2)a - b)}}), {{1 - t = t/2 => (3/2)t = 1 => t = 2/3}}.",
        "Hence {{OG = (1/3)a + (1/3)b = (1/3)(a + b)}}, so {{k = 1/3}}.",
      ],
      difficulty: "challenge",
      guideRef: "vector-geometry-proofs",
      hints: [
        "Write {{AN = (1/2)b - a}} and {{OG = a + t * AN}}.",
        "Use symmetry (the coefficients of {{a}} and {{b}} in {{OG = k(a + b)}} must be equal!).",
        "Solve {{1 - t = t/2}} to find {{t}} and hence {{k}}.",
      ],
      strategy: "Exploit symmetry when equating vector coefficients",
    },
    {
      kind: "short",
      id: "vectors-sets-stats-ch-q03",
      question:
        "In a cohort of 100 students taking Spanish ({{S}}), Economics ({{E}}), and Art ({{A}}): {{n(S) = 52}}, {{n(E) = 47}}, {{n(A) = 38}}, {{n(S ∩ E) = 22}}, {{n(E ∩ A) = 17}}, {{n(S ∩ A) = 15}}, and {{9}} students take none of the three subjects. Find {{n(S ∩ E ∩ A)}}, the number taking all three.",
      commonError: "Forgetting to subtract the 9 students in none of the sets, or adding the pairwise intersections instead of subtracting them.",
      answer: { type: "number", value: 8 },
      solution: [
        "Students in at least one set: {{n(S ∪ E ∪ A) = 100 - 9 = 91}}.",
        "Let {{n(S ∩ E ∩ A) = x}}. By 3-set inclusion–exclusion: {{52 + 47 + 38 - 22 - 17 - 15 + x = 91}}.",
        "{{137 - 54 + x = 91 => 83 + x = 91 => x = 8}}.",
      ],
      difficulty: "challenge",
      guideRef: "sets-venn-diagrams",
      hints: [
        "Let the central 3-way overlap {{n(S ∩ E ∩ A) = x}}.",
        "Express the 3 petals as {{22 - x}}, {{17 - x}}, {{15 - x}}, and the 3 'only' regions in terms of {{x}}.",
        "Equate the sum of all 7 inner regions to {{100 - 9 = 91}} and solve for {{x}}.",
      ],
      strategy: "Let 3-way centre = x and work outward",
    },
    {
      kind: "short",
      id: "vectors-sets-stats-ch-q04",
      question:
        "A bag contains {{r}} red tokens and {{6}} blue tokens, where {{r < 6}}. Two tokens are drawn at random without replacement. Given that {{P(\"one token of each colour\") = 8/15}}, find the value of {{r}}.",
      commonError: "Counting only one order (red then blue) instead of doubling for both orders, or keeping r + 6 in the second denominator.",
      answer: { type: "number", value: 4 },
      solution: [
        "Total tokens = {{r + 6}}. {{P(\"one of each\") = 2 * (r/(r + 6)) * (6/(r + 5)) = 12r / ((r + 6)(r + 5))}}.",
        "Equate to {{8/15}}: divide both numerators by 4 → {{3r / (r^2 + 11r + 30) = 2/15}}.",
        "Cross-multiply: {{45r = 2r^2 + 22r + 60 => 2r^2 - 23r + 60 = 0 => (r - 4)(2r - 15) = 0}}.",
        "Since {{r}} is an integer with {{r < 6}}, {{r = 4}}.",
      ],
      difficulty: "challenge",
      guideRef: "conditional-probability-trees",
      hints: [
        "Write total tokens as {{r + 6}}, and remember 'one of each' has TWO orders: {{RB + BR}}.",
        "Set {{12r / ((r + 6)(r + 5)) = 8/15}} and cross-multiply.",
        "Solve {{2r^2 - 23r + 60 = 0}} for integer {{r}}.",
      ],
      strategy: "Include factor of 2 for RB + BR in algebraic tree equations",
    },
    {
      kind: "short",
      id: "vectors-sets-stats-ch-q05",
      question:
        "Box A holds 3 gold and 2 silver coins. Box B holds 1 gold and 4 silver coins. One coin is transferred unseen from Box A into Box B, and then one coin is picked at random from Box B. Given that the coin picked from Box B is **gold**, find the conditional probability that the transferred coin was **gold**, in simplest form.",
      commonError: "Keeping Box B's total at 5 after the transfer — it now holds 6 coins.",
      answer: { type: "fraction", n: 3, d: 4, simplest: true },
      solution: [
        "Branch 1 (transfer Gold, {{3/5}}): Box B now has {{2}} gold, {{4}} silver ({{6}} coins), so {{P(G_A ∩ G_B) = (3/5)*(2/6) = 6/30}}.",
        "Branch 2 (transfer Silver, {{2/5}}): Box B now has {{1}} gold, {{5}} silver ({{6}} coins), so {{P(S_A ∩ G_B) = (2/5)*(1/6) = 2/30}}.",
        "Total {{P(G_B) = 6/30 + 2/30 = 8/30}}.",
        "{{P(G_A | G_B) = (6/30) / (8/30) = 6/8 = 3/4}}.",
      ],
      difficulty: "challenge",
      guideRef: "conditional-probability-trees",
      hints: [
        "Note that AFTER transferring 1 coin into Box B, Box B contains **6** coins in both branches!",
        "Calculate {{P(\"transfer G and pick G\") = (3/5)(2/6)}} and {{P(\"transfer S and pick G\") = (2/5)(1/6)}}.",
        "Divide the first branch product by the sum of both.",
      ],
      strategy: "Two-box transfer tree + reverse conditional probability",
    },
    {
      kind: "short",
      id: "vectors-sets-stats-ch-q06",
      question:
        "For 50 athletes, grouped sprint times {{t}} (seconds) are {{10 < t <= 12}} ({{f = 10}}), {{12 < t <= 14}} ({{f = k}}), and {{14 < t <= 18}} ({{f = 40 - k}}). Given that the estimated mean sprint time is {{13.68}} seconds, find {{k}}.",
      commonError: "Using class boundaries (12, 14, 18) instead of midpoints (11, 13, 16) when estimating the mean.",
      answer: { type: "number", value: 22 },
      solution: [
        "Midpoints are {{11}}, {{13}}, and {{16}}.",
        "{{sum(f * x) = 10(11) + 13k + 16(40 - k) = 110 + 13k + 640 - 16k = 750 - 3k}}.",
        "Equate {{(750 - 3k) / 50 = 13.68 => 750 - 3k = 684 => 3k = 66 => k = 22}}.",
      ],
      difficulty: "challenge",
      guideRef: "cumulative-frequency-quartiles",
      hints: [
        "Find midpoints `11, 13, 16`.",
        "Write {{10(11) + 13k + 16(40 - k) = 50 * 13.68}}.",
        "Solve the linear equation for {{k}}.",
      ],
      strategy: "Work backwards from ∑fx = N × mean",
    },
    {
      kind: "short",
      id: "vectors-sets-stats-ch-q07",
      question:
        "A histogram has 4 unequal bars: {{0 <= x < 10}} (`FD = 1.2`), {{10 <= x < 20}} (`FD = 3.2`), {{20 <= x < 35}} (`FD = 1.6`), and {{35 <= x < 55}} (`FD = 0.6`). Estimate the **interquartile range (IQR)** of {{x}}.",
      commonError: "Reading quartiles from bar heights (frequency density) instead of accumulating frequency = FD × class width.",
      answer: { type: "number", value: 17.5 },
      solution: [
        "Frequencies: {{10(1.2) = 12}}, {{10(3.2) = 32}}, {{15(1.6) = 24}}, {{20(0.6) = 12}}. Total {{N = 80}}.",
        "{{Q_1}} is at area {{80 / 4 = 20}} (inside {{10 <= x < 20}}): need {{20 - 12 = 8}} past {{10}}, so {{Q_1 = 10 + 8 / 3.2 = 12.5}}.",
        "{{Q_3}} is at area {{3 * 80 / 4 = 60}} (inside {{20 <= x < 35}}): first two bars total {{44}}, need {{60 - 44 = 16}} past {{20}}, so {{Q_3 = 20 + 16 / 1.6 = 30}}.",
        "{{IQR = 30 - 12.5 = 17.5}}.",
      ],
      difficulty: "challenge",
      guideRef: "histograms-frequency-density",
      hints: [
        "Calculate all four bar areas (`12, 32, 24, 12`) to find total `N = 80`, then find `N/4 = 20` and `3N/4 = 60`.",
        "Interpolate `Q₁` inside `10 ≤ x < 20` (`10 + 8 ÷ 3.2`) and `Q₃` inside `20 ≤ x < 35` (`20 + 16 ÷ 1.6`).",
        "Compute {{Q_3 - Q_1}}.",
      ],
      strategy: "Slice histogram areas at N/4 and 3N/4",
    },
    {
      kind: "short",
      id: "vectors-sets-stats-ch-q08",
      question:
        "Two data sets are merged: Group 1 contains {{30}} values with median {{42}} and mean {{45}}; Group 2 contains {{20}} values shown on a histogram with two bars: {{20 <= x < 40}} (`FD = 0.6`) and {{40 <= x < 60}} (`FD = 0.4`). Calculate an estimate for the **combined mean** of all {{50}} values.",
      commonError: "Averaging the two group means (or using Group 1's median) instead of combining totals: (1350 + 760) ÷ 50.",
      answer: { type: "number", value: 42.2 },
      solution: [
        "Group 1 sum = {{30 * 45 = 1350}} (ignore median 42 — means combine via sums!).",
        "Group 2 frequencies: {{20 * 0.6 = 12}} (midpoint {{30}}) and {{20 * 0.4 = 8}} (midpoint {{50}}).",
        "Group 2 estimated sum = {{12(30) + 8(50) = 360 + 400 = 760}}.",
        "Combined mean = {{(1350 + 760) / 50 = 2110 / 50 = 42.2}}.",
      ],
      difficulty: "challenge",
      guideRef: "histograms-frequency-density",
      hints: [
        "Ignore the median 42 (distractor!) — find Group 1's total sum `30 × 45`.",
        "Recover Group 2's frequencies from bar areas (`20 × 0.6 = 12` and `20 × 0.4 = 8`) and multiply by midpoints (`30` and `50`).",
        "Add both total sums and divide by `50`.",
      ],
      strategy: "Recover frequencies from histogram, then combine ∑fx",
    },
  ],
};
