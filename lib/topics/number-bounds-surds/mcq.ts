import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "number-bounds-surds-m1",
    title: "MCQ Paper 1 — Core Foundations",
    questions: [
      {
        kind: "mcq",
        id: "number-bounds-surds-m1-q01",
        question: "A ribbon's length {{L}} cm is rounded to 1 decimal place as {{14.6}} cm. What is the error interval for {{L}}?",
        options: ["{{14.55 <= L <= 14.65}}", "{{14.55 <= L < 14.65}}", "{{14.5 <= L < 14.7}}", "{{14.6 <= L < 14.7}}"],
        answerIndex: 1,
        explanation:
          "1 decimal place has rounding unit {{0.1}}, so add and subtract {{0.05}} to get {{14.55 <= L < 14.65}}. Writing {{<= 14.65}} loses the accuracy mark because {{14.65}} itself rounds up to {{14.7}}.",
        difficulty: "warmup",
        guideRef: "upper-lower-bounds",
        hints: [
          "The rounding unit is {{0.1}} cm — halve it to find the maximum rounding error.",
          "Does {{14.65}} round to {{14.6}} or {{14.7}}? Use strict {{<}} at the upper boundary.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m1-q02",
        question: "A positive number {{y}} is **truncated** to 2 decimal places to give {{3.48}}. Which inequality shows the error interval for {{y}}?",
        options: ["{{3.48 <= y <= 3.49}}", "{{3.475 <= y < 3.485}}", "{{3.48 <= y < 3.49}}", "{{3.47 <= y < 3.49}}"],
        answerIndex: 2,
        explanation:
          "Truncating chops off every digit after the hundredths place, so any number from {{3.48}} up to (but not including) {{3.49}} truncates to {{3.48}}. {{3.475 <= y < 3.485}} is the interval for *rounding*, not truncation.",
        difficulty: "core",
        guideRef: "upper-lower-bounds",
        hints: [
          "Truncation deletes digits rather than rounding to the nearest hundredth.",
          "Could {{3.479}} truncate to {{3.48}}? No — its hundredths digit is 7!",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m1-q03",
        question: "Given {{a = 50}} (correct to the nearest 10) and {{b = 18}} (correct to the nearest integer), what is the **upper bound** of {{a - b}}?",
        options: ["{{37.5}}", "{{33}}", "{{36.5}}", "{{26.5}}"],
        answerIndex: 0,
        explanation:
          "{{UB_a = 55}} and {{LB_b = 17.5}}, so the upper bound is {{UB_a - LB_b = 55 - 17.5 = 37.5}}. {{36.5}} comes from the classic trap of subtracting {{UB_b = 18.5}} instead of {{LB_b}}.",
        difficulty: "core",
        guideRef: "upper-lower-bounds",
        hints: [
          "Find the bounds of {{a}} (nearest 10 -> ±5) and {{b}} (nearest 1 -> ±0.5) first.",
          "To make {{a - b}} as large as possible, subtract the **smallest** possible value of {{b}} from the **largest** possible value of {{a}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m1-q04",
        question: "Write {{0.000407}} in standard form.",
        options: ["{{4.07 * 10^(-3)}}", "{{40.7 * 10^(-5)}}", "{{4.07 * 10^(-4)}}", "{{4.07 * 10^4}}"],
        answerIndex: 2,
        explanation:
          "Move the decimal point 4 places to obtain {{A = 4.07}} (satisfying {{1 <= A < 10}}), and since {{0.000407 < 1}} the power is {{-4}}: {{4.07 * 10^(-4)}}. {{4.07 * 10^(-3)}} counts leading zeros instead of decimal shifts.",
        difficulty: "warmup",
        guideRef: "standard-form-recurring",
        hints: [
          "Standard form requires {{A * 10^n}} with {{1 <= A < 10}}.",
          "Count how many places the decimal point shifts from {{0.000407}} to {{4.07}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m1-q05",
        question: "Work out {{(8 * 10^5) * (5 * 10^(-2))}}. Give your answer in standard form.",
        options: ["{{4 * 10^(-10)}}", "{{4 * 10^2}}", "{{4 * 10^4}}", "{{40 * 10^3}}"],
        answerIndex: 2,
        explanation:
          "{{8 * 5 = 40}} and {{10^5 * 10^(-2) = 10^3}}, giving {{40 * 10^3 = 4 * 10^4}}. Leaving {{40 * 10^3}} fails standard form because {{40}} is not less than {{10}}, and {{4 * 10^2}} adjusts the exponent in the wrong direction.",
        difficulty: "core",
        guideRef: "standard-form-recurring",
        hints: [
          "Multiply {{8 * 5}} and add the powers of 10: {{5 + (-2)}}.",
          "Rewrite {{40}} as {{4 * 10^1}} and combine powers of 10.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m1-q06",
        question: "Which fraction in its simplest form is equal to the recurring decimal {{0.454545...}}?",
        options: ["{{5/11}}", "{{9/20}}", "{{5/9}}", "{{4/11}}"],
        answerIndex: 0,
        explanation:
          "Let {{x = 0.454545...}}; then {{100x = 45.454545...}}, so {{99x = 45}} and {{x = 45/99 = 5/11}} (dividing by 9). {{9/20 = 0.45}} is the *terminating* decimal, not the recurring one.",
        difficulty: "core",
        guideRef: "standard-form-recurring",
        hints: [
          "Two digits repeat, so multiply {{x}} by {{100}} and subtract {{x}}.",
          "Simplify {{45/99}} by dividing numerator and denominator by {{9}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m1-q07",
        question: "Evaluate {{64^(2/3)}}.",
        options: ["{{32}}", "{{16}}", "{{8}}", "{{128/3}}"],
        answerIndex: 1,
        explanation:
          "Take the cube root first (denominator 3): {{cbrt(64) = 4}}, then square (numerator 2): {{4^2 = 16}}. {{128/3}} comes from multiplying {{64}} by {{2/3}} instead of using it as an exponent.",
        difficulty: "warmup",
        guideRef: "fractional-negative-indices",
        hints: [
          "The denominator {{3}} means cube root; the numerator {{2}} means square.",
          "Find {{cbrt(64)}} first, then square that result.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m1-q08",
        question: "Work out the exact value of {{(4/9)^(-3/2)}}.",
        options: ["{{27/8}}", "{{8/27}}", "{{-8/27}}", "{{-27/8}}"],
        answerIndex: 0,
        explanation:
          "Flip the fraction for the negative index to get {{(9/4)^(3/2)}}, take square roots to get {{(3/2)^3}}, then cube to obtain {{27/8}}. {{-27/8}} mistakenly treats a negative index as making the answer negative.",
        difficulty: "core",
        guideRef: "fractional-negative-indices",
        hints: [
          "Use Flip -> Root -> Power: flip {{4/9}} to {{9/4}} to clear the minus sign.",
          "Take the square root of {{9/4}}, then cube numerator and denominator.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m1-q09",
        question: "Simplify fully {{(9x^6 y^(-2))^(1/2)}}.",
        options: ["{{4.5x^3 y^(-1)}}", "{{9x^3 y^(-1)}}", "{{3x^4 y^(-1)}}", "{{3x^3 y^(-1)}}"],
        answerIndex: 3,
        explanation:
          "Apply the power {{1/2}} to every factor: {{9^(1/2) = 3}}, {{x^(6 * 1/2) = x^3}}, and {{y^(-2 * 1/2) = y^(-1)}}, giving {{3x^3 y^(-1)}}. {{4.5x^3 y^(-1)}} halves {{9}} instead of taking {{sqrt(9)}}.",
        difficulty: "core",
        guideRef: "fractional-negative-indices",
        hints: [
          "Power {{1/2}} means square root — remember to apply it to the coefficient {{9}} too!",
          "Multiply each variable's exponent by {{1/2}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m1-q10",
        question: "Write {{sqrt(108)}} in the form {{k*sqrt(3)}}, where {{k}} is an integer.",
        options: ["{{36*sqrt(3)}}", "{{6*sqrt(3)}}", "{{9*sqrt(3)}}", "{{18*sqrt(3)}}"],
        answerIndex: 1,
        explanation:
          "{{108 = 36 * 3}}, so {{sqrt(108) = sqrt(36) * sqrt(3) = 6*sqrt(3)}}. {{36*sqrt(3)}} forgets to take the square root of {{36}} once pulled outside.",
        difficulty: "warmup",
        guideRef: "surds-simplifying-expanding",
        hints: [
          "Divide {{108}} by {{3}} to find the square factor hiding inside.",
          "Take the square root of {{36}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m1-q11",
        question: "Simplify {{sqrt(75) + sqrt(48) - sqrt(27)}}.",
        options: ["{{6*sqrt(9)}}", "{{sqrt(96)}}", "{{12*sqrt(3)}}", "{{6*sqrt(3)}}"],
        answerIndex: 3,
        explanation:
          "{{sqrt(75) = 5*sqrt(3)}}, {{sqrt(48) = 4*sqrt(3)}}, and {{sqrt(27) = 3*sqrt(3)}}; combining gives {{(5 + 4 - 3)*sqrt(3) = 6*sqrt(3)}}. {{sqrt(96)}} comes from illegally adding and subtracting under the root sign ({{75 + 48 - 27}}).",
        difficulty: "core",
        guideRef: "surds-simplifying-expanding",
        hints: [
          "Rewrite each surd as a multiple of {{sqrt(3)}}.",
          "Collect the coefficients of {{sqrt(3)}}: {{5 + 4 - 3}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m1-q12",
        question: "Expand and simplify {{(2 + sqrt(7))(5 - sqrt(7))}}.",
        options: ["{{3}}", "{{3 + 3*sqrt(7)}}", "{{3 - 3*sqrt(7)}}", "{{17 + 3*sqrt(7)}}"],
        answerIndex: 1,
        explanation:
          "{{2 * 5 - 2*sqrt(7) + 5*sqrt(7) - (sqrt(7))^2 = 10 + 3*sqrt(7) - 7 = 3 + 3*sqrt(7)}}. {{17 + 3*sqrt(7)}} makes a sign error on {{+sqrt(7) * (-sqrt(7)) = -7}}.",
        difficulty: "core",
        guideRef: "surds-simplifying-expanding",
        hints: [
          "Multiply all four pairs of terms using FOIL or a 2×2 grid.",
          "Remember {{sqrt(7) * (-sqrt(7)) = -7}}, then combine integers and {{sqrt(7)}} terms separately.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m1-q13",
        question: "Rationalise the denominator and simplify {{15 / sqrt(5)}}.",
        options: ["{{3*sqrt(5)}}", "{{5*sqrt(3)}}", "{{15*sqrt(5)}}", "{{3 / sqrt(5)}}"],
        answerIndex: 0,
        explanation:
          "Multiply numerator and denominator by {{sqrt(5)}}: {{(15*sqrt(5)) / 5 = 3*sqrt(5)}}. {{15*sqrt(5)}} forgets to divide by the rationalised denominator {{5}}.",
        difficulty: "warmup",
        guideRef: "rationalising-denominators",
        hints: [
          "Multiply top and bottom by {{sqrt(5)}}.",
          "Simplify {{(15*sqrt(5)) / 5}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m1-q14",
        question: "Rationalise the denominator of {{12 / (4 - sqrt(10))}} and simplify fully.",
        options: ["{{8 + 2*sqrt(10)}}", "{{4 + sqrt(10)}}", "{{8 - 2*sqrt(10)}}", "{{2 + 2*sqrt(10)}}"],
        answerIndex: 0,
        explanation:
          "Multiply top and bottom by the conjugate {{(4 + sqrt(10))}}: denominator is {{16 - 10 = 6}}, giving {{12(4 + sqrt(10)) / 6 = 2(4 + sqrt(10)) = 8 + 2*sqrt(10)}}. {{8 - 2*sqrt(10)}} keeps the minus sign instead of flipping to the conjugate.",
        difficulty: "core",
        guideRef: "rationalising-denominators",
        hints: [
          "Multiply top and bottom by the conjugate {{4 + sqrt(10)}}.",
          "The denominator becomes {{4^2 - (sqrt(10))^2 = 16 - 10 = 6}}; cancel {{12 / 6 = 2}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m1-q15",
        question: "A train travels {{d = 240}} km (correct to the nearest 10 km) in {{t = 4}} hours (correct to the nearest hour). What is the **upper bound** of its average speed {{d / t}}?",
        options: ["{{60}} km/h", "{{70}} km/h", "{{52.2}} km/h", "{{54.4}} km/h"],
        answerIndex: 1,
        explanation:
          "{{UB_d = 245}} km and {{LB_t = 3.5}} h, so {{UB_d / LB_t = 245 / 3.5 = 70}} km/h. {{54.4}} km/h comes from dividing {{UB_d}} by {{UB_t = 4.5}} instead of {{LB_t}}.",
        difficulty: "core",
        guideRef: "upper-lower-bounds",
        hints: [
          "{{d = 240}} to nearest 10 gives bounds {{235}} and {{245}}; {{t = 4}} to nearest 1 gives {{3.5}} and {{4.5}}.",
          "Use {{UB_d / LB_t}} to maximise the speed.",
        ],
      },
    ],
  },
  {
    id: "number-bounds-surds-m2",
    title: "MCQ Paper 2 — Higher Exam Practice",
    questions: [
      {
        kind: "mcq",
        id: "number-bounds-surds-m2-q01",
        question: "A boulder has mass {{3600}} kg, correct to **2 significant figures**. What are the lower and upper bounds of its mass?",
        options: ["{{3595}} kg and {{3605}} kg", "{{3500}} kg and {{3700}} kg", "{{3550}} kg and {{3650}} kg", "{{3599.5}} kg and {{3600.5}} kg"],
        answerIndex: 2,
        explanation:
          "In {{3600}}, the 2nd significant figure (`6`) is in the **hundreds** column, so the rounding unit is {{100}} kg; ±50 kg gives {{3550}} kg and {{3650}} kg. {{3595}} and {{3605}} correspond to 3 significant figures (nearest 10).",
        difficulty: "core",
        guideRef: "upper-lower-bounds",
        hints: [
          "Identify the place value of the 2nd significant figure in {{3600}}.",
          "The `6` represents {{600}} (hundreds), so halve {{100}} to get {{50}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m2-q02",
        question: "A rectangle has perimeter {{P = 40}} cm (nearest cm) and length {{L = 12.4}} cm (1 d.p.). Using {{W = P/2 - L}}, find the **lower bound** of its width {{W}}.",
        options: ["{{7.6}} cm", "{{7.9}} cm", "{{7.4}} cm", "{{7.3}} cm"],
        answerIndex: 3,
        explanation:
          "{{LB(P) = 39.5}} cm and {{UB(L) = 12.45}} cm, so {{LB(W) = LB(P)/2 - UB(L) = 19.75 - 12.45 = 7.3}} cm. {{7.4}} cm mistakenly subtracts {{LB(L) = 12.35}} instead of {{UB(L)}}.",
        difficulty: "core",
        guideRef: "upper-lower-bounds",
        hints: [
          "Find {{LB(P)}} ({{39.5}}) and {{UB(L)}} ({{12.45}}).",
          "To minimise {{P/2 - L}}, take the smallest semi-perimeter and subtract the largest length.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m2-q03",
        question: "Given {{x = 8.43}} (correct to 2 d.p.) and {{y = 2.00}} (correct to 2 d.p.), what is the value of {{z = x / y}} to a **suitable degree of accuracy**?",
        options: ["{{4}} (to 1 s.f.)", "{{4.22}} (to 3 s.f.)", "{{4.215}} (to 4 s.f.)", "{{4.2}} (to 2 s.f.)"],
        answerIndex: 3,
        explanation:
          "{{UB(z) = 8.435 / 1.995 = 4.228...}} and {{LB(z) = 8.425 / 2.005 = 4.2019...}}. At 3 s.f. they disagree ({{4.23}} vs {{4.20}}), whereas at 2 s.f. both round to {{4.2}} — the highest accuracy at which UB and LB agree.",
        difficulty: "challenge",
        guideRef: "upper-lower-bounds",
        hints: [
          "Work out {{UB(z) = 8.435 / 1.995}} and {{LB(z) = 8.425 / 2.005}}.",
          "Check 3 s.f. first ({{4.23}} vs {{4.20}}), then step down to 2 s.f.",
          "Choose the most accurate rounding where both bounds agree.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m2-q04",
        question: "Calculate {{(3.6 * 10^8) + (9.4 * 10^7)}}, giving your answer in standard form.",
        options: ["{{1.3 * 10^(16)}}", "{{1.3 * 10^8}}", "{{4.54 * 10^8}}", "{{4.54 * 10^(15)}}"],
        answerIndex: 2,
        explanation:
          "Rewrite {{9.4 * 10^7}} as {{0.94 * 10^8}}, then add: {{(3.6 + 0.94) * 10^8 = 4.54 * 10^8}}. {{1.3 * 10^8}} adds {{3.6 + 9.4 = 13}} directly while ignoring that the powers of 10 differ.",
        difficulty: "core",
        guideRef: "standard-form-recurring",
        hints: [
          "Write both terms with {{10^8}} before adding.",
          "{{9.4 * 10^7 = 0.94 * 10^8}}; now add {{3.6 + 0.94}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m2-q05",
        question: "Work out {{(2.1 * 10^(-4)) / (7 * 10^(-9))}} in standard form.",
        options: ["{{3 * 10^6}}", "{{0.3 * 10^5}}", "{{3 * 10^4}}", "{{3 * 10^(-14)}}"],
        answerIndex: 2,
        explanation:
          "{{2.1 / 7 = 0.3}} and {{10^(-4 - (-9)) = 10^5}}, giving {{0.3 * 10^5 = 3 * 10^4}}. {{0.3 * 10^5}} has the right value but violates {{1 <= A < 10}}, while {{3 * 10^6}} shifts the exponent the wrong way.",
        difficulty: "core",
        guideRef: "standard-form-recurring",
        hints: [
          "Divide {{2.1 / 7 = 0.3}} and subtract powers: {{-4 - (-9) = 5}}.",
          "Convert {{0.3 * 10^5}} so the front number lies between 1 and 10.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m2-q06",
        question: "Express the mixed recurring decimal {{0.416666...}} (where only the `6` recurs) as a fraction in its simplest form.",
        options: ["{{25/66}}", "{{416/999}}", "{{5/11}}", "{{5/12}}"],
        answerIndex: 3,
        explanation:
          "Let {{x = 0.41666...}}; then {{100x = 41.666...}} and {{1000x = 416.666...}}, so {{900x = 375}} and {{x = 375/900 = 5/12}}. {{416/999}} assumes all three digits `416` recur (`0.416416...`).",
        difficulty: "core",
        guideRef: "standard-form-recurring",
        hints: [
          "Shift the two non-recurring digits `41` past the decimal point using {{100x}}, then shift one more place using {{1000x}}.",
          "Subtract {{1000x - 100x = 900x}} and simplify {{375/900}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m2-q07",
        question: "Find the exact value of {{(27 / 125)^(-2/3)}}.",
        options: ["{{5/3}}", "{{-25/9}}", "{{9/25}}", "{{25/9}}"],
        answerIndex: 3,
        explanation:
          "Flip for the minus sign to get {{(125 / 27)^(2/3)}}, cube-root to get {{(5 / 3)^2}}, and square to obtain {{25/9}}. {{9/25}} forgets to flip the fraction for the negative power.",
        difficulty: "core",
        guideRef: "fractional-negative-indices",
        hints: [
          "Flip {{27/125}} to {{125/27}} first.",
          "Cube-root both {{125}} and {{27}}, then square.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m2-q08",
        question: "Solve the equation {{16^(x - 1) = 8^(x + 2)}}.",
        options: ["{{x = 7}}", "{{x = 10}}", "{{x = 2}}", "{{x = 3}}"],
        answerIndex: 1,
        explanation:
          "Write in base 2: {{(2^4)^(x - 1) = (2^3)^(x + 2)}}, so {{2^(4x - 4) = 2^(3x + 6)}} and {{4x - 4 = 3x + 6 -> x = 10}}. {{x = 3}} forgets to multiply the constants {{-1}} and {{+2}} by {{4}} and {{3}}.",
        difficulty: "core",
        guideRef: "fractional-negative-indices",
        hints: [
          "Rewrite {{16 = 2^4}} and {{8 = 2^3}}.",
          "Expand both exponents carefully: {{4(x - 1) = 3(x + 2)}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m2-q09",
        question: "Simplify fully {{((8x^9) / y^6)^(-2/3)}}.",
        options: ["{{(4x^6) / y^4}}", "{{y^4 / (8x^6)}}", "{{- (4x^6) / y^4}}", "{{y^4 / (4x^6)}}"],
        answerIndex: 3,
        explanation:
          "Flip first to get {{(y^6 / (8x^9))^(2/3)}}, cube-root every factor to get {{(y^2 / (2x^3))^2}}, then square to get {{y^4 / (4x^6)}}. {{y^4 / (8x^6)}} leaves {{8}} untouched instead of computing {{8^(2/3) = 4}}.",
        difficulty: "core",
        guideRef: "fractional-negative-indices",
        hints: [
          "Flip the fraction inside the bracket to turn {{-2/3}} into {{+2/3}}.",
          "Apply power {{2/3}} to {{y^6}}, {{8}}, and {{x^9}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m2-q10",
        question: "Expand and simplify {{(4 - 3*sqrt(2))^2}}.",
        options: ["{{22 - 24*sqrt(2)}}", "{{-2}}", "{{34 + 24*sqrt(2)}}", "{{34 - 24*sqrt(2)}}"],
        answerIndex: 3,
        explanation:
          "{{(4 - 3*sqrt(2))(4 - 3*sqrt(2)) = 16 - 12*sqrt(2) - 12*sqrt(2) + 9(2) = 34 - 24*sqrt(2)}}. {{22 - 24*sqrt(2)}} writes {{(3*sqrt(2))^2 = 3 * 2 = 6}} instead of {{9 * 2 = 18}}, and {{-2}} drops the middle terms.",
        difficulty: "core",
        guideRef: "surds-simplifying-expanding",
        hints: [
          "Write {{(4 - 3*sqrt(2))(4 - 3*sqrt(2))}} so you include both middle terms.",
          "Be careful: {{(-3*sqrt(2))^2 = (-3)^2 * (sqrt(2))^2 = +9 * 2 = +18}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m2-q11",
        question: "A right-angled triangle has shorter sides {{(3 + sqrt(5))}} cm and {{(3 - sqrt(5))}} cm. Find the exact length of its hypotenuse.",
        options: ["{{6}} cm", "{{28}} cm", "{{2*sqrt(7)}} cm", "{{2*sqrt(2)}} cm"],
        answerIndex: 2,
        explanation:
          "By Pythagoras, {{c^2 = (3 + sqrt(5))^2 + (3 - sqrt(5))^2 = (14 + 6*sqrt(5)) + (14 - 6*sqrt(5)) = 28}}, so {{c = sqrt(28) = 2*sqrt(7)}} cm. {{28}} cm forgets the final square root, and {{2*sqrt(2)}} uses {{3^2 - 5}} instead of {{(3 +- sqrt(5))^2}}.",
        difficulty: "core",
        guideRef: "surds-simplifying-expanding",
        hints: [
          "Use Pythagoras' theorem: {{c^2 = (3 + sqrt(5))^2 + (3 - sqrt(5))^2}}.",
          "Notice the {{+6*sqrt(5)}} and {{-6*sqrt(5)}} cancel, then simplify {{sqrt(28)}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m2-q12",
        question: "Simplify {{sqrt(50) * sqrt(12)}} into the form {{a*sqrt(b)}}, where {{b}} has no square factors greater than 1.",
        options: ["{{100*sqrt(6)}}", "{{10*sqrt(6)}}", "{{7*sqrt(6)}}", "{{6*sqrt(10)}}"],
        answerIndex: 1,
        explanation:
          "{{sqrt(50) * sqrt(12) = 5*sqrt(2) * 2*sqrt(3) = 10*sqrt(6)}} (or {{sqrt(600) = sqrt(100 * 6) = 10*sqrt(6)}}). {{7*sqrt(6)}} adds {{5 + 2}} instead of multiplying {{5 * 2}}.",
        difficulty: "core",
        guideRef: "surds-simplifying-expanding",
        hints: [
          "Either simplify {{sqrt(50) = 5*sqrt(2)}} and {{sqrt(12) = 2*sqrt(3)}} first, or combine into {{sqrt(600)}}.",
          "Pull out the largest square factor.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m2-q13",
        question: "Write {{(7 + sqrt(5)) / (3 + sqrt(5))}} in the form {{a + b*sqrt(5)}}, where {{a}} and {{b}} are integers.",
        options: ["{{4 - sqrt(5)}}", "{{16 - 4*sqrt(5)}}", "{{4 + sqrt(5)}}", "{{2 - sqrt(5)}}"],
        answerIndex: 0,
        explanation:
          "Multiply top and bottom by {{(3 - sqrt(5))}}: denominator is {{9 - 5 = 4}} and numerator is {{21 - 7*sqrt(5) + 3*sqrt(5) - 5 = 16 - 4*sqrt(5)}}, giving {{(16 - 4*sqrt(5)) / 4 = 4 - sqrt(5)}}. {{16 - 4*sqrt(5)}} forgets to divide by the denominator {{4}}.",
        difficulty: "core",
        guideRef: "rationalising-denominators",
        hints: [
          "Multiply numerator and denominator by the conjugate {{(3 - sqrt(5))}}.",
          "Expand the numerator to {{16 - 4*sqrt(5)}} and divide both terms by {{9 - 5 = 4}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m2-q14",
        question: "Rationalise the denominator and simplify {{10 / (2*sqrt(3) - sqrt(2))}}.",
        options: ["{{5*sqrt(3) + (5*sqrt(2))/2}}", "{{2*sqrt(3) - sqrt(2)}}", "{{2*sqrt(3) + sqrt(2)}}", "{{sqrt(3) + sqrt(2)}}"],
        answerIndex: 2,
        explanation:
          "Multiply top and bottom by {{(2*sqrt(3) + sqrt(2))}}: denominator is {{(2*sqrt(3))^2 - (sqrt(2))^2 = 12 - 2 = 10}}, so the {{10}} cancels cleanly to leave {{2*sqrt(3) + sqrt(2)}}. {{5*sqrt(3) + (5*sqrt(2))/2}} comes from writing {{(2*sqrt(3))^2 = 6}} instead of {{12}}.",
        difficulty: "core",
        guideRef: "rationalising-denominators",
        hints: [
          "Multiply top and bottom by {{2*sqrt(3) + sqrt(2)}}.",
          "Be careful squaring {{2*sqrt(3)}}: {{2^2 * 3 = 12}}, so the denominator is {{12 - 2 = 10}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m2-q15",
        question: "Simplify {{6 / sqrt(3) + sqrt(27)}} into the form {{k*sqrt(3)}}.",
        options: ["{{3*sqrt(6)}}", "{{9*sqrt(3)}}", "{{5*sqrt(3)}}", "{{11*sqrt(3)}}"],
        answerIndex: 2,
        explanation:
          "Rationalise {{6 / sqrt(3) = (6*sqrt(3)) / 3 = 2*sqrt(3)}} and simplify {{sqrt(27) = 3*sqrt(3)}}; adding gives {{2*sqrt(3) + 3*sqrt(3) = 5*sqrt(3)}}. {{9*sqrt(3)}} forgets to divide {{6}} by {{3}} after rationalising.",
        difficulty: "core",
        guideRef: "rationalising-denominators",
        hints: [
          "Rationalise {{6 / sqrt(3)}} first and simplify {{sqrt(27)}} separately.",
          "Add the two {{sqrt(3)}} terms.",
        ],
      },
    ],
  },
  {
    id: "number-bounds-surds-m3",
    title: "MCQ Paper 3 — Grade 8–9 Stretch",
    questions: [
      {
        kind: "mcq",
        id: "number-bounds-surds-m3-q01",
        question: "Using {{a = (v - u) / t}}, where {{v = 26}} m/s, {{u = 10}} m/s, and {{t = 9}} s are each rounded to the nearest integer, find the exact **upper bound** of the acceleration {{a}}.",
        options: ["{{1.68}} m/s²", "{{2}} m/s²", "{{1.88}} m/s²", "{{1.58}} m/s²"],
        answerIndex: 1,
        explanation:
          "Maximise the numerator {{v - u}} using {{UB(v) - LB(u) = 26.5 - 9.5 = 17}}, and minimise the denominator using {{LB(t) = 8.5}}: {{17 / 8.5 = 2}} m/s². {{1.88}} m/s² uses {{UB(u) = 10.5}} instead of {{LB(u)}}, and {{1.68}} m/s² uses upper bounds throughout.",
        difficulty: "challenge",
        guideRef: "upper-lower-bounds",
        hints: [
          "To maximise a fraction, make the top as **large** as possible and the bottom as **small** as possible.",
          "Maximising {{v - u}} needs {{UB(v) - LB(u)}}.",
          "Compute {{(26.5 - 9.5) / 8.5}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m3-q02",
        question: "Given {{p = (2a) / (b - c)}} where {{a = 18.0}}, {{b = 9.4}}, and {{c = 4.4}} are each correct to 1 decimal place, which calculation gives the **lower bound** of {{p}}?",
        options: ["{{(2 * 17.95) / (9.45 - 4.35)}}", "{{(2 * 18.05) / (9.45 - 4.35)}}", "{{(2 * 17.95) / (9.35 - 4.45)}}", "{{(2 * 17.95) / (9.35 - 4.35)}}"],
        answerIndex: 0,
        explanation:
          "Minimising {{(2a) / (b - c)}} requires the **smallest** numerator ({{2 * LB_a = 2 * 17.95}}) divided by the **largest** denominator {{UB_b - LB_c = 9.45 - 4.35}}. {{(2 * 17.95) / (9.35 - 4.45)}} mistakenly minimises the denominator instead of maximising it.",
        difficulty: "challenge",
        guideRef: "upper-lower-bounds",
        hints: [
          "To make a positive fraction as **small** as possible, you need a **small** numerator and a **large** denominator.",
          "Numerator uses {{LB_a = 17.95}}.",
          "How do you make the denominator {{b - c}} as **large** as possible? Use {{UB_b - LB_c}}!",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m3-q03",
        question: "Express {{(5 * 10^n)^3}} in standard form in terms of the integer {{n}}.",
        options: ["{{1.25 * 10^(3n)}}", "{{1.25 * 10^(3n - 2)}}", "{{1.25 * 10^(3n + 2)}}", "{{1.25 * 10^(n + 5)}}"],
        answerIndex: 2,
        explanation:
          "{{(5 * 10^n)^3 = 5^3 * (10^n)^3 = 125 * 10^(3n) = (1.25 * 10^2) * 10^(3n) = 1.25 * 10^(3n + 2)}}. {{1.25 * 10^(3n - 2)}} subtracts {{2}} instead of adding {{2}} when rewriting {{125 = 1.25 * 10^2}}.",
        difficulty: "challenge",
        guideRef: "standard-form-recurring",
        hints: [
          "Cube both factors: {{5^3 = 125}} and {{(10^n)^3 = 10^(3n)}}.",
          "Rewrite {{125}} in standard form as {{1.25 * 10^2}}.",
          "Combine {{10^2 * 10^(3n)}} using index laws.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m3-q04",
        question: "Work out {{0.272727... + 0.366666...}} (where `27` recurs in the first decimal and only `6` recurs in the second), giving your answer as a fraction in its simplest form.",
        options: ["{{63/99}}", "{{211/330}}", "{{71/110}}", "{{64/99}}"],
        answerIndex: 1,
        explanation:
          "{{0.272727... = 27/99 = 3/11}} and {{0.366666... = (36 - 3)/90 = 33/90 = 11/30}}. Adding over common denominator {{330}} gives {{(90 + 121)/330 = 211/330}}. {{64/99}} treats the second number as {{0.363636...}} instead of {{0.366666...}}.",
        difficulty: "challenge",
        guideRef: "standard-form-recurring",
        hints: [
          "Convert each recurring decimal separately first.",
          "{{0.2727... = 27/99 = 3/11}}; for {{y = 0.3666...}}, use {{100y - 10y = 90y = 33 -> y = 11/30}}.",
          "Add {{3/11 + 11/30}} over common denominator {{330}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m3-q05",
        question: "Solve {{27^x * 9^(x - 1) = 1 / 81}}.",
        options: ["{{x = 6/5}}", "{{x = -3/5}}", "{{x = -1}}", "{{x = -2/5}}"],
        answerIndex: 3,
        explanation:
          "In base 3: {{3^(3x) * 3^(2x - 2) = 3^(-4)}}, so {{5x - 2 = -4 -> 5x = -2 -> x = -2/5}}. {{x = -3/5}} comes from writing {{9^(x - 1) = 3^(2x - 1)}} instead of {{3^(2x - 2)}}, and {{x = 6/5}} misses the minus sign in {{1/81 = 3^(-4)}}.",
        difficulty: "challenge",
        guideRef: "fractional-negative-indices",
        hints: [
          "Rewrite {{27 = 3^3}}, {{9 = 3^2}}, and {{1/81 = 3^(-4)}}.",
          "Add exponents on the left: {{3x + 2(x - 1)}}.",
          "Solve {{5x - 2 = -4}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m3-q06",
        question: "Write {{(sqrt(8) * 4^x) / 2^(x - 1)}} as a single power of {{2}}.",
        options: ["{{2^(3x + 1/2)}}", "{{2^(x + 1/2)}}", "{{2^(x + 2)}}", "{{2^(x + 5/2)}}"],
        answerIndex: 3,
        explanation:
          "{{sqrt(8) = (2^3)^(1/2) = 2^(3/2)}} and {{4^x = 2^(2x)}}, so numerator is {{2^(2x + 3/2)}}. Dividing by {{2^(x - 1)}} subtracts the **entire** exponent: {{(2x + 3/2) - (x - 1) = x + 5/2}}. {{2^(x + 1/2)}} forgets brackets and computes {{3/2 - 1}} instead of {{3/2 - (-1)}}.",
        difficulty: "challenge",
        guideRef: "fractional-negative-indices",
        hints: [
          "Write {{sqrt(8) = 2^(3/2)}} and {{4^x = 2^(2x)}}.",
          "Combine the top by adding powers: {{2x + 3/2}}.",
          "Subtract {{(x - 1)}} carefully — subtracting {{-1}} adds {{+1}}!",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m3-q07",
        question: "Find all real solutions to {{5^(2x) - 6 * 5^x + 5 = 0}}.",
        options: ["{{x = 0}} or {{x = 1}}", "{{x = 1}} or {{x = 5}}", "{{x = 0}} only", "{{x = -1}} or {{x = 1}}"],
        answerIndex: 0,
        explanation:
          "Let {{u = 5^x}}: since {{5^(2x) = (5^x)^2 = u^2}}, we solve {{u^2 - 6u + 5 = (u - 1)(u - 5) = 0}}, giving {{5^x = 1}} ({{x = 0}}) or {{5^x = 5}} ({{x = 1}}). {{x = 1}} or {{x = 5}} stops at {{u}} without solving {{5^x = u}}.",
        difficulty: "challenge",
        guideRef: "fractional-negative-indices",
        hints: [
          "Notice {{5^(2x) = (5^x)^2}} — substitute {{u = 5^x}} to form a quadratic.",
          "Factorise {{u^2 - 6u + 5 = 0}} to find {{u}}.",
          "Convert back from {{u = 5^x}} to {{x}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m3-q08",
        question: "Given that {{(a + 2*sqrt(3))(3 - sqrt(3)) = 6 + k*sqrt(3)}}, where {{a}} and {{k}} are integers, find the value of {{k}}.",
        options: ["{{2}}", "{{4}}", "{{10}}", "{{-2}}"],
        answerIndex: 0,
        explanation:
          "Expanding gives {{(3a - 6) + (6 - a)*sqrt(3)}}. Equating the integer parts gives {{3a - 6 = 6 -> a = 4}}, and substituting {{a = 4}} into the {{sqrt(3)}} coefficient gives {{k = 6 - 4 = 2}}. {{4}} is the value of {{a}}, not {{k}}.",
        difficulty: "challenge",
        guideRef: "surds-simplifying-expanding",
        hints: [
          "Expand {{(a + 2*sqrt(3))(3 - sqrt(3))}} in terms of {{a}}.",
          "Equate the rational (integer) part {{3a - 6}} to {{6}} to find {{a}}.",
          "Substitute {{a}} into the coefficient of {{sqrt(3)}} to find {{k}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m3-q09",
        question: "Simplify fully {{sqrt(98) - 12 / sqrt(2) + (1 + sqrt(2))^2}}.",
        options: ["{{3 + sqrt(2)}}", "{{3 + 9*sqrt(2)}}", "{{3 + 3*sqrt(2)}}", "{{3 - 3*sqrt(2)}}"],
        answerIndex: 2,
        explanation:
          "{{sqrt(98) = 7*sqrt(2)}}, {{12 / sqrt(2) = 6*sqrt(2)}}, and {{(1 + sqrt(2))^2 = 3 + 2*sqrt(2)}}. Combining gives {{7*sqrt(2) - 6*sqrt(2) + 3 + 2*sqrt(2) = 3 + 3*sqrt(2)}}. {{3 + sqrt(2)}} forgets the middle {{2*sqrt(2)}} term when squaring {{(1 + sqrt(2))^2}}.",
        difficulty: "challenge",
        guideRef: "surds-simplifying-expanding",
        hints: [
          "Simplify each of the three pieces separately into {{a + b*sqrt(2)}} form.",
          "{{sqrt(98) = 7*sqrt(2)}} and {{12 / sqrt(2) = 6*sqrt(2)}}.",
          "Expand {{(1 + sqrt(2))^2 = 1 + 2*sqrt(2) + 2 = 3 + 2*sqrt(2)}}, then combine.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m3-q10",
        question: "Work out the exact value of {{1 / (sqrt(5) - 2) - 1 / (sqrt(5) + 2)}}.",
        options: ["{{2*sqrt(5)}}", "{{4}}", "{{0}}", "{{4*sqrt(5)}}"],
        answerIndex: 1,
        explanation:
          "Since {{(sqrt(5) - 2)(sqrt(5) + 2) = 5 - 4 = 1}}, rationalising gives {{(sqrt(5) + 2) - (sqrt(5) - 2) = 4}}. {{0}} comes from dropping brackets around {{(sqrt(5) - 2)}} and subtracting {{2}} instead of {{-2}}.",
        difficulty: "challenge",
        guideRef: "rationalising-denominators",
        hints: [
          "Rationalise each fraction (or combine over common denominator {{(sqrt(5) - 2)(sqrt(5) + 2)}}).",
          "Notice {{(sqrt(5))^2 - 2^2 = 5 - 4 = 1}}!",
          "Keep brackets around the second numerator when subtracting: {{(sqrt(5) + 2) - (sqrt(5) - 2)}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m3-q11",
        question: "Express {{(3 + sqrt(2)) / (5 - 3*sqrt(2))}} in the form {{a + b*sqrt(2)}}, where {{a}} and {{b}} are integers.",
        options: ["{{3 + 2*sqrt(2)}}", "{{3 - 2*sqrt(2)}}", "{{21 + 14*sqrt(2)}}", "{{9/7 + (4*sqrt(2))/7}}"],
        answerIndex: 0,
        explanation:
          "Multiply top and bottom by {{(5 + 3*sqrt(2))}}: denominator is {{25 - 9(2) = 7}}, numerator is {{15 + 9*sqrt(2) + 5*sqrt(2) + 6 = 21 + 14*sqrt(2)}}, and dividing both terms by {{7}} gives {{3 + 2*sqrt(2)}}. {{21 + 14*sqrt(2)}} forgets to divide by {{7}}.",
        difficulty: "challenge",
        guideRef: "rationalising-denominators",
        hints: [
          "Multiply numerator and denominator by the conjugate {{(5 + 3*sqrt(2))}}.",
          "Denominator: {{5^2 - (3*sqrt(2))^2 = 25 - 18 = 7}}.",
          "Expand the numerator to {{21 + 14*sqrt(2)}} and divide by {{7}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m3-q12",
        question: "A trapezium has area {{10}} cm² and parallel sides of length {{(2 + sqrt(7))}} cm and {{(4 + sqrt(7))}} cm. Find its exact perpendicular height {{h}}.",
        options: ["{{15 + 5*sqrt(7)}} cm", "{{5 - 5*sqrt(7)}} cm", "{{30 - 10*sqrt(7)}} cm", "{{15 - 5*sqrt(7)}} cm"],
        answerIndex: 3,
        explanation:
          "Half the sum of the parallel sides is {{((6 + 2*sqrt(7))) / 2 = 3 + sqrt(7)}}, so {{(3 + sqrt(7))h = 10 -> h = 10 / (3 + sqrt(7))}}. Multiplying by {{(3 - sqrt(7))}} over {{9 - 7 = 2}} gives {{5(3 - sqrt(7)) = 15 - 5*sqrt(7)}} cm. {{30 - 10*sqrt(7)}} forgets the {{1/2}} in the trapezium area formula or the denominator {{2}}.",
        difficulty: "challenge",
        guideRef: "rationalising-denominators",
        hints: [
          "Trapezium area is {{1/2(p + q)h = 10}}, where {{p}} and {{q}} are the parallel sides.",
          "Simplify {{1/2 * ((2 + sqrt(7)) + (4 + sqrt(7))) = 3 + sqrt(7)}}, so {{h = 10 / (3 + sqrt(7))}}.",
          "Rationalise {{10 / (3 + sqrt(7))}} using {{(3 - sqrt(7))}}.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m3-q13",
        question: "A cylinder has volume {{V = 500}} cm³ (correct to the nearest 10 cm³) and radius {{r = 4.0}} cm (correct to 1 d.p.). Using {{V = pi * r^2 * h}}, find the **upper bound** of {{h}} correct to 2 decimal places.",
        options: ["{{9.80}} cm", "{{10.30}} cm", "{{9.61}} cm", "{{9.95}} cm"],
        answerIndex: 1,
        explanation:
          "{{h = V / (pi * r^2)}}, so {{UB(h) = UB(V) / (pi * (LB(r))^2) = 505 / (pi * 3.95^2) = 10.3026... = 10.30}} cm (2 d.p.). {{9.80}} cm divides by {{UB(r)^2 = 4.05^2}} instead of {{LB(r)^2}}.",
        difficulty: "challenge",
        guideRef: "upper-lower-bounds",
        hints: [
          "Rearrange for {{h}}: {{h = V / (pi * r^2)}}.",
          "Find {{UB(V) = 505}} and {{LB(r) = 3.95}}.",
          "Evaluate {{505 / (pi * 3.95^2)}} to 2 d.p.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m3-q14",
        question: "The mixed recurring decimal {{0.abbb...}} (where {{a}} and {{b}} are single digits and only {{b}} recurs) equals {{19/45}}. What is {{a + b}}?",
        options: ["{{6}}", "{{5}}", "{{10}}", "{{8}}"],
        answerIndex: 0,
        explanation:
          "{{19/45 = 38/90}}. Since {{x = 0.abbb...}} satisfies {{100x - 10x = 90x = 10a + b - a = 9a + b}}, we solve {{9a + b = 38}} with digits {{0 <= a, b <= 9}}, giving {{a = 4, b = 2}} ({{0.4222...}}) and {{a + b = 6}}.",
        difficulty: "challenge",
        guideRef: "standard-form-recurring",
        hints: [
          "Rewrite {{19/45}} with denominator {{90}}: {{38/90}}.",
          "Either divide {{19 ÷ 45}} to see the decimal digits directly, or use {{90x = 9a + b = 38}}.",
          "Find digits {{a}} and {{b}}, then add them.",
        ],
      },
      {
        kind: "mcq",
        id: "number-bounds-surds-m3-q15",
        question: "Given {{x = 2^p}} and {{y = 2^q}}, express {{(8x^2) / sqrt(y)}} as a single power of {{2}} in terms of {{p}} and {{q}}.",
        options: ["{{2^(6p - q/2)}}", "{{2^(3 + 2p + q/2)}}", "{{2^(3 + p^2 - q/2)}}", "{{2^(3 + 2p - q/2)}}"],
        answerIndex: 3,
        explanation:
          "{{8 = 2^3}}, {{x^2 = (2^p)^2 = 2^(2p)}}, and {{sqrt(y) = (2^q)^(1/2) = 2^(q/2)}}; combining powers gives {{2^(3 + 2p - q/2)}}. {{2^(3 + p^2 - q/2)}} squares the exponent {{p}} instead of multiplying by {{2}}.",
        difficulty: "challenge",
        guideRef: "fractional-negative-indices",
        hints: [
          "Write each piece in base 2: {{8 = 2^3}}, {{x^2 = (2^p)^2}}, {{sqrt(y) = (2^q)^(1/2)}}.",
          "Remember {{(2^p)^2 = 2^(2p)}}, not {{2^(p^2)}}.",
          "Add powers on top and subtract the denominator's power.",
        ],
      },
    ],
  },
];
