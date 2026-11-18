import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "number-bounds-surds",
  title: "Number, Bounds, Indices & Surds",
  strand: "Number",
  icon: "🔢",
  summary: "Master measurement bounds, exact recurring proofs, fractional indices, and surd conjugates.",
  intro:
    "Higher IGCSE Number is all about **precision versus exactness**. In science and engineering, rounded measurements hide a range of possible true values — **bounds** track the worst-case spread. In pure mathematics, decimals lose accuracy the moment you round, so we calculate **exactly** using **recurring fraction proofs**, **fractional/negative indices**, and **surds with conjugate denominators**.",
  guide: [
    {
      id: "upper-lower-bounds",
      heading: "Upper & lower bounds and error intervals",
      discovery: {
        problem:
          "A sprinter's distance is {{d = 100}} m (rounded to the nearest metre) and time is {{t = 10.0}} s (rounded to 1 d.p.). To find the **greatest possible average speed** {{s = d / t}}, should you divide the upper bound of {{d}} by the *upper* bound of {{t}}, or by the *lower* bound of {{t}}?",
        idea:
          "Speed is greatest when the sprinter runs the **longest possible distance** in the **shortest possible time**! Dividing by a smaller positive number makes a fraction larger, so {{UB(d / t) = UB(d) / LB(t) = 100.5 / 9.95}}.",
      },
      body:
        "When a continuous measurement {{x}} is **rounded** to a given unit of accuracy {{u}}, add and subtract **half a unit** ({{u / 2}}) to find its error interval:\n\n    {{LB <= x < UB}}\n\nNotice the inequality signs: {{LB}} is included ({{<=}}, because half-way rounds up), while {{UB}} is strictly excluded ({{<}}, although we still substitute {{UB}} directly into bound calculations!).\n\n**Truncation vs Rounding:**\n- **Rounded** to 1 d.p. as {{4.7}}: error interval is {{4.65 <= x < 4.75}} (width {{0.1}}, centred on {{4.7}}).\n- **Truncated** (chopped off) to 1 d.p. as {{4.7}}: digits after `.7` were simply deleted, so {{4.7 <= x < 4.8}} (starts at {{4.7}}, width {{0.1}}).\n\n**Combining Bounds (for positive quantities {{a, b > 0}}):**\n\n| Calculation | Lower Bound (LB) | Upper Bound (UB) |\n|---|---|---|\n| {{a + b}} | {{LB(a) + LB(b)}} | {{UB(a) + UB(b)}} |\n| {{a - b}} | {{LB(a) - UB(b)}} | {{UB(a) - LB(b)}} |\n| {{a * b}} | {{LB(a) * LB(b)}} | {{UB(a) * UB(b)}} |\n| {{a / b}} | {{LB(a) / UB(b)}} | {{UB(a) / LB(b)}} |\n\n**\"Suitable degree of accuracy\" questions:**\nWhen Edexcel asks for a calculation *\"to a suitable degree of accuracy\"*, work out **both** {{UB}} and {{LB}} of the final answer to full calculator display, then compare them at 1 s.f., 2 s.f., 3 s.f., etc. Choose the **most accurate** rounding where both bounds round to the **exact same value**, and state that reason explicitly.",
      diagram:
        '<svg viewBox="0 0 480 155" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Number line comparing rounding 4.7 (from 4.65 inclusive to 4.75 exclusive) against truncating 4.7 (from 4.7 inclusive to 4.8 exclusive)"><rect x="0" y="0" width="480" height="155" rx="10" fill="#f8fafc"/><line x1="40" y1="95" x2="440" y2="95" stroke="#334155" stroke-width="2"/><line x1="60" y1="88" x2="60" y2="102" stroke="#334155" stroke-width="2"/><text x="60" y="118" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">4.60</text><line x1="140" y1="88" x2="140" y2="102" stroke="#334155" stroke-width="2"/><text x="140" y="118" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">4.65</text><line x1="220" y1="86" x2="220" y2="104" stroke="#0f172a" stroke-width="2.5"/><text x="220" y="118" font-size="12" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#0f172a">4.70</text><line x1="300" y1="88" x2="300" y2="102" stroke="#334155" stroke-width="2"/><text x="300" y="118" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">4.75</text><line x1="380" y1="88" x2="380" y2="102" stroke="#334155" stroke-width="2"/><text x="380" y="118" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">4.80</text><line x1="140" y1="38" x2="300" y2="38" stroke="#2563eb" stroke-width="4"/><circle cx="140" cy="38" r="5" fill="#2563eb"/><circle cx="300" cy="38" r="5" fill="#ffffff" stroke="#2563eb" stroke-width="2.5"/><text x="220" y="25" font-size="12" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#1d4ed8">Rounded to 4.7: 4.65 &lt;= x &lt; 4.75</text><line x1="220" y1="66" x2="380" y2="66" stroke="#d97706" stroke-width="4"/><circle cx="220" cy="66" r="5" fill="#d97706"/><circle cx="380" cy="66" r="5" fill="#ffffff" stroke="#d97706" stroke-width="2.5"/><text x="300" y="56" font-size="12" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#b45309">Truncated to 4.7: 4.7 &lt;= x &lt; 4.8</text><text x="240" y="143" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#475569">Filled dot = included (&lt;=) · Open circle = upper boundary (&lt;)</text></svg>',
      diagramCaption: "Rounding centres the interval around 4.7; truncating starts at 4.7 and stretches a full tenth forward.",
      workedExamples: [
        {
          title: "Bounds in subtraction and division + suitable accuracy",
          problem:
            "Given {{p = 84.6}} (correct to 1 d.p.) and {{q = 12.4}} (correct to 1 d.p.), find the upper and lower bounds of {{w = p / q}}, and hence give {{w}} to a suitable degree of accuracy.",
          steps: [
            "Write individual bounds first (this earns the first M1 mark!): {{84.55 <= p < 84.65}} and {{12.35 <= q < 12.45}}.",
            "Upper bound of {{p / q}} uses {{UB(p) / LB(q)}}: {{UB(w) = 84.65 / 12.35 = 6.85425...}}",
            "Lower bound of {{p / q}} uses {{LB(p) / UB(q)}}: {{LB(w) = 84.55 / 12.45 = 6.79116...}}",
            "Compare roundings: to 2 s.f., {{UB = 6.9}} and {{LB = 6.8}} (disagree). To 1 s.f., both {{6.854...}} and {{6.791...}} round to {{7}} (Wait — check 1 d.p.: 6.9 vs 6.8; check integer/1 s.f.: both round to 7!).",
          ],
          answer: "{{w = 7}} (to 1 s.f., as both UB and LB round to 7)",
          yourTurn: {
            question:
              "A metal block has mass {{m = 63}} g (nearest gram) and volume {{v = 13}} cm³ (nearest cm³). Work out the **upper bound** of its density {{d = m / v}} in g/cm³.",
            answer: { type: "number", value: 5.08, display: "5.08 g/cm³" },
            solution:
              "{{UB(m) = 63.5}} and {{LB(v) = 12.5}}. {{UB(d) = UB(m) / LB(v) = 63.5 / 12.5 = 5.08}} g/cm³.",
          },
        },
      ],
      keyPoints: [
        "Error interval for rounding by unit {{u}}: {{x - u/2 <= x_true < x + u/2}}.",
        "To **maximise** {{a - b}} or {{a / b}}, pair **UB of the first** with **LB of the second**.",
        "To **minimise** {{a - b}} or {{a / b}}, pair **LB of the first** with **UB of the second**.",
        "Always write down every individual LB and UB before substituting — Edexcel awards M1 for seeing correct bounds.",
      ],
      whyItWorks:
        "Subtracting {{b}} removes part of {{a}}, so removing the smallest legal {{b}} leaves the largest remainder. Dividing {{a}} by {{b}} asks how many {{b}}-sized chunks fit inside {{a}} — smaller chunks mean more of them fit!",
      strategies: ["List all four individual bounds first", "Cross-pair UB and LB for subtraction and division"],
      thinkDeeper:
        "Suppose {{x = -4.2}} correct to 1 d.p. What are {{LB(x)}} and {{UB(x)}}, and why does multiplying two negative bounds flip which product is largest?",
    },
    {
      id: "standard-form-recurring",
      heading: "Standard form & recurring decimals to fractions",
      discovery: {
        problem:
          "Let {{x = 0.2454545...}} (where `45` repeats forever, but `2` does not). Why doesn't {{100x - x}} cancel the decimal tail cleanly — and which two multiples of {{x}} *do* have identical decimal tails?",
        idea:
          "In {{x = 0.24545...}}, the non-recurring `2` sits right after the decimal point. Multiply by {{10}} first to shift `2` past the decimal point ({{10x = 2.4545...}}), and also by {{1000}} ({{1000x = 245.4545...}}). Now both tails are `.4545...`, so {{1000x - 10x = 990x = 243}}!",
      },
      body:
        "**1. Standard Form {{A * 10^n}}**\nA number is in standard form **only** when {{1 <= A < 10}} and {{n}} is an integer.\n- **Multiplying / Dividing:** Combine the front numbers and apply index laws to {{10^n}}, then **re-normalise** if {{A}} lands outside {{[1, 10)}}:\n\n    {{(6 * 10^7) * (4 * 10^(-3)) = 24 * 10^4 = 2.4 * 10^5}}\n\n- **Adding / Subtracting:** You **cannot** add powers of 10! Rewrite both numbers using the **same power of 10** (usually the larger power) or convert to ordinary numbers:\n\n    {{4.2 * 10^5 + 8.5 * 10^4 = 4.2 * 10^5 + 0.85 * 10^5 = 5.05 * 10^5}}\n\n**2. Algebraic Proof for Recurring Decimals**\nWhen an Edexcel 4MA1 question says **\"Prove algebraically that {{0.3181818...}} can be written as {{7/22}}\"**, typing it into your calculator scores **0 marks**. Follow the three-step tail-cancellation recipe:\n1. Define {{x}} written out with several repeating cycles (e.g. {{x = 0.3181818...}}).\n2. Form two powers-of-10 multiples of {{x}} so **identical recurring digits** line up immediately after the decimal point ({{10x = 3.181818...}} and {{1000x = 318.181818...}}).\n3. Subtract the equations ({{990x = 315}}), write the fraction ({{x = 315/990}}), and cancel to simplest form ({{7/22}}).",
      diagram:
        '<svg viewBox="0 0 480 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Aligning decimal tails for x = 0.3181818...: 1000x = 318.1818... minus 10x = 3.1818... cancels the recurring .1818... tail to give 990x = 315"><rect x="0" y="0" width="480" height="150" rx="10" fill="#f8fafc"/><rect x="252" y="18" width="165" height="68" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4 3"/><text x="334" y="14" font-size="10" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#15803d">Identical recurring tail cancels!</text><text x="150" y="42" font-size="15" font-weight="bold" font-family="monospace" text-anchor="end" fill="#0f172a">1000x =</text><text x="248" y="42" font-size="15" font-weight="bold" font-family="monospace" text-anchor="end" fill="#0f172a">318.</text><text x="256" y="42" font-size="15" font-weight="bold" font-family="monospace" fill="#15803d">181818...</text><text x="150" y="72" font-size="15" font-weight="bold" font-family="monospace" text-anchor="end" fill="#0f172a">-   10x =</text><text x="248" y="72" font-size="15" font-weight="bold" font-family="monospace" text-anchor="end" fill="#0f172a">3.</text><text x="256" y="72" font-size="15" font-weight="bold" font-family="monospace" fill="#15803d">181818...</text><line x1="70" y1="88" x2="425" y2="88" stroke="#334155" stroke-width="2"/><text x="150" y="114" font-size="15" font-weight="bold" font-family="monospace" text-anchor="end" fill="#1d4ed8">990x =</text><text x="248" y="114" font-size="15" font-weight="bold" font-family="monospace" text-anchor="end" fill="#1d4ed8">315</text><text x="275" y="114" font-size="14" font-weight="bold" font-family="sans-serif" fill="#0f172a">-&gt;  x = 315 / 990 = 7 / 22</text><text x="240" y="139" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#475569">Shift non-recurring digits left of the decimal point first, then shift one full cycle more.</text></svg>',
      diagramCaption: "Line up the decimal points so the infinite `.181818...` tails match digit-for-digit and subtract to zero.",
      workedExamples: [
        {
          title: "Standard form subtraction without a slip",
          problem: "Work out {{(7.2 * 10^(-3)) - (8.5 * 10^(-4))}}. Give your answer in standard form.",
          steps: [
            "Rewrite both with {{10^(-3)}}: {{8.5 * 10^(-4) = 0.85 * 10^(-3)}}.",
            "Subtract the mantissas: {{(7.2 - 0.85) * 10^(-3) = 6.35 * 10^(-3)}}.",
            "Check {{1 <= 6.35 < 10}} — already in valid standard form!",
          ],
          answer: "{{6.35 * 10^(-3)}}",
        },
        {
          title: "Mixed recurring decimal to simplest fraction",
          problem: "Use algebra to express {{0.1363636...}} as a fraction in its simplest form.",
          steps: [
            "Let {{x = 0.1363636...}}",
            "Multiply by 10 to clear the non-recurring digit: {{10x = 1.363636...}}",
            "Multiply by 1000 (two recurring digits): {{1000x = 136.363636...}}",
            "Subtract: {{1000x - 10x = 135}}, so {{990x = 135}}.",
            "Divide by {{45}}: {{x = 135 / 990 = 3 / 22}}.",
          ],
          answer: "{{3/22}}",
          yourTurn: {
            question: "Express {{0.2454545...}} (where `45` recurs) as a fraction in its simplest form.",
            answer: { type: "fraction", n: 27, d: 110, simplest: true },
            solution:
              "Let {{x = 0.24545...}}, so {{10x = 2.4545...}} and {{1000x = 245.4545...}}. Subtracting gives {{990x = 243}}, so {{x = 243/990 = 27/110}}.",
          },
        },
      ],
      keyPoints: [
        "Standard form demands {{1 <= A < 10}}: {{24 * 10^4}} becomes {{2.4 * 10^5}}, and {{0.6 * 10^(-3)}} becomes {{6 * 10^(-4)}}.",
        "If {{k}} digits recur, your multiplier ratio is {{10^k}} (×10 for 1 digit, ×100 for 2 digits, ×1000 for 3 digits).",
        "In *\"Prove algebraically\"* questions, write out the expanded decimals (e.g. `1000x = 245.4545...`) explicitly to secure the M1 mark.",
      ],
      whyItWorks:
        "Multiplying by {{10^k}} shifts every digit {{k}} places left. When the repeating block has length {{k}}, shifting by {{k}} places maps every infinite decimal place onto an identical digit, so subtraction wipes out infinitely many digits in one stroke.",
      strategies: ["Align recurring tails before subtracting", "Check 1 <= A < 10 at the very end"],
      thinkDeeper:
        "Apply the algebraic method to {{x = 0.999999...}} using {{10x - x}}. Does this mean {{0.999...}} is *approximately* 1, or *literally equal* to 1?",
    },
    {
      id: "fractional-negative-indices",
      heading: "Negative & fractional indices and index equations",
      discovery: {
        problem:
          "If index law {{a^m * a^n = a^(m + n)}} still holds for fractions and negatives, what must {{9^(1/2) * 9^(1/2)}} equal — and what must {{5^3 * 5^(-3)}} equal?",
        idea:
          "{{9^(1/2) * 9^(1/2) = 9^1 = 9}}, so {{9^(1/2)}} is the positive number whose square is 9 — namely {{sqrt(9) = 3}}! And {{5^3 * 5^(-3) = 5^0 = 1}}, so {{5^(-3)}} must be the reciprocal {{1 / 5^3}}.",
      },
      body:
        "Every fractional and negative power breaks down into three clean, separate actions:\n- **Negative sign (`−`) → Reciprocal (flip the base):** {{a^(-n) = 1 / a^n}}, and for a fraction, {{(p / q)^(-n) = (q / p)^n}}.\n- **Denominator (`1/n`) → {{n}}-th Root:** {{a^(1/n) = sqrt(a)}} for {{n = 2}}, {{cbrt(a)}} for {{n = 3}}.\n- **Numerator (`m`) → Power:** {{a^(m/n) = (a^(1/n))^m}}. Always **take the root BEFORE raising to the power** so the numbers stay small!\n\n    {{(27/8)^(-2/3) = (8/27)^(2/3) = (cbrt(8) / cbrt(27))^2 = (2/3)^2 = 4/9}}\n\n**Algebraic Brackets with Fractional Powers:**\nApply the outside exponent to **every factor** inside the bracket — **including the numerical coefficient**:\n\n    {{(16x^8 y^(-4))^(3/4) = 16^(3/4) * x^(8 * 3/4) * y^(-4 * 3/4) = 8x^6 y^(-3)}}\n\n**Solving Index Equations (Common Base Method):**\nRewrite every number in the equation as a power of the **same prime base** ({{2}}, {{3}}, or {{5}}), simplify both sides to {{b^(LHS) = b^(RHS)}}, then equate the exponents:\n- Powers of 2: {{4 = 2^2, 8 = 2^3, 16 = 2^4, 32 = 2^5, 64 = 2^6, 1/8 = 2^(-3), sqrt(2) = 2^(1/2)}}\n- Powers of 3: {{9 = 3^2, 27 = 3^3, 81 = 3^4, 243 = 3^5}}",
      diagram:
        '<svg viewBox="0 0 480 135" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-step evaluation pipeline for (27/8)^(-2/3): Step 1 Flip for negative sign to (8/27)^(2/3); Step 2 Cube root for denominator 3 to (2/3)^2; Step 3 Square for numerator 2 to 4/9"><rect x="0" y="0" width="480" height="135" rx="10" fill="#f8fafc"/><rect x="14" y="34" width="96" height="58" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.8"/><text x="62" y="68" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">(27/8)^(-2/3)</text><text x="128" y="52" font-size="10" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#dc2626">1. Flip (-)</text><text x="128" y="70" font-size="16" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#334155">-&gt;</text><rect x="146" y="34" width="94" height="58" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/><text x="193" y="68" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#92400e">(8/27)^(2/3)</text><text x="260" y="52" font-size="10" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#0284c7">2. cbrt (/3)</text><text x="260" y="70" font-size="16" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#334155">-&gt;</text><rect x="280" y="34" width="80" height="58" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/><text x="320" y="68" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#075985">(2/3)^2</text><text x="380" y="52" font-size="10" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#16a34a">3. Power (^2)</text><text x="380" y="70" font-size="16" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#334155">-&gt;</text><rect x="402" y="34" width="64" height="58" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/><text x="434" y="68" font-size="16" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#14532d">4/9</text><text x="240" y="116" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#475569">Flip (negative) -&gt; Root (denominator) -&gt; Power (numerator)</text></svg>',
      diagramCaption: "Unpack negative fractional indices in order: Flip first, Root second, Power last.",
      workedExamples: [
        {
          title: "Evaluating a negative fractional power of a fraction",
          problem: "Evaluate {{(16 / 81)^(-3/4)}} as an improper fraction.",
          steps: [
            "Negative sign flips the fraction: {{(81 / 16)^(3/4)}}.",
            "Denominator 4 takes the 4th root: {{81^(1/4) = 3}} and {{16^(1/4) = 2}}, giving {{(3 / 2)^3}}.",
            "Numerator 3 cubes top and bottom: {{(3 / 2)^3 = 27 / 8}}.",
          ],
          answer: "{{27/8}}",
        },
        {
          title: "Solving an index equation by changing base",
          problem: "Solve {{8^(2x - 1) = 4^(x + 3)}}.",
          steps: [
            "Rewrite both bases as powers of 2: {{8 = 2^3}} and {{4 = 2^2}}.",
            "Substitute using brackets around the exponents: {{(2^3)^(2x - 1) = (2^2)^(x + 3)}}.",
            "Multiply powers: {{2^(6x - 3) = 2^(2x + 6)}}.",
            "Equate exponents: {{6x - 3 = 2x + 6 -> 4x = 9 -> x = 2.25}}.",
          ],
          answer: "{{x = 9/4}} (or {{2.25}})",
          yourTurn: {
            question: "Solve {{9^(x + 2) = 27^x}}.",
            answer: { type: "number", value: 4, display: "x = 4" },
            solution:
              "Rewrite in base 3: {{(3^2)^(x + 2) = (3^3)^x}}, so {{3^(2x + 4) = 3^(3x)}}. Equating powers gives {{2x + 4 = 3x}}, so {{x = 4}}.",
          },
        },
      ],
      keyPoints: [
        "A negative power **never** makes a positive base negative: {{3^(-2) = 1/9}}, **not** {{-9}} or {{-6}}.",
        "On {{(kx^a)^n}}, raise the coefficient {{k}} to the power {{n}} ({{(25x^6)^(1/2) = 5x^3}}, **not** {{25x^3}} or {{12.5x^3}}).",
        "When rewriting {{(2^3)^(2x - 1)}}, multiply {{3}} by **both** terms in {{(2x - 1)}} to get {{6x - 3}}.",
      ],
      whyItWorks:
        "Defining {{a^(-n) = 1/a^n}} and {{a^(m/n) = (a^(1/n))^m}} is the unique way to extend integer exponent rules ({{a^p * a^q = a^(p+q)}} and {{(a^p)^q = a^(pq)}}) to all rational numbers without contradiction.",
      strategies: ["Flip, Root, Power", "Convert every term to a common prime base"],
      thinkDeeper:
        "If {{2^(x) * 4^(y) = 1/16}} and {{9^(x) / 3^(y) = 27}}, how can changing bases turn these two scary exponential equations into a simple pair of linear simultaneous equations?",
    },
    {
      id: "surds-simplifying-expanding",
      heading: "Simplifying surds & expanding brackets",
      discovery: {
        problem:
          "Test with {{a = 9}} and {{b = 16}}: does {{sqrt(a + b)}} equal {{sqrt(a) + sqrt(b)}}? Now test {{sqrt(a * b)}} versus {{sqrt(a) * sqrt(b)}}. What does that tell you about simplifying {{sqrt(50) + sqrt(18)}}?",
        idea:
          "{{sqrt(9 + 16) = sqrt(25) = 5}}, whereas {{sqrt(9) + sqrt(16) = 3 + 4 = 7}} — roots **never** split across `+` or `−`! But {{sqrt(9 * 16) = 12 = 3 * 4 = sqrt(9) * sqrt(16)}}: roots **do** split across multiplication and division. So simplify each surd into a multiple of {{sqrt(2)}} first: {{5*sqrt(2) + 3*sqrt(2) = 8*sqrt(2)}}!",
      },
      body:
        "A **surd** is an irrational root like {{sqrt(2)}}, {{sqrt(3)}}, or {{sqrt(5)}} left in exact symbol form.\n\n**Core Surd Laws (for {{a, b > 0}}):**\n- {{sqrt(a * b) = sqrt(a) * sqrt(b)}} and {{sqrt(a / b) = sqrt(a) / sqrt(b)}}\n- {{sqrt(a) * sqrt(a) = a}}, and {{(k*sqrt(a))^2 = k^2 * a}} (square **both** {{k}} and {{sqrt(a)}}!)\n\n**Simplifying {{sqrt(n)}}:**\nHunt for the **largest square number** ({{4, 9, 16, 25, 36, 49, 64, 81, 100...}}) that divides {{n}}:\n\n    {{sqrt(72) = sqrt(36 * 2) = 6*sqrt(2)}}\n\n**Collecting Like Surds:**\nSimplify every surd first; then add/subtract coefficients of matching surd families just like algebra ({{5x + 3x = 8x}}):\n\n    {{sqrt(75) - sqrt(12) = 5*sqrt(3) - 2*sqrt(3) = 3*sqrt(3)}}\n\n**Expanding Double Brackets with Surds:**\nMultiply all four pairs (FOIL / grid), simplify any {{sqrt(a) * sqrt(a) = a}} terms into integers, and collect integer parts and surd parts separately:\n\n    {{(3 + 2*sqrt(5))(4 - sqrt(5)) = 12 - 3*sqrt(5) + 8*sqrt(5) - 2(5) = 2 + 5*sqrt(5)}}",
      diagram:
        '<svg viewBox="0 0 480 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid multiplication table for (3 + 2 sqrt 5)(4 - sqrt 5) showing cells 12, -3 sqrt 5, +8 sqrt 5, and -10 combining to 2 + 5 sqrt 5"><rect x="0" y="0" width="480" height="165" rx="10" fill="#f8fafc"/><text x="155" y="26" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#0f172a">4</text><text x="275" y="26" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#dc2626">- sqrt(5)</text><text x="82" y="68" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="end" fill="#0f172a">3</text><text x="82" y="122" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="end" fill="#1d4ed8">+ 2 sqrt(5)</text><rect x="95" y="38" width="120" height="50" fill="#e0f2fe" stroke="#334155" stroke-width="1.5"/><text x="155" y="68" font-size="15" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#0f172a">12</text><rect x="215" y="38" width="120" height="50" fill="#fef3c7" stroke="#334155" stroke-width="1.5"/><text x="275" y="68" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#92400e">- 3 sqrt(5)</text><rect x="95" y="88" width="120" height="52" fill="#fef3c7" stroke="#334155" stroke-width="1.5"/><text x="155" y="119" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#92400e">+ 8 sqrt(5)</text><rect x="215" y="88" width="120" height="52" fill="#dcfce7" stroke="#334155" stroke-width="1.5"/><text x="275" y="112" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#166534">- 2 * 5</text><text x="275" y="130" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#14532d">= - 10</text><text x="408" y="68" font-size="12" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#0369a1">Integers: 12 - 10 = 2</text><text x="408" y="96" font-size="12" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#b45309">Surds: (-3+8)sqrt(5)</text><text x="408" y="126" font-size="15" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#15803d">= 2 + 5 sqrt(5)</text></svg>',
      diagramCaption: "Diagonal cells pair up: top-left & bottom-right become pure integers; top-right & bottom-left are like surds.",
      workedExamples: [
        {
          title: "Squaring a bracket containing a surd",
          problem: "Expand and simplify {{(5 - 2*sqrt(3))^2}} in the form {{a + b*sqrt(3)}}.",
          steps: [
            "Write out the bracket twice so you never miss the middle terms: {{(5 - 2*sqrt(3))(5 - 2*sqrt(3))}}.",
            "Expand all four products: {{25 - 10*sqrt(3) - 10*sqrt(3) + (2*sqrt(3))^2}}.",
            "Carefully evaluate {{(2*sqrt(3))^2 = 4 * 3 = 12}}.",
            "Collect integers and surds: {{(25 + 12) - 20*sqrt(3) = 37 - 20*sqrt(3)}}.",
          ],
          answer: "{{37 - 20*sqrt(3)}}",
          yourTurn: {
            question: "Expand and simplify {{(4 + 3*sqrt(2))(2 - sqrt(2))}}.",
            answer: { type: "expression", expr: "2 + 2*sqrt(2)", form: "simplified" },
            solution:
              "{{8 - 4*sqrt(2) + 6*sqrt(2) - 3(2) = 8 + 2*sqrt(2) - 6 = 2 + 2*sqrt(2)}}.",
          },
        },
      ],
      keyPoints: [
        "Extract the **largest** square factor (or keep factoring until the number inside {{sqrt(...)}} is square-free).",
        "Never add inside roots: {{sqrt(50) + sqrt(18) = 5*sqrt(2) + 3*sqrt(2) = 8*sqrt(2)}}, **never** {{sqrt(68)}}.",
        "When squaring {{(k*sqrt(a))^2}}, square **both** {{k}} and {{sqrt(a)}} to get {{k^2 a}}.",
      ],
      whyItWorks:
        "Because {{(sqrt(a) * sqrt(b))^2 = (sqrt(a))^2 * (sqrt(b))^2 = ab}}, {{sqrt(a) * sqrt(b)}} is the positive number whose square is {{ab}} — which by definition is {{sqrt(ab)}}.",
      strategies: ["Rewrite squared brackets side-by-side", "Reduce all surds to a common square-free root"],
      thinkDeeper:
        "Can you find integers {{a}} and {{b}} such that {{(a + b*sqrt(2))^2 = 17 + 12*sqrt(2)}} by matching the rational part and the {{sqrt(2)}} part separately?",
    },
    {
      id: "rationalising-denominators",
      heading: "Rationalising denominators with conjugates",
      discovery: {
        problem:
          "If you try to clear the surd from the bottom of {{10 / (3 + sqrt(5))}} by multiplying top and bottom by {{sqrt(5)}}, the bottom becomes {{3*sqrt(5) + 5}} — the surd just moved! What bracket can you multiply {{(3 + sqrt(5))}} by so that **all** surds vanish?",
        idea:
          "Use the **difference of two squares** {{(A + B)(A - B) = A^2 - B^2}}! Multiply top and bottom by the **conjugate** {{(3 - sqrt(5))}}: the middle surds {{-3*sqrt(5) + 3*sqrt(5)}} cancel to zero, leaving {{3^2 - (sqrt(5))^2 = 9 - 5 = 4}}!",
      },
      body:
        "**Rationalising the denominator** rewrites a fraction as an equivalent fraction whose denominator is a **rational integer** (no roots on the bottom).\n\n**Case 1 — Single-term denominator {{k / sqrt(a)}} or {{k / (b*sqrt(a))}}:**\nMultiply top and bottom by {{sqrt(a)}}:\n\n    {{12 / sqrt(6) = (12 * sqrt(6)) / (sqrt(6) * sqrt(6)) = (12*sqrt(6)) / 6 = 2*sqrt(6)}}\n\n**Case 2 — Two-term denominator {{p / (a + b*sqrt(c))}}:**\nThe **conjugate** of {{a + b*sqrt(c)}} is {{a - b*sqrt(c)}} (flip ONLY the sign between the two terms!). Multiply **both** numerator and denominator by the conjugate:\n\n    {{(a + b*sqrt(c))(a - b*sqrt(c)) = a^2 - b^2 c}}\n\n**Final Cancellation Check:**\nKeep the numerator factorised if it is a single integer times the conjugate, e.g. {{14(3 + sqrt(2)) / 7 = 2(3 + sqrt(2)) = 6 + 2*sqrt(2)}}. If the numerator was also a two-term surd expression, expand it fully first, then divide **both** terms in the numerator by any common factor shared with the integer denominator.",
      diagram:
        '<svg viewBox="0 0 480 145" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Conjugate difference of two squares: (a + b sqrt c)(a - b sqrt c) expands to a^2 - ab sqrt c + ab sqrt c - b^2 c, cancelling middle surd terms to leave rational integer a^2 - b^2 c"><rect x="0" y="0" width="480" height="145" rx="10" fill="#f8fafc"/><text x="240" y="34" font-size="16" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#0f172a">(3 + 2 sqrt(2))(3 - 2 sqrt(2))</text><text x="95" y="76" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#1d4ed8">3^2 = 9</text><text x="200" y="76" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#dc2626">- 6 sqrt(2)</text><line x1="164" y1="72" x2="236" y2="72" stroke="#dc2626" stroke-width="2"/><text x="285" y="76" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#dc2626">+ 6 sqrt(2)</text><line x1="248" y1="72" x2="322" y2="72" stroke="#dc2626" stroke-width="2"/><text x="392" y="76" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#1d4ed8">- (2 sqrt(2))^2 = -8</text><rect x="140" y="96" width="200" height="34" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/><text x="240" y="118" font-size="15" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#14532d">9 - 8 = 1 (Pure Integer!)</text></svg>',
      diagramCaption: "Multiplying by the conjugate triggers Difference of Two Squares, guaranteeing the middle surd terms cancel.",
      workedExamples: [
        {
          title: "Rationalising with two surd brackets",
          problem: "Show that {{(5 + sqrt(3)) / (2 - sqrt(3))}} can be written in the form {{a + b*sqrt(3)}}, where {{a}} and {{b}} are integers.",
          steps: [
            "The conjugate of {{2 - sqrt(3)}} is {{2 + sqrt(3)}}. Multiply numerator and denominator by {{(2 + sqrt(3))}}.",
            "Denominator: {{(2 - sqrt(3))(2 + sqrt(3)) = 2^2 - (sqrt(3))^2 = 4 - 3 = 1}}.",
            "Numerator: {{(5 + sqrt(3))(2 + sqrt(3)) = 10 + 5*sqrt(3) + 2*sqrt(3) + 3 = 13 + 7*sqrt(3)}}.",
            "Divide by 1: {{13 + 7*sqrt(3)}} (so {{a = 13, b = 7}}).",
          ],
          answer: "{{13 + 7*sqrt(3)}}",
          yourTurn: {
            question: "Rationalise the denominator and simplify {{14 / (3 - sqrt(2))}}.",
            answer: { type: "expression", expr: "6 + 2*sqrt(2)", form: "simplified" },
            solution:
              "Multiply top and bottom by {{3 + sqrt(2)}}: denominator is {{9 - 2 = 7}}, so {{14(3 + sqrt(2)) / 7 = 2(3 + sqrt(2)) = 6 + 2*sqrt(2)}}.",
          },
        },
      ],
      keyPoints: [
        "Flip **only** the middle sign to form the conjugate: the conjugate of {{-2 + sqrt(5)}} is {{-2 - sqrt(5)}} (or write {{sqrt(5) - 2}} paired with {{sqrt(5) + 2}}).",
        "In *\"Show that\"* surd questions on Calculator papers, Edexcel awards **zero marks** for a bare final answer — show the conjugate multiplication and expanded numerator/denominator clearly!",
        "When simplifying {{(6 + 4*sqrt(3)) / 2}}, divide **both** terms on top by 2 to get {{3 + 2*sqrt(3)}}.",
      ],
      whyItWorks:
        "Every term in {{(a + b*sqrt(c))(a - b*sqrt(c))}} either squares {{a}} (rational), squares {{b*sqrt(c)}} ({{b^2 c}}, rational), or forms opposite cross-products {{+ab*sqrt(c)}} and {{-ab*sqrt(c)}} that sum to zero.",
      strategies: ["Multiply by (conjugate)/(conjugate) = 1", "Compute the rational denominator separately first"],
      thinkDeeper:
        "Evaluate {{1 / (sqrt(1) + sqrt(2)) + 1 / (sqrt(2) + sqrt(3)) + 1 / (sqrt(3) + sqrt(4)) + ... + 1 / (sqrt(99) + sqrt(100))}} without a calculator by rationalising a typical term {{1 / (sqrt(k) + sqrt(k+1))}}!",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Error interval when {{x}} is rounded to nearest unit {{u}}?",
        back: "{{x - u/2 <= x_true < x + u/2}} (e.g. {{4.7}} to 1 d.p. gives {{4.65 <= x < 4.75}}).",
      },
      {
        front: "Error interval when {{x = 4.7}} is **truncated** to 1 d.p.?",
        back: "{{4.7 <= x < 4.8}} (starts at the truncated value and extends one unit {{0.1}} forward).",
      },
      {
        front: "Formula for {{UB(a - b)}} and {{LB(a - b)}}?",
        back: "{{UB(a - b) = UB(a) - LB(b)}} and {{LB(a - b) = LB(a) - UB(b)}}.",
      },
      {
        front: "Formula for {{UB(a / b)}} and {{LB(a / b)}} (for {{a, b > 0}})?",
        back: "{{UB(a / b) = UB(a) / LB(b)}} and {{LB(a / b) = LB(a) / UB(b)}}.",
      },
      {
        front: "How do you decide the 'suitable degree of accuracy' from bounds?",
        back: "Compute both {{UB}} and {{LB}}, then round both to the **highest** accuracy (most s.f./d.p.) where they round to the **exact same value**.",
      },
      {
        front: "Condition for valid standard form {{A * 10^n}}?",
        back: "{{1 <= A < 10}} and {{n}} is an integer.",
      },
      {
        front: "Which multiples subtract cleanly for mixed recurring {{x = 0.abcbc...}}?",
        back: "{{1000x - 10x = 990x}}, aligning the `.bcbc...` tails immediately after the decimal point.",
      },
      {
        front: "How do you evaluate {{(p / q)^(-m / n)}}?",
        back: "1. Flip fraction: {{(q / p)^(m / n)}}. 2. Take {{n}}-th root. 3. Raise to power {{m}}.",
      },
      {
        front: "How do you solve {{8^(2x) = 4^(x + 3)}}?",
        back: "Rewrite in common prime base 2: {{(2^3)^(2x) = (2^2)^(x + 3) -> 6x = 2x + 6 -> x = 1.5}}.",
      },
      {
        front: "What does {{(k*sqrt(a))^2}} simplify to?",
        back: "{{k^2 * a}} (remember to square the coefficient {{k}} as well as {{sqrt(a)}}!).",
      },
      {
        front: "What do you multiply top and bottom by to rationalise {{p / (a + b*sqrt(c))}}?",
        back: "The conjugate {{(a - b*sqrt(c))}}, turning the denominator into the integer {{a^2 - b^2 c}}.",
      },
      {
        front: "Why does {{sqrt(a + b)}} NOT equal {{sqrt(a) + sqrt(b)}}?",
        back: "Squaring {{(sqrt(a) + sqrt(b))^2}} gives {{a + b + 2*sqrt(ab)}}, which has an extra middle term {{2*sqrt(ab)}}.",
      },
    ],
    mustKnow: [
      "Write error intervals {{LB <= x < UB}} for rounding (nearest 10, 1 d.p., 2 s.f.) and truncation.",
      "List all individual upper and lower bounds explicitly before substituting into {{a - b}} or {{a / b}} (secures Edexcel M1).",
      "Find an answer to a *suitable degree of accuracy* by showing {{UB}} and {{LB}} round to the same figure and stating why.",
      "Add, subtract, multiply, and divide in standard form {{A * 10^n}}, always re-normalising so {{1 <= A < 10}}.",
      "Prove algebraically that pure and mixed recurring decimals equal simplified fractions by subtracting powers-of-10 multiples.",
      "Evaluate negative and fractional powers {{(p/q)^(-m/n)}} without a calculator using Flip → Root → Power.",
      "Solve exponential equations like {{9^(x-1) = 27^(2x)}} by rewriting every term in a common prime base.",
      "Simplify surds, expand double surd brackets, and rationalise two-term denominators using conjugates — showing full working on *'Show that'* questions.",
    ],
    misconceptions: [
      {
        wrong: "{{UB(a / b) = UB(a) / UB(b)}} and {{UB(a - b) = UB(a) - UB(b)}} ❌",
        right: "{{UB(a / b) = UB(a) / LB(b)}} and {{UB(a - b) = UB(a) - LB(b)}} ✅ (divide/subtract the **smallest** legal {{b}} to get the **largest** result).",
      },
      {
        wrong: "Using {{UB = 4.74}} or {{4.749}} for {{x = 4.7}} (1 d.p.) ❌",
        right: "Use the exact half-way boundary {{UB = 4.75}} ✅ (because {{4.7499...}} can get arbitrarily close to {{4.75}}).",
      },
      {
        wrong: "{{8^(-2/3) = -4}} (treating a negative power as a negative sign) ❌",
        right: "{{8^(-2/3) = 1 / 8^(2/3) = 1 / 2^2 = 1/4}} ✅ (negative exponent means **reciprocal**, never negative).",
      },
      {
        wrong: "{{(16x^8)^(1/2) = 16x^4}} or {{8x^4}} ❌",
        right: "{{(16x^8)^(1/2) = 16^(1/2) * x^(8 * 1/2) = 4x^4}} ✅ (apply the fractional power to the coefficient {{16}} too!).",
      },
      {
        wrong: "{{sqrt(50) + sqrt(18) = sqrt(68)}} ❌",
        right: "{{sqrt(50) + sqrt(18) = 5*sqrt(2) + 3*sqrt(2) = 8*sqrt(2)}} ✅ (simplify each surd to a common root first; never add under square roots).",
      },
      {
        wrong: "Rationalising {{5 / (3 + sqrt(2))}} by multiplying by {{sqrt(2)}} ❌",
        right: "Multiply top and bottom by the **conjugate** {{(3 - sqrt(2))}} ✅ so {{(3 + sqrt(2))(3 - sqrt(2)) = 9 - 2 = 7}} clears all surds.",
      },
      {
        wrong: "Cancelling {{(6 + 2*sqrt(5)) / 2 = 3 + 2*sqrt(5)}} ❌",
        right: "Divide **every** numerator term by 2: {{(6 + 2*sqrt(5)) / 2 = 3 + sqrt(5)}} ✅.",
      },
    ],
    examMistakes: [
      "Writing `4.65 <= x <= 4.75` instead of strict `< 4.75` on an error interval question (costs the final A1 mark).",
      "Using calculator fraction conversion without writing `10x = ...`, `1000x = ...`, and the subtraction step when the question says *'Prove algebraically'* (0/2 or 0/3 marks!).",
      "Leaving a standard form answer as `24 × 10^5` or `0.4 × 10^(-3)` instead of adjusting `A` into `1 <= A < 10`.",
      "Forgetting to distribute the exponent across the whole bracket in `8^(2x - 1) = (2^3)^(2x - 1) = 2^(6x - 3)` (writing `2^(6x - 1)`).",
      "Writing `(2*sqrt(5))^2 = 2 * 5 = 10` instead of `4 * 5 = 20` when expanding surd brackets or conjugate denominators.",
      "Giving a calculator answer on a *'Show clear algebraic working'* surds/indices question — Edexcel 4MA1 has two calculator papers, so method lines are strictly required for ANY marks.",
    ],
    mnemonics: [
      {
        topic: "Negative fractional indices {{a^(-m/n)}}",
        device: "F-R-P: Flip, Root, Power",
        explanation: "**F**lip the base for the minus sign, take the **R**oot for the bottom of the fraction (shrinks the number first!), then raise to the **P**ower on top.",
      },
      {
        topic: "Bounds in {{a - b}} and {{a / b}}",
        device: "Opposite Bounds for Minus & Divide",
        explanation: "Addition and multiplication pair like-with-like (`UB` with `UB`); subtraction and division pair **opposites** (`UB` first with `LB` second for Max; `LB` first with `UB` second for Min).",
      },
    ],
    realWorld: [
      {
        title: "Aerospace & Precision Machining Tolerances",
        detail: "Jet turbine blades specify tolerances like `65.00 ± 0.02 mm`. Engineers use upper and lower bound arithmetic to guarantee a spinning blade never touches its casing even when blades are at UB and casing is at LB.",
        emoji: "✈️",
      },
      {
        title: "Astrophysics & Quantum Scales (Standard Form)",
        detail: "From Planck's constant (`6.63 × 10^(-34) J s`) to the mass of the Sun (`1.99 × 10^(30) kg`), standard form lets physicists multiply across 64 orders of magnitude without losing a single zero.",
        emoji: "🌌",
      },
      {
        title: "A-Series Paper (`A4`, `A3`) & `sqrt(2)`",
        detail: "An A4 sheet has aspect ratio `1 : sqrt(2)`. Cut it in half parallel to its shorter side (`sqrt(2) / 2 = 1 / sqrt(2)`): rationalising `1 / (1/sqrt(2))` proves every half-sheet keeps the exact `1 : sqrt(2)` shape for clean photocopier scaling!",
        emoji: "📄",
      },
    ],
    videos: [
      {
        title: "Upper and Lower Bounds & Suitable Degree of Accuracy (IGCSE Higher)",
        channel: "GCSE Maths Tutor",
        url: "https://www.youtube.com/results?search_query=gcse+maths+tutor+upper+and+lower+bounds+suitable+degree+of+accuracy",
      },
      {
        title: "Fractional and Negative Indices & Index Equations (Edexcel 4MA1)",
        channel: "Maths Genie",
        url: "https://www.youtube.com/results?search_query=maths+genie+fractional+and+negative+indices+harder",
      },
      {
        title: "Surds & Rationalising Denominators with Conjugates",
        channel: "Corbettmaths",
        url: "https://www.youtube.com/results?search_query=corbettmaths+rationalising+denominators+surds",
      },
      {
        title: "Recurring Decimals to Fractions Algebraic Proof",
        channel: "TLMaths",
        url: "https://www.youtube.com/results?search_query=recurring+decimals+to+fractions+algebraic+proof+igcse",
      },
    ],
    formulas: [
      {
        name: "Rounding error interval",
        formula: "{{x - u/2 <= x_true < x + u/2}}",
        note: "{{u}} is the rounding unit (e.g. {{u = 0.1}} for 1 d.p., {{u = 10}} for nearest 10)",
      },
      {
        name: "Quotient & difference bounds",
        formula: "{{UB(a / b) = UB(a) / LB(b)}},   {{UB(a - b) = UB(a) - LB(b)}}",
        note: "For positive {{a, b}}; swap UB and LB throughout for the lower bound",
      },
      {
        name: "Negative & fractional index law",
        formula: "{{a^(-m/n) = 1 / (a^(1/n))^m}},   {{(p/q)^(-n) = (q/p)^n}}",
        note: "Flip first, take the {{n}}-th root second, raise to power {{m}} third",
      },
      {
        name: "Surd product & quotient rules",
        formula: "{{sqrt(ab) = sqrt(a) * sqrt(b)}},   {{sqrt(a/b) = sqrt(a) / sqrt(b)}}",
        note: "Valid for {{a >= 0, b > 0}}; never split {{sqrt(a + b)}}!",
      },
      {
        name: "Rationalising with conjugates",
        formula: "{{p / (a + b*sqrt(c)) = (p(a - b*sqrt(c))) / (a^2 - b^2 c)}}",
        note: "Difference of two squares eliminates the surd from the denominator",
      },
    ],
  },
};
