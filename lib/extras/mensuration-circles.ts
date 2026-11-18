import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Why did Archimedes ask for a sphere inside a cylinder to be carved on his gravestone — and why can every spectator sitting along a circular stadium tier see the goalposts at the exact same angle?",
  didYouKnow: [
    "Archimedes proved in *On the Sphere and Cylinder* (c. 225 BCE) that a cone, sphere and cylinder of radius {{r}} and height {{2r}} have volumes in the exact ratio **{{1 : 2 : 3}}** — and surface areas (including bases) in ratio **{{(1 + sqrt(5)) : 4 : 6}}**!",
    "Because mass scales as **{{k^3}}** while bone cross-sectional area scales only as **{{k^2}}** (Galileo's Square–Cube Law), scaling an ant up by {{k = 100}} multiplies its weight by {{1,000,000}} but its leg strength by only {{10,000}} — its legs would snap instantly!",
    "Before GPS, coastal navigators used *angles in the same segment are equal* with a sextant: keeping a constant horizontal angle between two lighthouses steers a ship safely along a circular arc clear of submerged reefs.",
    "The three chord and secant formulas ({{AP * PB = CP * PD}}, {{PA * PB = PC * PD}}, and {{PT^2 = PA * PB}}) are all one single invariant discovered by Jakob Steiner in 1826, called the **Power of a Point** ({{d^2 - R^2}}).",
  ],
  activities: [
    {
      title: "Build & Unroll a Coffee-Cup Frustum",
      emoji: "☕",
      materials: ["A clean paper coffee cup", "Scissors", "Ruler", "Protractor"],
      steps: [
        "Measure the top rim diameter ({{2R}}), bottom base diameter ({{2r}}), vertical height, and sloping side ({{L - l}}) of the cup.",
        "Carefully cut straight along the cup's glued seam and flatten the curved cardboard wall onto your desk — notice it forms an **annular sector** (a big sector minus a concentric small sector)!",
        "Extend the two straight cut edges with a ruler until they meet at the ”ghost apex” and measure the sector angle {{theta}}.",
        "Verify that the outer arc length {{(theta/360) * 2 * pi * L_\"net\"}} equals your measured top rim circumference {{2 * pi * R}}!",
      ],
      maths:
        "Unrolling a cone of slant height {{L}} and base radius {{R}} gives a flat sector of radius {{L}} whose arc {{2 * pi * R}} has area {{(1/2) * L * (2 * pi * R) = pi * R * L}} — proving the curved surface area formula with zero calculus!",
    },
    {
      title: "Same-Segment Stadium Sightline Test",
      emoji: "🏟️",
      materials: ["A4 sheet of paper", "Compass", "Protractor", "Coloured pens"],
      steps: [
        "Draw a large circle of radius {{7 cm}} and draw a chord {{AB}} near the bottom to represent rugby goalposts.",
        "Mark five completely different ”spectator seats” {{P_1, P_2, P_3, P_4, P_5}} anywhere along the major arc {{AB}}, plus the centre {{O}}.",
        "Measure every viewing angle {{∠AP_iB}} and central angle {{∠AOB}} with a protractor.",
        "Mark one seat {{Q}} on the **minor** arc behind the goalposts and measure {{∠AQB}}.",
      ],
      maths:
        "Every seat on the major arc sees the exact same angle {{theta = ∠AOB / 2}}, while seat {{Q}} on the minor arc completes a cyclic quadrilateral and sees {{180° - theta}}!",
    },
  ],
  bonusDiagrams: [
    {
      title: "Archimedes' 1 : 2 : 3 Tombstone Trio (Radius r, Height 2r)",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 150" role="img" aria-label="Cone, sphere, and cylinder each of radius r and height 2r showing volumes in ratio 1 to 2 to 3"><rect x="4" y="4" width="372" height="142" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><polygon points="65,24 27,112 103,112" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><ellipse cx="65" cy="112" rx="38" ry="9" fill="#bfdbfe" stroke="#2563eb" stroke-width="1.8"/><circle cx="190" cy="68" r="44" fill="#fde68a" stroke="#d97706" stroke-width="2"/><ellipse cx="190" cy="68" rx="44" ry="11" fill="none" stroke="#b45309" stroke-width="1.4" stroke-dasharray="4,3"/><rect x="277" y="24" width="76" height="88" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><ellipse cx="315" cy="24" rx="38" ry="9" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.8"/><ellipse cx="315" cy="112" rx="38" ry="9" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.8"/><text x="65" y="135" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Cone: ⅔πr³ (1)</text><text x="190" y="135" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">Sphere: ⁴⁄₃πr³ (2)</text><text x="315" y="135" font-size="11" font-weight="bold" fill="#14532d" text-anchor="middle">Cylinder: 2πr³ (3)</text></svg>',
      caption: "With shared radius r and height 2r, the cone + sphere volumes add up to the exact volume of the enclosing cylinder (1 + 2 = 3).",
    },
    {
      title: "Unified Power of a Point: Internal Chords vs External Tangent-Secant",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 150" role="img" aria-label="Internal intersecting chords AP times PB equals CP times PD compared with external tangent-secant PT squared equals PA times PB"><rect x="4" y="4" width="372" height="142" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><circle cx="88" cy="70" r="46" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><line x1="47" y1="49" x2="132" y2="83" stroke="#1d4ed8" stroke-width="2"/><line x1="56" y1="103" x2="118" y2="35" stroke="#dc2626" stroke-width="2"/><circle cx="91" cy="67" r="3" fill="#0f172a"/><text x="37" y="48" font-size="10" font-weight="bold" fill="#1d4ed8">A</text><text x="136" y="87" font-size="10" font-weight="bold" fill="#1d4ed8">B</text><text x="45" y="110" font-size="10" font-weight="bold" fill="#dc2626">C</text><text x="122" y="33" font-size="10" font-weight="bold" fill="#dc2626">D</text><text x="95" y="62" font-size="10" font-weight="bold" fill="#0f172a">P</text><text x="88" y="134" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Inside: AP × PB = CP × PD</text><circle cx="298" cy="70" r="44" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/><line x1="198" y1="105" x2="282" y2="29" stroke="#dc2626" stroke-width="2"/><line x1="198" y1="105" x2="341" y2="80" stroke="#1d4ed8" stroke-width="2"/><text x="186" y="109" font-size="10" font-weight="bold" fill="#0f172a">P</text><text x="279" y="23" font-size="10" font-weight="bold" fill="#dc2626">T</text><text x="253" y="110" font-size="10" font-weight="bold" fill="#1d4ed8">A</text><text x="345" y="84" font-size="10" font-weight="bold" fill="#1d4ed8">B</text><text x="275" y="134" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="middle">Outside: PT² = PA × PB</text></svg>',
      caption: "In every configuration, multiply the two distances measured from the meeting point P to the circle.",
    },
  ],
  history: {
    title: "Thales, Euclid & Archimedes: 300 Years That Built Circle Geometry",
    story:
      "Around 600 BCE, Thales of Miletus amazed geometers by proving that **every** triangle inscribed on a circle's diameter is right-angled — legend says he sacrificed an ox in celebration. Three centuries later in Alexandria, Euclid organised all the chord, tangent and alternate-segment theorems into Book III of the *Elements* using nothing more than isosceles radii and congruent triangles. Finally, Archimedes of Syracuse tackled curved 3D surfaces by slicing spheres, cones and cylinders into wafer-thin discs balanced on an imaginary lever — anticipating integral calculus by nearly two millennia!",
  },
};
