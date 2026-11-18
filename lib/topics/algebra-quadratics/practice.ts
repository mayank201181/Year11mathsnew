import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      kind: "short",
      id: "algebra-quadratics-quiz-q01",
      question: "Expand and simplify {{(x + 3)(x - 1)(x + 2)}}.",
      answer: { type: "expression", expr: "x^3 + 4x^2 + x - 6", form: "expanded" },
      traps: [
        {
          spec: { type: "expression", expr: "x^3 - 6" },
          feedback: "You only multiplied the first terms and the constants — expand one pair of brackets first, then multiply every term by the third bracket.",
        },
      ],
      solution: [
        "Expand the first two brackets: {{(x + 3)(x - 1) = x^2 + 2x - 3}}.",
        "Multiply by {{(x + 2)}}: {{x(x^2 + 2x - 3) + 2(x^2 + 2x - 3) = x^3 + 2x^2 - 3x + 2x^2 + 4x - 6}}.",
        "Collect like terms: {{x^3 + 4x^2 + x - 6}}.",
      ],
      difficulty: "warmup",
      guideRef: "expanding-three-brackets",
      hints: ["Expand {{(x + 3)(x - 1)}} to {{x^2 + 2x - 3}} first."],
      strategy: "Two-stage expansion",
    },
    {
      kind: "short",
      id: "algebra-quadratics-quiz-q02",
      question: "Expand and simplify {{(3x - 1)^2 - (x + 4)^2}}.",
      answer: { type: "expression", expr: "8x^2 - 14x - 15", form: "expanded" },
      traps: [
        {
          spec: { type: "expression", expr: "8x^2 + 2x + 17" },
          feedback: "Keep {{(x + 4)^2 = x^2 + 8x + 16}} in brackets so the minus sign subtracts +8x and +16 as well!",
        },
      ],
      solution: [
        "Expand inside protective brackets: {{(9x^2 - 6x + 1) - (x^2 + 8x + 16)}}.",
        "Distribute the minus sign: {{9x^2 - 6x + 1 - x^2 - 8x - 16 = 8x^2 - 14x - 15}}.",
      ],
      commonError: "Writing −(x² + 8x + 16) as −x² + 8x + 16 without flipping the inner signs.",
      difficulty: "core",
      guideRef: "expanding-three-brackets",
      hints: [
        "Expand {{(3x - 1)^2}} and {{(x + 4)^2}} separately inside brackets.",
        "Distribute the minus sign across all three terms of {{x^2 + 8x + 16}}.",
      ],
      strategy: "Protective brackets on subtraction",
    },
    {
      kind: "short",
      id: "algebra-quadratics-quiz-q03",
      question: "Factorise {{25x^2 - 36y^2}}.",
      answer: { type: "expression", expr: "(5x - 6y)(5x + 6y)", form: "factorised" },
      traps: [
        {
          spec: { type: "expression", expr: "(5x - 6y)^2" },
          feedback: "{{(5x - 6y)^2}} expands to {{25x^2 - 60xy + 36y^2}}; use opposite signs {{(5x - 6y)(5x + 6y)}} for difference of two squares.",
        },
      ],
      solution: [
        "Recognise a difference of two squares: {{(5x)^2 - (6y)^2}}.",
        "Apply {{A^2 - B^2 = (A - B)(A + B)}} to get {{(5x - 6y)(5x + 6y)}}.",
      ],
      difficulty: "warmup",
      guideRef: "factorising-quadratics",
      hints: ["Write {{25x^2}} as {{(5x)^2}} and {{36y^2}} as {{(6y)^2}}."],
      strategy: "Difference of two squares A² − B²",
    },
    {
      kind: "short",
      id: "algebra-quadratics-quiz-q04",
      question: "Factorise {{2x^2 + 7x - 15}}.",
      answer: { type: "expression", expr: "(2x - 3)(x + 5)", form: "factorised" },
      traps: [
        {
          spec: { type: "expression", expr: "(2x + 3)(x - 5)" },
          feedback: "Check the middle term: {{(2x + 3)(x - 5)}} gives {{-7x}}, whereas we need {{+7x}}.",
        },
      ],
      solution: [
        "Compute {{ac = 2 * (-15) = -30}}; integers multiplying to {{-30}} and adding to {{+7}} are {{+10}} and {{-3}}.",
        "Split and group: {{2x^2 + 10x - 3x - 15 = 2x(x + 5) - 3(x + 5) = (2x - 3)(x + 5)}}.",
      ],
      difficulty: "core",
      guideRef: "factorising-quadratics",
      hints: [
        "Find two numbers multiplying to {{2 * (-15) = -30}} and adding to {{+7}}.",
        "Split {{+7x}} as {{+10x - 3x}} and factorise in pairs.",
      ],
      strategy: "ac-method middle-term split",
    },
    {
      kind: "short",
      id: "algebra-quadratics-quiz-q05",
      question: "Write {{x^2 + 10x + 18}} in completed-square form {{(x + p)^2 + q}}.",
      answer: { type: "expression", expr: "(x + 5)^2 - 7", form: "any" },
      traps: [
        {
          spec: { type: "expression", expr: "(x + 5)^2 + 18" },
          feedback: "{{(x + 5)^2}} already contributes {{+25}}, so you must subtract {{25}} before adding {{18}}.",
        },
      ],
      solution: [
        "Halve {{10}} to get {{5}}: {{(x + 5)^2 - 5^2 + 18}}.",
        "Simplify the constant: {{(x + 5)^2 - 25 + 18 = (x + 5)^2 - 7}}.",
      ],
      difficulty: "warmup",
      guideRef: "completing-the-square",
      hints: ["Halve {{10}} to get {{(x + 5)^2}}, then subtract {{25}}."],
    },
    {
      kind: "short",
      id: "algebra-quadratics-quiz-q06",
      question: "Find the coordinates of the minimum turning point of the curve {{y = 2x^2 - 16x + 25}}.",
      answer: { type: "list", values: [4, -7], ordered: true, display: "(4, −7)" },
      traps: [
        {
          spec: { type: "list", values: [-4, -7], ordered: true },
          feedback: "Flip the sign inside {{(x - 4)^2}}: the bracket is zero when {{x = +4}}.",
        },
        {
          spec: { type: "list", values: [4, 9], ordered: true },
          feedback: "Remember to multiply {{-16}} inside the bracket by the outer factor {{2}}: {{2 * (-16) + 25 = -7}}.",
        },
      ],
      solution: [
        "Factor {{2}} from the {{x}}-terms: {{2(x^2 - 8x) + 25}}.",
        "Complete the square: {{2((x - 4)^2 - 16) + 25 = 2(x - 4)^2 - 32 + 25 = 2(x - 4)^2 - 7}}.",
        "The minimum turning point is {{(4, -7)}}.",
      ],
      commonError: "Forgetting to multiply −16 by 2 when expanding out of the outer bracket.",
      difficulty: "core",
      guideRef: "completing-the-square",
      hints: [
        "Write {{2x^2 - 16x + 25 = 2(x^2 - 8x) + 25}} and complete the square.",
        "Read the vertex {{(4, q)}} after multiplying {{-16}} by {{2}}.",
      ],
      strategy: "Outer-bracket shield",
    },
    {
      kind: "short",
      id: "algebra-quadratics-quiz-q07",
      question: "Simplify fully {{(x^2 + 7x + 12)/(x^2 - 9)}}.",
      commonError: "Cancelling the x² terms or the x's across the + and − signs instead of factorising both quadratics first — only whole bracket factors like (x + 3) can cancel.",
      answer: { type: "expression", expr: "(x + 4)/(x - 3)", form: "any" },
      solution: [
        "Factorise numerator and denominator: {{((x + 3)(x + 4))/((x - 3)(x + 3))}}.",
        "Cancel the shared factor {{(x + 3)}} to leave {{(x + 4)/(x - 3)}}.",
      ],
      difficulty: "warmup",
      guideRef: "algebraic-fractions",
      hints: ["Factorise {{x^2 + 7x + 12}} and {{x^2 - 9}} before cancelling."],
      strategy: "Factorise before touching anything",
    },
    {
      kind: "short",
      id: "algebra-quadratics-quiz-q08",
      question: "Express {{4/(x + 3) - 1/(x - 2)}} as a single fraction in its simplest form.",
      answer: { type: "expression", expr: "(3x - 11)/((x + 3)(x - 2))", form: "any" },
      traps: [
        {
          spec: { type: "expression", expr: "(3x - 5)/((x + 3)(x - 2))" },
          feedback: "Watch the minus sign: {{-(x + 3) = -x - 3}}, so {{-8 - 3 = -11}}, not {{-5}}.",
        },
      ],
      solution: [
        "Write over the common denominator {{(x + 3)(x - 2)}}: {{(4(x - 2) - 1(x + 3))/((x + 3)(x - 2))}}.",
        "Simplify the numerator: {{4x - 8 - x - 3 = 3x - 11}}, giving {{(3x - 11)/((x + 3)(x - 2))}}.",
      ],
      difficulty: "core",
      guideRef: "algebraic-fractions",
      hints: [
        "Use {{(x + 3)(x - 2)}} as the common denominator.",
        "Expand {{4(x - 2) - (x + 3)}} carefully, subtracting both {{x}} and {{3}}.",
      ],
    },
    {
      kind: "short",
      id: "algebra-quadratics-quiz-q09",
      question: "Make {{x}} the subject of {{y = (2x + 7)/(x - 1)}}. Give the expression for {{x}} in terms of {{y}}.",
      answer: { type: "expression", expr: "(y + 7)/(y - 2)", form: "any" },
      traps: [
        {
          spec: { type: "expression", expr: "(y + 7)/(y + 2)" },
          feedback: "Moving {{2x}} to the left of {{xy - y = 2x + 7}} subtracts {{2x}}, giving {{x(y - 2)}}.",
        },
      ],
      solution: [
        "Multiply both sides by {{(x - 1)}}: {{xy - y = 2x + 7}}.",
        "Collect {{x}}-terms on the left: {{xy - 2x = y + 7}}.",
        "Factorise and divide: {{x(y - 2) = y + 7 => x = (y + 7)/(y - 2)}}.",
      ],
      difficulty: "core",
      guideRef: "rearranging-and-proof",
      hints: [
        "Clear the fraction to get {{xy - y = 2x + 7}}.",
        "Collect {{x}}-terms on one side and factorise {{x}} out.",
      ],
      strategy: "Clear–Collect–Factorise–Divide (CFFD)",
    },
    {
      kind: "mcq",
      id: "algebra-quadratics-quiz-q10",
      question: "Which simplified identity completes a rigorous proof that {{(n + 5)^2 - (n - 3)^2}} is a multiple of {{16}} for every integer {{n}}?",
      options: [
        "{{16(n + 1)}}",
        "{{16n + 34}}",
        "{{4(n + 4)}}",
        "{{16(n + 2)}}",
      ],
      answerIndex: 0,
      explanation:
        "{{(n^2 + 10n + 25) - (n^2 - 6n + 9) = 16n + 16 = 16(n + 1)}}. Factoring out {{16}} explicitly shows it is {{16}} times an integer for every integer {{n}}.",
      difficulty: "core",
      guideRef: "rearranging-and-proof",
      hints: [
        "Expand {{(n + 5)^2 = n^2 + 10n + 25}} and {{(n - 3)^2 = n^2 - 6n + 9}}.",
        "Subtract carefully and factor {{16}} out of the result.",
      ],
      strategy: "Factor out the target multiple",
    },
  ],
  papers: [
    {
      id: "algebra-quadratics-p1",
      title: "Quadratics, Fractions & Proof — Practice Paper 1",
      questions: [
        {
          kind: "short",
          id: "algebra-quadratics-p1-q01",
          question: "Expand and simplify {{(x + 4)(x - 2)(x + 5)}}.",
          answer: { type: "expression", expr: "x^3 + 7x^2 + 2x - 40", form: "expanded" },
          traps: [
            {
              spec: { type: "expression", expr: "x^3 + 7x^2 - 18x - 40" },
              feedback: "Check the {{x}}-terms when multiplying {{(x^2 + 2x - 8)(x + 5)}}: {{+10x - 8x = +2x}}.",
            },
          ],
          solution: [
            "Expand the first pair: {{(x + 4)(x - 2) = x^2 + 2x - 8}}.",
            "Multiply by {{(x + 5)}}: {{x^3 + 5x^2 + 2x^2 + 10x - 8x - 40 = x^3 + 7x^2 + 2x - 40}}.",
          ],
          commonError: "Sign slip on +2x × 5 − 8 × x when collecting the linear x-terms.",
          difficulty: "warmup",
          guideRef: "expanding-three-brackets",
          hints: ["Simplify {{(x + 4)(x - 2)}} to {{x^2 + 2x - 8}} first."],
          strategy: "Two-stage expansion",
        },
        {
          kind: "short",
          id: "algebra-quadratics-p1-q02",
          question: "Expand and simplify {{(3x + 1)(2x - 3)(x + 2)}}.",
          answer: { type: "expression", expr: "6x^3 + 5x^2 - 17x - 6", form: "expanded" },
          traps: [
            {
              spec: { type: "expression", expr: "6x^3 + 19x^2 - 17x - 6" },
              feedback: "In {{(3x + 1)(2x - 3)}}, the middle term is {{-9x + 2x = -7x}}, not {{+7x}}.",
            },
          ],
          solution: [
            "First pair: {{(3x + 1)(2x - 3) = 6x^2 - 9x + 2x - 3 = 6x^2 - 7x - 3}}.",
            "Multiply by {{(x + 2)}}: {{x(6x^2 - 7x - 3) + 2(6x^2 - 7x - 3) = 6x^3 - 7x^2 - 3x + 12x^2 - 14x - 6}}.",
            "Collect like powers: {{6x^3 + 5x^2 - 17x - 6}}.",
          ],
          commonError: "Dropping the negative sign on −7x when multiplying by +2.",
          difficulty: "core",
          guideRef: "expanding-three-brackets",
          hints: [
            "Expand {{(3x + 1)(2x - 3) = 6x^2 - 7x - 3}}.",
            "Multiply {{6x^2 - 7x - 3}} by {{x}} and by {{2}}, then check at {{x = 1}} ({{4 * (-1) * 3 = -12}}).",
          ],
          strategy: "Substitute x = 1 check",
        },
        {
          kind: "short",
          id: "algebra-quadratics-p1-q03",
          question: "Factorise **fully** {{20x^2 - 45}}.",
          answer: { type: "expression", expr: "5(2x - 3)(2x + 3)", form: "factorised" },
          traps: [
            {
              spec: { type: "expression", expr: "5(2x - 3)^2" },
              feedback: "{{4x^2 - 9}} is a difference of two squares {{(2x - 3)(2x + 3)}}, not a repeated square!",
            },
          ],
          solution: [
            "Pull out the highest common factor {{5}}: {{5(4x^2 - 9)}}.",
            "Apply difference of two squares to {{4x^2 - 9}}: {{5(2x - 3)(2x + 3)}}.",
          ],
          commonError: "Stopping at (10x − 15)(2x + 3) and leaving the factor of 5 inside a bracket.",
          difficulty: "warmup",
          guideRef: "factorising-quadratics",
          hints: ["Take out the common factor {{5}} first, then spot {{4x^2 - 9}}."],
          strategy: "Common factor first",
        },
        {
          kind: "short",
          id: "algebra-quadratics-p1-q04",
          question: "Factorise {{6x^2 + 13x - 5}}.",
          answer: { type: "expression", expr: "(3x - 1)(2x + 5)", form: "factorised" },
          traps: [
            {
              spec: { type: "expression", expr: "(3x + 1)(2x - 5)" },
              feedback: "Expand to check: {{(3x + 1)(2x - 5)}} gives {{-13x}}, opposite to {{+13x}}.",
            },
          ],
          solution: [
            "{{ac = 6 * (-5) = -30}}; the pair adding to {{+13}} is {{+15}} and {{-2}}.",
            "Split and factorise in pairs: {{6x^2 + 15x - 2x - 5 = 3x(2x + 5) - 1(2x + 5) = (3x - 1)(2x + 5)}}.",
          ],
          commonError: "Choosing 10 and 3 (which multiply to +30 rather than −30).",
          difficulty: "core",
          guideRef: "factorising-quadratics",
          hints: [
            "Find two numbers with product {{-30}} and sum {{+13}}.",
            "Rewrite {{+13x}} as {{+15x - 2x}} and factorise by grouping.",
          ],
          strategy: "ac-method middle-term split",
        },
        {
          kind: "short",
          id: "algebra-quadratics-p1-q05",
          question: "Factorise **fully** {{(4x - 1)^2 - (x + 5)^2}}.",
          answer: { type: "expression", expr: "3(x - 2)(5x + 4)", form: "factorised" },
          traps: [
            {
              spec: { type: "expression", expr: "(3x + 4)(5x + 4)" },
              feedback: "In {{(4x - 1) - (x + 5)}}, subtracting {{+5}} gives {{-1 - 5 = -6}}, not {{+4}}!",
            },
          ],
          solution: [
            "Apply {{A^2 - B^2 = (A - B)(A + B)}}: {{((4x - 1) - (x + 5))((4x - 1) + (x + 5))}}.",
            "Simplify both brackets: {{(3x - 6)(5x + 4)}}.",
            "Pull the common factor {{3}} out of {{(3x - 6)}} to factorise **fully**: {{3(x - 2)(5x + 4)}}.",
          ],
          solutions: [
            {
              label: "Expand first, then factorise",
              steps: [
                "{{(16x^2 - 8x + 1) - (x^2 + 10x + 25) = 15x^2 - 18x - 24}}.",
                "Pull out {{3}}: {{3(5x^2 - 6x - 8) = 3(x - 2)(5x + 4)}}.",
              ],
            },
          ],
          commonError: "Leaving (3x − 6)(5x + 4) without extracting the common factor 3 from (3x − 6).",
          difficulty: "core",
          guideRef: "factorising-quadratics",
          hints: [
            "Use {{A^2 - B^2 = (A - B)(A + B)}} with {{A = 4x - 1}} and {{B = x + 5}}.",
            "Check whether {{(3x - 6)}} still has a common numerical factor!",
          ],
          strategy: "Difference of two squares A² − B²",
        },
        {
          kind: "short",
          id: "algebra-quadratics-p1-q06",
          question: "Write {{3x^2 - 18x + 20}} in the form {{a(x + p)^2 + q}}.",
          answer: { type: "expression", expr: "3(x - 3)^2 - 7", form: "any" },
          traps: [
            {
              spec: { type: "expression", expr: "3(x - 3)^2 + 11" },
              feedback: "Multiply {{-9}} inside {{3((x - 3)^2 - 9) + 20}} by {{3}} to get {{-27 + 20 = -7}}.",
            },
          ],
          solution: [
            "Factor {{3}} from the first two terms: {{3(x^2 - 6x) + 20}}.",
            "Complete the square inside outer brackets: {{3((x - 3)^2 - 9) + 20}}.",
            "Expand {{3}}: {{3(x - 3)^2 - 27 + 20 = 3(x - 3)^2 - 7}}.",
          ],
          commonError: "Writing 3(x − 3)² − 9 + 20 = 3(x − 3)² + 11 by forgetting to multiply −9 by 3.",
          difficulty: "core",
          guideRef: "completing-the-square",
          hints: [
            "Factor {{3}} out of {{3x^2 - 18x}} first.",
            "Keep outer brackets around {{(x - 3)^2 - 9}} before multiplying by {{3}}.",
          ],
          strategy: "Outer-bracket shield",
        },
        {
          kind: "short",
          id: "algebra-quadratics-p1-q07",
          question: "Find the coordinates of the maximum turning point of {{y = 9 + 8x - 2x^2}}.",
          answer: { type: "list", values: [2, 17], ordered: true, display: "(2, 17)" },
          traps: [
            {
              spec: { type: "list", values: [-2, 17], ordered: true },
              feedback: "Factoring {{-2}} from {{-2x^2 + 8x}} flips the inner sign to {{-2(x^2 - 4x)}}, so the vertex is at {{x = +2}}.",
            },
            {
              spec: { type: "list", values: [2, 1], ordered: true },
              feedback: "Remember {{-2 * (-4) = +8}}, so {{+8 + 9 = 17}}, not {{-8 + 9 = 1}}.",
            },
          ],
          solution: [
            "Factor {{-2}} from the {{x}}-terms: {{-2(x^2 - 4x) + 9}}.",
            "Complete the square: {{-2((x - 2)^2 - 4) + 9 = -2(x - 2)^2 + 8 + 9 = 17 - 2(x - 2)^2}}.",
            "The maximum turning point is {{(2, 17)}}.",
          ],
          commonError: "Writing −2(x² + 4x) when factoring −2 out of −2x² + 8x.",
          difficulty: "core",
          guideRef: "completing-the-square",
          hints: [
            "Rewrite as {{-2(x^2 - 4x) + 9}} and complete the square inside.",
            "Watch {{-2 * (-4) = +8}} when expanding the outer bracket.",
          ],
        },
        {
          kind: "written",
          id: "algebra-quadratics-p1-q08",
          question: "By completing the square, prove that {{x^2 - 10x + 29}} is strictly positive for every real value of {{x}}.",
          marks: 3,
          modelAnswer:
            "Rewriting in vertex form gives {{x^2 - 10x + 29 = (x - 5)^2 - 25 + 29 = (x - 5)^2 + 4}}. Since any squared real expression satisfies {{(x - 5)^2 >= 0}}, adding four gives {{(x - 5)^2 + 4 >= 4 > 0}}, so the minimum is {{4}} and it is always greater than zero.",
          markScheme: [
            {
              point: "M1: Begins completing the square with (x − 5)²",
              keywords: ["(x - 5)^2", "(x-5)^2"],
            },
            {
              point: "A1: Obtains correct completed-square form (x − 5)² + 4",
              keywords: ["+ 4", "+4", "minimum is 4", "minimum value 4"],
            },
            {
              point: "R1: Explains (x − 5)² ≥ 0 for all real x, hence expression ≥ 4 > 0",
              keywords: [">= 0", "≥ 0", "never negative", "non-negative", ">= 4", "≥ 4", "greater than zero"],
            },
          ],
          commonError: "Testing a few numbers like x = 0, 1, 5 instead of reasoning from (x − 5)² ≥ 0.",
          difficulty: "core",
          guideRef: "completing-the-square",
          hints: [
            "Complete the square on {{x^2 - 10x + 29}} first.",
            "State why {{(x - 5)^2}} can never be negative, and deduce the minimum value of the whole expression.",
          ],
          strategy: "Non-negativity of squares (X² ≥ 0)",
        },
        {
          kind: "short",
          id: "algebra-quadratics-p1-q09",
          question: "Simplify fully {{(4x^2 - 9)/(2x^2 + 7x + 6)}}.",
          answer: { type: "expression", expr: "(2x - 3)/(x + 2)", form: "any" },
          traps: [
            {
              spec: { type: "expression", expr: "(2x + 3)/(x + 2)" },
              feedback: "{{(2x + 3)}} is the shared factor that cancels, leaving {{(2x - 3)}} on top!",
            },
          ],
          solution: [
            "Factorise top (DOTS): {{4x^2 - 9 = (2x - 3)(2x + 3)}}.",
            "Factorise bottom: {{2x^2 + 7x + 6 = (2x + 3)(x + 2)}}.",
            "Cancel {{(2x + 3)}} to get {{(2x - 3)/(x + 2)}}.",
          ],
          commonError: "Trying to cancel 2x² into 4x² before factorising.",
          difficulty: "core",
          guideRef: "algebraic-fractions",
          hints: [
            "Factorise {{4x^2 - 9}} using difference of two squares.",
            "Factorise {{2x^2 + 7x + 6}} ({{ac = 12}}, pair {{+4}} and {{+3}}) and cancel the common bracket.",
          ],
          strategy: "Factorise before touching anything",
        },
        {
          kind: "short",
          id: "algebra-quadratics-p1-q10",
          question: "Express {{(x^2 - 4x)/(x^2 - 1) ÷ (2x - 8)/(x + 1)}} as a single fraction in its simplest form.",
          answer: { type: "expression", expr: "x/(2x - 2)", form: "any" },
          traps: [
            {
              spec: { type: "expression", expr: "(2x - 2)/x" },
              feedback: "Flip ONLY the second fraction when changing {{÷}} to {{*}} — keep the first fraction the right way up!",
            },
          ],
          solution: [
            "Invert the second fraction and multiply: {{(x^2 - 4x)/(x^2 - 1) * (x + 1)/(2x - 8)}}.",
            "Factorise every part: {{(x(x - 4))/((x - 1)(x + 1)) * (x + 1)/(2(x - 4))}}.",
            "Cancel {{(x - 4)}} and {{(x + 1)}} to obtain {{x/(2(x - 1))}}.",
          ],
          commonError: "Forgetting to pull the factor x out of x² − 4x.",
          difficulty: "core",
          guideRef: "algebraic-fractions",
          hints: [
            "Flip {{(2x - 8)/(x + 1)}} and multiply.",
            "Factorise {{x^2 - 4x = x(x - 4)}}, {{x^2 - 1 = (x - 1)(x + 1)}}, and {{2x - 8 = 2(x - 4)}}.",
          ],
        },
        {
          kind: "short",
          id: "algebra-quadratics-p1-q11",
          question: "Express {{5/(x + 4) - (2x - 17)/(x^2 + 3x - 4)}} as a single fraction in its simplest form.",
          answer: { type: "expression", expr: "3/(x - 1)", form: "any" },
          traps: [
            {
              spec: { type: "expression", expr: "(3x - 22)/((x + 4)(x - 1))" },
              feedback: "Distribute the minus across {{(2x - 17)}}: {{-(2x - 17) = -2x + 17}}, which then simplifies and cancels {{(x + 4)}}!",
            },
          ],
          solution: [
            "Factorise the quadratic denominator: {{x^2 + 3x - 4 = (x + 4)(x - 1)}}.",
            "Combine over {{(x + 4)(x - 1)}}: {{(5(x - 1) - (2x - 17))/((x + 4)(x - 1))}}.",
            "Simplify the numerator: {{5x - 5 - 2x + 17 = 3x + 12 = 3(x + 4)}}.",
            "Cancel {{(x + 4)}} to get {{3/(x - 1)}}.",
          ],
          commonError: "Stopping at (3x + 12)/((x + 4)(x − 1)) without spotting 3(x + 4) cancels (x + 4)!",
          difficulty: "challenge",
          guideRef: "algebraic-fractions",
          hints: [
            "Factorise {{x^2 + 3x - 4 = (x + 4)(x - 1)}} to find the LCD.",
            "Put brackets around {{(2x - 17)}} so subtracting {{-17}} becomes {{+17}}.",
            "Factorise your simplified numerator {{3x + 12}} and cancel!",
          ],
          strategy: "Check for final-step cancellation",
        },
        {
          kind: "short",
          id: "algebra-quadratics-p1-q12",
          question: "Make {{x}} the subject of {{y = (3x - 4)/(2x + 5)}}. Give the expression for {{x}} in terms of {{y}}.",
          answer: { type: "expression", expr: "(5y + 4)/(3 - 2y)", form: "any" },
          traps: [
            {
              spec: { type: "expression", expr: "(5y - 4)/(3 - 2y)" },
              feedback: "Adding {{4}} to both sides of {{2xy + 5y = 3x - 4}} gives {{5y + 4}}, not {{5y - 4}}.",
            },
          ],
          solution: [
            "Multiply both sides by {{(2x + 5)}}: {{2xy + 5y = 3x - 4}}.",
            "Collect {{x}}-terms on the right and non-{{x}} terms on the left: {{5y + 4 = 3x - 2xy}}.",
            "Factorise out {{x}} and divide: {{5y + 4 = x(3 - 2y) => x = (5y + 4)/(3 - 2y)}}.",
          ],
          commonError: "Leaving x on both sides of the rearranged formula.",
          difficulty: "core",
          guideRef: "rearranging-and-proof",
          hints: [
            "Multiply by {{(2x + 5)}} and expand to clear the fraction.",
            "Collect {{3x}} and {{2xy}} on one side, factorise {{x}} out, and divide.",
          ],
          strategy: "Clear–Collect–Factorise–Divide (CFFD)",
        },
        {
          kind: "written",
          id: "algebra-quadratics-p1-q13",
          question: "Prove algebraically that the difference between the squares of any two consecutive odd integers is a multiple of {{8}}.",
          marks: 3,
          modelAnswer:
            "Let the consecutive odd numbers be {{2n - 1}} and {{2n + 1}} for an integer {{n}}. Subtracting their squares gives {{(2n + 1)^2 - (2n - 1)^2 = (4n^2 + 4n + 1) - (4n^2 - 4n + 1) = 8n}}. Because {{n}} is a whole number, {{8n}} is always divisible by eight.",
          markScheme: [
            {
              point: "M1: Represents two consecutive odd integers correctly, e.g. 2n − 1 and 2n + 1 (or 2n + 1 and 2n + 3)",
              keywords: ["2n - 1", "2n-1", "2n + 1", "2n+1", "2n + 3", "2n+3"],
            },
            {
              point: "M1: Expands at least one squared odd expression accurately, e.g. 4n² + 4n + 1",
              keywords: ["4n^2 + 4n + 1", "4n^2+4n+1", "4n^2 + 12n + 9"],
            },
            {
              point: "A1: Simplifies to 8n or 8(n + 1) and states divisibility conclusion",
              keywords: ["8n", "8(n + 1)", "8(n+1)", "divisible by eight"],
            },
          ],
          commonError: "Using n and n + 2 (which could both be even!) or only testing numeric examples like 5² − 3² = 16.",
          difficulty: "core",
          guideRef: "rearranging-and-proof",
          hints: [
            "Write two consecutive odd integers as {{2n - 1}} and {{2n + 1}} (or {{2n + 1}} and {{2n + 3}}).",
            "Expand {{(2n + 1)^2 - (2n - 1)^2}} and show {{8}} is a factor.",
          ],
          strategy: "Parity representations (2n, 2n + 1)",
        },
        {
          kind: "short",
          id: "algebra-quadratics-p1-q14",
          question: "Make {{m}} the subject of {{k = sqrt((4m - 3)/(2m + 1))}}, where {{k > 0}}. Give the expression for {{m}} in terms of {{k}}.",
          answer: { type: "expression", expr: "(k^2 + 3)/(4 - 2k^2)", form: "any" },
          traps: [
            {
              spec: { type: "expression", expr: "(k + 3)/(4 - 2k)" },
              feedback: "Square BOTH sides first to remove the square root — {{k}} becomes {{k^2}}!",
            },
          ],
          solution: [
            "Square both sides: {{k^2 = (4m - 3)/(2m + 1)}}.",
            "Multiply up: {{2k^2 m + k^2 = 4m - 3}}.",
            "Collect {{m}}-terms and factorise: {{k^2 + 3 = m(4 - 2k^2) => m = (k^2 + 3)/(4 - 2k^2)}}.",
          ],
          commonError: "Multiplying by (2m + 1) before squaring both sides to clear the square root.",
          difficulty: "challenge",
          guideRef: "rearranging-and-proof",
          hints: [
            "Square both sides first so {{k^2 = (4m - 3)/(2m + 1)}}.",
            "Clear the denominator {{(2m + 1)}} and collect all {{m}}-terms on one side.",
            "Factorise {{m}} out and divide by {{(4 - 2k^2)}}.",
          ],
          strategy: "Clear–Collect–Factorise–Divide (CFFD)",
        },
      ],
    },
    {
      id: "algebra-quadratics-p2",
      title: "Quadratics, Fractions & Proof — Practice Paper 2",
      questions: [
        {
          kind: "short",
          id: "algebra-quadratics-p2-q01",
          question: "Expand and simplify {{(2x + 3)(x - 4)(x + 1)}}.",
          answer: { type: "expression", expr: "2x^3 - 3x^2 - 17x - 12", form: "expanded" },
          traps: [
            {
              spec: { type: "expression", expr: "2x^3 - 7x^2 - 17x - 12" },
              feedback: "Check the {{x^2}} terms in {{(2x^2 - 5x - 12)(x + 1)}}: {{+2x^2 - 5x^2 = -3x^2}}.",
            },
          ],
          solution: [
            "First pair: {{(2x + 3)(x - 4) = 2x^2 - 5x - 12}}.",
            "Multiply by {{(x + 1)}}: {{2x^3 + 2x^2 - 5x^2 - 5x - 12x - 12 = 2x^3 - 3x^2 - 17x - 12}}.",
          ],
          difficulty: "core",
          guideRef: "expanding-three-brackets",
          hints: [
            "Expand {{(2x + 3)(x - 4) = 2x^2 - 5x - 12}} first.",
            "Multiply every term by {{x}} and by {{1}}, then collect like powers.",
          ],
          strategy: "Two-stage expansion",
        },
        {
          kind: "short",
          id: "algebra-quadratics-p2-q02",
          question: "Expand and simplify {{3(x - 2)^2 - 2(x + 3)(x - 1)}}.",
          answer: { type: "expression", expr: "x^2 - 16x + 18", form: "expanded" },
          traps: [
            {
              spec: { type: "expression", expr: "x^2 - 8x + 6" },
              feedback: "Distribute {{-2}} across every term of {{(x^2 + 2x - 3)}}: {{-2 * (+2x) = -4x}} and {{-2 * (-3) = +6}}.",
            },
          ],
          solution: [
            "Expand each bracket group first: {{3(x^2 - 4x + 4) - 2(x^2 + 2x - 3)}}.",
            "Distribute {{3}} and {{-2}}: {{3x^2 - 12x + 12 - 2x^2 - 4x + 6}}.",
            "Collect like terms: {{x^2 - 16x + 18}}.",
          ],
          commonError: "Squaring 3(x − 2) as (3x − 6)² = 9x² − 36x + 36 instead of multiplying (x − 2)² by 3.",
          difficulty: "core",
          guideRef: "expanding-three-brackets",
          hints: [
            "Apply indices before multiplication (BIDMAS): expand {{(x - 2)^2}} first, then multiply by {{3}}.",
            "Expand {{(x + 3)(x - 1) = x^2 + 2x - 3}}, then multiply every term by {{-2}}.",
          ],
          strategy: "Protective brackets on subtraction",
        },
        {
          kind: "short",
          id: "algebra-quadratics-p2-q03",
          question: "Factorise {{12x^2 - 5x - 2}}.",
          answer: { type: "expression", expr: "(4x + 1)(3x - 2)", form: "factorised" },
          traps: [
            {
              spec: { type: "expression", expr: "(4x - 1)(3x + 2)" },
              feedback: "{{(4x - 1)(3x + 2)}} expands to {{12x^2 + 5x - 2}} — flip both signs for {{-5x}}.",
            },
          ],
          solution: [
            "{{ac = 12 * (-2) = -24}}; integers multiplying to {{-24}} and summing to {{-5}} are {{-8}} and {{+3}}.",
            "Split and group: {{12x^2 - 8x + 3x - 2 = 4x(3x - 2) + 1(3x - 2) = (4x + 1)(3x - 2)}}.",
          ],
          difficulty: "core",
          guideRef: "factorising-quadratics",
          hints: [
            "Find two integers with product {{-24}} and sum {{-5}}.",
            "Split {{-5x}} into {{-8x + 3x}} and factorise in pairs.",
          ],
          strategy: "ac-method middle-term split",
        },
        {
          kind: "short",
          id: "algebra-quadratics-p2-q04",
          question: "Factorise **fully** {{8x^3 - 50x}}.",
          answer: { type: "expression", expr: "2x(2x - 5)(2x + 5)", form: "factorised" },
          traps: [
            {
              spec: { type: "expression", expr: "2x(2x - 5)^2" },
              feedback: "{{4x^2 - 25}} is a difference of two squares {{(2x - 5)(2x + 5)}}, not {{(2x - 5)^2}}.",
            },
          ],
          solution: [
            "Extract the highest common factor {{2x}}: {{2x(4x^2 - 25)}}.",
            "Apply difference of two squares to {{4x^2 - 25}}: {{2x(2x - 5)(2x + 5)}}.",
          ],
          commonError: "Pulling out 2 without x, or stopping at 2x(4x² − 25).",
          difficulty: "core",
          guideRef: "factorising-quadratics",
          hints: [
            "Pull out the common factor {{2x}} from both terms first.",
            "Factorise {{4x^2 - 25}} using difference of two squares.",
          ],
          strategy: "Common factor first",
        },
        {
          kind: "short",
          id: "algebra-quadratics-p2-q05",
          question: "Factorise {{6x^2 - 19xy + 10y^2}}.",
          answer: { type: "expression", expr: "(3x - 2y)(2x - 5y)", form: "factorised" },
          traps: [
            {
              spec: { type: "expression", expr: "(3x - 2)(2x - 5)" },
              feedback: "Don't forget the variable {{y}} on the second term of each bracket so the end term is {{+10y^2}}!",
            },
          ],
          solution: [
            "{{ac = 6 * 10 = 60}}; the negative pair adding to {{-19}} is {{-15}} and {{-4}}.",
            "Split {{-19xy}} into {{-15xy - 4xy}}: {{6x^2 - 15xy - 4xy + 10y^2 = 3x(2x - 5y) - 2y(2x - 5y) = (3x - 2y)(2x - 5y)}}.",
          ],
          difficulty: "challenge",
          guideRef: "factorising-quadratics",
          hints: [
            "Treat {{y}} like a constant and use {{ac = 6 * 10 = 60}} with sum {{-19}}.",
            "Split {{-19xy}} into {{-15xy - 4xy}}.",
            "Factorise the first pair by {{3x}} and the second pair by {{-2y}}.",
          ],
          strategy: "ac-method middle-term split",
        },
        {
          kind: "short",
          id: "algebra-quadratics-p2-q06",
          question: "Write {{4x^2 + 16x + 9}} in the form {{a(x + p)^2 + q}}.",
          answer: { type: "expression", expr: "4(x + 2)^2 - 7", form: "any" },
          traps: [
            {
              spec: { type: "expression", expr: "4(x + 2)^2 + 5" },
              feedback: "Remember to multiply {{-4}} by the outer {{4}}: {{4 * (-4) + 9 = -16 + 9 = -7}}.",
            },
          ],
          solution: [
            "Factor {{4}} out of {{4x^2 + 16x}}: {{4(x^2 + 4x) + 9}}.",
            "Complete the square inside: {{4((x + 2)^2 - 4) + 9 = 4(x + 2)^2 - 16 + 9 = 4(x + 2)^2 - 7}}.",
          ],
          difficulty: "core",
          guideRef: "completing-the-square",
          hints: [
            "Factor {{4}} from the first two terms: {{4(x^2 + 4x) + 9}}.",
            "Replace {{x^2 + 4x}} with {{(x + 2)^2 - 4}} and distribute {{4}}.",
          ],
          strategy: "Outer-bracket shield",
        },
        {
          kind: "short",
          id: "algebra-quadratics-p2-q07",
          question: "Write {{5 - 12x - 3x^2}} in the form {{q - a(x + p)^2}}.",
          answer: { type: "expression", expr: "17 - 3(x + 2)^2", form: "any" },
          traps: [
            {
              spec: { type: "expression", expr: "-7 - 3(x + 2)^2" },
              feedback: "{{-3 * (-4) = +12}}, so {{+12 + 5 = +17}}, not {{-12 + 5 = -7}}.",
            },
            {
              spec: { type: "expression", expr: "17 - 3(x - 2)^2" },
              feedback: "Factoring {{-3}} from {{-3x^2 - 12x}} gives {{-3(x^2 + 4x)}}, with {{+4x}} inside!",
            },
          ],
          solution: [
            "Factor {{-3}} from {{-3x^2 - 12x}}: {{-3(x^2 + 4x) + 5}}.",
            "Complete the square inside: {{-3((x + 2)^2 - 4) + 5}}.",
            "Expand {{-3}}: {{-3(x + 2)^2 + 12 + 5 = 17 - 3(x + 2)^2}}.",
          ],
          commonError: "Sign slip on −3 × (−4) = +12 when expanding the outer bracket.",
          difficulty: "challenge",
          guideRef: "completing-the-square",
          hints: [
            "Reorder as {{-3x^2 - 12x + 5}} and factor {{-3}} out of the {{x}}-terms: {{-3(x^2 + 4x) + 5}}.",
            "Replace {{x^2 + 4x}} with {{(x + 2)^2 - 4}} inside outer brackets.",
            "Multiply {{-3}} through both inner terms carefully.",
          ],
          strategy: "Outer-bracket shield",
        },
        {
          kind: "short",
          id: "algebra-quadratics-p2-q08",
          question: "Simplify fully {{(12 - 3x)/(x^2 - x - 12)}}.",
          answer: { type: "expression", expr: "-3/(x + 3)", form: "any" },
          traps: [
            {
              spec: { type: "expression", expr: "3/(x + 3)" },
              feedback: "Notice {{4 - x = -(x - 4)}}, which introduces a minus sign when cancelling {{(x - 4)}}!",
            },
          ],
          solution: [
            "Factor {{-3}} from the numerator to align signs: {{12 - 3x = -3(x - 4)}}.",
            "Factorise the denominator: {{x^2 - x - 12 = (x - 4)(x + 3)}}.",
            "Cancel {{(x - 4)}} to get {{-3/(x + 3)}}.",
          ],
          commonError: "Cancelling (4 − x) with (x − 4) as +1 instead of −1.",
          difficulty: "core",
          guideRef: "algebraic-fractions",
          hints: [
            "Rewrite {{12 - 3x}} as {{-3(x - 4)}}.",
            "Factorise {{x^2 - x - 12 = (x - 4)(x + 3)}} and cancel {{(x - 4)}}.",
          ],
        },
        {
          kind: "short",
          id: "algebra-quadratics-p2-q09",
          question: "Express {{2/(x - 4) + 3/(x + 1)}} as a single fraction in its simplest form.",
          answer: { type: "expression", expr: "(5x - 10)/((x - 4)(x + 1))", form: "any" },
          traps: [
            {
              spec: { type: "expression", expr: "5/(2x - 3)" },
              feedback: "Never add numerators and denominators directly — rewrite over the common denominator {{(x - 4)(x + 1)}} first.",
            },
          ],
          solution: [
            "Write both fractions over {{(x - 4)(x + 1)}}: {{(2(x + 1) + 3(x - 4))/((x - 4)(x + 1))}}.",
            "Expand and collect the numerator: {{(2x + 2 + 3x - 12)/((x - 4)(x + 1)) = (5x - 10)/((x - 4)(x + 1))}}.",
          ],
          difficulty: "core",
          guideRef: "algebraic-fractions",
          hints: [
            "Put both fractions over {{(x - 4)(x + 1)}}.",
            "Simplify {{2(x + 1) + 3(x - 4)}} on top.",
          ],
        },
        {
          kind: "short",
          id: "algebra-quadratics-p2-q10",
          question: "Express {{7/(x + 2) - (3x - 29)/(x^2 - x - 6)}} as a single fraction in its simplest form.",
          answer: { type: "expression", expr: "4/(x - 3)", form: "any" },
          traps: [
            {
              spec: { type: "expression", expr: "(4x - 50)/((x - 3)(x + 2))" },
              feedback: "Subtracting {{-29}} adds {{29}}: {{7x - 21 - 3x + 29 = 4x + 8 = 4(x + 2)}}, which then cancels {{(x + 2)}}!",
            },
          ],
          solution: [
            "Factorise the quadratic denominator: {{x^2 - x - 6 = (x - 3)(x + 2)}}.",
            "Combine over {{(x - 3)(x + 2)}}: {{(7(x - 3) - (3x - 29))/((x - 3)(x + 2))}}.",
            "Simplify and factorise the numerator: {{7x - 21 - 3x + 29 = 4x + 8 = 4(x + 2)}}.",
            "Cancel {{(x + 2)}} to leave {{4/(x - 3)}}.",
          ],
          commonError: "Forgetting brackets around (3x − 29) or forgetting to check whether 4x + 8 cancels (x + 2).",
          difficulty: "challenge",
          guideRef: "algebraic-fractions",
          hints: [
            "Factorise {{x^2 - x - 6 = (x - 3)(x + 2)}} to spot the LCD.",
            "Expand {{7(x - 3) - (3x - 29)}} carefully — watch {{-(-29) = +29}}.",
            "Factorise {{4x + 8 = 4(x + 2)}} and cancel!",
          ],
          strategy: "Check for final-step cancellation",
        },
        {
          kind: "short",
          id: "algebra-quadratics-p2-q11",
          question: "Make {{x}} the subject of {{a = (bx + c)/(x - d)}}. Give the expression for {{x}}.",
          answer: { type: "expression", expr: "(ad + c)/(a - b)", form: "any" },
          traps: [
            {
              spec: { type: "expression", expr: "(ad - c)/(a - b)" },
              feedback: "Adding {{ad}} to {{bx + c}} gives {{ad + c}}, not {{ad - c}}.",
            },
          ],
          solution: [
            "Multiply by {{(x - d)}}: {{ax - ad = bx + c}}.",
            "Collect {{x}}-terms on the left and non-{{x}} terms on the right: {{ax - bx = ad + c}}.",
            "Factorise {{x}} out and divide: {{x(a - b) = ad + c => x = (ad + c)/(a - b)}}.",
          ],
          difficulty: "core",
          guideRef: "rearranging-and-proof",
          hints: [
            "Clear the denominator {{(x - d)}} so {{ax - ad = bx + c}}.",
            "Move {{bx}} to the left and {{-ad}} to the right, then factorise out {{x}}.",
          ],
          strategy: "Clear–Collect–Factorise–Divide (CFFD)",
        },
        {
          kind: "written",
          id: "algebra-quadratics-p2-q12",
          question: "Prove algebraically that the sum of the squares of any two consecutive odd integers leaves a remainder of {{2}} when divided by {{8}}.",
          marks: 3,
          modelAnswer:
            "Represent two consecutive odd numbers as {{2n - 1}} and {{2n + 1}} for an integer {{n}}. Adding their squares gives {{(2n - 1)^2 + (2n + 1)^2 = (4n^2 - 4n + 1) + (4n^2 + 4n + 1) = 8n^2 + 2}}. Because {{8n^2}} is an exact multiple of eight, {{8n^2 + 2}} is always two more than a multiple of eight.",
          markScheme: [
            {
              point: "M1: Sets up two consecutive odd integers, e.g. 2n − 1 and 2n + 1 (or 2n + 1 and 2n + 3)",
              keywords: ["2n - 1", "2n-1", "2n + 1", "2n+1", "2n + 3", "2n+3"],
            },
            {
              point: "M1: Expands both squared brackets accurately",
              keywords: ["4n^2 - 4n + 1", "4n^2 + 4n + 1", "4n^2+4n+1", "4n^2 + 12n + 9"],
            },
            {
              point: "A1: Simplifies to 8n² + 2 (or 8(n² + 2n + 1) + 2) and states conclusion",
              keywords: ["8n^2 + 2", "8n^2+2", "8(n^2 + 2n + 1) + 2", "8n^2 + 16n + 10"],
            },
          ],
          commonError: "Using 2n + 1 and 2n + 2 (which is one odd and one even integer).",
          difficulty: "core",
          guideRef: "rearranging-and-proof",
          hints: [
            "Using symmetric consecutive odds {{2n - 1}} and {{2n + 1}} makes the middle {{-4n}} and {{+4n}} cancel!",
            "Show the sum simplifies to {{8n^2 + 2}}.",
          ],
          strategy: "Parity representations (2n, 2n + 1)",
        },
        {
          kind: "written",
          id: "algebra-quadratics-p2-q13",
          question: "Prove algebraically that the product of any two odd integers is always an odd integer.",
          marks: 4,
          modelAnswer:
            "Let the first number be {{2m + 1}} and the second be {{2n + 1}}, where {{m}} and {{n}} are independent whole numbers. Multiplying them gives {{(2m + 1)(2n + 1) = 4mn + 2m + 2n + 1 = 2(2mn + m + n) + 1}}. Since {{2mn + m + n}} is a whole number, twice it is even, so adding one guarantees an odd result.",
          markScheme: [
            {
              point: "M1: Writes first odd integer as 2m + 1 (or 2a + 1, 2p + 1)",
              keywords: ["2m + 1", "2m+1", "2m - 1", "2a + 1", "2p + 1"],
            },
            {
              point: "M1: Uses a DIFFERENT integer variable for the second odd integer, e.g. 2n + 1",
              keywords: ["2n + 1", "2n+1", "2n - 1", "2b + 1", "2q + 1"],
            },
            {
              point: "A1: Expands product accurately to 4mn + 2m + 2n + 1",
              keywords: ["4mn + 2m + 2n + 1", "4mn+2m+2n+1", "4ab + 2a + 2b + 1", "4pq + 2p + 2q + 1"],
            },
            {
              point: "R1: Factorises into 2(2mn + m + n) + 1 (even + 1) and concludes",
              keywords: ["2(2mn + m + n) + 1", "2(2ab + a + b) + 1", "2(2pq + p + q) + 1", "twice"],
            },
          ],
          commonError: "Writing (2n + 1)(2n + 1), which only proves that the square of a single odd integer is odd!",
          difficulty: "challenge",
          guideRef: "rearranging-and-proof",
          hints: [
            "Because the two odd integers do NOT have to be equal or consecutive, use two **different** letters {{m}} and {{n}}!",
            "Expand {{(2m + 1)(2n + 1)}}.",
            "Factor {{2}} out of the first three terms to write it in the form {{2 * (\"integer\") + 1}}.",
          ],
          strategy: "Parity representations (2n, 2n + 1)",
        },
        {
          kind: "short",
          id: "algebra-quadratics-p2-q14",
          question: "Given the identity {{(x + a)(2x - 1)(x - 3) = 2x^3 + bx^2 - 25x + 12}} for all {{x}}, find the constants {{a}} and {{b}} (give {{a}} first, then {{b}}).",
          answer: { type: "list", values: [4, 1], ordered: true, display: "4, 1" },
          traps: [
            {
              spec: { type: "list", values: [-4, -15], ordered: true },
              feedback: "Watch the product of two negatives in the constant term: {{a * (-1) * (-3) = +3a = 12}}, so {{a = +4}}.",
            },
          ],
          solution: [
            "Compare constants: {{a * (-1) * (-3) = 3a = 12 => a = 4}}.",
            "Substitute {{a = 4}}: {{(x + 4)(2x^2 - 7x + 3) = 2x^3 + (-7 + 8)x^2 - 25x + 12}}.",
            "Hence {{b = 1}}.",
          ],
          difficulty: "challenge",
          guideRef: "expanding-three-brackets",
          hints: [
            "Equate the constant term {{a * (-1) * (-3)}} to {{12}} to find {{a}}.",
            "Expand {{(2x - 1)(x - 3) = 2x^2 - 7x + 3}}.",
            "Now find the {{x^2}} coefficient in {{(x + 4)(2x^2 - 7x + 3)}}.",
          ],
          strategy: "Compare coefficients",
        },
      ],
    },
  ],
  challenge: [
    {
      kind: "short",
      id: "algebra-quadratics-ch-q01",
      question: "Find the coefficient of {{x^2}} in the simplified expansion of {{(2x - 3)^3 - (x + 2)^3}}.",
      answer: { type: "number", value: -42 },
      traps: [
        {
          spec: { type: "number", value: -30 },
          feedback: "Remember to subtract {{+6x^2}} from {{-36x^2}}: {{-36 - 6 = -42}}, not {{-36 + 6 = -30}}.",
        },
      ],
      solution: [
        "{{(2x - 3)^3 = (4x^2 - 12x + 9)(2x - 3)}} has {{x^2}} term {{4x^2 * (-3) + (-12x)(2x) = -12x^2 - 24x^2 = -36x^2}}.",
        "{{(x + 2)^3 = (x^2 + 4x + 4)(x + 2)}} has {{x^2}} term {{2x^2 + 4x^2 = +6x^2}}.",
        "Subtracting gives {{-36x^2 - 6x^2 = -42x^2}}, so the coefficient is {{-42}}.",
      ],
      difficulty: "challenge",
      guideRef: "expanding-three-brackets",
      hints: [
        "You don't even have to compute every term — focus cleanly on the {{x^2}} contributions in each cube!",
        "In {{(4x^2 - 12x + 9)(2x - 3)}}, find the {{x^2}} term ({{-36x^2}}).",
        "In {{(x^2 + 4x + 4)(x + 2)}}, find the {{x^2}} term ({{+6x^2}}), then subtract.",
      ],
      strategy: "Target only the needed power",
    },
    {
      kind: "short",
      id: "algebra-quadratics-ch-q02",
      question: "Without a calculator, evaluate {{503^2 - 497^2}}.",
      commonError: "Squaring 503 and 497 separately (and slipping on the arithmetic) instead of using A² − B² = (A − B)(A + B) = 6 × 1000.",
      answer: { type: "number", value: 6000 },
      solution: [
        "Apply difference of two squares {{A^2 - B^2 = (A - B)(A + B)}} with {{A = 503}} and {{B = 497}}.",
        "{{503 - 497 = 6}} and {{503 + 497 = 1000}}.",
        "Multiply: {{6 * 1000 = 6000}}.",
      ],
      difficulty: "challenge",
      guideRef: "factorising-quadratics",
      hints: [
        "Do NOT square 503 and 497 by long multiplication — look at the structure {{A^2 - B^2}}!",
        "Compute {{503 - 497}} and {{503 + 497}}.",
        "Multiply those two results together.",
      ],
      strategy: "Difference of two squares A² − B²",
    },
    {
      kind: "short",
      id: "algebra-quadratics-ch-q03",
      question: "Factorise **fully** {{(3x + 4)^2 - (x - 2)^2}}.",
      answer: { type: "expression", expr: "4(x + 3)(2x + 1)", form: "factorised" },
      traps: [
        {
          spec: { type: "expression", expr: "(2x + 2)(4x + 2)" },
          feedback: "Watch {{4 - (-2) = +6}} in the first bracket, AND extract the common factor {{2}} from BOTH brackets!",
        },
      ],
      solution: [
        "Use {{A^2 - B^2 = (A - B)(A + B)}}: {{((3x + 4) - (x - 2))((3x + 4) + (x - 2)) = (2x + 6)(4x + 2)}}.",
        "Extract {{2}} from {{(2x + 6)}} and {{2}} from {{(4x + 2)}}: {{2(x + 3) * 2(2x + 1) = 4(x + 3)(2x + 1)}}.",
      ],
      difficulty: "challenge",
      guideRef: "factorising-quadratics",
      hints: [
        "Apply {{A^2 - B^2 = (A - B)(A + B)}} to get {{(2x + 6)(4x + 2)}}.",
        "Notice BOTH brackets have a common factor of {{2}}!",
        "Pull {{2 * 2 = 4}} to the front so neither bracket retains a common factor.",
      ],
      strategy: "Common factor first",
    },
    {
      kind: "short",
      id: "algebra-quadratics-ch-q04",
      question: "Find the **maximum** possible value of {{24/(2x^2 - 12x + 21)}} for real values of {{x}}.",
      answer: { type: "number", value: 8 },
      traps: [
        {
          spec: { type: "number", value: 3 },
          feedback: "{{3}} is the minimum value of the **denominator** (achieved at {{x = 3}}); divide {{24}} by {{3}} to get the maximum fraction!",
        },
      ],
      solution: [
        "Complete the square on the denominator: {{2(x^2 - 6x) + 21 = 2((x - 3)^2 - 9) + 21 = 2(x - 3)^2 + 3}}.",
        "Since {{2(x - 3)^2 >= 0}}, the denominator is always positive with minimum value {{3}} (when {{x = 3}}).",
        "A positive fraction with fixed numerator {{24}} is largest when its denominator is smallest: {{24 / 3 = 8}}.",
      ],
      difficulty: "challenge",
      guideRef: "completing-the-square",
      hints: [
        "When is a fraction {{24 / D}} (with {{D > 0}}) as **large** as possible?",
        "Complete the square on {{D = 2x^2 - 12x + 21}} to find the **minimum** value of {{D}}.",
        "Divide {{24}} by that minimum denominator.",
      ],
      strategy: "Minimise the denominator to maximise the fraction",
    },
    {
      kind: "short",
      id: "algebra-quadratics-ch-q05",
      question: "Given that {{3x^2 - 15x + 11 = a(x + p)^2 + q}}, find the exact value of {{q}} as an improper fraction in its simplest form.",
      answer: { type: "fraction", n: -31, d: 4, simplest: true, form: "improper" },
      traps: [
        {
          spec: { type: "fraction", n: -14, d: 4 },
          feedback: "Multiply {{-25/4}} by {{3}} to get {{-75/4}} before adding {{11 = 44/4}}!",
        },
      ],
      solution: [
        "Factor {{3}} out of the {{x}}-terms: {{3(x^2 - 5x) + 11}}.",
        "Complete the square with fractions: {{3((x - 5/2)^2 - 25/4) + 11}}.",
        "Expand {{3}}: {{3(x - 5/2)^2 - 75/4 + 44/4 = 3(x - 5/2)^2 - 31/4}}, so {{q = -31/4}}.",
      ],
      difficulty: "challenge",
      guideRef: "completing-the-square",
      hints: [
        "Factor {{3}} out of {{3x^2 - 15x}} to get {{3(x^2 - 5x) + 11}}.",
        "Halve {{-5}} to {{-5/2}}, so {{x^2 - 5x = (x - 5/2)^2 - 25/4}}.",
        "Compute {{3 * (-25/4) + 11}} over a denominator of {{4}}.",
      ],
      strategy: "Outer-bracket shield",
    },
    {
      kind: "short",
      id: "algebra-quadratics-ch-q06",
      question: "Simplify fully {{(6x^2 + 7x - 3)/(10 - 5x) ÷ (2x^2 + 9x + 9)/(x^2 + x - 6)}}.",
      answer: { type: "expression", expr: "(1 - 3x)/5", form: "any" },
      traps: [
        {
          spec: { type: "expression", expr: "(3x - 1)/5" },
          feedback: "{{10 - 5x = -5(x - 2)}}, so cancelling {{(x - 2)}} leaves a factor of {{-5}} in the denominator!",
        },
      ],
      solution: [
        "Factorise all four expressions: {{6x^2 + 7x - 3 = (3x - 1)(2x + 3)}}, {{10 - 5x = -5(x - 2)}}, {{2x^2 + 9x + 9 = (2x + 3)(x + 3)}}, and {{x^2 + x - 6 = (x - 2)(x + 3)}}.",
        "Invert the second fraction and multiply: {{((3x - 1)(2x + 3))/(-5(x - 2)) * ((x - 2)(x + 3))/((2x + 3)(x + 3))}}.",
        "Cancel {{(2x + 3)}}, {{(x - 2)}} and {{(x + 3)}} to leave {{(3x - 1)/(-5) = (1 - 3x)/5}}.",
      ],
      difficulty: "challenge",
      guideRef: "algebraic-fractions",
      hints: [
        "Flip the second fraction first, then factorise all four quadratics/linear parts.",
        "Rewrite {{10 - 5x}} as {{-5(x - 2)}} so it matches {{(x - 2)}} from {{x^2 + x - 6 = (x - 2)(x + 3)}}.",
        "Cancel {{(2x + 3)}}, {{(x - 2)}} and {{(x + 3)}} cleanly.",
      ],
      strategy: "Factorise before touching anything",
    },
    {
      kind: "short",
      id: "algebra-quadratics-ch-q07",
      question: "Given the identity {{A/(x - 2) + B/(x + 3) = (7x + 1)/((x - 2)(x + 3))}}, find the constants {{A}} and {{B}} (give {{A}} first, then {{B}}).",
      answer: { type: "list", values: [3, 4], ordered: true, display: "3, 4" },
      traps: [
        {
          spec: { type: "list", values: [4, 3], ordered: true },
          feedback: "{{A}} multiplies {{(x + 3)}} and {{B}} multiplies {{(x - 2)}} — check {{3(x + 3) + 4(x - 2) = 7x + 1}}!",
        },
      ],
      solution: [
        "Combine the left side over {{(x - 2)(x + 3)}}: {{A(x + 3) + B(x - 2) = 7x + 1}} for all {{x}}.",
        "Substitute {{x = 2}} to eliminate {{B}}: {{5A = 15 => A = 3}}.",
        "Substitute {{x = -3}} to eliminate {{A}}: {{-5B = -20 => B = 4}}.",
      ],
      difficulty: "challenge",
      guideRef: "algebraic-fractions",
      hints: [
        "Clear denominators so {{A(x + 3) + B(x - 2) = 7x + 1}} holds for every {{x}}.",
        "Substitute the clever value {{x = 2}} to make {{B(x - 2)}} vanish!",
        "Then substitute {{x = -3}} to make {{A(x + 3)}} vanish.",
      ],
      strategy: "Substitute strategic root values",
    },
    {
      kind: "short",
      id: "algebra-quadratics-ch-q08",
      question: "Make {{x}} the subject of the self-inverse formula {{y = (4x - 3)/(2x - 4)}}. Give the expression for {{x}} in terms of {{y}}.",
      commonError: "Leaving x on both sides (e.g. x = (4 + ... x)/...) instead of collecting every x-term on one side and factorising x out.",
      answer: { type: "expression", expr: "(4y - 3)/(2y - 4)", form: "any" },
      solution: [
        "Multiply by {{(2x - 4)}}: {{2xy - 4y = 4x - 3}}.",
        "Collect {{x}}-terms on the left: {{2xy - 4x = 4y - 3}}.",
        "Factorise {{x}} out and divide: {{x(2y - 4) = 4y - 3 => x = (4y - 3)/(2y - 4)}} — the exact same rule in {{y}}!",
      ],
      difficulty: "challenge",
      guideRef: "rearranging-and-proof",
      hints: [
        "Multiply both sides by {{(2x - 4)}} to get {{2xy - 4y = 4x - 3}}.",
        "Move {{4x}} to the left and {{-4y}} to the right.",
        "Factorise {{x}} out and divide by {{(2y - 4)}}.",
      ],
      strategy: "Clear–Collect–Factorise–Divide (CFFD)",
    },
    {
      kind: "short",
      id: "algebra-quadratics-ch-q09",
      question: "For every integer {{n}}, the product of four consecutive integers plus {{1}} is a perfect square: {{n(n + 1)(n + 2)(n + 3) + 1 = (n^2 + an + b)^2}} (with {{a > 0}}). Find the integers {{a}} and {{b}} ({{a}} first, then {{b}}).",
      commonError: "Testing a few values of n instead of pairing n(n + 3) and (n + 1)(n + 2) and substituting u = n² + 3n to get (u + 1)².",
      answer: { type: "list", values: [3, 1], ordered: true, display: "3, 1" },
      solution: [
        "Pair the outer factors and inner factors: {{(n(n + 3))((n + 1)(n + 2)) + 1 = (n^2 + 3n)(n^2 + 3n + 2) + 1}}.",
        "Let {{u = n^2 + 3n}}: the expression becomes {{u(u + 2) + 1 = u^2 + 2u + 1 = (u + 1)^2}}.",
        "Substitute back {{u = n^2 + 3n}}: {{(n^2 + 3n + 1)^2}}, so {{a = 3}} and {{b = 1}}.",
      ],
      difficulty: "challenge",
      guideRef: "rearranging-and-proof",
      hints: [
        "Don't expand from left to right! Pair {{n(n + 3)}} together and {{(n + 1)(n + 2)}} together.",
        "Notice both products start with {{n^2 + 3n}} — call {{u = n^2 + 3n}}!",
        "Simplify {{u(u + 2) + 1}} into a perfect square {{(u + 1)^2}}.",
      ],
      strategy: "Symmetric pairing & substitution",
    },
  ],
};
