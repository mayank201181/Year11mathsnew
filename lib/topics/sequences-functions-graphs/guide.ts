import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "sequences-functions-graphs",
  title: "Arithmetic Series, Functions & Curve Transformations",
  strand: "Functions & Calculus",
  icon: "📈",
  summary:
    "Sum hundred-term arithmetic progressions in seconds, chain and invert algebraic functions, and shift, stretch or reflect any curve with coordinate precision.",
  intro:
    "In Edexcel 4MA1 Higher, sequences, functions and graphs fuse algebra with geometry. You will sum long arithmetic series without listing terms, compose and invert rational functions while policing excluded domain values, sketch quadratics, cubics, reciprocals and exponentials with their asymptotes, and track turning points through every graph transformation.",
  guide: [
    {
      id: "arithmetic-sequences-series",
      heading: "Arithmetic sequences & series S_n",
      discovery: {
        problem:
          "Young Carl Friedrich Gauss was asked to add every whole number from {{1}} to {{100}}. Instead of adding left to right, he wrote the list forwards and backwards:\n\n{{1 + 2 + 3 + ... + 99 + 100}}\n{{100 + 99 + 98 + ... + 2 + 1}}\n\nWhat do you get when you add each vertical pair, and what must the single sum {{1 + 2 + ... + 100}} equal?",
        idea:
          "Every vertical pair adds to {{101}}, and there are {{100}} pairs! That double sum is {{100 * 101 = 10100}}, so halving gives {{5050}}. Reversing and pairing turns **any** arithmetic series into {{(n/2) * (first + last)}}.",
      },
      body:
        "An **arithmetic sequence** (or arithmetic progression, AP) starts at a first term {{a}} and adds a constant **common difference** {{d}} each step (where {{d}} can be positive, negative or fractional).\n\n- **{{n}}th term formula:** To reach the {{n}}th term {{u_n}} from the 1st term {{a}}, you take {{(n - 1)}} jumps of {{d}}:\n\n    {{u_n = a + (n - 1)d}}\n\n- **Sum of the first {{n}} terms ({{S_n}}):** On the Edexcel 4MA1 Higher formula sheet, reversing and pairing {{n}} terms from {{a}} to last term {{l = a + (n - 1)d}} gives both forms:\n\n    {{S_n = (n/2)(a + l)}}    and    {{S_n = (n/2)(2a + (n - 1)d)}}\n\n| Clue given in exam | Best formula / setup |\n|---|---|\n| First term {{a}}, common difference {{d}}, want {{u_n}} | {{u_n = a + (n - 1)d}} |\n| First term {{a}}, last term {{l}}, number of terms {{n}} | {{S_n = (n/2)(a + l)}} |\n| First term {{a}}, difference {{d}}, number of terms {{n}} | {{S_n = (n/2)(2a + (n - 1)d)}} |\n| Two non-adjacent clues (e.g. {{u_4 = 17}} and {{S_8 = 172}}) | Write two equations in {{a}} and {{d}}, then solve simultaneously |\n| Given sum {{S_n = K}}, asked for {{n}} | Substitute into {{S_n}}, multiply by {{2}}, rearrange to a quadratic in {{n}}, and keep only positive integer {{n}} |\n\n**Quadratic sequences ({{an^2 + bn + c}}):** When the first differences change steadily so the **second difference** is constant, the sequence is quadratic with **second difference {{= 2a}}**. Halve the second difference to find {{a}}, subtract {{an^2}} from each original term, and read off the remaining linear sequence {{bn + c}}.",
      diagram: `<svg viewBox="0 0 460 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gauss staircase diagram showing two copies of an arithmetic series pairing into n columns of height a plus l"><rect x="8" y="8" width="444" height="159" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><text x="24" y="30" font-size="12" font-weight="700" fill="#1e293b">Gauss Pairing: 2 × S_4 = 4 × (a + l)</text><rect x="36" y="118" width="46" height="24" rx="4" fill="#6366f1"/><rect x="88" y="98" width="46" height="44" rx="4" fill="#6366f1"/><rect x="140" y="78" width="46" height="64" rx="4" fill="#6366f1"/><rect x="192" y="58" width="46" height="84" rx="4" fill="#6366f1"/><rect x="36" y="30" width="46" height="84" rx="4" fill="#f59e0b" opacity="0.88"/><rect x="88" y="30" width="46" height="64" rx="4" fill="#f59e0b" opacity="0.88"/><rect x="140" y="30" width="46" height="44" rx="4" fill="#f59e0b" opacity="0.88"/><rect x="192" y="30" width="46" height="24" rx="4" fill="#f59e0b" opacity="0.88"/><text x="59" y="134" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">a</text><text x="111" y="124" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">a+d</text><text x="163" y="114" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">a+2d</text><text x="215" y="104" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">l</text><text x="59" y="75" font-size="11" font-weight="700" fill="#78350f" text-anchor="middle">l</text><text x="215" y="46" font-size="11" font-weight="700" fill="#78350f" text-anchor="middle">a</text><line x1="256" y1="30" x2="256" y2="142" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="4 3"/><text x="268" y="74" font-size="12" font-weight="700" fill="#0f172a">Height = a + l</text><text x="268" y="94" font-size="12" fill="#334155">= 2a + (n − 1)d</text><text x="268" y="122" font-size="12" font-weight="700" fill="#4f46e5">S_n = (n / 2)(2a + (n − 1)d)</text><text x="137" y="158" font-size="11" fill="#475569" text-anchor="middle">n columns wide</text></svg>`,
      diagramCaption:
        "Stacking a reversed copy (amber) onto S_n (indigo) builds an n × (a + l) rectangle, so S_n is exactly half the rectangle.",
      workedExamples: [
        {
          title: "Simultaneous clues in an arithmetic series",
          problem:
            "In an arithmetic series, the 5th term is {{23}} and the sum of the first 10 terms is {{240}}. Find the first term {{a}} and the common difference {{d}}.",
          steps: [
            "Translate the 5th term using {{u_n = a + (n - 1)d}}: {{a + 4d = 23}}  (1).",
            "Translate {{S_{10} = 240}} using {{S_n = (n/2)(2a + (n - 1)d)}}: {{(10/2)(2a + 9d) = 240}} → {{5(2a + 9d) = 240}} → {{2a + 9d = 48}}  (2).",
            "Double equation (1) to match {{2a}}: {{2a + 8d = 46}}  (3).",
            "Subtract (3) from (2): {{d = 48 - 46 = 2}}. Substitute back into (1): {{a + 4(2) = 23}} → {{a = 15}}.",
          ],
          answer: "{{a = 15}}, {{d = 2}}",
          yourTurn: {
            question:
              "In an arithmetic series, the 4th term is {{19}} and the sum of the first 8 terms is {{164}}. Find the first term {{a}} and common difference {{d}} (give your answer as {{a, d}}).",
            answer: { type: "list", values: [10, 3], ordered: true, display: "10, 3" },
            solution:
              "{{a + 3d = 19}} and {{4(2a + 7d) = 164}} → {{2a + 7d = 41}}. Subtract {{2a + 6d = 38}} to get {{d = 3}}, then {{a = 19 - 9 = 10}}.",
          },
        },
        {
          title: "Quadratic nth term via second differences",
          problem: "Find an expression for the {{n}}th term of the quadratic sequence {{5, 12, 23, 38, 57, ...}}",
          steps: [
            "First differences: {{12 - 5 = 7}}, {{23 - 12 = 11}}, {{38 - 23 = 15}}, {{57 - 38 = 19}}.",
            "Second differences: {{11 - 7 = 4}}, {{15 - 11 = 4}}, {{19 - 15 = 4}}. Since {{2a = 4}}, we have {{a = 2}}.",
            "Subtract {{2n^2}} ({{2, 8, 18, 32, 50}}) from the original sequence ({{5, 12, 23, 38, 57}}): the remainder is {{3, 4, 5, 6, 7}}.",
            "The linear remainder {{3, 4, 5, 6, ...}} has {{n}}th term {{n + 2}}, so {{u_n = 2n^2 + n + 2}}.",
          ],
          answer: "{{2n^2 + n + 2}}",
          yourTurn: {
            question: "Find the {{n}}th term of the quadratic sequence {{4, 13, 28, 49, 76, ...}} in terms of {{n}}.",
            answer: { type: "expression", expr: "3n^2 + 1", form: "simplified" },
            solution:
              "First differences: {{9, 15, 21, 27}}; second difference {{= 6}}, so {{2a = 6 => a = 3}}. Subtracting {{3n^2}} ({{3, 12, 27, 48}}) leaves {{1, 1, 1, 1}}, giving {{3n^2 + 1}}.",
          },
        },
      ],
      keyPoints: [
        "{{u_n = a + (n - 1)d}} uses {{(n - 1)}} steps — never {{nd}} unless you adjust the constant term.",
        "For decreasing sequences, {{d}} is **negative** — wrap {{d}} in brackets when substituting into {{2a + (n - 1)d}}.",
        "When solving {{S_n = K}} for {{n}}, reject any negative or fractional root because term position {{n}} must be a positive integer.",
        "For quadratic sequences {{an^2 + bn + c}}, the constant second difference equals {{2a}}, **not** {{a}}.",
      ],
      whyItWorks:
        "In an arithmetic sequence, moving one step right adds {{d}} while moving one step left from the end subtracts {{d}}. Therefore {{u_1 + u_n = u_2 + u_{n-1} = ... = 2a + (n - 1)d}}: every symmetric pair has the exact same total.",
      strategies: ["Reverse and pair", "Form simultaneous equations from sequence clues", "Subtract an² to linearise"],
      thinkDeeper:
        "Suppose an arithmetic series has positive {{a}} and negative {{d}}. How is it possible for two different values of {{n}} (say {{S_{12}}} and {{S_{19}}}) to give the exact same sum?",
    },
    {
      id: "composite-inverse-functions",
      heading: "Domain, range, composite fg(x) & inverse f⁻¹(x)",
      discovery: {
        problem:
          "Let {{f(x) = x^2}} ('square it') and {{g(x) = x + 3}} ('add 3'). Work out both orders for input {{x = 2}}:\n1. Apply {{g}} first, then {{f}}.\n2. Apply {{f}} first, then {{g}}.\nDo you get the same output — and which one does Edexcel write as {{fg(2)}}?",
        idea:
          "Applying {{g}} first gives {{g(2) = 5}}, then {{f(5) = 25}}. Applying {{f}} first gives {{f(2) = 4}}, then {{g(4) = 7}}. Order matters! {{fg(x)}} means **{{f(g(x))}}** — work **from the inside out** (apply {{g}} first, closest to {{x}}).",
      },
      body:
        "A **function** maps each valid input {{x}} in its **domain** to a single output {{y = f(x)}} in its **range**.\n\n- **Excluded domain values:** Two algebraic operations break over the real numbers and must be excluded from the domain:\n  1. **Division by zero:** for {{f(x) = 5/(2x - 7)}}, solve {{2x - 7 = 0}} → exclude {{x = 3.5}}.\n  2. **Square roots of negatives:** for {{g(x) = sqrt(x - 4)}}, require {{x - 4 >= 0}} → exclude {{x < 4}}.\n- **Range of a quadratic:** Complete the square! If {{f(x) = (x - 3)^2 + 5}} for all real {{x}}, since {{(x - 3)^2 >= 0}}, the range is **{{f(x) >= 5}}** (write the range using {{f(x)}} or {{y}}, never {{x}}!).\n- **Composite functions {{fg(x)}}:** Always rewrite {{fg(x)}} as {{f(g(x))}}. Replace **every** {{x}} in the rule for {{f}} with a bracketed copy of {{g(x)}}.\n- **Inverse functions {{f^(-1)(x)}}:** {{f^(-1)}} reverses {{f}}, so {{ff^(-1)(x) = f^(-1)f(x) = x}}. Notice **{{f^(-1)(x)}} is NOT the reciprocal {{1/f(x)}}**!\n  1. Write {{y = f(x)}}.\n  2. Swap {{x}} and {{y}} everywhere.\n  3. Rearrange to make {{y}} the subject (if {{y}} appears twice in a fraction, clear the denominator, expand, collect all {{y}}-terms on one side and factorise {{y}} out!).\n  4. State {{f^(-1)(x) = ...}}. Geometrically, {{y = f^(-1)(x)}} is the reflection of {{y = f(x)}} in the line {{y = x}}, and the **domain of {{f^(-1)}} equals the range of {{f}}**.",
      diagram: `<svg viewBox="0 0 460 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Composite function pipeline showing input x entering g first then f to produce fg of x, alongside inverse reflection across y equals x"><rect x="8" y="8" width="256" height="159" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><text x="22" y="30" font-size="12" font-weight="700" fill="#1e293b">fg(x) = f(g(x)) — Inside Out!</text><text x="24" y="88" font-size="13" font-weight="700" fill="#0f172a">x</text><line x1="36" y1="84" x2="64" y2="84" stroke="#475569" stroke-width="2"/><polygon points="64,80 72,84 64,88" fill="#475569"/><rect x="74" y="62" width="58" height="44" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><text x="103" y="88" font-size="13" font-weight="700" fill="#1d4ed8" text-anchor="middle">g first</text><line x1="132" y1="84" x2="164" y2="84" stroke="#475569" stroke-width="2"/><polygon points="164,80 172,84 164,88" fill="#475569"/><text x="148" y="75" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">g(x)</text><rect x="174" y="62" width="58" height="44" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.8"/><text x="203" y="88" font-size="13" font-weight="700" fill="#6d28d9" text-anchor="middle">then f</text><text x="136" y="138" font-size="11" font-weight="700" fill="#6d28d9" text-anchor="middle">Output: f(g(x))</text><rect x="276" y="8" width="176" height="159" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><text x="364" y="28" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Inverse = Reflect in y = x</text><line x1="296" y1="146" x2="432" y2="146" stroke="#94a3b8" stroke-width="1.2"/><line x1="306" y1="156" x2="306" y2="40" stroke="#94a3b8" stroke-width="1.2"/><line x1="296" y1="156" x2="426" y2="38" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 3"/><text x="428" y="48" font-size="10" fill="#475569">y=x</text><path d="M 306 128 Q 332 122 362 46" fill="none" stroke="#2563eb" stroke-width="2.4"/><text x="350" y="54" font-size="10" font-weight="700" fill="#2563eb">f(x)</text><path d="M 324 146 Q 330 120 412 88" fill="none" stroke="#e11d48" stroke-width="2.4"/><text x="416" y="84" font-size="10" font-weight="700" fill="#e11d48">f⁻¹(x)</text></svg>`,
      diagramCaption:
        "Left: in fg(x), g acts first because it sits next to x. Right: swapping x and y reflects y = f(x) in the diagonal mirror y = x.",
      workedExamples: [
        {
          title: "Inverse of a rational function (x appears twice)",
          problem:
            "Given {{f(x) = (2x + 3)/(x - 4)}} for {{x != 4}}, find {{f^(-1)(x)}} and state the value of {{x}} that must be excluded from the domain of {{f^(-1)}}.",
          steps: [
            "Let {{y = (2x + 3)/(x - 4)}} and swap {{x}} and {{y}}: {{x = (2y + 3)/(y - 4)}}.",
            "Multiply both sides by {{(y - 4)}} and expand: {{x(y - 4) = 2y + 3}} → {{xy - 4x = 2y + 3}}.",
            "Collect {{y}}-terms on the left and non-{{y}} terms on the right: {{xy - 2y = 4x + 3}}.",
            "Factorise out {{y}} and divide: {{y(x - 2) = 4x + 3}} → {{f^(-1)(x) = (4x + 3)/(x - 2)}}. Exclude {{x = 2}} (where the denominator is zero).",
          ],
          answer: "{{f^(-1)(x) = (4x + 3)/(x - 2)}}, exclude {{x = 2}}",
          yourTurn: {
            question: "Given {{f(x) = (3x - 1)/(x + 2)}} for {{x != -2}}, find an expression for {{f^(-1)(x)}}.",
            answer: { type: "expression", expr: "(2x + 1)/(3 - x)", form: "any" },
            solution:
              "Swap {{x}} and {{y}}: {{x = (3y - 1)/(y + 2)}} → {{xy + 2x = 3y - 1}} → {{2x + 1 = 3y - xy = y(3 - x)}} → {{f^(-1)(x) = (2x + 1)/(3 - x)}} (or {{(-2x - 1)/(x - 3)}}).",
          },
        },
        {
          title: "Forming and solving fg(x) = k",
          problem:
            "Let {{f(x) = x^2 - 4}} and {{g(x) = 2x + 1}}. Find a simplified expression for {{fg(x)}} and solve {{fg(x) = 21}}.",
          steps: [
            "Apply {{g}} first, then substitute {{(2x + 1)}} into {{f}}: {{fg(x) = f(2x + 1) = (2x + 1)^2 - 4}}.",
            "Expand cleanly: {{(4x^2 + 4x + 1) - 4 = 4x^2 + 4x - 3}}.",
            "Set {{fg(x) = 21}}: {{(2x + 1)^2 - 4 = 21}} → {{(2x + 1)^2 = 25}}.",
            "Take both square roots: {{2x + 1 = 5}} or {{2x + 1 = -5}}, giving {{x = 2}} or {{x = -3}}.",
          ],
          answer: "{{fg(x) = 4x^2 + 4x - 3}}; {{x = 2}} or {{x = -3}}",
          yourTurn: {
            question: "If {{f(x) = 3x - 5}} and {{g(x) = x^2 + 2}}, evaluate {{fg(-3)}}.",
            answer: { type: "number", value: 28 },
            solution: "Work inside-out: {{g(-3) = (-3)^2 + 2 = 11}}, then {{f(11) = 3(11) - 5 = 28}}.",
          },
        },
      ],
      keyPoints: [
        "{{fg(x)}} means {{f(g(x))}} — apply the **right-hand** function {{g}} first, never left-to-right!",
        "{{f^(-1)(x)}} is the inverse function (swap {{x}} and {{y}}), **never** {{1/f(x)}}.",
        "Shortcut for solving {{f^(-1)(x) = k}}: apply {{f}} to both sides so {{x = f(k)}} — zero algebra needed!",
        "State range inequalities using {{f(x)}} or {{y}} (e.g. {{f(x) >= -4}}), not {{x}}.",
      ],
      whyItWorks:
        "If {{y = f(x)}} sends {{x}} to {{y}}, then {{f^(-1)}} must send {{y}} back to {{x}}. Swapping the symbols {{x}} and {{y}} exchanges the roles of input and output, which simultaneously reflects every point {{(a, b)}} across {{y = x}} to {{(b, a)}}.",
      strategies: ["Work from the inside out", "Collect and factorise when rearranging", "Use x = f(k) to solve f⁻¹(x) = k"],
      thinkDeeper:
        "Find a function {{f(x)}} (other than {{f(x) = x}}) that is **self-inverse**, meaning {{f^(-1)(x) = f(x)}}. What must its graph look like relative to the line {{y = x}}?",
    },
    {
      id: "turning-points-sketching",
      heading: "Quadratic sketching, roots, normals & perpendicular lines",
      discovery: {
        problem:
          "Take the segment from {{(0, 0)}} to {{(3, 1)}}, which has gradient {{m_1 = 1/3}}. Rotate it {{90°}} anticlockwise about the origin. Where does {{(3, 1)}} land, what is the new gradient {{m_2}}, and what is {{m_1 * m_2}}?",
        idea:
          "Rotating {{(3, 1)}} by {{90°}} anticlockwise lands at {{(-1, 3)}}, so the new gradient is {{m_2 = 3/(-1) = -3}}. Multiplying gives {{(1/3) * (-3) = -1}}! Any two perpendicular gradients satisfy **{{m_1 m_2 = -1}}** (flip the fraction and flip the sign).",
      },
      body:
        "A Grade 9 quadratic sketch is not a plotted table of points — it is a smooth parabola anchored by **four algebraic landmarks**:\n\n1. **Shape:** {{a > 0}} gives a U-shaped parabola (**minimum** turning point); {{a < 0}} gives an inverted ∩-shaped parabola (**maximum** turning point).\n2. **{{y}}-intercept:** set {{x = 0}} to get {{(0, c)}}.\n3. **{{x}}-intercepts (roots):** solve {{ax^2 + bx + c = 0}} by factorising or quadratic formula (if {{b^2 - 4ac < 0}}, the parabola never crosses the {{x}}-axis!).\n4. **Turning point (vertex):** complete the square into {{y = a(x + p)^2 + q}} to read off the vertex **{{(-p, q)}}** and line of symmetry {{x = -p}} (which also equals {{x = -b/(2a)}}, halfway between the roots).\n\n**Perpendicular lines, normals & perpendicular bisectors:**\n- Two non-vertical lines with gradients {{m_1}} and {{m_2}} are perpendicular if and only if **{{m_1 m_2 = -1}}**, so {{m_2 = -1/m_1}} (**negative reciprocal**).\n- The **perpendicular bisector** (mediator) of segment {{AB}} passes through the **midpoint** {{M = ((x_1 + x_2)/2, (y_1 + y_2)/2)}} with gradient {{-1 / m_{AB}}}.\n- A **normal** to a curve at point {{P(x_1, y_1)}} is the straight line perpendicular to the tangent at {{P}}. Once you have gradient {{m}} and point {{(x_1, y_1)}}, use **point-slope form**:\n\n    {{y - y_1 = m(x - x_1)}}",
      diagram: `<svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parabola y equals x squared minus 4x minus 5 showing roots at minus 1 and 5, y-intercept at minus 5, symmetry line x equals 2 and minimum turning point 2 comma minus 9"><rect x="8" y="8" width="444" height="174" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><line x1="40" y1="68" x2="420" y2="68" stroke="#64748b" stroke-width="1.5"/><line x1="150" y1="20" x2="150" y2="170" stroke="#64748b" stroke-width="1.5"/><line x1="230" y1="20" x2="230" y2="172" stroke="#9333ea" stroke-width="1.3" stroke-dasharray="4 3"/><path d="M 92 26 Q 230 264 368 26" fill="none" stroke="#2563eb" stroke-width="2.6"/><circle cx="110" cy="68" r="4" fill="#dc2626"/><text x="92" y="60" font-size="11" font-weight="700" fill="#dc2626">(−1, 0)</text><circle cx="350" cy="68" r="4" fill="#dc2626"/><text x="366" y="60" font-size="11" font-weight="700" fill="#dc2626">(5, 0)</text><circle cx="150" cy="108" r="4" fill="#0d9488"/><text x="112" y="114" font-size="11" font-weight="700" fill="#0d9488">(0, −5)</text><circle cx="230" cy="145" r="4.5" fill="#9333ea"/><text x="242" y="156" font-size="11" font-weight="700" fill="#7e22ce">Vertex (2, −9)</text><text x="236" y="34" font-size="10" font-weight="700" fill="#7e22ce">x = 2</text><text x="380" y="128" font-size="11" font-weight="700" fill="#1d4ed8" text-anchor="middle">y = (x − 2)² − 9</text></svg>`,
      diagramCaption:
        "Every landmark of y = x² − 4x − 5 locks together: roots −1 and 5 average to symmetry line x = 2, giving minimum turning point (2, −9).",
      workedExamples: [
        {
          title: "Turning point when the x² coefficient is not 1",
          problem:
            "Find the coordinates of the turning point of the curve {{y = 2x^2 - 12x + 11}} and state whether it is a maximum or a minimum.",
          steps: [
            "Factor {{2}} out of the first two terms only: {{y = 2(x^2 - 6x) + 11}}.",
            "Complete the square inside the bracket: {{x^2 - 6x = (x - 3)^2 - 9}}.",
            "Multiply back by {{2}} carefully: {{y = 2[(x - 3)^2 - 9] + 11 = 2(x - 3)^2 - 18 + 11 = 2(x - 3)^2 - 7}}.",
            "Since {{a = 2 > 0}} and {{(x - 3)^2 >= 0}}, the curve has a **minimum** turning point at {{(3, -7)}}.",
          ],
          answer: "Minimum at {{(3, -7)}}",
          yourTurn: {
            question: "Find the coordinates {{(x, y)}} of the turning point of {{y = 3x^2 + 12x + 5}}.",
            answer: { type: "list", values: [-2, -7], ordered: true, display: "(−2, −7)" },
            solution:
              "{{y = 3(x^2 + 4x) + 5 = 3[(x + 2)^2 - 4] + 5 = 3(x + 2)^2 - 7}}, so the turning point is {{(-2, -7)}}.",
          },
        },
        {
          title: "Perpendicular bisector in ax + by + c = 0 form",
          problem:
            "Points {{A(-2, 7)}} and {{B(4, 3)}} lie on a coordinate grid. Find an equation of the perpendicular bisector of {{AB}} in the form {{ax + by + c = 0}}, where {{a, b, c}} are integers.",
          steps: [
            "Find the midpoint {{M}} of {{AB}}: {{M = ((-2 + 4)/2, (7 + 3)/2) = (1, 5)}}.",
            "Find the gradient of {{AB}}: {{m_{AB} = (3 - 7)/(4 - (-2)) = -4/6 = -2/3}}.",
            "Flip and negate for the perpendicular gradient: {{m_{perp} = +3/2}}.",
            "Use {{y - y_1 = m(x - x_1)}} through {{(1, 5)}}: {{y - 5 = (3/2)(x - 1)}} → {{2y - 10 = 3x - 3}} → {{3x - 2y + 7 = 0}}.",
          ],
          answer: "{{3x - 2y + 7 = 0}}",
          yourTurn: {
            question:
              "Line {{L}} is perpendicular to {{y = -4x + 9}} and passes through {{(8, 5)}}. Find the {{y}}-intercept of line {{L}}.",
            answer: { type: "number", value: 3 },
            solution:
              "Perpendicular gradient {{m = -1/(-4) = 1/4}}. Using {{y - 5 = (1/4)(x - 8)}} gives {{y = (1/4)x + 3}}, so the {{y}}-intercept is {{3}}.",
          },
        },
      ],
      keyPoints: [
        "From {{y = a(x + p)^2 + q}}, flip the sign inside the bracket and keep the sign outside: vertex **{{(-p, q)}}**.",
        "When completing the square on {{ax^2 + bx + c}}, remember to multiply the subtracted square by {{a}} when expanding the outer bracket!",
        "Perpendicular gradient is **{{-1/m}}** (both reciprocal AND opposite sign — forgetting either loses the method mark).",
        "When Edexcel asks for {{ax + by + c = 0}} with integer coefficients, multiply out all fractions at the end.",
      ],
      whyItWorks:
        "Because {{(x + p)^2}} is a square, it is smallest (equal to {{0}}) exclusively when {{x = -p}}. Adding {{q}} pins the lowest (if {{a > 0}}) or highest (if {{a < 0}}) point on the curve at {{(-p, q)}}.",
      strategies: ["Anchor four landmarks", "Symmetry midpoint check", "Point-slope form y − y₁ = m(x − x₁)"],
      thinkDeeper:
        "If a quadratic has roots {{r_1}} and {{r_2}}, prove algebraically that the {{x}}-coordinate of its turning point is always the exact midpoint {{(r_1 + r_2)/2}}.",
    },
    {
      id: "cubic-reciprocal-exponential",
      heading: "Cubic, reciprocal & exponential graphs",
      discovery: {
        problem:
          "You have already plotted the curve {{y = x^3 - 4x + 1}} on grid paper. Now the exam asks: *'By drawing a suitable straight line on your grid, solve {{x^3 - 6x - 2 = 0}}.'* Which straight line {{y = mx + c}} should you draw so its intersections with your curve solve the new equation?",
        idea:
          "Make the left-hand side match **your plotted curve** {{x^3 - 4x + 1}}! Add {{2x + 3}} to both sides of {{x^3 - 6x - 2 = 0}} to get {{x^3 - 4x + 1 = 2x + 3}}. Drawing **{{y = 2x + 3}}** makes the intersection {{x}}-coordinates solve {{x^3 - 6x - 2 = 0}}!",
      },
      body:
        "Edexcel 4MA1 Higher tests four non-linear curve families alongside quadratics. Know their **signature shapes** and **asymptotes** (lines a curve approaches closer and closer without ever touching):\n\n| Curve family | Equation | Signature shape & key features |\n|---|---|---|\n| **Cubic** | {{y = ax^3 + bx^2 + cx + d}} | S-wave: if {{a > 0}}, rises from bottom-left to top-right; if {{a < 0}}, falls from top-left to bottom-right. {{y}}-intercept {{(0, d)}}, up to 3 real roots and 2 turning points. |\n| **Reciprocal** | {{y = k/x}} ({{x != 0}}) | Two smooth hyperbola branches: Quadrants 1 & 3 if {{k > 0}}, Quadrants 2 & 4 if {{k < 0}}. Asymptotes **{{x = 0}}** and **{{y = 0}}**. |\n| **Squared reciprocal** | {{y = k/x^2}} ({{x != 0}}) | Symmetric volcano/funnel: both branches **above** the {{x}}-axis if {{k > 0}} (below if {{k < 0}}). Asymptotes **{{x = 0}}** and **{{y = 0}}**. |\n| **Exponential** | {{y = a * b^x}} ({{a > 0, b > 0}}) | Rapid growth if {{b > 1}}, rapid decay if {{0 < b < 1}}. Passes through **{{(0, a)}}** (since {{b^0 = 1}}); horizontal asymptote **{{y = 0}}**. |\n\n**Shifted reciprocal asymptotes:** For {{y = k/(x - p) + q}}, division by zero occurs at {{x = p}} (**vertical asymptote {{x = p}}**), and as {{x}} grows huge {{k/(x - p) -> 0}} so {{y -> q}} (**horizontal asymptote {{y = q}}**).\n\n**Graphical equation trick:** Given a plotted curve {{y = f(x)}} and a target equation {{g(x) = 0}}, rearrange {{g(x) = 0}} until the **exact expression {{f(x)}}** stands on one side: {{f(x) = mx + c}}. Draw the straight line {{y = mx + c}} and read the **{{x}}-coordinates** of the intersections!",
      diagram: `<svg viewBox="0 0 460 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three side-by-side mini graphs showing a positive cubic S-curve, a reciprocal hyperbola k over x in quadrants 1 and 3, and an exponential growth curve through 0 comma 1"><rect x="6" y="8" width="144" height="149" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><text x="78" y="26" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Cubic (a &gt; 0)</text><line x1="20" y1="92" x2="136" y2="92" stroke="#94a3b8" stroke-width="1.2"/><line x1="78" y1="36" x2="78" y2="146" stroke="#94a3b8" stroke-width="1.2"/><path d="M 28 142 C 50 42, 68 42, 78 92 C 88 142, 106 142, 128 40" fill="none" stroke="#4f46e5" stroke-width="2.4"/><rect x="158" y="8" width="144" height="149" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><text x="230" y="26" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Reciprocal y = k/x</text><line x1="172" y1="92" x2="288" y2="92" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="3 3"/><line x1="230" y1="36" x2="230" y2="146" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="3 3"/><path d="M 237 40 Q 242 82 284 86" fill="none" stroke="#0d9488" stroke-width="2.4"/><path d="M 176 98 Q 218 102 223 144" fill="none" stroke="#0d9488" stroke-width="2.4"/><rect x="310" y="8" width="144" height="149" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><text x="382" y="26" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">Exponential y = bˣ</text><line x1="324" y1="126" x2="440" y2="126" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="3 3"/><line x1="366" y1="36" x2="366" y2="146" stroke="#94a3b8" stroke-width="1.2"/><path d="M 326 123 Q 382 120 426 40" fill="none" stroke="#d97706" stroke-width="2.4"/><circle cx="366" cy="104" r="3.5" fill="#d97706"/><text x="386" y="109" font-size="10" font-weight="700" fill="#b45309">(0, 1)</text></svg>`,
      diagramCaption:
        "Red dashed lines mark asymptotes: x = 0 and y = 0 for y = k/x, and y = 0 for y = b^x.",
      workedExamples: [
        {
          title: "Finding the straight line to solve a new equation graphically",
          problem:
            "You have drawn the graph of {{y = x^3 - 3x^2 + 2}}. Find the equation of the straight line you must draw on the same axes to solve {{x^3 - 3x^2 - 2x + 5 = 0}}.",
          steps: [
            "Write the target equation: {{x^3 - 3x^2 - 2x + 5 = 0}}.",
            "Rearrange so the left-hand side becomes **exactly** the plotted expression {{x^3 - 3x^2 + 2}}.",
            "Add {{2x}} and subtract {{3}} from both sides: {{(x^3 - 3x^2 - 2x + 5) + 2x - 3 = 2x - 3}} → {{x^3 - 3x^2 + 2 = 2x - 3}}.",
            "Since {{y = x^3 - 3x^2 + 2}}, you must draw the straight line {{y = 2x - 3}}.",
          ],
          answer: "{{y = 2x - 3}}",
          yourTurn: {
            question:
              "The curve {{y = x^3 - 5x + 1}} is drawn on a grid. Find the expression {{mx + c}} for the straight line {{y = mx + c}} needed to solve {{x^3 - 8x - 3 = 0}}.",
            answer: { type: "expression", expr: "3x + 4", form: "simplified" },
            solution:
              "Start from {{x^3 - 8x - 3 = 0}} and add {{3x + 4}} to both sides to build {{x^3 - 5x + 1 = 3x + 4}}. Draw {{y = 3x + 4}}.",
          },
        },
        {
          title: "Identifying exponential parameters from two points",
          problem:
            "The curve {{y = a * b^x}} passes through {{(0, 6)}} and {{(3, 48)}}, where {{a}} and {{b}} are positive constants. Find {{a}} and {{b}}.",
          steps: [
            "Substitute {{(0, 6)}}: {{6 = a * b^0 = a * 1}}, so {{a = 6}}.",
            "Substitute {{(3, 48)}} with {{a = 6}}: {{48 = 6 * b^3}}.",
            "Divide by {{6}}: {{b^3 = 8}}, so {{b = cbrt(8) = 2}}.",
          ],
          answer: "{{a = 6}}, {{b = 2}}",
          yourTurn: {
            question:
              "The exponential curve {{y = a * b^x}} passes through {{(0, 5)}} and {{(2, 45)}} with {{b > 0}}. Find {{a}} and {{b}} (write as {{a, b}}).",
            answer: { type: "list", values: [5, 3], ordered: true, display: "5, 3" },
            solution: "At {{x = 0}}, {{a = 5}}. Then {{45 = 5b^2}} → {{b^2 = 9}} → {{b = 3}} (since {{b > 0}}).",
          },
        },
      ],
      keyPoints: [
        "When plotting {{y = ax^3 + ...}} from a table, connect points with a **smooth curve** — never join them with ruler segments!",
        "Never join the two separate branches of {{y = k/x}} across the vertical asymptote {{x = 0}}.",
        "In factorised cubics like {{y = (x + 2)(x - 1)(x - 4)}}, a repeated bracket such as {{y = (x + 2)(x - 1)^2}} **touches** (bounces off) the {{x}}-axis at {{x = 1}} instead of crossing.",
        "When solving {{f(x) = mx + c}} graphically, give **only the {{x}}-coordinates** of the intersections unless {{(x, y)}} coordinates are explicitly asked for.",
      ],
      whyItWorks:
        "At any intersection of {{y = f(x)}} and {{y = mx + c}}, both equations share the exact same {{(x, y)}}, so {{f(x) = mx + c}} automatically holds at that {{x}}-coordinate.",
      strategies: ["Match the plotted curve by subtracting", "Check end-behaviour as x → ±∞", "Test x = 0 for y-intercept"],
      thinkDeeper:
        "Why can a cubic {{y = ax^3 + bx^2 + cx + d}} with {{a != 0}} **never** fail to cross the {{x}}-axis at least once, whereas a quadratic can have zero real roots?",
    },
    {
      id: "graph-transformations",
      heading: "Transformations of graphs y = f(x)",
      discovery: {
        problem:
          "The curve {{y = x^2}} has its minimum turning point at {{x = 0}}. Now look at {{y = (x + 3)^2}}. Which value of {{x}} makes the bracket equal to zero so the minimum occurs — {{x = +3}} or {{x = -3}}?",
        idea:
          "You need {{x + 3 = 0}}, which happens at **{{x = -3}}**! Because {{+3}} was added to {{x}} *before* squaring, {{x}} reaches every output **{{3}} units earlier** (to the left). Changes **inside** the bracket always act **oppositely** on {{x}}!",
      },
      body:
        "Every transformation of {{y = f(x)}} follows one golden rule: **outside** the bracket changes **{{y}} directly** (vertical); **inside** the bracket changes **{{x}} inversely / oppositely** (horizontal).\n\n| Equation | Geometric transformation | Effect on point {{(x, y)}} |\n|---|---|---|\n| {{y = f(x) + a}} | Translation by vector {{(0, a)}} (up {{a}}) | {{(x, y + a)}} |\n| {{y = f(x + a)}} | Translation by vector {{(-a, 0)}} (**left** {{a}}) | {{(x - a, y)}} |\n| {{y = -f(x)}} | Reflection in the **{{x}}-axis** ({{y}} flips sign) | {{(x, -y)}} |\n| {{y = f(-x)}} | Reflection in the **{{y}}-axis** ({{x}} flips sign) | {{(-x, y)}} |\n| {{y = k f(x)}} | Stretch parallel to {{y}}-axis, scale factor {{k}} | {{(x, ky)}} |\n| {{y = f(kx)}} | Stretch parallel to {{x}}-axis, scale factor **{{1/k}}** | {{(x/k, y)}} |\n\n**Tracking turning points & asymptotes in multi-step transformations:**\nSuppose {{P(4, -6)}} is a minimum point on {{y = f(x)}} and we want the corresponding point on {{y = -2f(x - 1) + 5}}:\n- **Horizontal (inside {{f}}):** set {{x_{new} - 1 = 4}} → {{x_{new} = 5}}.\n- **Vertical (outside {{f}}):** follow BIDMAS on {{y = -6}}: {{y_{new} = -2(-6) + 5 = 12 + 5 = 17}} (and because of the minus sign on {{-2f}}, the minimum flips into a **maximum**!).",
      diagram: `<svg viewBox="0 0 460 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coordinate diagram showing original curve y equals f of x with vertex at 2 comma minus 2, translated left by 4 to y equals f of x plus 4 with vertex minus 2 comma minus 2, and reflected in the x-axis to y equals minus f of x with vertex 2 comma 2"><rect x="8" y="8" width="444" height="169" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><line x1="30" y1="95" x2="430" y2="95" stroke="#64748b" stroke-width="1.5"/><line x1="215" y1="20" x2="215" y2="168" stroke="#64748b" stroke-width="1.5"/><path d="M 225 42 Q 285 218 345 42" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="285" cy="130" r="4" fill="#2563eb"/><text x="292" y="146" font-size="11" font-weight="700" fill="#1d4ed8">f(x): (2, −2)</text><path d="M 85 42 Q 145 218 205 42" fill="none" stroke="#0d9488" stroke-width="2.5" stroke-dasharray="5 3"/><circle cx="145" cy="130" r="4" fill="#0d9488"/><text x="135" y="148" font-size="11" font-weight="700" fill="#0f766e" text-anchor="middle">f(x + 4): (−2, −2)</text><path d="M 225 148 Q 285 -28 345 148" fill="none" stroke="#e11d48" stroke-width="2.3"/><circle cx="285" cy="60" r="4" fill="#e11d48"/><text x="348" y="54" font-size="11" font-weight="700" fill="#be123c">−f(x): (2, 2)</text><line x1="276" y1="126" x2="156" y2="126" stroke="#0d9488" stroke-width="1.5"/><polygon points="158,122 150,126 158,130" fill="#0d9488"/><text x="215" y="120" font-size="10" font-weight="700" fill="#0f766e" text-anchor="middle">shift −4</text></svg>`,
      diagramCaption:
        "Inside f(x + 4) shifts (2, −2) left 4 units to (−2, −2); outside −f(x) flips y across the x-axis to (2, 2).",
      workedExamples: [
        {
          title: "Tracking a turning point through three transformations",
          problem:
            "The curve {{y = f(x)}} has a minimum turning point at {{A(6, -4)}}. Write down the coordinates of the corresponding point on:\n(a) {{y = f(x + 2) - 5}}\n(b) {{y = f(3x)}}\n(c) {{y = -f(-x)}}",
          steps: [
            "(a) Inside {{(x + 2)}} shifts {{x}} by {{-2}}: {{6 - 2 = 4}}. Outside {{- 5}} shifts {{y}} by {{-5}}: {{-4 - 5 = -9}} → **{{(4, -9)}}**.",
            "(b) Inside {{f(3x)}} stretches horizontally by scale factor {{1/3}} (set {{3x = 6}} → {{x = 2}}), while {{y}} stays {{-4}} → **{{(2, -4)}}**.",
            "(c) Inside {{-x}} negates {{x}} ({{6 -> -6}}) and outside {{-f}} negates {{y}} ({{-4 -> 4}}) → **{{(-6, 4)}}** (a {{180°}} rotation about the origin!).",
          ],
          answer: "(a) {{(4, -9)}}, (b) {{(2, -4)}}, (c) {{(-6, 4)}}",
          yourTurn: {
            question:
              "Point {{P(-3, 8)}} lies on {{y = f(x)}}. Find the coordinates {{(x, y)}} of the corresponding point on {{y = 2f(x - 5) + 1}}.",
            answer: { type: "list", values: [2, 17], ordered: true, display: "(2, 17)" },
            solution:
              "Inside {{x - 5 = -3}} gives {{x = 2}}. Outside {{y = 2(8) + 1 = 17}}, so the point is {{(2, 17)}}.",
          },
        },
        {
          title: "Transforming trig and asymptote curves",
          problem:
            "Describe fully the single transformation that maps {{y = cos x}} onto {{y = cos(x - 60°)}}, and state the coordinates of the maximum point for {{0° <= x <= 360°}}.",
          steps: [
            "Replacing {{x}} with {{(x - 60°)}} is an inside-bracket change of {{-60°}}, which shifts the graph **right** by {{60°}}.",
            "In full Edexcel wording: **translation by the vector {{(60, 0)}}** (or horizontal translation {{60°}} to the right).",
            "On {{y = cos x}}, the first maximum is at {{(0°, 1)}}; shifting {{x}} right by {{60°}} moves it to **{{(60°, 1)}}**.",
          ],
          answer: "Translation by vector {{(60, 0)}}; maximum at {{(60°, 1)}}",
          yourTurn: {
            question:
              "For {{0° <= x <= 360°}}, {{y = sin x}} has its maximum at {{(90°, 1)}}. Find the coordinates {{(x, y)}} of the corresponding maximum on {{y = 3 sin(2x)}}.",
            answer: { type: "list", values: [45, 3], ordered: true, display: "(45, 3)" },
            solution:
              "Set {{2x = 90°}} → {{x = 45°}}; multiply {{y = 1}} by {{3}} → {{y = 3}}. Maximum is at {{(45, 3)}}.",
          },
        },
      ],
      keyPoints: [
        "**Inside = {{x}} = Opposite** ({{f(x + 3)}} shifts left {{-3}}, {{f(2x)}} halves {{x}}-coordinates).",
        "**Outside = {{y}} = As written** ({{f(x) + 3}} shifts up {{+3}}, {{2f(x)}} doubles {{y}}-coordinates).",
        "Confusing {{-f(x)}} and {{f(-x)}}: {{-f(x)}} flips **{{y}}** (reflection in the **{{x}}-axis**); {{f(-x)}} flips **{{x}}** (reflection in the **{{y}}-axis**).",
        "When describing a transformation for 2 marks, use precise vocabulary: **'Translation by column vector {{(p, q)}}'**, **'Reflection in the {{x}}-axis ({{y = 0}})'**, or **'Stretch parallel to the {{y}}-axis with scale factor {{k}}'**.",
      ],
      whyItWorks:
        "To get the same output {{y_0 = f(x_0)}} from {{y = f(kx + a)}}, the new input {{x_{new}}} must satisfy {{kx_{new} + a = x_0}}, which rearranges to {{x_{new} = (x_0 - a)/k}} — every operation inside {{f(...)}} gets undone in reverse!",
      strategies: ["Equate inside of bracket to original x₀", "Follow BIDMAS on y₀ outside", "Check with one test point"],
      thinkDeeper:
        "Does the order of transformations matter when going from {{y = f(x)}} to {{y = f(2x + 6)}}? Rewrite {{2x + 6 = 2(x + 3)}} and test what happens to {{x_0 = 0}}!",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "What are the two formulas for the sum {{S_n}} of an arithmetic series?",
        back: "{{S_n = (n/2)(2a + (n - 1)d)}} and {{S_n = (n/2)(a + l)}}, where {{a}} is the first term, {{d}} is the common difference, and {{l}} is the {{n}}th term.",
      },
      {
        front: "How do you find {{a}} in a quadratic sequence {{an^2 + bn + c}}?",
        back: "Find the constant **second difference** and divide by {{2}} (because second difference {{= 2a}}).",
      },
      {
        front: "In what order do you evaluate the composite function {{fg(x)}}?",
        back: "**Inside-out (right to left):** apply {{g}} to {{x}} first, then feed {{g(x)}} into {{f}} so {{fg(x) = f(g(x))}}.",
      },
      {
        front: "Which two algebraic traps force values to be excluded from a function's domain?",
        back: "1) **Denominator {{= 0}}** (division by zero is not defined).\n2) **Inside of an even root {{< 0}}** ({{sqrt(u)}} requires {{u >= 0}}).",
      },
      {
        front: "How do you find {{f^(-1)(x)}} when {{x}} appears twice, e.g. {{f(x) = (2x + 1)/(x - 3)}}?",
        back: "Write {{y = (2x + 1)/(x - 3)}}, swap {{x}} and {{y}}, multiply by {{(y - 3)}}, expand, **collect all {{y}}-terms on one side**, factorise out {{y}}, and divide.",
      },
      {
        front: "What is the relationship between the domain and range of {{f}} and {{f^(-1)}}?",
        back: "**Domain of {{f^(-1)}} = Range of {{f}}**, and **Range of {{f^(-1)}} = Domain of {{f}}**. Their graphs reflect in {{y = x}}.",
      },
      {
        front: "What is the turning point of {{y = a(x + p)^2 + q}}, and when is it a maximum vs minimum?",
        back: "Turning point is **{{(-p, q)}}** (flip sign inside, keep sign outside). Minimum if {{a > 0}} (U-shape); maximum if {{a < 0}} (∩-shape).",
      },
      {
        front: "How are the gradients {{m_1}} and {{m_2}} of two perpendicular lines related?",
        back: "{{m_1 * m_2 = -1}}, so {{m_2 = -1/m_1}} (the **negative reciprocal**).",
      },
      {
        front: "What are the asymptotes of {{y = k/(x - p) + q}}?",
        back: "Vertical asymptote **{{x = p}}** (where denominator is zero) and horizontal asymptote **{{y = q}}**.",
      },
      {
        front: "What point does every exponential curve {{y = a * b^x}} pass through, and what is its asymptote?",
        back: "Y-intercept **{{(0, a)}}** (since {{b^0 = 1}}) and horizontal asymptote **{{y = 0}}** (the {{x}}-axis).",
      },
      {
        front: "Given a plotted graph {{y = f(x)}}, how do you find the straight line that solves {{g(x) = 0}}?",
        back: "Rearrange {{g(x) = 0}} algebraically until the exact plotted formula {{f(x)}} is isolated on one side: {{f(x) = mx + c}}. Then draw {{y = mx + c}}.",
      },
      {
        front: "How do {{y = f(x + a)}} and {{y = f(x) + a}} move a point {{(x, y)}}?",
        back: "{{y = f(x + a)}} shifts **left** by {{a}} to {{(x - a, y)}} (translation vector {{(-a, 0)}}).\n{{y = f(x) + a}} shifts **up** by {{a}} to {{(x, y + a)}} (translation vector {{(0, a)}}).",
      },
      {
        front: "Which axis is the mirror line for {{y = -f(x)}} vs {{y = f(-x)}}?",
        back: "{{y = -f(x)}} negates {{y}} → reflection in the **{{x}}-axis**.\n{{y = f(-x)}} negates {{x}} → reflection in the **{{y}}-axis**.",
      },
      {
        front: "How do {{y = k f(x)}} and {{y = f(kx)}} stretch coordinates {{(x, y)}}?",
        back: "{{y = k f(x)}} stretches vertically parallel to {{y}}-axis by factor {{k}} → {{(x, ky)}}.\n{{y = f(kx)}} stretches horizontally parallel to {{x}}-axis by factor **{{1/k}}** → {{(x/k, y)}}.",
      },
    ],
    mustKnow: [
      "Find any term {{u_n}} and sum {{S_n = (n/2)(2a + (n - 1)d)}} of an arithmetic series, including forming simultaneous equations or solving a quadratic for {{n}}.",
      "Find the {{n}}th term {{an^2 + bn + c}} of a quadratic sequence using second difference {{= 2a}}.",
      "Identify values excluded from the domain of rational and square-root functions, and determine the range of quadratic functions by completing the square.",
      "Form and evaluate composite functions {{fg(x) = f(g(x))}} in right-to-left order and solve equations such as {{fg(x) = gf(x)}}.",
      "Find the inverse {{f^(-1)(x)}} of linear, power and rational functions (where {{x}} appears in both numerator and denominator).",
      "Sketch quadratics showing roots, {{y}}-intercept and turning point {{(-p, q)}}, and find equations of perpendicular lines, normals and perpendicular bisectors.",
      "Recognise and sketch cubic {{ax^3 + bx^2 + cx + d}}, reciprocal {{k/x}} & {{k/x^2}}, and exponential {{a * b^x}} graphs together with their asymptotes.",
      "Deduce the straight line {{y = mx + c}} to draw on a plotted curve {{y = f(x)}} in order to solve a modified polynomial equation.",
      "Apply and describe translations {{f(x) + a}}, {{f(x + a)}}, reflections {{-f(x)}}, {{f(-x)}}, and stretches {{kf(x)}}, {{f(kx)}} on coordinates of turning points and trigonometric graphs.",
    ],
    misconceptions: [
      {
        wrong: "Never write: For {{f(x) = 2x}} and {{g(x) = x + 5}}, {{fg(x) = 2x + 5}} ❌ (applying {{f}} first, left-to-right).",
        right: "Write instead: {{fg(x) = f(g(x)) = f(x + 5) = 2(x + 5) = 2x + 10}} ✅ (apply {{g}} first, inside-out!).",
      },
      {
        wrong: "Never write: {{f^(-1)(x) = 1 / f(x)}} ❌ (confusing the inverse function notation {{-1}} with a negative index reciprocal).",
        right: "Write instead: Write {{y = f(x)}}, swap {{x}} and {{y}}, and rearrange for {{y}} to get {{f^(-1)(x)}} ✅.",
      },
      {
        wrong: "Never write: {{y = f(x + 3)}} shifts the turning point {{(2, 5)}} right to {{(5, 5)}} ❌.",
        right: "Write instead: Inside the bracket acts oppositely on {{x}}, shifting left by {{3}} to {{(-1, 5)}} ✅.",
      },
      {
        wrong: "Never write: {{y = -f(x)}} is a reflection in the {{y}}-axis ❌.",
        right: "Write instead: {{-f(x)}} negates the {{y}}-coordinates {{(x, -y)}}, which reflects across the **{{x}}-axis** ✅.",
      },
      {
        wrong: "Never write: In {{S_n = (n/2)(a + (n - 1)d)}} ❌ (forgetting the {{2}} in front of {{a}}!).",
        right: "Write instead: {{S_n = (n/2)(2a + (n - 1)d)}} ✅ (remember {{a + l = a + a + (n - 1)d = 2a + (n - 1)d}}).",
      },
      {
        wrong: "Never write: Range of {{f(x) = (x - 1)^2 + 4}} is {{x >= 4}} ❌.",
        right: "Write instead: Range measures **outputs**, so write {{f(x) >= 4}} (or {{y >= 4}}) ✅.",
      },
      {
        wrong: "Never write: Perpendicular to gradient {{m = 2/5}} has gradient {{-2/5}} or {{+5/2}} ❌.",
        right: "Write instead: Flip **and** change the sign so {{m_1 m_2 = -1}}: perpendicular gradient is {{-5/2}} ✅.",
      },
    ],
    examMistakes: [
      "Substituting {{u_n = a + nd}} instead of {{a + (n - 1)d}}, making every term off by one jump of {{d}}.",
      "Keeping both roots when solving {{S_n = K}} produces a quadratic like {{(n - 12)(2n + 25) = 0}} — you MUST cross out {{n = -12.5}} because {{n}} is a positive whole number of terms.",
      "Writing 'shifted left by 3' for a 2-mark transformation description instead of the Edexcel mathematical term **'translation by column vector {{-3}} over {{0}}'**.",
      "Forgetting to distribute {{a}} onto the constant when completing the square: writing {{2(x - 3)^2 - 9 + 11}} instead of {{2(x - 3)^2 - 18 + 11}}.",
      "Joining plotted points on a cubic or reciprocal graph with straight ruler lines, or connecting the two branches of {{y = k/x}} across {{x = 0}}.",
      "Giving {{(x, y)}} coordinate pairs when a graphical solve question asks to 'use your graph to find estimates for the solutions of {{x^3 - 4x - 2 = 0}}' — only {{x}} is in the equation!",
      "Multiplying {{x}}-coordinates by {{2}} instead of dividing by {{2}} for {{y = f(2x)}}.",
    ],
    mnemonics: [
      {
        topic: "Graph transformations: Inside vs Outside",
        device: "IVO & IHO — Inside Horizontal Opposite, Outside Vertical Obeys",
        explanation:
          "Anything **Inside** {{f(...)}} affects **Horizontal ({{x}})** in the **Opposite** way ({{+a}} goes left, {{*k}} divides by {{k}}). Anything **Outside** affects **Vertical ({{y}})** and **Obeys** the sign.",
      },
      {
        topic: "Composite function order {{fg(x)}}",
        device: "Hug {{x}} First!",
        explanation:
          "Whichever letter is physically hugging {{x}} in {{fg(x)}} — here {{g}} — acts on {{x}} FIRST; the outer letter acts second.",
      },
      {
        topic: "Perpendicular gradient",
        device: "Flip It & Switch It",
        explanation:
          "Flip the fraction upside down (reciprocal) AND switch {{+}} to {{-}} (or {{-}} to {{+}}), then check their product is {{-1}}.",
      },
    ],
    realWorld: [
      {
        title: "Auditorium Seating & Stadium Tiers",
        detail:
          "Concert halls add a fixed number of seats {{d}} in each row moving back from the stage so sightlines widen evenly; {{S_n = (n/2)(2a + (n - 1)d)}} gives total seating capacity instantly.",
        emoji: "🎭",
      },
      {
        title: "Currency Conversion & Tax Pipelines",
        detail:
          "Converting SGD to GBP ({{g(x) = 0.58x}}) and adding a £3 wire fee ({{f(u) = u + 3}}) is a composite function {{fg(x)}} — reversing the transaction uses the inverse {{(fg)^(-1)(x) = g^(-1)f^(-1)(x)}}!",
        emoji: "💱",
      },
      {
        title: "Audio Equalizers & Waveform Shifting",
        detail:
          "In GarageBand or Logic Pro, boosting volume is {{k f(t)}}, pitching up an octave doubles frequency via {{f(2t)}}, and adding stereo delay is {{f(t - d)}}.",
        emoji: "🎧",
      },
      {
        title: "Radioactive Half-Life & Viral Growth",
        detail:
          "Carbon-14 decay follows {{M(t) = M_0 * (0.5)^(t/5730)}}, an exponential decay curve approaching horizontal asymptote {{M = 0}}.",
        emoji: "☢️",
      },
    ],
    videos: [
      {
        title: "Edexcel IGCSE Maths Higher: Arithmetic Series (Sn)",
        channel: "Maths Genie",
        url: "https://www.youtube.com/results?search_query=edexcel+igcse+maths+arithmetic+series+sn+maths+genie",
      },
      {
        title: "Composite and Inverse Functions — IGCSE Higher",
        channel: "GCSE Maths Tutor",
        url: "https://www.youtube.com/results?search_query=composite+and+inverse+functions+igcse+higher+gcse+maths+tutor",
      },
      {
        title: "Transforming Graphs y = f(x) Full Guide",
        channel: "Corbettmaths",
        url: "https://www.youtube.com/results?search_query=corbettmaths+transformations+of+graphs+f(x)",
      },
      {
        title: "Cubic, Reciprocal & Exponential Graphs + Drawing a Line to Solve Equations",
        channel: "1st Class Maths",
        url: "https://www.youtube.com/results?search_query=1st+class+maths+cubic+reciprocal+exponential+graphs+solve+equation+by+drawing+line",
      },
    ],
    formulas: [
      {
        name: "Arithmetic sequence nth term",
        formula: "{{u_n = a + (n - 1)d}}",
        note: "a = 1st term, d = common difference",
      },
      {
        name: "Arithmetic series sum (given on 4MA1 sheet)",
        formula: "{{S_n = (n/2)(2a + (n - 1)d) = (n/2)(a + l)}}",
        note: "l = last (nth) term",
      },
      {
        name: "Quadratic sequence 2nd difference",
        formula: "{{u_n = an^2 + bn + c  =>  2nd difference = 2a}}",
        note: "Halve the 2nd difference to find a",
      },
      {
        name: "Composite function order",
        formula: "{{fg(x) = f(g(x))}}",
        note: "Apply g first, then f",
      },
      {
        name: "Completed-square vertex",
        formula: "{{y = a(x + p)^2 + q  =>  vertex (-p, q)}}",
        note: "Line of symmetry x = −p = −b/(2a)",
      },
      {
        name: "Perpendicular gradients",
        formula: "{{m_1 * m_2 = -1  =>  m_2 = -1/m_1}}",
        note: "Negative reciprocal",
      },
      {
        name: "Point-slope line equation",
        formula: "{{y - y_1 = m(x - x_1)}}",
        note: "Through (x₁, y₁) with gradient m",
      },
      {
        name: "Combined graph transformation",
        formula: "{{y = k f(b(x + h)) + c  :  (x_0, y_0) -> (x_0/b - h, k y_0 + c)}}",
        note: "Inside acts inversely on x; outside acts directly on y",
      },
    ],
  },
};
