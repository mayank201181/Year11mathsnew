import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "vectors-sets-stats",
  title: "Vectors, Sets, Conditional Probability & Histograms",
  strand: "Vectors & Statistics",
  icon: "📊",
  summary:
    "Navigate vector ratios and collinearity proofs, decode algebraic Venn diagrams and dependent probability trees, and master cumulative frequency curves and unequal-width histograms.",
  intro:
    "From geometric proof with vectors to conditional probability and unequal-interval statistics, these five skills carry some of the highest-tariff marks on Edexcel 4MA1 Higher. Every section builds from an intuitive core principle — routing nose-to-tail, working outward from an intersection, shrinking the denominator without replacement, plotting cumulative totals at upper boundaries, and letting bar area represent frequency — while arming you against the classic mark-scheme traps.",
  guide: [
    {
      id: "vector-geometry-proofs",
      heading: "Vector geometry, ratios & collinearity proofs",
      discovery: {
        problem:
          "Starting from an origin {{O}}, suppose {{OA = a}} and {{OB = b}}. How do you travel from {{A}} to {{B}} using only those two roads — is {{AB}} equal to {{a - b}} or {{b - a}}?",
        idea:
          "Walk **backwards** from {{A}} to {{O}} ({{-a}}) and then **forwards** from {{O}} to {{B}} ({{+b}}). Nose-to-tail gives {{AB = AO + OB = -a + b = b - a}}: always **destination minus start** ({{OB - OA}}).",
      },
      body:
        "A **vector** has both **magnitude** (size) and **direction**, unlike a scalar which has size only.\n\n- **Column vectors & magnitude:** Moving {{x}} units horizontally and {{y}} units vertically is written as column vector {{(x, y)}} (top component horizontal, bottom component vertical). By Pythagoras, its magnitude (length) is {{|v| = sqrt(x^2 + y^2)}}.\n- **Reverse & scalar multiples:** Reversing direction flips the sign ({{BA = -AB}}). Multiplying by a non-zero scalar {{k}} gives {{k * a}}, which is **parallel** to {{a}} and {{|k|}} times as long (opposite direction if {{k < 0}}).\n- **Vector journeys:** Route between known vertices nose-to-tail: {{AB = AO + OB = OB - OA}}.\n- **Dividing a line in ratio {{m : n}}:** If {{P}} lies on {{AB}} with {{AP : PB = m : n}}, there are {{m + n}} equal parts altogether, so {{AP = (m/(m + n)) * AB}} and {{PB = (n/(m + n)) * AB}}. Never write {{m/n}}!\n- **Proving three points {{P, Q, R}} are collinear (on one straight line):**\n  1. Find two vectors joining them, such as {{PQ}} and {{QR}} (or {{PQ}} and {{PR}}), fully simplified and **factorised**.\n  2. Show one is a scalar multiple of the other, e.g. {{PQ = (2/3) * QR}}, so **{{PQ}} is parallel to {{QR}}**.\n  3. Explicitly state **\"and they share the common point {{Q}}, therefore {{P, Q, R}} are collinear\"** — Edexcel withholds the final communication mark if you omit the shared point!",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 220" role="img" aria-label="Vector triangle OAB with point P dividing AB in ratio 2 to 3 and extended point R collinear with O and P"><defs><marker id="vArr" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#2563eb"/></marker><marker id="vArrRed" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#dc2626"/></marker></defs><rect x="0" y="0" width="500" height="220" rx="12" fill="#f8fafc"/><line x1="55" y1="185" x2="175" y2="40" stroke="#2563eb" stroke-width="2.6" marker-end="url(#vArr)"/><line x1="55" y1="185" x2="345" y2="185" stroke="#2563eb" stroke-width="2.6" marker-end="url(#vArr)"/><line x1="175" y1="40" x2="345" y2="185" stroke="#475569" stroke-width="2.2" marker-end="url(#vArr)"/><line x1="55" y1="185" x2="435" y2="59" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#vArrRed)"/><circle cx="55" cy="185" r="4.5" fill="#0f172a"/><circle cx="175" cy="40" r="4.5" fill="#0f172a"/><circle cx="345" cy="185" r="4.5" fill="#0f172a"/><circle cx="243" cy="98" r="5" fill="#dc2626"/><circle cx="435" cy="59" r="5" fill="#dc2626"/><text x="38" y="198" font-family="sans-serif" font-size="14" font-weight="700" fill="#0f172a">O</text><text x="165" y="28" font-family="sans-serif" font-size="14" font-weight="700" fill="#0f172a">A</text><text x="355" y="192" font-family="sans-serif" font-size="14" font-weight="700" fill="#0f172a">B</text><text x="248" y="90" font-family="sans-serif" font-size="13" font-weight="700" fill="#dc2626">P (2 : 3)</text><text x="442" y="56" font-family="sans-serif" font-size="13" font-weight="700" fill="#dc2626">R</text><text x="98" y="108" font-family="sans-serif" font-size="14" font-weight="700" fill="#2563eb">a</text><text x="195" y="206" font-family="sans-serif" font-size="14" font-weight="700" fill="#2563eb">b</text><text x="206" y="64" font-family="sans-serif" font-size="11" font-weight="600" fill="#475569">2 parts</text><text x="298" y="138" font-family="sans-serif" font-size="11" font-weight="600" fill="#475569">3 parts</text><text x="335" y="42" font-family="sans-serif" font-size="12" font-weight="700" fill="#dc2626">OP = (3/5)a + (2/5)b</text></svg>',
      diagramCaption:
        "Routing O → A → P when AP : PB = 2 : 3 uses 2/5 of AB = b − a, giving OP = a + (2/5)(b − a) = (3/5)a + (2/5)b.",
      workedExamples: [
        {
          title: "Ratio division & collinearity proof",
          problem:
            "In triangle {{OAB}}, {{OA = a}} and {{OB = b}}. Point {{P}} lies on {{AB}} such that {{AP : PB = 2 : 3}}. Point {{Q}} satisfies {{OQ = (9/5)a + (6/5)b}}. Prove that {{O}}, {{P}} and {{Q}} lie on a straight line.",
          steps: [
            "First find {{AB = AO + OB = -a + b = b - a}}.",
            "Since {{AP : PB = 2 : 3}}, {{AP = (2/5)AB = (2/5)(b - a)}}.",
            "Route {{OP = OA + AP = a + (2/5)b - (2/5)a = (3/5)a + (2/5)b}}.",
            "Factorise both vectors to compare: {{OP = (1/5)(3a + 2b)}} and {{OQ = (3/5)(3a + 2b)}}.",
            "Hence {{OQ = 3 * OP}}, so {{OQ}} is parallel to {{OP}}. Since they also share the common point {{O}}, the points {{O}}, {{P}} and {{Q}} are collinear.",
          ],
          answer: "{{OQ = 3 * OP}} (parallel) and common point {{O}}, so {{O, P, Q}} are collinear.",
          yourTurn: {
            question:
              "In triangle {{OAB}}, {{OA = a}} and {{OB = b}}. Point {{M}} divides {{AB}} in the ratio {{AM : MB = 1 : 3}}. Find {{OM}} in terms of {{a}} and {{b}}.",
            answer: { type: "expression", expr: "(3/4)*a + (1/4)*b", form: "any", display: "{{(3/4)a + (1/4)b}}" },
            solution:
              "{{AB = b - a}} and {{AM = (1/4)(b - a)}}, so {{OM = a + (1/4)(b - a) = (3/4)a + (1/4)b}}.",
          },
        },
      ],
      keyPoints: [
        "Displacement vector: {{AB = OB - OA}} (end position vector minus start position vector).",
        "Magnitude of column vector {{(x, y)}} is {{sqrt(x^2 + y^2)}} — square negative components carefully so {{(-4)^2 = +16}}.",
        "Ratio {{AP : PB = m : n}} means {{AP = (m/(m + n)) * AB}}, dividing by the total parts {{m + n}}.",
        "Collinearity proof requires BOTH {{PQ = k * QR}} (parallel) AND stating the shared point {{Q}}.",
      ],
      whyItWorks:
        "Two non-zero vectors that are scalar multiples have the exact same gradient/direction. Two parallel lines in a plane are usually separate like railway tracks, unless they pass through at least one identical point — that single shared vertex forces both segments onto the exact same straight line.",
      strategies: ["Route nose-to-tail through known vertices", "Factorise vector expressions to reveal scalar multiples"],
      thinkDeeper:
        "If {{OP = (1 - t)a + tb}} as scalar {{t}} varies over all real numbers, where is {{P}} when {{t = 0}}, {{t = 1}}, {{0 < t < 1}}, and {{t > 1}}? Why does the coefficient sum {{(1 - t) + t = 1}} guarantee {{P}} lies on the line through {{A}} and {{B}}?",
    },
    {
      id: "sets-venn-diagrams",
      heading: "Set notation & Venn diagrams",
      discovery: {
        problem:
          "In a Year 11 group of 30 students, 18 study Spanish, 15 study History, and 5 study neither. Why does {{18 + 15 + 5 = 38}} exceed 30 — and how many study **both**?",
        idea:
          "Every student studying **both** subjects was counted twice (once inside the 18, once inside the 15). The overlap is the excess {{38 - 30 = 8}} students — or algebraically {{(18 - x) + x + (15 - x) + 5 = 30 => 38 - x = 30 => x = 8}}.",
      },
      body:
        "Edexcel 4MA1 tests precise set symbols alongside algebraic 2- and 3-circle Venn diagrams.\n\n| Symbol | Meaning | Careful distinction |\n|---|---|---|\n| {{ξ}} | Universal set (every element under consideration) | Don't forget elements outside all circles! |\n| {{x ∈ A}} / {{x ∉ A}} | {{x}} is / is not an element of set {{A}} | Used for single members, not subsets |\n| {{A ∩ B}} | **Intersection**: in {{A}} **AND** in {{B}} (overlap) | Narrower condition |\n| {{A ∪ B}} | **Union**: in {{A}} **OR** {{B}} **OR both** | Includes the overlap once |\n| {{A'}} | **Complement**: everything in {{ξ}} **NOT** in {{A}} | {{n(A) + n(A') = n(ξ)}} |\n| {{A ⊂ B}} | {{A}} is a subset of {{B}} (every member of {{A}} is in {{B}}) | implies {{A ∩ B = A}} |\n| {{∅}} | Empty set (contains zero elements: {{n(∅) = 0}}) | Never write `{0}` — zero is an element! |\n| {{n(A)}} | Cardinality: **number of elements** in set {{A}} | Gives an integer count, not a list |\n\n- **Golden Rule for Venn Diagrams:** Always fill from the **innermost intersection outward** ({{A ∩ B}} or {{A ∩ B ∩ C}} first), subtracting overlaps as you move out.\n- **Algebraic Venn strategy:** When the centre overlap isn't given, call it {{x}}, express every other region in terms of {{x}} (e.g. \"{{A}} only\" = {{n(A) - x}}), and sum all disjoint regions in {{ξ}} to equal {{n(ξ)}}.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 220" role="img" aria-label="Universal set rectangle containing overlapping sets A and B with algebraic region labels 18 minus x, x, 15 minus x, and 5 outside"><rect x="15" y="15" width="470" height="190" rx="10" fill="#f8fafc" stroke="#334155" stroke-width="2"/><text x="30" y="40" font-family="sans-serif" font-size="16" font-weight="700" fill="#0f172a">ξ (Total = 30)</text><circle cx="205" cy="112" r="72" fill="#3b82f6" fill-opacity="0.16" stroke="#2563eb" stroke-width="2.4"/><circle cx="295" cy="112" r="72" fill="#f59e0b" fill-opacity="0.18" stroke="#d97706" stroke-width="2.4"/><text x="150" y="58" font-family="sans-serif" font-size="14" font-weight="700" fill="#1d4ed8">S (18)</text><text x="328" y="58" font-family="sans-serif" font-size="14" font-weight="700" fill="#b45309">H (15)</text><text x="162" y="116" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#1e3a8a">18 − x</text><text x="162" y="136" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e3a8a">(= 10)</text><text x="250" y="116" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="800" fill="#dc2626">x = 8</text><text x="338" y="116" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#92400e">15 − x</text><text x="338" y="136" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#92400e">(= 7)</text><text x="435" y="182" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#334155">5</text><text x="435" y="197" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#64748b">(S ∪ H)′</text></svg>',
      diagramCaption:
        "Label the intersection x first, subtract x from each circle total, include the outside region (S ∪ H)′ = 5, and equate the sum of all four disjoint regions to n(ξ) = 30.",
      workedExamples: [
        {
          title: "3-set Venn diagram & De Morgan shading/counts",
          problem:
            "Given {{n(ξ) = 50}}, {{n(A) = 26}}, {{n(B) = 22}}, {{n(A ∪ B)' = 9}}, find {{n(A ∩ B)}} and {{n(A' ∩ B)}}.",
          steps: [
            "First find {{n(A ∪ B) = n(ξ) - n(A ∪ B)' = 50 - 9 = 41}}.",
            "Use inclusion–exclusion (or let {{n(A ∩ B) = x}}): {{(26 - x) + x + (22 - x) = 41}}.",
            "Simplify: {{48 - x = 41}}, so {{x = 7}}. Hence {{n(A ∩ B) = 7}}.",
            "Region {{A' ∩ B}} means \"not in {{A}} AND in {{B}}\" (i.e. {{B}} only): {{22 - 7 = 15}}.",
          ],
          answer: "{{n(A ∩ B) = 7}}, {{n(A' ∩ B) = 15}}",
          yourTurn: {
            question:
              "In a club of 40 members, {{n(P) = 21}}, {{n(Q) = 19}}, and {{n((P ∪ Q)') = 6}}. Find {{n(P ∩ Q)}}.",
            answer: { type: "number", value: 6 },
            solution:
              "{{n(P ∪ Q) = 40 - 6 = 34}}. Then {{21 + 19 - x = 34 => 40 - x = 34 => x = 6}}.",
          },
        },
      ],
      keyPoints: [
        "Inclusion–exclusion for two sets: {{n(A ∪ B) = n(A) + n(B) - n(A ∩ B)}}.",
        "{{A ∩ B'}} means \"in {{A}} only\"; {{(A ∪ B)' = A' ∩ B'}} means \"outside both circles\".",
        "In 3-circle problems, work strictly outward: {{A ∩ B ∩ C}} first, then the three pairwise petals, then the three \"only\" regions, then outside.",
        "Check whether the question asks you to **list elements** of a set or state **{{n(...)}}** (how many elements).",
      ],
      whyItWorks:
        "The four regions {{A ∩ B'}}, {{A ∩ B}}, {{A' ∩ B}}, and {{(A ∪ B)'}} partition {{ξ}} into non-overlapping pieces, so every element of {{ξ}} sits in **one and only one** region.",
      strategies: ["Work from the innermost intersection outward", "Let unknown intersection = x and equate sum of all regions to n(ξ)"],
      thinkDeeper:
        "Why is {{(A ∩ B)'}} ALWAYS equal to {{A' ∪ B'}} rather than {{A' ∩ B'}}? Test both sides on the four regions of a 2-set Venn diagram (De Morgan's Law).",
    },
    {
      id: "conditional-probability-trees",
      heading: "Tree diagrams & conditional probability",
      discovery: {
        problem:
          "A bag holds 4 red and 6 blue counters (10 total). Two counters are taken **without replacement**. A student writes {{P(\"both red\") = (4/10) * (4/10) = 16/100}}. What physically impossible thing did that student just assume?",
        idea:
          "Once the first red counter is in your hand, only **3 red counters** remain out of **9 counters** left in the bag! So {{P(\"both red\") = (4/10) * (3/9) = 12/90 = 2/15}}.",
      },
      body:
        "**Conditional probability** {{P(A | B)}} means the probability that {{A}} happens **given that {{B}} has already happened** — restricting your sample space purely to {{B}}.\n\n    {{P(A | B) = P(A ∩ B) / P(B)}}   or from a Venn diagram   {{n(A ∩ B) / n(B)}}\n\n- **Tree diagram rules:**\n  - **Multiply** along branches for **AND** ({{P(A ∩ B) = P(A) * P(B | A)}}).\n  - **Add** separate mutually exclusive branch outcomes for **OR**.\n  - Each pair/trio of branches leaving the same node must sum to {{1}}.\n- **Without replacement (dependent events):** Every draw reduces the total denominator by {{1}} AND reduces the chosen colour's numerator by {{1}} (other colours keep their numerator over the new smaller denominator!).\n- **\"One of each colour\" trap:** Taking one red and one blue has **TWO** valid orders: **Red then Blue** OR **Blue then Red** — calculate both branch products and add them!\n- **\"At least one\" shortcut:** Instead of summing three or more branches, subtract the single \"none\" branch from {{1}}:\n\n    {{P(\"at least one success\") = 1 - P(\"zero successes\")}}",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 225" role="img" aria-label="Probability tree for 4 red and 6 blue counters without replacement showing denominators dropping from 10 to 9"><rect x="0" y="0" width="500" height="225" rx="12" fill="#f8fafc"/><text x="95" y="24" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#475569">1st Pick (out of 10)</text><text x="275" y="24" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#475569">2nd Pick (out of 9!)</text><text x="425" y="24" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#475569">Outcome</text><line x1="35" y1="120" x2="155" y2="68" stroke="#dc2626" stroke-width="2.4"/><line x1="35" y1="120" x2="155" y2="172" stroke="#2563eb" stroke-width="2.4"/><text x="86" y="84" font-family="sans-serif" font-size="13" font-weight="700" fill="#dc2626">4/10</text><text x="86" y="162" font-family="sans-serif" font-size="13" font-weight="700" fill="#2563eb">6/10</text><circle cx="168" cy="68" r="13" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8"/><text x="168" y="73" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="800" fill="#b91c1c">R</text><circle cx="168" cy="172" r="13" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><text x="168" y="177" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="800" fill="#1d4ed8">B</text><line x1="184" y1="68" x2="315" y2="42" stroke="#dc2626" stroke-width="2"/><line x1="184" y1="68" x2="315" y2="94" stroke="#2563eb" stroke-width="2"/><line x1="184" y1="172" x2="315" y2="146" stroke="#dc2626" stroke-width="2"/><line x1="184" y1="172" x2="315" y2="198" stroke="#2563eb" stroke-width="2"/><text x="245" y="48" font-family="sans-serif" font-size="12" font-weight="700" fill="#dc2626">3/9</text><text x="245" y="96" font-family="sans-serif" font-size="12" font-weight="700" fill="#2563eb">6/9</text><text x="245" y="152" font-family="sans-serif" font-size="12" font-weight="700" fill="#dc2626">4/9</text><text x="245" y="200" font-family="sans-serif" font-size="12" font-weight="700" fill="#2563eb">5/9</text><text x="330" y="46" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">RR: 12/90</text><text x="330" y="98" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">RB: 24/90</text><text x="330" y="150" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">BR: 24/90</text><text x="330" y="202" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">BB: 30/90</text></svg>',
      diagramCaption:
        "Keep unsimplified denominator 90 until the end so the four outcomes 12/90 + 24/90 + 24/90 + 30/90 = 90/90 = 1 check instantly!",
      workedExamples: [
        {
          title: "Algebraic / reverse without-replacement problem",
          problem:
            "A box contains 5 dark chocolates and 7 milk chocolates. Vani eats two chocolates at random. Find (a) the probability she eats one of each type, and (b) the probability both were milk given that they were the same type.",
          steps: [
            "Total chocolates = {{5 + 7 = 12}}; second pick has denominator {{11}}.",
            "(a) One of each means **DM or MD**: {{P(DM) + P(MD) = (5/12)*(7/11) + (7/12)*(5/11) = 35/132 + 35/132 = 70/132 = 35/66}}.",
            "(b) {{P(\"same type\") = P(DD) + P(MM) = (5/12)*(4/11) + (7/12)*(6/11) = 20/132 + 42/132 = 62/132}}.",
            "Conditional probability: {{P(MM | \"same type\") = (42/132) / (62/132) = 42/62 = 21/31}}.",
          ],
          answer: "(a) {{35/66}}, (b) {{21/31}}",
          yourTurn: {
            question:
              "A bag contains 3 green marbles and 5 yellow marbles. Two marbles are drawn without replacement. Find the probability that **different** colours are drawn, in simplest form.",
            answer: { type: "fraction", n: 15, d: 28, simplest: true },
            solution:
              "{{P(GY) + P(YG) = (3/8)*(5/7) + (5/8)*(3/7) = 15/56 + 15/56 = 30/56 = 15/28}}.",
          },
        },
      ],
      keyPoints: [
        "Without replacement: second-stage denominator is {{N - 1}} (third stage {{N - 2}}).",
        "Keep a common unsimplified denominator ({{N(N - 1)}}) while adding branches — simplify only at the final step!",
        "Conditional probability from a Venn diagram: {{P(A | B)}} uses **{{n(B)}}** as the denominator, NEVER {{n(ξ)}}.",
        "Algebraic counter questions (\"there are {{n}} sweets, {{P(RR) = 1/3}}\") form a quadratic equation by clearing {{n(n - 1)}}.",
      ],
      whyItWorks:
        "Conditioning on {{B}} discards every outcome outside {{B}}. Within the remaining universe of {{B}}, only the {{A ∩ B}} outcomes satisfy {{A}}, so their relative share is {{P(A ∩ B) / P(B)}}.",
      strategies: ["Leave fractions unsimplified over N(N − 1) while adding branches", "Use 1 − P(none) for 'at least one'"],
      thinkDeeper:
        "In the bag of 4 red and 6 blue counters without replacement, work out {{P(\"2nd counter is red\") = P(RR) + P(BR)}}. Why is it STILL {{4/10}} before you look at the first counter?",
    },
    {
      id: "cumulative-frequency-quartiles",
      heading: "Grouped mean, cumulative frequency & IQR",
      discovery: {
        problem:
          "A table says 18 runners finished in {{10 < t <= 20}} minutes. Should you plot cumulative frequency {{18}} at the midpoint {{t = 15}} or at the upper boundary {{t = 20}}?",
        idea:
          "Cumulative frequency answers **\"how many finished in {{t}} minutes OR LESS?\"** You only know for certain that all 18 had finished by the **end** of the interval ({{t = 20}}), never by {{t = 15}}! Use **midpoints** for estimated **mean**, and **upper class boundaries** for **cumulative frequency**.",
      },
      body:
        "Grouped continuous data requires two completely different x-values depending on the calculation:\n\n- **Estimated Mean from a grouped table:** Assume values in each class sit at the **midpoint** {{x = (\"lower\" + \"upper\") / 2}}, multiply each midpoint by its frequency {{f}}, and divide by total frequency (**NEVER** by the number of rows!):\n\n    {{\"Estimated mean\" = (sum(f * x)) / (sum(f))}}\n\n- **Cumulative Frequency (CF) Curve:**\n  1. Keep a running total of frequencies.\n  2. Plot `(upper class boundary, cumulative frequency)` — start at `(lowest boundary, 0)`.\n  3. Join points with a smooth S-curve (or straight segments).\n- **Reading Quartiles & IQR (for continuous CF total {{N}}):**\n  - **Lower quartile {{Q_1}}:** read horizontally from {{N/4}} across to the curve, then vertically down.\n  - **Median ({{Q_2}}):** read from {{N/2}}.\n  - **Upper quartile {{Q_3}}:** read from {{3N/4}}.\n  - **Interquartile Range:** {{IQR = Q_3 - Q_1}} (measures **consistency/spread** of the middle {{50%}}, unaffected by outliers).\n- **2-mark Edexcel Comparison Rule:** Always make **ONE comparison of average** (median, in context: e.g. \"Group A were faster/scored higher on average\") AND **ONE comparison of spread** (IQR, in context: e.g. \"Group A had a smaller IQR so their times were **more consistent**\").",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 235" role="img" aria-label="Cumulative frequency S-curve for N equals 80 plotted at upper boundaries showing Q1 at CF 20, Median at CF 40, and Q3 at CF 60"><rect x="0" y="0" width="500" height="235" rx="12" fill="#f8fafc"/><line x1="65" y1="22" x2="65" y2="195" stroke="#334155" stroke-width="2"/><line x1="65" y1="195" x2="465" y2="195" stroke="#334155" stroke-width="2"/><text x="20" y="110" transform="rotate(-90 20 110)" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#334155">Cumulative Frequency</text><text x="265" y="226" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#334155">Time t (minutes) — plotted at UPPER bounds</text><line x1="65" y1="152" x2="188" y2="152" stroke="#0d9488" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="188" y1="152" x2="188" y2="195" stroke="#0d9488" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="65" y1="109" x2="255" y2="109" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="5,3"/><line x1="255" y1="109" x2="255" y2="195" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="5,3"/><line x1="65" y1="65" x2="328" y2="65" stroke="#7c3aed" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="328" y1="65" x2="328" y2="195" stroke="#7c3aed" stroke-width="1.6" stroke-dasharray="4,3"/><path d="M 65 195 C 120 190, 155 170, 205 140 C 255 110, 300 72, 365 42 C 400 28, 425 23, 445 22" fill="none" stroke="#2563eb" stroke-width="3"/><circle cx="65" cy="195" r="3.5" fill="#1d4ed8"/><circle cx="141" cy="176" r="3.5" fill="#1d4ed8"/><circle cx="217" cy="133" r="3.5" fill="#1d4ed8"/><circle cx="293" cy="84" r="3.5" fill="#1d4ed8"/><circle cx="369" cy="40" r="3.5" fill="#1d4ed8"/><circle cx="445" cy="22" r="3.5" fill="#1d4ed8"/><text x="56" y="198" text-anchor="end" font-family="sans-serif" font-size="11" fill="#475569">0</text><text x="56" y="156" text-anchor="end" font-family="sans-serif" font-size="11" font-weight="700" fill="#0d9488">20</text><text x="56" y="113" text-anchor="end" font-family="sans-serif" font-size="11" font-weight="700" fill="#dc2626">40</text><text x="56" y="69" text-anchor="end" font-family="sans-serif" font-size="11" font-weight="700" fill="#7c3aed">60</text><text x="56" y="26" text-anchor="end" font-family="sans-serif" font-size="11" fill="#475569">80</text><text x="188" y="210" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0d9488">Q₁=16</text><text x="255" y="210" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#dc2626">Med=25</text><text x="328" y="210" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7c3aed">Q₃=35</text><text x="385" y="128" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">IQR = 35 − 16 = 19</text></svg>',
      diagramCaption:
        "For N = 80 items: read Q₁ at CF = 20, Median at CF = 40, and Q₃ at CF = 60. Notice every point of the curve was plotted at an upper class boundary.",
      workedExamples: [
        {
          title: "Estimated mean from a grouped frequency table",
          problem:
            "Masses {{m}} (g) of 40 parcels: {{0 < m <= 10}} has {{f = 6}}; {{10 < m <= 20}} has {{f = 14}}; {{20 < m <= 40}} has {{f = 12}}; {{40 < m <= 60}} has {{f = 8}}. Calculate an estimate for the mean mass.",
          steps: [
            "Find the midpoint {{x}} of each class: {{5}}, {{15}}, {{30}}, and {{50}} (watch the wider last two classes!).",
            "Multiply {{f * x}}: {{6 * 5 = 30}}, {{14 * 15 = 210}}, {{12 * 30 = 360}}, {{8 * 50 = 400}}.",
            "Sum {{sum(f * x) = 30 + 210 + 360 + 400 = 1000}} and {{sum(f) = 40}}.",
            "Estimated mean = {{1000 / 40 = 25}} g.",
          ],
          answer: "{{25}} g",
          yourTurn: {
            question:
              "Lengths {{L}} (cm) of 20 rods: {{0 < L <= 10}} ({{f = 4}}), {{10 < L <= 30}} ({{f = 10}}), {{30 < L <= 50}} ({{f = 6}}). Calculate an estimate for the mean length.",
            answer: { type: "number", value: 23 },
            solution:
              "Midpoints are {{5, 20, 40}}. {{sum(f * x) = 4(5) + 10(20) + 6(40) = 20 + 200 + 240 = 460}}. Mean = {{460 / 20 = 23}} cm.",
          },
        },
      ],
      keyPoints: [
        "Grouped mean uses **midpoints** and divides by **total frequency {{sum(f)}}**, never by the number of rows.",
        "Cumulative frequency curves plot `(upper bound, cumulative total)` — never plot at midpoints!",
        "When reading \"how many scored **more than** {{k}}\" from a CF curve, read CF at {{k}} and **subtract from {{N}}**.",
        "Smaller IQR = **more consistent / less varied** results (never say \"more accurate\" or \"more reliable\"!).",
      ],
      whyItWorks:
        "We lose exact individual values when data is grouped into intervals, so the midpoint is the unbiased centre of each interval for estimating the total sum {{sum(f * x)}}.",
      strategies: ["Check class widths carefully when finding midpoints", "Subtract CF(k) from total N for 'greater than k' questions"],
      thinkDeeper:
        "Why is the mean from a grouped table only an **estimate**, and how could you find the exact mathematical **lower bound** and **upper bound** for the true mean of the 40 parcels above?",
    },
    {
      id: "histograms-frequency-density",
      heading: "Histograms with unequal class widths",
      discovery: {
        problem:
          "Suppose 20 people are aged {{15 <= a < 20}} (a 5-year span) and 20 people are aged {{20 <= a < 40}} (a 20-year span). If you drew both bars the same height {{20}}, why would the second bar look four times more crowded than it really is?",
        idea:
          "Our eyes judge visual weight by **area**, and {{20}} people spread across {{20}} years have only **{{1}} person per year**, whereas {{20}} people packed into {{5}} years have **{{4}} people per year**! In a histogram, **area = frequency**, so height must be **Frequency Density = Frequency ÷ Class Width**.",
      },
      body:
        "On Edexcel 4MA1 Higher, histograms have **continuous horizontal scales** with **unequal class widths** and **no gaps** between bars.\n\n    {{\"Frequency Density\" = \"Frequency\" / \"Class Width\"}}   ⇔   {{\"Frequency\" = \"Class Width\" * \"Frequency Density\" = \"Area of bar\"}}\n\n- **Drawing a histogram:** Compute `Class Width = Upper − Lower` and `FD = Frequency ÷ Width` for every row, label the vertical axis **Frequency Density**, and draw bars of height `FD`.\n- **Unlabelled vertical scale questions:** Often Edexcel hides the numbers on the Frequency Density axis, but gives ONE row of the table AND its drawn bar. Use that matching pair to calibrate the scale (e.g. if a bar of width {{10}} and frequency {{30}} is {{6}} grid squares tall, then `FD = 3` corresponds to {{6}} squares, so {{2}} squares = `1` unit of FD).\n- **Estimating counts across part of a bar:** If a question asks for the number of items above {{x = 25}} inside a class {{20 <= x < 35}}, take the relevant fraction of that bar's width ({{35 - 25 = 10}} out of {{15}}) and multiply by its Frequency Density: `10 × FD`.",
      diagram:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 235" role="img" aria-label="Histogram with unequal class widths 0 to 10, 10 to 15, 15 to 30, and 30 to 50 showing bar areas equal to frequencies"><rect x="0" y="0" width="500" height="235" rx="12" fill="#f8fafc"/><line x1="65" y1="20" x2="65" y2="195" stroke="#334155" stroke-width="2"/><line x1="65" y1="195" x2="465" y2="195" stroke="#334155" stroke-width="2"/><text x="20" y="108" transform="rotate(-90 20 108)" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#334155">Frequency Density</text><text x="265" y="226" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#334155">Speed v (km/h) — Area of each bar = Frequency</text><rect x="65" y="131" width="76" height="64" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/><rect x="141" y="35" width="38" height="160" fill="#fde68a" stroke="#b45309" stroke-width="2"/><rect x="179" y="99" width="114" height="96" fill="#a7f3d0" stroke="#047857" stroke-width="2"/><rect x="293" y="163" width="152" height="32" fill="#ddd6fe" stroke="#6d28d9" stroke-width="2"/><text x="103" y="167" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#1e3a8a">f = 20</text><text x="103" y="181" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1e3a8a">(10 × 2.0)</text><text x="160" y="112" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#92400e">f=25</text><text x="160" y="126" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#92400e">(5×5)</text><text x="236" y="148" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#065f46">f = 45</text><text x="236" y="162" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#065f46">(15 × 3.0)</text><text x="369" y="183" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#4c1d95">f = 20 (20 × 1.0)</text><text x="56" y="198" text-anchor="end" font-family="sans-serif" font-size="11" fill="#475569">0</text><text x="56" y="166" text-anchor="end" font-family="sans-serif" font-size="11" fill="#475569">1</text><text x="56" y="134" text-anchor="end" font-family="sans-serif" font-size="11" fill="#475569">2</text><text x="56" y="102" text-anchor="end" font-family="sans-serif" font-size="11" fill="#475569">3</text><text x="56" y="70" text-anchor="end" font-family="sans-serif" font-size="11" fill="#475569">4</text><text x="56" y="38" text-anchor="end" font-family="sans-serif" font-size="11" fill="#475569">5</text><text x="65" y="210" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">0</text><text x="141" y="210" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">10</text><text x="179" y="210" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">15</text><text x="293" y="210" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">30</text><text x="445" y="210" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">50</text></svg>',
      diagramCaption:
        "Notice 0–10 and 30–50 both have frequency 20, yet 30–50 is twice as wide so its Frequency Density is half as tall (1.0 vs 2.0) — equal area = equal frequency!",
      workedExamples: [
        {
          title: "Calibrating a histogram & slicing an interval",
          problem:
            "A histogram shows waiting times {{t}} (mins): {{0 <= t < 5}} (`FD = 2.4`), {{5 <= t < 15}} (`FD = 3.2`), {{15 <= t < 30}} (`FD = 1.6`), and {{30 <= t < 50}} (`FD = 0.6`). Find the total number of patients and estimate how many waited longer than {{20}} minutes.",
          steps: [
            "Compute each bar's area (`Width × FD`): {{5 * 2.4 = 12}}, {{10 * 3.2 = 32}}, {{15 * 1.6 = 24}}, {{20 * 0.6 = 12}}.",
            "Total patients = {{12 + 32 + 24 + 12 = 80}}.",
            "Waiting longer than {{20}} mins splits {{15 <= t < 30}} at {{t = 20}}: remaining width in that bar is {{30 - 20 = 10}}, giving {{10 * 1.6 = 16}} patients.",
            "Add the entire {{30 <= t < 50}} bar ({{12}} patients): {{16 + 12 = 28}} patients.",
          ],
          answer: "{{80}} patients total; {{28}} waited longer than 20 mins",
          yourTurn: {
            question:
              "In a histogram, the class {{10 <= x < 25}} has Frequency Density {{2.8}}, and the class {{25 <= x < 45}} has Frequency Density {{1.5}}. Estimate how many items have {{15 <= x < 45}}.",
            answer: { type: "number", value: 58 },
            solution:
              "From {{15}} to {{25}} has width {{10}}, giving {{10 * 2.8 = 28}}. From {{25}} to {{45}} has width {{20}}, giving {{20 * 1.5 = 30}}. Total = {{28 + 30 = 58}}.",
          },
        },
      ],
      keyPoints: [
        "{{FD = \"Frequency\" / \"Class Width\"}} and {{\"Frequency\" = \"Class Width\" * FD}}.",
        "Always write a quick `Width` and `FD` column next to any histogram table before plotting or reading.",
        "To estimate the **median** from a histogram alone, find total area {{N}}, then locate the vertical slice where cumulative area from the left reaches {{N/2}}.",
        "If discrete integer classes have gaps (e.g. `1–5, 6–10`), expand to continuous class boundaries (`0.5–5.5, 5.5–10.5`) before finding widths.",
      ],
      whyItWorks:
        "Because `Frequency Density` has units of *items per unit of x*, multiplying height (`items / unit`) by horizontal width (`units`) cancels the units and recovers exact item count (`items`).",
      strategies: ["Add Width and FD columns to every grouped table", "Use the single fully-known bar/row pair to unlock an unlabelled FD axis"],
      thinkDeeper:
        "Why does scaling every Frequency Density by a constant {{k}} still keep bar areas **proportional** to frequency, and how can you find a probability directly as `(shaded bar area) ÷ (total histogram area)` even when NO frequencies are given at all?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "How do you express vector {{AB}} in terms of position vectors {{OA}} and {{OB}}?",
        back: "{{AB = AO + OB = OB - OA}} (destination minus start).",
      },
      {
        front: "What is the magnitude of column vector {{(x, y)}}?",
        back: "{{|v| = sqrt(x^2 + y^2)}} by Pythagoras' theorem.",
      },
      {
        front: "If {{P}} lies on {{AB}} with {{AP : PB = m : n}}, what fraction of {{AB}} is {{AP}}?",
        back: "{{AP = (m/(m + n)) * AB}} — divide by the total parts {{m + n}}, never {{n}}!",
      },
      {
        front: "What TWO statements are mandatory to prove {{P, Q, R}} are collinear?",
        back: "1. {{PQ = k * QR}} so {{PQ}} and {{QR}} are **parallel**. 2. They **share the common point {{Q}}**.",
      },
      {
        front: "What do {{A ∩ B}}, {{A ∪ B}}, and {{A'}} mean?",
        back: "{{A ∩ B}} = in both {{A}} and {{B}}; {{A ∪ B}} = in {{A}} or {{B}} or both; {{A'}} = in {{ξ}} but not in {{A}}.",
      },
      {
        front: "State the inclusion–exclusion formula for two sets {{A}} and {{B}}.",
        back: "{{n(A ∪ B) = n(A) + n(B) - n(A ∩ B)}}.",
      },
      {
        front: "State the conditional probability formula for {{P(A | B)}}.",
        back: "{{P(A | B) = P(A ∩ B) / P(B)}} (or {{n(A ∩ B) / n(B)}} from a Venn diagram).",
      },
      {
        front: "What happens to probabilities on the second stage of a tree diagram **without replacement**?",
        back: "The denominator decreases by {{1}} (to {{N - 1}}), and the picked item's numerator also decreases by {{1}}.",
      },
      {
        front: "Fastest method for {{P(\"at least one success\")}}?",
        back: "{{1 - P(\"none\")}}.",
      },
      {
        front: "At what x-values do you plot a Cumulative Frequency curve vs calculate a Grouped Mean?",
        back: "Cumulative Frequency: **upper class boundaries**. Grouped Mean: **midpoints**.",
      },
      {
        front: "How do you compare two distributions in context for 2 marks?",
        back: "1. Compare **medians** in context (higher/lower on average). 2. Compare **IQRs** in context (smaller IQR = **more consistent**).",
      },
      {
        front: "What are the two core histogram formulas?",
        back: "{{FD = \"Frequency\" / \"Class Width\"}} and {{\"Frequency\" = \"Class Width\" * FD}} (area of bar).",
      },
    ],
    mustKnow: [
      "Calculate column vector combinations and magnitudes {{sqrt(x^2 + y^2)}}.",
      "Route vector journeys through triangles/parallelograms using ratios {{m/(m + n)}}.",
      "Write a full 4–5 mark vector collinearity proof stating both parallel scalar multiple AND common point.",
      "Use set notation ({{ξ, ∈, ∉, ∩, ∪, A', ⊂, ∅, n(A)}}) and solve algebraic 2- and 3-set Venn diagrams.",
      "Calculate without-replacement tree probabilities, \"one of each\" (both orders!), and {{P(A | B)}}.",
      "Estimate the mean {{(sum(f * x)) / (sum(f))}} from a grouped frequency table using midpoints.",
      "Plot cumulative frequency at upper boundaries, read median/{{Q_1}}/{{Q_3}}/IQR, and compare distributions in context.",
      "Construct and interpret unequal-width histograms using Frequency Density and bar areas, including partial intervals.",
    ],
    misconceptions: [
      {
        wrong: "Writing {{AB = OA - OB = a - b}} ❌",
        right: "Route {{A -> O -> B}}: {{AB = -OA + OB = b - a}} (destination minus start) ✅",
      },
      {
        wrong: "Ending a collinearity proof with \"{{PQ = 2 * QR}} so {{P, Q, R}} are collinear\" ❌",
        right: "Write \"{{PQ = 2 * QR}}, so {{PQ}} is parallel to {{QR}}, **and they share common point {{Q}}**, so {{P, Q, R}} are collinear\" ✅",
      },
      {
        wrong: "Putting {{n(A) = 18}} directly into the \"{{A}} only\" crescent of a Venn diagram ❌",
        right: "Subtract the overlap {{x}} first: \"{{A}} only\" = {{18 - x}} ✅",
      },
      {
        wrong: "Keeping denominator {{10}} on the second pick without replacement: {{(4/10) * (3/10)}} ❌",
        right: "Total items drop by {{1}} as well: {{(4/10) * (3/9)}} ✅",
      },
      {
        wrong: "Plotting cumulative frequency points at class midpoints ❌",
        right: "Plot cumulative frequency at **upper class boundaries** (use midpoints ONLY for estimated mean!) ✅",
      },
      {
        wrong: "Plotting raw frequency on the vertical axis of an unequal-width histogram ❌",
        right: "Plot **Frequency Density = Frequency ÷ Class Width** so bar area equals frequency ✅",
      },
    ],
    examMistakes: [
      "Using {{2/3}} instead of {{2/5}} when a point divides {{AB}} in the ratio {{2 : 3}}.",
      "Forgetting the second order ({{RB + BR}}) when asked for the probability of picking two different colours.",
      "Using {{n(ξ)}} instead of {{n(B)}} as the denominator in conditional probability {{P(A | B)}}.",
      "Dividing {{sum(f * x)}} by the number of table rows (e.g. 5) instead of total frequency {{sum(f)}} in grouped mean.",
      "Reading cumulative frequency at {{k}} without subtracting from total {{N}} when asked how many items are **greater than** {{k}}.",
      "Saying a smaller IQR means data is \"more accurate\" or \"more reliable\" — Edexcel requires **\"more consistent\"** or **\"less spread out\"**.",
    ],
    mnemonics: [
      {
        topic: "Collinearity 2-Part Conclusion",
        device: "P + P = Parallel + Point",
        explanation: "Never close a collinearity proof without stating BOTH: vectors are **Parallel** ({{PQ = k * QR}}) AND share a common **Point** ({{Q}}).",
      },
      {
        topic: "Grouped Data X-Values",
        device: "Mean = Midpoints · Cumul = Ceilings",
        explanation: "Estimated **M**ean uses **M**idpoints; **C**umulative frequency plots at **C**eilings (upper class boundaries).",
      },
      {
        topic: "Set Union vs Intersection",
        device: "∪ = Cup holds ALL · ∩ = Cap traps OVERLAP",
        explanation: "{{A ∪ B}} pours everything from both sets into the cup; {{A ∩ B}} caps only elements sitting in both simultaneously.",
      },
    ],
    realWorld: [
      {
        title: "Air Traffic & Game Physics Vectors",
        detail: "Aircraft ground velocity adds airspeed vector and crosswind vector nose-to-tail, while ray-tracing engines use {{OP = a + t(b - a)}} to test collinear light-ray hits.",
        emoji: "✈️",
      },
      {
        title: "Medical Screening & Conditional Probability",
        detail: "Doctors care about {{P(\"has condition\" | \"positive test\")}}, not {{P(\"positive test\" | \"has condition\")}} — conditional probability prevents false-positive panic.",
        emoji: "🩺",
      },
      {
        title: "Income & Commute Histograms",
        detail: "National statistics agencies group high incomes into much wider brackets (`$100k–$250k`) than lower brackets; without Frequency Density, wide brackets would look artificially huge.",
        emoji: "📈",
      },
    ],
    videos: [
      {
        title: "IGCSE Higher Vector Geometry & Collinearity Proofs",
        channel: "GCSE Maths Tutor",
        url: "https://www.youtube.com/results?search_query=gcse+maths+tutor+vector+proofs+collinear+igcse+edexcel",
      },
      {
        title: "Venn Diagrams, Set Notation & Conditional Probability",
        channel: "Maths Genie",
        url: "https://www.youtube.com/results?search_query=maths+genie+venn+diagrams+conditional+probability+igcse",
      },
      {
        title: "Histograms & Cumulative Frequency Curves (4MA1 Higher)",
        channel: "Corbettmaths",
        url: "https://www.youtube.com/results?search_query=corbettmaths+histograms+frequency+density+cumulative+frequency",
      },
    ],
    formulas: [
      {
        name: "Displacement vector & magnitude",
        formula: "{{AB = OB - OA}},   {{|v| = sqrt(x^2 + y^2)}}",
        note: "Ratio {{AP : PB = m : n}} gives {{AP = (m/(m + n)) * AB}}.",
      },
      {
        name: "Two-set inclusion–exclusion",
        formula: "{{n(A ∪ B) = n(A) + n(B) - n(A ∩ B)}}",
        note: "Also {{n(A') = n(ξ) - n(A)}}.",
      },
      {
        name: "Conditional probability",
        formula: "{{P(A | B) = P(A ∩ B) / P(B)}}",
        note: "Restrict denominator to the given condition {{B}}.",
      },
      {
        name: "Estimated mean of grouped data",
        formula: "{{\"Mean\" = (sum(f * x)) / (sum(f))}}",
        note: "Where {{x}} is each class midpoint.",
      },
      {
        name: "Quartiles & Interquartile Range",
        formula: "{{IQR = Q_3 - Q_1}}",
        note: "Read {{Q_1}} at {{N/4}}, Median at {{N/2}}, {{Q_3}} at {{3N/4}} on a CF curve.",
      },
      {
        name: "Histogram Frequency Density",
        formula: "{{FD = \"Frequency\" / \"Class Width\"}},   {{\"Frequency\" = \"Class Width\" * FD}}",
        note: "Area of each bar represents frequency.",
      },
    ],
  },
};
