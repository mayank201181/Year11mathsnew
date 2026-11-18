import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "How can a radar gun clock a Formula 1 car at 312 km/h in a single instant when speed is 'distance divided by time' and zero time has elapsed? Differentiation solves Zeno's 2,400-year-old paradox of motion.",
  didYouKnow: [
    "Isaac Newton (in Cambridge during the 1665 plague) and Gottfried Wilhelm Leibniz (in Germany) invented calculus independently — we still use Leibniz's fraction-like notation dy/dx because it reminds us of rise δy over run δx!",
    "Honeycomb cells and beverage cans are natural and industrial calculus optimisation problems: minimising surface area for a fixed volume occurs where dA/dr = 0.",
    "At the exact apex of a basketball's arc, its vertical velocity ds/dt is zero for a single instant, yet gravity still pulls down with acceleration dv/dt = −9.8 m/s² — if acceleration were also zero, the ball would hover in mid-air forever!",
    "In physics, differentiating acceleration a(t) one more time gives da/dt, officially called **jerk** — rollercoaster engineers cap jerk so riders aren't thrown sideways entering a loop.",
  ],
  activities: [
    {
      title: "Fold-Your-Own Maximum-Volume Tray",
      emoji: "📦",
      materials: ["Two A4 sheets of paper (roughly 30 cm × 21 cm)", "Ruler", "Scissors", " sticky tape"],
      steps: [
        "Use calculus first: write V(x) = x(30 − 2x)(21 − 2x) = 4x³ − 102x² + 630x and solve dV/dx = 12x² − 204x + 630 = 0 to predict the optimal corner square size x ≈ 4.0 cm.",
        "From Sheet 1, cut 4 cm × 4 cm squares from all four corners and tape up the walls; from Sheet 2, cut 7 cm × 7 cm squares.",
        "Measure length × width × height of both trays (4 cm gives ~1,128 cm³ vs 7 cm giving ~784 cm³) — your derivative nailed the peak!",
      ],
      maths:
        "Cutting tiny x makes a wide but paper-thin tray (V → 0); cutting huge x makes a tall but narrow tray (V → 0). By Rolle's Theorem, a smooth peak with dV/dx = 0 must sit strictly in between.",
    },
    {
      title: "Hallway Walk: Displacement vs Total Distance",
      emoji: "🚶",
      materials: ["5-metre hallway or tape measure", "Stopwatch on phone"],
      steps: [
        "Mark Origin O at one end. Walk forward 4 m in 2 seconds, pause for an instant (v = 0!), then walk 3 m back towards O over the next 2 seconds.",
        "Check your final displacement from O: s(4) = +1 m. Now check how far your feet actually walked: 4 + 3 = 7 m!",
        "Sketch s(t) and v(t) side by side and spot how v crosses zero right at the peak of s(t).",
      ],
      maths:
        "Net displacement only compares start and finish positions s(T) − s(0), whereas total distance splits the timeline at every root of v = ds/dt = 0 and sums |Δs| on each leg.",
    },
  ],
  bonusDiagrams: [
    {
      title: "The S–V–A Calculus Ladder",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 150" role="img" aria-label="Kinematics ladder from displacement s to velocity v equals ds by dt to acceleration a equals dv by dt"><rect x="0" y="0" width="460" height="150" rx="12" fill="#f8fafc"/><rect x="20" y="42" width="115" height="64" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><text x="77.5" y="68" font-size="13" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Displacement</text><text x="77.5" y="90" font-size="14" font-weight="bold" fill="#2563eb" text-anchor="middle">s(t)</text><rect x="172.5" y="42" width="115" height="64" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><text x="230" y="68" font-size="13" font-weight="bold" fill="#14532d" text-anchor="middle">Velocity</text><text x="230" y="90" font-size="14" font-weight="bold" fill="#16a34a" text-anchor="middle">v = ds/dt</text><rect x="325" y="42" width="115" height="64" rx="10" fill="#fae8ff" stroke="#9333ea" stroke-width="2"/><text x="382.5" y="68" font-size="13" font-weight="bold" fill="#581c87" text-anchor="middle">Acceleration</text><text x="382.5" y="90" font-size="14" font-weight="bold" fill="#9333ea" text-anchor="middle">a = dv/dt</text><line x1="138" y1="74" x2="168" y2="74" stroke="#0f172a" stroke-width="2.2"/><polygon points="169,74 161,69 161,79" fill="#0f172a"/><text x="153" y="32" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">d/dt</text><line x1="291" y1="74" x2="321" y2="74" stroke="#0f172a" stroke-width="2.2"/><polygon points="322,74 314,69 314,79" fill="#0f172a"/><text x="306" y="32" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">d/dt</text><text x="230" y="132" font-size="11" fill="#475569" text-anchor="middle">At O ⇒ s = 0   ·   Instantaneous rest ⇒ v = 0   ·   Max/min velocity ⇒ a = 0</text></svg>',
      caption: "Each differentiation with respect to t steps one rung down from position to velocity to acceleration.",
    },
  ],
  history: {
    title: "The Great Calculus Priority Feud",
    story:
      "In the late 1600s, Isaac Newton called derivatives 'fluxions' (writing a dot over x) to derive Kepler's laws of planetary orbits, but kept his notebooks private for decades. When Leibniz published his crisp dy/dx notation in 1684, the Royal Society erupted into mathematics' fiercest priority dispute — today, physics still uses Newton's dots for time derivatives while algebra and IGCSE use Leibniz's dy/dx!",
  },
};
