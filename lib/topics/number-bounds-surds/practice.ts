import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      kind: "short",
      id: "number-bounds-surds-quiz-q01",
      question: "A pole's height {{h}} m is rounded to 1 decimal place as {{7.4}} m. Write down the **lower bound** of {{h}}.",
      answer: { type: "number", value: 7.35, display: "7.35 m" },
      traps: [
        { spec: { type: "number", value: 7.3 }, feedback: "1 d.p. has rounding unit 0.1, so halve it to subtract 0.05 (not 0.1)." },
        { spec: { type: "number", value: 7.45 }, feedback: "7.45 is the upper bound — subtract 0.05 for the lower bound." },
      ],
      solution: [
        "1 decimal place means a rounding unit of {{0.1}} m.",
        "Half a unit is {{0.05}} m, so {{LB = 7.4 - 0.05 = 7.35}} m.",
      ],
      difficulty: "warmup",
      guideRef: "upper-lower-bounds",
      hints: ["Halve the rounding unit {{0.1}}.", "Subtract {{0.05}} from {{7.4}}."],
    },
    {
      kind: "short",
      id: "number-bounds-surds-quiz-q02",
      question: "Given {{a = 80}} (correct to the nearest 10) and {{b = 25}} (correct to the nearest 5), find the **lower bound** of {{a - b}}.",
      answer: { type: "number", value: 47.5 },
      traps: [
        { spec: { type: "number", value: 52.5 }, feedback: "You subtracted LB(b) = 22.5; to MINIMISE a − b, subtract UB(b) = 27.5!" },
        { spec: { type: "number", value: 62.5 }, feedback: "62.5 is the upper bound (85 − 22.5), not the lower bound." },
      ],
      solution: [
        "For {{a = 80}} (nearest 10): {{LB(a) = 75}}, {{UB(a) = 85}}.",
        "For {{b = 25}} (nearest 5): {{LB(b) = 22.5}}, {{UB(b) = 27.5}}.",
        "{{LB(a - b) = LB(a) - UB(b) = 75 - 27.5 = 47.5}}.",
      ],
      commonError: "Subtracting LB(b) instead of UB(b) when finding the lower bound of a difference.",
      difficulty: "core",
      guideRef: "upper-lower-bounds",
      hints: [
        "Find individual bounds: {{a}} is ±5; {{b}} is ±2.5.",
        "To make {{a - b}} as small as possible, use {{LB(a) - UB(b)}}.",
      ],
    },
    {
      kind: "short",
      id: "number-bounds-surds-quiz-q03",
      question: "Work out {{(3 * 10^6) * (7 * 10^(-2))}}. Give your answer in standard form.",
      answer: { type: "number", value: 210000, standardForm: true, display: "{{2.1 * 10^5}}" },
      traps: [
        { spec: { type: "number", value: 21000, standardForm: true, display: "{{2.1 * 10^4}}" }, feedback: "21 × 10^4 = (2.1 × 10^1) × 10^4 = 2.1 × 10^5, not 10^4." },
      ],
      solution: [
        "Multiply coefficients and add powers of 10: {{21 * 10^(6 + (-2)) = 21 * 10^4}}.",
        "Adjust into standard form ({{1 <= A < 10}}): {{2.1 * 10^5}}.",
      ],
      difficulty: "warmup",
      guideRef: "standard-form-recurring",
      hints: ["{{3 * 7 = 21}} and {{10^6 * 10^(-2) = 10^4}}.", "Rewrite {{21 * 10^4}} with {{A = 2.1}}."],
    },
    {
      kind: "short",
      id: "number-bounds-surds-quiz-q04",
      question: "Convert the recurring decimal {{0.636363...}} into a fraction in its simplest form.",
      answer: { type: "fraction", n: 7, d: 11, simplest: true },
      traps: [
        { spec: { type: "fraction", n: 63, d: 100 }, feedback: "63/100 is the terminating decimal 0.63; use 100x − x = 99x for recurring 63." },
      ],
      solution: [
        "Let {{x = 0.636363...}}, so {{100x = 63.636363...}}.",
        "Subtract: {{99x = 63 -> x = 63/99}}.",
        "Divide numerator and denominator by {{9}}: {{x = 7/11}}.",
      ],
      difficulty: "core",
      guideRef: "standard-form-recurring",
      hints: ["Use {{100x - x = 99x}} since two digits repeat.", "Simplify {{63/99}} by dividing by 9."],
    },
    {
      kind: "short",
      id: "number-bounds-surds-quiz-q05",
      question: "Evaluate {{81^(-3/4)}} as a fraction in its simplest form.",
      answer: { type: "fraction", n: 1, d: 27, simplest: true },
      traps: [
        { spec: { type: "number", value: -27 }, feedback: "A negative power means reciprocal (1 over ...), never a negative sign." },
        { spec: { type: "number", value: 27 }, feedback: "Don't forget the negative sign in the exponent: flip 27 to 1/27." },
      ],
      solution: [
        "Negative sign gives reciprocal: {{1 / 81^(3/4)}}.",
        "4th root of 81 is {{3}}, and {{3^3 = 27}}, giving {{1/27}}.",
      ],
      difficulty: "warmup",
      guideRef: "fractional-negative-indices",
      hints: ["Take the 4th root of 81 first ({{3}}), cube it, then take the reciprocal."],
    },
    {
      kind: "short",
      id: "number-bounds-surds-quiz-q06",
      question: "Solve {{4^(2x - 1) = 32}}.",
      answer: { type: "number", value: 1.75, display: "{{7/4}}" },
      traps: [
        { spec: { type: "number", value: 1.5 }, feedback: "Check your expansion of 2(2x − 1): it is 4x − 2, not 4x − 1." },
      ],
      solution: [
        "Rewrite both sides in base 2: {{(2^2)^(2x - 1) = 2^5}}.",
        "Simplify left-hand exponent: {{2^(4x - 2) = 2^5}}.",
        "Equate powers: {{4x - 2 = 5 -> 4x = 7 -> x = 7/4}} (or {{1.75}}).",
      ],
      difficulty: "core",
      guideRef: "fractional-negative-indices",
      hints: ["Write {{4 = 2^2}} and {{32 = 2^5}}.", "Equate {{2(2x - 1) = 5}} and solve for {{x}}."],
    },
    {
      kind: "short",
      id: "number-bounds-surds-quiz-q07",
      question: "Simplify {{sqrt(98) - sqrt(18)}}.",
      answer: { type: "expression", expr: "4*sqrt(2)", form: "simplified" },
      traps: [
        { spec: { type: "expression", expr: "sqrt(80)" }, feedback: "Never subtract under square roots! Simplify each surd into a multiple of sqrt(2) first." },
      ],
      solution: [
        "{{sqrt(98) = sqrt(49 * 2) = 7*sqrt(2)}} and {{sqrt(18) = sqrt(9 * 2) = 3*sqrt(2)}}.",
        "{{7*sqrt(2) - 3*sqrt(2) = 4*sqrt(2)}}.",
      ],
      difficulty: "warmup",
      guideRef: "surds-simplifying-expanding",
      hints: ["Factor out {{49}} from {{98}} and {{9}} from {{18}}."],
    },
    {
      kind: "short",
      id: "number-bounds-surds-quiz-q08",
      question: "Expand and simplify {{(3 + sqrt(6))^2}}.",
      answer: { type: "expression", expr: "15 + 6*sqrt(6)", form: "simplified" },
      traps: [
        { spec: { type: "number", value: 15 }, feedback: "Don't just square both terms — (3 + sqrt(6))(3 + sqrt(6)) has two middle 3*sqrt(6) terms!" },
      ],
      solution: [
        "{{(3 + sqrt(6))(3 + sqrt(6)) = 9 + 3*sqrt(6) + 3*sqrt(6) + 6}}.",
        "Collect integers and surds: {{15 + 6*sqrt(6)}}.",
      ],
      difficulty: "core",
      guideRef: "surds-simplifying-expanding",
      hints: [
        "Write out {{(3 + sqrt(6))(3 + sqrt(6))}} explicitly.",
        "Combine {{9 + 6}} and {{3*sqrt(6) + 3*sqrt(6)}}.",
      ],
    },
    {
      kind: "short",
      id: "number-bounds-surds-quiz-q09",
      question: "Rationalise the denominator and simplify {{18 / sqrt(6)}}.",
      answer: { type: "expression", expr: "3*sqrt(6)", form: "simplified" },
      traps: [
        { spec: { type: "expression", expr: "18*sqrt(6)" }, feedback: "Remember to divide 18 by (sqrt(6) × sqrt(6)) = 6." },
      ],
      solution: [
        "Multiply top and bottom by {{sqrt(6)}}: {{(18*sqrt(6)) / 6}}.",
        "Cancel {{18 / 6 = 3}} to get {{3*sqrt(6)}}.",
      ],
      difficulty: "warmup",
      guideRef: "rationalising-denominators",
      hints: ["Multiply numerator and denominator by {{sqrt(6)}}."],
    },
    {
      kind: "short",
      id: "number-bounds-surds-quiz-q10",
      question: "Rationalise the denominator and simplify {{8 / (3 + sqrt(5))}}.",
      answer: { type: "expression", expr: "6 - 2*sqrt(5)", form: "simplified" },
      traps: [
        { spec: { type: "expression", expr: "6 + 2*sqrt(5)" }, feedback: "Multiply by the conjugate (3 − sqrt(5)), with a MINUS sign!" },
      ],
      solution: [
        "Multiply top and bottom by the conjugate {{(3 - sqrt(5))}}.",
        "Denominator: {{3^2 - (sqrt(5))^2 = 9 - 5 = 4}}.",
        "{{8(3 - sqrt(5)) / 4 = 2(3 - sqrt(5)) = 6 - 2*sqrt(5)}}.",
      ],
      difficulty: "core",
      guideRef: "rationalising-denominators",
      hints: [
        "Multiply top and bottom by {{(3 - sqrt(5))}}.",
        "Divide {{8(3 - sqrt(5))}} by {{9 - 5 = 4}}.",
      ],
    },
  ],
  papers: [
    {
      id: "number-bounds-surds-p1",
      title: "Practice Paper 1 — Bounds, Standard Form & Surds",
      questions: [
        {
          kind: "short",
          id: "number-bounds-surds-p1-q01",
          question: "A metal rod has length {{160}} mm, rounded to the nearest {{10}} mm. Write down the lower bound and upper bound of its length in mm (lower bound first, separated by a comma).",
          answer: { type: "list", values: [155, 165], ordered: true, display: "155 mm, 165 mm" },
          traps: [
            { spec: { type: "list", values: [159.5, 160.5], ordered: true }, feedback: "159.5 and 160.5 are for nearest 1 mm — nearest 10 mm adds and subtracts 5 mm." },
          ],
          solution: [
            "Rounding unit {{u = 10}} mm, so half-unit is {{5}} mm.",
            "Lower bound = {{160 - 5 = 155}} mm; upper bound = {{160 + 5 = 165}} mm.",
          ],
          commonError: "Using ±0.5 instead of ±5 when rounding to the nearest 10.",
          difficulty: "warmup",
          guideRef: "upper-lower-bounds",
          hints: ["Halve {{10}} mm to get {{5}} mm."],
        },
        {
          kind: "short",
          id: "number-bounds-surds-p1-q02",
          question: "A positive decimal {{n}} is **truncated** to 1 decimal place to give {{6.3}}. Write down the lower bound and upper bound of {{n}} (lower bound first, separated by a comma).",
          answer: { type: "list", values: [6.3, 6.4], ordered: true, display: "6.3, 6.4" },
          traps: [
            { spec: { type: "list", values: [6.25, 6.35], ordered: true }, feedback: "6.25 and 6.35 are the bounds for ROUNDING; truncation starts at 6.3 and goes up to 6.4." },
          ],
          solution: [
            "Truncating to 1 d.p. keeps `6.3` for every value from {{6.3}} inclusive up to {{6.4}} exclusive.",
            "Lower bound = {{6.3}}, upper bound = {{6.4}}.",
          ],
          commonError: "Confusing truncation bounds (6.3 to 6.4) with rounding bounds (6.25 to 6.35).",
          difficulty: "core",
          guideRef: "upper-lower-bounds",
          hints: [
            "Truncation chops off digits after the tenths place rather than rounding.",
            "What is the smallest number that starts `6.3...`? What starts `6.4...`?",
          ],
        },
        {
          kind: "short",
          id: "number-bounds-surds-p1-q03",
          question: "Pressure is given by {{P = F / A}}. Force {{F = 94}} N (correct to the nearest newton) acts on area {{A = 4}} m² (correct to the nearest m²). Calculate the **upper bound** of the pressure {{P}} in N/m².",
          answer: { type: "number", value: 27, display: "27 N/m²" },
          traps: [
            { spec: { type: "number", value: 21 }, feedback: "You divided UB(F) = 94.5 by UB(A) = 4.5! Divide by LB(A) = 3.5 to maximise F / A." },
            { spec: { type: "number", value: 23.5 }, feedback: "23.5 uses the rounded values 94 / 4 instead of bounds." },
          ],
          solution: [
            "Individual bounds: {{93.5 <= F < 94.5}} and {{3.5 <= A < 4.5}}.",
            "{{UB(P) = UB(F) / LB(A) = 94.5 / 3.5 = 27}} N/m².",
          ],
          commonError: "Dividing UB(F) by UB(A) instead of LB(A).",
          difficulty: "core",
          guideRef: "upper-lower-bounds",
          hints: [
            "Find {{UB(F)}} and {{LB(A)}} first.",
            "Smaller area produces higher pressure: compute {{94.5 / 3.5}}.",
          ],
        },
        {
          kind: "short",
          id: "number-bounds-surds-p1-q04",
          question: "Work out {{(4.8 * 10^9) / (1.2 * 10^(-3))}}. Give your answer in standard form.",
          answer: { type: "number", value: 4e12, standardForm: true, display: "{{4 * 10^(12)}}" },
          traps: [
            { spec: { type: "number", value: 4e6, standardForm: true, display: "{{4 * 10^6}}" }, feedback: "Subtracting a negative power ADDS: 9 − (−3) = 12, not 6." },
          ],
          solution: [
            "Divide front numbers: {{4.8 / 1.2 = 4}}.",
            "Subtract powers of 10: {{9 - (-3) = 12}}, giving {{4 * 10^(12)}}.",
          ],
          commonError: "Calculating 9 − (−3) as 6 instead of 12.",
          difficulty: "core",
          guideRef: "standard-form-recurring",
          hints: [
            "Divide {{4.8 / 1.2}}.",
            "Use {{10^9 / 10^(-3) = 10^(9 - (-3))}}.",
          ],
        },
        {
          kind: "short",
          id: "number-bounds-surds-p1-q05",
          question: "Work out {{(5.4 * 10^6) - (7.2 * 10^5)}}. Give your answer in standard form.",
          answer: { type: "number", value: 4680000, standardForm: true, display: "{{4.68 * 10^6}}" },
          traps: [
            { spec: { type: "number", value: -1800000 }, feedback: "Don't subtract 5.4 − 7.2 directly — their powers of 10 are different (10^6 vs 10^5)!" },
          ],
          solution: [
            "Rewrite {{7.2 * 10^5 = 0.72 * 10^6}}.",
            "Subtract mantissas: {{(5.4 - 0.72) * 10^6 = 4.68 * 10^6}}.",
          ],
          commonError: "Subtracting 5.4 − 7.2 without matching powers of 10 first.",
          difficulty: "core",
          guideRef: "standard-form-recurring",
          hints: [
            "Write {{7.2 * 10^5}} as {{0.72 * 10^6}} so both share {{10^6}}.",
            "Subtract {{5.4 - 0.72}}.",
          ],
        },
        {
          kind: "written",
          id: "number-bounds-surds-p1-q06",
          question: "Prove algebraically that the recurring decimal {{0.2636363...}} (where `63` recurs) can be written as a fraction in its simplest form.",
          marks: 3,
          modelAnswer:
            "Let {{x = 0.2636363...}}. Multiply by 10 to shift the non-recurring digit: {{10x = 2.636363...}}, and multiply by 1000: {{1000x = 263.636363...}}. Subtracting gives {{1000x - 10x = 990x = 261}}, so {{x = 261 / 990}}. Dividing numerator and denominator by 9 gives {{x = 29 / 110}}.",
          markScheme: [
            {
              point: "Forms two powers-of-10 multiples with aligned recurring tails (10x = 2.6363... and 1000x = 263.6363...)",
              keywords: ["10x", "1000x", "99x = 26.1"],
            },
            {
              point: "Subtracts to eliminate the infinite decimal tail (990x = 261 or 261/990)",
              keywords: ["990x", "261"],
            },
            {
              point: "Cancels common factor 9 to obtain simplest fraction 29/110",
              keywords: ["29/110", "29 / 110"],
            },
          ],
          commonError: "Using 100x − x = 99x when the tenths digit `2` does not recur, or writing 29/110 from a calculator with zero algebraic lines.",
          difficulty: "core",
          guideRef: "standard-form-recurring",
          hints: [
            "Let {{x = 0.2636363...}} and write down {{10x}} so the recurring `.6363...` starts straight after the decimal point.",
            "Write down {{1000x}}, subtract {{1000x - 10x}}, and simplify the resulting fraction.",
          ],
        },
        {
          kind: "short",
          id: "number-bounds-surds-p1-q07",
          question: "Evaluate {{(8 / 27)^(-2/3)}} as an improper fraction in its simplest form.",
          answer: { type: "fraction", n: 9, d: 4, form: "improper", simplest: true },
          traps: [
            { spec: { type: "fraction", n: 4, d: 9 }, feedback: "You found (8/27)^(2/3) = 4/9 — remember the negative index flips the fraction to 9/4!" },
            { spec: { type: "fraction", n: -9, d: 4 }, feedback: "A negative power flips the fraction; it never makes a positive base negative." },
          ],
          solution: [
            "Flip for the negative index: {{(27 / 8)^(2/3)}}.",
            "Cube root top and bottom: {{(3 / 2)^2}}.",
            "Square top and bottom: {{9 / 4}}.",
          ],
          commonError: "Forgetting to take the reciprocal for the negative exponent.",
          difficulty: "warmup",
          guideRef: "fractional-negative-indices",
          hints: ["Flip {{8/27}} to {{27/8}} first, then cube-root, then square."],
        },
        {
          kind: "short",
          id: "number-bounds-surds-p1-q08",
          question: "Simplify fully {{(16x^(12) y^(-8))^(3/4)}}.",
          answer: { type: "expression", expr: "(8*x^9)/y^6", form: "any" },
          traps: [
            { spec: { type: "expression", expr: "(12*x^9)/y^6" }, feedback: "Raise 16 to the power 3/4: (4th root of 16)^3 = 2^3 = 8, not 16 × 3/4 = 12!" },
            { spec: { type: "expression", expr: "(16*x^9)/y^6" }, feedback: "Apply the outside exponent 3/4 to the numerical coefficient 16 too!" },
          ],
          solution: [
            "Apply power {{3/4}} to {{16}}: {{(16^(1/4))^3 = 2^3 = 8}}.",
            "Multiply variable powers by {{3/4}}: {{x^(12 * 3/4) = x^9}} and {{y^(-8 * 3/4) = y^(-6)}}.",
            "Result: {{8x^9 y^(-6)}} (or {{(8x^9) / y^6}}).",
          ],
          commonError: "Multiplying the coefficient 16 by 3/4 instead of raising 16 to the power 3/4.",
          difficulty: "core",
          guideRef: "fractional-negative-indices",
          hints: [
            "Evaluate {{16^(3/4)}} carefully: 4th root of 16 is 2, then cube it.",
            "Multiply the exponents {{12}} and {{-8}} by {{3/4}}.",
          ],
        },
        {
          kind: "short",
          id: "number-bounds-surds-p1-q09",
          question: "Solve {{9^(2x - 1) = 27^(x + 1)}}.",
          answer: { type: "number", value: 5, display: "x = 5" },
          traps: [
            { spec: { type: "number", value: 2 }, feedback: "Distribute the powers across BOTH terms in each bracket: 2(2x − 1) = 4x − 2 and 3(x + 1) = 3x + 3." },
          ],
          solution: [
            "Rewrite in base 3: {{(3^2)^(2x - 1) = (3^3)^(x + 1)}}.",
            "Multiply exponents: {{3^(4x - 2) = 3^(3x + 3)}}.",
            "Equate exponents: {{4x - 2 = 3x + 3 -> x = 5}}.",
          ],
          commonError: "Writing (3^2)^(2x − 1) = 3^(4x − 1) by forgetting brackets around (2x − 1).",
          difficulty: "core",
          guideRef: "fractional-negative-indices",
          hints: [
            "Write {{9 = 3^2}} and {{27 = 3^3}}.",
            "Solve {{2(2x - 1) = 3(x + 1)}}.",
          ],
        },
        {
          kind: "short",
          id: "number-bounds-surds-p1-q10",
          question: "Simplify fully {{2*sqrt(45) - sqrt(80) + 3*sqrt(20)}}.",
          answer: { type: "expression", expr: "8*sqrt(5)", form: "simplified" },
          traps: [
            { spec: { type: "expression", expr: "4*sqrt(5)" }, feedback: "Check the signs: 6*sqrt(5) − 4*sqrt(5) + 6*sqrt(5) = 8*sqrt(5)." },
          ],
          solution: [
            "Simplify each surd: {{2*sqrt(45) = 2(3*sqrt(5)) = 6*sqrt(5)}}, {{sqrt(80) = 4*sqrt(5)}}, {{3*sqrt(20) = 3(2*sqrt(5)) = 6*sqrt(5)}}.",
            "Combine like surds: {{(6 - 4 + 6)*sqrt(5) = 8*sqrt(5)}}.",
          ],
          difficulty: "core",
          guideRef: "surds-simplifying-expanding",
          hints: [
            "Rewrite {{sqrt(45)}}, {{sqrt(80)}}, and {{sqrt(20)}} as multiples of {{sqrt(5)}}.",
            "Don't forget to multiply by the outer coefficients {{2}} and {{3}}.",
          ],
        },
        {
          kind: "short",
          id: "number-bounds-surds-p1-q11",
          question: "Expand and simplify {{(5 + 2*sqrt(3))(2 - 3*sqrt(3))}}.",
          answer: { type: "expression", expr: "-8 - 11*sqrt(3)", form: "simplified" },
          traps: [
            { spec: { type: "expression", expr: "28 - 11*sqrt(3)" }, feedback: "Watch the sign on the last product: (+2*sqrt(3))(−3*sqrt(3)) = −6 × 3 = −18, so 10 − 18 = −8." },
            { spec: { type: "expression", expr: "-2 - 11*sqrt(3)" }, feedback: "2*sqrt(3) × (−3*sqrt(3)) = −6 × 3 = −18 (not −2 × 6 = −12)." },
          ],
          solution: [
            "Expand all four products: {{10 - 15*sqrt(3) + 4*sqrt(3) - 6(3)}}.",
            "Simplify {{-6 * 3 = -18}}, then collect: {{(10 - 18) + (-15 + 4)*sqrt(3) = -8 - 11*sqrt(3)}}.",
          ],
          commonError: "Sign or coefficient slip on (2√3)(−3√3) = −18.",
          difficulty: "core",
          guideRef: "surds-simplifying-expanding",
          hints: [
            "Expand using FOIL: {{5*2}}, {{5*(-3*sqrt(3))}}, {{(2*sqrt(3))*2}}, and {{(2*sqrt(3))*(-3*sqrt(3))}}.",
            "Remember {{(2*sqrt(3))*(-3*sqrt(3)) = -6 * 3 = -18}}.",
          ],
        },
        {
          kind: "short",
          id: "number-bounds-surds-p1-q12",
          question: "Rationalise the denominator and simplify {{22 / (4 + sqrt(5))}}.",
          answer: { type: "expression", expr: "8 - 2*sqrt(5)", form: "simplified" },
          traps: [
            { spec: { type: "expression", expr: "8 + 2*sqrt(5)" }, feedback: "The conjugate of (4 + sqrt(5)) is (4 − sqrt(5)), with a minus sign." },
          ],
          solution: [
            "Multiply top and bottom by {{(4 - sqrt(5))}}.",
            "Denominator: {{4^2 - (sqrt(5))^2 = 16 - 5 = 11}}.",
            "{{22(4 - sqrt(5)) / 11 = 2(4 - sqrt(5)) = 8 - 2*sqrt(5)}}.",
          ],
          difficulty: "core",
          guideRef: "rationalising-denominators",
          hints: [
            "Multiply top and bottom by {{4 - sqrt(5)}}.",
            "The denominator simplifies to {{16 - 5 = 11}}; cancel {{22 / 11 = 2}}.",
          ],
        },
        {
          kind: "written",
          id: "number-bounds-surds-p1-q13",
          question:
            "Given {{d = m / v}}, where {{m = 74.2}} (correct to 1 decimal place) and {{v = 8.05}} (correct to 2 decimal places), by considering bounds, work out the value of {{d}} to a suitable degree of accuracy. Show all your working and give a reason for your answer.",
          marks: 4,
          modelAnswer:
            "Bounds: {{74.15 <= m < 74.25}} and {{8.045 <= v < 8.055}}. Upper bound {{UB(d) = 74.25 / 8.045 = 9.2293...}} and lower bound {{LB(d) = 74.15 / 8.055 = 9.2054...}}. Therefore {{d = 9.2}} (to 2 significant figures / 1 d.p.) because both bounds round to {{9.2}} to 2 s.f. (whereas at 3 s.f. they disagree: {{9.23}} vs {{9.21}}).",
          markScheme: [
            {
              point: "States correct individual bounds (74.15, 74.25 and 8.045, 8.055)",
              keywords: ["74.15", "74.25", "8.045", "8.055"],
            },
            {
              point: "Correct upper bound calculation UB(d) = 74.25 / 8.045 = 9.229...",
              keywords: ["9.229", "9.23", "74.25 / 8.045", "74.25/8.045"],
            },
            {
              point: "Correct lower bound calculation LB(d) = 74.15 / 8.055 = 9.205...",
              keywords: ["9.205", "9.21", "74.15 / 8.055", "74.15/8.055"],
            },
            {
              point: "Concludes d = 9.2 because both upper and lower bounds round to the same value 9.2 (to 2 s.f. / 1 d.p.)",
              keywords: ["both", "agree", "same", "9.2 to"],
            },
          ],
          commonError: "Dividing 74.25 by 8.055 instead of 8.045, or stating 9.2 without proving both bounds round to 9.2.",
          difficulty: "challenge",
          guideRef: "upper-lower-bounds",
          hints: [
            "Write all four bounds: {{m}} is {{74.15}} to {{74.25}}; {{v}} is {{8.045}} to {{8.055}}.",
            "Compute {{UB(d) = 74.25 / 8.045}} and {{LB(d) = 74.15 / 8.055}}.",
            "Compare both decimals at 3 s.f. and 2 s.f. to find the highest accuracy where they agree.",
          ],
        },
        {
          kind: "short",
          id: "number-bounds-surds-p1-q14",
          question: "Express {{(15 + 6*sqrt(7)) / (4 + sqrt(7))}} in the form {{a + b*sqrt(7)}}, where {{a}} and {{b}} are integers.",
          answer: { type: "expression", expr: "2 + sqrt(7)", form: "simplified" },
          traps: [
            { spec: { type: "expression", expr: "18 + 9*sqrt(7)" }, feedback: "Don't forget to divide the expanded numerator (18 + 9*sqrt(7)) by the denominator (16 − 7) = 9!" },
          ],
          solution: [
            "Multiply top and bottom by the conjugate {{(4 - sqrt(7))}}.",
            "Denominator: {{4^2 - (sqrt(7))^2 = 16 - 7 = 9}}.",
            "Numerator: {{(15 + 6*sqrt(7))(4 - sqrt(7)) = 60 - 15*sqrt(7) + 24*sqrt(7) - 42 = 18 + 9*sqrt(7)}}.",
            "Divide both numerator terms by {{9}}: {{2 + sqrt(7)}}.",
          ],
          commonError: "Forgetting to divide both terms of the expanded numerator by the rationalised denominator.",
          difficulty: "core",
          guideRef: "rationalising-denominators",
          hints: [
            "Multiply numerator and denominator by {{(4 - sqrt(7))}}.",
            "Expand the top to {{18 + 9*sqrt(7)}} and divide by {{16 - 7 = 9}}.",
          ],
        },
      ],
    },
    {
      id: "number-bounds-surds-p2",
      title: "Practice Paper 2 — Higher Problem Solving & Proof",
      questions: [
        {
          kind: "short",
          id: "number-bounds-surds-p2-q01",
          question: "A stadium crowd is reported as {{48,000}} to **2 significant figures**. Write down the continuous lower bound and upper bound (lower bound first, separated by a comma).",
          answer: { type: "list", values: [47500, 48500], ordered: true, display: "47,500, 48,500" },
          traps: [
            { spec: { type: "list", values: [47950, 48050], ordered: true }, feedback: "47,950 and 48,050 are for 3 significant figures (nearest 100); the 2nd s.f. (`8`) is in the thousands column!" },
          ],
          solution: [
            "The 2nd significant figure (`8`) is in the **thousands** place ({{u = 1000}}).",
            "Add and subtract {{500}}: lower bound = {{47,500}}, upper bound = {{48,500}}.",
          ],
          commonError: "Misidentifying the place value of the 2nd significant figure.",
          difficulty: "core",
          guideRef: "upper-lower-bounds",
          hints: [
            "Which column is the `8` in {{48,000}}?",
            "Thousands -> rounding unit {{1000}} -> ±{{500}}.",
          ],
        },
        {
          kind: "short",
          id: "number-bounds-surds-p2-q02",
          question: "Given {{w = p - 2q}}, where {{p = 34.8}} (correct to 1 d.p.) and {{q = 6.2}} (correct to 1 d.p.), find the **upper bound** of {{w}}.",
          answer: { type: "number", value: 22.55 },
          traps: [
            { spec: { type: "number", value: 22.35 }, feedback: "You subtracted 2 × UB(q); to MAXIMISE p − 2q, subtract 2 × LB(q) = 2 × 6.15!" },
          ],
          solution: [
            "{{UB(p) = 34.85}} and {{LB(q) = 6.15}}.",
            "{{UB(w) = UB(p) - 2 * LB(q) = 34.85 - 12.30 = 22.55}}.",
          ],
          commonError: "Using UB(q) instead of LB(q) in p − 2q.",
          difficulty: "core",
          guideRef: "upper-lower-bounds",
          hints: [
            "Find {{UB(p)}} ({{34.85}}) and {{LB(q)}} ({{6.15}}).",
            "Evaluate {{34.85 - 2 * 6.15}}.",
          ],
        },
        {
          kind: "short",
          id: "number-bounds-surds-p2-q03",
          question: "Using {{t = (2s) / (u + v)}}, where {{s = 99}} m (nearest integer), {{u = 7.5}} m/s (1 d.p.), and {{v = 12.5}} m/s (1 d.p.), calculate the exact **upper bound** of {{t}} in seconds.",
          answer: { type: "number", value: 10, display: "10 s" },
          traps: [
            { spec: { type: "number", value: 9.9, tolerance: 0.01 }, feedback: "Use UB(s) = 99.5 on top and LB(u) + LB(v) = 7.45 + 12.45 = 19.9 on the bottom!" },
          ],
          solution: [
            "{{UB(s) = 99.5}}, {{LB(u) = 7.45}}, and {{LB(v) = 12.45}}.",
            "{{UB(t) = (2 * 99.5) / (7.45 + 12.45) = 199 / 19.9 = 10}} seconds.",
          ],
          difficulty: "core",
          guideRef: "upper-lower-bounds",
          hints: [
            "Maximise the numerator ({{2 * UB(s)}}) and minimise the denominator ({{LB(u) + LB(v)}}).",
            "Compute {{(2 * 99.5) / (7.45 + 12.45)}}.",
          ],
        },
        {
          kind: "short",
          id: "number-bounds-surds-p2-q04",
          question: "Light travels at {{3 * 10^8}} **metres** per second. How many **kilometres** does light travel in {{2.5 * 10^4}} seconds? Give your answer in standard form.",
          answer: { type: "number", value: 7.5e9, standardForm: true, display: "{{7.5 * 10^9}}" },
          traps: [
            { spec: { type: "number", value: 7.5e12, standardForm: true, display: "{{7.5 * 10^(12)}}" }, feedback: "7.5 × 10^12 is in METRES — divide by 10^3 to convert into kilometres!" },
          ],
          solution: [
            "Distance in metres = {{(3 * 10^8) * (2.5 * 10^4) = 7.5 * 10^(12)}} m.",
            "Divide by {{10^3}} m/km: {{7.5 * 10^9}} km.",
          ],
          commonError: "Missing the unit conversion from metres to kilometres (÷ 10^3).",
          difficulty: "core",
          guideRef: "standard-form-recurring",
          hints: [
            "Multiply speed × time in metres first.",
            "Convert metres to kilometres by dividing by {{1000 = 10^3}}.",
          ],
        },
        {
          kind: "short",
          id: "number-bounds-surds-p2-q05",
          question: "Express the recurring decimal {{0.5090909...}} (where `09` recurs) as a fraction in its simplest form.",
          answer: { type: "fraction", n: 28, d: 55, simplest: true },
          traps: [
            { spec: { type: "fraction", n: 509, d: 999 }, feedback: "The digit `5` does not recur — align tails using 1000x − 10x = 990x!" },
          ],
          solution: [
            "Let {{x = 0.5090909...}}; then {{10x = 5.090909...}} and {{1000x = 509.090909...}}.",
            "Subtract: {{990x = 504 -> x = 504 / 990}}.",
            "Divide top and bottom by {{18}}: {{x = 28 / 55}}.",
          ],
          difficulty: "core",
          guideRef: "standard-form-recurring",
          hints: [
            "Use {{1000x - 10x = 990x}} so the `.0909...` tails cancel.",
            "Simplify {{504 / 990}} completely.",
          ],
        },
        {
          kind: "short",
          id: "number-bounds-surds-p2-q06",
          question: "Work out the exact value of {{(64 / 125)^(-2/3) + 16^(-1/2)}} as an improper fraction in its simplest form.",
          answer: { type: "fraction", n: 29, d: 16, form: "improper", simplest: true },
          traps: [
            { spec: { type: "fraction", n: 21, d: 16 }, feedback: "16^(−1/2) is +1/4 (positive reciprocal), not −1/4!" },
          ],
          solution: [
            "{{(64 / 125)^(-2/3) = (125 / 64)^(2/3) = (5 / 4)^2 = 25 / 16}}.",
            "{{16^(-1/2) = 1 / sqrt(16) = 1 / 4 = 4 / 16}}.",
            "Add: {{25/16 + 4/16 = 29/16}}.",
          ],
          difficulty: "core",
          guideRef: "fractional-negative-indices",
          hints: [
            "Evaluate {{(64/125)^(-2/3)}} using Flip -> Cube root -> Square.",
            "Evaluate {{16^(-1/2) = 1/4}} and add over denominator {{16}}.",
          ],
        },
        {
          kind: "written",
          id: "number-bounds-surds-p2-q07",
          question:
            "Without using a calculator, show clear algebraic working to prove that {{(3 - 3*sqrt(5)) / (3 + sqrt(5)) + sqrt(45)}} simplifies to an integer, and state its value.",
          marks: 4,
          modelAnswer:
            "Multiply the fraction top and bottom by the conjugate {{3 - sqrt(5)}}: denominator is {{3^2 - (sqrt(5))^2 = 9 - 5 = 4}}, and numerator is {{(3 - 3*sqrt(5))(3 - sqrt(5)) = 9 - 3*sqrt(5) - 9*sqrt(5) + 15 = 24 - 12*sqrt(5)}}, giving {{(24 - 12*sqrt(5)) / 4 = 6 - 3*sqrt(5)}}. Also {{sqrt(45) = sqrt(9 * 5) = 3*sqrt(5)}}. Adding gives {{(6 - 3*sqrt(5)) + 3*sqrt(5) = 6}}, so the value is 6.",
          markScheme: [
            {
              point: "Multiplies numerator and denominator by conjugate 3 − sqrt(5) with denominator 9 − 5 = 4",
              keywords: ["3 - sqrt(5)", "3 − sqrt(5)", "conjugate", "9 - 5"],
            },
            {
              point: "Expands numerator to 24 − 12*sqrt(5) and simplifies fraction to 6 − 3*sqrt(5)",
              keywords: ["24 - 12", "24 − 12", "6 - 3", "6 − 3"],
            },
            {
              point: "Simplifies sqrt(45) = 3*sqrt(5)",
              keywords: ["3*sqrt(5)", "3 sqrt(5)", "3√5", "9 * 5", "9 × 5"],
            },
            {
              point: "Cancels −3*sqrt(5) + 3*sqrt(5) to conclude the integer value is 6",
              keywords: ["= 6", "is 6", "equals 6", "value 6"],
            },
          ],
          commonError: "Typing the expression into a calculator for '6' with no conjugate or surd-simplification lines (0/4 marks on Edexcel 4MA1!).",
          difficulty: "challenge",
          guideRef: "rationalising-denominators",
          hints: [
            "Rationalise {{(3 - 3*sqrt(5)) / (3 + sqrt(5))}} by multiplying top and bottom by {{(3 - sqrt(5))}}.",
            "Simplify {{sqrt(45)}} into the form {{k*sqrt(5)}}.",
            "Add the two simplified expressions so the {{sqrt(5)}} terms cancel.",
          ],
        },
        {
          kind: "short",
          id: "number-bounds-surds-p2-q08",
          question: "Simplify fully {{((25x^4) / y^(-6))^(-3/2)}}.",
          answer: { type: "expression", expr: "1 / (125*x^6*y^9)", form: "any" },
          traps: [
            { spec: { type: "expression", expr: "y^9 / (125*x^6)" }, feedback: "Be careful with y^(−6) on the bottom: (25x^4) / y^(−6) = 25x^4 y^(+6), so raising to −3/2 gives y^(−9) = 1/y^9!" },
          ],
          solution: [
            "Simplify inside the bracket first: {{(25x^4) / y^(-6) = 25x^4 y^6}}.",
            "Apply power {{-3/2}}: {{1 / (25x^4 y^6)^(3/2) = 1 / (5x^2 y^3)^3 = 1 / (125x^6 y^9)}}.",
          ],
          commonError: "Sign slip on dividing by y^(−6) before applying the negative outer exponent.",
          difficulty: "core",
          guideRef: "fractional-negative-indices",
          hints: [
            "Tidy inside the bracket first: {{1 / y^(-6) = y^6}}.",
            "Now apply power {{-3/2}} to {{25x^4 y^6}}.",
          ],
        },
        {
          kind: "short",
          id: "number-bounds-surds-p2-q09",
          question: "A rectangle has length {{(6 + 2*sqrt(3))}} cm and width {{(4 - sqrt(3))}} cm. Find its exact area in cm² in the form {{a + b*sqrt(3)}}.",
          answer: { type: "expression", expr: "18 + 2*sqrt(3)", form: "simplified" },
          traps: [
            { spec: { type: "expression", expr: "30 + 2*sqrt(3)" }, feedback: "Watch the sign: (+2*sqrt(3))(−sqrt(3)) = −2 × 3 = −6, so 24 − 6 = 18." },
          ],
          solution: [
            "Area = {{(6 + 2*sqrt(3))(4 - sqrt(3)) = 24 - 6*sqrt(3) + 8*sqrt(3) - 2(3)}}.",
            "Simplify: {{(24 - 6) + (-6 + 8)*sqrt(3) = 18 + 2*sqrt(3)}} cm².",
          ],
          difficulty: "core",
          guideRef: "surds-simplifying-expanding",
          hints: [
            "Multiply length × width using FOIL.",
            "Combine {{24 - 6}} and {{-6*sqrt(3) + 8*sqrt(3)}}.",
          ],
        },
        {
          kind: "short",
          id: "number-bounds-surds-p2-q10",
          question: "Given that {{sqrt(128) + sqrt(50) = sqrt(k)}}, find the value of the integer {{k}}.",
          answer: { type: "number", value: 338, display: "k = 338" },
          traps: [
            { spec: { type: "number", value: 178 }, feedback: "Never add under square roots! Simplify to 8*sqrt(2) + 5*sqrt(2) = 13*sqrt(2), then push 13 back inside the root as 13^2 = 169." },
            { spec: { type: "number", value: 26 }, feedback: "To bring 13 inside sqrt(2), square 13: sqrt(13^2 × 2) = sqrt(169 × 2) = sqrt(338)." },
          ],
          solution: [
            "{{sqrt(128) = 8*sqrt(2)}} and {{sqrt(50) = 5*sqrt(2)}}.",
            "Sum = {{13*sqrt(2) = sqrt(13^2 * 2) = sqrt(169 * 2) = sqrt(338)}}, so {{k = 338}}.",
          ],
          commonError: "Writing √128 + √50 = √178.",
          difficulty: "core",
          guideRef: "surds-simplifying-expanding",
          hints: [
            "Write {{sqrt(128)}} and {{sqrt(50)}} as multiples of {{sqrt(2)}} and add.",
            "Convert {{13*sqrt(2)}} into {{sqrt(13^2 * 2)}}.",
          ],
        },
        {
          kind: "short",
          id: "number-bounds-surds-p2-q11",
          question: "Rationalise the denominator and simplify {{15 / (2*sqrt(6) - 3)}}.",
          answer: { type: "expression", expr: "3 + 2*sqrt(6)", form: "simplified" },
          traps: [
            { spec: { type: "expression", expr: "15 + 10*sqrt(6)" }, feedback: "(2*sqrt(6))^2 = 4 × 6 = 24 (not 2 × 6 = 12!), so the denominator is 24 − 9 = 15." },
          ],
          solution: [
            "Multiply top and bottom by {{(2*sqrt(6) + 3)}}.",
            "Denominator: {{(2*sqrt(6))^2 - 3^2 = 24 - 9 = 15}}.",
            "Cancel {{15}}: {{15(2*sqrt(6) + 3) / 15 = 3 + 2*sqrt(6)}}.",
          ],
          commonError: "Evaluating (2√6)² as 12 instead of 24.",
          difficulty: "core",
          guideRef: "rationalising-denominators",
          hints: [
            "Multiply top and bottom by {{2*sqrt(6) + 3}}.",
            "Denominator is {{(2*sqrt(6))^2 - 3^2 = 24 - 9 = 15}}.",
          ],
        },
        {
          kind: "short",
          id: "number-bounds-surds-p2-q12",
          question: "Solve {{(sqrt(7) - 2)x = 9}}, giving {{x}} in the form {{a + b*sqrt(7)}}.",
          answer: { type: "expression", expr: "6 + 3*sqrt(7)", form: "simplified" },
          traps: [
            { spec: { type: "expression", expr: "6 - 3*sqrt(7)" }, feedback: "Multiply by the conjugate (sqrt(7) + 2), with a PLUS sign." },
          ],
          solution: [
            "Divide: {{x = 9 / (sqrt(7) - 2)}}.",
            "Multiply top and bottom by {{(sqrt(7) + 2)}}: {{x = 9(sqrt(7) + 2) / (7 - 4) = 3(sqrt(7) + 2) = 6 + 3*sqrt(7)}}.",
          ],
          difficulty: "core",
          guideRef: "rationalising-denominators",
          hints: [
            "Write {{x = 9 / (sqrt(7) - 2)}}.",
            "Rationalise using {{(sqrt(7) + 2)}}.",
          ],
        },
        {
          kind: "short",
          id: "number-bounds-surds-p2-q13",
          question: "Solve {{5^x * 25^(x - 2) = 1 / 125}}. Give your answer as a fraction.",
          answer: { type: "fraction", n: 1, d: 3, simplest: true },
          traps: [
            { spec: { type: "fraction", n: 7, d: 3 }, feedback: "1/125 is 5^(−3), not 5^(+3)!" },
          ],
          solution: [
            "Rewrite in base 5: {{5^x * 5^(2x - 4) = 5^(-3)}}.",
            "Add powers on the left: {{3x - 4 = -3 -> 3x = 1 -> x = 1/3}}.",
          ],
          difficulty: "core",
          guideRef: "fractional-negative-indices",
          hints: [
            "Write {{25 = 5^2}} and {{1/125 = 5^(-3)}}.",
            "Equate {{x + 2(x - 2) = -3}}.",
          ],
        },
        {
          kind: "written",
          id: "number-bounds-surds-p2-q14",
          question: "Show clear algebraic working to solve {{27^(2x - 1) = 9^(x + 2) / sqrt(3)}}.",
          marks: 4,
          modelAnswer:
            "Express every term as a power of 3: {{27^(2x - 1) = (3^3)^(2x - 1) = 3^(6x - 3)}}, {{9^(x + 2) = (3^2)^(x + 2) = 3^(2x + 4)}}, and {{sqrt(3) = 3^(1/2)}}. Combining the right-hand side gives {{3^(6x - 3) = 3^(2x + 4 - 1/2) = 3^(2x + 3.5)}}. Equating exponents: {{6x - 3 = 2x + 3.5}}, so {{4x = 6.5}} ({{8x = 13}}) and {{x = 13/8}} (or {{1.625}}).",
          markScheme: [
            {
              point: "Converts bases to powers of 3: 3^(6x − 3), 3^(2x + 4), and 3^(1/2)",
              keywords: ["6x - 3", "2x + 4", "3^(1/2)", "3^0.5"],
            },
            {
              point: "Combines right-hand side exponent by subtracting 1/2 to get 2x + 7/2 (or 2x + 3.5)",
              keywords: ["7/2", "3.5", "4 - 1/2", "4 - 0.5"],
            },
            {
              point: "Equates powers to form a correct linear equation (4x = 13/2 or 4x = 6.5 or 8x = 13)",
              keywords: ["4x = 6.5", "4x = 13/2", "8x = 13", "6x - 3 = 2x"],
            },
            {
              point: "Solves correctly to obtain x = 13/8 (or 1.625)",
              keywords: ["13/8", "1.625", "1 5/8"],
            },
          ],
          commonError: "Adding 1/2 instead of subtracting 1/2 when dividing by √3 = 3^(1/2), or forgetting to multiply −1 by 3 in (3^3)^(2x − 1).",
          difficulty: "challenge",
          guideRef: "fractional-negative-indices",
          hints: [
            "Write {{27 = 3^3}}, {{9 = 3^2}}, and {{sqrt(3) = 3^(1/2)}}.",
            "Use {{3^(2x + 4) / 3^(1/2) = 3^(2x + 4 - 1/2)}} on the right-hand side.",
            "Equate the exponents of 3 and solve for {{x}}.",
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      kind: "short",
      id: "number-bounds-surds-ch-q01",
      question:
        "Work out the exact value of the telescoping surd sum {{1 / (1 + sqrt(2)) + 1 / (sqrt(2) + sqrt(3)) + 1 / (sqrt(3) + sqrt(4)) + ... + 1 / (sqrt(63) + sqrt(64))}}.",
      answer: { type: "number", value: 7 },
      traps: [
        { spec: { type: "number", value: 8 }, feedback: "Almost! Every interior root cancels, leaving sqrt(64) − 1 = 8 − 1 = 7 (don't forget the −1 from the first term!)." },
        { spec: { type: "number", value: 9 }, feedback: "Check the sign after rationalising: 1 / (sqrt(k) + sqrt(k+1)) = sqrt(k+1) − sqrt(k), so you get 8 − 1 = 7." },
      ],
      solution: [
        "Rationalise a general term: {{1 / (sqrt(k) + sqrt(k+1)) = (sqrt(k+1) - sqrt(k)) / ((k+1) - k) = sqrt(k+1) - sqrt(k)}}.",
        "Rewrite the sum: {{(sqrt(2) - 1) + (sqrt(3) - sqrt(2)) + (sqrt(4) - sqrt(3)) + ... + (sqrt(64) - sqrt(63))}}.",
        "Every intermediate surd cancels in pairs, leaving {{sqrt(64) - 1 = 8 - 1 = 7}}.",
      ],
      difficulty: "challenge",
      guideRef: "rationalising-denominators",
      hints: [
        "Rationalise the first two terms {{1 / (1 + sqrt(2))}} and {{1 / (sqrt(2) + sqrt(3))}} separately.",
        "Notice {{1 / (sqrt(k) + sqrt(k+1)) = sqrt(k+1) - sqrt(k)}} because the denominator becomes {{(k + 1) - k = 1}}.",
        "Write out the sum and watch adjacent surds cancel from {{sqrt(2)}} up to {{sqrt(63)}}!",
      ],
      strategy: "Rationalise a general term to telescope the sum",
    },
    {
      kind: "short",
      id: "number-bounds-surds-ch-q02",
      question:
        "Given that {{(a + b*sqrt(2))^2 = 33 + 20*sqrt(2)}}, where {{a}} and {{b}} are positive integers, find {{a}} and {{b}} (write {{a}} first, then {{b}}, separated by a comma).",
      answer: { type: "list", values: [5, 2], ordered: true, display: "a = 5, b = 2" },
      traps: [
        { spec: { type: "list", values: [2, 5], ordered: true }, feedback: "Check a^2 + 2b^2: for a = 2, b = 5 you get 4 + 50 = 54, whereas a = 5, b = 2 gives 25 + 8 = 33!" },
      ],
      solution: [
        "Expand the left-hand side: {{(a + b*sqrt(2))^2 = (a^2 + 2b^2) + 2ab*sqrt(2)}}.",
        "Compare rational and irrational parts: {{a^2 + 2b^2 = 33}} and {{2ab = 20 -> ab = 10}}.",
        "Test positive factor pairs of {{10}}: {{(a, b) = (5, 2)}} gives {{5^2 + 2(2^2) = 25 + 8 = 33}}.",
      ],
      difficulty: "challenge",
      guideRef: "surds-simplifying-expanding",
      hints: [
        "Expand {{(a + b*sqrt(2))^2}} in terms of {{a}} and {{b}}.",
        "Match the {{sqrt(2)}} coefficients to get {{2ab = 20}} ({{ab = 10}}), and match the integer parts to get {{a^2 + 2b^2 = 33}}.",
        "Test positive integer factor pairs of {{10}} in {{a^2 + 2b^2 = 33}}.",
      ],
      strategy: "Equate rational and surd parts separately",
    },
    {
      kind: "short",
      id: "number-bounds-surds-ch-q03",
      question:
        "Solve the simultaneous index equations {{4^x * 2^y = 32}} and {{9^x / 3^y = 27}}. Give your answer as `x, y` in order.",
      answer: { type: "list", values: [2, 1], ordered: true, display: "x = 2, y = 1" },
      traps: [
        { spec: { type: "list", values: [1, 2], ordered: true }, feedback: "Order is x first, then y: x = 2, y = 1." },
      ],
      solution: [
        "Convert the first equation to base 2: {{2^(2x + y) = 2^5 -> 2x + y = 5}}.",
        "Convert the second equation to base 3: {{3^(2x - y) = 3^3 -> 2x - y = 3}}.",
        "Add the two linear equations: {{4x = 8 -> x = 2}}, and substitute back to get {{y = 1}}.",
      ],
      difficulty: "challenge",
      guideRef: "fractional-negative-indices",
      hints: [
        "Rewrite the first equation in base 2 ({{4^x = 2^(2x)}}, {{32 = 2^5}}).",
        "Rewrite the second equation in base 3 ({{9^x = 3^(2x)}}, {{27 = 3^3}}).",
        "Solve the resulting linear simultaneous equations in {{x}} and {{y}}.",
      ],
      strategy: "Reduce index equations to linear simultaneous equations",
    },
    {
      kind: "short",
      id: "number-bounds-surds-ch-q04",
      question:
        "Given {{y = a / b}}, where {{a = 38}} (correct to the nearest integer) and {{b}} was rounded to 1 decimal place. The exact **upper bound** of {{y}} is {{14}}. Find the rounded value of {{b}}.",
      answer: { type: "number", value: 2.8 },
      traps: [
        { spec: { type: "number", value: 2.75 }, feedback: "2.75 is LB(b)! Since b was rounded to 1 d.p., add 0.05 to LB(b) to recover b = 2.8." },
        { spec: { type: "number", value: 2.7 }, feedback: "2.75 is the LOWER bound of b (b − 0.05 = 2.75), so add 0.05 to get b = 2.8!" },
      ],
      solution: [
        "Since {{a = 38}} (nearest integer), {{UB(a) = 38.5}}.",
        "Use {{UB(y) = UB(a) / LB(b) = 14 -> 38.5 / LB(b) = 14 -> LB(b) = 38.5 / 14 = 2.75}}.",
        "Because {{b}} was rounded to 1 d.p. ({{LB(b) = b - 0.05}}), {{b = 2.75 + 0.05 = 2.8}}.",
      ],
      difficulty: "challenge",
      guideRef: "upper-lower-bounds",
      hints: [
        "Write the formula for the upper bound of a quotient: {{UB(y) = UB(a) / LB(b)}}.",
        "Substitute {{UB(a) = 38.5}} and {{UB(y) = 14}} to find {{LB(b)}}.",
        "If {{LB(b) = 2.75}} and {{b}} was rounded to 1 d.p., what must {{b}} be?",
      ],
      strategy: "Work backwards from UB(a) / LB(b)",
    },
    {
      kind: "short",
      id: "number-bounds-surds-ch-q05",
      question:
        "For any integer {{k}}, let {{p = 6.4 * 10^(2k + 1)}} and {{q = 1.6 * 10^(k - 3)}}. Find the exact numerical value of {{sqrt(p) / q}}, giving your answer in standard form.",
      answer: { type: "number", value: 5000, standardForm: true, display: "{{5 * 10^3}}" },
      traps: [
        { spec: { type: "number", value: 500, standardForm: true, display: "{{5 * 10^2}}" }, feedback: "Check your exponent: 6.4 × 10^(2k + 1) = 64 × 10^(2k), so sqrt(p) = 8 × 10^k, and k − (k − 3) = 3!" },
      ],
      solution: [
        "Rewrite {{p}} with an even power of 10: {{p = 6.4 * 10 * 10^(2k) = 64 * 10^(2k)}}.",
        "Take the square root: {{sqrt(p) = 8 * 10^k}}.",
        "Divide by {{q}}: {{(8 * 10^k) / (1.6 * 10^(k - 3)) = 5 * 10^(k - (k - 3)) = 5 * 10^3}}.",
      ],
      difficulty: "challenge",
      guideRef: "standard-form-recurring",
      hints: [
        "Split {{10^(2k + 1) = 10 * 10^(2k)}} so {{p = 64 * 10^(2k)}} becomes an easy square!",
        "Take {{sqrt(p) = 8 * 10^k}}.",
        "Divide by {{1.6 * 10^(k - 3)}} — notice {{k}} cancels completely!",
      ],
      strategy: "Make the exponent of 10 even before taking a square root",
    },
    {
      kind: "short",
      id: "number-bounds-surds-ch-q06",
      question: "Given {{x = 3 + 2*sqrt(2)}}, find the exact integer value of {{x^2 + 1 / x^2}}.",
      answer: { type: "number", value: 34 },
      traps: [
        { spec: { type: "number", value: 36 }, feedback: "(x + 1/x)^2 = x^2 + 2 + 1/x^2 = 36 — subtract the middle 2 to get 34!" },
      ],
      solution: [
        "Rationalise {{1 / x = 1 / (3 + 2*sqrt(2)) = (3 - 2*sqrt(2)) / (9 - 8) = 3 - 2*sqrt(2)}}.",
        "Add: {{x + 1/x = (3 + 2*sqrt(2)) + (3 - 2*sqrt(2)) = 6}}.",
        "Use {{x^2 + 1/x^2 = (x + 1/x)^2 - 2 = 6^2 - 2 = 34}}.",
      ],
      difficulty: "challenge",
      guideRef: "rationalising-denominators",
      hints: [
        "First rationalise {{1 / x = 1 / (3 + 2*sqrt(2))}}.",
        "Notice how clean {{x + 1/x}} becomes!",
        "Square {{(x + 1/x)}} or square {{x}} and {{1/x}} separately and add.",
      ],
      strategy: "Exploit conjugate symmetry between x and 1/x",
    },
    {
      kind: "short",
      id: "number-bounds-surds-ch-q07",
      question: "Solve {{4^(2x + 1) = 8 * sqrt(2) * 2^x}}.",
      answer: { type: "number", value: 0.5, display: "{{1/2}}" },
      traps: [
        { spec: { type: "number", value: 0.75 }, feedback: "Remember 4^(2x + 1) = (2^2)^(2x + 1) = 2^(4x + 2), not 2^(4x + 1)." },
      ],
      solution: [
        "Rewrite every factor in base 2: {{(2^2)^(2x + 1) = 2^3 * 2^(1/2) * 2^x}}.",
        "Combine powers: {{2^(4x + 2) = 2^(x + 7/2)}}.",
        "Equate exponents: {{4x + 2 = x + 7/2 -> 3x = 3/2 -> x = 1/2}}.",
      ],
      difficulty: "challenge",
      guideRef: "fractional-negative-indices",
      hints: [
        "Write {{4 = 2^2}}, {{8 = 2^3}}, and {{sqrt(2) = 2^(1/2)}}.",
        "Combine the right-hand side into a single power of 2: {{2^(x + 3 + 1/2)}}.",
        "Solve {{4x + 2 = x + 7/2}}.",
      ],
    },
    {
      kind: "short",
      id: "number-bounds-surds-ch-q08",
      question:
        "Solve {{0.454545... * x - 0.166666... = 0.727272...}} (where `45` recurs, only `6` recurs, and `72` recurs). Give {{x}} as an improper fraction in its simplest form.",
      answer: { type: "fraction", n: 59, d: 30, form: "improper", simplest: true },
      traps: [
        { spec: { type: "fraction", n: 37, d: 30 }, feedback: "Add 1/6 to 8/11 (don't subtract!): (5/11)x = 8/11 + 1/6 = 59/66." },
      ],
      solution: [
        "Convert each recurring decimal: {{0.4545... = 45/99 = 5/11}}, {{0.1666... = 15/90 = 1/6}}, {{0.7272... = 72/99 = 8/11}}.",
        "Substitute into the equation: {{(5/11)x - 1/6 = 8/11 -> (5/11)x = 8/11 + 1/6 = 59/66}}.",
        "Multiply by {{11/5}}: {{x = (59/66) * (11/5) = 59/30}}.",
      ],
      difficulty: "challenge",
      guideRef: "standard-form-recurring",
      hints: [
        "Convert all three recurring decimals to simplified fractions first.",
        "{{0.4545... = 5/11}}, {{0.1666... = 1/6}}, and {{0.7272... = 8/11}}.",
        "Solve {{(5/11)x = 8/11 + 1/6}}.",
      ],
    },
  ],
};
