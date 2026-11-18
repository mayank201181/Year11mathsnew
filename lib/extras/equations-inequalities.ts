import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Every time air-traffic radar checks whether a straight flight vector enters a circular storm cell, it is computing the discriminant b² − 4ac of a linear–quadratic simultaneous system in real time.",
  didYouKnow: [
    "Around 2000 BCE, Babylonian scribes solved simultaneous equations equivalent to x + y = p and xy = q on clay tablets — essentially completing the square 3,600 years before modern algebraic symbols existed.",
    "The symbol ≠, < and > were introduced by English mathematician Thomas Harriot (published in 1631), who designed the narrow point of < to point toward the smaller quantity.",
    "In computer graphics (ray tracing), rendering a single frame of a 3D movie solves millions of line–sphere simultaneous quadratic equations per second — using b² − 4ac < 0 to skip pixels where a light ray misses a sphere!",
  ],
  activities: [
    {
      title: "The Extraneous Root Detective",
      emoji: "🕵️",
      materials: ["Pen and paper", "Coloured highlighter"],
      steps: [
        "Write down an algebraic fraction equation such as 3/(x − 4) + x/(x + 4) = 24/(x² − 16).",
        "Before touching any algebra, highlight the 'forbidden' x-values that make any denominator zero (here x = 4 and x = −4).",
        "Clear the denominators, solve the quadratic, and cross out any root that lands on a highlighted forbidden number!",
      ],
      maths:
        "Multiplying an equation by (x − 4)(x + 4) is only reversible when (x − 4)(x + 4) ≠ 0; checking excluded values prevents division-by-zero ghosts from sneaking into your final answer.",
    },
    {
      title: "Parabola Sign-Flip Sketching Sprint",
      emoji: "🎢",
      materials: ["Scrap paper", "Stopwatch"],
      steps: [
        "Pick two random integers r₁ < r₂ between −6 and 6, and expand (x − r₁)(x − r₂).",
        "Flip a coin: Heads = solve f(x) < 0; Tails = solve −f(x) < 0.",
        "Sketch the 2-second parabola and write the inequality solution in under 15 seconds — watching out for Tails where you multiply by −1 and flip < to >!",
      ],
      maths:
        "A positive-x² parabola is negative in one connected valley (r₁ < x < r₂) and positive on two separate arms (x < r₁ or x > r₂).",
    },
  ],
  bonusDiagrams: [
    {
      title: "Ray-Tracing a Sphere: Discriminant in Action",
      svg: '<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three rays from a camera missing, grazing, and intersecting a sphere corresponding to negative, zero, and positive discriminants"><rect x="6" y="6" width="448" height="158" rx="12" fill="#0f172a"/><circle cx="310" cy="88" r="52" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/><circle cx="48" cy="118" r="7" fill="#fde047"/><text x="48" y="142" font-size="11" font-weight="bold" text-anchor="middle" fill="#fde047">Camera</text><line x1="55" y1="115" x2="390" y2="16" stroke="#f87171" stroke-width="2" stroke-dasharray="5,4"/><text x="195" y="34" font-size="11" font-weight="bold" fill="#fca5a5">Δ &lt; 0 (Miss)</text><line x1="55" y1="118" x2="410" y2="32" stroke="#fbbf24" stroke-width="2.2"/><circle cx="298" cy="59" r="4" fill="#fbbf24"/><text x="415" y="36" font-size="11" font-weight="bold" text-anchor="end" fill="#fde047">Δ = 0 (Tangent)</text><line x1="55" y1="120" x2="420" y2="96" stroke="#4ade80" stroke-width="2.2"/><circle cx="259" cy="107" r="4" fill="#4ade80"/><circle cx="361" cy="100" r="4" fill="#4ade80"/><text x="422" y="114" font-size="11" font-weight="bold" text-anchor="end" fill="#86efac">Δ &gt; 0 (2 hits)</text></svg>',
      caption: "Every 3D video game shader tests b² − 4ac to see if a light ray misses (Δ < 0), grazes (Δ = 0), or pierces (Δ > 0) an object.",
    },
  ],
  history: {
    title: "Al-Khwarizmi's Six Canonical Quadratics",
    story:
      "In 820 CE in Baghdad, Muhammad ibn Musa al-Khwarizmi wrote Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala — giving us the word 'algebra' from al-jabr ('restoring/completing'). Because negative numbers were not yet accepted as coefficients, he classified quadratics into six separate geometric cases and proved each one by literally completing a physical square!",
  },
};
