import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Why can a medical test that is 99% accurate still be wrong half the time on a rare condition — and why would plotting raw frequencies make a wide age bracket look four times more crowded than reality? Vectors, sets, conditional probability, and frequency density turn visual illusions into watertight proof.",
  didYouKnow: [
    "John Venn introduced his famous overlapping circle diagrams at Cambridge in 1880 — today, a 3-set Venn diagram sits stained in glass in the dining hall of Gonville and Caius College!",
    "When GPS satellites locate your phone in Singapore, they combine 3D position vectors from at least four satellites and correct relativistic clock drift to keep |r_true − r_est| under a few metres.",
    "Florence Nightingale pioneered area-proportional statistical charts in the 1850s after realising politicians misread raw tables; unequal-width histograms follow the exact same 'area = count' principle.",
    "In card games and cybersecurity auditing, sampling without replacement follows the hypergeometric distribution — precisely what multi-stage dependent probability trees calculate!",
  ],
  activities: [
    {
      title: "The Counter-Bag Blindfold Challenge",
      emoji: "🎲",
      materials: ["A mug or pouch", "4 red Lego bricks / coins and 6 blue ones", "Scrap paper"],
      steps: [
        "Predict P(one of each colour) when drawing 2 bricks WITHOUT putting the first one back: write down both RB + BR over 10 × 9 = 90.",
        "Run 30 quick two-brick draws (returning both after each pair) and tally RR, One-of-Each, and BB.",
        "Now repeat 30 draws WITH replacement (dropping the first brick back before picking the second) and notice how P(same colour) rises!",
      ],
      maths:
        "Without replacement gives P(different) = 2 × (4/10)(6/9) = 48/90 ≈ 53.3%, whereas with replacement gives 2 × (4/10)(6/10) = 48/100 = 48% — removing the first colour tilts the remaining bag toward the opposite colour!",
    },
    {
      title: "Spot the Misleading News Bar Chart",
      emoji: "📰",
      materials: ["Any demographic table with unequal brackets (e.g. ages 0–14, 15–24, 25–54, 55–64)", "Grid paper or ruler"],
      steps: [
        "Sketch what happens if you plot raw population count as bar height across unequal age widths (25–54 towers over 15–24 simply because it spans 30 years instead of 10!).",
        "Divide each count by its age-bracket width to get Frequency Density (people per year of age) and redraw.",
        "Compare which age band is genuinely most densely populated per single year of age.",
      ],
      maths:
        "Dividing by class width normalises every interval to a common rate (count per unit width), ensuring visual bar area matches true frequency.",
    },
  ],
  bonusDiagrams: [
    {
      title: "3-Set Venn Region Decoder",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 230" role="img" aria-label="Three-circle Venn diagram for sets A, B and C showing all eight disjoint regions from innermost A intersect B intersect C outward"><rect x="10" y="10" width="440" height="210" rx="10" fill="#f8fafc" stroke="#334155" stroke-width="2"/><text x="24" y="32" font-family="sans-serif" font-size="14" font-weight="700" fill="#0f172a">ξ (8 disjoint regions)</text><circle cx="195" cy="92" r="58" fill="#3b82f6" fill-opacity="0.16" stroke="#2563eb" stroke-width="2"/><circle cx="265" cy="92" r="58" fill="#f59e0b" fill-opacity="0.16" stroke="#d97706" stroke-width="2"/><circle cx="230" cy="148" r="58" fill="#10b981" fill-opacity="0.16" stroke="#059669" stroke-width="2"/><text x="148" y="48" font-family="sans-serif" font-size="13" font-weight="700" fill="#1d4ed8">A</text><text x="304" y="48" font-family="sans-serif" font-size="13" font-weight="700" fill="#b45309">B</text><text x="285" y="198" font-family="sans-serif" font-size="13" font-weight="700" fill="#047857">C</text><text x="230" y="113" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="800" fill="#dc2626">A∩B∩C</text><text x="230" y="74" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#334155">A∩B∩C′</text><text x="196" y="132" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#334155">A∩C∩B′</text><text x="264" y="132" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#334155">B∩C∩A′</text><text x="166" y="84" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#1e3a8a">A only</text><text x="294" y="84" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#92400e">B only</text><text x="230" y="182" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#065f46">C only</text><text x="392" y="198" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#475569">(A ∪ B ∪ C)′</text></svg>',
      caption: "Always start at the red bullseye A ∩ B ∩ C (step 1), subtract into the three petals (step 2), then the three 'only' crescents (step 3), and finally outside (step 4).",
    },
    {
      title: "Cumulative Frequency → Box-and-Whisker Comparison",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 155" role="img" aria-label="Two parallel box plots comparing Group A and Group B medians and interquartile ranges"><rect x="10" y="10" width="440" height="135" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/><line x1="55" y1="120" x2="425" y2="120" stroke="#334155" stroke-width="1.8"/><text x="32" y="50" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#1d4ed8">Set A</text><line x1="95" y1="46" x2="155" y2="46" stroke="#2563eb" stroke-width="2"/><line x1="275" y1="46" x2="345" y2="46" stroke="#2563eb" stroke-width="2"/><rect x="155" y="32" width="120" height="28" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><line x1="225" y1="32" x2="225" y2="60" stroke="#dc2626" stroke-width="2.6"/><line x1="95" y1="38" x2="95" y2="54" stroke="#2563eb" stroke-width="2"/><line x1="345" y1="38" x2="345" y2="54" stroke="#2563eb" stroke-width="2"/><text x="32" y="92" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#047857">Set B</text><line x1="115" y1="88" x2="195" y2="88" stroke="#059669" stroke-width="2"/><line x1="265" y1="88" x2="385" y2="88" stroke="#059669" stroke-width="2"/><rect x="195" y="74" width="70" height="28" fill="#d1fae5" stroke="#059669" stroke-width="2"/><line x1="245" y1="74" x2="245" y2="102" stroke="#dc2626" stroke-width="2.6"/><line x1="115" y1="80" x2="115" y2="96" stroke="#059669" stroke-width="2"/><line x1="385" y1="80" x2="385" y2="96" stroke="#059669" stroke-width="2"/><text x="245" y="138" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="600" fill="#334155">Set B has higher median (red bar) AND narrower box (smaller IQR = more consistent)</text></svg>',
      caption: "The box spans Q₁ to Q₃ (width = IQR) and the inner vertical line marks the median — the exact two statistics Edexcel expects when comparing distributions.",
    },
  ],
  history: {
    title: "From Hamilton's Quaternions to Modern Vectors",
    story:
      "In 1843 William Rowan Hamilton carved quaternion equations into Broom Bridge in Dublin while trying to rotate arrows in 3D space. Forty years later, Josiah Willard Gibbs and Oliver Heaviside stripped away the fourth component to create the clean modern vector algebra (a, b, scalar multiples, and nose-to-tail addition) you use on Edexcel 4MA1 today!",
  },
};
