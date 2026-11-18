import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      kind: "short",
      id: "calculus-kinematics-quiz-q01",
      question: "Given that {{y = 5x^4 - 3x^2 + 9x - 4}}, find {{dy/dx}}.",
      answer: { type: "expression", expr: "20x^3 - 6x + 9", form: "simplified", display: "{{20x^3 - 6x + 9}}" },
      traps: [
        { spec: { type: "expression", expr: "20x^3 - 6x + 5" }, feedback: "Standalone constants differentiate to 0 — do not combine +9 and −4!" },
        { spec: { type: "expression", expr: "20x^3 - 6x + 9 - 4" }, feedback: "Remember the constant −4 differentiates to 0." },
      ],
      solution: [
        "Differentiate term-by-term using {{d/dx(a x^n) = n a x^(n - 1)}}.",
        "{{5x^4 -> 20x^3}}, {{-3x^2 -> -6x}}, {{9x -> 9}}, and {{-4 -> 0}}.",
        "{{dy/dx = 20x^3 - 6x + 9}}.",
      ],
      commonError: "Leaving the constant −4 in the derivative.",
      difficulty: "warmup",
      guideRef: "differentiating-powers",
      hints: ["Multiply each coefficient by its power and subtract 1 from the power.", "What does the constant −4 differentiate to?"],
    },
    {
      kind: "short",
      id: "calculus-kinematics-quiz-q02",
      question: "Find the gradient of the curve {{y = x^3 - 4x^2 + 7}} at the point where {{x = 3}}.",
      answer: { type: "number", value: 3 },
      traps: [
        { spec: { type: "number", value: -2 }, feedback: "You substituted x = 3 into y instead of differentiating first to find dy/dx!" },
      ],
      solution: [
        "Differentiate: {{dy/dx = 3x^2 - 8x}}.",
        "Substitute {{x = 3}}: {{dy/dx = 3(9) - 8(3) = 27 - 24 = 3}}.",
      ],
      commonError: "Finding the y-coordinate (−2) instead of the gradient dy/dx.",
      difficulty: "warmup",
      guideRef: "gradients-tangents-normals",
      hints: ["Differentiate {{y}} first to get {{dy/dx}}.", "Substitute {{x = 3}} into {{dy/dx}}."],
    },
    {
      kind: "short",
      id: "calculus-kinematics-quiz-q03",
      question: "Given that {{y = 12/x^3 + 6 sqrt(x)}} for {{x > 0}}, find {{dy/dx}}.",
      answer: { type: "expression", expr: "-36/x^4 + 3/sqrt(x)", form: "simplified", display: "{{-36/x^4 + 3/sqrt(x)}}" },
      traps: [
        { spec: { type: "expression", expr: "-36/x^2 + 3/sqrt(x)" }, feedback: "Subtracting 1 from −3 gives −4, not −2!" },
        { spec: { type: "expression", expr: "36/x^4 + 3/sqrt(x)" }, feedback: "Check the sign when multiplying 12 by −3." },
      ],
      solution: [
        "Rewrite in index form: {{y = 12x^(-3) + 6x^(1/2)}}.",
        "Differentiate: {{dy/dx = -36x^(-4) + 3x^(-1/2) = -36/x^4 + 3/sqrt(x)}}.",
      ],
      commonError: "Writing −3 − 1 = −2 instead of −4.",
      difficulty: "core",
      guideRef: "differentiating-powers",
      hints: ["Rewrite as {{12x^(-3) + 6x^(1/2)}} first.", "Remember {{-3 - 1 = -4}} and {{1/2 - 1 = -1/2}}."],
    },
    {
      kind: "short",
      id: "calculus-kinematics-quiz-q04",
      question: "Find the {{y}}-coordinate of the stationary point on the curve {{y = 2x^2 - 12x + 23}}.",
      answer: { type: "number", value: 5 },
      traps: [
        { spec: { type: "number", value: 3 }, feedback: "x = 3 is the x-coordinate — substitute x = 3 into y to find the y-coordinate!" },
        { spec: { type: "number", value: 0 }, feedback: "0 is the value of dy/dx at the stationary point, not y!" },
      ],
      solution: [
        "Set {{dy/dx = 4x - 12 = 0 => x = 3}}.",
        "Substitute {{x = 3}} into {{y}}: {{y = 2(9) - 12(3) + 23 = 18 - 36 + 23 = 5}}.",
      ],
      commonError: "Stopping at x = 3 or substituting back into dy/dx.",
      difficulty: "core",
      guideRef: "stationary-points-optimisation",
      hints: ["Solve {{dy/dx = 0}} to find {{x}}.", "Plug {{x}} back into {{y = 2x^2 - 12x + 23}}."],
    },
    {
      kind: "short",
      id: "calculus-kinematics-quiz-q05",
      question:
        "A particle moves along a straight line with displacement {{s = 2t^3 - 9t^2 + 12t}} metres at time {{t}} seconds. Find its acceleration when {{t = 4}} s.",
      answer: { type: "number", value: 30, display: "30 m/s²" },
      traps: [
        { spec: { type: "number", value: 36 }, feedback: "36 m/s is the velocity v(4) — differentiate once more for acceleration a = dv/dt!" },
        { spec: { type: "number", value: 32 }, feedback: "32 m is the displacement s(4) — differentiate twice for acceleration!" },
      ],
      solution: [
        "Velocity {{v = ds/dt = 6t^2 - 18t + 12}}.",
        "Acceleration {{a = dv/dt = 12t - 18}}.",
        "At {{t = 4}}, {{a = 12(4) - 18 = 30}} m/s².",
      ],
      commonError: "Differentiating only once (giving velocity instead of acceleration).",
      difficulty: "core",
      guideRef: "kinematics-calculus",
      hints: ["Find {{v = ds/dt}}, then differentiate again for {{a = dv/dt}}.", "Evaluate {{a}} at {{t = 4}}."],
    },
    {
      kind: "mcq",
      id: "calculus-kinematics-quiz-q06",
      question: "Which equation represents the **normal** to {{y = x^2 - 2x + 5}} at the point {{(3, 8)}}?",
      options: ["{{x + 4y = 35}}", "{{4x - y = 4}}", "{{x - 4y = -29}}", "{{4x + y = 20}}"],
      answerIndex: 0,
      explanation:
        "{{dy/dx = 2x - 2}}, so at {{x = 3}}, {{m_T = 4}} and normal gradient {{m_N = -1/4}}. Thus {{y - 8 = (-1/4)(x - 3) => 4y - 32 = -x + 3 => x + 4y = 35}}. {{4x - y = 4}} is the tangent.",
      difficulty: "core",
      guideRef: "gradients-tangents-normals",
      hints: ["Find {{m_T}} at {{x = 3}}, then take {{m_N = -1/m_T}}.", "Rearrange {{y - 8 = m_N(x - 3)}} by multiplying by {{4}}."],
    },
    {
      kind: "short",
      id: "calculus-kinematics-quiz-q07",
      question: "Given that {{y = (2x^3 - 5)/x}} for {{x != 0}}, find {{dy/dx}}.",
      answer: { type: "expression", expr: "4x + 5/x^2", form: "simplified", display: "{{4x + 5/x^2}}" },
      traps: [
        { spec: { type: "expression", expr: "4x - 5/x^2" }, feedback: "Watch the sign: −5 × (−1) = +5!" },
        { spec: { type: "expression", expr: "6x^2" }, feedback: "Do not differentiate top and bottom separately — split over x first!" },
      ],
      solution: [
        "Split the fraction first: {{y = 2x^2 - 5x^(-1)}}.",
        "Differentiate: {{dy/dx = 4x + 5x^(-2) = 4x + 5/x^2}}.",
      ],
      commonError: "Differentiating numerator and denominator separately.",
      difficulty: "core",
      guideRef: "differentiating-powers",
      hints: ["Divide both numerator terms by {{x}} before differentiating.", "Be careful differentiating {{-5x^(-1)}}."],
    },
    {
      kind: "short",
      id: "calculus-kinematics-quiz-q08",
      question: "A particle has velocity {{v = 20 - 5t^2}} m/s for {{t >= 0}}. Find the value of {{t}} when the particle is at instantaneous rest.",
      answer: { type: "number", value: 2, display: "2 s" },
      traps: [
        { spec: { type: "number", value: 4 }, feedback: "t² = 4, so take the square root to get t = 2!" },
        { spec: { type: "number", value: 0 }, feedback: "You are already given velocity v (no need to differentiate v!). Set 20 − 5t² = 0." },
      ],
      solution: [
        "Instantaneous rest means {{v = 0}}: {{20 - 5t^2 = 0}}.",
        "{{t^2 = 4}}, and since {{t >= 0}}, {{t = 2}} s.",
      ],
      commonError: "Differentiating v (setting acceleration = 0) when v is already given.",
      difficulty: "core",
      guideRef: "kinematics-calculus",
      hints: ["Notice the formula already gives velocity {{v}}, not {{s}}!", "Set {{20 - 5t^2 = 0}} and solve for {{t >= 0}}."],
    },
    {
      kind: "short",
      id: "calculus-kinematics-quiz-q09",
      question: "An enclosure has area {{A = 24x - 3x^2}} m² for {{0 < x < 8}}. Use differentiation to find the **maximum** area.",
      answer: { type: "number", value: 48, display: "48 m²" },
      traps: [
        { spec: { type: "number", value: 4 }, feedback: "x = 4 gives the optimal width — substitute x = 4 into A to find the maximum area!" },
      ],
      solution: [
        "Set {{dA/dx = 24 - 6x = 0 => x = 4}}.",
        "Since {{(d^2 A)/(dx^2) = -6 < 0}}, this is a maximum: {{A = 24(4) - 3(16) = 96 - 48 = 48}} m².",
      ],
      commonError: "Writing the value of x (4) instead of the maximum area A (48).",
      difficulty: "core",
      guideRef: "stationary-points-optimisation",
      hints: ["Solve {{dA/dx = 24 - 6x = 0}} for {{x}}.", "Substitute {{x}} back into {{A = 24x - 3x^2}}."],
    },
    {
      kind: "short",
      id: "calculus-kinematics-quiz-q10",
      question: "Find the two {{x}}-coordinates on the curve {{y = x^3 - 3x^2 - 4x + 7}} where the gradient is {{5}}.",
      answer: { type: "list", values: [-1, 3], ordered: false, display: "−1, 3" },
      traps: [
        { spec: { type: "list", values: [1, -3] }, feedback: "Check your factorisation signs for x² − 2x − 3 = 0." },
      ],
      solution: [
        "Differentiate: {{dy/dx = 3x^2 - 6x - 4}}.",
        "Equate to {{5}}: {{3x^2 - 6x - 4 = 5 => 3x^2 - 6x - 9 = 0}}.",
        "Divide by {{3}} and factorise: {{(x - 3)(x + 1) = 0 => x = 3}} or {{x = -1}}.",
      ],
      commonError: "Setting dy/dx = 0 instead of dy/dx = 5.",
      difficulty: "core",
      guideRef: "gradients-tangents-normals",
      hints: ["Set {{dy/dx = 3x^2 - 6x - 4}} equal to {{5}}.", "Rearrange to {{x^2 - 2x - 3 = 0}} and factorise."],
    },
  ],
  papers: [
    {
      id: "calculus-kinematics-p1",
      title: "Practice Paper 1 — Differentiation, Tangents & Optimisation",
      questions: [
        {
          kind: "short",
          id: "calculus-kinematics-p1-q01",
          question: "Differentiate {{y = 3x^5 - 8x^2 + 4x - 19}} with respect to {{x}}.",
          answer: { type: "expression", expr: "15x^4 - 16x + 4", form: "simplified", display: "{{15x^4 - 16x + 4}}" },
          traps: [
            { spec: { type: "expression", expr: "15x^4 - 16x - 15" }, feedback: "−19 differentiates to 0 — do not combine 4 and −19!" },
          ],
          solution: ["Apply the power rule to each term: {{15x^4 - 16x + 4}}."],
          commonError: "Forgetting that −19 differentiates to 0.",
          difficulty: "warmup",
          guideRef: "differentiating-powers",
          hints: ["Multiply each power down and reduce the exponent by 1."],
        },
        {
          kind: "short",
          id: "calculus-kinematics-p1-q02",
          question: "Given that {{y = 8/x^2 - 12 sqrt(x)}} for {{x > 0}}, find {{dy/dx}}.",
          answer: { type: "expression", expr: "-16/x^3 - 6/sqrt(x)", form: "simplified", display: "{{-16/x^3 - 6/sqrt(x)}}" },
          traps: [
            { spec: { type: "expression", expr: "-16/x - 6/sqrt(x)" }, feedback: "−2 − 1 = −3, so the power on x is −3 (i.e. /x³)!" },
            { spec: { type: "expression", expr: "-16/x^3 - 6*sqrt(x)" }, feedback: "1/2 − 1 = −1/2, so √x becomes 1/√x in the derivative." },
          ],
          solution: [
            "Rewrite in index form: {{y = 8x^(-2) - 12x^(1/2)}}.",
            "Differentiate: {{dy/dx = -16x^(-3) - 6x^(-1/2) = -16/x^3 - 6/sqrt(x)}}.",
          ],
          commonError: "Adding 1 instead of subtracting 1 from negative or fractional indices.",
          difficulty: "core",
          guideRef: "differentiating-powers",
          hints: ["Convert to {{8x^(-2) - 12x^(1/2)}} before differentiating.", "Subtract 1 from {{-2}} and from {{1/2}}."],
        },
        {
          kind: "short",
          id: "calculus-kinematics-p1-q03",
          question: "Given that {{y = (2x + 3)(3x - 5)}}, find {{dy/dx}}.",
          answer: { type: "expression", expr: "12x - 1", form: "simplified", display: "{{12x - 1}}" },
          traps: [
            { spec: { type: "expression", expr: "6" }, feedback: "Expand the brackets BEFORE differentiating — you cannot differentiate each bracket separately!" },
            { spec: { type: "expression", expr: "12x + 1" }, feedback: "Check the middle term when expanding: −10x + 9x = −x." },
          ],
          solution: [
            "Expand first: {{y = 6x^2 - 10x + 9x - 15 = 6x^2 - x - 15}}.",
            "Differentiate: {{dy/dx = 12x - 1}}.",
          ],
          commonError: "Differentiating (2x + 3) → 2 and (3x − 5) → 3 and multiplying to get 6.",
          difficulty: "core",
          guideRef: "differentiating-powers",
          hints: ["Expand {{(2x + 3)(3x - 5)}} first.", "Collect like terms, then differentiate."],
        },
        {
          kind: "short",
          id: "calculus-kinematics-p1-q04",
          question: "Given that {{y = (4x^4 - 9x^2 + 3)/x^2}} for {{x != 0}}, find {{dy/dx}}.",
          answer: { type: "expression", expr: "8x - 6/x^3", form: "simplified", display: "{{8x - 6/x^3}}" },
          traps: [
            { spec: { type: "expression", expr: "8x - 9 - 6/x^3" }, feedback: "The middle term −9x²/x² = −9 is a constant, so it differentiates to 0!" },
            { spec: { type: "expression", expr: "8x + 6/x^3" }, feedback: "+3x^(−2) differentiates to −6x^(−3), with a minus sign." },
          ],
          solution: [
            "Divide every term by {{x^2}}: {{y = 4x^2 - 9 + 3x^(-2)}}.",
            "Differentiate ({{-9 -> 0}}): {{dy/dx = 8x - 6x^(-3) = 8x - 6/x^3}}.",
          ],
          commonError: "Keeping the constant −9 after differentiating.",
          difficulty: "core",
          guideRef: "differentiating-powers",
          hints: ["Split over {{x^2}} to get {{4x^2 - 9 + 3x^(-2)}}.", "Notice {{-9}} is now a constant!"],
        },
        {
          kind: "short",
          id: "calculus-kinematics-p1-q05",
          question: "Find the gradient of the curve {{y = 3x^3 - 7x^2 + 2x - 5}} at the point where {{x = -2}}.",
          answer: { type: "number", value: 66 },
          traps: [
            { spec: { type: "number", value: 10 }, feedback: "Check −14(−2) = +28 (negative times negative is positive!)." },
            { spec: { type: "number", value: -61 }, feedback: "−61 is the y-coordinate at x = −2; differentiate first for gradient!" },
          ],
          solution: [
            "Differentiate: {{dy/dx = 9x^2 - 14x + 2}}.",
            "At {{x = -2}}: {{9(-2)^2 - 14(-2) + 2 = 36 + 28 + 2 = 66}}.",
          ],
          commonError: "Sign slips when substituting negative x into −14x or x².",
          difficulty: "warmup",
          guideRef: "gradients-tangents-normals",
          hints: ["Find {{dy/dx = 9x^2 - 14x + 2}}.", "Use brackets around {{-2}} when substituting."],
        },
        {
          kind: "short",
          id: "calculus-kinematics-p1-q06",
          question:
            "Find the equation of the tangent to the curve {{y = x^3 - 5x^2 + 8x + 1}} at the point where {{x = 3}}. Give the right-hand side of {{y = mx + c}}.",
          answer: { type: "expression", expr: "5x - 8", form: "simplified", display: "{{y = 5x - 8}}" },
          traps: [
            { spec: { type: "expression", expr: "5x + 7" }, feedback: "7 is y₁ at x = 3, not the y-intercept c! Use y − 7 = 5(x − 3)." },
          ],
          solution: [
            "At {{x = 3}}, {{y = 27 - 45 + 24 + 1 = 7}}, so the point is {{(3, 7)}}.",
            "{{dy/dx = 3x^2 - 10x + 8}}; at {{x = 3}}, {{m_T = 27 - 30 + 8 = 5}}.",
            "Tangent: {{y - 7 = 5(x - 3) => y = 5x - 8}}.",
          ],
          commonError: "Using y₁ directly as c instead of substituting into y − y₁ = m(x − x₁).",
          difficulty: "core",
          guideRef: "gradients-tangents-normals",
          hints: ["Find {{y}} when {{x = 3}} to get {{(3, y_1)}}.", "Evaluate {{dy/dx}} at {{x = 3}} for {{m_T}}, then expand {{y - y_1 = m_T(x - 3)}}."],
        },
        {
          kind: "short",
          id: "calculus-kinematics-p1-q07",
          question:
            "Find the equation of the **normal** to {{y = x^2 - 6x + 13}} at the point {{(4, 5)}}. Give the right-hand side of {{y = mx + c}}.",
          answer: { type: "expression", expr: "-1/2*x + 7", form: "simplified", display: "{{y = -1/2 x + 7}}" },
          traps: [
            { spec: { type: "expression", expr: "2x - 3" }, feedback: "y = 2x − 3 is the tangent! Use m_N = −1/2 for the perpendicular normal." },
            { spec: { type: "expression", expr: "1/2*x + 3" }, feedback: "Remember the negative sign in m_N = −1/m_T = −1/2." },
          ],
          solution: [
            "{{dy/dx = 2x - 6}}; at {{x = 4}}, tangent gradient {{m_T = 2}}.",
            "Normal gradient {{m_N = -1/2}}.",
            "{{y - 5 = (-1/2)(x - 4) => y = -1/2 x + 2 + 5 = -1/2 x + 7}}.",
          ],
          commonError: "Finding the tangent instead of the perpendicular normal.",
          difficulty: "core",
          guideRef: "gradients-tangents-normals",
          hints: ["At {{x = 4}}, {{m_T = 2(4) - 6 = 2}}, so what is {{m_N}}?", "Use {{y - 5 = m_N(x - 4)}} and rearrange to {{mx + c}}."],
        },
        {
          kind: "short",
          id: "calculus-kinematics-p1-q08",
          question: "Find the coordinates {{(x, y)}} of the point on {{y = 2x^2 + 5x - 3}} where the gradient is {{-3}}.",
          answer: { type: "list", values: [-2, -5], ordered: true, display: "(−2, −5)" },
          traps: [
            { spec: { type: "list", values: [-2, -3], ordered: true }, feedback: "−3 is the gradient! Substitute x = −2 into y = 2x² + 5x − 3 to get y = −5." },
          ],
          solution: [
            "Set {{dy/dx = 4x + 5 = -3 => 4x = -8 => x = -2}}.",
            "Substitute into {{y}}: {{y = 2(-2)^2 + 5(-2) - 3 = 8 - 10 - 3 = -5}}.",
            "Coordinates: {{(-2, -5)}}.",
          ],
          commonError: "Writing (−2, −3) by pairing x with the gradient instead of y.",
          difficulty: "core",
          guideRef: "gradients-tangents-normals",
          hints: ["Solve {{4x + 5 = -3}} for {{x}}.", "Plug {{x}} into {{y = 2x^2 + 5x - 3}} for the {{y}}-coordinate."],
        },
        {
          kind: "written",
          id: "calculus-kinematics-p1-q09",
          question:
            "A cubic curve has equation {{y = x^3 - 3x^2 - 9x + 10}}. Find the coordinates of both stationary points on the curve, and use calculus to justify which is a local maximum and which is a local minimum.",
          marks: 4,
          modelAnswer:
            "Differentiating gives {{dy/dx = 3x^2 - 6x - 9}}. At a turning point {{dy/dx = 0}}, so {{3(x - 3)(x + 1) = 0}}, giving {{x = -1}} and {{x = 3}}. Substituting back into the cubic gives {{(-1, 15)}} and {{(3, -17)}}. Differentiating again gives {{(d^2 y)/(dx^2) = 6x - 6}}: at {{x = -1}}, {{6(-1) - 6 = -12 < 0}} so {{(-1, 15)}} is a peak (max); at {{x = 3}}, {{6(3) - 6 = 12 > 0}} so {{(3, -17)}} is a trough (min).",
          markScheme: [
            { point: "Differentiates correctly to 3x² − 6x − 9 and equates to 0", keywords: ["3x^2 - 6x - 9", "x^2 - 2x - 3", "(x - 3)(x + 1)"] },
            { point: "Finds stationary point (−1, 15)", keywords: ["(-1, 15)", "-1, 15", "y = 15"] },
            { point: "Finds stationary point (3, −17)", keywords: ["(3, -17)", "3, -17", "y = -17"] },
            { point: "Justifies nature via d²y/dx² = 6x − 6 (−12 < 0 and 12 > 0) or gradient sign table", keywords: ["6x - 6", "-12 < 0", "12 > 0", "sign table", "+ to -"] },
          ],
          commonError: "Asserting (−1, 15) is a maximum just because 15 > −17 without a calculus test (d²y/dx² or gradient signs).",
          difficulty: "core",
          guideRef: "stationary-points-optimisation",
          hints: [
            "Solve {{dy/dx = 3x^2 - 6x - 9 = 0}} to find both {{x}}-values.",
            "Find {{y}} at each {{x}}, then evaluate {{(d^2 y)/(dx^2) = 6x - 6}} at each {{x}}.",
          ],
        },
        {
          kind: "short",
          id: "calculus-kinematics-p1-q10",
          question:
            "A particle moves along a line so that {{s = t^3 - 7t^2 + 8t + 4}} metres for {{t >= 0}}. Find its initial velocity and its velocity when {{t = 5}} s (initial velocity first).",
          answer: { type: "list", values: [8, 13], ordered: true, display: "8 m/s, 13 m/s" },
          traps: [
            { spec: { type: "list", values: [4, -6], ordered: true }, feedback: "Those are displacements s(0) and s(5) — differentiate first to get v = ds/dt!" },
          ],
          solution: [
            "Differentiate: {{v = ds/dt = 3t^2 - 14t + 8}}.",
            "Initially ({{t = 0}}): {{v(0) = 8}} m/s.",
            "At {{t = 5}}: {{v(5) = 3(25) - 14(5) + 8 = 75 - 70 + 8 = 13}} m/s.",
          ],
          commonError: "Forgetting that 'initial' means t = 0.",
          difficulty: "core",
          guideRef: "kinematics-calculus",
          hints: ["Find {{v = ds/dt}}.", "'Initial' means {{t = 0}}; evaluate {{v(0)}} and {{v(5)}}."],
        },
        {
          kind: "short",
          id: "calculus-kinematics-p1-q11",
          question:
            "A particle has displacement {{s = 15t + 6t^2 - t^3}} metres for {{t >= 0}}. Find the value of {{t}} when the particle is at instantaneous rest.",
          answer: { type: "number", value: 5, display: "5 s" },
          traps: [
            { spec: { type: "number", value: 2 }, feedback: "t = 2 solves a = dv/dt = 0 (maximum velocity), not v = 0!" },
          ],
          solution: [
            "Instantaneous rest means {{v = ds/dt = 15 + 12t - 3t^2 = 0}}.",
            "Divide by {{-3}}: {{t^2 - 4t - 5 = (t - 5)(t + 1) = 0}}.",
            "Since {{t >= 0}}, {{t = 5}} s.",
          ],
          commonError: "Retaining the negative root t = −1 when time must satisfy t ≥ 0.",
          difficulty: "core",
          guideRef: "kinematics-calculus",
          hints: ["Set {{v = ds/dt = 15 + 12t - 3t^2 = 0}}.", "Factorise {{t^2 - 4t - 5 = 0}} and reject negative time."],
        },
        {
          kind: "written",
          id: "calculus-kinematics-p1-q12",
          question:
            "A rectangular sheet of card measures {{16}} cm by {{10}} cm. Equal squares of side {{x}} cm are cut from each of the four corners, and the flaps are folded up to form an open-topped tray.\n\n(a) Show clearly that the volume {{V}} cm³ of the tray is given by {{V = 4x^3 - 52x^2 + 160x}}.\n(b) Use differentiation to find the value of {{x}} that maximises {{V}}, and calculate this maximum volume.",
          diagram:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 185" role="img" aria-label="16 cm by 10 cm rectangular sheet with four corner squares of side x cm cut out"><rect x="0" y="0" width="380" height="185" rx="12" fill="#f8fafc"/><rect x="70" y="28" width="240" height="125" fill="#dbeafe" stroke="#1e40af" stroke-width="2"/><rect x="70" y="28" width="34" height="34" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 3"/><rect x="276" y="28" width="34" height="34" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 3"/><rect x="70" y="119" width="34" height="34" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 3"/><rect x="276" y="119" width="34" height="34" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 3"/><rect x="104" y="62" width="172" height="57" fill="none" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="5 3"/><text x="190" y="18" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">16 cm</text><text x="322" y="95" font-size="12" font-weight="bold" fill="#0f172a">10 cm</text><text x="87" y="49" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">x</text><text x="190" y="94" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Base: (16 − 2x) by (10 − 2x)</text></svg>',
          marks: 4,
          modelAnswer:
            "(a) After removing {{x}} cm from both ends, the base has length {{16 - 2x}} cm, width {{10 - 2x}} cm, and height {{x}} cm (requiring {{0 < x < 5}}). Multiplying gives {{V = x(16 - 2x)(10 - 2x) = x(160 - 52x + 4x^2) = 4x^3 - 52x^2 + 160x}}.\n(b) Setting {{dV/dx = 12x^2 - 104x + 160 = 0}} and dividing by {{4}} gives {{3x^2 - 26x + 40 = (3x - 20)(x - 2) = 0}}, so {{x = 2}} or {{x = 20/3}}. Since {{10 - 2x > 0}}, we reject {{20/3}} and take {{x = 2}} cm (where {{(d^2 V)/(dx^2) = 24(2) - 104 = -56 < 0}}). Peak capacity is {{V = 2(12)(6) = 144}} cm³.",
          markScheme: [
            { point: "Identifies base dimensions (16 − 2x) and (10 − 2x) and expands x(16 − 2x)(10 − 2x)", keywords: ["16 - 2x", "10 - 2x"] },
            { point: "Differentiates to dV/dx = 12x² − 104x + 160 and sets equal to 0", keywords: ["12x^2 - 104x + 160", "3x^2 - 26x + 40"] },
            { point: "Solves quadratic to select x = 2 (rejecting 20/3 since x < 5)", keywords: ["x = 2", "(x - 2)"] },
            { point: "Finds maximum volume 144 cm³", keywords: ["144"] },
          ],
          commonError: "Writing base dimensions as (16 − x) and (10 − x), forgetting that a square is cut from BOTH ends of each side.",
          difficulty: "challenge",
          guideRef: "stationary-points-optimisation",
          hints: [
            "Each side loses {{x}} cm from BOTH corners, so the folded base is {{(16 - 2x)}} by {{(10 - 2x)}}.",
            "Set {{dV/dx = 12x^2 - 104x + 160 = 0}} and divide by {{4}}.",
            "Check physical domain {{0 < x < 5}} to reject {{x = 20/3}}, then evaluate {{V(2)}}.",
          ],
        },
        {
          kind: "short",
          id: "calculus-kinematics-p1-q13",
          question:
            "A particle moves along a straight line with displacement {{s = t^3 - 6t^2 + 9t + 2}} metres for {{t >= 0}}. Find the **total distance** travelled between {{t = 0}} and {{t = 4}} s.",
          answer: { type: "number", value: 12, display: "12 m" },
          traps: [
            { spec: { type: "number", value: 4 }, feedback: "4 m is only the net displacement s(4) − s(0)! The particle reverses at t = 1 and t = 3." },
            { spec: { type: "number", value: 6 }, feedback: "s(4) = 6 m is the final position; start from s(0) = 2 and sum all 3 legs!" },
          ],
          solution: [
            "{{v = ds/dt = 3t^2 - 12t + 9 = 3(t - 1)(t - 3) = 0}}, so reversals occur at {{t = 1}} and {{t = 3}}.",
            "Positions: {{s(0) = 2}}, {{s(1) = 6}}, {{s(3) = 2}}, {{s(4) = 6}}.",
            "Total distance {{= |6 - 2| + |2 - 6| + |6 - 2| = 4 + 4 + 4 = 12}} m.",
          ],
          commonError: "Computing s(4) − s(0) = 4 m without checking v = 0 reversals.",
          difficulty: "core",
          guideRef: "kinematics-calculus",
          hints: [
            "Solve {{v = 3t^2 - 12t + 9 = 0}} for turning times in {{(0, 4)}}.",
            "Evaluate {{s(0)}}, {{s(1)}}, {{s(3)}}, and {{s(4)}}, then add {{|delta s|}} on each leg.",
          ],
        },
        {
          kind: "short",
          id: "calculus-kinematics-p1-q14",
          question: "Find the minimum value of {{y = 27/x + 3x}} for {{x > 0}}.",
          answer: { type: "number", value: 18 },
          traps: [
            { spec: { type: "number", value: 3 }, feedback: "x = 3 is where the minimum occurs — substitute x = 3 into y to get 18!" },
          ],
          solution: [
            "{{y = 27x^(-1) + 3x => dy/dx = -27/x^2 + 3 = 0}}.",
            "{{x^2 = 9 => x = 3}} (since {{x > 0}}, and {{(d^2 y)/(dx^2) = 54/x^3 = 2 > 0}}).",
            "Minimum {{y = 27/3 + 3(3) = 9 + 9 = 18}}.",
          ],
          commonError: "Giving x = 3 instead of the minimum y-value 18.",
          difficulty: "challenge",
          guideRef: "stationary-points-optimisation",
          hints: [
            "Rewrite as {{27x^(-1) + 3x}} and set {{dy/dx = 0}}.",
            "Multiply by {{x^2}} to solve {{3x^2 = 27}} for {{x > 0}}.",
            "Substitute {{x}} back into {{y = 27/x + 3x}}.",
          ],
        },
      ],
    },
    {
      id: "calculus-kinematics-p2",
      title: "Practice Paper 2 — Mixed Higher Calculus & Kinematics",
      questions: [
        {
          kind: "short",
          id: "calculus-kinematics-p2-q01",
          question: "Differentiate {{y = 7x^3 - 1/2 x^4 + 11}} with respect to {{x}}.",
          answer: { type: "expression", expr: "21x^2 - 2x^3", form: "simplified", display: "{{21x^2 - 2x^3}}" },
          traps: [
            { spec: { type: "expression", expr: "21x^2 - 2x^3 + 11" }, feedback: "The constant +11 differentiates to 0." },
          ],
          solution: ["{{dy/dx = 3(7)x^2 - 4(1/2)x^3 + 0 = 21x^2 - 2x^3}}."],
          commonError: "Retaining the constant +11.",
          difficulty: "warmup",
          guideRef: "differentiating-powers",
          hints: ["Multiply {{4 * 1/2 = 2}} and drop the constant {{11}}."],
        },
        {
          kind: "short",
          id: "calculus-kinematics-p2-q02",
          question: "Given that {{y = 4x sqrt(x) - 5/x^3}} for {{x > 0}}, find {{dy/dx}}.",
          answer: { type: "expression", expr: "6*sqrt(x) + 15/x^4", form: "simplified", display: "{{6 sqrt(x) + 15/x^4}}" },
          traps: [
            { spec: { type: "expression", expr: "6*sqrt(x) - 15/x^4" }, feedback: "−5 × (−3) = +15, so the second term is +15/x⁴!" },
          ],
          solution: [
            "Combine powers first: {{x * sqrt(x) = x^1 * x^(1/2) = x^(3/2)}}, so {{y = 4x^(3/2) - 5x^(-3)}}.",
            "Differentiate: {{dy/dx = 6x^(1/2) + 15x^(-4) = 6 sqrt(x) + 15/x^4}}.",
          ],
          commonError: "Not combining x·√x into a single power x^(3/2) before differentiating.",
          difficulty: "core",
          guideRef: "differentiating-powers",
          hints: ["Use index laws: {{x * sqrt(x) = x^(3/2)}} and {{-5/x^3 = -5x^(-3)}}.", "Differentiate term-by-term watching {{-5 * (-3) = +15}}."],
        },
        {
          kind: "short",
          id: "calculus-kinematics-p2-q03",
          question: "Given that {{y = (3x^2 - 2)^2}}, expand and find {{dy/dx}}.",
          answer: { type: "expression", expr: "36x^3 - 24x", form: "expanded", display: "{{36x^3 - 24x}}" },
          traps: [
            { spec: { type: "expression", expr: "36x^3" }, feedback: "(3x² − 2)² = 9x⁴ − 12x² + 4 — don't forget the middle term −12x²!" },
          ],
          solution: [
            "Expand the squared bracket: {{y = 9x^4 - 12x^2 + 4}}.",
            "Differentiate: {{dy/dx = 36x^3 - 24x}}.",
          ],
          commonError: "Squaring (3x² − 2)² to 9x⁴ + 4 and missing −12x².",
          difficulty: "core",
          guideRef: "differentiating-powers",
          hints: ["Write {{(3x^2 - 2)(3x^2 - 2) = 9x^4 - 12x^2 + 4}}.", "Differentiate term-by-term."],
        },
        {
          kind: "short",
          id: "calculus-kinematics-p2-q04",
          question: "Find the gradient of the curve {{y = (x^3 + 16)/x}} at the point where {{x = 2}}.",
          answer: { type: "number", value: 0 },
          traps: [
            { spec: { type: "number", value: 8 }, feedback: "+16x^(−1) differentiates to −16/x² (with a minus sign), so 4 − 4 = 0!" },
            { spec: { type: "number", value: 12 }, feedback: "12 is the y-coordinate at x = 2; split and differentiate first!" },
          ],
          solution: [
            "Split first: {{y = x^2 + 16x^(-1)}}.",
            "{{dy/dx = 2x - 16/x^2}}.",
            "At {{x = 2}}: {{2(2) - 16/4 = 4 - 4 = 0}}.",
          ],
          commonError: "Sign slip differentiating +16x^(−1) to +16x^(−2).",
          difficulty: "core",
          guideRef: "gradients-tangents-normals",
          hints: ["Rewrite {{y = x^2 + 16x^(-1)}} and differentiate.", "Evaluate {{dy/dx}} at {{x = 2}}."],
        },
        {
          kind: "short",
          id: "calculus-kinematics-p2-q05",
          question: "Find the two {{x}}-coordinates on {{y = 2x^3 + 3x^2 - 10x + 1}} where the gradient of the curve is {{2}}.",
          answer: { type: "list", values: [-2, 1], ordered: false, display: "−2, 1" },
          traps: [
            { spec: { type: "list", values: [2, -1] }, feedback: "Check factorisation signs in x² + x − 2 = (x + 2)(x − 1) = 0." },
          ],
          solution: [
            "{{dy/dx = 6x^2 + 6x - 10 = 2 => 6x^2 + 6x - 12 = 0}}.",
            "Divide by {{6}}: {{x^2 + x - 2 = (x + 2)(x - 1) = 0 => x = -2}} or {{x = 1}}.",
          ],
          commonError: "Forgetting to subtract 2 from −10 before factorising.",
          difficulty: "core",
          guideRef: "gradients-tangents-normals",
          hints: ["Solve {{6x^2 + 6x - 10 = 2}}.", "Divide by {{6}} to simplify {{x^2 + x - 2 = 0}}."],
        },
        {
          kind: "short",
          id: "calculus-kinematics-p2-q06",
          question:
            "The **normal** to the curve {{y = 3x^2 - 10x + 9}} at {{x = 2}} crosses the {{y}}-axis at {{(0, c)}}. Find the value of {{c}}.",
          answer: { type: "number", value: 2 },
          traps: [
            { spec: { type: "number", value: -3 }, feedback: "c = −3 is the y-intercept of the tangent! Use m_N = −1/2 for the normal." },
          ],
          solution: [
            "At {{x = 2}}, {{y = 12 - 20 + 9 = 1}}, giving {{(2, 1)}}.",
            "{{dy/dx = 6x - 10}}; at {{x = 2}}, {{m_T = 2}}, so {{m_N = -1/2}}.",
            "Normal: {{y - 1 = (-1/2)(x - 2) => y = -1/2 x + 2}}, so {{c = 2}}.",
          ],
          commonError: "Finding the y-intercept of the tangent instead of the normal.",
          difficulty: "core",
          guideRef: "gradients-tangents-normals",
          hints: ["Find {{y}} and {{m_T}} at {{x = 2}}, then flip & negate for {{m_N = -1/2}}.", "Set {{x = 0}} in {{y - 1 = (-1/2)(x - 2)}}."],
        },
        {
          kind: "short",
          id: "calculus-kinematics-p2-q07",
          question:
            "The curve {{y = x^3 + p x^2 + q x + 2}} has a stationary point at {{(2, -6)}}. Find the constants {{p}} and {{q}} (give {{p}} first, then {{q}}).",
          answer: { type: "list", values: [-2, -4], ordered: true, display: "p = −2, q = −4" },
          traps: [
            { spec: { type: "list", values: [-4, -2], ordered: true }, feedback: "Right values, reversed order — give p first, then q." },
          ],
          solution: [
            "Curve passes through {{(2, -6)}}: {{8 + 4p + 2q + 2 = -6 => 2p + q = -8}}.",
            "Stationary at {{x = 2}} means {{dy/dx = 3x^2 + 2px + q = 0}} at {{x = 2}}: {{12 + 4p + q = 0 => 4p + q = -12}}.",
            "Subtracting gives {{2p = -4 => p = -2}}, and {{q = -8 - 2(-2) = -4}}.",
          ],
          commonError: "Using only dy/dx = 0 and forgetting that (2, −6) also satisfies the original curve equation.",
          difficulty: "core",
          guideRef: "stationary-points-optimisation",
          hints: [
            "Form one equation from {{y(2) = -6}} and a second from {{dy/dx = 0}} at {{x = 2}}.",
            "Solve the simultaneous linear equations {{2p + q = -8}} and {{4p + q = -12}}.",
          ],
        },
        {
          kind: "written",
          id: "calculus-kinematics-p2-q08",
          question:
            "A farmer uses {{120}} m of fencing to make a rectangular pen of width {{x}} m and total length {{y}} m, divided into two compartments by an internal fence of length {{x}} m parallel to the widths.\n\n(a) Show that the total enclosed area {{A}} m² is given by {{A = 60x - 3/2 x^2}}.\n(b) Find the maximum possible area of the pen and justify why it is a maximum.",
          diagram:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 165" role="img" aria-label="Rectangular pen of length y m and width x m split in two by a middle fence of length x m"><rect x="0" y="0" width="380" height="165" rx="12" fill="#f8fafc"/><rect x="65" y="34" width="250" height="92" fill="#dcfce7" stroke="#15803d" stroke-width="2.5"/><line x1="190" y1="34" x2="190" y2="126" stroke="#15803d" stroke-width="2.5"/><text x="190" y="23" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">y m</text><text x="48" y="84" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">x m</text><text x="204" y="84" font-size="12" font-weight="bold" fill="#15803d">x m</text><text x="332" y="84" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">x m</text><text x="190" y="148" font-size="11" fill="#334155" text-anchor="middle">Total fencing: 3 sections of x m + 2 sections of y m = 120 m</text></svg>',
          marks: 4,
          modelAnswer:
            "(a) Counting all five fence segments gives {{3x + 2y = 120}}, so {{y = 60 - 1.5x}}. Multiplying width by length gives {{A = x y = x(60 - 3/2 x) = 60x - 3/2 x^2}}.\n(b) Differentiating gives {{dA/dx = 60 - 3x = 0 => x = 20}} m. Substituting {{x = 20}} yields {{A = 60(20) - 1.5(400) = 600}} m². Because {{(d^2 A)/(dx^2) = -3 < 0}}, this turning point is a peak (max).",
          markScheme: [
            { point: "Forms perimeter constraint 3x + 2y = 120 and rearranges for y = 60 − 1.5x", keywords: ["3x + 2y = 120", "2y = 120 - 3x", "60 - 1.5x", "60 - 3/2"] },
            { point: "Differentiates to dA/dx = 60 − 3x and equates to 0", keywords: ["60 - 3x"] },
            { point: "Finds x = 20 and calculates maximum area 600 m²", keywords: ["600"] },
            { point: "Justifies maximum via d²A/dx² = −3 < 0 (or gradient sign change + → 0 → −)", keywords: ["-3 < 0", "= -3", "+ to -", "negative second derivative"] },
          ],
          commonError: "Writing 2x + 2y = 120 and forgetting the third fence of length x m down the middle.",
          difficulty: "core",
          guideRef: "stationary-points-optimisation",
          hints: [
            "There are THREE fences of length {{x}} m (left, middle, right) and TWO of length {{y}} m.",
            "Set {{dA/dx = 60 - 3x = 0}}, evaluate {{A}}, and state {{(d^2 A)/(dx^2) = -3 < 0}}.",
          ],
        },
        {
          kind: "short",
          id: "calculus-kinematics-p2-q09",
          question:
            "A particle moves along a straight line so that {{s = 6t^2 - t^3}} metres for {{t >= 0}}. Find the **maximum displacement** of the particle for {{t > 0}}.",
          answer: { type: "number", value: 32, display: "32 m" },
          traps: [
            { spec: { type: "number", value: 4 }, feedback: "t = 4 s is the time — substitute t = 4 into s = 6t² − t³ to get 32 m!" },
            { spec: { type: "number", value: 12 }, feedback: "12 m/s is the maximum velocity (at t = 2); set v = ds/dt = 0 for maximum displacement!" },
          ],
          solution: [
            "Set {{v = ds/dt = 12t - 3t^2 = 3t(4 - t) = 0}}.",
            "For {{t > 0}}, {{t = 4}} s (where {{(d^2 s)/(dt^2) = 12 - 6(4) = -12 < 0}}).",
            "Maximum displacement: {{s(4) = 6(16) - 64 = 96 - 64 = 32}} m.",
          ],
          commonError: "Giving t = 4 instead of s(4) = 32 m.",
          difficulty: "core",
          guideRef: "kinematics-calculus",
          hints: ["Solve {{ds/dt = 12t - 3t^2 = 0}} for {{t > 0}}.", "Substitute {{t = 4}} into {{s = 6t^2 - t^3}}."],
        },
        {
          kind: "short",
          id: "calculus-kinematics-p2-q10",
          question:
            "A particle moves along a line with velocity {{v = 3t^2 - 18t + 20}} m/s for {{t >= 0}}. Find the **minimum velocity** of the particle.",
          answer: { type: "number", value: -7, display: "−7 m/s" },
          traps: [
            { spec: { type: "number", value: 3 }, feedback: "t = 3 s is the time — substitute t = 3 into v to get −7 m/s!" },
            { spec: { type: "number", value: 7 }, feedback: "Keep the negative sign: 27 − 54 + 20 = −7 m/s (velocity is signed!)." },
          ],
          solution: [
            "Minimum velocity occurs when {{dv/dt = a = 6t - 18 = 0 => t = 3}} s.",
            "Substitute {{t = 3}}: {{v(3) = 3(9) - 18(3) + 20 = 27 - 54 + 20 = -7}} m/s.",
          ],
          commonError: "Dropping the negative sign on minimum velocity.",
          difficulty: "core",
          guideRef: "kinematics-calculus",
          hints: ["Differentiate {{v}} and set {{dv/dt = 6t - 18 = 0}}.", "Evaluate {{v(3)}} carefully including its sign."],
        },
        {
          kind: "written",
          id: "calculus-kinematics-p2-q11",
          question:
            "A particle {{P}} moves along a line through {{O}} with displacement {{s = t^3 - 8t^2 + 16t}} metres for {{t >= 0}}. Show that {{P}} returns to {{O}} at {{t = 4}} seconds, and use {{ds/dt}} to explain why {{P}} bounces back into {{s > 0}} rather than crossing into {{s < 0}}.",
          marks: 3,
          modelAnswer:
            "At {{t = 4}}, {{s(4) = 64 - 128 + 64 = 0}}, confirming {{P}} is back at the origin. Differentiating gives {{v = 3t^2 - 16t + 16 = (3t - 4)(t - 4)}}. Just before {{t = 4}} (e.g. {{t = 3}}), {{v = -5 < 0}} (moving towards {{O}}), at {{t = 4}} {{v = 0}}, and just after {{t = 4}} (e.g. {{t = 5}}), {{v = 11 > 0}} — so velocity reverses from negative to positive right at the origin!",
          markScheme: [
            { point: "Substitutes t = 4 to show s(4) = 64 − 128 + 64 = 0", keywords: ["64 - 128 + 64", "s(4) = 0", "4(4 - 4)^2"] },
            { point: "Finds velocity v = 3t² − 16t + 16", keywords: ["3t^2 - 16t + 16", "(3t - 4)(t - 4)"] },
            { point: "Shows v = 0 at t = 4 and v changes sign from − to + (reverses direction at O)", keywords: ["reverses", "turns around", "negative to positive", "-5", "v(4) = 0"] },
          ],
          commonError: "Checking s(4) = 0 without testing the sign of v = ds/dt before and after t = 4.",
          difficulty: "core",
          guideRef: "kinematics-calculus",
          hints: [
            "Evaluate {{s(4)}} first.",
            "Find {{v = ds/dt}} and check the sign of {{v}} just before {{t = 4}} (say {{t = 3}}) and just after {{t = 4}} (say {{t = 5}}).",
          ],
        },
        {
          kind: "short",
          id: "calculus-kinematics-p2-q12",
          question:
            "A solid prism of length {{L}} cm has a right-angled triangular cross-section with sides {{3x}} cm, {{4x}} cm, and {{5x}} cm. Its total surface area (all {{5}} faces) is {{900}} cm². Find the **maximum** possible volume of the prism.",
          answer: { type: "number", value: 1500, display: "1500 cm³" },
          traps: [
            { spec: { type: "number", value: 5 }, feedback: "x = 5 cm is the optimal scale — substitute x = 5 into V = 450x − 6x³ to get 1500 cm³!" },
          ],
          solution: [
            "Two triangular ends have combined area {{2 * (1/2 * 3x * 4x) = 12x^2}}; three rectangular faces have area {{(3x + 4x + 5x)L = 12xL}}.",
            "{{12x^2 + 12xL = 900 => xL = 75 - x^2}}.",
            "Volume {{V = (6x^2)L = 6x(xL) = 450x - 6x^3}}.",
            "Set {{dV/dx = 450 - 18x^2 = 0 => x^2 = 25 => x = 5}} cm, giving max {{V = 450(5) - 6(125) = 1500}} cm³.",
          ],
          commonError: "Forgetting one of the two triangular end faces or omitting the 5xL hypotenuse rectangle.",
          difficulty: "challenge",
          guideRef: "stationary-points-optimisation",
          hints: [
            "Sum all 5 faces: {{2 * (6x^2) + (3x + 4x + 5x)L = 12x^2 + 12xL = 900}}.",
            "Show {{xL = 75 - x^2}}, so {{V = 6x^2 L = 450x - 6x^3}}.",
            "Solve {{dV/dx = 0}} for {{x > 0}} and compute {{V}}.",
          ],
        },
        {
          kind: "short",
          id: "calculus-kinematics-p2-q13",
          question:
            "Find the equation of the tangent to {{y = 12/x^2}} at the point where {{x = 2}}. Give the right-hand side of {{y = mx + c}}.",
          answer: { type: "expression", expr: "-3x + 9", form: "simplified", display: "{{y = -3x + 9}}" },
          traps: [
            { spec: { type: "expression", expr: "-3x + 3" }, feedback: "At x = 2, y = 3, so y − 3 = −3(x − 2) gives y = −3x + 9, not −3x + 3!" },
          ],
          solution: [
            "At {{x = 2}}, {{y = 12/4 = 3}}, so the point is {{(2, 3)}}.",
            "{{y = 12x^(-2) => dy/dx = -24/x^3}}; at {{x = 2}}, {{m_T = -24/8 = -3}}.",
            "Tangent: {{y - 3 = -3(x - 2) => y = -3x + 9}}.",
          ],
          commonError: "Differentiating 12x^(−2) to −24x^(−1) instead of −24x^(−3).",
          difficulty: "core",
          guideRef: "gradients-tangents-normals",
          hints: ["Find {{dy/dx = -24/x^3}} and evaluate at {{x = 2}}.", "Use {{y - 3 = m_T(x - 2)}}."],
        },
        {
          kind: "short",
          id: "calculus-kinematics-p2-q14",
          question:
            "A particle moves along a straight line with displacement {{s = 2t^3 - 21t^2 + 60t}} metres for {{t >= 0}}. Find the **total distance** travelled in the first {{6}} seconds ({{0 <= t <= 6}}).",
          answer: { type: "number", value: 90, display: "90 m" },
          traps: [
            { spec: { type: "number", value: 36 }, feedback: "36 m is only the net displacement s(6)! Split the journey at t = 2 and t = 5." },
          ],
          solution: [
            "{{v = 6t^2 - 42t + 60 = 6(t - 2)(t - 5) = 0}}, so reversals occur at {{t = 2}} and {{t = 5}}.",
            "{{s(0) = 0}}, {{s(2) = 52}} m, {{s(5) = 25}} m, {{s(6) = 36}} m.",
            "Total distance {{= |52 - 0| + |25 - 52| + |36 - 25| = 52 + 27 + 11 = 90}} m.",
          ],
          commonError: "Missing one of the two reversals inside (0, 6).",
          difficulty: "challenge",
          guideRef: "kinematics-calculus",
          hints: [
            "Solve {{v = 6t^2 - 42t + 60 = 0}} to find both turnaround times.",
            "Evaluate {{s}} at {{t = 0, 2, 5, 6}}.",
            "Sum {{|s(2) - s(0)| + |s(5) - s(2)| + |s(6) - s(5)|}}.",
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      kind: "short",
      id: "calculus-kinematics-ch-q01",
      question:
        "The cubic curve {{y = x^3 + a x^2 + b x + c}} has a local maximum at {{(-1, 12)}} and a local minimum at {{(3, k)}}. Find the value of {{k}}.",
      answer: { type: "number", value: -20 },
      traps: [
        { spec: { type: "number", value: -27 }, feedback: "Don't forget to add c = 7 after finding a = −3 and b = −9!" },
      ],
      solution: [
        "Since stationary points are at {{x = -1}} and {{x = 3}}, {{dy/dx = 3(x + 1)(x - 3) = 3x^2 - 6x - 9}}.",
        "Comparing with {{dy/dx = 3x^2 + 2ax + b}} gives {{a = -3}} and {{b = -9}}.",
        "Using {{(-1, 12)}}: {{(-1)^3 - 3(-1)^2 - 9(-1) + c = 12 => 5 + c = 12 => c = 7}}.",
        "Thus {{k = y(3) = 27 - 27 - 27 + 7 = -20}}.",
      ],
      difficulty: "challenge",
      guideRef: "stationary-points-optimisation",
      hints: [
        "Because {{x = -1}} and {{x = 3}} are the roots of {{dy/dx = 3x^2 + 2ax + b = 0}}, write {{dy/dx = 3(x + 1)(x - 3)}}!",
        "Expand {{3(x + 1)(x - 3)}} to read off {{a}} and {{b}}, then use {{y(-1) = 12}} to find {{c}}.",
        "Evaluate {{y(3)}} to get {{k}}.",
      ],
      strategy: "Reconstruct dy/dx from its roots",
    },
    {
      kind: "short",
      id: "calculus-kinematics-ch-q02",
      question:
        "The tangent to the curve {{y = x^3}} at {{P(2, 8)}} intersects the curve again at a distinct point {{Q}}. Find the coordinates {{(x, y)}} of {{Q}}.",
      answer: { type: "list", values: [-4, -64], ordered: true, display: "(−4, −64)" },
      traps: [
        { spec: { type: "list", values: [-2, -8], ordered: true }, feedback: "Check your cubic factorisation: (x − 2)²(x + 4) = x³ − 12x + 16 = 0!" },
      ],
      solution: [
        "{{dy/dx = 3x^2}}; at {{x = 2}}, {{m_T = 12}}, so the tangent is {{y - 8 = 12(x - 2) => y = 12x - 16}}.",
        "Intersect with {{y = x^3}}: {{x^3 - 12x + 16 = 0}}.",
        "Tangency at {{x = 2}} gives a repeated factor {{(x - 2)^2}}: {{(x - 2)^2(x + 4) = 0}}, so {{x = -4}} and {{y = -64}}.",
      ],
      difficulty: "challenge",
      guideRef: "gradients-tangents-normals",
      hints: [
        "Show that the tangent at {{(2, 8)}} is {{y = 12x - 16}}.",
        "Set {{x^3 = 12x - 16 => x^3 - 12x + 16 = 0}}.",
        "Because the line is tangent at {{x = 2}}, {{(x - 2)^2 = x^2 - 4x + 4}} divides {{x^3 - 12x + 16}} cleanly!",
      ],
      strategy: "Use tangency as a repeated root (x − x₀)²",
    },
    {
      kind: "short",
      id: "calculus-kinematics-ch-q03",
      question:
        "An open-topped cylindrical tank has base radius {{r}} cm, height {{h}} cm, and capacity {{64 pi}} cm³. Find the **minimum** outer surface area of the tank in terms of {{pi}}.",
      answer: { type: "expression", expr: "48*pi", form: "simplified", display: "{{48 pi}}" },
      traps: [
        { spec: { type: "expression", expr: "32*pi" }, feedback: "Don't forget to include the circular base πr² = 16π as well as the wall 32π!" },
      ],
      solution: [
        "From {{pi r^2 h = 64 pi}}, we get {{h = 64/r^2}}.",
        "Open-topped area: {{A = pi r^2 + 2 pi r h = pi r^2 + 128 pi r^(-1)}}.",
        "Set {{dA/dr = 2 pi r - 128 pi / r^2 = 0 => r^3 = 64 => r = 4}} cm.",
        "Minimum area: {{A = pi(16) + (128 pi)/4 = 16 pi + 32 pi = 48 pi}} cm².",
      ],
      difficulty: "challenge",
      guideRef: "stationary-points-optimisation",
      hints: [
        "Use {{pi r^2 h = 64 pi}} to substitute {{h = 64/r^2}} into {{A = pi r^2 + 2 pi r h}}.",
        "Differentiate {{A = pi r^2 + 128 pi r^(-1)}} with respect to {{r}} and set equal to {{0}}.",
        "Solve {{2r^3 = 128}} for {{r}}, then evaluate {{A}} in terms of {{pi}}.",
      ],
    },
    {
      kind: "short",
      id: "calculus-kinematics-ch-q04",
      question:
        "A right circular cone of base radius {{r}} cm and vertical height {{h}} cm has fixed slant height {{l = 6 sqrt(3)}} cm (where {{r^2 + h^2 = l^2}} and cone volume {{V = 1/3 pi r^2 h}}). Find the **maximum** possible volume of the cone in terms of {{pi}}.",
      answer: { type: "expression", expr: "144*pi", form: "simplified", display: "{{144 pi}}" },
      traps: [
        { spec: { type: "expression", expr: "216*pi" }, feedback: "Remember to subtract (1/3)πh³ = 72π from 36πh = 216π!" },
      ],
      solution: [
        "By Pythagoras, {{r^2 + h^2 = (6 sqrt(3))^2 = 108}}, so eliminate {{r^2 = 108 - h^2}} directly!",
        "Substitute into {{V = 1/3 pi (108 - h^2) h = 36 pi h - 1/3 pi h^3}}.",
        "Set {{dV/dh = 36 pi - pi h^2 = 0 => h^2 = 36 => h = 6}} cm ({{h > 0}}).",
        "Max {{V = 36 pi(6) - 1/3 pi(216) = 216 pi - 72 pi = 144 pi}} cm³.",
      ],
      difficulty: "challenge",
      guideRef: "stationary-points-optimisation",
      hints: [
        "Clever variable choice: eliminate {{r^2}} (not {{h}}!) using {{r^2 = 108 - h^2}} so there are NO square roots!",
        "Write {{V = 36 pi h - 1/3 pi h^3}} and solve {{dV/dh = 0}} for {{h > 0}}.",
        "Substitute {{h = 6}} back into {{V}}.",
      ],
      strategy: "Choose the variable that avoids square roots",
    },
    {
      kind: "short",
      id: "calculus-kinematics-ch-q05",
      question:
        "Two distinct tangents can be drawn to the parabola {{y = x^2 - 6x + 13}} from the external point {{(4, 1)}}. Find the gradients of both tangents.",
      answer: { type: "list", values: [-2, 6], ordered: false, display: "−2, 6" },
      traps: [
        { spec: { type: "list", values: [2, 6] }, feedback: "t = 2 and t = 6 are the x-coordinates of tangency; plug each into m = 2t − 6 to get −2 and 6!" },
      ],
      solution: [
        "Let a point of tangency be {{(t, t^2 - 6t + 13)}}; its tangent has gradient {{m = 2t - 6}}.",
        "Tangent equation: {{y - (t^2 - 6t + 13) = (2t - 6)(x - t) => y = (2t - 6)x - t^2 + 13}}.",
        "Substitute {{(4, 1)}}: {{1 = 4(2t - 6) - t^2 + 13 => t^2 - 8t + 12 = (t - 2)(t - 6) = 0}}, so {{t = 2}} or {{t = 6}}.",
        "Gradients: {{2(2) - 6 = -2}} and {{2(6) - 6 = 6}}.",
      ],
      difficulty: "challenge",
      guideRef: "gradients-tangents-normals",
      hints: [
        "Call the unknown point of tangency {{(t, t^2 - 6t + 13)}}, where gradient {{m = 2t - 6}}.",
        "Write the tangent line in terms of {{t}}, then substitute {{(x, y) = (4, 1)}} to get a quadratic in {{t}}.",
        "Once you find {{t = 2}} and {{t = 6}}, compute {{m = 2t - 6}} for each!",
      ],
      strategy: "Parametrise the unknown point of tangency as x = t",
    },
    {
      kind: "short",
      id: "calculus-kinematics-ch-q06",
      question:
        "A particle starts from {{O}} with displacement {{s = t^3 - k t^2 + 27t}} metres ({{t >= 0}}, where {{k > 0}}). Given that the particle comes to instantaneous rest at **exactly one** instant, find {{k}} and the displacement {{s}} at that instant ({{k}} first, then {{s}}).",
      answer: { type: "list", values: [9, 27], ordered: true, display: "k = 9, s = 27 m" },
      traps: [
        { spec: { type: "list", values: [9, 3], ordered: true }, feedback: "t = 3 s is the time — substitute t = 3 and k = 9 into s to get s = 27 m!" },
      ],
      solution: [
        "Velocity {{v = 3t^2 - 2kt + 27 = 0}} has one repeated root when discriminant {{b^2 - 4ac = 0}}.",
        "{{(-2k)^2 - 4(3)(27) = 0 => 4k^2 = 324 => k^2 = 81 => k = 9}} (since {{k > 0}}).",
        "Then {{3(t - 3)^2 = 0 => t = 3}} s, and {{s(3) = 27 - 9(9) + 27(3) = 27}} m.",
      ],
      difficulty: "challenge",
      guideRef: "kinematics-calculus",
      hints: [
        "Find {{v = ds/dt = 3t^2 - 2kt + 27}}.",
        "For {{v = 0}} to occur at **exactly one** positive instant, set the discriminant {{(-2k)^2 - 4(3)(27) = 0}}.",
        "Solve for {{k > 0}}, find the repeated root {{t}}, and evaluate {{s(t)}}.",
      ],
      strategy: "Connect repeated stationary/rest instants to b² − 4ac = 0",
    },
    {
      kind: "written",
      id: "calculus-kinematics-ch-q07",
      question:
        "A wire of total length {{56}} cm is cut into two pieces. One piece is bent to make a rectangle of width {{x}} cm and length {{5x}} cm; the other piece is bent to make a square of side {{y}} cm.\n\n(a) Show that the combined enclosed area {{A}} cm² of the two shapes is {{A = 14x^2 - 84x + 196}}.\n(b) Find the minimum combined area {{A}} and prove using calculus that it is a minimum.",
      marks: 4,
      modelAnswer:
        "(a) Perimeter of the {{x}} by {{5x}} rectangle is {{12x}} cm and perimeter of the square is {{4y}} cm, so {{12x + 4y = 56}}, giving {{y = 14 - 3x}}. Combined area is {{A = 5x^2 + y^2 = 5x^2 + (14 - 3x)^2 = 5x^2 + 196 - 84x + 9x^2 = 14x^2 - 84x + 196}}.\n(b) Setting {{dA/dx = 28x - 84 = 0}} gives {{x = 3}} cm. Substituting {{x = 3}} gives {{A = 14(9) - 84(3) + 196 = 70}} cm². Differentiating again gives {{(d^2 A)/(dx^2) = 28 > 0}}, which is positive so {{70}} cm² is a trough (min).",
      markScheme: [
        { point: "Forms wire-length equation 12x + 4y = 56 and isolates y = 14 − 3x", keywords: ["12x + 4y = 56", "14 - 3x"] },
        { point: "Differentiates A to get dA/dx = 28x − 84 = 0", keywords: ["28x - 84"] },
        { point: "Finds x = 3 and evaluates minimum combined area A = 70 cm²", keywords: ["= 70", "70 cm"] },
        { point: "Proves minimum via d²A/dx² = 28 > 0 (or gradient sign change − → 0 → +)", keywords: ["28 > 0", "= 28", "- to +", "positive second derivative"] },
      ],
      commonError: "Writing the perimeter of the x by 5x rectangle as 6x instead of 2(x + 5x) = 12x.",
      difficulty: "challenge",
      guideRef: "stationary-points-optimisation",
      hints: [
        "Rectangle perimeter is {{2(x + 5x) = 12x}} and square perimeter is {{4y}}, so {{12x + 4y = 56}}.",
        "Substitute {{y = 14 - 3x}} into {{A = 5x^2 + y^2}} and expand.",
        "Solve {{dA/dx = 28x - 84 = 0}}, calculate {{A(3)}}, and use {{(d^2 A)/(dx^2) = 28 > 0}}.",
      ],
    },
    {
      kind: "short",
      id: "calculus-kinematics-ch-q08",
      question:
        "Given that {{y = (2 sqrt(x) - 3)^2 / x}} for {{x > 0}}, find the exact value of {{dy/dx}} when {{x = 9}}. Give your answer as a fraction in simplest form.",
      answer: { type: "fraction", n: 1, d: 9, simplest: true },
      traps: [
        { spec: { type: "fraction", n: 1, d: 3 }, feedback: "Check 6 / (√9)³ = 6/27 = 2/9, then subtract 9/81 = 1/9 to get 1/9!" },
      ],
      solution: [
        "Expand numerator: {{(2 sqrt(x) - 3)^2 = 4x - 12 sqrt(x) + 9}}.",
        "Divide each term by {{x}}: {{y = 4 - 12x^(-1/2) + 9x^(-1)}}.",
        "Differentiate ({{4 -> 0}}): {{dy/dx = 6x^(-3/2) - 9x^(-2) = 6/(sqrt(x))^3 - 9/x^2}}.",
        "At {{x = 9}}: {{6/27 - 9/81 = 2/9 - 1/9 = 1/9}}.",
      ],
      difficulty: "challenge",
      guideRef: "differentiating-powers",
      hints: [
        "Expand {{(2 sqrt(x) - 3)^2 = 4x - 12x^(1/2) + 9}} first.",
        "Divide by {{x}} to get {{y = 4 - 12x^(-1/2) + 9x^(-1)}}, then differentiate.",
        "Evaluate at {{x = 9}} using {{9^(3/2) = (sqrt(9))^3 = 27}}.",
      ],
      strategy: "Expand, split and rewrite in index form",
    },
  ],
};
