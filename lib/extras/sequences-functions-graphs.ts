import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Why does {{y = f(x + 5)}} drag a graph *left* instead of right, and how did a nine-year-old schoolboy sum {{1 + 2 + ... + 100}} in three seconds flat while the rest of his class scribbled on slates?",
  didYouKnow: [
    "If {{f}} puts on your socks and {{g}} puts on your shoes, then {{gf}} works fine — and its inverse {{(gf)^(-1) = f^(-1)g^(-1)}} takes off your shoes *first*, then your socks! Mathematicians call this the **Socks-and-Shoes Theorem** for composite inverses.",
    "Every rational function {{f(x) = (ax + b)/(cx - a)}} (where the denominator's constant is the negative of the numerator's {{x}}-coefficient, like {{(2x + 5)/(x - 2)}}) is **self-inverse**: {{f(f(x)) = x}} for every valid {{x}}!",
    "The sum of the first {{n}} odd numbers {{1 + 3 + 5 + ... + (2n - 1)}} is an arithmetic series with {{a = 1}} and {{d = 2}}: {{S_n = (n/2)(2 + 2n - 2) = n^2}} — every partial sum is a perfect square!",
    "A hyperbola {{y = k/x}} is actually a rotated conic section: slice a double cone vertically and rotate the axes {{45°}}, and you get {{xy = k}}.",
  ],
  activities: [
    {
      title: "The Self-Inverse Function Factory",
      emoji: "🪞",
      materials: ["Paper", "Pen", "Calculator or Desmos"],
      steps: [
        "Pick any three non-zero integers {{a}}, {{b}} and {{c}}, and build {{f(x) = (ax + b)/(cx - a)}} (for example {{f(x) = (3x + 7)/(x - 3)}}).",
        "Choose a secret starting number like {{x = 5}} (avoiding {{x = a/c}}), compute {{f(5)}}, and then plug that output straight back into {{f}}!",
        "Now swap {{x}} and {{y}} algebraically to prove why {{f^(-1)(x)}} is identical to {{f(x)}}, and check its symmetry across the line {{y = x}}.",
      ],
      maths:
        "Setting {{y = (ax + b)/(cx - a)}} gives {{cyx - ay = ax + b}}, so {{x(cy - a) = ay + b}}, meaning {{x = (ay + b)/(cy - a)}} — provided {{a^2 + bc != 0}}, the function is its own reflection across {{y = x}}!",
    },
    {
      title: "L-Shaped Gnomon Tile Proof of Odd Sums",
      emoji: "🧱",
      materials: ["Squared paper", "Two coloured highlighters"],
      steps: [
        "Shade {{1}} square in the bottom-left corner, then wrap an L-shaped border of {{3}} squares around it to make a {{2 * 2}} square.",
        "Wrap borders of {{5}}, {{7}}, and {{9}} squares in alternating colours.",
        "Check {{S_5}} using Edexcel's formula {{(5/2)(2(1) + 4(2))}} and verify it matches the {{5 * 5 = 25}} grid!",
      ],
      maths:
        "Adding {{2n - 1}} squares onto an {{(n - 1)^2}} square yields {{(n - 1)^2 + (2n - 1) = n^2 - 2n + 1 + 2n - 1 = n^2}}, linking arithmetic series directly to quadratic sequences.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Transformation Cheat-Compass around P(x, y)",
      svg: `<svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Transformation compass showing how a point x comma y moves up for f of x plus a, down for f of x minus a, left for f of x plus a inside brackets, and right for f of x minus a"><rect x="8" y="8" width="444" height="174" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><circle cx="230" cy="95" r="28" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/><text x="230" y="92" font-size="11" font-weight="700" fill="#5b21b6" text-anchor="middle">Original</text><text x="230" y="106" font-size="11" font-weight="700" fill="#5b21b6" text-anchor="middle">(x, y)</text><line x1="230" y1="67" x2="230" y2="36" stroke="#16a34a" stroke-width="2.2"/><polygon points="226,38 230,28 234,38" fill="#16a34a"/><text x="230" y="22" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">f(x) + a → (x, y + a)</text><line x1="230" y1="123" x2="230" y2="154" stroke="#16a34a" stroke-width="2.2"/><polygon points="226,152 230,162 234,152" fill="#16a34a"/><text x="230" y="174" font-size="11" font-weight="700" fill="#15803d" text-anchor="middle">f(x) − a → (x, y − a)</text><line x1="202" y1="95" x2="132" y2="95" stroke="#e11d48" stroke-width="2.2"/><polygon points="134,91 124,95 134,99" fill="#e11d48"/><text x="72" y="91" font-size="11" font-weight="700" fill="#be123c" text-anchor="middle">f(x + a)</text><text x="72" y="106" font-size="11" fill="#be123c" text-anchor="middle">(x − a, y)</text><line x1="258" y1="95" x2="328" y2="95" stroke="#2563eb" stroke-width="2.2"/><polygon points="326,91 336,95 326,99" fill="#2563eb"/><text x="388" y="91" font-size="11" font-weight="700" fill="#1d4ed8" text-anchor="middle">f(x − a)</text><text x="388" y="106" font-size="11" fill="#1d4ed8" text-anchor="middle">(x + a, y)</text></svg>`,
      caption:
        "Vertical shifts follow the sign outside f(x); horizontal shifts reverse the sign inside f(x ± a).",
    },
  ],
  history: {
    title: "Brunswick, 1786: Nine-Year-Old Gauss Stuns Herr Büttner",
    story:
      "When schoolmaster J. G. Büttner ordered his noisy primary class in Brunswick to sum the integers from 1 to 100 hoping for an hour of peace, nine-year-old Carl Friedrich Gauss laid his slate on the desk almost immediately with a single number written on it: 5050. Spotting 50 symmetric pairs of 101 launched a lifetime in which Gauss transformed number theory, astronomy, magnetism and differential geometry.",
  },
};
