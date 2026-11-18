import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "How did nineteenth-century surveyors measure the exact height of Mount Everest down to a few feet without anyone climbing within miles of its summit? By chaining 3D elevation angles and the Sine Rule across 150 miles of Indian plains!",
  didYouKnow: [
    "In 1852, Radhanath Sikdar of the Great Trigonometrical Survey of India computed Peak XV's height as 29,002 ft (just 26 ft off modern GPS!) purely from Sine Rule triangles and atmospheric refraction corrections.",
    "The word 'sine' comes from a medieval Latin mistranslation: Sanskrit *jya-ardha* ('half-chord') was transliterated into Arabic *jiba*, misread as *jayb* ('bay' or 'fold'), and translated into Latin *sinus*!",
    "Aviation runways are numbered by dropping the last digit of their three-figure magnetic bearing: Runway 09 points due East (090°) and its opposite end is Runway 27 (270° = 090° + 180°).",
    "Every pure note played on a tuning fork is a physical graph of y = A sin(360 f t) — concert A4 oscillates 440 full 360° cycles every single second.",
  ],
  activities: [
    {
      title: "Pencil-Box Space Diagonal Challenge",
      emoji: "📦",
      materials: ["Any rectangular shoebox or cereal box", "A 30 cm ruler", "A piece of string"],
      steps: [
        "Measure the length l, width w and height h of your box in cm.",
        "Before putting the string inside, predict the exact space diagonal sqrt(l² + w² + h²) and the angle it makes with the bottom of the box.",
        "Tape the string from bottom-front-left to top-back-right and measure it taut to test your 3D Pythagoras prediction within 2 mm!",
      ],
      maths:
        "The floor diagonal sqrt(l² + w²) acts as the horizontal leg of an invisible vertical right-angled triangle standing diagonally across the box.",
    },
    {
      title: "Two-Triangle Compass Swing (Ambiguous SSA)",
      emoji: "🧭",
      materials: ["Ruler", "Protractor", "Pair of compasses"],
      steps: [
        "Draw a long horizontal ray from P, measure a 32° angle at P, and mark PQ = 14 cm along the angled arm.",
        "Open your compasses to 9 cm, put the sharp point on Q, and sweep an arc across the horizontal base ray.",
        "Measure BOTH intersection angles at R₁ and R₂ with your protractor — verify they add to 180°!",
      ],
      maths:
        "Because QR₁ = QR₂ = 9 cm, triangle QR₁R₂ is isosceles, forcing the interior angle of the smaller triangle to be 180° minus the acute base angle.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Square Pyramid: Sloping Face vs Sloping Edge",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 200" role="img" aria-label="Square-based pyramid VABCD comparing right-angled triangle VOM to edge midpoint M for face angle with right-angled triangle VOC to corner C for edge angle"><rect x="4" y="4" width="452" height="192" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><polygon points="70,162 240,162 310,118 140,118" fill="#f1f5f9" stroke="#64748b" stroke-width="1.8"/><line x1="190" y1="30" x2="190" y2="140" stroke="#0f172a" stroke-width="2" stroke-dasharray="5,3"/><polygon points="190,30 190,140 275,140" fill="#dcfce7" fill-opacity="0.7" stroke="#16a34a" stroke-width="2"/><line x1="190" y1="140" x2="310" y2="118" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/><line x1="190" y1="30" x2="70" y2="162" stroke="#334155" stroke-width="1.8"/><line x1="190" y1="30" x2="240" y2="162" stroke="#334155" stroke-width="1.8"/><line x1="190" y1="30" x2="310" y2="118" stroke="#dc2626" stroke-width="2.4"/><line x1="190" y1="30" x2="140" y2="118" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="4,4"/><circle cx="190" cy="140" r="3.5" fill="#0f172a"/><circle cx="275" cy="140" r="3.5" fill="#16a34a"/><text x="186" y="22" font-size="13" font-weight="800" fill="#0f172a">V</text><text x="175" y="152" font-size="12" font-weight="800" fill="#0f172a">O</text><text x="282" y="148" font-size="12" font-weight="800" fill="#15803d">M (midpoint)</text><text x="317" y="122" font-size="12" font-weight="800" fill="#dc2626">C (corner)</text><text x="345" y="56" font-size="11" font-weight="800" fill="#15803d">Face angle: △VOM</text><text x="345" y="73" font-size="11" font-weight="700" fill="#15803d">OM = half side</text><text x="345" y="98" font-size="11" font-weight="800" fill="#dc2626">Edge angle: △VOC</text><text x="345" y="115" font-size="11" font-weight="700" fill="#dc2626">OC = half diagonal</text></svg>`,
      caption: "Green △VOM gives the steeper face-to-base angle; red △VOC gives the gentler edge-to-base angle.",
    },
    {
      title: "Sine, Cosine & Tangent Symmetry Map (0° to 360°)",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 175" role="img" aria-label="Four quadrants from 0 to 360 degrees showing CAST rules: All positive 0 to 90, Sine positive 180 minus theta, Tan positive 180 plus theta, Cos positive 360 minus theta"><rect x="4" y="4" width="452" height="167" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><circle cx="135" cy="88" r="64" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><line x1="58" y1="88" x2="212" y2="88" stroke="#334155" stroke-width="1.8"/><line x1="135" y1="14" x2="135" y2="162" stroke="#334155" stroke-width="1.8"/><text x="165" y="62" font-size="13" font-weight="800" fill="#1d4ed8">A (θ)</text><text x="82" y="62" font-size="12" font-weight="800" fill="#dc2626">S (180°−θ)</text><text x="80" y="122" font-size="12" font-weight="800" fill="#b45309">T (180°+θ)</text><text x="148" y="122" font-size="12" font-weight="800" fill="#15803d">C (360°−θ)</text><text x="218" y="92" font-size="10" font-weight="700" fill="#334155">0°/360°</text><text x="140" y="22" font-size="10" font-weight="700" fill="#334155">90°</text><text x="34" y="92" font-size="10" font-weight="700" fill="#334155">180°</text><text x="255" y="48" font-size="12" font-weight="800" fill="#0f172a">Secondary root cheat-sheet:</text><text x="255" y="74" font-size="12" font-weight="700" fill="#dc2626">• sin x = k  →  x and 180° − x</text><text x="255" y="98" font-size="12" font-weight="700" fill="#15803d">• cos x = k  →  x and 360° − x</text><text x="255" y="122" font-size="12" font-weight="700" fill="#b45309">• tan x = k  →  x and x + 180°</text></svg>`,
      caption: "Whether you prefer wave symmetry or the unit-circle CAST diagram, always check for the second root in 0° ≤ x ≤ 360°.",
    },
  ],
  history: {
    title: "Al-Kashi's Law of Cosines & Spherical Astronomy",
    story:
      "Long before pocket calculators, the fifteenth-century Samarkand astronomer Jamshid al-Kashi stated the Cosine Rule in a form equivalent to a² = b² + c² − 2bc cos A and computed sin 1° accurate to 16 decimal places by solving a cubic equation iteratively — laying the foundations for celestial and maritime navigation across the globe.",
  },
};
