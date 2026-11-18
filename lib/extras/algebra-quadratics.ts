import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "In 9th-century Baghdad, mathematicians solved quadratics by literally gluing paper rectangles onto a square until a missing corner appeared — the exact move you still call 'completing the square' twelve centuries later.",
  didYouKnow: [
    "Euler's famous quadratic {{n^2 + n + 41}} produces **40 consecutive prime numbers** for {{n = 0, 1, 2, ..., 39}}, fooling anyone who guesses from examples — before failing spectacularly at {{n = 40}} ({{40^2 + 40 + 41 = 41^2}})!",
    "The word **algebra** comes from *al-jabr* ('restoring / balancing broken parts') in Muhammad ibn Musa al-Khwarizmi's c. 820 CE treatise — the very step you use when collecting {{x}}-terms on one side to change the subject.",
    "Every satellite dish, car headlight reflector and suspension bridge cable under uniform horizontal load traces a **parabola** {{y = a(x + p)^2 + q}}, whose focal receiver sits directly on the axis of symmetry {{x = -p}}.",
    "Mental-maths champions compute products like {{97 * 103}} instantly by rewriting them as Difference of Two Squares: {{(100 - 3)(100 + 3) = 100^2 - 3^2 = 9991}}.",
    "The Quadratic Formula {{x = (-b +- sqrt(b^2 - 4ac))/(2a)}} is not a separate rule at all — it is simply what happens when you complete the square on {{ax^2 + bx + c = 0}} once and for all using letters!",
  ],
  activities: [
    {
      title: "Lightning Mental Squares Duel (DOTS Speed Trick)",
      emoji: "⚡",
      materials: ["Scrap paper or mini whiteboard", "A partner and a phone stopwatch"],
      steps: [
        "Pick any two numbers equidistant from a round multiple of 10 or 100, such as 47 × 53, 84 × 96, or 198 × 202.",
        "Challenge a friend or family member to work it out by column multiplication while you race them mentally using (M − d)(M + d) = M² − d².",
        "Reverse the game: call out differences of squares like 63² − 37² and race to compute (63 − 37)(63 + 37) = 26 × 100 = 2600 in under three seconds!",
      ],
      maths:
        "Because {{(M - d)(M + d) = M^2 - d^2}}, any symmetrical product around a round number {{M}} collapses into one easy mental square minus a tiny square.",
    },
    {
      title: "Fold-a-Box Cubic Volume Optimiser",
      emoji: "📦",
      materials: ["A sheet of A4 or 20 cm × 30 cm card", "Ruler and scissors"],
      steps: [
        "Draw a square of side x cm in each of the four corners of a 20 cm × 30 cm rectangle.",
        "Write the length (30 − 2x), width (20 − 2x) and height x of the open tray formed when the flaps fold up, and expand V(x) = x(20 − 2x)(30 − 2x) into a cubic polynomial.",
        "Evaluate your expanded cubic at x = 2, 3, 4 and 5 cm (and check against multiplying the three brackets directly!) to discover which corner cut gives the biggest tray volume.",
      ],
      maths:
        "Triple-bracket cubics {{V(x) = 4x^3 - 100x^2 + 600x}} model 3D volume whenever all three dimensions vary linearly with a single design variable {{x}}.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Al-Khwarizmi's Geometric Completing the Square",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 185" role="img" aria-label="Geometric dissection of x squared plus bx into an x by x square, two b over 2 by x strips, and a missing b over 2 squared corner"><rect x="20" y="15" width="100" height="100" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><rect x="120" y="15" width="45" height="100" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/><rect x="20" y="115" width="100" height="45" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/><rect x="120" y="115" width="45" height="45" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/><text x="70" y="70" font-size="15" font-weight="bold" fill="#1e3a8a" text-anchor="middle">x²</text><text x="142" y="70" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">(b/2)x</text><text x="70" y="142" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">(b/2)x</text><text x="142" y="142" font-size="11" font-weight="bold" fill="#b91c1c" text-anchor="middle">(b/2)²</text><text x="70" y="11" font-size="11" fill="#334155" text-anchor="middle">x</text><text x="142" y="11" font-size="11" fill="#334155" text-anchor="middle">b/2</text><rect x="190" y="30" width="215" height="125" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><text x="297" y="58" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Big square area = (x + b/2)²</text><text x="297" y="84" font-size="12" fill="#334155" text-anchor="middle">Blue + Yellow L-shape = x² + bx</text><text x="297" y="110" font-size="12" fill="#b91c1c" text-anchor="middle">Missing red corner = (b/2)²</text><text x="297" y="138" font-size="13" font-weight="bold" fill="#1d4ed8" text-anchor="middle">x² + bx = (x + b/2)² − (b/2)²</text></svg>`,
      caption: "Splitting bx into two equal strips of width b/2 leaves a red (b/2)² corner gap — subtracting that corner recovers x² + bx.",
    },
    {
      title: "Parity Tile Proof: Why Odd × Odd Is Always Odd",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 170" role="img" aria-label="Rectangle of width 2m plus 1 and height 2n plus 1 split into three even regions 4mn, 2m, 2n plus a single 1 by 1 odd unit corner"><rect x="25" y="20" width="110" height="90" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/><rect x="135" y="20" width="35" height="90" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/><rect x="25" y="110" width="110" height="35" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/><rect x="135" y="110" width="35" height="35" fill="#fde68a" stroke="#d97706" stroke-width="2"/><text x="80" y="70" font-size="14" font-weight="bold" fill="#14532d" text-anchor="middle">4mn</text><text x="152" y="70" font-size="12" font-weight="bold" fill="#14532d" text-anchor="middle">2n</text><text x="80" y="132" font-size="12" font-weight="bold" fill="#14532d" text-anchor="middle">2m</text><text x="152" y="132" font-size="13" font-weight="bold" fill="#92400e" text-anchor="middle">+1</text><text x="80" y="14" font-size="11" fill="#334155" text-anchor="middle">2m</text><text x="152" y="14" font-size="11" fill="#334155" text-anchor="middle">1</text><rect x="195" y="28" width="210" height="115" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><text x="300" y="55" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">(2m + 1)(2n + 1)</text><text x="300" y="80" font-size="12" fill="#166534" text-anchor="middle">Green tiles = 2(2mn + m + n) (EVEN)</text><text x="300" y="104" font-size="12" fill="#92400e" text-anchor="middle">Gold corner = +1 leftover tile</text><text x="300" y="129" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Even + 1 = ALWAYS ODD!</text></svg>`,
      caption: "Every green region pairs cleanly into twos, leaving one unpairable gold unit square in the corner for every m and n.",
    },
  ],
  history: {
    title: "From Rhetorical Words in Baghdad to Viète's Symbolic Revolution",
    story:
      "When al-Khwarizmi wrote *The Compendious Book on Calculation by Completion and Balancing* in Baghdad around 820 CE, symbols like x², + and = did not exist anywhere on Earth. Every equation was written in full Arabic prose — 'a square and ten roots are equal to thirty-nine dirhams' — and justified by slicing and rearranging geometric squares. Seven centuries later, French lawyer-cryptographer François Viète (1591) took the decisive leap of using letters not only for unknowns, but for general coefficients too. That single breakthrough turned one-off arithmetic recipes into universal algebraic proofs that hold for infinitely many numbers at once.",
  },
};
