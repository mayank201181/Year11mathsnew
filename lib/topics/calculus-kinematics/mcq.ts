import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "calculus-kinematics-m1",
    title: "MCQ Paper 1 — Core Differentiation & Motion",
    questions: [
      {
        kind: "mcq",
        id: "calculus-kinematics-m1-q01",
        question: "Given that {{y = 4x^3 - 7x + 11}}, find {{dy/dx}}.",
        options: ["{{12x^2 - 7x + 11}}", "{{4x^2 - 7}}", "{{12x^2 - 7}}", "{{12x^2 + 4}}"],
        answerIndex: 2,
        explanation:
          "Multiply by each power and subtract 1: {{4x^3 -> 12x^2}}, {{-7x -> -7}}, and the constant {{11 -> 0}}, giving {{12x^2 - 7}}. {{12x^2 + 4}} comes from forgetting that standalone constants differentiate to {{0}} (doing {{-7 + 11}}).",
        difficulty: "warmup",
        guideRef: "differentiating-powers",
        hints: [
          "Apply {{d/dx(a x^n) = n a x^(n - 1)}} to each term separately.",
          "Remember {{x = x^1}} and any standalone constant differentiates to {{0}}.",
        ],
        strategy: "Differentiate term-by-term",
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m1-q02",
        question: "Find {{dy/dx}} when {{y = 6/x^2}}.",
        options: ["{{3/x}}", "{{12/x^3}}", "{{-12/x}}", "{{-12/x^3}}"],
        answerIndex: 3,
        explanation:
          "Rewrite in index form first: {{y = 6x^(-2)}}. Multiplying by {{-2}} and subtracting {{1}} from the power gives {{-12x^(-3) = -12/x^3}}. {{-12/x}} comes from adding {{1}} to {{-2}} instead of subtracting {{1}}, while {{3/x}} comes from differentiating only the denominator.",
        difficulty: "warmup",
        guideRef: "differentiating-powers",
        hints: [
          "Rewrite {{6/x^2}} in index form {{6x^(-2)}} before differentiating.",
          "Be careful with negative arithmetic: {{-2 - 1 = -3}}.",
        ],
        strategy: "Rewrite in index form a·xⁿ first",
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m1-q03",
        question: "Given that {{y = 10 sqrt(x) - 3x}} for {{x > 0}}, find {{dy/dx}}.",
        options: ["{{5/x - 3}}", "{{5/sqrt(x) - 3}}", "{{20/sqrt(x) - 3}}", "{{5 sqrt(x) - 3}}"],
        answerIndex: 1,
        explanation:
          "Since {{sqrt(x) = x^(1/2)}}, we have {{y = 10x^(1/2) - 3x}}. Applying the power rule gives {{(1/2)(10)x^(1/2 - 1) - 3 = 5x^(-1/2) - 3 = 5/sqrt(x) - 3}}. {{5 sqrt(x) - 3}} forgets to subtract {{1}} from the exponent {{1/2}}.",
        difficulty: "core",
        guideRef: "differentiating-powers",
        hints: [
          "Write {{sqrt(x)}} as {{x^(1/2)}}.",
          "What is {{1/2 - 1}}, and how do you write {{x^(-1/2)}} back as a root?",
        ],
        strategy: "Rewrite in index form a·xⁿ first",
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m1-q04",
        question: "Given that {{y = (x^4 - 6x)/x^2}} for {{x != 0}}, find {{dy/dx}}.",
        options: ["{{(4x^3 - 6)/(2x)}}", "{{2x - 6/x^2}}", "{{4x^3 - 6}}", "{{2x + 6/x^2}}"],
        answerIndex: 3,
        explanation:
          "Split the single-denominator fraction BEFORE differentiating: {{y = x^4/x^2 - 6x/x^2 = x^2 - 6x^(-1)}}. Differentiating gives {{2x - (-1)(6)x^(-2) = 2x + 6/x^2}}. {{(4x^3 - 6)/(2x)}} is the classic trap of differentiating numerator and denominator separately.",
        difficulty: "core",
        guideRef: "differentiating-powers",
        hints: [
          "Never differentiate top and bottom separately — divide each numerator term by {{x^2}} first.",
          "Rewrite {{y = x^2 - 6x^(-1)}}, then watch the double negative on {{-6 * (-1)}}.",
        ],
        strategy: "Split fractions over a monomial denominator",
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m1-q05",
        question: "Find the gradient of the curve {{y = 2x^3 - 5x^2 + 3}} at the point where {{x = -1}}.",
        options: ["{{4}}", "{{16}}", "{{-16}}", "{{-4}}"],
        answerIndex: 1,
        explanation:
          "{{dy/dx = 6x^2 - 10x}}. Substituting {{x = -1}} gives {{6(-1)^2 - 10(-1) = 6(1) + 10 = 16}}. {{-4}} comes from a sign slip on {{-10(-1)}} (or substituting {{x = -1}} into {{y}} instead of {{dy/dx}}).",
        difficulty: "warmup",
        guideRef: "gradients-tangents-normals",
        hints: [
          "Differentiate {{y}} first to obtain the gradient function {{dy/dx}}.",
          "Substitute {{x = -1}} carefully using brackets: {{(-1)^2 = +1}} and {{-10(-1) = +10}}.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m1-q06",
        question: "What are the coordinates of the stationary point on the curve {{y = x^2 - 8x + 15}}?",
        options: ["{{(4, -1)}}", "{{(-4, 63)}}", "{{(4, 0)}}", "{{(8, 15)}}"],
        answerIndex: 0,
        explanation:
          "At a stationary point, {{dy/dx = 2x - 8 = 0 => x = 4}}. Substituting {{x = 4}} into the original curve gives {{y = 16 - 32 + 15 = -1}}, so {{(4, -1)}}. {{(4, 0)}} comes from substituting {{x = 4}} back into {{dy/dx}} instead of {{y}}.",
        difficulty: "warmup",
        guideRef: "stationary-points-optimisation",
        hints: [
          "Set {{dy/dx = 0}} to find the {{x}}-coordinate of the stationary point.",
          "Substitute that {{x}} into {{y = x^2 - 8x + 15}} to find {{y}}.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m1-q07",
        question: "Find the equation of the tangent to the curve {{y = x^3 - 2x + 1}} at the point {{(2, 5)}}.",
        options: ["{{y = -1/10 x + 26/5}}", "{{y = 10x - 15}}", "{{y = 12x - 19}}", "{{y = 10x + 5}}"],
        answerIndex: 1,
        explanation:
          "{{dy/dx = 3x^2 - 2}}. At {{x = 2}}, the tangent gradient is {{m_T = 3(4) - 2 = 10}}. Using {{y - 5 = 10(x - 2)}} gives {{y = 10x - 15}}. {{y = 10x + 5}} mistakenly uses {{5}} as the {{y}}-intercept {{c}} without substituting {{x = 2}}.",
        difficulty: "core",
        guideRef: "gradients-tangents-normals",
        hints: [
          "Evaluate {{dy/dx = 3x^2 - 2}} at {{x = 2}} to find the numerical gradient {{m_T}}.",
          "Use {{y - y_1 = m_T(x - x_1)}} with {{(x_1, y_1) = (2, 5)}}.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m1-q08",
        question: "What is the gradient of the **normal** to the curve {{y = 3x^2 - 8x + 2}} at the point where {{x = 2}}?",
        options: ["{{1/4}}", "{{4}}", "{{-4}}", "{{-1/4}}"],
        answerIndex: 3,
        explanation:
          "{{dy/dx = 6x - 8}}. At {{x = 2}}, the tangent gradient is {{m_T = 12 - 8 = 4}}. Because the normal is perpendicular to the tangent ({{m_T * m_N = -1}}), {{m_N = -1/4}}. {{4}} is the tangent gradient and {{1/4}} forgets the negative sign.",
        difficulty: "warmup",
        guideRef: "gradients-tangents-normals",
        hints: [
          "First find the tangent gradient {{m_T}} at {{x = 2}}.",
          "The normal is perpendicular to the tangent, so take the negative reciprocal {{-1/m_T}}.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m1-q09",
        question:
          "A particle moves along a straight line so that its displacement from {{O}} at time {{t}} seconds is {{s = 3t^2 - 12t + 7}} metres. Find its velocity when {{t = 5}} s.",
        options: ["{{22}} m/s", "{{6}} m/s", "{{18}} m/s", "{{30}} m/s"],
        answerIndex: 2,
        explanation:
          "Velocity is {{v = ds/dt = 6t - 12}}. At {{t = 5}}, {{v = 6(5) - 12 = 18}} m/s. {{22}} m/s comes from substituting {{t = 5}} into {{s}} without differentiating, and {{6}} comes from differentiating twice (acceleration).",
        difficulty: "warmup",
        guideRef: "kinematics-calculus",
        hints: [
          "Differentiate displacement {{s}} with respect to {{t}} to find velocity {{v = ds/dt}}.",
          "Substitute {{t = 5}} into your expression for {{v}}.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m1-q10",
        question:
          "A particle moves along a straight line with displacement {{s = t^3 - 6t^2 + 9t}} metres for {{t >= 0}}. At what time is the particle **first** at instantaneous rest?",
        options: ["{{t = 1}} s", "{{t = 3}} s", "{{t = 2}} s", "{{t = 0}} s"],
        answerIndex: 0,
        explanation:
          "Instantaneous rest means {{v = ds/dt = 0}}. Differentiating gives {{3t^2 - 12t + 9 = 3(t - 1)(t - 3) = 0}}, so {{t = 1}} s or {{t = 3}} s — first at {{t = 1}} s. {{t = 0}} s solves {{s = 0}} (at the origin), and {{t = 2}} s solves {{a = 0}}.",
        difficulty: "core",
        guideRef: "kinematics-calculus",
        hints: [
          "Instantaneous rest means velocity {{v = ds/dt = 0}} (not {{s = 0}}).",
          "Solve the quadratic {{3t^2 - 12t + 9 = 0}} and pick the smaller time.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m1-q11",
        question: "Given that {{y = (3x - 2)(x + 4)}}, find {{dy/dx}}.",
        options: ["{{6x + 10}}", "{{3x + 10}}", "{{3}}", "{{6x - 8}}"],
        answerIndex: 0,
        explanation:
          "Expand the double brackets BEFORE differentiating: {{y = 3x^2 + 12x - 2x - 8 = 3x^2 + 10x - 8}}, so {{dy/dx = 6x + 10}}. {{3}} comes from the invalid shortcut of differentiating {{(3x - 2)}} to {{3}} and {{(x + 4)}} to {{1}} and multiplying them.",
        difficulty: "core",
        guideRef: "differentiating-powers",
        hints: [
          "You cannot differentiate each bracket separately and multiply!",
          "Expand {{(3x - 2)(x + 4)}} fully into {{ax^2 + bx + c}}, then differentiate.",
        ],
        strategy: "Expand brackets before differentiating",
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m1-q12",
        question:
          "The curve {{y = 12x - x^3}} has a stationary point at {{(2, 16)}}. What is the value of {{(d^2 y)/(dx^2)}} at {{x = 2}}, and what is the nature of {{(2, 16)}}?",
        options: ["{{(d^2 y)/(dx^2) = -12}}, so it is a local minimum", "{{(d^2 y)/(dx^2) = 0}}, so the test is inconclusive", "{{(d^2 y)/(dx^2) = 12}}, so it is a local minimum", "{{(d^2 y)/(dx^2) = -12}}, so it is a local maximum"],
        answerIndex: 3,
        explanation:
          "{{dy/dx = 12 - 3x^2}}, and differentiating a second time gives {{(d^2 y)/(dx^2) = -6x}}. At {{x = 2}}, {{(d^2 y)/(dx^2) = -12 < 0}}; a negative second derivative bends downwards (∩), proving {{(2, 16)}} is a **local maximum**.",
        difficulty: "core",
        guideRef: "stationary-points-optimisation",
        hints: [
          "Differentiate {{dy/dx = 12 - 3x^2}} once more to get {{(d^2 y)/(dx^2)}}.",
          "Remember: {{(d^2 y)/(dx^2) < 0}} means a local maximum (∩).",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m1-q13",
        question:
          "A rectangle has perimeter {{36}} m and width {{x}} m, so its area is {{A = x(18 - x)}} m². Using calculus, what is the **maximum** possible area of the rectangle?",
        options: ["{{9}} m²", "{{72}} m²", "{{324}} m²", "{{81}} m²"],
        answerIndex: 3,
        explanation:
          "Expand first: {{A = 18x - x^2}}. Setting {{dA/dx = 18 - 2x = 0}} gives {{x = 9}} m. Substituting {{x = 9}} back into {{A}} gives {{9(18 - 9) = 81}} m². {{9}} is the optimal width {{x}} rather than the maximum area {{A}}.",
        difficulty: "core",
        guideRef: "stationary-points-optimisation",
        hints: [
          "Expand {{A = 18x - x^2}} and solve {{dA/dx = 0}} for {{x}}.",
          "Check what the question asks for: substitute {{x}} back into {{A}} to get the area!",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m1-q14",
        question:
          "Find the {{x}}-coordinates of all points on the curve {{y = x^3 - 12x + 5}} where the tangent is parallel to the line {{y = 15x - 4}}.",
        options: ["{{x = -1}} and {{x = 1}}", "{{x = 3}} only", "{{x = -3}} and {{x = 3}}", "{{x = -sqrt(5)}} and {{x = sqrt(5)}}"],
        answerIndex: 2,
        explanation:
          "Parallel lines have equal gradients ({{m = 15}}). Setting {{dy/dx = 3x^2 - 12 = 15}} gives {{3x^2 = 27 => x^2 = 9}}, which has **two** roots: {{x = 3}} and {{x = -3}}. Selecting {{x = 3}} only misses the negative square root.",
        difficulty: "core",
        guideRef: "gradients-tangents-normals",
        hints: [
          "What is the gradient of {{y = 15x - 4}}?",
          "Solve {{3x^2 - 12 = 15}} and remember {{x^2 = k}} has both positive and negative roots.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m1-q15",
        question:
          "A particle moves in a straight line with velocity {{v = 4t^2 - 16t + 15}} m/s at time {{t}} seconds. Find its acceleration when {{t = 3}} s.",
        options: ["{{24}} m/s²", "{{3}} m/s²", "{{8}} m/s²", "{{-8}} m/s²"],
        answerIndex: 2,
        explanation:
          "Acceleration is {{a = dv/dt = 8t - 16}}. At {{t = 3}}, {{a = 8(3) - 16 = 8}} m/s². {{3}} comes from evaluating {{v(3)}} without differentiating, while {{24}} drops the {{-16}} term.",
        difficulty: "warmup",
        guideRef: "kinematics-calculus",
        hints: [
          "Acceleration is the derivative of velocity: {{a = dv/dt}}.",
          "Differentiate {{4t^2 - 16t + 15}} with respect to {{t}}, then substitute {{t = 3}}.",
        ],
      },
    ],
  },
  {
    id: "calculus-kinematics-m2",
    title: "MCQ Paper 2 — Normals, Turning Points & Reversals",
    questions: [
      {
        kind: "mcq",
        id: "calculus-kinematics-m2-q01",
        question: "Given that {{y = 4x^(3/2) - 9/x}} for {{x > 0}}, find {{dy/dx}}.",
        options: ["{{6 sqrt(x) + 9/x^2}}", "{{6x^(5/2) + 9/x^2}}", "{{6 sqrt(x) - 9/x^2}}", "{{6/sqrt(x) + 9/x^2}}"],
        answerIndex: 0,
        explanation:
          "Rewrite {{y = 4x^(3/2) - 9x^(-1)}}. Differentiating gives {{(3/2)(4)x^(1/2) - (-1)(9)x^(-2) = 6 sqrt(x) + 9/x^2}}. {{6 sqrt(x) - 9/x^2}} misses the sign change when multiplying {{-9}} by {{-1}}.",
        difficulty: "core",
        guideRef: "differentiating-powers",
        hints: [
          "Write {{-9/x}} as {{-9x^(-1)}} before differentiating.",
          "Check {{(3/2) * 4 = 6}} with new power {{3/2 - 1 = 1/2}}, and {{-9 * (-1) = +9}}.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m2-q02",
        question: "Find the gradient of the curve {{y = 8/sqrt(x) + x^2}} at the point where {{x = 4}}.",
        options: ["{{6}}", "{{20}}", "{{8.5}}", "{{7.5}}"],
        answerIndex: 3,
        explanation:
          "Write {{y = 8x^(-1/2) + x^2}}, so {{dy/dx = -4x^(-3/2) + 2x}}. At {{x = 4}}, {{4^(3/2) = (sqrt(4))^3 = 8}}, giving {{-4/8 + 2(4) = -0.5 + 8 = 7.5}}. {{8.5}} comes from forgetting the minus sign on {{-1/2}}.",
        difficulty: "core",
        guideRef: "gradients-tangents-normals",
        hints: [
          "Rewrite {{8/sqrt(x)}} as {{8x^(-1/2)}} so {{dy/dx = -4x^(-3/2) + 2x}}.",
          "Evaluate {{4^(-3/2) = 1 / (sqrt(4))^3 = 1/8}}.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m2-q03",
        question:
          "Find the equation of the **normal** to {{y = 2x^2 - 5x + 4}} at the point {{(2, 2)}}, giving your answer in the form {{ax + by + c = 0}}.",
        options: ["{{x + 3y - 8 = 0}}", "{{3x - y - 4 = 0}}", "{{x - 3y + 4 = 0}}", "{{x + 3y - 4 = 0}}"],
        answerIndex: 0,
        explanation:
          "{{dy/dx = 4x - 5}}, so at {{x = 2}} the tangent gradient is {{m_T = 3}} and the normal gradient is {{m_N = -1/3}}. Using {{y - 2 = (-1/3)(x - 2)}} and multiplying by {{3}} gives {{3y - 6 = -x + 2 => x + 3y - 8 = 0}}. {{3x - y - 4 = 0}} is the tangent, not the normal.",
        difficulty: "core",
        guideRef: "gradients-tangents-normals",
        hints: [
          "At {{x = 2}}, find {{m_T = 4(2) - 5}}, then take {{m_N = -1/m_T}}.",
          "Write {{y - 2 = m_N(x - 2)}} and clear fractions.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m2-q04",
        question: "Find the sum of the {{y}}-coordinates of the two stationary points on {{y = 2x^3 - 9x^2 + 12x - 1}}.",
        options: ["{{9}}", "{{7}}", "{{3}}", "{{0}}"],
        answerIndex: 1,
        explanation:
          "{{dy/dx = 6x^2 - 18x + 12 = 6(x - 1)(x - 2) = 0}}, giving {{x = 1}} and {{x = 2}}. On the curve, {{y(1) = 2 - 9 + 12 - 1 = 4}} and {{y(2) = 16 - 36 + 24 - 1 = 3}}, whose sum is {{4 + 3 = 7}}. {{3}} sums the {{x}}-coordinates ({{1 + 2}}) instead!",
        difficulty: "core",
        guideRef: "stationary-points-optimisation",
        hints: [
          "Solve {{6x^2 - 18x + 12 = 0}} for the two stationary {{x}}-values.",
          "Substitute each {{x}} into {{y = 2x^3 - 9x^2 + 12x - 1}} and add the two {{y}}-values.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m2-q05",
        question: "For what set of values of {{x}} is the function {{f(x) = x^3 - 3x^2 - 9x + 7}} **decreasing**?",
        options: ["{{x < 3}}", "{{-1 < x < 3}}", "{{x < -1}} or {{x > 3}}", "{{-3 < x < 1}}"],
        answerIndex: 1,
        explanation:
          "A function is decreasing where {{f'(x) < 0}}. Here {{f'(x) = 3x^2 - 6x - 9 = 3(x - 3)(x + 1) < 0}}. Since {{3(x - 3)(x + 1)}} is a positive-∪ quadratic with roots {{-1}} and {{3}}, it is negative strictly between the roots: {{-1 < x < 3}}.",
        difficulty: "core",
        guideRef: "stationary-points-optimisation",
        hints: [
          "Decreasing means gradient {{f'(x) < 0}}.",
          "Factorise {{3x^2 - 6x - 9 < 0}} and sketch the ∪-shaped parabola of {{f'(x)}}.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m2-q06",
        question:
          "An open-topped cylindrical tin has base radius {{r}} cm, height {{h}} cm, and volume {{500 pi}} cm³. Which expression gives its outer surface area {{A}} cm² in terms of {{r}}?",
        options: ["{{pi r^2 + (1000 pi)/r}}", "{{pi r^2 + 1000/r}}", "{{pi r^2 + (500 pi)/r}}", "{{2 pi r^2 + (1000 pi)/r}}"],
        answerIndex: 0,
        explanation:
          "From {{pi r^2 h = 500 pi}}, we get {{h = 500/r^2}}. Because the tin is **open-topped**, it has only ONE circular base plus the curved wall: {{A = pi r^2 + 2 pi r h = pi r^2 + 2 pi r(500/r^2) = pi r^2 + (1000 pi)/r}}. {{2 pi r^2 + (1000 pi)/r}} mistakenly includes a lid.",
        difficulty: "core",
        guideRef: "stationary-points-optimisation",
        hints: [
          "Rearrange {{pi r^2 h = 500 pi}} to make {{h}} the subject.",
          "An open-topped cylinder has area {{pi r^2 + 2 pi r h}} (one base, not two!).",
        ],
        strategy: "Use constraint to eliminate the second variable",
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m2-q07",
        question: "Find the minimum value of {{y = x^2 + 16/x}} for {{x > 0}}.",
        options: ["{{20}}", "{{12}}", "{{8}}", "{{2}}"],
        answerIndex: 1,
        explanation:
          "{{dy/dx = 2x - 16/x^2 = 0 => 2x^3 = 16 => x^3 = 8 => x = 2}}. Since {{(d^2 y)/(dx^2) = 2 + 32/x^3 > 0}} for {{x > 0}}, this is a minimum with value {{y = 2^2 + 16/2 = 4 + 8 = 12}}. {{2}} is the {{x}}-value rather than the minimum {{y}}-value.",
        difficulty: "core",
        guideRef: "stationary-points-optimisation",
        hints: [
          "Rewrite as {{y = x^2 + 16x^(-1)}} and set {{dy/dx = 0}}.",
          "Multiply through by {{x^2}} to solve {{2x^3 = 16}}, then plug {{x}} back into {{y}}.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m2-q08",
        question:
          "A particle moves along a line so that {{s = 18t + 3t^2 - t^3}} metres for {{t >= 0}}. What is the **maximum velocity** reached by the particle?",
        options: ["{{36}} m/s", "{{21}} m/s", "{{1}} m/s", "{{18}} m/s"],
        answerIndex: 1,
        explanation:
          "Velocity is {{v = ds/dt = 18 + 6t - 3t^2}}. Maximum **velocity** occurs when {{dv/dt = a = 0}}: {{6 - 6t = 0 => t = 1}} s (with {{(d^2 v)/(dt^2) = -6 < 0}}). At {{t = 1}}, {{v = 18 + 6 - 3 = 21}} m/s. {{36}} comes from finding maximum displacement ({{v = 0}} at {{t = 3}}) instead!",
        difficulty: "core",
        guideRef: "kinematics-calculus",
        hints: [
          "First find {{v = ds/dt = 18 + 6t - 3t^2}}.",
          "To maximise **velocity**, differentiate {{v}} and set {{dv/dt = 0}} (do NOT set {{v = 0}}!).",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m2-q09",
        question:
          "A particle has displacement {{s = t^2 - 6t + 8}} metres from {{O}} at time {{t >= 0}}. Find the **speed** of the particle when it first passes through {{O}}.",
        options: ["{{-2}} m/s", "{{6}} m/s", "{{2}} m/s", "{{0}} m/s"],
        answerIndex: 2,
        explanation:
          "Passing through {{O}} means {{s = 0}}: {{(t - 2)(t - 4) = 0}}, so first at {{t = 2}} s. Velocity is {{v = 2t - 6}}, giving {{v(2) = -2}} m/s. Because **speed** is the magnitude {{|v|}}, the speed is {{2}} m/s (never negative!).",
        difficulty: "core",
        guideRef: "kinematics-calculus",
        hints: [
          "Solve {{s = 0}} to find the first time the particle is at the origin {{O}}.",
          "Evaluate {{v = ds/dt}} at that time, and remember speed is {{|v| >= 0}}.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m2-q10",
        question: "The curve {{y = k x^2 - 12x + 5}} has a stationary point at {{x = 3}}. Find the value of the constant {{k}}.",
        options: ["{{31/9}}", "{{-2}}", "{{4}}", "{{2}}"],
        answerIndex: 3,
        explanation:
          "Differentiating gives {{dy/dx = 2kx - 12}}. Since there is a stationary point at {{x = 3}}, {{2k(3) - 12 = 0 => 6k = 12 => k = 2}}. {{31/9}} comes from setting {{y = 0}} at {{x = 3}} instead of {{dy/dx = 0}}.",
        difficulty: "warmup",
        guideRef: "stationary-points-optimisation",
        hints: [
          "Find {{dy/dx}} in terms of {{k}} and {{x}}.",
          "Substitute {{x = 3}} into {{dy/dx = 0}} and solve for {{k}}.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m2-q11",
        question: "The tangent to the curve {{y = 8/x}} at the point {{(2, 4)}} crosses the {{x}}-axis at {{P}}. What are the coordinates of {{P}}?",
        options: ["{{(3, 0)}}", "{{(6, 0)}}", "{{(4, 0)}}", "{{(0, 8)}}"],
        answerIndex: 2,
        explanation:
          "{{y = 8x^(-1) => dy/dx = -8/x^2}}. At {{x = 2}}, {{m_T = -2}}, so the tangent is {{y - 4 = -2(x - 2) => y = -2x + 8}}. On the {{x}}-axis, {{y = 0 => x = 4}}, giving {{P(4, 0)}}. {{(0, 8)}} is where the tangent crosses the {{y}}-axis.",
        difficulty: "core",
        guideRef: "gradients-tangents-normals",
        hints: [
          "Find {{dy/dx = -8/x^2}} at {{x = 2}} to form the tangent equation.",
          "Set {{y = 0}} to find where the tangent meets the {{x}}-axis.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m2-q12",
        question:
          "A particle moves along a line with displacement {{s = 2t^3 - 15t^2 + 24t}} metres for {{t >= 0}}. Find the **total distance** travelled between {{t = 0}} and {{t = 3}} s.",
        options: ["{{31}} m", "{{-9}} m", "{{9}} m", "{{20}} m"],
        answerIndex: 0,
        explanation:
          "Check reversals: {{v = 6t^2 - 30t + 24 = 6(t - 1)(t - 4) = 0}}, so the particle turns around at {{t = 1}} s inside {{(0, 3)}}. Now {{s(0) = 0}}, {{s(1) = 11}} m, and {{s(3) = -9}} m. Total distance {{= |11 - 0| + |-9 - 11| = 11 + 20 = 31}} m! {{9}} m ignores the turnaround at {{t = 1}}.",
        difficulty: "challenge",
        guideRef: "kinematics-calculus",
        hints: [
          "Solve {{v = ds/dt = 0}} to check whether the particle changes direction between {{t = 0}} and {{t = 3}}.",
          "Only {{t = 1}} lies inside {{(0, 3)}}; evaluate {{s(0)}}, {{s(1)}}, and {{s(3)}}.",
          "Add {{|s(1) - s(0)| + |s(3) - s(1)|}}.",
        ],
        strategy: "Split journey at v = 0 times for total distance",
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m2-q13",
        question: "Differentiate {{y = (2x - 1)^2 / sqrt(x)}} with respect to {{x}} ({{x > 0}}).",
        options: ["{{6x^(1/2) - 2x^(-1/2) + 1/2 x^(-3/2)}}", "{{4(2x - 1) / (1/(2 sqrt(x)))}}", "{{6x^(1/2) - 2x^(-1/2) - 1/2 x^(-3/2)}}", "{{8x^(1/2) - 4x^(-1/2)}}"],
        answerIndex: 2,
        explanation:
          "Expand the top and divide each term by {{x^(1/2)}}: {{y = (4x^2 - 4x + 1)/x^(1/2) = 4x^(3/2) - 4x^(1/2) + x^(-1/2)}}. Differentiating term-by-term gives {{6x^(1/2) - 2x^(-1/2) - 1/2 x^(-3/2)}}. The {{+ 1/2 x^(-3/2)}} distractor drops the minus sign from {{-1/2}}.",
        difficulty: "challenge",
        guideRef: "differentiating-powers",
        hints: [
          "Expand {{(2x - 1)^2 = 4x^2 - 4x + 1}} first.",
          "Divide every term by {{x^(1/2)}} by subtracting {{1/2}} from each exponent.",
          "Differentiate {{4x^(3/2) - 4x^(1/2) + x^(-1/2)}} term-by-term.",
        ],
        strategy: "Expand, split and rewrite in index form",
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m2-q14",
        question:
          "A solid cuboid has dimensions {{x}} cm by {{2x}} cm by {{h}} cm and total surface area {{72}} cm². Which expression gives its volume {{V}} cm³ in terms of {{x}}?",
        options: ["{{48x - 8/3 x^3}}", "{{24x - 4/3 x^3}}", "{{24x - 4x^3}}", "{{12x - 2/3 x^3}}"],
        answerIndex: 1,
        explanation:
          "Total surface area of the 6 faces is {{2(2x^2) + 2(xh) + 2(2xh) = 4x^2 + 6xh = 72}}, so {{xh = (72 - 4x^2)/6 = 12 - 2/3 x^2}}. Volume is {{V = 2x^2 h = 2x(xh) = 2x(12 - 2/3 x^2) = 24x - 4/3 x^3}}. {{12x - 2/3 x^3}} uses {{x^2 h}} instead of {{2x^2 h}}.",
        difficulty: "challenge",
        guideRef: "stationary-points-optimisation",
        hints: [
          "Sum all 6 faces of the solid cuboid: two {{x * 2x}} faces, two {{x * h}} faces, and two {{2x * h}} faces.",
          "Equate {{4x^2 + 6xh = 72}} and rearrange for {{h}} (or {{xh}}).",
          "Substitute into {{V = 2x^2 h}} and simplify.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m2-q15",
        question:
          "On a smooth curve {{y = f(x)}}, a student finds {{dy/dx = -0.4}} at {{x = 2.9}}, {{dy/dx = 0}} at {{x = 3}}, and {{dy/dx = +0.5}} at {{x = 3.1}}. What does this prove about the point at {{x = 3}}?",
        options: ["It is a local minimum", "The curve crosses the x-axis at x = 3", "It is a local maximum", "It is a rising point of inflection"],
        answerIndex: 0,
        explanation:
          "As {{x}} increases through {{3}}, the gradient changes sign from negative (sloping down) through zero (flat) to positive (sloping up): {{- -> 0 -> +}}. That trough shape (∪) proves {{x = 3}} is a **local minimum**.",
        difficulty: "warmup",
        guideRef: "stationary-points-optimisation",
        hints: [
          "Sketch the three mini tangent slopes in order: negative (`\\`), zero (`—`), positive (`/`).",
          "Does `\\ — /` form a peak (maximum) or a trough (minimum)?",
        ],
      },
    ],
  },
  {
    id: "calculus-kinematics-m3",
    title: "MCQ Paper 3 — Grade 8–9 Exam Problem Solving",
    questions: [
      {
        kind: "mcq",
        id: "calculus-kinematics-m3-q01",
        question:
          "The curve {{y = a x^3 + b x}} passes through {{(2, 10)}} and has gradient {{21}} at {{x = 2}}. Find the values of {{a}} and {{b}}.",
        options: ["{{a = 2, b = -3}}", "{{a = 1, b = 1}}", "{{a = 3, b = -7}}", "{{a = 2, b = 3}}"],
        answerIndex: 0,
        explanation:
          "Point {{(2, 10)}} gives {{8a + 2b = 10 => 4a + b = 5}}. Differentiating gives {{dy/dx = 3ax^2 + b}}, so at {{x = 2}}: {{12a + b = 21}}. Subtracting the first equation from the second gives {{8a = 16 => a = 2}}, and {{b = 5 - 8 = -3}}.",
        difficulty: "core",
        guideRef: "gradients-tangents-normals",
        hints: [
          "Substitute {{(2, 10)}} into {{y = a x^3 + b x}} for one equation in {{a}} and {{b}}.",
          "Substitute {{x = 2}} into {{dy/dx = 3a x^2 + b = 21}} for a second equation, then solve simultaneously.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m3-q02",
        question:
          "The normal to the parabola {{y = x^2 - 4x + 7}} at {{P(3, 4)}} meets the parabola again at {{Q}}. Find the {{x}}-coordinate of {{Q}}.",
        options: ["{{-1/2}}", "{{1}}", "{{1/2}}", "{{5/2}}"],
        answerIndex: 2,
        explanation:
          "{{dy/dx = 2x - 4}}, so at {{x = 3}}, {{m_T = 2}} and {{m_N = -1/2}}. The normal is {{y - 4 = -1/2(x - 3) => y = -1/2 x + 11/2}}. Equating with {{x^2 - 4x + 7}} gives {{2x^2 - 7x + 3 = 0 => (2x - 1)(x - 3) = 0}}, so {{Q}} has {{x = 1/2}}.",
        difficulty: "challenge",
        guideRef: "gradients-tangents-normals",
        hints: [
          "Find the equation of the normal at {{(3, 4)}} using {{m_N = -1/2}}.",
          "Set the normal's {{y}} equal to {{x^2 - 4x + 7}} and multiply by {{2}}.",
          "Since {{x = 3}} is already a root ({{P}}), factor out {{(x - 3)}} to read off {{Q}}.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m3-q03",
        question:
          "A wire of total length {{60}} cm is cut and joined to form all {{12}} edges of a cuboid frame with a square base of side {{x}} cm and height {{h}} cm. Find the maximum volume enclosed by the frame.",
        options: ["{{64}} cm³", "{{125}} cm³", "{{1000}} cm³", "{{5}} cm³"],
        answerIndex: 1,
        explanation:
          "A square-based cuboid has {{8}} edges of length {{x}} (top and bottom squares) and {{4}} vertical edges of length {{h}}: {{8x + 4h = 60 => h = 15 - 2x}}. Thus {{V = x^2(15 - 2x) = 15x^2 - 2x^3}}. Setting {{dV/dx = 30x - 6x^2 = 0}} gives {{x = 5}} cm ({{x > 0}}), so max {{V = 25(5) = 125}} cm³.",
        difficulty: "challenge",
        guideRef: "stationary-points-optimisation",
        hints: [
          "Count all 12 edges carefully: 4 on the bottom square, 4 on the top square, and 4 vertical heights!",
          "Use {{8x + 4h = 60}} to express {{h = 15 - 2x}}, then form {{V = x^2 h}}.",
          "Solve {{dV/dx = 0}} for {{x > 0}} and substitute back into {{V}}.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m3-q04",
        question:
          "A particle moves along a straight line so that {{s = t^3 - 12t^2 + 36t + 5}} metres ({{t >= 0}}). What is the distance between the two points where the particle is at instantaneous rest?",
        options: ["{{32}} m", "{{37}} m", "{{4}} m", "{{42}} m"],
        answerIndex: 0,
        explanation:
          "{{v = ds/dt = 3t^2 - 24t + 36 = 3(t - 2)(t - 6) = 0}}, so rest occurs at {{t = 2}} s and {{t = 6}} s. Their positions are {{s(2) = 8 - 48 + 72 + 5 = 37}} m and {{s(6) = 216 - 432 + 216 + 5 = 5}} m. The distance between them is {{|37 - 5| = 32}} m ({{4}} is the time interval!).",
        difficulty: "core",
        guideRef: "kinematics-calculus",
        hints: [
          "Solve {{v = ds/dt = 0}} to find the two times {{t_1}} and {{t_2}}.",
          "Compute {{s(t_1)}} and {{s(t_2)}} and find {{|s(t_1) - s(t_2)|}}.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m3-q05",
        question: "Find the stationary points of the curve {{y = x + 9/x}} ({{x != 0}}) and state their natures.",
        options: ["{{(-9, -10)}} local maximum and {{(9, 10)}} local minimum", "{{(3, 6)}} only, a local minimum", "{{(3, 6)}} local maximum and {{(-3, -6)}} local minimum", "{{(-3, -6)}} local maximum and {{(3, 6)}} local minimum"],
        answerIndex: 3,
        explanation:
          "{{dy/dx = 1 - 9/x^2 = 0 => x^2 = 9 => x = 3}} or {{-3}}, giving {{(3, 6)}} and {{(-3, -6)}}. Now {{(d^2 y)/(dx^2) = 18/x^3}}: at {{x = 3}} this is {{+2/3 > 0}} (**local minimum**), and at {{x = -3}} it is {{-2/3 < 0}} (**local maximum**) — don't judge max/min just by which {{y}} looks larger across an asymptote!",
        difficulty: "challenge",
        guideRef: "stationary-points-optimisation",
        hints: [
          "Solve {{1 - 9/x^2 = 0}} remembering both {{x = 3}} and {{x = -3}}.",
          "Compute {{(d^2 y)/(dx^2) = 18/x^3}} at each {{x}} rather than guessing from {{y}}-values!",
          "Positive {{(d^2 y)/(dx^2)}} means minimum; negative means maximum.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m3-q06",
        question:
          "A sector of a circle of radius {{r}} cm and arc length {{L}} cm has perimeter {{2r + L = 20}} cm and area {{A = 1/2 r L}} cm². Find the maximum possible area of the sector.",
        options: ["{{50}} cm²", "{{100}} cm²", "{{5}} cm²", "{{25}} cm²"],
        answerIndex: 3,
        explanation:
          "Substitute {{L = 20 - 2r}} into {{A = 1/2 r(20 - 2r) = 10r - r^2}}. Setting {{dA/dr = 10 - 2r = 0}} gives {{r = 5}} cm, so maximum area is {{A = 10(5) - 25 = 25}} cm². {{5}} is the optimal radius {{r}}, not the area.",
        difficulty: "core",
        guideRef: "stationary-points-optimisation",
        hints: [
          "Eliminate {{L}} using {{L = 20 - 2r}} to write {{A}} solely in terms of {{r}}.",
          "Solve {{dA/dr = 0}} for {{r}} and substitute back into {{A}}.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m3-q07",
        question:
          "A particle moves along a line with velocity {{v = 12t - 3t^2}} m/s for {{t >= 0}}. For what range of values of {{t}} is the particle moving in the **positive direction** while **slowing down**?",
        options: ["{{t > 2}}", "{{2 < t < 4}}", "{{t > 4}}", "{{0 < t < 2}}"],
        answerIndex: 1,
        explanation:
          "Moving in the positive direction requires {{v = 3t(4 - t) > 0 => 0 < t < 4}}. While {{v > 0}}, slowing down requires negative acceleration: {{a = dv/dt = 12 - 6t < 0 => t > 2}}. Combining both inequalities gives {{2 < t < 4}} (for {{t > 4}}, {{v < 0}} and {{a < 0}}, so the particle speeds up backwards!).",
        difficulty: "challenge",
        guideRef: "kinematics-calculus",
        hints: [
          "Positive direction means {{v > 0}}: solve {{12t - 3t^2 > 0}}.",
          "When {{v > 0}}, slowing down means {{a = dv/dt < 0}}: solve {{12 - 6t < 0}}.",
          "Find the overlap of both intervals.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m3-q08",
        question: "Given that {{y = (3x^3 - 2 sqrt(x))/x}} for {{x > 0}}, find {{dy/dx}}.",
        options: ["{{9x^2 - x^(-1/2)}}", "{{6x - x^(-3/2)}}", "{{6x + 2x^(-3/2)}}", "{{6x + x^(-3/2)}}"],
        answerIndex: 3,
        explanation:
          "Divide each term by {{x}} first: {{y = 3x^2 - 2x^(1/2 - 1) = 3x^2 - 2x^(-1/2)}}. Differentiating gives {{6x - 2(-1/2)x^(-3/2) = 6x + x^(-3/2)}}. {{6x - x^(-3/2)}} misses the double negative {{-2 * (-1/2) = +1}}.",
        difficulty: "core",
        guideRef: "differentiating-powers",
        hints: [
          "Split the fraction: {{3x^3/x - 2x^(1/2)/x = 3x^2 - 2x^(-1/2)}}.",
          "Differentiate carefully: {{-2 * (-1/2) = +1}} and {{-1/2 - 1 = -3/2}}.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m3-q09",
        question:
          "Find the equation of the tangent to {{y = x^3 - 6x^2 + 13x - 5}} at the point where {{(d^2 y)/(dx^2) = 0}}.",
        options: ["{{y = -x + 7}}", "{{y = 5}}", "{{y = x - 2}}", "{{y = x + 3}}"],
        answerIndex: 3,
        explanation:
          "{{dy/dx = 3x^2 - 12x + 13}} and {{(d^2 y)/(dx^2) = 6x - 12 = 0 => x = 2}}. At {{x = 2}}, {{y = 8 - 24 + 26 - 5 = 5}} and {{m_T = 3(4) - 24 + 13 = 1}}. Tangent: {{y - 5 = 1(x - 2) => y = x + 3}}. {{y = 5}} wrongly assumes {{dy/dx = 0}} when only {{(d^2 y)/(dx^2) = 0}}!",
        difficulty: "challenge",
        guideRef: "gradients-tangents-normals",
        hints: [
          "Differentiate twice and solve {{(d^2 y)/(dx^2) = 0}} to find {{x}}.",
          "Evaluate both {{y}} and {{dy/dx}} at that {{x}} — note {{dy/dx}} is NOT zero here!",
          "Form the tangent line {{y - y_1 = m_T(x - x_1)}}.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m3-q10",
        question: "Find the coordinates of the stationary point on the curve {{y = 54/x^2 + 4x}} for {{x > 0}}.",
        options: ["{{(3, 18)}}", "{{(6, 25.5)}}", "{{(3, 0)}}", "{{(27, 108)}}"],
        answerIndex: 0,
        explanation:
          "Rewrite {{y = 54x^(-2) + 4x}}, so {{dy/dx = -108/x^3 + 4 = 0 => x^3 = 27 => x = 3}}. Substituting {{x = 3}} into {{y}} gives {{54/9 + 4(3) = 6 + 12 = 18}}, hence {{(3, 18)}}. {{(27, 108)}} forgets to take the cube root of {{27}}.",
        difficulty: "core",
        guideRef: "stationary-points-optimisation",
        hints: [
          "Write {{y = 54x^(-2) + 4x}} and set {{dy/dx = -108x^(-3) + 4 = 0}}.",
          "Take the cube root of {{27}} to get {{x}}, then substitute into {{y}}.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m3-q11",
        question:
          "Particles {{A}} and {{B}} move on a line with displacements {{s_A = t^3 - 3t^2 + 5t}} and {{s_B = 3t^2 + 5t}} metres. Find the acceleration of {{A}} at the time {{t > 0}} when {{A}} and {{B}} have the **same velocity**.",
        options: ["{{6}} m/s²", "{{18}} m/s²", "{{29}} m/s²", "{{24}} m/s²"],
        answerIndex: 1,
        explanation:
          "{{v_A = 3t^2 - 6t + 5}} and {{v_B = 6t + 5}}. Equating gives {{3t^2 - 12t = 3t(t - 4) = 0}}, so for {{t > 0}}, {{t = 4}} s. Acceleration of {{A}} is {{a_A = dv_A/dt = 6t - 6}}, which at {{t = 4}} equals {{24 - 6 = 18}} m/s². {{6}} m/s² is {{B}}'s acceleration, and {{29}} is the shared velocity.",
        difficulty: "challenge",
        guideRef: "kinematics-calculus",
        hints: [
          "Differentiate {{s_A}} and {{s_B}} to find {{v_A}} and {{v_B}}, then solve {{v_A = v_B}} for {{t > 0}}.",
          "Differentiate {{v_A}} to get {{a_A = 6t - 6}}.",
          "Substitute {{t = 4}} into {{a_A}}.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m3-q12",
        question:
          "A rectangle in the first quadrant has vertices at {{(0, 0)}}, {{(x, 0)}}, {{(x, 12 - x^2)}}, and {{(0, 12 - x^2)}} where {{0 < x < sqrt(12)}}. Find the maximum area of this rectangle.",
        options: ["{{12}}", "{{2}}", "{{16}}", "{{24}}"],
        answerIndex: 2,
        explanation:
          "Width is {{x}} and height is {{12 - x^2}}, so area {{A = x(12 - x^2) = 12x - x^3}}. Setting {{dA/dx = 12 - 3x^2 = 0}} gives {{x^2 = 4 => x = 2}} ({{x > 0}}). Maximum area {{= 2(12 - 4) = 16}} square units.",
        difficulty: "core",
        guideRef: "stationary-points-optimisation",
        hints: [
          "Write the rectangle's area as {{A = x(12 - x^2) = 12x - x^3}}.",
          "Solve {{dA/dx = 0}} for {{x > 0}} and substitute back into {{A}}.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m3-q13",
        question:
          "The straight line {{y = 6x + c}} is a tangent to the curve {{y = x^3 - 6x + 4}} at a point with a **positive** {{x}}-coordinate. Find the value of {{c}}.",
        options: ["{{12}}", "{{20}}", "{{4}}", "{{-12}}"],
        answerIndex: 3,
        explanation:
          "At the point of tangency, the curve's gradient equals {{6}}: {{3x^2 - 6 = 6 => 3x^2 = 12 => x = 2}} (since {{x > 0}}). On the curve at {{x = 2}}, {{y = 8 - 12 + 4 = 0}}, so {{(2, 0)}} lies on {{y = 6x + c}}, giving {{0 = 12 + c => c = -12}}. ({{20}} comes from using {{x = -2}}.)",
        difficulty: "challenge",
        guideRef: "gradients-tangents-normals",
        hints: [
          "Equate {{dy/dx = 3x^2 - 6}} to the line's gradient {{6}} and pick the positive root {{x}}.",
          "Find the curve's {{y}}-coordinate at that {{x}} to get the point of tangency.",
          "Substitute that point into {{y = 6x + c}} to find {{c}}.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m3-q14",
        question:
          "A particle moves along a straight line with displacement {{s = 32t - t^4}} metres for {{t >= 0}}. Find the **total distance** travelled by the particle from {{t = 0}} to {{t = 3}} s.",
        options: ["{{48}} m", "{{15}} m", "{{81}} m", "{{63}} m"],
        answerIndex: 2,
        explanation:
          "Velocity is {{v = 32 - 4t^3 = 0 => t^3 = 8 => t = 2}} s (a reversal inside {{(0, 3)}}). Evaluating positions: {{s(0) = 0}}, {{s(2) = 64 - 16 = 48}} m, and {{s(3) = 96 - 81 = 15}} m. Total distance {{= |48 - 0| + |15 - 48| = 48 + 33 = 81}} m ({{15}} m is only net displacement!).",
        difficulty: "challenge",
        guideRef: "kinematics-calculus",
        hints: [
          "Solve {{v = ds/dt = 32 - 4t^3 = 0}} to find where the particle reverses direction.",
          "Evaluate {{s(0)}}, {{s(2)}}, and {{s(3)}}.",
          "Add the forward leg {{|s(2) - s(0)|}} and the return leg {{|s(3) - s(2)|}}.",
        ],
      },
      {
        kind: "mcq",
        id: "calculus-kinematics-m3-q15",
        question:
          "A solid closed cylinder of radius {{r}} cm and height {{h}} cm has total surface area {{54 pi}} cm². Find the maximum possible volume of the cylinder.",
        options: ["{{36 pi}} cm³", "{{27 pi}} cm³", "{{54 pi}} cm³", "{{81 pi}} cm³"],
        answerIndex: 2,
        explanation:
          "From {{2 pi r^2 + 2 pi r h = 54 pi}}, divide by {{2 pi r}}: {{h = (27 - r^2)/r}}. Then {{V = pi r^2 h = 27 pi r - pi r^3}}. Setting {{dV/dr = 27 pi - 3 pi r^2 = 0}} gives {{r^2 = 9 => r = 3}} cm, so max {{V = 27 pi(3) - pi(27) = 54 pi}} cm³.",
        difficulty: "challenge",
        guideRef: "stationary-points-optimisation",
        hints: [
          "Use {{2 pi r^2 + 2 pi r h = 54 pi}} to write {{r h = 27 - r^2}}.",
          "Substitute into {{V = pi r(r h) = 27 pi r - pi r^3}}.",
          "Solve {{dV/dr = 0}} for {{r > 0}} and evaluate {{V}}.",
        ],
      },
    ],
  },
];
