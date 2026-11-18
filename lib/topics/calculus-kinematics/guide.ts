import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "calculus-kinematics",
  title: "Differentiation & Kinematics",
  strand: "Functions & Calculus",
  icon: "🚀",
  summary: "Instantaneous rates of change — from curves and tangents to turning points, optimisation and particle motion.",
  intro:
    "Straight lines have one fixed gradient everywhere, but curves bend — their steepness changes at every point. **Differentiation** gives us a formula, {{dy/dx}}, for the exact instantaneous gradient at any point on a curve, unlocking tangents, normals, maximum/minimum optimisation, and the calculus of moving particles ({{s -> v -> a}}).",
  guide: [
    {
      id: "differentiating-powers",
      heading: "Differentiating powers of x (dy/dx)",
      discovery: {
        problem:
          "On the parabola {{y = x^2}}, calculate the chord gradient between {{x = 3}} and {{x = 3.1}}, then between {{x = 3}} and {{x = 3.01}}, then between {{x = 3}} and {{x = 3 + h}}. What value do these chord gradients approach as {{h -> 0}}, and how does that compare to {{2x}}?",
        idea:
          "Between {{x = 3}} and {{x = 3 + h}}, the gradient is {{((3 + h)^2 - 9)/h = (6h + h^2)/h = 6 + h}}. As {{h -> 0}}, the chord becomes the tangent with exact gradient **6** — which is {{2(3)}}. In general, the derivative of {{x^n}} is {{n x^(n - 1)}}.",
      },
      body:
        "For any term written in **index form** {{a x^n}}, the **power rule** differentiates term-by-term:\n\n    If {{y = a x^n}}, then {{dy/dx = n a x^(n - 1)}}\n\n- **Multiply by the current power**, then **subtract 1 from the power**.\n- **Linear terms**: {{d/dx(k x) = k}} because {{x^1 -> 1 * x^0 = 1}}.\n- **Constants vanish**: {{d/dx(c) = 0}} because the line {{y = c}} is horizontal (gradient 0).\n\n> **Golden Rule — Rewrite BEFORE Differentiating!** Edexcel does not use product or quotient rules on 4MA1. Every expression MUST first be rewritten as a sum of {{a x^n}} terms before you write {{dy/dx =}}:\n\n| Raw Expression | Index Form ({{y =}}) | Derivative ({{dy/dx =}}) |\n|---|---|---|\n| {{5/x^2}} | {{5 x^(-2)}} | {{-10 x^(-3) = -10/x^3}} |\n| {{6 sqrt(x)}} | {{6 x^(1/2)}} | {{3 x^(-1/2) = 3/sqrt(x)}} |\n| {{(x^3 - 4)/x^2}} | {{x^3/x^2 - 4/x^2 = x - 4 x^(-2)}} | {{1 + 8 x^(-3) = 1 + 8/x^3}} |\n| {{(2x - 3)(x + 4)}} | {{2x^2 + 5x - 12}} | {{4x + 5}} |\n\n- Be extra careful subtracting 1 from negative or fractional indices: {{-2 - 1 = -3}} (not {{-1}}!) and {{1/2 - 1 = -1/2}}.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 200" role="img" aria-label="Secant chords on y equals x squared approaching the tangent line at P as h tends to zero"><rect x="0" y="0" width="420" height="200" rx="12" fill="#f8fafc"/><line x1="45" y1="168" x2="390" y2="168" stroke="#475569" stroke-width="1.6"/><line x1="65" y1="182" x2="65" y2="18" stroke="#475569" stroke-width="1.6"/><path d="M 65 168 Q 195 166 335 22" fill="none" stroke="#2563eb" stroke-width="2.8"/><line x1="125" y1="176" x2="345" y2="18" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="5 4"/><line x1="115" y1="168" x2="365" y2="44" stroke="#dc2626" stroke-width="2.3"/><circle cx="215" cy="118" r="4.5" fill="#dc2626"/><circle cx="310" cy="43" r="4" fill="#64748b"/><line x1="215" y1="118" x2="310" y2="118" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/><line x1="310" y1="118" x2="310" y2="43" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/><text x="205" y="110" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="end">P(x, y)</text><text x="318" y="42" font-size="11" fill="#475569">Q(x + h, y + δy)</text><text x="262" y="133" font-size="11" fill="#475569" text-anchor="middle">h → 0</text><text x="368" y="62" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="end">Tangent: gradient dy/dx</text><text x="292" y="26" font-size="12" font-weight="bold" fill="#2563eb">y = f(x)</text></svg>',
      diagramCaption: "As Q slides along the curve towards P (h → 0), the secant chord rotates into the tangent with exact gradient dy/dx.",
      workedExamples: [
        {
          title: "Negative powers & splitting a fraction first",
          problem: "Given that {{y = (2x^4 - 5x + 6)/x^2}}, find {{dy/dx}}.",
          steps: [
            "Split over the single denominator BEFORE differentiating: {{y = 2x^4/x^2 - 5x/x^2 + 6/x^2}}.",
            "Rewrite every term as {{a x^n}}: {{y = 2x^2 - 5x^(-1) + 6x^(-2)}}.",
            "Differentiate term-by-term: {{dy/dx = 2(2)x^(2 - 1) - (-1)(5)x^(-1 - 1) + (-2)(6)x^(-2 - 1)}}.",
            "Tidy signs: {{dy/dx = 4x + 5x^(-2) - 12x^(-3)}} (or {{4x + 5/x^2 - 12/x^3}}).",
          ],
          answer: "{{dy/dx = 4x + 5/x^2 - 12/x^3}}",
          yourTurn: {
            question: "Given that {{y = (x^4 - 6)/x^2}}, find {{dy/dx}} in terms of {{x}}.",
            answer: { type: "expression", expr: "2x + 12/x^3", form: "simplified", display: "{{2x + 12/x^3}}" },
            solution: "Rewrite first: {{y = x^2 - 6x^(-2)}}. Differentiate: {{dy/dx = 2x + 12x^(-3) = 2x + 12/x^3}}.",
          },
        },
        {
          title: "Fractional powers (roots)",
          problem: "Find {{dy/dx}} when {{y = 8 sqrt(x) - 3x^2 + 9}}.",
          steps: [
            "Rewrite the square root in index form: {{y = 8x^(1/2) - 3x^2 + 9}}.",
            "Apply the power rule ({{9 -> 0}}): {{dy/dx = (1/2)(8)x^(1/2 - 1) - 2(3)x^(2 - 1) + 0}}.",
            "Simplify: {{dy/dx = 4x^(-1/2) - 6x = 4/sqrt(x) - 6x}}.",
          ],
          answer: "{{dy/dx = 4/sqrt(x) - 6x}}",
        },
      ],
      keyPoints: [
        "Always expand brackets, split fractions, and convert roots/reciprocals into {{a x^n}} BEFORE differentiating.",
        "Keep writing {{y =}} while simplifying algebraically; switch to {{dy/dx =}} on the exact line you differentiate.",
        "Subtracting 1 makes negative powers MORE negative ({{x^(-2) -> -2x^(-3)}}).",
        "Standalone constants (including numbers like {{pi^2}} or {{-17}}) differentiate to {{0}}.",
      ],
      whyItWorks:
        "By the binomial expansion, {{(x + h)^n = x^n + n x^(n - 1) h + ...}} where all remaining terms contain {{h^2}} or higher. Dividing {{(x + h)^n - x^n}} by {{h}} leaves {{n x^(n - 1) + (terms with h)}}, which tends to {{n x^(n - 1)}} as {{h -> 0}}.",
      strategies: ["Rewrite in index form a·xⁿ first", "Split fractions over a monomial denominator"],
      thinkDeeper:
        "Two different curves have the exact same derivative {{dy/dx = 6x^2 - 4x}}. How can their equations differ, and what geometric transformation links one curve to the other?",
    },
    {
      id: "gradients-tangents-normals",
      heading: "Gradients of curves, tangents & normals",
      discovery: {
        problem:
          "On the curve {{y = x^3 - 5x + 4}}, what is the gradient at {{x = 2}}? A straight line touches the curve at {{(2, 2)}} with that exact gradient, while a second line passes through {{(2, 2)}} at {{90}}° to the first. Find both equations.",
        idea:
          "{{dy/dx = 3x^2 - 5}}. At {{x = 2}}, the tangent gradient is {{m_T = 3(4) - 5 = 7}}, giving tangent {{y - 2 = 7(x - 2) => y = 7x - 12}}. The perpendicular **normal** has gradient {{m_N = -1/7}}, giving {{y - 2 = (-1/7)(x - 2)}} or {{x + 7y = 16}}.",
      },
      body:
        "Think of {{dy/dx}} as a **gradient machine**: feed it an {{x}}-coordinate and out comes the instantaneous steepness of the curve at that point.\n\n1. **Gradient at a given point {{x = a}}**: differentiate to get {{dy/dx}}, then substitute {{x = a}}.\n2. **Points with a given gradient {{m}}**: set {{dy/dx = m}}, solve the resulting equation for {{x}}, then substitute each {{x}} back into the **original curve {{y = f(x)}}** to get the {{y}}-coordinates.\n3. **Equation of the Tangent at {{(x_1, y_1)}}**:\n   - Tangent gradient {{m_T = dy/dx}} evaluated at {{x = x_1}}.\n   - Straight line: {{y - y_1 = m_T(x - x_1)}}.\n4. **Equation of the Normal at {{(x_1, y_1)}}**:\n   - The **normal** is perpendicular to the tangent at {{(x_1, y_1)}}, so {{m_T * m_N = -1}}, i.e. {{m_N = -1/m_T}} (negative reciprocal).\n   - Straight line: {{y - y_1 = m_N(x - x_1)}}.\n\n> **Exam Alert**: {{m_T}} inside a straight-line equation MUST be a **constant number**, never an algebraic formula in {{x}}. Substitute {{x = x_1}} into {{dy/dx}} first!",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 210" role="img" aria-label="Curve with tangent line and perpendicular normal line meeting at 90 degrees at point P"><rect x="0" y="0" width="420" height="210" rx="12" fill="#f8fafc"/><line x1="35" y1="175" x2="390" y2="175" stroke="#475569" stroke-width="1.5"/><line x1="65" y1="192" x2="65" y2="18" stroke="#475569" stroke-width="1.5"/><path d="M 55 160 Q 175 170 325 25" fill="none" stroke="#2563eb" stroke-width="2.8"/><line x1="105" y1="186" x2="335" y2="33" stroke="#16a34a" stroke-width="2.3"/><line x1="145" y1="26" x2="295" y2="251" stroke="#9333ea" stroke-width="2.1" stroke-dasharray="6 4"/><polygon points="220,109.7 230,103 236.7,113 226.7,119.7" fill="none" stroke="#0f172a" stroke-width="1.4"/><circle cx="220" cy="109.7" r="4.5" fill="#0f172a"/><text x="208" y="102" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="end">P(x₁, y₁)</text><text x="338" y="48" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="end">Tangent (m_T)</text><text x="155" y="42" font-size="12" font-weight="bold" fill="#9333ea">Normal (m_N = −1/m_T)</text><text x="290" y="25" font-size="12" font-weight="bold" fill="#2563eb">y = f(x)</text></svg>',
      diagramCaption: "At P(x₁, y₁), the tangent touches the curve with gradient m_T, and the normal cuts perpendicular to it with gradient m_N = −1/m_T.",
      workedExamples: [
        {
          title: "Finding points where the curve has a given gradient",
          problem: "Find the coordinates of the two points on {{y = x^3 - 3x^2 - 5x + 12}} where the gradient is {{4}}.",
          steps: [
            "Differentiate: {{dy/dx = 3x^2 - 6x - 5}}.",
            "Set gradient equal to {{4}}: {{3x^2 - 6x - 5 = 4 => 3x^2 - 6x - 9 = 0}}.",
            "Divide by {{3}} and factorise: {{x^2 - 2x - 3 = 0 => (x - 3)(x + 1) = 0}}, so {{x = 3}} or {{x = -1}}.",
            "Substitute into original {{y}}: at {{x = 3}}, {{y = 27 - 27 - 15 + 12 = -3}}; at {{x = -1}}, {{y = -1 - 3 + 5 + 12 = 13}}.",
          ],
          answer: "{{(3, -3)}} and {{(-1, 13)}}",
        },
        {
          title: "Equation of a normal in integer form",
          problem: "Find the equation of the normal to {{y = x^2 - 6x + 11}} at the point where {{x = 4}}, giving your answer in the form {{y = mx + c}}.",
          steps: [
            "Find {{y_1}} from the curve: {{y = 4^2 - 6(4) + 11 = 16 - 24 + 11 = 3}}, so the point is {{(4, 3)}}.",
            "Differentiate for tangent gradient: {{dy/dx = 2x - 6}}. At {{x = 4}}, {{m_T = 2(4) - 6 = 2}}.",
            "Perpendicular normal gradient: {{m_N = -1/2}}.",
            "Line equation: {{y - 3 = (-1/2)(x - 4) => y = -1/2 x + 5}}.",
          ],
          answer: "{{y = -1/2 x + 5}}",
          yourTurn: {
            question: "Find the equation of the tangent to {{y = x^2 - 4x + 7}} at the point where {{x = 3}}. Give the right-hand side of {{y = ...}}.",
            answer: { type: "expression", expr: "2x - 2", form: "simplified", display: "{{2x - 2}}" },
            solution: "At {{x = 3}}, {{y = 9 - 12 + 7 = 4}}. {{dy/dx = 2x - 4}}, so at {{x = 3}}, {{m_T = 2}}. Tangent: {{y - 4 = 2(x - 3) => y = 2x - 2}}.",
          },
        },
      ],
      keyPoints: [
        "Need {{y}}? Plug {{x}} into {{y = f(x)}}. Need gradient {{m}}? Plug {{x}} into {{dy/dx}}.",
        "Tangent shares the curve's gradient {{m_T}}; normal uses the negative reciprocal {{m_N = -1/m_T}}.",
        "If asked for {{ax + by + c = 0}} with integer coefficients, multiply through by the fraction denominator first.",
      ],
      whyItWorks:
        "Rotating a gradient triangle (run {{1}}, rise {{m_T}}) by {{90}}° turns the horizontal run into a vertical fall of {{-1}} and the vertical rise into a horizontal run of {{m_T}}, giving perpendicular gradient {{-1/m_T}}.",
      strategies: ["Find (x₁, y₁) first, then numerical m, then y − y₁ = m(x − x₁)", "Negative reciprocal for perpendicular normals"],
      thinkDeeper:
        "What happens to the tangent and normal at a point where {{dy/dx = 0}}? Why can you NOT compute {{-1/0}}, yet the normal line still has a simple equation?",
    },
    {
      id: "stationary-points-optimisation",
      heading: "Stationary points (max/min) & optimisation",
      discovery: {
        problem:
          "You have {{40}} m of fencing to enclose a rectangular enclosure against a long straight brick wall (so only 3 sides need fencing: two widths of {{x}} m and one length). What choice of {{x}} gives the largest enclosed area?",
        idea:
          "The side parallel to the wall has length {{40 - 2x}}, so area {{A = x(40 - 2x) = 40x - 2x^2}}. At the peak of the curve, the gradient is momentarily flat: {{dA/dx = 40 - 4x = 0 => x = 10}} m, giving maximum area {{10 * 20 = 200}} m².",
      },
      body:
        "A **stationary point** (or **turning point** on quadratics/cubics) is a point on a curve where the tangent is horizontal, meaning:\n\n    {{dy/dx = 0}}\n\n### Determining the Nature (Maximum vs Minimum)\nEdexcel awards a dedicated justification mark — you MUST show *why* a stationary point is a maximum or minimum using one of these rigorous tests:\n\n| Test | Local Maximum (∩ peak) | Local Minimum (∪ trough) |\n|---|---|---|\n| **Sign of {{dy/dx}} either side of {{x = a}}** | {{+ -> 0 -> -}} (up, flat, down) | {{- -> 0 -> +}} (down, flat, up) |\n| **Second derivative {{(d^2 y)/(dx^2)}}** | {{(d^2 y)/(dx^2) < 0}} (negative) | {{(d^2 y)/(dx^2) > 0}} (positive) |\n| **Shape of cubic {{a x^3 + ...}} ({{a > 0}})** | Left-hand turning point (smaller {{x}}) | Right-hand turning point (larger {{x}}) |\n\n### 4-Step Calculus Optimisation Recipe\n1. **Express in one variable**: use the given constraint (perimeter, surface area, sum) to eliminate the second letter (e.g. write {{h}} in terms of {{x}}) and **show clearly** every algebraic step to obtain the given formula {{V = ...}} or {{A = ...}}.\n2. **Differentiate**: expand/simplify into {{a x^n}} form and find {{dV/dx}} or {{dA/dx}}.\n3. **Solve {{dV/dx = 0}}**: reject physically impossible roots (such as {{x <= 0}}).\n4. **Answer the exact question & justify**: find the optimal {{x}} OR the maximum/minimum value of {{V}} as requested, and verify max/min.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 210" role="img" aria-label="Cubic curve showing a local maximum with positive then zero then negative gradient and a local minimum with negative then zero then positive gradient"><rect x="0" y="0" width="420" height="210" rx="12" fill="#f8fafc"/><line x1="30" y1="175" x2="395" y2="175" stroke="#475569" stroke-width="1.5"/><line x1="60" y1="195" x2="60" y2="15" stroke="#475569" stroke-width="1.5"/><path d="M 65 182 C 110 35, 165 35, 215 108 C 265 181, 320 181, 365 30" fill="none" stroke="#2563eb" stroke-width="3"/><line x1="98" y1="60" x2="178" y2="60" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="5 3"/><line x1="252" y1="156" x2="332" y2="156" stroke="#16a34a" stroke-width="2.2" stroke-dasharray="5 3"/><circle cx="138" cy="60" r="5" fill="#dc2626"/><circle cx="292" cy="156" r="5" fill="#16a34a"/><text x="138" y="46" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">Local Max (dy/dx = 0)</text><text x="138" y="78" font-size="11" fill="#dc2626" text-anchor="middle">+ → 0 → −  |  d²y/dx² &lt; 0</text><text x="292" y="143" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="middle">Local Min (dy/dx = 0)</text><text x="292" y="193" font-size="11" fill="#16a34a" text-anchor="middle">− → 0 → +  |  d²y/dx² &gt; 0</text></svg>',
      diagramCaption: "At a local maximum, dy/dx changes from + to − (d²y/dx² < 0); at a local minimum, dy/dx changes from − to + (d²y/dx² > 0).",
      workedExamples: [
        {
          title: "Finding & classifying stationary points of a cubic",
          problem: "Find the coordinates of the two stationary points on {{y = x^3 - 6x^2 + 9x + 2}} and determine the nature of each.",
          steps: [
            "Differentiate: {{dy/dx = 3x^2 - 12x + 9}}.",
            "For stationary points, {{dy/dx = 0}}: {{3(x^2 - 4x + 3) = 0 => 3(x - 1)(x - 3) = 0}}, so {{x = 1}} or {{x = 3}}.",
            "Find {{y}} from the curve: at {{x = 1}}, {{y = 1 - 6 + 9 + 2 = 6}}; at {{x = 3}}, {{y = 27 - 54 + 27 + 2 = 2}}.",
            "Second derivative: {{(d^2 y)/(dx^2) = 6x - 12}}. At {{x = 1}}, {{6(1) - 12 = -6 < 0}} (maximum); at {{x = 3}}, {{6(3) - 12 = +6 > 0}} (minimum).",
          ],
          answer: "{{(1, 6)}} is a local maximum; {{(3, 2)}} is a local minimum.",
        },
        {
          title: "3D Box Optimisation ('Show that' + Maximum Volume)",
          problem:
            "An open-topped cuboid tank has a square base of side {{x}} cm, height {{h}} cm, and outer surface area {{108}} cm². Show that {{V = 27x - 1/4 x^3}}, and find the maximum volume of the tank.",
          steps: [
            "Open top means 1 square base + 4 vertical walls: {{x^2 + 4xh = 108}}, so {{h = (108 - x^2)/(4x)}}.",
            "Substitute into {{V = x^2 h}}: {{V = x^2 * (108 - x^2)/(4x) = x(108 - x^2)/4 = 27x - 1/4 x^3}} (shown).",
            "Differentiate and set {{dV/dx = 0}}: {{dV/dx = 27 - 3/4 x^2 = 0 => x^2 = 36 => x = 6}} cm (since {{x > 0}}).",
            "Maximum volume: {{V = 27(6) - 1/4 (216) = 162 - 54 = 108}} cm³. Since {{(d^2 V)/(dx^2) = -3/2 x = -9 < 0}}, it is a maximum.",
          ],
          answer: "{{108}} cm³ (when {{x = 6}} cm)",
          yourTurn: {
            question: "The volume of a container is {{V = 48x - x^3}} for {{x > 0}}. Find the maximum value of {{V}}.",
            answer: { type: "number", value: 128 },
            solution: "{{dV/dx = 48 - 3x^2 = 0 => x^2 = 16 => x = 4}} (since {{x > 0}}). Max {{V = 48(4) - 4^3 = 192 - 64 = 128}}.",
          },
        },
      ],
      keyPoints: [
        "Always write the statement `'For stationary points, dy/dx = 0'` to secure the first method mark.",
        "Substitute stationary {{x}}-values back into {{y = f(x)}} for coordinates — plugging into {{dy/dx}} just gives {{0}}!",
        "Negative second derivative ({{< 0}}) means **maximum** (sad parabola ∩); positive ({{> 0}}) means **minimum** (happy parabola ∪).",
        "In 'Show that {{V = ...}}' questions, write out the constraint equation for {{h}} explicitly before substituting.",
      ],
      whyItWorks:
        "If a smooth function rises to a peak and then falls, its gradient must pass from positive ({{> 0}}) through zero ({{= 0}}) to negative ({{< 0}}). Because {{dy/dx}} is decreasing through that point, its rate of change {{(d^2 y)/(dx^2)}} is negative.",
      strategies: ["Use constraint to eliminate the second variable", "Test gradient signs or d²y/dx² to justify nature"],
      thinkDeeper:
        "Check {{y = x^3}} at {{x = 0}}: {{dy/dx = 3x^2 = 0}} and {{(d^2 y)/(dx^2) = 6x = 0}}. Test the sign of {{dy/dx}} at {{x = -0.1}} and {{x = +0.1}} — why is {{(0, 0)}} neither a maximum nor a minimum?",
    },
    {
      id: "kinematics-calculus",
      heading: "Kinematics: displacement s, velocity v & acceleration a",
      discovery: {
        problem:
          "A particle moves along a line so its displacement from {{O}} at time {{t}} s is {{s = 8t - t^2}} metres. Find {{s(0)}}, {{s(4)}}, and {{s(6)}}. Why is the net displacement at {{t = 6}} only {{12}} m even though the particle walked further than {{12}} m?",
        idea:
          "Velocity is {{v = ds/dt = 8 - 2t}}, which hits {{0}} at {{t = 4}} s! The particle travels forward from {{s(0) = 0}} to {{s(4) = 16}} m ({{16}} m), stops instantaneously, and reverses back to {{s(6) = 12}} m (another {{4}} m) — so **total distance** is {{16 + 4 = 20}} m while **net displacement** is {{12}} m.",
      },
      body:
        "When a particle moves in a straight line through a fixed origin {{O}}, differentiating with respect to time {{t}} steps down the **S–V–A ladder**:\n\n    {{s(t)}} (displacement)  {{->}}  {{v = ds/dt}} (velocity)  {{->}}  {{a = dv/dt}} (acceleration)\n\n### Decoding Edexcel Kinematics Vocabulary\n\n| Exam Phrase | Mathematical Translation |\n|---|---|\n| **'Initially' / 'at the start'** | Set {{t = 0}} |\n| **'Passes through / returns to {{O}}'** | Set displacement {{s = 0}} |\n| **'Instantaneous rest' / 'changes direction'** | Set velocity {{v = ds/dt = 0}} |\n| **'Maximum / minimum displacement'** | Solve {{ds/dt = 0}} (i.e. {{v = 0}}) |\n| **'Maximum / minimum velocity'** | Solve {{dv/dt = 0}} (i.e. {{a = 0}}) |\n| **'Speed'** | Magnitude of velocity {{|v|}} (always non-negative) |\n\n### Total Distance vs Net Displacement (The Reversal Trap!)\nTo find **total distance travelled** between {{t = t_1}} and {{t = t_2}}:\n1. Solve {{v = ds/dt = 0}} to see if the particle turns around at any time {{t_*}} strictly inside {{(t_1, t_2)}}.\n2. Evaluate {{s}} at the endpoints AND at every turning time {{t_*}}.\n3. Add the **absolute lengths** of each leg: {{|s(t_*) - s(t_1)| + |s(t_2) - s(t_*)|}}.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 185" role="img" aria-label="Particle motion number line showing turnaround at v equals zero comparing net displacement with total distance travelled"><rect x="0" y="0" width="440" height="185" rx="12" fill="#f8fafc"/><line x1="40" y1="125" x2="400" y2="125" stroke="#334155" stroke-width="2"/><circle cx="75" cy="125" r="5" fill="#0f172a"/><text x="75" y="148" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">O (s = 0, t = 0)</text><path d="M 75 95 L 355 95 C 378 95, 378 62, 355 62 L 255 62" fill="none" stroke="#2563eb" stroke-width="2.8"/><polygon points="255,62 265,57 265,67" fill="#2563eb"/><circle cx="366" cy="78.5" r="5" fill="#dc2626"/><text x="366" y="42" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">Turnaround (v = 0)</text><text x="366" y="148" font-size="12" fill="#dc2626" text-anchor="middle">s = 16 m (t = 4)</text><circle cx="255" cy="125" r="4.5" fill="#16a34a"/><text x="255" y="148" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="middle">s = 12 m (t = 6)</text><text x="215" y="112" font-size="11" fill="#2563eb" text-anchor="middle">Leg 1: +16 m forward</text><text x="308" y="54" font-size="11" fill="#2563eb" text-anchor="middle">Leg 2: 4 m back</text><text x="220" y="173" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Displacement = 12 m   vs   Total Distance = 16 + 4 = 20 m</text></svg>',
      diagramCaption: "When v = 0 inside the interval, the particle reverses direction: add each leg separately for total distance.",
      workedExamples: [
        {
          title: "Velocity, instantaneous rest & acceleration",
          problem:
            "A particle moves along a straight line so that {{s = t^3 - 9t^2 + 24t}} metres for {{t >= 0}}. Find (a) the times when the particle is at instantaneous rest, and (b) the acceleration at each of those times.",
          steps: [
            "Differentiate {{s}} for velocity: {{v = ds/dt = 3t^2 - 18t + 24}}.",
            "Set {{v = 0}} for instantaneous rest: {{3(t^2 - 6t + 8) = 0 => 3(t - 2)(t - 4) = 0}}, so {{t = 2}} s and {{t = 4}} s.",
            "Differentiate {{v}} for acceleration: {{a = dv/dt = 6t - 18}}.",
            "At {{t = 2}}, {{a = 6(2) - 18 = -6}} m/s²; at {{t = 4}}, {{a = 6(4) - 18 = 6}} m/s².",
          ],
          answer: "(a) {{t = 2}} s and {{t = 4}} s; (b) {{-6}} m/s² and {{6}} m/s²",
        },
        {
          title: "Total distance travelled across two reversals",
          problem:
            "For the same particle with {{s = t^3 - 9t^2 + 24t}}, find the **total distance** travelled in the first {{5}} seconds ({{0 <= t <= 5}}).",
          steps: [
            "From {{v = 3(t - 2)(t - 4) = 0}}, the particle turns around at {{t = 2}} and {{t = 4}} (both inside {{0 <= t <= 5}}).",
            "Evaluate {{s}} at {{t = 0, 2, 4, 5}}: {{s(0) = 0}}, {{s(2) = 8 - 36 + 48 = 20}}, {{s(4) = 64 - 144 + 96 = 16}}, {{s(5) = 125 - 225 + 120 = 20}}.",
            "Sum the three leg lengths: {{|20 - 0| + |16 - 20| + |20 - 16| = 20 + 4 + 4 = 28}} m.",
          ],
          answer: "{{28}} m",
          yourTurn: {
            question: "A particle has displacement {{s = 12t - t^3}} m for {{t >= 0}}. Find the total distance travelled between {{t = 0}} and {{t = 3}}.",
            answer: { type: "number", value: 23 },
            solution: "{{v = 12 - 3t^2 = 0 => t = 2}} s. {{s(0) = 0}}, {{s(2) = 24 - 8 = 16}}, {{s(3) = 36 - 27 = 9}}. Total distance {{= |16 - 0| + |9 - 16| = 16 + 7 = 23}} m.",
          },
        },
      ],
      keyPoints: [
        "Differentiate down the S–V–A ladder: {{v = ds/dt}} and {{a = dv/dt}} (never use SUVAT unless acceleration {{a}} is constant!).",
        "Instantaneous rest ALWAYS means {{v = 0}}, NOT {{s = 0}} and NOT {{a = 0}}.",
        "Negative velocity means moving backwards (towards negative {{s}}); negative acceleration means velocity is decreasing.",
        "Always check for {{v = 0}} turning times before calculating total distance travelled!",
      ],
      whyItWorks:
        "Average velocity over a tiny time step {{delta t}} is {{(delta s)/(delta t)}}. Letting {{delta t -> 0}} gives instantaneous velocity {{ds/dt}}, and repeating the exact same limit on {{(delta v)/(delta t)}} gives instantaneous acceleration {{dv/dt}}.",
      strategies: ["Differentiate down S → V → A", "Split journey at v = 0 times for total distance"],
      thinkDeeper:
        "Can a particle have zero velocity ({{v = 0}}) and non-zero acceleration ({{a != 0}}) at the exact same instant? Give a real-world example of throwing an object vertically into the air.",
    },
  ],
  learn: {
    flashcards: [
      { front: "What is the derivative {{dy/dx}} of {{y = a x^n}}?", back: "{{dy/dx = n a x^(n - 1)}} (multiply by the power, reduce the power by 1)." },
      { front: "What does any constant {{c}} differentiate to?", back: "{{0}} — because {{y = c}} is a horizontal line with gradient zero." },
      { front: "How do you prepare {{y = k/x^n}} and {{y = sqrt(x)}} for differentiation?", back: "Rewrite in index form FIRST: {{k x^(-n)}} and {{x^(1/2)}}." },
      { front: "How do you differentiate {{y = (x^3 - 5)/x^2}}?", back: "Split over the denominator first: {{y = x - 5x^(-2)}}, then {{dy/dx = 1 + 10x^(-3)}}." },
      { front: "How is the normal gradient {{m_N}} related to the tangent gradient {{m_T}}?", back: "Perpendicular: {{m_T * m_N = -1}}, so {{m_N = -1/m_T}} (negative reciprocal)." },
      { front: "What is the condition for a stationary (turning) point?", back: "{{dy/dx = 0}} (gradient of the curve is zero)." },
      { front: "How does {{(d^2 y)/(dx^2)}} distinguish a maximum from a minimum?", back: "{{(d^2 y)/(dx^2) < 0}} ⇒ local **maximum**; {{(d^2 y)/(dx^2) > 0}} ⇒ local **minimum**." },
      { front: "How do gradient signs around {{x = a}} show a local maximum?", back: "{{dy/dx}} goes {{+ -> 0 -> -}} (rising before {{a}}, flat at {{a}}, falling after {{a}})." },
      { front: "In kinematics, how do you get {{v}} and {{a}} from displacement {{s(t)}}?", back: "Differentiate with respect to {{t}}: {{v = ds/dt}} and {{a = dv/dt}}." },
      { front: "What do 'initially', 'at O', and 'instantaneous rest' mean in kinematics?", back: "Initially: {{t = 0}}. At origin {{O}}: {{s = 0}}. Instantaneous rest: {{v = 0}}." },
      { front: "How do you find the maximum velocity of a particle?", back: "Differentiate {{v}} to get {{a = dv/dt}}, solve {{dv/dt = 0}} for {{t}}, and substitute back into {{v(t)}}." },
      { front: "How do you find total distance travelled from {{t_1}} to {{t_2}}?", back: "Solve {{v = 0}} for any turnaround times {{t_*}} inside {{(t_1, t_2)}}, evaluate {{s}} at all stops, and sum {{|delta s|}} on each leg." },
    ],
    mustKnow: [
      "Differentiate polynomials together with negative powers ({{1/x^n = x^(-n)}}) and fractional powers ({{sqrt(x) = x^(1/2)}}).",
      "Expand brackets and split single-denominator fractions BEFORE applying the power rule.",
      "Evaluate {{dy/dx}} at {{x = a}} for curve gradient, and solve {{dy/dx = m}} to find points with gradient {{m}}.",
      "Find equations of tangents and perpendicular normals ({{m_N = -1/m_T}}) in requested forms such as {{ax + by + c = 0}}.",
      "Find coordinates of stationary points by solving {{dy/dx = 0}} and substituting back into {{y = f(x)}}.",
      "Justify whether a stationary point is a maximum or minimum using {{(d^2 y)/(dx^2)}} or a gradient sign table.",
      "Eliminate a second variable using a constraint to prove an optimisation formula ('Show that {{V = ...}}') and maximise/minimise it.",
      "Differentiate {{s(t)}} to obtain {{v = ds/dt}} and {{a = dv/dt}}, and solve {{v = 0}} for instantaneous rest.",
      "Distinguish net displacement {{s(t_2) - s(t_1)}} from total distance travelled when direction reverses.",
    ],
    misconceptions: [
      {
        wrong: "Differentiating {{y = (x^3 - 4)/x^2}} by differentiating top and bottom separately to get {{3x^2 / (2x)}} ❌",
        right: "Split and rewrite in index form FIRST: {{y = x - 4x^(-2)}}, then {{dy/dx = 1 + 8x^(-3)}} ✅",
      },
      {
        wrong: "Differentiating {{4x^(-2)}} to {{-8x^(-1)}} by adding 1 instead of subtracting 1 from {{-2}} ❌",
        right: "Subtract 1 from the exponent: {{-2 - 1 = -3}}, so {{d/dx(4x^(-2)) = -8x^(-3)}} ✅",
      },
      {
        wrong: "Writing tangent equation {{y - 3 = (2x - 6)(x - 4)}} with the formula {{dy/dx}} still inside {{m}} ❌",
        right: "Evaluate {{dy/dx}} at {{x = 4}} FIRST to get a constant gradient {{m_T = 2}}, then write {{y - 3 = 2(x - 4)}} ✅",
      },
      {
        wrong: "Solving {{3x^2 - 12 = 0}} without stating why it equals zero ❌",
        right: "Explicitly write `'At a stationary point, dy/dx = 0'` before setting {{3x^2 - 12 = 0}} ✅",
      },
      {
        wrong: "Assuming {{(d^2 y)/(dx^2) < 0}} means a minimum because it is negative ❌",
        right: "{{(d^2 y)/(dx^2) < 0}} means gradient is decreasing ({{+ -> 0 -> -}}), so it is a **local maximum** ✅",
      },
      {
        wrong: "Setting {{s = 0}} when asked when a particle is at instantaneous rest ❌",
        right: "{{s = 0}} means passing through the origin {{O}}; instantaneous rest means **velocity {{v = ds/dt = 0}}** ✅",
      },
      {
        wrong: "Using SUVAT equations ({{v = u + at}}) when {{s = t^3 - 6t^2 + 9t}} ❌",
        right: "Here {{a = 6t - 12}} varies with {{t}} (not constant!), so you MUST use calculus {{v = ds/dt}} and {{a = dv/dt}} ✅",
      },
      {
        wrong: "Calculating total distance in {{0 <= t <= 5}} as simply {{s(5) - s(0)}} ❌",
        right: "Check {{v = 0}} for reversals inside {{(0, 5)}} and sum the absolute distances of each leg ✅",
      },
    ],
    examMistakes: [
      "Writing `y =` on the differentiated line instead of changing the left-hand side to `dy/dx =`.",
      "Forgetting that standalone constants (such as `+ 7` or `- 12`) differentiate to `0`, leaving `+ 7` in `dy/dx`.",
      "Substituting stationary `x`-values back into `dy/dx` (getting `0`) instead of substituting into the original curve `y`.",
      "Skipping intermediate algebra in 'Show that V = ...' optimisation questions — Edexcel withholds marks if every substitution step isn't visible.",
      "Stopping at the optimal `x` when the question asks for the **maximum volume/area** (or vice versa!).",
      "Omitting the nature justification (`d²y/dx² < 0` or gradient sign table) when asked to prove a turning point is a maximum.",
      "Giving a negative answer for **speed** or **distance** — speed is `|v|` and distance is always positive.",
    ],
    mnemonics: [
      {
        topic: "Preparing algebra before differentiating",
        device: "E–S–I Before dy/dx (Expand, Split, Index)",
        explanation: "**E**xpand brackets, **S**plit fractions over single denominators, convert roots/reciprocals to **I**ndex form `ax^n` — only THEN differentiate!",
      },
      {
        topic: "Kinematics calculus order",
        device: "S → V → A : Differentiate Down",
        explanation: "Displacement `s` differentiates to Velocity `v = ds/dt`, which differentiates to Acceleration `a = dv/dt`.",
      },
      {
        topic: "Second derivative test sign",
        device: "Negative d²y/dx² = Sad Face ∩ (Peak / Max); Positive = Smiley ∪ (Trough / Min)",
        explanation: "A negative second derivative bends downwards like `∩` so the vertex at the top is a **maximum**; positive bends upwards like `∪` giving a **minimum**.",
      },
    ],
    realWorld: [
      {
        title: "Packaging & Manufacturing Optimisation",
        detail: "Beverage engineers use `dA/dr = 0` to choose the radius-to-height ratio of aluminium cans that minimises metal surface area for a fixed 330 ml volume.",
        emoji: "🥫",
      },
      {
        title: "Rocket Telemetry & Re-entry",
        detail: "Radar tracks position `s(t)`; onboard flight computers differentiate to compute instantaneous velocity `ds/dt` and peak g-force deceleration `dv/dt`.",
        emoji: "🚀",
      },
      {
        title: "Rollercoaster Crest & Dip Design",
        detail: "Track engineers locate crests and troughs with `dy/dx = 0` and control curvature via `d²y/dx²` so riders feel airtime without dangerous whiplash.",
        emoji: "🎢",
      },
      {
        title: "Economics: Marginal Profit",
        detail: "Differentiating profit `P(x)` with respect to output `x` gives marginal profit `dP/dx`; maximum profit occurs where `dP/dx = 0` and `d²P/dx² < 0`.",
        emoji: "📈",
      },
    ],
    videos: [
      {
        title: "IGCSE Differentiation Full Topic Revision (4MA1 Higher)",
        channel: "Maths Genie",
        url: "https://www.youtube.com/results?search_query=maths+genie+igcse+differentiation+edexcel+4ma1",
      },
      {
        title: "Tangents, Normals & Stationary Points (Edexcel IGCSE Higher)",
        channel: "GCSE Maths Tutor",
        url: "https://www.youtube.com/results?search_query=gcse+maths+tutor+igcse+differentiation+stationary+points+normals",
      },
      {
        title: "Calculus Optimisation Exam Questions (Show That V = ...)",
        channel: "Corbettmaths",
        url: "https://www.youtube.com/results?search_query=edexcel+igcse+4ma1+differentiation+optimisation+maximum+volume",
      },
      {
        title: "Kinematics with Differentiation (s, v, a & Total Distance)",
        channel: "TLMaths",
        url: "https://www.youtube.com/results?search_query=edexcel+igcse+4ma1+kinematics+differentiation+displacement+velocity",
      },
    ],
    formulas: [
      { name: "Power rule", formula: "{{y = a x^n => dy/dx = n a x^(n - 1)}}", note: "Not on formula sheet — memorise!" },
      { name: "Negative & root indices", formula: "{{1/x^n = x^(-n)}},   {{sqrt(x) = x^(1/2)}}", note: "Rewrite before differentiating" },
      { name: "Tangent & normal at (x₁, y₁)", formula: "{{y - y_1 = m(x - x_1)}},   {{m_N = -1/m_T}}", note: "Evaluate m numerically at x₁" },
      { name: "Stationary point condition", formula: "{{dy/dx = 0}}", note: "Max if d²y/dx² < 0; Min if d²y/dx² > 0" },
      { name: "Velocity from displacement", formula: "{{v = ds/dt}}", note: "Instantaneous rest when v = 0" },
      { name: "Acceleration from velocity", formula: "{{a = dv/dt = (d^2 s)/(dt^2)}}", note: "Max/min velocity when a = 0" },
    ],
  },
};
