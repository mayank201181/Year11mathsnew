import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      kind: "short",
      id: "sequences-functions-graphs-quiz-q01",
      question: "Find the {{30}}th term of the arithmetic sequence {{12, 17, 22, 27, ...}}",
      answer: { type: "number", value: 157 },
      traps: [
        { spec: { type: "number", value: 162 }, feedback: "You used a + 30d instead of a + 29d — the 1st term already counts as term 1!" },
      ],
      solution: [
        "First term {{a = 12}}, common difference {{d = 5}}.",
        "{{u_{30} = 12 + (30 - 1) * 5 = 12 + 145 = 157}}.",
      ],
      commonError: "Adding 30 jumps of d instead of 29 jumps.",
      difficulty: "warmup",
      guideRef: "arithmetic-sequences-series",
      hints: ["Use {{u_n = a + (n - 1)d}} with {{a = 12}}, {{d = 5}}, {{n = 30}}."],
    },
    {
      kind: "short",
      id: "sequences-functions-graphs-quiz-q02",
      question: "Find the sum of the first {{16}} terms of the arithmetic series {{4 + 10 + 16 + 22 + ...}}",
      answer: { type: "number", value: 784 },
      traps: [
        { spec: { type: "number", value: 752 }, feedback: "Don't forget the 2 in 2a inside S_n = (n/2)(2a + (n − 1)d)!" },
      ],
      solution: [
        "Here {{a = 4}}, {{d = 6}} and {{n = 16}}.",
        "{{S_{16} = (16/2)(2(4) + 15(6)) = 8 * (8 + 90) = 8 * 98 = 784}}.",
      ],
      commonError: "Writing a + (n − 1)d instead of 2a + (n − 1)d inside the sum bracket.",
      difficulty: "core",
      guideRef: "arithmetic-sequences-series",
      hints: ["Use {{S_n = (n/2)(2a + (n - 1)d)}}.", "Compute {{8 * (8 + 90)}}."],
    },
    {
      kind: "short",
      id: "sequences-functions-graphs-quiz-q03",
      question: "Given {{f(x) = 4x + 1}} and {{g(x) = x^2 - 3}}, evaluate {{fg(-2)}}.",
      answer: { type: "number", value: 5 },
      traps: [
        { spec: { type: "number", value: 46 }, feedback: "46 is gf(−2)! In fg(−2), apply g FIRST: g(−2) = 1, then f(1)." },
        { spec: { type: "number", value: -27 }, feedback: "Remember (−2)² = +4, not −4!" },
      ],
      solution: [
        "Work inside-out: {{g(-2) = (-2)^2 - 3 = 4 - 3 = 1}}.",
        "Now apply {{f}}: {{f(1) = 4(1) + 1 = 5}}.",
      ],
      commonError: "Evaluating left-to-right (computing f(−2) = −7 first, then g(−7) = 46).",
      difficulty: "core",
      guideRef: "composite-inverse-functions",
      hints: ["{{fg(-2)}} means {{f(g(-2))}}.", "Evaluate {{g(-2) = (-2)^2 - 3}} first, then feed that into {{f}}."],
    },
    {
      kind: "short",
      id: "sequences-functions-graphs-quiz-q04",
      question: "Given {{f(x) = (3x + 8)/2}}, find an expression in terms of {{x}} for {{f^(-1)(x)}}.",
      answer: { type: "expression", expr: "(2x - 8)/3", form: "any" },
      traps: [
        { spec: { type: "expression", expr: "2/(3x + 8)" }, feedback: "f⁻¹(x) is the inverse function (swap x and y), NOT the reciprocal 1/f(x)." },
      ],
      solution: [
        "Let {{y = (3x + 8)/2}} and swap {{x}} and {{y}}: {{x = (3y + 8)/2}}.",
        "Rearrange for {{y}}: {{2x = 3y + 8 => 3y = 2x - 8 => f^(-1)(x) = (2x - 8)/3}}.",
      ],
      commonError: "Taking the reciprocal 2/(3x + 8) instead of swapping x and y.",
      difficulty: "core",
      guideRef: "composite-inverse-functions",
      hints: ["Write {{y = (3x + 8)/2}}, swap {{x}} and {{y}}, and rearrange for {{y}}.", "Multiply by {{2}}, subtract {{8}}, then divide by {{3}}."],
    },
    {
      kind: "short",
      id: "sequences-functions-graphs-quiz-q05",
      question: "Find the coordinates {{(x, y)}} of the turning point of {{y = x^2 - 8x + 19}}.",
      answer: { type: "list", values: [4, 3], ordered: true, display: "(4, 3)" },
      traps: [
        { spec: { type: "list", values: [-4, 3], ordered: true }, feedback: "Flip the sign inside (x − 4)²: the bracket is zero at x = +4." },
      ],
      solution: [
        "Complete the square: {{y = (x - 4)^2 - 16 + 19 = (x - 4)^2 + 3}}.",
        "The minimum turning point is {{(4, 3)}}.",
      ],
      commonError: "Writing (−4, 3) by keeping the negative sign from (x − 4)².",
      difficulty: "core",
      guideRef: "turning-points-sketching",
      hints: ["Complete the square on {{x^2 - 8x + 19}}.", "{{(x - 4)^2 - 16 + 19 = (x - 4)^2 + 3}}."],
    },
    {
      kind: "short",
      id: "sequences-functions-graphs-quiz-q06",
      question: "Line {{L_1}} has equation {{y = (5/2)x - 3}}. Write down the gradient of a line perpendicular to {{L_1}} as a fraction.",
      answer: { type: "fraction", n: -2, d: 5, simplest: true, allowDecimal: true },
      traps: [
        { spec: { type: "fraction", n: 2, d: 5 }, feedback: "You flipped the fraction, but remember to change the sign too so m₁m₂ = −1!" },
      ],
      solution: [
        "Perpendicular gradients satisfy {{m_1 m_2 = -1}}.",
        "{{m_2 = -1 / (5/2) = -2/5}}.",
      ],
      commonError: "Forgetting the negative sign when taking the reciprocal.",
      difficulty: "warmup",
      guideRef: "turning-points-sketching",
      hints: ["Use {{m_1 * m_2 = -1}} (negative reciprocal)."],
    },
    {
      kind: "mcq",
      id: "sequences-functions-graphs-quiz-q07",
      question: "Which equation represents an exponential **decay** curve passing through {{(0, 4)}}?",
      options: ["{{y = 4 * (0.5)^x}}", "{{y = 4 * 2^x}}", "{{y = 0.5 * 4^x}}", "{{y = 4/x}}"],
      answerIndex: 0,
      explanation:
        "At {{x = 0}}, {{y = 4 * (0.5)^0 = 4}}, and since the base {{0.5}} satisfies {{0 < b < 1}}, {{y}} decays towards {{0}} as {{x}} increases. {{y = 4 * 2^x}} grows rather than decays, and {{y = 0.5 * 4^x}} passes through {{(0, 0.5)}}.",
      difficulty: "core",
      guideRef: "cubic-reciprocal-exponential",
      hints: ["Check which equations give {{y = 4}} when {{x = 0}}.", "For exponential decay, the base {{b}} in {{a * b^x}} must satisfy {{0 < b < 1}}."],
    },
    {
      kind: "short",
      id: "sequences-functions-graphs-quiz-q08",
      question: "The curve {{y = x^3 - 3x + 4}} is plotted. To solve {{x^3 - 5x + 1 = 0}} graphically, you draw the line {{y = mx + c}}. Find the expression {{mx + c}}.",
      answer: { type: "expression", expr: "2x + 3", form: "simplified" },
      traps: [
        { spec: { type: "expression", expr: "-2x - 3" }, feedback: "Check your signs: x³ − 5x + 1 = 0 rearranges to x³ − 3x + 4 = 2x + 3." },
      ],
      solution: [
        "Start from {{x^3 - 5x + 1 = 0}}.",
        "Add {{2x + 3}} to both sides so the left matches the plotted curve: {{x^3 - 3x + 4 = 2x + 3}}.",
        "Draw {{y = 2x + 3}}.",
      ],
      commonError: "Subtracting in reverse to get −2x − 3.",
      difficulty: "core",
      guideRef: "cubic-reciprocal-exponential",
      hints: ["Rearrange {{x^3 - 5x + 1 = 0}} so the left side becomes {{x^3 - 3x + 4}}.", "Add {{2x}} and add {{3}} to both sides."],
    },
    {
      kind: "short",
      id: "sequences-functions-graphs-quiz-q09",
      question: "The graph of {{y = f(x)}} has a maximum point at {{(-2, 5)}}. Find the coordinates {{(x, y)}} of the maximum point on {{y = f(x - 6) + 3}}.",
      answer: { type: "list", values: [4, 8], ordered: true, display: "(4, 8)" },
      traps: [
        { spec: { type: "list", values: [-8, 8], ordered: true }, feedback: "(x − 6) inside the bracket shifts RIGHT by 6: −2 + 6 = 4." },
      ],
      solution: [
        "Inside {{(x - 6)}} shifts right by {{6}}: {{-2 + 6 = 4}}.",
        "Outside {{+ 3}} shifts up by {{3}}: {{5 + 3 = 8}}, giving {{(4, 8)}}.",
      ],
      commonError: "Shifting x left to −8 instead of right to +4.",
      difficulty: "core",
      guideRef: "graph-transformations",
      hints: ["Solve {{x - 6 = -2}} for the new {{x}}-coordinate.", "Add {{3}} to {{y = 5}}."],
    },
    {
      kind: "short",
      id: "sequences-functions-graphs-quiz-q10",
      question: "Find the {{n}}th term in terms of {{n}} of the quadratic sequence {{3, 9, 19, 33, 51, ...}}",
      answer: { type: "expression", expr: "2n^2 + 1", form: "simplified" },
      traps: [
        { spec: { type: "expression", expr: "4n^2 - 1" }, feedback: "The second difference is 4, which equals 2a — halve it to get a = 2!" },
      ],
      solution: [
        "First differences: {{6, 10, 14, 18}}; second difference {{= 4}}, so {{2a = 4 => a = 2}}.",
        "Subtract {{2n^2}} ({{2, 8, 18, 32, 50}}) from {{3, 9, 19, 33, 51}} to get {{1, 1, 1, 1, 1}}.",
        "Therefore {{u_n = 2n^2 + 1}}.",
      ],
      commonError: "Using the second difference 4 directly as a instead of halving to a = 2.",
      difficulty: "core",
      guideRef: "arithmetic-sequences-series",
      hints: ["Find the second difference and set it equal to {{2a}}.", "Subtract {{2n^2}} from each term of {{3, 9, 19, 33}}."],
    },
  ],
  papers: [
    {
      id: "sequences-functions-graphs-p1",
      title: "Practice Paper 1 — Edexcel 4MA1 Higher Non-Calculator Style",
      questions: [
        {
          kind: "short",
          id: "sequences-functions-graphs-p1-q01",
          question: "The {{n}}th term of an arithmetic sequence is {{74 - 6n}}. Find the sum of the first {{20}} terms of this sequence.",
          answer: { type: "number", value: 220 },
          traps: [
            { spec: { type: "number", value: 280 }, feedback: "Check the first term: at n = 1, a = 74 − 6(1) = 68, not 74!" },
          ],
          solution: [
            "At {{n = 1}}, first term {{a = 74 - 6(1) = 68}}. At {{n = 20}}, last term {{l = 74 - 6(20) = -46}}.",
            "Using {{S_n = (n/2)(a + l)}}: {{S_{20} = 10 * (68 + (-46)) = 10 * 22 = 220}}.",
          ],
          solutions: [
            {
              label: "Using 2a + (n − 1)d",
              steps: [
                "{{a = 68}} and {{d = -6}}.",
                "{{S_{20} = 10 * (2(68) + 19(-6)) = 10 * (136 - 114) = 220}}.",
              ],
            },
          ],
          commonError: "Assuming the constant 74 in 74 − 6n is the first term a (instead of substituting n = 1 to get a = 68).",
          difficulty: "core",
          guideRef: "arithmetic-sequences-series",
          hints: ["Substitute {{n = 1}} to get the first term {{a}}, and {{n = 20}} to get the last term {{l}}.", "Use {{S_{20} = (20/2)(a + l)}}."],
          strategy: "Reverse and pair",
        },
        {
          kind: "short",
          id: "sequences-functions-graphs-p1-q02",
          question: "In an arithmetic series, the {{3}}rd term is {{19}} and the sum of the first {{10}} terms is {{290}}. Find the first term {{a}} and the common difference {{d}} (write your answer as {{a, d}}).",
          answer: { type: "list", values: [11, 4], ordered: true, display: "11, 4" },
          traps: [
            { spec: { type: "list", values: [4, 11], ordered: true }, feedback: "Give a first, then d: a = 11, d = 4." },
          ],
          solution: [
            "{{u_3 = 19 => a + 2d = 19}}  (1).",
            "{{S_{10} = 290 => 5(2a + 9d) = 290 => 2a + 9d = 58}}  (2).",
            "Double (1) to get {{2a + 4d = 38}}; subtract from (2): {{5d = 20 => d = 4}}.",
            "Substitute into (1): {{a + 8 = 19 => a = 11}}.",
          ],
          commonError: "Writing u_3 = a + 3d instead of a + 2d.",
          difficulty: "core",
          guideRef: "arithmetic-sequences-series",
          hints: ["Write {{a + 2d = 19}} from the 3rd term.", "Write {{5(2a + 9d) = 290}} from {{S_{10}}}, then solve simultaneously."],
          strategy: "Form simultaneous equations from sequence clues",
        },
        {
          kind: "short",
          id: "sequences-functions-graphs-p1-q03",
          question: "Find the {{n}}th term in terms of {{n}} of the quadratic sequence {{2, 7, 16, 29, 46, ...}}",
          answer: { type: "expression", expr: "2n^2 - n + 1", form: "simplified" },
          traps: [
            { spec: { type: "expression", expr: "4n^2 - 3n + 1" }, feedback: "Halve the second difference 4 to get a = 2!" },
          ],
          solution: [
            "First differences: {{5, 9, 13, 17}}; second difference {{= 4}}, so {{2a = 4 => a = 2}}.",
            "Subtract {{2n^2}} ({{2, 8, 18, 32, 50}}) from {{2, 7, 16, 29, 46}}: remainder is {{0, -1, -2, -3, -4}}.",
            "That linear sequence has {{n}}th term {{-n + 1}}, giving {{2n^2 - n + 1}}.",
          ],
          commonError: "Misreading the decreasing linear remainder 0, −1, −2, −3 as −n instead of −n + 1.",
          difficulty: "core",
          guideRef: "arithmetic-sequences-series",
          hints: ["Find the second difference and divide by {{2}} to get {{a}}.", "Subtract {{2n^2}} from each term and find the linear formula for {{0, -1, -2, -3}}."],
        },
        {
          kind: "short",
          id: "sequences-functions-graphs-p1-q04",
          question: "Functions {{f}} and {{g}} are defined by {{f(x) = 3x - 4}} and {{g(x) = x^2 + 2x}}. Expand and simplify an expression for {{gf(x)}}.",
          answer: { type: "expression", expr: "9x^2 - 18x + 8", form: "expanded" },
          traps: [
            { spec: { type: "expression", expr: "3x^2 + 6x - 4" }, feedback: "3x² + 6x − 4 is fg(x)! For gf(x), substitute f(x) = 3x − 4 into g." },
          ],
          solution: [
            "{{gf(x) = g(3x - 4) = (3x - 4)^2 + 2(3x - 4)}}.",
            "Expand: {{(9x^2 - 24x + 16) + (6x - 8) = 9x^2 - 18x + 8}}.",
          ],
          commonError: "Computing fg(x) instead of gf(x), or forgetting to substitute (3x − 4) into BOTH x's of x² + 2x.",
          difficulty: "core",
          guideRef: "composite-inverse-functions",
          hints: ["Replace BOTH {{x}}'s in {{g(x) = x^2 + 2x}} with {{(3x - 4)}}.", "Expand {{(3x - 4)^2 + 2(3x - 4)}} and collect like terms."],
          strategy: "Work from the inside out",
        },
        {
          kind: "short",
          id: "sequences-functions-graphs-p1-q05",
          question: "For {{x != 1}}, {{f(x) = (3x + 5)/(x - 1)}}. Find an expression for the inverse function {{f^(-1)(x)}}.",
          answer: { type: "expression", expr: "(x + 5)/(x - 3)", form: "any" },
          traps: [
            { spec: { type: "expression", expr: "(x - 1)/(3x + 5)" }, feedback: "Flipping the fraction gives the reciprocal 1/f(x), not the inverse f⁻¹(x)!" },
          ],
          solution: [
            "Swap {{x}} and {{y}}: {{x = (3y + 5)/(y - 1)}}.",
            "Clear denominator: {{xy - x = 3y + 5}}.",
            "Collect {{y}}-terms: {{xy - 3y = x + 5 => y(x - 3) = x + 5 => f^(-1)(x) = (x + 5)/(x - 3)}}.",
          ],
          commonError: "Leaving y on both sides of the formula instead of collecting and factorising y(x − 3).",
          difficulty: "core",
          guideRef: "composite-inverse-functions",
          hints: ["Write {{x = (3y + 5)/(y - 1)}} and multiply both sides by {{(y - 1)}}.", "Bring all {{y}}-terms to the left and factorise out {{y}}."],
        },
        {
          kind: "short",
          id: "sequences-functions-graphs-p1-q06",
          question: "Given {{f(x) = 2x + 7}} and {{g(x) = (x - 1)/3}}, solve the equation {{fg(x) = 15}}.",
          answer: { type: "number", value: 13 },
          traps: [
            { spec: { type: "number", value: 11 }, feedback: "Check your rearranging: (x − 1)/3 = 4 gives x − 1 = 12, so x = 13." },
          ],
          solution: [
            "Work outside-in: {{f(g(x)) = 15 => 2 * g(x) + 7 = 15 => g(x) = 4}}.",
            "Solve {{(x - 1)/3 = 4 => x - 1 = 12 => x = 13}}.",
          ],
          commonError: "Solving gf(x) = 15 instead of fg(x) = 15.",
          difficulty: "core",
          guideRef: "composite-inverse-functions",
          hints: ["First find what {{g(x)}} must equal so that {{2 * g(x) + 7 = 15}}.", "Then solve {{(x - 1)/3 = 4}}."],
        },
        {
          kind: "short",
          id: "sequences-functions-graphs-p1-q07",
          question: "Find the coordinates {{(x, y)}} of the maximum turning point of the curve {{y = 5 + 8x - 2x^2}}.",
          answer: { type: "list", values: [2, 13], ordered: true, display: "(2, 13)" },
          traps: [
            { spec: { type: "list", values: [2, 9], ordered: true }, feedback: "Watch the −2 outside the bracket: −2[(x − 2)² − 4] + 5 = −2(x − 2)² + 8 + 5 = 13." },
          ],
          solution: [
            "Factor {{-2}} from the {{x^2}} and {{x}} terms: {{y = -2(x^2 - 4x) + 5}}.",
            "Complete the square: {{y = -2[(x - 2)^2 - 4] + 5 = -2(x - 2)^2 + 8 + 5 = 13 - 2(x - 2)^2}}.",
            "Maximum turning point is {{(2, 13)}}.",
          ],
          commonError: "Sign slip when multiplying −2 × (−4) = +8.",
          difficulty: "core",
          guideRef: "turning-points-sketching",
          hints: ["Factor {{-2}} out of {{-2x^2 + 8x}} to get {{-2(x^2 - 4x) + 5}}.", "Or find {{x = -b/(2a) = -8/(-4) = 2}} and substitute {{x = 2}} into {{5 + 8x - 2x^2}}!"],
        },
        {
          kind: "short",
          id: "sequences-functions-graphs-p1-q08",
          question: "Line {{L}} passes through {{(6, -1)}} and is perpendicular to the line {{2x - 6y + 9 = 0}}. Find the {{y}}-coordinate where line {{L}} crosses the {{y}}-axis.",
          answer: { type: "number", value: 17 },
          traps: [
            { spec: { type: "number", value: -19 }, feedback: "Check the gradient of 2x − 6y + 9 = 0: 6y = 2x + 9 so m = +1/3, giving m_perp = −3." },
          ],
          solution: [
            "Rearrange {{2x - 6y + 9 = 0}} to {{y = (1/3)x + 3/2}}, which has gradient {{m_1 = 1/3}}.",
            "Perpendicular gradient is {{m_2 = -3}}.",
            "Through {{(6, -1)}}: {{y - (-1) = -3(x - 6) => y = -3x + 17}}, so the {{y}}-intercept is {{17}}.",
          ],
          commonError: "Reading the gradient of 2x − 6y + 9 = 0 as 2 instead of rearranging for y first.",
          difficulty: "core",
          guideRef: "turning-points-sketching",
          hints: ["Make {{y}} the subject of {{2x - 6y + 9 = 0}} to read its gradient cleanly.", "Take the negative reciprocal for {{m_L}}, then substitute {{(6, -1)}} into {{y - y_1 = m(x - x_1)}}."],
        },
        {
          kind: "short",
          id: "sequences-functions-graphs-p1-q09",
          question: "The curve {{y = a * b^x}} passes through {{(0, 8)}} and {{(3, 27)}}, where {{a > 0}} and {{b > 0}}. Find the value of {{b}} as a simplified fraction.",
          answer: { type: "fraction", n: 3, d: 2, simplest: true, allowDecimal: true },
          traps: [
            { spec: { type: "fraction", n: 27, d: 8 }, feedback: "27/8 is b³ — take the cube root to find b = 3/2!" },
          ],
          solution: [
            "At {{x = 0}}, {{8 = a * b^0 => a = 8}}.",
            "At {{x = 3}}, {{27 = 8 * b^3 => b^3 = 27/8}}.",
            "Taking the cube root gives {{b = cbrt(27/8) = 3/2}}.",
          ],
          commonError: "Dividing 27/8 by 3 instead of taking the cube root.",
          difficulty: "core",
          guideRef: "cubic-reciprocal-exponential",
          hints: ["Substitute {{x = 0, y = 8}} to find {{a}}.", "Solve {{8b^3 = 27}} by taking the cube root of {{27/8}}."],
        },
        {
          kind: "short",
          id: "sequences-functions-graphs-p1-q10",
          question: "You have plotted {{y = x^3 - 4x^2 + 3}}. Find the expression {{mx + c}} for the straight line {{y = mx + c}} you must draw to solve {{x^3 - 4x^2 + 2x - 5 = 0}}.",
          answer: { type: "expression", expr: "-2x + 8", form: "simplified" },
          traps: [
            { spec: { type: "expression", expr: "2x - 8" }, feedback: "Watch the signs when moving +2x − 5 across to match +3: x³ − 4x² + 3 = −2x + 8." },
          ],
          solution: [
            "From {{x^3 - 4x^2 + 2x - 5 = 0}}, isolate {{x^3 - 4x^2 = -2x + 5}}.",
            "Add {{3}} to both sides: {{x^3 - 4x^2 + 3 = -2x + 8}}, so draw {{y = -2x + 8}}.",
          ],
          commonError: "Sign slip when adjusting −5 to +3.",
          difficulty: "core",
          guideRef: "cubic-reciprocal-exponential",
          hints: ["Rewrite {{x^3 - 4x^2 + 2x - 5 = 0}} as {{x^3 - 4x^2 = -2x + 5}}.", "Add {{3}} to both sides so the left side equals {{y}}."],
        },
        {
          kind: "short",
          id: "sequences-functions-graphs-p1-q11",
          question: "The curve {{y = f(x)}} has a minimum turning point at {{(8, -3)}}. Find the coordinates {{(x, y)}} of the corresponding turning point on {{y = -f(4x) + 2}}.",
          answer: { type: "list", values: [2, 5], ordered: true, display: "(2, 5)" },
          traps: [
            { spec: { type: "list", values: [32, 5], ordered: true }, feedback: "f(4x) divides x-coordinates by 4 (8 ÷ 4 = 2), rather than multiplying!" },
            { spec: { type: "list", values: [2, -1], ordered: true }, feedback: "Apply BIDMAS outside: −(−3) + 2 = +3 + 2 = 5." },
          ],
          solution: [
            "Inside {{4x = 8 => x = 2}}.",
            "Outside {{y = -(-3) + 2 = 3 + 2 = 5}}, giving {{(2, 5)}}.",
          ],
          commonError: "Multiplying x by 4 instead of dividing by 4, or adding 2 before negating y.",
          difficulty: "core",
          guideRef: "graph-transformations",
          hints: ["Set {{4x = 8}} for the new {{x}}-coordinate.", "Evaluate {{-(-3) + 2}} for the new {{y}}-coordinate."],
        },
        {
          kind: "written",
          id: "sequences-functions-graphs-p1-q12",
          question:
            "The curve {{C}} has equation {{y = x^2 - 6x + 13}}. Complete the square to explain why {{C}} never intersects the {{x}}-axis, and write down the coordinates of its vertex.",
          marks: 3,
          modelAnswer:
            "Rewriting in completed-square form gives {{y = (x - 3)^2 - 9 + 13 = (x - 3)^2 + 4}}. Because {{(x - 3)^2 >= 0}} for every real value of {{x}}, we have {{y >= 4}}, which is strictly positive so {{y}} never equals {{0}}. Its vertex is at {{(3, 4)}}.",
          markScheme: [
            {
              point: "Completes the square accurately to (x − 3)² + 4",
              keywords: ["(x - 3)^2 + 4", "(x-3)^2+4", "(x - 3)² + 4"],
            },
            {
              point: "Argues that (x − 3)² ≥ 0 for all real x, hence y ≥ 4 > 0 (so y ≠ 0)",
              keywords: [">= 0", "y >= 4", "at least 4", "always positive", "strictly positive"],
            },
            {
              point: "States vertex coordinates (3, 4)",
              keywords: ["(3, 4)", "(3,4)"],
            },
          ],
          commonError: "Testing only two or three values of x instead of proving y ≥ 4 for all real x.",
          difficulty: "core",
          guideRef: "turning-points-sketching",
          hints: ["Rewrite {{x^2 - 6x + 13}} in the form {{(x - p)^2 + q}}.", "What is the minimum possible value of {{(x - 3)^2}}, and what does that tell you about {{y}}?"],
        },
        {
          kind: "short",
          id: "sequences-functions-graphs-p1-q13",
          question: "How many terms of the arithmetic series {{9 + 13 + 17 + 21 + ...}} must be added to give a sum of {{555}}?",
          answer: { type: "number", value: 15 },
          traps: [
            { spec: { type: "number", value: 30 }, feedback: "Did you forget to divide n by 2 in S_n = (n/2)(2a + (n − 1)d)?" },
          ],
          solution: [
            "Substitute {{a = 9}}, {{d = 4}} and {{S_n = 555}}: {{(n/2)(18 + 4(n - 1)) = 555}}.",
            "Simplify: {{(n/2)(4n + 14) = 555 => n(2n + 7) = 555 => 2n^2 + 7n - 555 = 0}}.",
            "Factorise: {{(n - 15)(2n + 37) = 0}}. Since {{n}} is a positive integer, {{n = 15}}.",
          ],
          commonError: "Forgetting the factor 1/2 in S_n or keeping the negative root −37/2.",
          difficulty: "challenge",
          guideRef: "arithmetic-sequences-series",
          hints: [
            "Substitute {{a = 9}} and {{d = 4}} into {{(n/2)(2a + (n - 1)d) = 555}}.",
            "Halve {{(4n + 14)}} to get {{n(2n + 7) = 555}}, so {{2n^2 + 7n - 555 = 0}}.",
            "Factorise {{(n - 15)(2n + 37) = 0}} and reject negative {{n}}.",
          ],
        },
        {
          kind: "written",
          id: "sequences-functions-graphs-p1-q14",
          question:
            "Functions {{f}} and {{g}} are defined by {{f(x) = (4x + 1)/(x - 2)}} for {{x != 2}}, and {{g(x) = 2x + 5}}. Show clear algebraic working to find {{f^(-1)(x)}} in its simplest form, and explain why {{x = -1.5}} must be excluded from the domain of {{fg(x)}}.",
          marks: 4,
          modelAnswer:
            "Swapping {{x}} and {{y}} gives {{x = (4y + 1)/(y - 2)}}, so {{xy - 2x = 4y + 1}}. Collecting {{y}}-terms yields {{xy - 4y = 2x + 1}}, so {{y(x - 4) = 2x + 1}} and {{f^(-1)(x) = (2x + 1)/(x - 4)}}. In {{fg(x) = f(2x + 5)}}, the denominator becomes {{(2x + 5) - 2 = 2x + 3}}, and setting {{2x + 3 = 0}} causes division by zero at {{x = -1.5}}.",
          markScheme: [
            {
              point: "Swaps x and y and multiplies up to clear denominator: xy − 2x = 4y + 1",
              keywords: ["xy - 2x", "xy-2x", "x(y - 2)"],
            },
            {
              point: "Collects y-terms on one side and factorises: y(x − 4) = 2x + 1",
              keywords: ["y(x - 4)", "xy - 4y", "x - 4"],
            },
            {
              point: "States simplified inverse (2x + 1)/(x − 4)",
              keywords: ["(2x + 1)/(x - 4)", "(2x+1)/(x-4)", "2x + 1"],
            },
            {
              point: "Shows denominator of fg(x) is 2x + 3 = 0 (or g(x) = 2), which would divide by zero",
              keywords: ["2x + 3", "division by zero", "divide by zero", "2x + 5 = 2"],
            },
          ],
          commonError: "Excluding x = 2 from fg(x) instead of solving g(x) = 2.",
          difficulty: "challenge",
          guideRef: "composite-inverse-functions",
          hints: [
            "Write {{x = (4y + 1)/(y - 2)}} and multiply both sides by {{(y - 2)}}.",
            "Group all terms with {{y}} on one side and factorise {{y}} out.",
            "For {{fg(x)}}, substitute {{2x + 5}} into {{f}}'s denominator {{(x - 2)}} and explain when division by zero happens.",
          ],
        },
      ],
    },
    {
      id: "sequences-functions-graphs-p2",
      title: "Practice Paper 2 — Edexcel 4MA1 Higher Calculator & Multi-Step Style",
      questions: [
        {
          kind: "short",
          id: "sequences-functions-graphs-p2-q01",
          question: "An arithmetic sequence has {{6}}th term {{37}} and {{14}}th term {{85}}. Find the sum of the first {{25}} terms.",
          answer: { type: "number", value: 1975 },
          traps: [
            { spec: { type: "number", value: 1800 }, feedback: "Check the first term a: from u₆ = 37 with d = 6, a = 37 − 5(6) = 7." },
          ],
          solution: [
            "{{u_{14} - u_6 = 8d = 85 - 37 = 48 => d = 6}}.",
            "{{a + 5(6) = 37 => a = 7}}.",
            "{{S_{25} = (25/2)(2(7) + 24(6)) = 12.5 * (14 + 144) = 12.5 * 158 = 1975}}.",
          ],
          commonError: "Dividing by 14 − 6 + 1 = 9 steps instead of 8 steps.",
          difficulty: "core",
          guideRef: "arithmetic-sequences-series",
          hints: ["Use {{u_{14} - u_6 = 8d}} to find {{d}}.", "Find {{a}} from {{a + 5d = 37}}, then apply {{S_{25} = (25/2)(2a + 24d)}}."],
        },
        {
          kind: "short",
          id: "sequences-functions-graphs-p2-q02",
          question: "The sum of the first {{n}} terms of an arithmetic series is {{S_n = 2n^2 + 5n}}. Find the {{8}}th term {{u_8}} of the series.",
          answer: { type: "number", value: 35 },
          traps: [
            { spec: { type: "number", value: 168 }, feedback: "168 is S₈ (the sum of the first 8 terms). Subtract S₇ to isolate the 8th term alone!" },
          ],
          solution: [
            "{{S_8 = 2(64) + 5(8) = 128 + 40 = 168}}.",
            "{{S_7 = 2(49) + 5(7) = 98 + 35 = 133}}.",
            "Therefore {{u_8 = S_8 - S_7 = 168 - 133 = 35}}.",
          ],
          commonError: "Giving S₈ = 168 instead of u₈ = S₈ − S₇.",
          difficulty: "core",
          guideRef: "arithmetic-sequences-series",
          hints: ["Remember {{u_8 = S_8 - S_7}}.", "Evaluate {{S_8}} and {{S_7}} from {{2n^2 + 5n}} and subtract."],
        },
        {
          kind: "short",
          id: "sequences-functions-graphs-p2-q03",
          question: "What is the minimum value in the range of {{f(x) = 2x^2 - 12x + 23}} for all real {{x}}?",
          answer: { type: "number", value: 5 },
          traps: [
            { spec: { type: "number", value: 14 }, feedback: "Remember to multiply −9 by 2 when expanding 2[(x − 3)² − 9] + 23!" },
            { spec: { type: "number", value: 3 }, feedback: "x = 3 is the input where the minimum occurs; substitute x = 3 to find the minimum output f(3) = 5." },
          ],
          solution: [
            "{{f(x) = 2(x^2 - 6x) + 23 = 2[(x - 3)^2 - 9] + 23 = 2(x - 3)^2 + 5}}.",
            "Since {{2(x - 3)^2 >= 0}}, the minimum output in the range is {{5}}.",
          ],
          commonError: "Forgetting to multiply −9 by the factor 2 outside the bracket.",
          difficulty: "core",
          guideRef: "composite-inverse-functions",
          hints: ["Complete the square: {{2(x^2 - 6x) + 23}}.", "Read off the constant {{q}} in {{2(x - 3)^2 + q}}."],
        },
        {
          kind: "short",
          id: "sequences-functions-graphs-p2-q04",
          question: "Given {{f(x) = 2x - 3}} and {{g(x) = x^2 + 2}}, find both solutions to the equation {{fg(x) = gf(x)}}.",
          answer: { type: "list", values: [1, 5], ordered: false, display: "1, 5" },
          traps: [
            { spec: { type: "number", value: 1 }, feedback: "Expanding gf(x) = (2x − 3)² + 2 gives a quadratic with TWO roots — find both!" },
          ],
          solution: [
            "Form {{fg(x) = 2(x^2 + 2) - 3 = 2x^2 + 1}}.",
            "Form {{gf(x) = (2x - 3)^2 + 2 = 4x^2 - 12x + 11}}.",
            "Equate: {{4x^2 - 12x + 11 = 2x^2 + 1 => 2x^2 - 12x + 10 = 0 => 2(x - 1)(x - 5) = 0}}, giving {{x = 1}} or {{x = 5}}.",
          ],
          commonError: "Expanding (2x − 3)² as 4x² − 9 or 4x² + 9 without the middle term −12x.",
          difficulty: "challenge",
          guideRef: "composite-inverse-functions",
          hints: [
            "Write out {{fg(x) = 2(x^2 + 2) - 3}} and {{gf(x) = (2x - 3)^2 + 2}}.",
            "Expand {{(2x - 3)^2 = 4x^2 - 12x + 9}} carefully.",
            "Collect terms to form {{2x^2 - 12x + 10 = 0}}, divide by {{2}}, and factorise.",
          ],
        },
        {
          kind: "short",
          id: "sequences-functions-graphs-p2-q05",
          question: "For {{x != -4}}, {{h(x) = (2x - 9)/(x + 4)}}. Find the exact value of {{h^(-1)(5)}} as an improper fraction.",
          answer: { type: "fraction", n: -29, d: 3, simplest: true, form: "improper" },
          traps: [
            { spec: { type: "fraction", n: 9, d: 1 }, feedback: "Don't plug x = 5 into h(x)! h⁻¹(5) asks for the x that gives h(x) = 5." },
            { spec: { type: "fraction", n: 29, d: 3 }, feedback: "Check your signs: 2x − 9 = 5x + 20 gives −3x = 29, so x = −29/3." },
          ],
          solution: [
            "Let {{h^(-1)(5) = x}}, so {{h(x) = 5}}.",
            "{{(2x - 9)/(x + 4) = 5 => 2x - 9 = 5(x + 4) = 5x + 20}}.",
            "{{-29 = 3x => x = -29/3}}.",
          ],
          commonError: "Evaluating h(5) = 1/9 (or its reciprocal 9) instead of solving h(x) = 5.",
          difficulty: "core",
          guideRef: "composite-inverse-functions",
          hints: ["Solve {{(2x - 9)/(x + 4) = 5}} directly instead of finding the full formula for {{h^(-1)(x)}}.", "Multiply both sides by {{(x + 4)}}."],
          strategy: "Use x = f(k) to solve f⁻¹(x) = k",
        },
        {
          kind: "short",
          id: "sequences-functions-graphs-p2-q06",
          question: "Points {{A(-3, 1)}} and {{B(5, 7)}} define segment {{AB}}. The perpendicular bisector of {{AB}} has equation {{4x + 3y = k}}. Find the integer {{k}}.",
          answer: { type: "number", value: 16 },
          traps: [
            { spec: { type: "number", value: -9 }, feedback: "Use the midpoint M(1, 4) of AB, not point A(−3, 1)!" },
          ],
          solution: [
            "Midpoint {{M = ((-3 + 5)/2, (1 + 7)/2) = (1, 4)}}.",
            "Gradient {{m_{AB} = (7 - 1)/(5 - (-3)) = 6/8 = 3/4}}, so {{m_{perp} = -4/3}}.",
            "Through {{(1, 4)}}: {{y - 4 = -(4/3)(x - 1) => 3y - 12 = -4x + 4 => 4x + 3y = 16}}, so {{k = 16}}.",
          ],
          commonError: "Substituting point A or B instead of the midpoint M(1, 4).",
          difficulty: "core",
          guideRef: "turning-points-sketching",
          hints: ["Find the midpoint {{M}} of {{A(-3, 1)}} and {{B(5, 7)}}.", "Check {{m_{perp} = -4/3}}, then substitute {{M}} into {{4x + 3y = k}}."],
        },
        {
          kind: "short",
          id: "sequences-functions-graphs-p2-q07",
          question: "A parabola has equation {{y = (x + 5)(3 - x)}}. Find the coordinates {{(x, y)}} of its maximum turning point.",
          answer: { type: "list", values: [-1, 16], ordered: true, display: "(−1, 16)" },
          traps: [
            { spec: { type: "list", values: [1, 12], ordered: true }, feedback: "The roots are x = −5 and x = +3, whose midpoint is (−5 + 3)/2 = −1." },
          ],
          solution: [
            "Roots are {{x = -5}} and {{x = 3}}.",
            "By symmetry, vertex {{x = (-5 + 3)/2 = -1}}.",
            "At {{x = -1}}, {{y = (-1 + 5)(3 - (-1)) = 4 * 4 = 16}}, giving {{(-1, 16)}}.",
          ],
          commonError: "Misreading the root of (x + 5) as +5 instead of −5.",
          difficulty: "core",
          guideRef: "turning-points-sketching",
          hints: ["Find the two {{x}}-intercepts by setting {{(x + 5)(3 - x) = 0}}.", "Average the two roots to get the vertex {{x}}-coordinate, then substitute to find {{y}}."],
          strategy: "Symmetry midpoint check",
        },
        {
          kind: "short",
          id: "sequences-functions-graphs-p2-q08",
          question: "The reciprocal curve {{y = k/(x + 2) - 5}} passes through the point {{(1, -1)}}. Find the constant {{k}}.",
          answer: { type: "number", value: 12 },
          traps: [
            { spec: { type: "number", value: -18 }, feedback: "Add 5 to −1 cleanly: −1 + 5 = +4, then multiply by (1 + 2) = 3." },
          ],
          solution: [
            "Substitute {{x = 1}} and {{y = -1}}: {{-1 = k/(1 + 2) - 5}}.",
            "Add {{5}}: {{4 = k/3 => k = 12}}.",
          ],
          commonError: "Subtracting 5 from −1 instead of adding 5.",
          difficulty: "warmup",
          guideRef: "cubic-reciprocal-exponential",
          hints: ["Substitute {{x = 1, y = -1}} into {{y = k/(x + 2) - 5}} and solve for {{k}}."],
        },
        {
          kind: "short",
          id: "sequences-functions-graphs-p2-q09",
          question: "The cubic curve {{y = ax^3 + bx^2 - 5x + d}} crosses the {{y}}-axis at {{(0, 6)}} and passes through {{(1, 2)}} and {{(-1, 8)}}. Find the constants {{a}} and {{b}} (write as {{a, b}}).",
          answer: { type: "list", values: [2, -1], ordered: true, display: "2, −1" },
          traps: [
            { spec: { type: "list", values: [-1, 2], ordered: true }, feedback: "Give a first, then b: a = 2 and b = −1." },
          ],
          solution: [
            "At {{(0, 6)}}, {{d = 6}}.",
            "Substitute {{(1, 2)}}: {{a + b - 5 + 6 = 2 => a + b = 1}}  (1).",
            "Substitute {{(-1, 8)}}: {{-a + b + 5 + 6 = 8 => -a + b = -3}}  (2).",
            "Add (1) and (2): {{2b = -2 => b = -1}}, and from (1) {{a = 2}}.",
          ],
          commonError: "Evaluating (−1)³ as +1 or −5(−1) as −5 when substituting x = −1.",
          difficulty: "core",
          guideRef: "cubic-reciprocal-exponential",
          hints: [
            "Use {{(0, 6)}} to find {{d = 6}} immediately.",
            "Substitute {{x = 1, y = 2}} and {{x = -1, y = 8}} carefully using brackets around {{-1}} to get two simultaneous equations in {{a}} and {{b}}.",
          ],
        },
        {
          kind: "short",
          id: "sequences-functions-graphs-p2-q10",
          question: "Point {{P(-4, 9)}} lies on {{y = f(x)}}. Find the coordinates {{(x, y)}} of the corresponding point on {{y = 2f(-x) - 5}}.",
          answer: { type: "list", values: [4, 13], ordered: true, display: "(4, 13)" },
          traps: [
            { spec: { type: "list", values: [-4, 13], ordered: true }, feedback: "f(−x) reflects in the y-axis, flipping x = −4 to x = +4!" },
          ],
          solution: [
            "Inside {{-x = -4 => x = 4}}.",
            "Outside {{y = 2(9) - 5 = 18 - 5 = 13}}, giving {{(4, 13)}}.",
          ],
          commonError: "Forgetting that f(−x) negates the x-coordinate.",
          difficulty: "core",
          guideRef: "graph-transformations",
          hints: ["Set {{-x = -4}} for the new {{x}}-coordinate.", "Evaluate {{2(9) - 5}} for the new {{y}}-coordinate."],
        },
        {
          kind: "short",
          id: "sequences-functions-graphs-p2-q11",
          question: "The curve {{y = x^2}} is stretched parallel to the {{y}}-axis by scale factor {{3}}, then translated {{2}} units right and {{4}} units down. Write the expanded quadratic expression for {{y}}.",
          answer: { type: "expression", expr: "3x^2 - 12x + 8", form: "expanded" },
          traps: [
            { spec: { type: "expression", expr: "3x^2 + 12x + 8" }, feedback: "Translating 2 units RIGHT replaces x with (x − 2), giving 3(x − 2)² − 4 = 3x² − 12x + 8." },
          ],
          solution: [
            "Stretch vertically by {{3}}: {{y = 3x^2}}.",
            "Translate {{2}} right and {{4}} down: {{y = 3(x - 2)^2 - 4}}.",
            "Expand: {{3(x^2 - 4x + 4) - 4 = 3x^2 - 12x + 8}}.",
          ],
          commonError: "Using (x + 2) instead of (x − 2) for a rightward translation.",
          difficulty: "challenge",
          guideRef: "graph-transformations",
          hints: ["Vertical stretch by {{3}} gives {{y = 3x^2}}.", "Replace {{x}} with {{(x - 2)}} for {{2}} units right, and subtract {{4}} outside.", "Expand {{3(x - 2)^2 - 4}}."],
        },
        {
          kind: "written",
          id: "sequences-functions-graphs-p2-q12",
          question:
            "Describe fully the two single transformations that together map the graph of {{y = f(x)}} onto the graph of {{y = -f(x + 4)}}, and state the image of the maximum point {{P(2, 7)}}.",
          marks: 3,
          modelAnswer:
            "First, apply a translation by column vector {{(-4, 0)}} ({{4}} units to the left), moving {{(2, 7)}} to {{(-2, 7)}}. Second, apply a reflection in the {{x}}-axis ({{y = 0}}), mapping {{(-2, 7)}} to the minimum turning point {{(-2, -7)}}.",
          markScheme: [
            {
              point: "Translation by vector (−4, 0) / 4 units to the left",
              keywords: ["(-4, 0)", "4 units to the left", "4 units left", "left by 4"],
            },
            {
              point: "Reflection in the x-axis (or line y = 0)",
              keywords: ["reflection", "x-axis", "y = 0"],
            },
            {
              point: "Correct image coordinates (−2, −7)",
              keywords: ["(-2, -7)", "(-2,-7)"],
            },
          ],
          commonError: "Saying 'flip' instead of 'reflection in the x-axis', or shifting right to (6, −7).",
          difficulty: "core",
          guideRef: "graph-transformations",
          hints: [
            "What single transformation does replacing {{x}} by {{x + 4}} perform?",
            "What single transformation does multiplying {{f(...)}} by {{-1}} perform?",
          ],
        },
        {
          kind: "short",
          id: "sequences-functions-graphs-p2-q13",
          question: "The curve {{y = 2x^3 - 3x - 4}} is drawn on a grid. Find the expression {{mx + c}} for the line {{y = mx + c}} needed to solve {{x^3 - 4x + 1 = 0}}.",
          answer: { type: "expression", expr: "5x - 6", form: "simplified" },
          traps: [
            { spec: { type: "expression", expr: "x - 5" }, feedback: "Notice the plotted curve has 2x³, whereas the equation has 1x³ — double the equation to 2x³ − 8x + 2 = 0 first!" },
          ],
          solution: [
            "Double {{x^3 - 4x + 1 = 0}} so the {{x^3}} coefficient matches {{2x^3}}: {{2x^3 - 8x + 2 = 0}}.",
            "Rearrange to build {{2x^3 - 3x - 4}} on the left: add {{5x - 6}} to both sides.",
            "{{2x^3 - 3x - 4 = 5x - 6}}, so draw {{y = 5x - 6}}.",
          ],
          commonError: "Failing to multiply x³ − 4x + 1 = 0 by 2 before matching against y = 2x³ − 3x − 4.",
          difficulty: "challenge",
          guideRef: "cubic-reciprocal-exponential",
          hints: [
            "Look at the {{x^3}} terms: the graph has {{2x^3}} while the equation has {{x^3}}!",
            "Multiply {{x^3 - 4x + 1 = 0}} through by {{2}} to get {{2x^3 - 8x + 2 = 0}}.",
            "Now add {{5x - 6}} to both sides so the left side matches {{2x^3 - 3x - 4}}.",
          ],
          strategy: "Match the plotted curve by scaling then subtracting",
        },
        {
          kind: "written",
          id: "sequences-functions-graphs-p2-q14",
          question:
            "A theatre auditorium has {{18}} rows. Row {{1}} has {{14}} seats, Row {{2}} has {{17}} seats, Row {{3}} has {{20}} seats, and each subsequent row adds the same number of seats. Show that the auditorium holds {{711}} seats in total, and determine whether {{500}} guests can all sit within the first {{14}} rows.",
          marks: 4,
          modelAnswer:
            "This is an arithmetic series with {{a = 14}} and {{d = 3}}. Using {{S_{18} = (18/2)(2(14) + 17(3)) = 9 * (28 + 51) = 9 * 79 = 711}} seats. For {{14}} rows, {{S_{14} = (14/2)(2(14) + 13(3)) = 7 * (28 + 39) = 7 * 67 = 469}} seats. Since {{469 < 500}}, they cannot all fit in the first {{14}} rows ({{31}} short).",
          markScheme: [
            {
              point: "Identifies d = 3 and substitutes into S_18 = 9 × (28 + 51)",
              keywords: ["d = 3", "28 + 51", "17(3)"],
            },
            {
              point: "Shows 9 × 79 = 711 convincingly",
              keywords: ["79"],
            },
            {
              point: "Evaluates S_14 = 7 × (28 + 39) = 469",
              keywords: ["469", "28 + 39", "7 * 67"],
            },
            {
              point: "Concludes no because 469 < 500",
              keywords: ["469 < 500", "cannot", "31 short", "not enough"],
            },
          ],
          commonError: "Using n − 1 = 18 instead of 17 in S₁₈, or asserting 'no' without calculating S₁₄ = 469.",
          difficulty: "core",
          guideRef: "arithmetic-sequences-series",
          hints: [
            "State {{a = 14}} and {{d = 3}}, then show every step of {{S_{18} = (18/2)(2(14) + 17(3))}}.",
            "Calculate {{S_{14} = (14/2)(2(14) + 13(3))}} and compare it explicitly against {{500}}.",
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      kind: "short",
      id: "sequences-functions-graphs-ch-q01",
      question:
        "In a decreasing arithmetic series with first term {{a = 39}} and common difference {{d = -3}}, find the **two** positive integer values of {{n}} for which {{S_n = 270}}.",
      answer: { type: "list", values: [12, 15], ordered: false, display: "12, 15" },
      traps: [
        { spec: { type: "number", value: 12 }, feedback: "12 is one solution — factorise n² − 27n + 180 = 0 to find the second positive integer n!" },
      ],
      solution: [
        "Substitute {{a = 39, d = -3}} into {{S_n = 270}}: {{(n/2)(78 - 3(n - 1)) = 270 => n(81 - 3n) = 540}}.",
        "Divide by {{3}} and rearrange: {{n(27 - n) = 180 => n^2 - 27n + 180 = 0}}.",
        "Factorise: {{(n - 12)(n - 15) = 0}}, so {{n = 12}} or {{n = 15}} (since {{u_{13} + u_{14} + u_{15} = 3 + 0 + (-3) = 0}}).",
      ],
      difficulty: "challenge",
      guideRef: "arithmetic-sequences-series",
      hints: [
        "Substitute {{a = 39}} and {{d = -3}} into {{(n/2)(2a + (n - 1)d) = 270}}.",
        "Multiply by {{2}} and divide by {{3}} to simplify to {{n(27 - n) = 180}}.",
        "Solve {{n^2 - 27n + 180 = 0}} by factorising into {{(n - 12)(n - 15) = 0}}.",
      ],
      strategy: "Form a quadratic in n from S_n",
    },
    {
      kind: "short",
      id: "sequences-functions-graphs-ch-q02",
      question:
        "The function {{f(x) = (kx + 7)/(2x - 5)}} (for {{x != 2.5}}) is **self-inverse**, meaning {{f^(-1)(x) = f(x)}} for every valid {{x}}. Find the value of the constant {{k}}.",
      answer: { type: "number", value: 5 },
      traps: [
        { spec: { type: "number", value: -5 }, feedback: "Watch the sign when collecting y-terms: 2xy − ky = 5x + 7 gives f⁻¹(x) = (5x + 7)/(2x − k), so k = +5." },
      ],
      solution: [
        "Let {{y = (kx + 7)/(2x - 5)}} and swap {{x}} and {{y}}: {{x = (ky + 7)/(2y - 5)}}.",
        "Rearrange for {{y}}: {{2xy - 5x = ky + 7 => y(2x - k) = 5x + 7 => f^(-1)(x) = (5x + 7)/(2x - k)}}.",
        "Matching {{(5x + 7)/(2x - k)}} identically with {{(kx + 7)/(2x - 5)}} gives {{k = 5}}.",
      ],
      difficulty: "challenge",
      guideRef: "composite-inverse-functions",
      hints: [
        "Find {{f^(-1)(x)}} in terms of {{k}} by swapping {{x}} and {{y}} in {{y = (kx + 7)/(2x - 5)}}.",
        "Collect {{y}}-terms: {{y(2x - k) = 5x + 7}}.",
        "Compare {{f^(-1)(x) = (5x + 7)/(2x - k)}} directly with {{f(x) = (kx + 7)/(2x - 5)}}.",
      ],
      strategy: "Compare coefficients of f and f⁻¹",
    },
    {
      kind: "short",
      id: "sequences-functions-graphs-ch-q03",
      question:
        "Functions {{f}} and {{g}} are defined for all real {{x}} by {{f(x) = 4x - 5}} and {{g(x) = (x + 6)/5}}. Solve the equation {{(fg)^(-1)(x) = 9}}.",
      answer: { type: "number", value: 7 },
      traps: [
        { spec: { type: "number", value: 8.4 }, feedback: "8.4 is gf(9) — remember (fg)⁻¹(x) = 9 means x = fg(9), applying g FIRST!" },
      ],
      solution: [
        "Apply {{fg}} to both sides of {{(fg)^(-1)(x) = 9}}: {{x = fg(9)}}.",
        "Work inside-out: {{g(9) = (9 + 6)/5 = 3}}.",
        "Then {{x = f(3) = 4(3) - 5 = 7}}.",
      ],
      difficulty: "challenge",
      guideRef: "composite-inverse-functions",
      hints: [
        "Instead of inverting {{fg(x)}} algebraically, apply {{fg}} to both sides of {{(fg)^(-1)(x) = 9}}!",
        "That gives {{x = fg(9) = f(g(9))}}.",
        "Evaluate {{g(9)}} first, then substitute into {{f}}.",
      ],
      strategy: "Undo the inverse by applying fg to both sides",
    },
    {
      kind: "short",
      id: "sequences-functions-graphs-ch-q04",
      question:
        "The parabola {{C}} has equation {{y = x^2 - 6x + 5}}, crossing the {{y}}-axis at {{A}} and reaching its minimum turning point at {{V}}. Line {{L}} passes through {{V}} and is perpendicular to segment {{AV}}. Find the {{x}}-coordinate where line {{L}} crosses the {{x}}-axis.",
      answer: { type: "number", value: 15 },
      traps: [
        { spec: { type: "number", value: -9 }, feedback: "Check the sign of m_L: segment AV goes from (0, 5) down to (3, −4) with gradient −3, so m_L = +1/3." },
      ],
      solution: [
        "{{A = (0, 5)}} and {{y = (x - 3)^2 - 4}}, so the vertex is {{V(3, -4)}}.",
        "Gradient of {{AV}}: {{m_{AV} = (-4 - 5)/(3 - 0) = -3}}, so perpendicular line {{L}} has gradient {{m_L = 1/3}}.",
        "Equation of {{L}} through {{(3, -4)}}: {{y + 4 = (1/3)(x - 3)}}.",
        "On the {{x}}-axis ({{y = 0}}): {{4 = (1/3)(x - 3) => x - 3 = 12 => x = 15}}.",
      ],
      difficulty: "challenge",
      guideRef: "turning-points-sketching",
      hints: [
        "Find {{A(0, 5)}} and complete the square on {{x^2 - 6x + 5}} to locate {{V(3, -4)}}.",
        "Calculate the gradient of {{AV}}, then flip and negate it for {{m_L}}.",
        "Write the equation of {{L}} through {{V(3, -4)}} and set {{y = 0}}.",
      ],
      strategy: "Anchor landmarks then use y − y₁ = m(x − x₁)",
    },
    {
      kind: "short",
      id: "sequences-functions-graphs-ch-q05",
      question:
        "Sequence {{P}} is arithmetic with first term {{9}} and common difference {{11}}. Sequence {{Q}} is quadratic with first four terms {{9, 12, 19, 30}}. Both sequences start with {{9}} at {{n = 1}}; find the other positive integer {{n}} for which the {{n}}th term of {{P}} equals the {{n}}th term of {{Q}}.",
      answer: { type: "number", value: 6 },
      traps: [
        { spec: { type: "number", value: 64 }, feedback: "64 is the value of the common term u₆ — the question asks for the term position n!" },
      ],
      solution: [
        "For {{P}}: {{P_n = 9 + 11(n - 1) = 11n - 2}}.",
        "For {{Q}} ({{9, 12, 19, 30}}): first differences {{3, 7, 11}}, second difference {{4 => a = 2}}. Subtracting {{2n^2}} ({{2, 8, 18, 32}}) leaves {{7, 4, 1, -2 = 10 - 3n}}, so {{Q_n = 2n^2 - 3n + 10}}.",
        "Equate: {{2n^2 - 3n + 10 = 11n - 2 => 2n^2 - 14n + 12 = 0 => 2(n - 1)(n - 6) = 0}}, giving {{n = 6}}.",
      ],
      difficulty: "challenge",
      guideRef: "arithmetic-sequences-series",
      hints: [
        "Find the linear {{n}}th term of {{P}}: {{9 + 11(n - 1) = 11n - 2}}.",
        "Find the quadratic {{n}}th term of {{Q}} ({{9, 12, 19, 30}}) using second differences ({{2a = 4}}).",
        "Set {{Q_n = P_n}} and solve the resulting quadratic for {{n > 1}}.",
      ],
      strategy: "Subtract an² to linearise, then equate",
    },
    {
      kind: "short",
      id: "sequences-functions-graphs-ch-q06",
      question:
        "The cubic curve {{y = x^3 + ax^2 + bx - 24}} crosses the {{x}}-axis at {{(-2, 0)}}, {{(-3, 0)}} and {{(k, 0)}}. Find the values of {{a}}, {{b}} and {{k}} (write your answer in order as {{a, b, k}}).",
      answer: { type: "list", values: [1, -14, 4], ordered: true, display: "1, −14, 4" },
      traps: [
        { spec: { type: "list", values: [1, -14, -4], ordered: true }, feedback: "Since the root is (k, 0) and the factor is (x − 4), k = +4 (not −4)." },
      ],
      solution: [
        "With leading coefficient {{1}}, write {{y = (x + 2)(x + 3)(x - k)}}.",
        "Match the {{y}}-intercept at {{x = 0}}: {{(2)(3)(-k) = -24 => -6k = -24 => k = 4}}.",
        "Expand {{(x + 2)(x + 3)(x - 4) = (x^2 + 5x + 6)(x - 4) = x^3 + x^2 - 14x - 24}}, so {{a = 1}}, {{b = -14}}, {{k = 4}}.",
      ],
      difficulty: "challenge",
      guideRef: "cubic-reciprocal-exponential",
      hints: [
        "Write the cubic in factorised form {{(x + 2)(x + 3)(x - k)}}.",
        "Substitute {{x = 0}} and match against {{-24}} to find {{k}} immediately.",
        "Expand the three brackets to read off {{a}} and {{b}}.",
      ],
      strategy: "Factorised form from roots + constant term check",
    },
    {
      kind: "short",
      id: "sequences-functions-graphs-ch-q07",
      question:
        "The curve {{y = f(x)}} crosses the {{x}}-axis at {{(-2, 0)}} and {{(14, 0)}}, and has its minimum turning point at {{(6, -4)}}. Find the area of the triangle formed by the two {{x}}-intercepts and the turning point of the transformed curve {{y = -3f(2x - 4)}}.",
      answer: { type: "number", value: 48 },
      traps: [
        { spec: { type: "number", value: 192 }, feedback: "Inside 2x − 4 compresses horizontally by scale factor 1/2 (base becomes 8, not 32)!" },
        { spec: { type: "number", value: 32 }, feedback: "32 is the original triangle's area; apply the horizontal ×(1/2) and vertical ×3 stretches!" },
      ],
      solution: [
        "Find the new {{x}}-intercepts by solving {{2x - 4 = -2 => x = 1}} and {{2x - 4 = 14 => x = 9}}, so the triangle's base along the {{x}}-axis is {{9 - 1 = 8}}.",
        "Find the new turning point: {{2x - 4 = 6 => x = 5}}, and {{y = -3(-4) = 12}}, so the height is {{12}}.",
        "Triangle area {{= (1/2) * 8 * 12 = 48}}.",
      ],
      difficulty: "challenge",
      guideRef: "graph-transformations",
      hints: [
        "Equate {{2x - 4}} to {{-2}}, {{14}}, and {{6}} to find the transformed {{x}}-coordinates.",
        "Multiply the original vertex {{y = -4}} by {{-3}} to get the new height {{12}}.",
        "Calculate {{(1/2) * base * height}}.",
      ],
      strategy: "Track key points (or scale area by horizontal × vertical factors)",
    },
    {
      kind: "short",
      id: "sequences-functions-graphs-ch-q08",
      question:
        "An arithmetic series has non-zero first term {{a}} and non-zero common difference {{d}}. Given that the sum of the first {{10}} terms is exactly {{4}} times the sum of the first {{5}} terms, find the ratio {{a : d}} in its simplest integer form.",
      answer: { type: "ratio", parts: [1, 2], simplest: true },
      traps: [
        { spec: { type: "ratio", parts: [2, 1] }, feedback: "Careful with the order! d = 2a means a : d = 1 : 2, not 2 : 1." },
      ],
      solution: [
        "Set {{S_{10} = 4 S_5}}: {{(10/2)(2a + 9d) = 4 * (5/2)(2a + 4d)}}.",
        "Simplify {{5(2a + 9d) = 10(2a + 4d)}} and divide both sides by {{5}}: {{2a + 9d = 4a + 8d}}.",
        "Rearrange: {{d = 2a}}, so {{a : d = a : 2a = 1 : 2}}.",
      ],
      difficulty: "challenge",
      guideRef: "arithmetic-sequences-series",
      hints: [
        "Write out {{S_{10} = 5(2a + 9d)}} and {{S_5 = (5/2)(2a + 4d)}}.",
        "Substitute into {{S_{10} = 4 S_5}} and divide both sides by {{5}}.",
        "Simplify {{2a + 9d = 4a + 8d}} to express {{d}} in terms of {{a}}.",
      ],
      strategy: "Express d in terms of a",
    },
  ],
};
