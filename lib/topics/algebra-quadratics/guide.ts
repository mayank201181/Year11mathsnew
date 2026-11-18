import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "algebra-quadratics",
  title: "Quadratics, Algebraic Fractions & Proof",
  strand: "Algebra",
  icon: "🧬",
  summary: "Master polynomial structure — from triple brackets and completing the square to algebraic fractions and watertight proof.",
  intro:
    "Higher IGCSE algebra is really one big idea: **rewriting an expression into the shape that reveals what you need**. Expanded form lets you add and subtract polynomials cleanly; factorised form lets you cancel algebraic fractions and spot roots; completed-square form exposes the minimum or maximum at a glance; and algebraic proof turns number patterns into ironclad certainty.",
  guide: [
    {
      id: "expanding-three-brackets",
      heading: "Expanding triple brackets & polynomial manipulation",
      discovery: {
        problem:
          "A student expands {{(x + 2)(x - 3)(x + 4)}} by multiplying all the {{x}}'s to get {{x^3}} and multiplying the numbers {{2 * (-3) * 4}} to get {{-24}}, writing {{x^3 - 24}}. Test {{x = 1}} in both expressions — how much is missing, and where did the missing terms come from?",
        idea:
          "At {{x = 1}}, {{(1 + 2)(1 - 3)(1 + 4) = 3 * (-2) * 5 = -30}}, whereas {{1^3 - 24 = -23}}! Every bracket has **two** choices ({{x}} or constant), giving {{2 * 2 * 2 = 8}} products that collect into {{x^3 + 3x^2 - 10x - 24}}. Multiply **two brackets first**, simplify, then multiply by the third.",
      },
      body:
        "To expand three linear brackets {{(ax + b)(cx + d)(ex + f)}} without losing a term or flipping a sign, always work in **two clean stages**:\n\n1. **Stage 1 — Expand and simplify one pair first:** multiply the first two brackets and **collect like terms immediately** so you have a tidy quadratic {{Ax^2 + Bx + C}}.\n2. **Stage 2 — Multiply the quadratic by the third bracket:** split the third bracket so each part multiplies the entire quadratic, e.g. {{ex(Ax^2 + Bx + C) + f(Ax^2 + Bx + C)}}, or lay out a {{3 * 2}} multiplication grid.\n3. **Collect like powers** in descending order: {{x^3}}, then {{x^2}}, then {{x}}, then the constant.\n\n**Watch the subtracted-bracket trap!** When an expression subtracts a product or a squared bracket, such as {{(3x + 2)^2 - (2x - 5)^2}}, keep the second expansion **inside protective brackets** first:\n\n    {{(3x + 2)^2 - (2x - 5)^2 = (9x^2 + 12x + 4) - (4x^2 - 20x + 25) = 5x^2 + 32x - 21}}\n\n| Term in {{(2x^2 + 5x - 12)(x - 1)}} | Multiply by {{x}} | Multiply by {{-1}} |\n|---|---|---|\n| {{2x^2}} | {{2x^3}} | {{-2x^2}} |\n| {{+5x}} | {{+5x^2}} | {{-5x}} |\n| {{-12}} | {{-12x}} | {{+12}} |",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 155" role="img" aria-label="3 by 2 multiplication grid multiplying 2x squared plus 5x minus 12 by x minus 1"><rect x="10" y="10" width="400" height="135" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><line x1="95" y1="10" x2="95" y2="145" stroke="#94a3b8" stroke-width="1.5"/><line x1="200" y1="10" x2="200" y2="145" stroke="#cbd5e1"/><line x1="305" y1="10" x2="305" y2="145" stroke="#cbd5e1"/><line x1="10" y1="50" x2="410" y2="50" stroke="#94a3b8" stroke-width="1.5"/><line x1="10" y1="97" x2="410" y2="97" stroke="#cbd5e1"/><text x="52" y="35" font-size="13" font-weight="bold" fill="#475569" text-anchor="middle">×</text><text x="147" y="35" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">2x²</text><text x="252" y="35" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">+5x</text><text x="357" y="35" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">−12</text><text x="52" y="79" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">x</text><text x="52" y="126" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">−1</text><rect x="96" y="51" width="103" height="45" fill="#dbeafe"/><rect x="201" y="51" width="103" height="45" fill="#fef3c7"/><rect x="96" y="98" width="103" height="46" fill="#fef3c7"/><rect x="306" y="51" width="103" height="45" fill="#dcfce7"/><rect x="201" y="98" width="103" height="46" fill="#dcfce7"/><rect x="306" y="98" width="103" height="46" fill="#f1f5f9"/><text x="147" y="79" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">2x³</text><text x="252" y="79" font-size="13" fill="#92400e" text-anchor="middle">+5x²</text><text x="357" y="79" font-size="13" fill="#166534" text-anchor="middle">−12x</text><text x="147" y="126" font-size="13" fill="#92400e" text-anchor="middle">−2x²</text><text x="252" y="126" font-size="13" fill="#166534" text-anchor="middle">−5x</text><text x="357" y="126" font-size="13" font-weight="bold" fill="#334155" text-anchor="middle">+12</text></svg>`,
      diagramCaption: "In a 3 × 2 grid, matching colours along the diagonals are like terms: (+5x² − 2x²) = +3x² and (−12x − 5x) = −17x.",
      workedExamples: [
        {
          title: "Expanding triple brackets in two stages",
          problem: "Expand and simplify {{(2x - 3)(x + 4)(x - 1)}}.",
          steps: [
            "Expand the first pair: {{(2x - 3)(x + 4) = 2x^2 + 8x - 3x - 12 = 2x^2 + 5x - 12}}.",
            "Multiply the simplified quadratic by {{(x - 1)}}: {{x(2x^2 + 5x - 12) - 1(2x^2 + 5x - 12)}}.",
            "Expand both parts: {{2x^3 + 5x^2 - 12x - 2x^2 - 5x + 12}}.",
            "Collect like powers: {{2x^3 + 3x^2 - 17x + 12}}.",
          ],
          answer: "{{2x^3 + 3x^2 - 17x + 12}}",
          yourTurn: {
            question: "Expand and simplify {{(x + 2)(2x - 1)(x + 3)}}.",
            answer: { type: "expression", expr: "2x^3 + 9x^2 + 7x - 6", form: "expanded" },
            solution: "First pair: {{(x + 2)(2x - 1) = 2x^2 + 3x - 2}}. Multiply by {{(x + 3)}}: {{x(2x^2 + 3x - 2) + 3(2x^2 + 3x - 2) = 2x^3 + 9x^2 + 7x - 6}}.",
          },
        },
        {
          title: "Subtracting squared brackets cleanly",
          problem: "Expand and simplify {{(3x + 2)^2 - (2x - 5)^2}}.",
          steps: [
            "Expand each squared bracket inside protective parentheses: {{(9x^2 + 12x + 4) - (4x^2 - 20x + 25)}}.",
            "Distribute the minus sign across all three terms in the second bracket: {{9x^2 + 12x + 4 - 4x^2 + 20x - 25}}.",
            "Collect like terms: {{5x^2 + 32x - 21}}.",
          ],
          answer: "{{5x^2 + 32x - 21}}",
          yourTurn: {
            question: "Expand and simplify {{(2x + 3)^2 - (x - 4)^2}}.",
            answer: { type: "expression", expr: "3x^2 + 20x - 7", form: "expanded" },
            solution: "{{(4x^2 + 12x + 9) - (x^2 - 8x + 16) = 4x^2 + 12x + 9 - x^2 + 8x - 16 = 3x^2 + 20x - 7}}.",
          },
        },
      ],
      keyPoints: [
        "Never try to expand all three brackets in one leap — simplify the first two into {{Ax^2 + Bx + C}} first (earns M1 immediately).",
        "Remember {{(ax + b)^2 = a^2x^2 + 2abx + b^2}}, NEVER {{a^2x^2 + b^2}}.",
        "Keep subtracted expansions in brackets until the minus sign is distributed to every term.",
        "Quick sanity check: substitute {{x = 1}} into the brackets and into your final cubic — the two numbers must match!",
      ],
      whyItWorks:
        "Multiplication distributes over addition ({{A(B + C) = AB + AC}}) and is associative ({{(PQ)R = P(QR)}}). Simplifying {{PQ}} from four terms down to three before multiplying by {{R}} cuts the final expansion from eight raw terms down to six.",
      strategies: ["Two-stage expansion", "Protective brackets on subtraction", "Substitute x = 1 check"],
      thinkDeeper:
        "In {{(x + p)(x + q)(x + r) = x^3 + Ax^2 + Bx + C}}, how are {{A}}, {{B}} and {{C}} related to {{p}}, {{q}} and {{r}}? Use your rule to write down the expansion of {{(x + 1)(x + 2)(x + 3)}} mentally!",
    },
    {
      id: "factorising-quadratics",
      heading: "Factorising ax² + bx + c & difference of two squares",
      discovery: {
        problem:
          "Expand {{(3x + 2)(2x - 5)}} step by step: {{6x^2 - 15x + 4x - 10 = 6x^2 - 11x - 10}}. Notice the two middle pieces {{-15}} and {{+4}}: what do they add to, and what do they multiply to? Compare their product with {{6 * (-10)}}!",
        idea:
          "In {{(px + q)(rx + s) = prx^2 + (ps + qr)x + qs}}, the two split coefficients {{ps}} and {{qr}} **add** to {{b = -11}} and **multiply** to {{(pr)(qs) = ac = -60}}. Finding two numbers that multiply to {{ac}} and add to {{b}} reverses the expansion with zero guesswork!",
      },
      body:
        "Follow a strict **three-step checklist** whenever you factorise a quadratic on Edexcel 4MA1 Higher:\n\n1. **Common factor FIRST:** Always check whether a number or variable divides every term. For example, {{18x^2 - 50y^2 = 2(9x^2 - 25y^2)}} and {{6x^2 - 15x = 3x(2x - 5)}}.\n2. **Two terms? Check Difference of Two Squares (DOTS):** Any expression of the form {{A^2 - B^2}} factorises immediately into {{(A - B)(A + B)}}:\n   - {{9x^2 - 25y^2 = (3x)^2 - (5y)^2 = (3x - 5y)(3x + 5y)}}\n   - Compound DOTS: {{(2x + 3)^2 - (x - 1)^2 = ((2x + 3) - (x - 1))((2x + 3) + (x - 1)) = (x + 4)(3x + 2)}}\n3. **Three terms {{ax^2 + bx + c}} with {{a > 1}}? Use the {{ac}}-method (splitting the middle term):**\n   - Multiply {{a * c}} (keeping the sign!).\n   - Find two integers {{m}} and {{n}} with {{m * n = ac}} and {{m + n = b}}.\n   - Rewrite {{bx}} as {{mx + nx}}, then factorise in pairs so both halves share the same bracket.\n\n| Sign of {{c}} | Sign of {{b}} | Signs of split pair {{m, n}} |\n|---|---|---|\n| {{c > 0}} ({{ac > 0}}) | {{b > 0}} | Both positive |\n| {{c > 0}} ({{ac > 0}}) | {{b < 0}} | Both negative |\n| {{c < 0}} ({{ac < 0}}) | Either | Opposite signs (larger magnitude matches sign of {{b}}) |",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 165" role="img" aria-label="Area model and ac-method split for 6x squared minus 11x minus 10 into 3x plus 2 times 2x minus 5"><rect x="15" y="15" width="185" height="135" rx="8" fill="#f8fafc" stroke="#64748b" stroke-width="1.5"/><line x1="115" y1="15" x2="115" y2="150" stroke="#94a3b8" stroke-width="1.5"/><line x1="15" y1="85" x2="200" y2="85" stroke="#94a3b8" stroke-width="1.5"/><text x="65" y="11" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">2x</text><text x="157" y="11" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">−5</text><text x="8" y="55" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="end">3x</text><text x="8" y="122" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="end">+2</text><text x="65" y="55" font-size="14" font-weight="bold" fill="#1d4ed8" text-anchor="middle">6x²</text><text x="157" y="55" font-size="14" font-weight="bold" fill="#b45309" text-anchor="middle">−15x</text><text x="65" y="122" font-size="14" font-weight="bold" fill="#b45309" text-anchor="middle">+4x</text><text x="157" y="122" font-size="14" font-weight="bold" fill="#15803d" text-anchor="middle">−10</text><rect x="220" y="20" width="185" height="125" rx="8" fill="#eff6ff" stroke="#93c5fd"/><text x="312" y="44" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">ac = 6 × (−10) = −60</text><text x="312" y="68" font-size="12" fill="#1e40af" text-anchor="middle">−15 × 4 = −60</text><text x="312" y="88" font-size="12" fill="#1e40af" text-anchor="middle">−15 + 4 = −11</text><text x="312" y="114" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">3x(2x − 5) + 2(2x − 5)</text><text x="312" y="135" font-size="13" font-weight="bold" fill="#15803d" text-anchor="middle">= (3x + 2)(2x − 5)</text></svg>`,
      diagramCaption: "In the rectangle grid for (3x + 2)(2x − 5), both diagonals multiply to −60x² while the x-terms sum to −11x.",
      workedExamples: [
        {
          title: "Factorising ax² + bx + c using the ac-method",
          problem: "Factorise {{6x^2 - 11x - 10}}.",
          steps: [
            "Compute {{ac = 6 * (-10) = -60}}. We need two integers multiplying to {{-60}} and adding to {{b = -11}}: those are {{-15}} and {{+4}}.",
            "Split the middle term: {{6x^2 - 15x + 4x - 10}}.",
            "Factorise in pairs: {{3x(2x - 5) + 2(2x - 5)}}.",
            "Take out the shared bracket {{(2x - 5)}}: {{(3x + 2)(2x - 5)}}.",
          ],
          answer: "{{(3x + 2)(2x - 5)}}",
          yourTurn: {
            question: "Factorise {{4x^2 + 5x - 6}}.",
            answer: { type: "expression", expr: "(4x - 3)(x + 2)", form: "factorised" },
            solution: "{{ac = 4 * (-6) = -24}}; pair {{+8}} and {{-3}} adds to {{+5}}. Split: {{4x^2 + 8x - 3x - 6 = 4x(x + 2) - 3(x + 2) = (4x - 3)(x + 2)}}.",
          },
        },
        {
          title: "Compound difference of two squares",
          problem: "Factorise fully {{(2x + 3)^2 - (x - 1)^2}}.",
          steps: [
            "Recognise {{A^2 - B^2 = (A - B)(A + B)}} with {{A = 2x + 3}} and {{B = x - 1}}.",
            "Form the two brackets carefully using inner parentheses: {{((2x + 3) - (x - 1))((2x + 3) + (x - 1))}}.",
            "Simplify each bracket (watch {{- (-1) = +1}}!): {{(2x + 3 - x + 1)(2x + 3 + x - 1) = (x + 4)(3x + 2)}}.",
          ],
          answer: "{{(x + 4)(3x + 2)}}",
          yourTurn: {
            question: "Factorise fully {{18x^2 - 50y^2}}.",
            answer: { type: "expression", expr: "2(3x - 5y)(3x + 5y)", form: "factorised" },
            solution: "Take out the common factor {{2}} first: {{2(9x^2 - 25y^2)}}. Then apply difference of two squares: {{2(3x - 5y)(3x + 5y)}}.",
          },
        },
      ],
      keyPoints: [
        "\"Factorise **fully**\" is an exam code-phrase meaning there is a common numerical or algebraic factor to pull out **as well as** brackets!",
        "Note {{A^2 + B^2}} (a **sum** of two squares) does **not** factorise over the real numbers — only {{A^2 - B^2}} does.",
        "When grouping with a negative third term like {{4x^2 + 8x - 3x - 6}}, factor out {{-3}} so the sign inside flips: {{-3(x + 2)}}.",
        "Mentally FOIL your two brackets at the end — checking takes 5 seconds and guarantees full marks.",
      ],
      whyItWorks:
        "In {{(px + q)(rx + s) = prx^2 + (ps + qr)x + qs}}, the product of the outer and inner coefficients {{(ps)(qr)}} equals {{(pr)(qs) = ac}}. That algebraic identity guarantees that whenever integer factors exist, the middle term {{bx}} splits into a pair whose product is {{ac}}.",
      strategies: ["Common factor first", "ac-method middle-term split", "Difference of two squares A² − B²"],
      thinkDeeper:
        "Can you use difference of two squares backwards to calculate {{103 * 97}} or {{54^2 - 46^2}} in your head in three seconds?",
    },
    {
      id: "completing-the-square",
      heading: "Completing the square a(x + p)² + q",
      discovery: {
        problem:
          "Compare {{y = x^2 - 6x + 13}} with {{y = (x - 3)^2 + 4}}. First check they are identical by expanding {{(x - 3)^2 + 4}}. Now, without plotting a graph or using calculus, explain why {{x^2 - 6x + 13}} can **never** be less than {{4}} for any real number {{x}}!",
        idea:
          "Any real number squared is never negative: {{(x - 3)^2 >= 0}} for all real {{x}}, and equals {{0}} only when {{x = 3}}. Adding {{4}} means {{(x - 3)^2 + 4 >= 4}} always — locking in a minimum value of {{4}} at the turning point {{(3, 4)}}!",
      },
      body:
        "**Completing the square** rewrites {{ax^2 + bx + c}} with {{x}} appearing **once only**, inside a squared bracket:\n\n- **Case 1 ({{a = 1}}):** Halve the coefficient of {{x}} and subtract the extra square:\n\n      {{x^2 + bx + c = (x + b/2)^2 - (b/2)^2 + c}}\n\n- **Case 2 ({{a > 1}}):** Factor {{a}} out of the **first two terms** (leave {{c}} outside), complete the square inside big brackets, then multiply {{a}} back through:\n\n      {{2x^2 - 12x + 11 = 2(x^2 - 6x) + 11 = 2((x - 3)^2 - 9) + 11 = 2(x - 3)^2 - 18 + 11 = 2(x - 3)^2 - 7}}\n\n- **Case 3 ({{a < 0}}, e.g. {{q - a(x + p)^2}}):** Factor the negative coefficient out of the {{x^2}} and {{x}} terms, watching the flipped sign on {{x}}:\n\n      {{7 + 8x - 2x^2 = -2(x^2 - 4x) + 7 = -2((x - 2)^2 - 4) + 7 = -2(x - 2)^2 + 8 + 7 = 15 - 2(x - 2)^2}}\n\n| Form of {{y = a(x + p)^2 + q}} | Shape | Turning point | Extreme value & line of symmetry |\n|---|---|---|---|\n| {{a > 0}} | U-shaped (∪) | Minimum at {{(-p, q)}} | Minimum {{y = q}} on {{x = -p}} |\n| {{a < 0}} | Inverted (∩) | Maximum at {{(-p, q)}} | Maximum {{y = q}} on {{x = -p}} |",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 180" role="img" aria-label="Parabola y equals 2 times x minus 3 squared minus 7 with minimum turning point at 3 comma minus 7 and axis of symmetry x equals 3"><rect x="10" y="10" width="400" height="160" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><line x1="40" y1="85" x2="380" y2="85" stroke="#64748b" stroke-width="1.5"/><line x1="115" y1="20" x2="115" y2="160" stroke="#64748b" stroke-width="1.5"/><line x1="235" y1="20" x2="235" y2="160" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,4"/><path d="M 163 23 Q 235 267 307 23" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="235" cy="145" r="4.5" fill="#dc2626"/><text x="245" y="152" font-size="12" font-weight="bold" fill="#dc2626">Minimum (3, −7)</text><text x="242" y="34" font-size="11" font-weight="bold" fill="#dc2626">x = 3</text><text x="320" y="52" font-size="12" font-weight="bold" fill="#1d4ed8">y = 2(x − 3)² − 7</text><text x="105" y="80" font-size="11" fill="#475569">O</text><text x="372" y="79" font-size="11" fill="#475569">x</text><text x="122" y="29" font-size="11" fill="#475569">y</text></svg>`,
      diagramCaption: "For y = 2(x − 3)² − 7, the bracket vanishes at x = 3 (flip the sign!) giving minimum y = −7 (keep the sign!).",
      workedExamples: [
        {
          title: "Completing the square when a > 1",
          problem: "Write {{2x^2 - 12x + 11}} in the form {{a(x + p)^2 + q}}, and state the coordinates of the turning point of {{y = 2x^2 - 12x + 11}}.",
          steps: [
            "Factor {{2}} out of the first two terms only: {{2(x^2 - 6x) + 11}}.",
            "Complete the square on {{x^2 - 6x = (x - 3)^2 - 9}} inside outer brackets: {{2((x - 3)^2 - 9) + 11}}.",
            "Expand the outer {{2}}: {{2(x - 3)^2 - 18 + 11 = 2(x - 3)^2 - 7}}.",
            "Since {{a = 2 > 0}}, the turning point is a minimum at {{(3, -7)}}.",
          ],
          answer: "{{2(x - 3)^2 - 7}}, turning point {{(3, -7)}}",
          yourTurn: {
            question: "Write {{3x^2 + 12x + 5}} in the form {{a(x + p)^2 + q}}.",
            answer: { type: "expression", expr: "3(x + 2)^2 - 7", form: "any" },
            solution: "{{3(x^2 + 4x) + 5 = 3((x + 2)^2 - 4) + 5 = 3(x + 2)^2 - 12 + 5 = 3(x + 2)^2 - 7}}.",
          },
        },
        {
          title: "Negative x² coefficient and maximum value",
          problem: "Write {{7 + 8x - 2x^2}} in the form {{q - a(x + p)^2}} and state its maximum value and the value of {{x}} at which it occurs.",
          steps: [
            "Factor {{-2}} out of the {{x^2}} and {{x}} terms (watch the sign flip!): {{-2(x^2 - 4x) + 7}}.",
            "Complete the square inside: {{-2((x - 2)^2 - 4) + 7}}.",
            "Multiply {{-2}} through both inner parts: {{-2(x - 2)^2 + 8 + 7 = 15 - 2(x - 2)^2}}.",
            "Because {{(x - 2)^2 >= 0}}, subtracting {{2(x - 2)^2}} makes the expression largest when {{x = 2}}, giving maximum value {{15}}.",
          ],
          answer: "{{15 - 2(x - 2)^2}}; maximum {{15}} at {{x = 2}}",
          yourTurn: {
            question: "Find the coordinates of the turning point of the curve {{y = 5 + 6x - x^2}}.",
            answer: { type: "list", values: [3, 14], ordered: true, display: "(3, 14)" },
            solution: "{{-(x^2 - 6x) + 5 = -((x - 3)^2 - 9) + 5 = 14 - (x - 3)^2}}, so the maximum turning point is {{(3, 14)}}.",
          },
        },
      ],
      keyPoints: [
        "When {{a != 1}}, the subtracted square {{(b/(2a))^2}} inside the big bracket MUST be multiplied by {{a}} when expanding out!",
        "Turning point of {{y = a(x + p)^2 + q}} is {{(-p, q)}}: **flip** the sign inside the bracket, **keep** the sign outside.",
        "If an exam question asks \"Show that {{x^2 - 6x + 13 > 0}} for all real {{x}}\", complete the square to {{(x - 3)^2 + 4}} and state explicitly that {{(x - 3)^2 >= 0}} so {{(x - 3)^2 + 4 >= 4 > 0}}.",
      ],
      whyItWorks:
        "Geometrically, an {{x}}-by-{{x}} square plus two {{(b/2)}}-by-{{x}} rectangles almost forms a larger {{(x + b/2)}} square — it is only missing the tiny corner square of area {{(b/2)^2}}. Adding and subtracting that corner completes the square.",
      strategies: ["Factor out a from x-terms first", "Outer-bracket shield", "Non-negativity of squares (X² ≥ 0)"],
      thinkDeeper:
        "Complete the square on the general quadratic equation {{ax^2 + bx + c = 0}} (divide by {{a}} first). What famous formula drops straight out when you solve for {{x}}?",
    },
    {
      id: "algebraic-fractions",
      heading: "Simplifying & combining algebraic fractions",
      discovery: {
        problem:
          "Two students simplify {{(x^2 + 5x + 6)/(x^2 - 4)}}. Alex crosses out {{x^2}} on top and bottom to get {{(5x + 6)/(-4)}}. Priya factorises first to get {{(x + 3)/(x - 2)}}. Substitute {{x = 4}} into the original fraction — who is right, and why did Alex's shortcut fail?",
        idea:
          "At {{x = 4}}, {{(16 + 20 + 6)/(16 - 4) = 42/12 = 7/2}}, matching Priya's {{(4 + 3)/(4 - 2) = 7/2}} (Alex gets {{26/(-4) = -13/2}}!). Fraction bars divide **whole numerators by whole denominators**, so you can only cancel **common factors** (multiplied), NEVER individual terms added or subtracted!",
      },
      body:
        "Algebraic fractions obey the **exact same laws as numerical fractions** — provided you **factorise every quadratic or common-factor expression first**:\n\n- **Simplifying:** Factorise numerator and denominator completely, then cancel identical bracket factors:\n\n      {{(3x^2 - 12)/(x^2 + 5x + 6) = (3(x - 2)(x + 2))/((x + 2)(x + 3)) = (3(x - 2))/(x + 3)}}\n\n- **Multiplying & Dividing:** For division, **flip the second fraction** and change {{÷}} to {{*}}. Factorise everything BEFORE multiplying out so factors cancel cleanly across top and bottom.\n- **Adding & Subtracting:**\n  1. Factorise any quadratic denominator first — e.g. {{x^2 + x - 6 = (x - 2)(x + 3)}} often **already contains** the other linear denominator!\n  2. Rewrite over the **lowest common denominator (LCD)**, rather than blindly multiplying denominators together.\n  3. Combine numerators using **brackets around subtracted numerators**, expand the top, collect like terms, and **check whether the simplified numerator factorises and cancels one more time!**\n\n| Operation | Golden rule |\n|---|---|\n| Simplify {{P/Q}} | Factorise {{P}} and {{Q}} first; cancel multiplied factors only |\n| {{(A/B) ÷ (C/D)}} | Rewrite as {{(A/B) * (D/C)}}, factorise all four parts, cancel |\n| {{A/B - C/D}} | Putover LCD; write numerator as {{A(...) - (C(...))}} to protect signs |",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 145" role="img" aria-label="Comparison showing crossing out x squared across addition is wrong while factorising into brackets and cancelling x plus 2 is right"><rect x="12" y="12" width="190" height="120" rx="10" fill="#fef2f2" stroke="#fca5a5"/><text x="107" y="34" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">✗ NEVER cancel terms</text><text x="107" y="65" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">x² + 5x + 6</text><line x1="50" y1="74" x2="164" y2="74" stroke="#0f172a" stroke-width="1.5"/><text x="107" y="95" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">x² − 4</text><line x1="58" y1="53" x2="78" y2="69" stroke="#dc2626" stroke-width="2.5"/><line x1="84" y1="83" x2="104" y2="99" stroke="#dc2626" stroke-width="2.5"/><text x="107" y="120" font-size="11" fill="#991b1b" text-anchor="middle">x² is ADDED, not a factor!</text><rect x="218" y="12" width="190" height="120" rx="10" fill="#f0fdf4" stroke="#86efac"/><text x="313" y="34" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">✓ Factorise, THEN cancel</text><text x="313" y="65" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">(x + 2)(x + 3)</text><line x1="250" y1="74" x2="376" y2="74" stroke="#0f172a" stroke-width="1.5"/><text x="313" y="95" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">(x − 2)(x + 2)</text><line x1="262" y1="52" x2="310" y2="69" stroke="#16a34a" stroke-width="2.2"/><line x1="315" y1="82" x2="363" y2="99" stroke="#16a34a" stroke-width="2.2"/><text x="313" y="120" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">= (x + 3) / (x − 2)</text></svg>`,
      diagramCaption: "Plus and minus signs glue expressions together; only whole bracket factors multiplied across the top and bottom can cancel.",
      workedExamples: [
        {
          title: "Dividing algebraic fractions by factorising first",
          problem: "Express {{(2x^2 + 5x - 3)/(x^2 - 9) ÷ (2x - 1)/(x + 4)}} as a single fraction in its simplest form.",
          steps: [
            "Flip the divisor and multiply: {{(2x^2 + 5x - 3)/(x^2 - 9) * (x + 4)/(2x - 1)}}.",
            "Factorise both quadratics: {{2x^2 + 5x - 3 = (2x - 1)(x + 3)}} and {{x^2 - 9 = (x - 3)(x + 3)}}.",
            "Rewrite as {{((2x - 1)(x + 3))/((x - 3)(x + 3)) * (x + 4)/(2x - 1)}}.",
            "Cancel the common factors {{(x + 3)}} and {{(2x - 1)}} to leave {{(x + 4)/(x - 3)}}.",
          ],
          answer: "{{(x + 4)/(x - 3)}}",
          yourTurn: {
            question: "Simplify fully {{(3x^2 - 12)/(x^2 + 5x + 6)}}.",
            answer: { type: "expression", expr: "(3x - 6)/(x + 3)", form: "any" },
            solution: "Numerator: {{3(x^2 - 4) = 3(x - 2)(x + 2)}}. Denominator: {{(x + 2)(x + 3)}}. Cancel {{(x + 2)}} to get {{(3(x - 2))/(x + 3)}}.",
          },
        },
        {
          title: "Subtracting over a quadratic common denominator (with final cancel!)",
          problem: "Express {{4/(x - 2) - (x + 18)/(x^2 + x - 6)}} as a single fraction in its simplest form.",
          steps: [
            "Factorise the quadratic denominator: {{x^2 + x - 6 = (x - 2)(x + 3)}}, which is the LCD!",
            "Scale the first fraction by {{(x + 3)}} and combine using brackets: {{(4(x + 3) - (x + 18))/((x - 2)(x + 3))}}.",
            "Expand and simplify the numerator carefully: {{4x + 12 - x - 18 = 3x - 6 = 3(x - 2)}}.",
            "Cancel {{(x - 2)}} from top and bottom: {{(3(x - 2))/((x - 2)(x + 3)) = 3/(x + 3)}}.",
          ],
          answer: "{{3/(x + 3)}}",
          yourTurn: {
            question: "Express {{3/(x + 1) - (x - 11)/(x^2 - 2x - 3)}} as a single fraction in its simplest form.",
            answer: { type: "expression", expr: "2/(x - 3)", form: "any" },
            solution: "{{x^2 - 2x - 3 = (x - 3)(x + 1)}}. Numerator: {{3(x - 3) - (x - 11) = 3x - 9 - x + 11 = 2x + 2 = 2(x + 1)}}. Cancel {{(x + 1)}} to obtain {{2/(x - 3)}}.",
          },
        },
      ],
      keyPoints: [
        "Note {{b - a = -(a - b)}}, so {{(3 - x)/(x - 3) = -1}} — spotting reversed-subtraction factors saves huge algebra!",
        "Leave your final denominator in factorised form {{(x - 2)(x + 3)}} unless asked to expand — it makes checking for a final cancellation effortless.",
        "On 4-mark Edexcel subtraction questions, **always** check whether your simplified numerator factorises one last time!",
      ],
      whyItWorks:
        "Multiplying or dividing both numerator and denominator by the same non-zero factor {{K}} multiplies the fraction by {{K/K = 1}}, leaving its value unchanged (for all {{x}} where denominators are non-zero).",
      strategies: ["Factorise before touching anything", "LCD via quadratic factorisation", "Check for final-step cancellation"],
      thinkDeeper:
        "Why is {{(x^2 - 9)/(x - 3)}} equal to {{x + 3}} for almost every number, yet excluded (division by zero) at {{x = 3}}? What would its graph look like?",
    },
    {
      id: "rearranging-and-proof",
      heading: "Changing the subject (twice) & algebraic proof",
      discovery: {
        problem:
          "Try making {{x}} the subject of {{y = (3x - 5)/(2x + 1)}}. A student writes {{x = (2xy + y + 5)/3}} and stops. Why does that earn **zero** final accuracy marks, and what single algebraic move merges two {{x}}-terms into one {{x}}?",
        idea:
          "A subject formula cannot contain {{x}} on **both** sides! Once all {{x}}-terms sit on one side ({{3x - 2xy = y + 5}}), **factorising out {{x}}** merges two appearances of {{x}} into one: {{x(3 - 2y) = y + 5}}, so {{x = (y + 5)/(3 - 2y)}}.",
      },
      body:
        "### Part 1 — Changing the subject when {{x}} appears twice\nMemorise the **4-step CFFD algorithm** (*Clear, Collect, Factorise, Divide*):\n1. **Clear** fractions and expand brackets (multiply through by any denominator; square both sides first if {{x}} is trapped under a square root).\n2. **Collect** every term containing the target letter {{x}} on **one side** of {{=}}, and push every non-{{x}} term to the **other side**.\n3. **Factorise** {{x}} out as a single common factor: {{x(...) = ...}}.\n4. **Divide** by the bracket multiplying {{x}}.\n\n### Part 2 — Rigorous algebraic proof\nTesting numerical examples ({{n = 1, 2, 3}}) **never** proves an ”always true” statement! Instead, translate the words into algebra for an integer {{n}}, expand and simplify, then **factorise out the required divisor** and write a one-sentence conclusion:\n\n| Description in words | Algebraic representation ({{n}} an integer) |\n|---|---|\n| Any even integer / any odd integer | {{2n}} / {{2n + 1}} (or {{2n - 1}}) |\n| Three consecutive integers | {{n}}, {{n + 1}}, {{n + 2}} (or {{n - 1, n, n + 1}}) |\n| Two consecutive odd integers | {{2n - 1}} and {{2n + 1}} (gap of **2**, not 1!) |\n| Two arbitrary (possibly unrelated) even integers | {{2m}} and {{2n}} (use **different** letters!) |\n| Multiple of {{k}} / {{r}} more than a multiple of {{k}} | {{k(...)}} / {{k(...) + r}} |",
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 140" role="img" aria-label="Four-step flowchart for rearranging a formula when x appears twice: Clear, Collect, Factorise out x, Divide"><rect x="10" y="30" width="90" height="80" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/><text x="55" y="55" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">1. CLEAR</text><text x="55" y="75" font-size="10" fill="#1e40af" text-anchor="middle">2xy + y</text><text x="55" y="91" font-size="10" fill="#1e40af" text-anchor="middle">= 3x − 5</text><text x="108" y="74" font-size="16" font-weight="bold" fill="#64748b" text-anchor="middle">→</text><rect x="116" y="30" width="90" height="80" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/><text x="161" y="55" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">2. COLLECT</text><text x="161" y="75" font-size="10" fill="#78350f" text-anchor="middle">y + 5</text><text x="161" y="91" font-size="10" fill="#78350f" text-anchor="middle">= 3x − 2xy</text><text x="214" y="74" font-size="16" font-weight="bold" fill="#64748b" text-anchor="middle">→</text><rect x="222" y="30" width="90" height="80" rx="8" fill="#fce7f3" stroke="#ec4899" stroke-width="1.5"/><text x="267" y="55" font-size="11" font-weight="bold" fill="#9d174d" text-anchor="middle">3. FACTORISE</text><text x="267" y="75" font-size="10" fill="#831843" text-anchor="middle">y + 5</text><text x="267" y="91" font-size="10" font-weight="bold" fill="#831843" text-anchor="middle">= x(3 − 2y)</text><text x="320" y="74" font-size="16" font-weight="bold" fill="#64748b" text-anchor="middle">→</text><rect x="328" y="30" width="84" height="80" rx="8" fill="#dcfce7" stroke="#22c55e" stroke-width="1.5"/><text x="370" y="55" font-size="11" font-weight="bold" fill="#166534" text-anchor="middle">4. DIVIDE</text><text x="370" y="75" font-size="10" font-weight="bold" fill="#14532d" text-anchor="middle">x = (y + 5)</text><text x="370" y="91" font-size="10" font-weight="bold" fill="#14532d" text-anchor="middle">/ (3 − 2y)</text></svg>`,
      diagramCaption: "Step 3 (factorising out x) is the hinge step on Edexcel 4MA1 — it turns two x-terms into one isolated x.",
      workedExamples: [
        {
          title: "Making x the subject when x appears twice",
          problem: "Make {{x}} the subject of the formula {{y = (3x - 5)/(2x + 1)}}.",
          steps: [
            "Multiply both sides by {{(2x + 1)}} and expand: {{y(2x + 1) = 3x - 5}}, giving {{2xy + y = 3x - 5}}.",
            "Collect {{x}}-terms on the right and non-{{x}} terms on the left: {{y + 5 = 3x - 2xy}}.",
            "Factorise {{x}} out on the right: {{y + 5 = x(3 - 2y)}}.",
            "Divide both sides by {{(3 - 2y)}}: {{x = (y + 5)/(3 - 2y)}}.",
          ],
          answer: "{{x = (y + 5)/(3 - 2y)}}",
          yourTurn: {
            question: "Make {{x}} the subject of {{y = (4x + 3)/(x - 2)}}. Give the expression for {{x}} in terms of {{y}}.",
            answer: { type: "expression", expr: "(2y + 3)/(y - 4)", form: "any" },
            solution: "{{y(x - 2) = 4x + 3 => xy - 2y = 4x + 3 => xy - 4x = 2y + 3 => x(y - 4) = 2y + 3 => x = (2y + 3)/(y - 4)}}.",
          },
        },
        {
          title: "Direct algebraic proof with consecutive odd integers",
          problem: "Prove algebraically that the difference between the squares of any two consecutive odd integers is always a multiple of {{8}}.",
          steps: [
            "Let the two consecutive odd integers be {{2n - 1}} and {{2n + 1}}, where {{n}} is an integer.",
            "Write the difference of their squares: {{(2n + 1)^2 - (2n - 1)^2}}.",
            "Expand both brackets carefully: {{(4n^2 + 4n + 1) - (4n^2 - 4n + 1) = 8n}}.",
            "Conclude clearly: since {{n}} is an integer, {{8n}} is a multiple of {{8}} for all integers {{n}}.",
          ],
          answer: "{{(2n + 1)^2 - (2n - 1)^2 = 8n}}, which is a multiple of {{8}}.",
          yourTurn: {
            question: "When {{(2n + 3)^2 - (2n + 1)^2}} is expanded and written in the form {{k(n + 1)}}, what is the integer value of {{k}}?",
            answer: { type: "number", value: 8 },
            solution: "{{(4n^2 + 12n + 9) - (4n^2 + 4n + 1) = 8n + 8 = 8(n + 1)}}, so {{k = 8}}.",
          },
        },
      ],
      keyPoints: [
        "Note {{x = (y + 5)/(3 - 2y)}} and {{x = (-y - 5)/(2y - 3)}} are identical (top and bottom multiplied by {{-1}}) — both get full marks!",
        "Never write consecutive odd integers as {{2n + 1}} and {{2n + 2}} ({{2n + 2}} is even!); odd integers step up by **2** ({{2n + 1}} and {{2n + 3}}).",
        "Always finish an Edexcel proof by explicitly factoring out the divisor — e.g. write {{8(n + 1)}}, not just {{8n + 8}} — plus a concluding sentence.",
        "To **disprove** a statement, a single numerical **counterexample** is completely rigorous (e.g. {{n = 41}} disproves \"{{n^2 + n + 41}} is always prime\").",
      ],
      whyItWorks:
        "Factorising {{ax + bx = x(a + b)}} reverses the distributive law, collapsing two occurrences of {{x}} into one. In algebraic proof, because {{n}} stands for *every* integer simultaneously, showing an identity equals {{8k}} proves infinitely many cases at once.",
      strategies: ["Clear–Collect–Factorise–Divide (CFFD)", "Parity representations (2n, 2n + 1)", "Factor out the target multiple"],
      thinkDeeper:
        "Prove that the product of **any four consecutive integers plus 1** is always a perfect square! (Hint: pair the outer two {{n(n + 3)}} and the inner two {{(n + 1)(n + 2)}}.)",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "How do you expand three brackets {{(ax + b)(cx + d)(ex + f)}} cleanly?",
        back: "Multiply two brackets first and simplify to {{Ax^2 + Bx + C}}, then multiply every term by {{ex}} and by {{f}} and collect like terms.",
      },
      {
        front: "How do you factorise {{ax^2 + bx + c}} when {{a > 1}}?",
        back: "Check for a common factor first; then find two integers multiplying to {{ac}} and adding to {{b}}, split {{bx}}, and factorise in pairs.",
      },
      {
        front: "What is the Difference of Two Squares identity?",
        back: "{{A^2 - B^2 = (A - B)(A + B)}} (works when {{A}} and {{B}} are terms or whole brackets!).",
      },
      {
        front: "How do you complete the square on {{ax^2 + bx + c}} when {{a != 1}}?",
        back: "Factor {{a}} out of the first two terms {{a(x^2 + (b/a)x) + c}}, complete the square inside big brackets, then multiply {{a}} by BOTH inner parts.",
      },
      {
        front: "What is the turning point and line of symmetry of {{y = a(x + p)^2 + q}}?",
        back: "Turning point {{(-p, q)}} (minimum if {{a > 0}}, maximum if {{a < 0}}); line of symmetry {{x = -p}}.",
      },
      {
        front: "Why can you NOT cancel {{x}} in {{(x + 3)/x}}?",
        back: "Because {{x}} on the top is **added** to {{3}}, not multiplied across the whole numerator. Only common **factors** cancel!",
      },
      {
        front: "What does {{(b - a)/(a - b)}} simplify to (for {{a != b}})?",
        back: "{{-1}}, because {{b - a = -(a - b)}}.",
      },
      {
        front: "What are the 4 steps to make {{x}} the subject when {{x}} appears twice?",
        back: "1. Clear fractions & expand brackets. 2. Collect all {{x}}-terms on one side, non-{{x}} terms on the other. 3. Factorise out {{x}}. 4. Divide by the bracket.",
      },
      {
        front: "How do you represent two consecutive odd integers in an algebraic proof?",
        back: "{{2n - 1}} and {{2n + 1}} (or {{2n + 1}} and {{2n + 3}}), where {{n}} is an integer.",
      },
      {
        front: "How do you represent *any* two (not necessarily consecutive) odd integers?",
        back: "{{2m + 1}} and {{2n + 1}} using **two different** integer variables {{m}} and {{n}}.",
      },
      {
        front: "How do you prove an expression is always positive for all real {{x}}?",
        back: "Complete the square into {{a(x + p)^2 + q}} with {{a > 0, q > 0}}, state {{(x + p)^2 >= 0}}, so {{a(x + p)^2 + q >= q > 0}}.",
      },
      {
        front: "How do you disprove a universal statement like 'For all integers {{n}}, {{n^2 + n + 41}} is prime'?",
        back: "Exhibit **one valid counterexample**, e.g. {{n = 41}} gives {{41^2 + 41 + 41 = 41 * 43}}, which is composite.",
      },
    ],
    mustKnow: [
      "Expand triple linear brackets {{(ax + b)(cx + d)(ex + f)}} accurately by simplifying one pair to a quadratic first (M1 for correct quadratic).",
      "Subtract squared or double brackets using protective parentheses so the minus distributes across every term.",
      "Factorise quadratics {{ax^2 + bx + c}} ({{a > 1}}) using the {{ac}}-method after extracting any common factor.",
      "Spot and factorise Difference of Two Squares {{p^2x^2 - q^2y^2}} and compound forms {{(ax + b)^2 - (cx + d)^2}}.",
      "Complete the square for {{a = 1}}, {{a > 1}} and {{a < 0}} into {{a(x + p)^2 + q}} or {{q - a(x + p)^2}}.",
      "Read off the minimum/maximum value {{q}}, turning point {{(-p, q)}}, and axis of symmetry {{x = -p}} directly from completed-square form.",
      "Simplify, multiply and divide algebraic fractions by factorising numerators and denominators completely before cancelling.",
      "Add and subtract algebraic fractions over quadratic common denominators — checking whether the final numerator factorises and cancels again!",
      "Rearrange formulas where the new subject appears in two places (including under a square root or inside a fraction) by collecting and factorising.",
      "Construct full-mark algebraic proofs using {{2n}}, {{2n + 1}}, consecutive integers, explicit factorisation of the target divisor, and a concluding sentence.",
    ],
    misconceptions: [
      {
        wrong: "Cancelling terms across {{+}} or {{-}}, e.g. writing {{(x + 3)/x = 4}} or {{(x^2 - 9)/(x - 3) = x + 3}} by crossing out {{x}} and {{3}}.",
        right: "Factorise first! {{(x + 3)/x}} cannot be simplified as a single fraction, while {{(x^2 - 9)/(x - 3) = ((x - 3)(x + 3))/(x - 3) = x + 3}}.",
      },
      {
        wrong: "Completing the square on {{2x^2 + 12x + 7}} as {{2(x + 3)^2 - 9 + 7 = 2(x + 3)^2 - 2}} (forgetting {{2}} multiplies {{-9}}).",
        right: "Keep outer brackets: {{2((x + 3)^2 - 9) + 7 = 2(x + 3)^2 - 18 + 7 = 2(x + 3)^2 - 11}}.",
      },
      {
        wrong: "Reading the turning point of {{y = (x - 4)^2 - 5}} as {{(-4, -5)}}.",
        right: "Set the bracket to zero ({{x - 4 = 0 => x = 4}}): the turning point is {{(4, -5)}}.",
      },
      {
        wrong: "Writing {{5/(x - 2) - (x + 3)/(x - 2) = (5 - x + 3)/(x - 2)}} (only subtracting {{x}}, not {{+3}}).",
        right: "Bracket the entire subtracted numerator: {{(5 - (x + 3))/(x - 2) = (5 - x - 3)/(x - 2) = (2 - x)/(x - 2)}}.",
      },
      {
        wrong: "Expanding {{(3x - 4)^2}} as {{9x^2 - 16}} or {{9x^2 + 16}}.",
        right: "Write {{(3x - 4)(3x - 4) = 9x^2 - 24x + 16}} — never drop the middle {{2ab}} term!",
      },
      {
        wrong: "'Proving' an odd-number theorem by testing {{1, 3, 5}} and writing 'pattern continues for all odd numbers'.",
        right: "Use {{2n + 1}} for an arbitrary integer {{n}}, simplify algebraically, and factor out the required divisor.",
      },
      {
        wrong: "Using {{n}} and {{n + 2}} for 'two consecutive odd integers' without ensuring {{n}} is odd!",
        right: "If {{n}} is any integer, {{n}} could be even! Always write {{2n - 1}} and {{2n + 1}} (or {{2n + 1}} and {{2n + 3}}).",
      },
    ],
    examMistakes: [
      "Leaving a common numerical factor inside a bracket when asked to 'factorise fully', e.g. stopping at {{(6x - 4)(x + 2)}} instead of {{2(3x - 2)(x + 2)}}.",
      "Multiplying {{(x - 2)}} by {{(x^2 + x - 6)}} to get a cubic denominator instead of spotting {{x^2 + x - 6 = (x - 2)(x + 3)}} first.",
      "Stopping one line early on a 4-mark algebraic fraction question when {{(3x - 6)/((x - 2)(x + 3))}} still cancels {{(x - 2)}} to give {{3/(x + 3)}}!",
      "Leaving the target letter on both sides when rearranging a formula (e.g. {{x = (3 + y)/x}}).",
      "In {{q - a(x + p)^2}}, forgetting that factoring out {{-2}} from {{-2x^2 + 8x}} flips the middle sign to {{-2(x^2 - 4x)}}.",
      "Leaving {{8n + 8}} unfactorised at the end of a 'prove it is a multiple of 8' question — examiners want {{8(n + 1)}} plus a clear conclusion.",
      "Using the same letter {{2n}} and {{2n}} for 'the sum of any two even numbers' (that only proves doubling one even number!). Use {{2m}} and {{2n}}.",
    ],
    mnemonics: [
      {
        topic: "Changing the subject when x appears twice",
        device: "CFFD — Clear, Collect, Factorise, Divide",
        explanation: "Clear denominators/brackets, Collect x-terms on one side, Factorise x out, Divide by the bracket.",
      },
      {
        topic: "Turning point from a(x + p)² + q",
        device: "Inside LIES, Outside TELLS THE TRUTH",
        explanation: "Inside the bracket flips sign (+p → x = −p), while +q outside gives the exact y-coordinate q.",
      },
      {
        topic: "Simplifying algebraic fractions",
        device: "Married by +, Divorced by ×",
        explanation: "Terms joined by + or − are married into one package — never split them! Only factors joined by × can cancel.",
      },
    ],
    realWorld: [
      {
        title: "Projectile & fountain arcs",
        detail: "Completing the square on h(t) = −5t² + 20t + 1.5 gives 21.5 − 5(t − 2)², revealing a maximum height of 21.5 m at t = 2 s without calculus.",
        emoji: "⛲",
      },
      {
        title: "Parallel electrical resistors & lens optics",
        detail: "Combining 1/u + 1/v = 1/f into v = uf/(u − f) uses algebraic fractions and subject rearrangement where v appears in two places.",
        emoji: "🔬",
      },
      {
        title: "Packaging & 3D volume cubics",
        detail: "Cutting squares of side x from a 20 cm × 30 cm sheet folds into an open box of volume x(20 − 2x)(30 − 2x) — a triple-bracket cubic!",
        emoji: "📦",
      },
      {
        title: "Cryptography & parity checksums",
        detail: "Algebraic proof guarantees modular number properties hold for 2048-bit integers far too huge to check one by one.",
        emoji: "🔐",
      },
    ],
    videos: [
      {
        title: "Completing the Square (When a > 1 and Negative)",
        channel: "GCSE Maths Tutor",
        url: "https://www.youtube.com/results?search_query=gcse+maths+tutor+completing+the+square+harder",
      },
      {
        title: "Algebraic Fractions — Adding, Subtracting & Simplifying",
        channel: "Corbettmaths",
        url: "https://www.youtube.com/results?search_query=corbettmaths+algebraic+fractions+igcse+higher",
      },
      {
        title: "Changing the Subject (Advanced / Appears Twice)",
        channel: "Maths Genie",
        url: "https://www.youtube.com/results?search_query=maths+genie+changing+the+subject+harder",
      },
      {
        title: "Algebraic Proof — Grade 8/9 Exam Questions",
        channel: "1st Class Maths",
        url: "https://www.youtube.com/results?search_query=1st+class+maths+algebraic+proof+igcse",
      },
    ],
    formulas: [
      {
        name: "Perfect square expansions",
        formula: "{{(a + b)^2 = a^2 + 2ab + b^2}},   {{(a - b)^2 = a^2 - 2ab + b^2}}",
        note: "Never forget the middle ±2ab term!",
      },
      {
        name: "Difference of two squares (DOTS)",
        formula: "{{A^2 - B^2 = (A - B)(A + B)}}",
        note: "Works for compound brackets too, e.g. (2x + 3)² − (x − 1)².",
      },
      {
        name: "Completed square & turning point",
        formula: "{{ax^2 + bx + c = a(x + p)^2 + q}}  →  vertex {{(-p, q)}}",
        note: "Minimum q if a > 0; maximum q if a < 0; symmetry line x = −p.",
      },
      {
        name: "Reversed subtraction identity",
        formula: "{{(b - a)/(a - b) = -1}}  ({{a != b}})",
        note: "Factor out −1 to flip (3 − x) into −(x − 3).",
      },
      {
        name: "Adding / subtracting algebraic fractions",
        formula: "{{A/B +- C/D = (AD +- BC)/(BD)}}  (prefer LCD!)",
        note: "Always factorise quadratic denominators first to spot the LCD.",
      },
      {
        name: "Even, odd & consecutive integers",
        formula: "Even: {{2n}},  Odd: {{2n + 1}},  Consecutive odds: {{2n - 1, 2n + 1}}",
        note: "Where n is any integer.",
      },
    ],
  },
};
