import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "equations-inequalities",
  title: "Equations, Simultaneous & Quadratic Inequalities",
  strand: "Algebra",
  icon: "⚖️",
  summary: "Solve quadratics, clear algebraic fractions, pair simultaneous intersections and sketch inequality regions without sign traps.",
  intro:
    "In Edexcel 4MA1 Higher, equations and inequalities move far beyond linear balancing. You will clear algebraic denominators into quadratics, intersect straight lines with circles, and use parabola sketches to decide whether a quadratic inequality gives one connected interval or two separate tails.",
  guide: [
    {
      id: "quadratic-equations",
      heading: "Solving quadratic equations & disguised quadratics",
      discovery: {
        problem:
          "A student solves {{x^2 = 5x}} by dividing both sides by {{x}} to get {{x = 5}}. Substitute {{x = 0}} into {{x^2 = 5x}} — does it work, and how did it vanish?",
        idea:
          "Dividing by {{x}} secretly assumes {{x != 0}}, wiping out the root {{x = 0}}! Always rearrange to **equal zero** first and factorise: {{x^2 - 5x = 0 => x(x - 5) = 0}}, giving **both** {{x = 0}} and {{x = 5}}.",
      },
      body:
        "Every quadratic equation should first be rearranged into standard form **{{ax^2 + bx + c = 0}}** (with {{a > 0}} if possible).\n\n**Three core algebraic methods**\n1. **Factorising (Zero-Product Property):** If {{AB = 0}}, then {{A = 0}} or {{B = 0}}. Always check this first when no rounding is mentioned.\n2. **Completing the square:** Write {{a(x + p)^2 + q = 0}}, isolate {{(x + p)^2}}, and take **both** square roots {{+-sqrt(...)}}. Best for exact surd roots when {{a = 1}} and {{b}} is even.\n3. **The Quadratic Formula:** When a question says *\"Give your solutions correct to 3 significant figures\"* or *\"Show clear algebraic working\"*, substitute into:\n\n    {{x = (-b +- sqrt(b^2 - 4ac))/(2a)}}\n\n| Discriminant {{Delta = b^2 - 4ac}} | Real roots of {{ax^2 + bx + c = 0}} | Graph of {{y = ax^2 + bx + c}} |\n|---|---|---|\n| {{b^2 - 4ac > 0}} | **2 distinct** real roots (rational if {{Delta}} is a square) | Crosses the {{x}}-axis twice |\n| {{b^2 - 4ac = 0}} | **1 repeated** real root | Touches the {{x}}-axis (tangent) |\n| {{b^2 - 4ac < 0}} | **0** real roots | Stays completely above or below {{x}}-axis |\n\n**The {{-b^2}} calculator trap:** When {{b}} is negative — say {{b = -7}} — you **must** write {{(-7)^2 = +49}}. Typing `-7^2` into a calculator evaluates {{-(7^2) = -49}} and ruins the discriminant!\n\n**Disguised quadratics & context models:**\n- Equations such as {{x^4 - 13x^2 + 36 = 0}} or {{x - 7 sqrt(x) + 12 = 0}} become quadratics via a substitution ({{u = x^2}} or {{u = sqrt(x)}}). Remember to undo the substitution at the end!\n- When forming a quadratic from area, Pythagoras or kinematics, check whether negative roots must be rejected (lengths and times satisfy {{x > 0}}).",
      diagram:
        '<svg viewBox="0 0 480 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three panels comparing discriminant values greater than zero, equal to zero, and less than zero"><rect x="8" y="8" width="146" height="158" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><line x1="20" y1="115" x2="142" y2="115" stroke="#64748b" stroke-width="1.5"/><path d="M 30 42 Q 81 172 132 42" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="53" cy="115" r="4" fill="#dc2626"/><circle cx="109" cy="115" r="4" fill="#dc2626"/><text x="81" y="28" font-size="12" font-weight="bold" text-anchor="middle" fill="#1e293b">b² − 4ac &gt; 0</text><text x="81" y="152" font-size="11" text-anchor="middle" fill="#475569">2 distinct roots</text><rect x="167" y="8" width="146" height="158" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><line x1="179" y1="115" x2="301" y2="115" stroke="#64748b" stroke-width="1.5"/><path d="M 189 51 Q 240 179 291 51" fill="none" stroke="#7c3aed" stroke-width="2.5"/><circle cx="240" cy="115" r="4" fill="#dc2626"/><text x="240" y="28" font-size="12" font-weight="bold" text-anchor="middle" fill="#1e293b">b² − 4ac = 0</text><text x="240" y="152" font-size="11" text-anchor="middle" fill="#475569">1 repeated root</text><rect x="326" y="8" width="146" height="158" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><line x1="338" y1="115" x2="460" y2="115" stroke="#64748b" stroke-width="1.5"/><path d="M 348 35 Q 399 145 450 35" fill="none" stroke="#0d9488" stroke-width="2.5"/><text x="399" y="28" font-size="12" font-weight="bold" text-anchor="middle" fill="#1e293b">b² − 4ac &lt; 0</text><text x="399" y="152" font-size="11" text-anchor="middle" fill="#475569">0 real roots</text></svg>',
      diagramCaption: "How the discriminant b² − 4ac controls the number of real roots where y = ax² + bx + c meets y = 0.",
      workedExamples: [
        {
          title: "Factorising a non-monic quadratic",
          problem: "Solve {{2x^2 - 7x - 15 = 0}}.",
          steps: [
            "Here {{a = 2}}, {{b = -7}}, {{c = -15}}, so {{ac = 2 * (-15) = -30}}.",
            "Find two numbers multiplying to {{-30}} and adding to {{-7}}: {{-10}} and {{+3}}.",
            "Split the middle term and factorise by grouping: {{2x^2 - 10x + 3x - 15 = 2x(x - 5) + 3(x - 5) = (2x + 3)(x - 5) = 0}}.",
            "Set each factor to zero: {{2x + 3 = 0 => x = -1.5}} or {{x - 5 = 0 => x = 5}}.",
          ],
          answer: "{{x = -1.5}} or {{x = 5}}",
          yourTurn: {
            question: "Solve {{2x^2 - 7x - 4 = 0}}. Give both values of {{x}} separated by a comma.",
            answer: { type: "list", values: [-0.5, 4], ordered: false, display: "−0.5, 4" },
            solution: "{{ac = -8}} splits as {{-8}} and {{+1}}: {{(2x + 1)(x - 4) = 0}}, giving {{x = -0.5}} or {{x = 4}}.",
          },
        },
        {
          title: "Quadratic formula with explicit working (4MA1 style)",
          problem: "Solve {{2x^2 - 5x - 6 = 0}}. Show clear algebraic working and give your solutions correct to 3 significant figures.",
          steps: [
            "Identify {{a = 2}}, {{b = -5}}, {{c = -6}} (keep the minus signs!).",
            "Show the explicit substitution for the M1 mark: {{x = (-(-5) +- sqrt((-5)^2 - 4(2)(-6)))/(2 * 2)}}.",
            "Simplify inside the root: {{(-5)^2 - 4(2)(-6) = 25 + 48 = 73}}, so {{x = (5 +- sqrt(73))/4}}.",
            "Evaluate both branches: {{(5 + 8.5440...)/4 = 3.386... -> 3.39}} and {{(5 - 8.5440...)/4 = -0.8860... -> -0.886}}.",
          ],
          answer: "{{x = 3.39}} or {{x = -0.886}} (3 s.f.)",
        },
      ],
      keyPoints: [
        "Rearrange to {{ax^2 + bx + c = 0}} before factorising or picking {{a, b, c}}.",
        "Never divide both sides by an expression containing {{x}} — factor it out so you do not lose {{x = 0}}.",
        "Always bracket negative {{b}} as {{(-b)^2}} so {{b^2}} is strictly positive.",
        "When Edexcel says \"Show clear algebraic working\", write the unsimplified substitution into the quadratic formula before touching your calculator's polynomial solver.",
      ],
      whyItWorks:
        "Completing the square on {{ax^2 + bx + c = 0}} gives {{(x + b/(2a))^2 = (b^2 - 4ac)/(4a^2)}}. Taking square roots of both sides produces the quadratic formula directly — it is not a separate trick, just completing the square done once and for all.",
      strategies: ["Rearrange to zero first", "Check discriminant sign", "Substitute u = x² for disguised quadratics"],
      thinkDeeper:
        "If {{r_1}} and {{r_2}} are the roots of {{ax^2 + bx + c = 0}}, expand {{a(x - r_1)(x - r_2)}} to prove Vieta's formulas: {{r_1 + r_2 = -b/a}} and {{r_1 r_2 = c/a}}.",
    },
    {
      id: "algebraic-fraction-equations",
      heading: "Equations with algebraic fractions",
      discovery: {
        problem:
          "To solve {{6/(x - 2) - 2/(x + 3) = 1}}, what happens if you multiply ONLY the left-hand side by {{(x - 2)(x + 3)}} and leave the right-hand side as {{1}}?",
        idea:
          "An equation is a balance: **every** term on **both** sides must be multiplied by the common denominator {{(x - 2)(x + 3)}}, turning the {{1}} on the right into {{1 * (x - 2)(x + 3)}}!",
      },
      body:
        "Equations containing {{x}} in denominators regularly carry **4 to 5 marks** on Edexcel 4MA1 Higher. Rather than combining fractions and then cross-multiplying in separate steps, clear all denominators in one clean sweep.\n\n**Step-by-step protocol**\n1. **Note excluded values:** Any {{x}} that makes a denominator zero (e.g. {{x = 2}} or {{x = -3}}) can **never** be a valid solution.\n2. **Factorise any quadratic denominators first:** For instance, spot {{x^2 - 9 = (x - 3)(x + 3)}} so your LCM stays quadratic rather than cubic!\n3. **Multiply EVERY term on BOTH sides by the LCM of the denominators:** Cancel each denominator against its matching bracket.\n4. **Guard minus signs with brackets:** Write {{- 2(x - 2)}} first, then expand to {{-2x + 4}} (not {{-2x - 4}}!).\n5. **Expand, collect onto one side {{= 0}}, and solve** the resulting quadratic. Reject any root that matches an excluded denominator value.",
      diagram:
        '<svg viewBox="0 0 480 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flowchart clearing denominators in 6 over x minus 2 minus 2 over x plus 3 equals 1"><rect x="10" y="18" width="195" height="52" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/><text x="107" y="40" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e3a8a">6/(x − 2) − 2/(x + 3) = 1</text><text x="107" y="58" font-size="10" text-anchor="middle" fill="#dc2626">Excluded: x ≠ 2, x ≠ −3</text><line x1="208" y1="44" x2="262" y2="44" stroke="#475569" stroke-width="2"/><polygon points="262,44 254,39 254,49" fill="#475569"/><text x="235" y="34" font-size="10" font-weight="bold" text-anchor="middle" fill="#0f172a">×(x−2)(x+3)</text><rect x="266" y="18" width="204" height="52" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/><text x="368" y="40" font-size="12" font-weight="bold" text-anchor="middle" fill="#78350f">6(x+3) − 2(x−2) = (x−2)(x+3)</text><text x="368" y="58" font-size="10" text-anchor="middle" fill="#92400e">Watch −2(−2) = +4 and RHS!</text><line x1="368" y1="72" x2="368" y2="92" stroke="#475569" stroke-width="2"/><polygon points="368,94 363,86 373,86" fill="#475569"/><rect x="120" y="96" width="240" height="44" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/><text x="240" y="116" font-size="12" font-weight="bold" text-anchor="middle" fill="#065f46">x² − 3x − 28 = 0 ⇒ (x − 7)(x + 4) = 0</text><text x="240" y="132" font-size="11" text-anchor="middle" fill="#047857">Valid roots: x = 7 or x = −4 ✔</text></svg>',
      diagramCaption: "Multiplying every term on both sides by the LCM clears all fractions in one step.",
      workedExamples: [
        {
          title: "Clearing two linear denominators",
          problem: "Solve {{6/(x - 2) - 2/(x + 3) = 1}}.",
          steps: [
            "Note excluded values: {{x != 2}} and {{x != -3}}.",
            "Multiply every term on both sides by {{(x - 2)(x + 3)}}: {{6(x + 3) - 2(x - 2) = 1(x - 2)(x + 3)}}.",
            "Expand carefully (note {{-2 * (-2) = +4}}): {{6x + 18 - 2x + 4 = x^2 + x - 6}}.",
            "Simplify and rearrange to zero: {{4x + 22 = x^2 + x - 6 => x^2 - 3x - 28 = 0}}.",
            "Factorise: {{(x - 7)(x + 4) = 0}}, so {{x = 7}} or {{x = -4}} (neither is excluded).",
          ],
          answer: "{{x = 7}} or {{x = -4}}",
          yourTurn: {
            question: "Solve {{4/(x - 1) + 3/(x + 2) = 1}}. Give both solutions separated by a comma.",
            answer: { type: "list", values: [-1, 7], ordered: false, display: "−1, 7" },
            solution:
              "Multiply by {{(x - 1)(x + 2)}}: {{4(x + 2) + 3(x - 1) = x^2 + x - 2 => 7x + 5 = x^2 + x - 2 => x^2 - 6x - 7 = 0 => (x - 7)(x + 1) = 0}}, giving {{x = 7}} or {{x = -1}}.",
          },
        },
      ],
      keyPoints: [
        "Multiply **every** term (including integer constants like {{1}} or {{2}}) by the LCM of the denominators.",
        "Always factorise quadratic denominators first so you do not create an unnecessary cubic.",
        "Keep brackets after a subtraction sign before expanding: {{- k(x - a) = -kx + ka}}.",
        "Check final answers against denominator zeros — an extraneous root that makes a denominator {{0}} must be rejected.",
      ],
      whyItWorks:
        "Provided {{(x - 2)(x + 3) != 0}}, multiplying both sides by a non-zero quantity produces an equivalent equation. Checking excluded values at the end guarantees that equivalence held at every root.",
      strategies: ["Clear denominators with LCM", "Factorise denominators first", "Bracket numerators after minus signs"],
      thinkDeeper:
        "Solve {{2/(x - 3) + x/(x + 3) = 12/(x^2 - 9)}}. Why do you only get **one** valid solution even though an intermediate quadratic appears?",
    },
    {
      id: "linear-simultaneous",
      heading: "Linear simultaneous equations in context",
      discovery: {
        problem:
          "Look at {{3x - 4y = 18}} and {{5x - 4y = 26}}. Many students add the equations and get {{8x = 44}}. Check the {{-4y}} terms — did adding actually eliminate {{y}}?",
        idea:
          "{{(-4y) + (-4y) = -8y}}, not zero! When the matched terms have the **Same Sign, Subtract (SSS)**: {{(5x - 4y) - (3x - 4y) = 26 - 18 => 2x = 8 => x = 4}}.",
      },
      body:
        "Two linear equations in {{x}} and {{y}} represent two straight lines; solving them simultaneously finds their single point of intersection {{(x, y)}}.\n\n**Elimination vs Substitution**\n- **Elimination:** Align both equations as {{Ax + By = C}}. Multiply one or both equations so the magnitudes of the {{x}}- or {{y}}-coefficients match, then use:\n  - **Different Signs → Add (DSA):** e.g. {{-12y}} and {{+12y}} cancel when added (usually safer because adding avoids double-negative slips!).\n  - **Same Signs → Subtract (SSS):** e.g. {{+6x}} and {{+6x}} cancel when subtracted.\n- **Substitution:** Best when one equation already has {{y = ...}} or {{x = ...}} with coefficient {{1}}.\n\n**Worded & geometric contexts:**\n1. Define your two variables clearly with units (e.g. let {{a}} = adult ticket price in dollars, {{c}} = child ticket price in dollars).\n2. Translate the two independent clues into two equations (clear fractions first if needed, e.g. speed-distance-time {{d/v_1 + d/v_2 = T}}).\n3. **Always substitute back into the ORIGINAL unused equation** to check that both {{x}} and {{y}} work!",
      diagram:
        '<svg viewBox="0 0 460 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coordinate axes showing two straight lines intersecting at a unique point 2 comma minus 3"><rect x="8" y="8" width="444" height="159" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><line x1="40" y1="75" x2="290" y2="75" stroke="#94a3b8" stroke-width="1.5"/><line x1="140" y1="20" x2="140" y2="155" stroke="#94a3b8" stroke-width="1.5"/><line x1="70" y1="152" x2="255" y2="35" stroke="#2563eb" stroke-width="2.5"/><line x1="65" y1="52" x2="255" y2="150" stroke="#e11d48" stroke-width="2.5"/><circle cx="182" cy="112" r="5" fill="#0f172a"/><text x="192" y="110" font-size="11" font-weight="bold" fill="#0f172a">(2, −3)</text><text x="235" y="32" font-size="11" fill="#1d4ed8">3x − 4y = 18</text><text x="235" y="160" font-size="11" fill="#be123c">5x + 6y = −8</text><rect x="305" y="28" width="135" height="118" rx="8" fill="#ffffff" stroke="#e2e8f0"/><text x="372" y="50" font-size="11" font-weight="bold" text-anchor="middle" fill="#0f172a">DSA / SSS Rule</text><text x="372" y="74" font-size="11" text-anchor="middle" fill="#059669">Different Signs:</text><text x="372" y="90" font-size="11" font-weight="bold" text-anchor="middle" fill="#059669">ADD (+)</text><text x="372" y="114" font-size="11" text-anchor="middle" fill="#d97706">Same Signs:</text><text x="372" y="130" font-size="11" font-weight="bold" text-anchor="middle" fill="#d97706">SUBTRACT (−)</text></svg>',
      diagramCaption: "Geometrically, solving two non-parallel linear equations finds the exact coordinates where the two lines cross.",
      workedExamples: [
        {
          title: "Elimination with opposite signs",
          problem: "Solve the simultaneous equations {{3x - 4y = 18}} and {{5x + 6y = -8}}.",
          steps: [
            "Match the {{y}}-coefficients at LCM {{12}}: multiply the first by {{3}} and the second by {{2}}.",
            "{{9x - 12y = 54}} and {{10x + 12y = -16}}.",
            "Signs on {{12y}} are different ({{-12y}} and {{+12y}}), so **add**: {{19x = 38 => x = 2}}.",
            "Substitute {{x = 2}} into {{5x + 6y = -8}}: {{10 + 6y = -8 => 6y = -18 => y = -3}}.",
            "Check in the first equation: {{3(2) - 4(-3) = 6 + 12 = 18}} ✔.",
          ],
          answer: "{{x = 2}}, {{y = -3}}",
          yourTurn: {
            question: "Solve {{3x - 2y = 19}} and {{4x + 5y = 10}}. Give your answer as {{(x, y)}}.",
            answer: { type: "list", values: [5, -2], ordered: true, display: "(5, −2)" },
            solution:
              "Multiply first by {{5}} ({{15x - 10y = 95}}) and second by {{2}} ({{8x + 10y = 20}}). Add: {{23x = 115 => x = 5}}, then {{4(5) + 5y = 10 => y = -2}}.",
          },
        },
      ],
      keyPoints: [
        "Align {{x}}, {{y}} and constant columns before eliminating.",
        "Prefer matching opposite-signed terms so you can **add** and avoid double-negative subtraction errors.",
        "Always check your pair {{(x, y)}} in the **other** original equation — it takes 5 seconds and guarantees full marks.",
      ],
      whyItWorks:
        "Adding a scalar multiple of one valid equation to another preserves equality while projecting the 2-variable system onto a single axis where one variable drops out.",
      strategies: ["Different Signs Add, Same Signs Subtract", "Check in the unused equation"],
      thinkDeeper:
        "When does the system {{ax + by = c}} and {{dx + ey = f}} have **no solutions** versus **infinitely many solutions**? Interpret both cases on a graph.",
    },
    {
      id: "linear-quadratic-simultaneous",
      heading: "Linear–quadratic simultaneous equations",
      discovery: {
        problem:
          "After solving {{y = 2x - 1}} and {{x^2 + y^2 = 29}} to get {{x = -2}} and {{x = 2.8}}, why is it dangerous to plug {{x = -2}} back into {{x^2 + y^2 = 29}} instead of {{y = 2x - 1}}?",
        idea:
          "{{(-2)^2 + y^2 = 29}} gives {{y^2 = 25 => y = +-5}}, inventing a **fake** point {{(-2, +5)}} that does NOT lie on the line {{y = 2x - 1}}! Always substitute back into the **linear** equation so each {{x}} gets its unique true {{y}}.",
      },
      body:
        "Elimination almost never works when one equation is linear and the other has {{x^2}}, {{xy}} or {{y^2}}. Instead, **always use substitution** — a classic **5-mark Grade 8–9** staple on 4MA1 Higher.\n\n**The 5-step Grade 9 routine**\n1. **Rearrange the LINEAR equation** to make the easier variable (the one with coefficient {{1}}, if available) the subject, e.g. {{y = 2x - 1}} or {{x = 7 - 2y}}.\n2. **Substitute into the NON-LINEAR equation** using brackets: e.g. {{x^2 + (2x - 1)^2 = 29}}.\n3. **Expand brackets carefully (FOIL!):** Remember {{(2x - 1)^2 = (2x - 1)(2x - 1) = 4x^2 - 4x + 1}} — **never** {{4x^2 + 1}}!\n4. **Rearrange to {{ax^2 + bx + c = 0}} and solve** to get {{x_1}} and {{x_2}}.\n5. **Substitute each value back into the LINEAR equation** and pair them explicitly: when {{x = x_1, y = y_1}} and when {{x = x_2, y = y_2}}.\n\n**Intersections & Tangency:** Substituting the line into the curve yields a quadratic whose discriminant {{Delta = b^2 - 4ac}} tells you whether the line **cuts the curve twice** ({{Delta > 0}}), is a **tangent** touching at one point ({{Delta = 0}}), or **misses the curve** completely ({{Delta < 0}}).",
      diagram:
        '<svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle x squared plus y squared equals 29 intersected by line y equals 2x minus 1 at two points"><rect x="8" y="8" width="444" height="174" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><line x1="40" y1="95" x2="260" y2="95" stroke="#94a3b8" stroke-width="1.5"/><line x1="150" y1="18" x2="150" y2="172" stroke="#94a3b8" stroke-width="1.5"/><circle cx="150" cy="95" r="64" fill="none" stroke="#7c3aed" stroke-width="2.5"/><line x1="112" y1="172" x2="195" y2="18" stroke="#2563eb" stroke-width="2.5"/><circle cx="183" cy="39" r="4.5" fill="#dc2626"/><circle cx="126" cy="155" r="4.5" fill="#dc2626"/><text x="225" y="42" font-size="11" font-weight="bold" fill="#dc2626">(2.8, 4.6)</text><text x="80" y="160" font-size="11" font-weight="bold" fill="#dc2626">(−2, −5)</text><rect x="275" y="24" width="162" height="142" rx="8" fill="#ffffff" stroke="#e2e8f0"/><text x="356" y="44" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e293b">Line × Curve =</text><text x="356" y="60" font-size="11" font-weight="bold" text-anchor="middle" fill="#7c3aed">5x² − 4x − 28 = 0</text><text x="356" y="84" font-size="10.5" text-anchor="middle" fill="#059669">Δ &gt; 0 : 2 intersections</text><text x="356" y="104" font-size="10.5" text-anchor="middle" fill="#d97706">Δ = 0 : Tangent (1 pt)</text><text x="356" y="124" font-size="10.5" text-anchor="middle" fill="#dc2626">Δ &lt; 0 : Misses (0 pts)</text><text x="356" y="150" font-size="10" font-weight="bold" text-anchor="middle" fill="#1d4ed8">Sub back into LINEAR!</text></svg>',
      diagramCaption: "A straight line meets a circle in 2 points (secant), 1 point (tangent, Δ = 0), or 0 points.",
      workedExamples: [
        {
          title: "Intersecting a line and a circle",
          problem: "Solve simultaneously {{y = 2x - 1}} and {{x^2 + y^2 = 29}}.",
          steps: [
            "Substitute {{y = 2x - 1}} into the circle equation: {{x^2 + (2x - 1)^2 = 29}}.",
            "Expand {{(2x - 1)^2 = 4x^2 - 4x + 1}}: {{x^2 + 4x^2 - 4x + 1 = 29}}.",
            "Collect terms onto one side: {{5x^2 - 4x - 28 = 0}}.",
            "Factorise: {{(5x - 14)(x + 2) = 0}}, giving {{x = 2.8}} or {{x = -2}}.",
            "Substitute each {{x}} into the **linear** equation {{y = 2x - 1}}:\n  - When {{x = 2.8}}, {{y = 2(2.8) - 1 = 4.6}}.\n  - When {{x = -2}}, {{y = 2(-2) - 1 = -5}}.",
          ],
          answer: "{{(2.8, 4.6)}} and {{(-2, -5)}}",
          yourTurn: {
            question:
              "The line {{y = x + 2}} intersects the circle {{x^2 + y^2 = 20}} at two points. Find the coordinates of the intersection point in the **first quadrant** (where {{x > 0}} and {{y > 0}}).",
            answer: { type: "list", values: [2, 4], ordered: true, display: "(2, 4)" },
            solution:
              "{{x^2 + (x + 2)^2 = 20 => 2x^2 + 4x - 16 = 0 => x^2 + 2x - 8 = 0 => (x + 4)(x - 2) = 0}}. In the first quadrant {{x = 2}}, so {{y = 2 + 2 = 4}}, giving {{(2, 4)}}.",
          },
        },
      ],
      keyPoints: [
        "Make the variable WITHOUT a tricky coefficient the subject of the **linear** equation — avoid introducing fractions if possible!",
        "Expand {{(ax + b)^2 = a^2 x^2 + 2abx + b^2}} — never forget the middle term {{2abx}}.",
        "Always find the partner {{y}}-values from the **linear** equation, and clearly pair {{x_1}} with {{y_1}} and {{x_2}} with {{y_2}}.",
        "To prove a line is a tangent to a curve, substitute and show {{b^2 - 4ac = 0}} (or a repeated factor {{(x - k)^2 = 0}}).",
      ],
      whyItWorks:
        "A point {{(x, y)}} lies on both graphs if and only if both equations hold together. Replacing {{y}} with {{mx + c}} asks which {{x}}-coordinates give the line and curve the exact same height.",
      strategies: ["Make linear subject first", "Pair each x with its own y", "Use b² − 4ac = 0 for tangency"],
      thinkDeeper:
        "Find the positive value of {{k}} for which the line {{y = 2x + k}} is a tangent to the circle {{x^2 + y^2 = 20}}.",
    },
    {
      id: "quadratic-and-graphical-inequalities",
      heading: "Quadratic inequalities & graphical regions",
      discovery: {
        problem:
          "A student solves {{(x + 3)(x - 5) > 0}} by writing \"{{x > -3}} and {{x > 5}}\" — or worse, \"{{-3 > x > 5}}\". Test {{x = -4}} in {{(x + 3)(x - 5)}}: what sign do you get?",
        idea:
          "At {{x = -4}}, {{(-1)(-9) = +9 > 0}}, so {{x = -4}} **is** a solution! You cannot split a quadratic inequality like a linear equation — **always sketch the U-shaped parabola** through its critical values {{-3}} and {{5}}!",
      },
      body:
        "**1. Solving quadratic inequalities**\nNever apply {{+-sqrt(...)}} directly across an inequality sign! Follow this fail-safe 4-step routine:\n1. **Rearrange so one side is {{0}} and the {{x^2}} coefficient is POSITIVE ({{a > 0}}).** Remember: multiplying or dividing an inequality by a **negative** number **flips** {{<}} and {{>}} (e.g. {{-x^2 + 2x + 15 >= 0 => x^2 - 2x - 15 <= 0}}).\n2. **Solve {{ax^2 + bx + c = 0}}** to find the two **critical values** {{r_1 < r_2}}.\n3. **Sketch the U-shaped parabola** crossing the {{x}}-axis at {{r_1}} and {{r_2}}.\n4. **Read off the region:**\n   - **Below the axis ({{< 0}} or {{<= 0}}):** **One connected sandwich** between the roots: {{r_1 < x < r_2}} (or {{r_1 <= x <= r_2}}).\n   - **Above the axis ({{> 0}} or {{>= 0}}):** **Two separate outer tails**: {{x < r_1}} **or** {{x > r_2}} (or {{x <= r_1}} **or** {{x >= r_2}}). **Never** combine two separate tails into one chain like {{5 < x < -3}}!\n\n| Inequality (with {{a > 0}}, roots {{r_1 < r_2}}) | Graph part | Correct Edexcel notation |\n|---|---|---|\n| {{(x - r_1)(x - r_2) < 0}} | Valley below {{x}}-axis | {{r_1 < x < r_2}} |\n| {{(x - r_1)(x - r_2) <= 0}} | Valley + endpoints | {{r_1 <= x <= r_2}} |\n| {{(x - r_1)(x - r_2) > 0}} | Two arms above {{x}}-axis | {{x < r_1}} or {{x > r_2}} |\n| {{(x - r_1)(x - r_2) >= 0}} | Two arms + endpoints | {{x <= r_1}} or {{x >= r_2}} |\n\n**2. Graphical linear inequalities (shading regions {{R}})**\n- Draw each boundary line as **dashed** for strict {{<}} or {{>}}, and **solid** for inclusive {{<=}} or {{>=}}.\n- Pick a clean test point not on the line — usually {{(0, 0)}} — to check which side satisfies every inequality, and clearly label the required region **{{R}}**.",
      diagram:
        '<svg viewBox="0 0 480 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two parabola sketches comparing inside connected interval for less than zero versus two outside tails for greater than zero"><rect x="8" y="8" width="226" height="164" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><line x1="22" y1="95" x2="220" y2="95" stroke="#64748b" stroke-width="1.5"/><line x1="72" y1="95" x2="170" y2="95" stroke="#2563eb" stroke-width="5"/><path d="M 38 35 Q 121 175 204 35" fill="none" stroke="#1e293b" stroke-width="2.2"/><circle cx="72" cy="95" r="4.5" fill="#ffffff" stroke="#2563eb" stroke-width="2.5"/><circle cx="170" cy="95" r="4.5" fill="#ffffff" stroke="#2563eb" stroke-width="2.5"/><text x="68" y="84" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e293b">−3</text><text x="174" y="84" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e293b">5</text><text x="121" y="26" font-size="12" font-weight="bold" text-anchor="middle" fill="#1d4ed8">(x + 3)(x − 5) &lt; 0</text><text x="121" y="158" font-size="11.5" font-weight="bold" text-anchor="middle" fill="#1d4ed8">−3 &lt; x &lt; 5 (one interval)</text><rect x="246" y="8" width="226" height="164" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><line x1="260" y1="95" x2="458" y2="95" stroke="#64748b" stroke-width="1.5"/><line x1="260" y1="95" x2="310" y2="95" stroke="#dc2626" stroke-width="5"/><line x1="408" y1="95" x2="458" y2="95" stroke="#dc2626" stroke-width="5"/><path d="M 276 35 Q 359 175 442 35" fill="none" stroke="#1e293b" stroke-width="2.2"/><circle cx="310" cy="95" r="4.5" fill="#ffffff" stroke="#dc2626" stroke-width="2.5"/><circle cx="408" cy="95" r="4.5" fill="#ffffff" stroke="#dc2626" stroke-width="2.5"/><text x="306" y="84" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e293b">−3</text><text x="412" y="84" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e293b">5</text><text x="359" y="26" font-size="12" font-weight="bold" text-anchor="middle" fill="#b91c1c">(x + 3)(x − 5) &gt; 0</text><text x="359" y="158" font-size="11.5" font-weight="bold" text-anchor="middle" fill="#b91c1c">x &lt; −3 or x &gt; 5 (two tails)</text></svg>',
      diagramCaption: "With a > 0, '< 0' selects the single valley between the roots; '> 0' selects the two separate arms outside the roots.",
      workedExamples: [
        {
          title: "Outer-tails quadratic inequality",
          problem: "Solve {{2x^2 - 5x - 12 > 0}}.",
          steps: [
            "Here {{a = 2 > 0}}. Solve {{2x^2 - 5x - 12 = 0}} for the critical values.",
            "Factorise: {{(2x + 3)(x - 4) = 0}}, so critical values are {{x = -1.5}} and {{x = 4}}.",
            "Sketch a U-shaped parabola crossing the {{x}}-axis at {{-1.5}} and {{4}}.",
            "We want {{> 0}} (strictly above the {{x}}-axis), which gives the two outer tails: {{x < -1.5}} or {{x > 4}}.",
          ],
          answer: "{{x < -1.5}} or {{x > 4}}",
        },
        {
          title: "Negative x² coefficient & integer solutions",
          problem: "Solve {{15 + 2x - x^2 >= 0}}.",
          steps: [
            "Multiply both sides by {{-1}} so the {{x^2}} term is positive, **flipping** {{>=}} to {{<=}}: {{x^2 - 2x - 15 <= 0}}.",
            "Factorise: {{(x - 5)(x + 3) <= 0}}, giving critical values {{-3}} and {{5}}.",
            "For {{<= 0}}, the U-shaped parabola is on or below the {{x}}-axis between the roots: {{-3 <= x <= 5}}.",
          ],
          answer: "{{-3 <= x <= 5}}",
          yourTurn: {
            question: "List all the **integer** values of {{x}} that satisfy {{x^2 - 3x - 4 < 0}}.",
            answer: { type: "list", values: [0, 1, 2, 3], ordered: false, display: "0, 1, 2, 3" },
            solution:
              "{{(x - 4)(x + 1) < 0}} has critical values {{-1}} and {{4}}. Since {{< 0}} is strict, {{-1 < x < 4}}, so the integers are {{0, 1, 2, 3}}.",
          },
        },
      ],
      keyPoints: [
        "Always find critical values FIRST, then sketch a quick parabola — never guess inequality signs from brackets!",
        "Make the {{x^2}} coefficient positive first (remembering to flip the inequality sign if you multiply by {{-1}}).",
        "Use `and` / one chain {{a < x < b}} for one connected interval; use **`or`** ({{x < a}} or {{x > b}}) for two disjoint tails.",
        "On coordinate grids: **dashed** line for {{<, >}} and **solid** line for {{<=, >=}}.",
      ],
      whyItWorks:
        "A continuous quadratic {{f(x)}} can only change sign where {{f(x) = 0}} (at its roots). That divides the number line into three zones — left of {{r_1}}, between {{r_1}} and {{r_2}}, and right of {{r_2}} — whose signs alternate {{+, -, +}} whenever {{a > 0}}.",
      strategies: ["Find critical values, then sketch the parabola", "Test (0, 0) for graphical regions"],
      thinkDeeper:
        "Find the range of values of {{k}} for which the quadratic equation {{x^2 + kx + 9 = 0}} has **no real roots**. Notice how a discriminant question turns into a quadratic inequality in {{k}}!",
    },
  ],
  learn: {
    flashcards: [
      { front: "What is the Quadratic Formula for {{ax^2 + bx + c = 0}}?", back: "{{x = (-b +- sqrt(b^2 - 4ac))/(2a)}}" },
      { front: "What does the discriminant {{b^2 - 4ac}} tell you?", back: "{{> 0}}: 2 distinct real roots; {{= 0}}: 1 repeated root (tangent); {{< 0}}: 0 real roots." },
      { front: "Why must you NEVER divide {{x^2 = 5x}} by {{x}}?", back: "Because {{x}} could equal {{0}}! Rearrange to {{x(x - 5) = 0}} to get both {{x = 0}} and {{x = 5}}." },
      { front: "How do you clear denominators in {{a/(x - p) + b/(x - q) = c}}?", back: "Multiply EVERY term on BOTH sides (including {{c}}) by the LCM {{(x - p)(x - q)}}." },
      { front: "What must you check at the end of an algebraic fraction equation?", back: "That no root makes any original denominator equal to {{0}} (reject excluded values)." },
      { front: "In elimination, when do you ADD vs SUBTRACT?", back: "Different Signs Add (DSA); Same Signs Subtract (SSS)." },
      { front: "Which method solves a linear + circle/quadratic simultaneous pair?", back: "Substitution! Rearrange the LINEAR equation first and substitute into the quadratic." },
      { front: "Which equation do you substitute back into to find {{y}} in a linear-quadratic pair?", back: "Always the **linear** equation — substituting into the quadratic/circle creates fake {{+-}} pairings." },
      { front: "How do you prove a line is a tangent to a circle or parabola?", back: "Substitute the line into the curve and show {{b^2 - 4ac = 0}} (one repeated root)." },
      { front: "With {{a > 0}} and roots {{r_1 < r_2}}, what is the solution to {{ax^2 + bx + c < 0}}?", back: "One connected interval between the roots: {{r_1 < x < r_2}}." },
      { front: "With {{a > 0}} and roots {{r_1 < r_2}}, what is the solution to {{ax^2 + bx + c > 0}}?", back: "Two separate outer tails: {{x < r_1}} or {{x > r_2}} (never a single chain!)." },
      { front: "When graphing linear inequalities, which lines are dashed vs solid?", back: "Dashed for strict ({{<}} or {{>}}); solid for inclusive ({{<=}} or {{>=}})." },
    ],
    mustKnow: [
      "Solve {{ax^2 + bx + c = 0}} by factorising, completing the square, and the quadratic formula (showing explicit substitution).",
      "Spot and solve disguised quadratics such as {{x^4 - 13x^2 + 36 = 0}} using a substitution.",
      "Clear algebraic denominators by multiplying every term on both sides by the LCM, and check excluded values.",
      "Form and solve linear simultaneous equations from cost, geometry and kinematics problems.",
      "Solve linear–quadratic simultaneous equations (including {{x^2 + y^2 = r^2}}) and pair each {{x}} with its corresponding {{y}}.",
      "Use the discriminant {{b^2 - 4ac}} to determine intersections or tangency between a line and a curve.",
      "Solve quadratic inequalities using critical values and a parabola sketch, flipping {{<}}/{{>}} when dividing by a negative.",
      "Identify or shade regions {{R}} defined by linear inequalities using solid ({{<=, >=}}) and dashed ({{<, >}}) lines.",
    ],
    misconceptions: [
      {
        wrong: "Never write ❌: {{-3 > x > 5}} or {{5 < x < -3}} for an outer-tails quadratic inequality.",
        right: "Write instead ✅: {{x < -3}} **or** {{x > 5}} — two disjoint intervals must be written separately with `or`!",
      },
      {
        wrong: "Never write ❌: {{x^2 = 7x => x = 7}} (dividing both sides by {{x}}).",
        right: "Write instead ✅: {{x^2 - 7x = 0 => x(x - 7) = 0}}, giving {{x = 0}} or {{x = 7}}.",
      },
      {
        wrong: "Never write ❌: {{-5^2 - 4(2)(-3) = -25 + 24 = -1}} when {{b = -5}} in {{b^2 - 4ac}}.",
        right: "Write instead ✅: {{(-5)^2 - 4(2)(-3) = +25 + 24 = 49}} — squaring any real {{b != 0}} gives a positive!",
      },
      {
        wrong: "Never write ❌: {{(2x - 3)^2 = 4x^2 + 9}} or {{4x^2 - 9}} when substituting into {{x^2 + y^2 = r^2}}.",
        right: "Write instead ✅: Write {{(2x - 3)(2x - 3) = 4x^2 - 12x + 9}} so you never drop the middle {{-12x}} term.",
      },
      {
        wrong: "Never write ❌: {{x^2 > 9 => x > +-3}} or {{x > 3}} only.",
        right: "Write instead ✅: Rearrange to {{x^2 - 9 > 0 => (x + 3)(x - 3) > 0}}, sketch the parabola, and write {{x < -3}} or {{x > 3}}.",
      },
      {
        wrong: "Never write ❌: Leaving {{x_1, x_2}} and {{y_1, y_2}} as an unsorted pile in simultaneous equations.",
        right: "Write instead ✅: Pair each solution explicitly as coordinates {{(x_1, y_1)}} and {{(x_2, y_2)}} using the linear equation.",
      },
    ],
    examMistakes: [
      "Typing the roots directly from a calculator's equation solver on a \"Show clear algebraic working\" question — Edexcel awards **0 marks** without factorisation or formula substitution!",
      "Forgetting to multiply the constant on the RHS (such as `= 1` or `= 2`) by the common denominator in algebraic fraction equations.",
      "Dropping the sign flip in `- 3(x - 4)` and writing `-3x - 12` instead of `-3x + 12`.",
      "Writing `and` instead of `or` for two disjoint quadratic inequality tails (`x < -2 and x > 5` is impossible — Edexcel withholds the accuracy mark!).",
      "Forgetting to reverse `<` to `>` when multiplying `-x^2 + 4x + 5 > 0` by `-1`.",
      "Drawing a solid line instead of a dashed line for strict inequalities like `y < 2x + 1`.",
    ],
    mnemonics: [
      {
        topic: "Linear simultaneous elimination",
        device: "DSA / SSS — Different Signs Add, Same Signs Subtract",
        explanation: "Look ONLY at the signs of the matched coefficient you are eliminating: opposite signs add to zero; identical signs subtract to zero.",
      },
      {
        topic: "Quadratic inequalities (with a > 0)",
        device: "Less = Linked (1 sandwich) · Greater = Gapped (2 tails)",
        explanation: "Once a > 0, '< 0' links the roots into one sandwich r₁ < x < r₂; '> 0' splits outside into two gapped tails x < r₁ or x > r₂.",
      },
      {
        topic: "Boundary lines on inequality graphs",
        device: "Extra ink underneath (≤, ≥) = Extra ink on the line (Solid)",
        explanation: "If the symbol has the extra equals bar underneath, use a solid line; no bar (<, >) means a dashed line.",
      },
    ],
    realWorld: [
      {
        title: "Projectile & braking safety envelopes",
        detail: "Quadratic inequalities determine the exact time window {{t_1 < t < t_2}} during which a launched flare or drone stays above a minimum altitude.",
        emoji: "🚀",
      },
      {
        title: "GPS & radar circle-line intersections",
        detail: "Finding where a straight flight path {{y = mx + c}} enters and exits a circular radar zone {{x^2 + y^2 = r^2}} is a live linear–quadratic simultaneous system.",
        emoji: "📡",
      },
      {
        title: "River current & headwind journeys",
        detail: "Going upstream at {{v - c}} and downstream at {{v + c}} in total time {{T}} gives {{d/(v - c) + d/(v + c) = T}} — an algebraic fraction equation leading to a quadratic!",
        emoji: "🚤",
      },
    ],
    videos: [
      {
        title: "Quadratic Inequalities — Corbettmaths",
        channel: "Corbettmaths",
        url: "https://www.youtube.com/results?search_query=corbettmaths+quadratic+inequalities",
      },
      {
        title: "Non-Linear Simultaneous Equations (IGCSE Higher)",
        channel: "GCSE Maths Tutor",
        url: "https://www.youtube.com/results?search_query=gcse+maths+tutor+advanced+simultaneous+equations",
      },
      {
        title: "Algebraic Fraction Equations Leading to Quadratics",
        channel: "Maths Genie",
        url: "https://www.youtube.com/results?search_query=maths+genie+solving+algebraic+fractions+quadratics",
      },
    ],
    formulas: [
      {
        name: "Quadratic Formula",
        formula: "{{x = (-b +- sqrt(b^2 - 4ac))/(2a)}}",
        note: "For {{ax^2 + bx + c = 0}} ({{a != 0}}). Provided on the 4MA1 formula sheet, but always show substitution!",
      },
      {
        name: "Discriminant",
        formula: "{{Delta = b^2 - 4ac}}",
        note: "{{Delta > 0}}: 2 roots · {{Delta = 0}}: 1 repeated root (tangent) · {{Delta < 0}}: 0 real roots.",
      },
      {
        name: "Zero-Product Property",
        formula: "{{AB = 0 <=> A = 0}} or {{B = 0}}",
        note: "Only valid when the RHS is **zero**!",
      },
      {
        name: "Circle centred at origin",
        formula: "{{x^2 + y^2 = r^2}}",
        note: "Radius {{r}}; substitute {{y = mx + c}} to find line-circle intersections.",
      },
      {
        name: "Quadratic inequality sandwich ({{a > 0}})",
        formula: "{{(x - r_1)(x - r_2) < 0 <=> r_1 < x < r_2}}",
        note: "Where {{r_1 < r_2}} are the critical values.",
      },
      {
        name: "Quadratic inequality tails ({{a > 0}})",
        formula: "{{(x - r_1)(x - r_2) > 0 <=> x < r_1}} or {{x > r_2}}",
        note: "Two separate intervals — never combine into one chain!",
      },
    ],
  },
};
