import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "How can {{0.999999...}} be *literally equal* to {{1}} with zero gap in between — and why does cutting an A4 sheet of paper in half keep its exact shape only because of the irrational surd {{sqrt(2)}}?",
  didYouKnow: [
    "In 1991, during the Gulf War, a Patriot missile battery missed an incoming Scud because its internal clock stored {{0.1}} seconds in 24-bit binary — where {{1/10 = 0.0001100110011..._2}} is an **infinite recurring binary fraction**! Truncating that recurring tail caused a tiny bound drift that grew to {{0.34}} seconds over 100 hours — over {{600}} metres at missile speed.",
    "Every ISO paper size (A0, A1, A2, A3, A4, A5) is built on {{sqrt(2)}}. An A0 sheet has area **exactly** {{1}} m² with side ratio {{1 : sqrt(2)}} (so {{841}} mm × {{1189}} mm, rounded to the nearest mm). Fold it in half across the long side and the new ratio is {{1 : (sqrt(2) / 2)}} — rationalise {{2 / sqrt(2)}} and you get {{sqrt(2)}} right back!",
    "The fraction {{1/7 = 0.142857142857...}} is a **cyclic number**: multiply {{142857}} by 2, 3, 4, 5, or 6 and the exact same six digits march round in a circle ({{285714}}, {{428571}}, {{571428}}, {{714285}}, {{857142}}) — until multiplying by 7 gives {{999999}}, confirming {{7 * (142857 / 999999) = 1}}!",
    "Fractional and negative exponents were first written systematically by **John Wallis** in 1655 and **Isaac Newton** in 1676. Before them, {{x^2}} was a geometric square and {{x^3}} was a physical cube, so asking for {{x^(3/2)}} or {{x^(-2)}} sounded as nonsensical as asking for a 'negative-two-dimensional box'.",
    "The **Spiral of Theodorus** (c. 400 BC) constructs exact lengths {{sqrt(2), sqrt(3), sqrt(4), ..., sqrt(17)}} using nothing but right-angled triangles of leg {{1}} stacked edge-to-edge — proving geometrically that surds exist as real physical lengths even though no fraction can ever write them down.",
  ],
  activities: [
    {
      title: "Fold & Measure the √2 Paper Secret",
      emoji: "📐",
      materials: ["One A4 sheet of paper", "A millimetre ruler", "A pencil"],
      steps: [
        "Measure the short side and long side of an A4 sheet to the nearest millimetre ({{210}} mm and {{297}} mm). Write down the error interval for each measurement (±0.5 mm).",
        "Work out the **lower bound** and **upper bound** of the ratio `long ÷ short` using {{LB = 296.5 / 210.5}} and {{UB = 297.5 / 209.5}}.",
        "Compare your bound interval with {{sqrt(2) = 1.41421...}} — check that {{sqrt(2)}} sits comfortably inside!",
        "Now fold one bottom corner up to the opposite side to make a {{45°}} square crease, then unfold: the diagonal of a {{1 * 1}} square has exact length {{sqrt(2)}}. Lay the short edge along that diagonal crease to verify visually that `long side = short side × √2`!",
      ],
      maths:
        "If a sheet has sides {{1}} and {{r}}, cutting it in half gives sides {{r/2}} and {{1}}. Similar rectangles require {{r / 1 = 1 / (r/2)}}, so {{r^2 = 2}} and {{r = sqrt(2)}}. Using bounds shows {{297 / 210 = 1.41428...}} is the closest whole-millimetre match whose area ({{2^(1/4)}} m dimension scaled down 4 times from A0) stays true to {{1/16}} m²!",
    },
    {
      title: "Build the Spiral of Surds",
      emoji: "🐚",
      materials: ["Plain paper", "A ruler marked in cm", "A set square (or corner of an index card for exact 90°)", "Coloured pens"],
      steps: [
        "Near the centre of your page, draw a horizontal segment {{OA_1}} of length {{3}} cm (treat {{3}} cm as **1 unit** so the spiral stays bold and clear). At {{A_1}}, use your corner card to draw {{A_1 A_2}} of length {{1}} unit ({{3}} cm) at {{90°}}, and join {{O A_2}}.",
        "By Pythagoras, {{OA_2 = sqrt(1^2 + 1^2) = sqrt(2)}} units! Now at {{A_2}}, draw {{A_2 A_3}} of length {{1}} unit perpendicular to {{OA_2}}, and join {{OA_3 = sqrt((sqrt(2))^2 + 1^2) = sqrt(3)}} units.",
        "Keep adding perpendicular {{1}}-unit steps around {{O}} up to {{OA_8 = sqrt(8)}} and {{OA_9 = sqrt(9) = 3}} units ({{9}} cm). Measure {{OA_9}} with your ruler — your accuracy check is how close you land to {{9.0}} cm!",
        "Label every simplified surd along its spoke ({{sqrt(4) = 2}}, {{sqrt(8) = 2*sqrt(2)}}).",
      ],
      maths:
        "Each step applies {{(sqrt(n))^2 + 1^2 = n + 1}}, so the hypotenuse jumps cleanly from {{sqrt(n)}} to {{sqrt(n + 1)}}. Notice {{OA_8 = sqrt(8)}} is visibly **twice** as long as {{OA_2 = sqrt(2)}}, giving geometric proof that {{sqrt(8) = 2*sqrt(2)}}!",
    },
  ],
  bonusDiagrams: [
    {
      title: "The Spiral of Theodorus (√1 to √8)",
      svg: '<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spiral of Theodorus showing right-angled triangles radiating from origin O with hypotenuses sqrt 1, sqrt 2, sqrt 3, 2, sqrt 5, sqrt 6, sqrt 7, and 2 sqrt 2"><rect x="0" y="0" width="460" height="250" rx="12" fill="#f8fafc"/><polygon points="220,145 275,145 275,90" fill="#dbeafe" stroke="#1e40af" stroke-width="1.5"/><polygon points="220,145 275,90 236,51" fill="#e0e7ff" stroke="#3730a3" stroke-width="1.5"/><polygon points="220,145 236,51 182,42" fill="#ede9fe" stroke="#5b21b6" stroke-width="1.5"/><polygon points="220,145 182,42 131,62" fill="#fae8ff" stroke="#86198f" stroke-width="1.5"/><polygon points="220,145 131,62 96,104" fill="#fce7f3" stroke="#9d174d" stroke-width="1.5"/><polygon points="220,145 96,104 84,158" fill="#ffe4e6" stroke="#be123c" stroke-width="1.5"/><polygon points="220,145 84,158 98,211" fill="#ffedd5" stroke="#c2410c" stroke-width="1.5"/><circle cx="220" cy="145" r="4" fill="#0f172a"/><text x="228" y="160" font-size="12" font-weight="bold" font-family="sans-serif" fill="#0f172a">O</text><text x="250" y="160" font-size="11" font-weight="bold" font-family="sans-serif" fill="#1e3a8a">1</text><text x="285" y="92" font-size="11" font-weight="bold" font-family="sans-serif" fill="#1e3a8a">sqrt(2)</text><text x="246" y="45" font-size="11" font-weight="bold" font-family="sans-serif" fill="#3730a3">sqrt(3)</text><text x="176" y="34" font-size="11" font-weight="bold" font-family="sans-serif" fill="#5b21b6">sqrt(4) = 2</text><text x="108" y="54" font-size="11" font-weight="bold" font-family="sans-serif" fill="#86198f">sqrt(5)</text><text x="68" y="102" font-size="11" font-weight="bold" font-family="sans-serif" fill="#9d174d">sqrt(6)</text><text x="48" y="162" font-size="11" font-weight="bold" font-family="sans-serif" fill="#be123c">sqrt(7)</text><text x="64" y="228" font-size="11" font-weight="bold" font-family="sans-serif" fill="#c2410c">sqrt(8) = 2 sqrt(2)</text><rect x="305" y="148" width="140" height="84" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/><text x="375" y="168" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#0f172a">Pythagorean Step</text><text x="375" y="188" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">(sqrt(n))^2 + 1^2 = n + 1</text><text x="375" y="208" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#1d4ed8">Next spoke = sqrt(n + 1)</text></svg>',
      caption:
        "Stacking unit perpendiculars builds every square root in turn. Notice spoke {{sqrt(8) = 2*sqrt(2)}} is exactly double spoke {{sqrt(2)}}.",
    },
    {
      title: "Why UB(a ÷ b) Cross-Pairs Bounds",
      svg: '<svg viewBox="0 0 460 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Visual comparison showing a largest bar UB(a) cut into smallest pieces LB(b) produces the maximum number of pieces UB(a/b), whereas smallest bar LB(a) cut into largest pieces UB(b) produces the minimum LB(a/b)"><rect x="0" y="0" width="460" height="175" rx="12" fill="#f8fafc"/><text x="20" y="26" font-size="12" font-weight="bold" font-family="sans-serif" fill="#15803d">MAX quotient UB(a / b) = UB(a) / LB(b): longest ribbon, shortest cuts</text><rect x="20" y="36" width="360" height="28" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/><line x1="80" y1="36" x2="80" y2="64" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3 2"/><line x1="140" y1="36" x2="140" y2="64" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3 2"/><line x1="200" y1="36" x2="200" y2="64" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3 2"/><line x1="260" y1="36" x2="260" y2="64" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3 2"/><line x1="320" y1="36" x2="320" y2="64" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3 2"/><text x="415" y="55" font-size="13" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#15803d">6 pieces!</text><text x="20" y="102" font-size="12" font-weight="bold" font-family="sans-serif" fill="#b91c1c">MIN quotient LB(a / b) = LB(a) / UB(b): shortest ribbon, longest cuts</text><rect x="20" y="112" width="270" height="28" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8"/><line x1="110" y1="112" x2="110" y2="140" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2"/><line x1="200" y1="112" x2="200" y2="140" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2"/><text x="365" y="131" font-size="13" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#b91c1c">Only 3 pieces!</text><text x="230" y="163" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#475569">Dividing measures how many b-pieces fit inside a — smaller pieces mean MORE fit.</text></svg>',
      caption:
        "Think of {{a / b}} as cutting ribbon {{a}} into strips of length {{b}}: a longer ribbon cut into shorter strips always yields the maximum count.",
    },
  ],
  history: {
    title: "Hippasus and the Dangerous √2",
    story:
      "Around 500 BC in southern Italy, the Pythagoreans taught that the entire universe — musical harmony, planetary orbits, and geometry — was governed by ratios of whole numbers (*rational* numbers). According to ancient legend, a Pythagorean thinker named **Hippasus of Metapontum** examined the diagonal of a simple {{1 * 1}} square and proved by contradiction that if {{sqrt(2) = p / q}} in lowest terms, then {{p^2 = 2q^2}} forces **both** {{p}} and {{q}} to be even, contradicting lowest terms! Numbers that refuse to be fractions were named *alogos* ('unspeakable'), later translated via Arabic *jadhr asamm* ('deaf/mute root') into Latin *surdus* — giving us the English word **surd**.",
  },
};
