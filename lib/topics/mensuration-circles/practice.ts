import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      kind: "short",
      id: "mensuration-circles-quiz-q01",
      question: "A sector of a circle has radius {{12 cm}} and central angle {{60°}}. Find its exact area in terms of {{pi}} (in {{cm^2}}).",
      answer: { type: "expression", expr: "24*pi", form: "simplified", display: "{{24 * pi}}" },
      traps: [
        { spec: { type: "expression", expr: "4*pi" }, feedback: "{{4 * pi}} is the arc length — use {{(theta/360) * pi * r^2}} for area." },
      ],
      solution: ["Sector area {{= (60/360) * pi * 12^2 = (1/6) * 144 * pi = 24 * pi cm^2}}."],
      difficulty: "warmup",
      guideRef: "sectors-segments",
      hints: ["Use {{(theta/360) * pi * r^2}} with {{theta = 60}} and {{r = 12}}."],
    },
    {
      kind: "short",
      id: "mensuration-circles-quiz-q02",
      question: "A sector has radius {{8 cm}} and central angle {{45°}}. Find its exact **perimeter** in terms of {{pi}} (in {{cm}}).",
      answer: { type: "expression", expr: "16 + 2*pi", form: "simplified", display: "{{16 + 2 * pi}}" },
      traps: [
        { spec: { type: "expression", expr: "2*pi" }, feedback: "That is only the curved arc — add both straight radii ({{+ 16}})." },
        { spec: { type: "expression", expr: "8 + 2*pi" }, feedback: "Add **two** straight radii ({{8 + 8 = 16}}), not just one." },
      ],
      solution: [
        "Arc length {{= (45/360) * 2 * pi * 8 = (1/8) * 16 * pi = 2 * pi cm}}.",
        "Add both radii: perimeter {{= 2 * pi + 8 + 8 = 16 + 2 * pi cm}}.",
      ],
      difficulty: "core",
      guideRef: "sectors-segments",
      hints: ["Find the curved arc {{(45/360) * 2 * pi * 8}} first.", "Add the two straight edges {{2r = 16}}."],
    },
    {
      kind: "short",
      id: "mensuration-circles-quiz-q03",
      question: "A right circular cone has base radius {{3 cm}} and vertical height {{10 cm}}. Find its exact volume in terms of {{pi}} (in {{cm^3}}).",
      answer: { type: "expression", expr: "30*pi", form: "simplified", display: "{{30 * pi}}" },
      traps: [
        { spec: { type: "expression", expr: "90*pi" }, feedback: "Remember the {{1/3}} factor in {{V = (1/3) * pi * r^2 * h}}." },
      ],
      solution: ["{{V = (1/3) * pi * 3^2 * 10 = 30 * pi cm^3}}."],
      difficulty: "warmup",
      guideRef: "cones-spheres-frustums",
      hints: ["Cone volume is {{(1/3) * pi * r^2 * h}}."],
    },
    {
      kind: "short",
      id: "mensuration-circles-quiz-q04",
      question: "Find the exact **total** surface area of a **solid hemisphere** of radius {{4 cm}} in terms of {{pi}} (in {{cm^2}}).",
      answer: { type: "expression", expr: "48*pi", form: "simplified", display: "{{48 * pi}}" },
      traps: [
        { spec: { type: "expression", expr: "32*pi" }, feedback: "{{32 * pi}} is only the curved dome — include the flat circular base {{pi * r^2 = 16 * pi}}!" },
      ],
      solution: ["Total SA of a solid hemisphere {{= 3 * pi * r^2 = 3 * pi * 4^2 = 48 * pi cm^2}}."],
      difficulty: "core",
      guideRef: "cones-spheres-frustums",
      hints: ["Curved dome is {{2 * pi * r^2}}.", "Add the circular base {{pi * r^2}} to get {{3 * pi * r^2}}."],
    },
    {
      kind: "short",
      id: "mensuration-circles-quiz-q05",
      question:
        "Two mathematically similar solids have lengths in the ratio {{1 : 4}}. The smaller solid has surface area {{15 cm^2}}. Find the surface area of the larger solid in {{cm^2}}.",
      answer: { type: "number", value: 240 },
      traps: [
        { spec: { type: "number", value: 60 }, feedback: "Area scales by {{k^2 = 4^2 = 16}}, not by {{k = 4}}." },
        { spec: { type: "number", value: 960 }, feedback: "{{4^3 = 64}} is the volume factor; surface area uses {{k^2 = 16}}." },
      ],
      solution: ["Linear scale factor {{k = 4}}, so area scale factor {{k^2 = 16}}.", "Larger surface area {{= 15 * 16 = 240 cm^2}}."],
      difficulty: "warmup",
      guideRef: "area-volume-similarity",
      hints: ["Square the linear scale factor ({{k^2 = 4^2}}) to scale area."],
    },
    {
      kind: "short",
      id: "mensuration-circles-quiz-q06",
      question:
        "Two similar cones have curved surface areas {{18 cm^2}} and {{50 cm^2}}. The smaller cone has volume {{54 cm^3}}. Find the volume of the larger cone in {{cm^3}}.",
      answer: { type: "number", value: 250 },
      traps: [
        { spec: { type: "number", value: 150 }, feedback: "You multiplied by the area ratio {{50/18}} — step via {{k = sqrt(25/9) = 5/3}} and cube it!" },
      ],
      solution: [
        "{{k^2 = 50 / 18 = 25 / 9}}, so {{k = sqrt(25/9) = 5 / 3}}.",
        "{{k^3 = (5/3)^3 = 125 / 27}}.",
        "Larger volume {{= 54 * (125 / 27) = 2 * 125 = 250 cm^3}}.",
      ],
      difficulty: "core",
      guideRef: "area-volume-similarity",
      hints: ["Simplify {{50 / 18 = 25 / 9}} and take its square root to find {{k}}.", "Multiply {{54}} by {{k^3}}."],
    },
    {
      kind: "short",
      id: "mensuration-circles-quiz-q07",
      question: "Points {{A, B, C, D}} lie in order around a circle. Given {{∠ABC = 113°}}, find {{∠ADC}} in degrees.",
      answer: { type: "number", value: 67 },
      traps: [{ spec: { type: "number", value: 113 }, feedback: "Opposite angles of a cyclic quadrilateral **sum to {{180°}}**; they are not equal unless {{90°}}." }],
      solution: ["Opposite angles of cyclic quadrilateral {{ABCD}} sum to {{180°}}: {{∠ADC = 180° - 113° = 67°}}."],
      difficulty: "warmup",
      guideRef: "circle-theorems-angles",
      hints: ["Opposite angles of a cyclic quadrilateral add up to {{180°}}."],
    },
    {
      kind: "short",
      id: "mensuration-circles-quiz-q08",
      question:
        "Points {{A, B, C}} lie on a circle with centre {{O}}, with {{C}} on the major arc {{AB}}. Given {{∠OAB = 38°}}, find {{∠ACB}} in degrees.",
      answer: { type: "number", value: 52 },
      traps: [
        { spec: { type: "number", value: 104 }, feedback: "{{104°}} is the central angle {{∠AOB}} — halve it to get {{∠ACB}}!" },
        { spec: { type: "number", value: 76 }, feedback: "{{∠OAB}} is a base angle of isosceles {{△OAB}}, not an angle on the circumference subtended by {{AB}}." },
      ],
      solution: [
        "Since {{OA = OB}} (radii), {{△OAB}} is isosceles, so {{∠OBA = 38°}} and {{∠AOB = 180° - 76° = 104°}}.",
        "Angle at centre = {{2 ×}} angle at circumference, so {{∠ACB = 104° / 2 = 52°}}.",
      ],
      difficulty: "core",
      guideRef: "circle-theorems-angles",
      hints: ["Use isosceles triangle {{OAB}} ({{OA = OB}}) to find {{∠AOB}}.", "Halve {{∠AOB}} to find {{∠ACB}}."],
    },
    {
      kind: "short",
      id: "mensuration-circles-quiz-q09",
      question:
        "Line {{AT}} is a tangent to a circle at {{A}}. Points {{B}} and {{C}} lie on the circle with {{C}} in the alternate segment to acute {{∠BAT}}. Given {{∠BAT = 63°}} and {{∠ABC = 45°}}, find {{∠BAC}} in degrees.",
      answer: { type: "number", value: 72 },
      traps: [
        { spec: { type: "number", value: 63 }, feedback: "{{63°}} is {{∠ACB}} by the alternate segment theorem — now find {{∠BAC}} in {{△ABC}}!" },
        { spec: { type: "number", value: 27 }, feedback: "Chord {{AB}} is not a radius, so {{∠BAT + ∠BAC}} is not {{90°}}." },
      ],
      solution: [
        "By the alternate segment theorem, {{∠ACB = ∠BAT = 63°}}.",
        "In {{△ABC}}, {{∠BAC = 180° - 63° - 45° = 72°}}.",
      ],
      difficulty: "core",
      guideRef: "tangents-alternate-chords",
      hints: ["Use the alternate segment theorem to write down {{∠ACB}}.", "Subtract {{∠ACB}} and {{∠ABC}} from {{180°}}."],
    },
    {
      kind: "short",
      id: "mensuration-circles-quiz-q10",
      question:
        "From an external point {{P}}, tangent {{PT}} has length {{10 cm}} and secant {{PAB}} ({{A}} between {{P}} and {{B}}) has {{PA = 5 cm}}. Find the chord length {{AB}} in {{cm}}.",
      answer: { type: "number", value: 15 },
      traps: [
        { spec: { type: "number", value: 20 }, feedback: "{{20 cm}} is the whole secant {{PB}} — subtract {{PA = 5 cm}} to find chord {{AB}}!" },
      ],
      solution: [
        "Using {{PT^2 = PA * PB}}: {{10^2 = 5 * PB => PB = 20 cm}}.",
        "Chord {{AB = PB - PA = 20 - 5 = 15 cm}}.",
      ],
      difficulty: "core",
      guideRef: "tangents-alternate-chords",
      hints: ["Use {{PT^2 = PA * PB}} to find the whole secant {{PB}}.", "Subtract {{PA}} from {{PB}} to isolate {{AB}}."],
    },
  ],
  papers: [
    {
      id: "mensuration-circles-p1",
      title: "Practice Paper 1 — Mensuration, Scaling & Geometric Proof",
      questions: [
        {
          kind: "short",
          id: "mensuration-circles-p1-q01",
          question: "A sector of radius {{15 cm}} has central angle {{72°}}. Find its exact area in terms of {{pi}} (in {{cm^2}}).",
          answer: { type: "expression", expr: "45*pi", form: "simplified", display: "{{45 * pi}}" },
          traps: [{ spec: { type: "expression", expr: "6*pi" }, feedback: "{{6 * pi}} is the arc length — square the radius in {{(theta/360) * pi * r^2}}." }],
          solution: ["{{A = (72/360) * pi * 15^2 = (1/5) * 225 * pi = 45 * pi cm^2}}."],
          commonError: "Using {{2 * pi * r}} instead of {{pi * r^2}}.",
          difficulty: "warmup",
          guideRef: "sectors-segments",
          hints: ["Simplify {{72 / 360 = 1 / 5}} first."],
        },
        {
          kind: "short",
          id: "mensuration-circles-p1-q02",
          question:
            "Sector {{OAB}} has radius {{9 cm}} and central angle {{110°}}. Calculate the area of the minor segment cut off by chord {{AB}}, correct to 1 decimal place (in {{cm^2}}).",
          answer: { type: "number", value: 39.7, tolerance: 0.1 },
          traps: [
            { spec: { type: "number", value: 77.8, tolerance: 0.15 }, feedback: "That is the whole sector area — subtract triangle {{OAB}} ({{(1/2) * 9^2 * sin(110°)}})." },
          ],
          solution: [
            "Sector area {{= (110/360) * pi * 9^2 = 24.75 * pi = 77.754... cm^2}}.",
            "Triangle {{OAB}} area {{= (1/2) * 9 * 9 * sin(110°) = 38.058... cm^2}}.",
            "Minor segment {{= 77.754 - 38.058 = 39.7 cm^2}} (1 d.p.).",
          ],
          commonError: "Forgetting to subtract {{(1/2) * r^2 * sin(theta)}} or having the calculator in radians.",
          difficulty: "core",
          guideRef: "sectors-segments",
          hints: [
            "Find sector area {{(110/360) * pi * 81}}.",
            "Subtract isosceles triangle area {{(1/2) * 9 * 9 * sin(110°)}}.",
          ],
        },
        {
          kind: "short",
          id: "mensuration-circles-p1-q03",
          question:
            "A sector of radius {{12 cm}} has exact area {{54 * pi cm^2}}. Find the exact **perimeter** of this sector in terms of {{pi}} (in {{cm}}).",
          answer: { type: "expression", expr: "24 + 9*pi", form: "simplified", display: "{{24 + 9 * pi}}" },
          traps: [
            { spec: { type: "expression", expr: "9*pi" }, feedback: "{{9 * pi}} is the arc length — add {{2r = 24}} for the full sector perimeter." },
            { spec: { type: "expression", expr: "12 + 9*pi" }, feedback: "Add **both** radii ({{12 + 12 = 24}})." },
          ],
          solution: [
            "From {{(theta/360) * pi * 12^2 = 54 * pi}}, {{theta/360 = 54/144 = 3/8}} (so {{theta = 135°}}).",
            "Arc length {{= (3/8) * 2 * pi * 12 = 9 * pi cm}}.",
            "Perimeter {{= 24 + 9 * pi cm}}.",
          ],
          commonError: "Forgetting {{+ 2r}} after finding the arc length.",
          difficulty: "core",
          guideRef: "sectors-segments",
          hints: [
            "Use {{(theta/360) * 144 * pi = 54 * pi}} to find the fraction {{theta/360}}.",
            "Compute arc length {{(theta/360) * 2 * pi * 12}} and add {{2 * 12}}.",
          ],
        },
        {
          kind: "short",
          id: "mensuration-circles-p1-q04",
          question:
            "A solid cone has base radius {{7 cm}} and **slant height** {{25 cm}}. Find the exact **volume** of the cone in terms of {{pi}} (in {{cm^3}}).",
          answer: { type: "expression", expr: "392*pi", form: "simplified", display: "{{392 * pi}}" },
          traps: [
            { spec: { type: "expression", expr: "(1225/3)*pi" }, feedback: "{{25 cm}} is the slant height {{l}} — use Pythagoras {{h = sqrt(25^2 - 7^2) = 24 cm}} for volume!" },
            { spec: { type: "expression", expr: "1176*pi" }, feedback: "Don't forget the {{1/3}} in {{V = (1/3) * pi * r^2 * h}}." },
          ],
          solution: [
            "Vertical height {{h = sqrt(25^2 - 7^2) = sqrt(576) = 24 cm}}.",
            "Volume {{= (1/3) * pi * 7^2 * 24 = 49 * 8 * pi = 392 * pi cm^3}}.",
          ],
          commonError: "Substituting slant height {{l = 25}} directly into {{(1/3) * pi * r^2 * h}}.",
          difficulty: "core",
          guideRef: "cones-spheres-frustums",
          hints: [
            "Cone volume needs the **vertical** height {{h}}, not slant height {{l = 25}}.",
            "Use Pythagoras {{h = sqrt(25^2 - 7^2)}} first.",
          ],
        },
        {
          kind: "short",
          id: "mensuration-circles-p1-q05",
          question:
            "A **solid** hemisphere has total surface area {{243 * pi cm^2}}. Find its exact **volume** in terms of {{pi}} (in {{cm^3}}).",
          answer: { type: "expression", expr: "486*pi", form: "simplified", display: "{{486 * pi}}" },
          traps: [
            { spec: { type: "expression", expr: "972*pi" }, feedback: "{{972 * pi}} is the volume of a **whole** sphere — halve it ({{(2/3) * pi * r^3}}) for a hemisphere!" },
          ],
          solution: [
            "Total SA of a solid hemisphere is {{3 * pi * r^2 = 243 * pi}}, so {{r^2 = 81 => r = 9 cm}}.",
            "Hemisphere volume {{= (2/3) * pi * 9^3 = (2/3) * 729 * pi = 486 * pi cm^3}}.",
          ],
          commonError: "Setting {{2 * pi * r^2 = 243 * pi}} instead of {{3 * pi * r^2 = 243 * pi}}.",
          difficulty: "core",
          guideRef: "cones-spheres-frustums",
          hints: [
            "Remember a **solid** hemisphere has total surface area {{3 * pi * r^2}}.",
            "Solve {{3 * pi * r^2 = 243 * pi}} for {{r}}, then compute {{(2/3) * pi * r^3}}.",
          ],
        },
        {
          kind: "short",
          id: "mensuration-circles-p1-q06",
          question:
            "A frustum is made by slicing a small cone off the top of a similar large cone. The frustum has top radius {{4 cm}}, bottom radius {{8 cm}} and vertical height {{6 cm}}. Find its exact volume in terms of {{pi}} (in {{cm^3}}).",
          answer: { type: "expression", expr: "224*pi", form: "simplified", display: "{{224 * pi}}" },
          traps: [
            { spec: { type: "expression", expr: "256*pi" }, feedback: "{{256 * pi}} is the full large cone — subtract the removed top cone {{32 * pi}}!" },
            { spec: { type: "expression", expr: "128*pi" }, feedback: "A frustum is not a cone of height {{6 cm}} — find the full cone height {{H = 12 cm}} first." },
          ],
          solution: [
            "By similar triangles, {{4 / 8 = h / (h + 6) => h = 6 cm}} and {{H = 12 cm}}.",
            "{{V_\"large\" = (1/3) * pi * 8^2 * 12 = 256 * pi cm^3}} and {{V_\"small\" = (1/3) * pi * 4^2 * 6 = 32 * pi cm^3}}.",
            "{{V_\"frustum\" = 256 * pi - 32 * pi = 224 * pi cm^3}}.",
          ],
          commonError: "Using frustum height {{6 cm}} directly inside {{(1/3) * pi * R^2 * h}}.",
          difficulty: "core",
          guideRef: "cones-spheres-frustums",
          hints: [
            "Set up {{4 / 8 = h / (h + 6)}} to find the removed cone's height {{h}}.",
            "Subtract {{(1/3) * pi * 4^2 * h}} from {{(1/3) * pi * 8^2 * (h + 6)}}.",
          ],
        },
        {
          kind: "short",
          id: "mensuration-circles-p1-q07",
          question:
            "Two mathematically similar perfume bottles have heights {{8 cm}} and {{12 cm}}. The larger bottle has total surface area {{189 cm^2}}. Find the total surface area of the smaller bottle in {{cm^2}}.",
          answer: { type: "number", value: 84 },
          traps: [
            { spec: { type: "number", value: 126 }, feedback: "You multiplied by {{k = 2/3}} — surface area scales by {{k^2 = 4/9}}." },
          ],
          solution: [
            "Linear scale factor (large → small) is {{k = 8 / 12 = 2 / 3}}.",
            "Area scale factor {{k^2 = (2/3)^2 = 4 / 9}}.",
            "Smaller surface area {{= 189 * (4 / 9) = 84 cm^2}}.",
          ],
          commonError: "Scaling surface area by {{k}} instead of {{k^2}}.",
          difficulty: "core",
          guideRef: "area-volume-similarity",
          hints: ["Find linear ratio {{8 / 12 = 2 / 3}}.", "Multiply {{189}} by {{(2/3)^2 = 4/9}}."],
        },
        {
          kind: "short",
          id: "mensuration-circles-p1-q08",
          question:
            "Two mathematically similar clay pots made from the same uniform clay have surface areas {{48 cm^2}} and {{108 cm^2}}. The smaller pot has mass {{160 g}}. Find the mass of the larger pot in grams.",
          answer: { type: "number", value: 540 },
          traps: [
            { spec: { type: "number", value: 360 }, feedback: "{{360 g}} multiplies by {{k^2 = 9/4}} — mass (uniform density) scales with volume by {{k^3 = 27/8}}!" },
          ],
          solution: [
            "Area ratio {{k^2 = 108 / 48 = 9 / 4}}, so linear ratio {{k = sqrt(9/4) = 3 / 2}}.",
            "Volume/mass ratio {{k^3 = (3/2)^3 = 27 / 8}}.",
            "Mass of larger pot {{= 160 * (27 / 8) = 540 g}}.",
          ],
          commonError: "Multiplying mass by the area factor {{108/48}} instead of stepping via {{k}} to {{k^3}}.",
          difficulty: "core",
          guideRef: "area-volume-similarity",
          hints: [
            "Simplify {{108 / 48}} by dividing top and bottom by {{12}}.",
            "Take the square root for {{k}}, then cube {{k}} to scale mass.",
          ],
        },
        {
          kind: "short",
          id: "mensuration-circles-p1-q09",
          question:
            "Points {{A, B, C, D}} lie in order around a circle with centre {{O}} such that {{AC}} is a **diameter**. Given {{∠BAC = 28°}}, find {{∠ADB}} in degrees.",
          diagram:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 160" role="img" aria-label="Circle with horizontal diameter AC through centre O, point B on upper semicircle with angle BAC equal to 28 degrees, and point D on lower semicircle"><circle cx="110" cy="80" r="62" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><line x1="48" y1="80" x2="172" y2="80" stroke="#15803d" stroke-width="2"/><polygon points="48,80 144,28 172,80 110,142" fill="none" stroke="#1e293b" stroke-width="1.7"/><line x1="144" y1="28" x2="110" y2="142" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="4,3"/><circle cx="110" cy="80" r="2.6" fill="#0f172a"/><text x="35" y="84" font-size="12" font-weight="bold" fill="#0f172a">A</text><text x="148" y="24" font-size="12" font-weight="bold" fill="#0f172a">B</text><text x="177" y="84" font-size="12" font-weight="bold" fill="#0f172a">C</text><text x="106" y="156" font-size="12" font-weight="bold" fill="#0f172a">D</text><text x="110" y="73" font-size="11" font-weight="bold" fill="#0f172a">O</text><text x="76" y="75" font-size="10" font-weight="bold" fill="#1d4ed8">28°</text></svg>',
          answer: { type: "number", value: 62 },
          traps: [
            { spec: { type: "number", value: 28 }, feedback: "{{28°}} is {{∠BDC}} (standing on arc {{BC}}) — {{∠ADB}} stands on arc {{AB}}!" },
          ],
          solution: [
            "Since {{AC}} is a diameter, {{∠ABC = 90°}} (angle in a semicircle).",
            "In {{△ABC}}, {{∠ACB = 180° - 90° - 28° = 62°}}.",
            "Angles in the same segment (subtended by chord {{AB}}) give {{∠ADB = ∠ACB = 62°}}.",
          ],
          commonError: "Matching the wrong pair of same-segment angles across the diagonals.",
          difficulty: "core",
          guideRef: "circle-theorems-angles",
          hints: [
            "Use diameter {{AC}} to spot {{∠ABC = 90°}} and find {{∠ACB}}.",
            "Notice {{∠ACB}} and {{∠ADB}} both stand on chord {{AB}}.",
          ],
        },
        {
          kind: "short",
          id: "mensuration-circles-p1-q10",
          question:
            "From an external point {{P}}, tangent {{PT}} touches a circle at {{T}} and secant {{PAB}} cuts the circle at {{A}} and {{B}} ({{A}} closer to {{P}}). Given {{PA = 9 cm}} and {{AB = 7 cm}}, find the length of tangent {{PT}} in {{cm}}.",
          answer: { type: "number", value: 12 },
          traps: [
            { spec: { type: "number", value: 144 }, feedback: "{{144}} is {{PT^2}} — take the square root!" },
            { spec: { type: "number", value: 7.9, tolerance: 0.1 }, feedback: "Use {{PB = PA + AB = 16 cm}}, not {{AB = 7 cm}}, inside {{PT^2 = PA * PB}}." },
          ],
          solution: [
            "Whole secant length {{PB = PA + AB = 9 + 7 = 16 cm}}.",
            "Using {{PT^2 = PA * PB}}: {{PT^2 = 9 * 16 = 144 => PT = 12 cm}}.",
          ],
          commonError: "Computing {{PT^2 = 9 * 7}} instead of {{9 * (9 + 7)}}.",
          difficulty: "core",
          guideRef: "tangents-alternate-chords",
          hints: [
            "Find the full distance from {{P}} to {{B}}: {{PB = 9 + 7}}.",
            "Apply {{PT^2 = PA * PB}} and take the positive square root.",
          ],
        },
        {
          kind: "short",
          id: "mensuration-circles-p1-q11",
          question:
            "Chords {{AB}} and {{CD}} intersect inside a circle at {{P}}. Given {{AP = x cm}}, {{PB = (x + 5) cm}}, {{CP = 4 cm}} and {{PD = 9 cm}}, find the value of {{x}}.",
          answer: { type: "number", value: 4 },
          traps: [
            { spec: { type: "number", value: 9 }, feedback: "Check your signs when factorising {{x^2 + 5x - 36 = (x + 9)(x - 4) = 0}}." },
          ],
          solution: [
            "By intersecting chords {{AP * PB = CP * PD}}: {{x(x + 5) = 4 * 9 = 36}}.",
            "{{x^2 + 5x - 36 = 0 => (x + 9)(x - 4) = 0}}.",
            "Since length {{x > 0}}, {{x = 4}}.",
          ],
          commonError: "Picking the unsigned negative root {{9}} from {{(x + 9)(x - 4) = 0}}.",
          difficulty: "core",
          guideRef: "tangents-alternate-chords",
          hints: [
            "Set up {{x(x + 5) = 4 * 9}}.",
            "Rearrange to {{x^2 + 5x - 36 = 0}} and factorise.",
          ],
        },
        {
          kind: "written",
          id: "mensuration-circles-p1-q12",
          question:
            "Points {{A, B, C, D}} lie on a circle with centre {{O}}, with {{C}} on the major arc {{AB}} and {{D}} on the minor arc {{AB}}. Given {{∠OAB = 27°}}, work out {{∠ADB}}, stating a geometric reason for every step.",
          marks: 4,
          modelAnswer:
            "Since {{OA = OB}} because radii are equal, triangle {{OAB}} is isosceles so {{∠OBA = 27°}} and {{∠AOB = 180° - 54° = 126°}}. Next, {{∠ACB = 126° / 2 = 63°}} because the angle at the centre is twice the angle at the circumference. Finally, {{ABCD}} is a cyclic quadrilateral, and opposite angles of a cyclic quadrilateral sum to {{180°}}, giving {{∠ADB = 180° - 63° = 117°}}.",
          markScheme: [
            {
              point: "Uses equal radii / isosceles triangle OAB to obtain ∠AOB = 126°",
              keywords: ["126", "isosceles", "radii"],
            },
            {
              point: "Calculates ∠ACB = 63° (or reflex ∠AOB = 234°)",
              keywords: ["63", "234"],
            },
            {
              point: "Quotes exact circle theorem wording ('angle at the centre is twice the angle at the circumference' / 'opposite angles of a cyclic quadrilateral sum to 180°')",
              keywords: ["twice", "circumference", "cyclic quadrilateral"],
            },
            {
              point: "Correct final answer ∠ADB = 117°",
              keywords: ["117"],
            },
          ],
          commonError: "Writing {{∠ADB = 180° - 126° = 54°}} by treating centre {{O}} as if it were a circumference vertex of a cyclic quadrilateral.",
          difficulty: "core",
          guideRef: "circle-theorems-angles",
          hints: [
            "Use {{OA = OB}} (equal radii) to find {{∠AOB}} in isosceles {{△OAB}}.",
            "Halve {{∠AOB}} for {{∠ACB}}, then use cyclic quadrilateral {{ABCD}} for {{∠ADB}}.",
          ],
        },
        {
          kind: "written",
          id: "mensuration-circles-p1-q13",
          question:
            "A solid metal sculpture consists of a cylinder of radius {{r}} and height {{10r}} joined to a hemisphere of radius {{r}}. The entire sculpture is melted down and recast into a single solid sphere of radius {{R}}. Prove algebraically that {{R}} is exactly double {{r}}.",
          marks: 4,
          modelAnswer:
            "Cylinder volume is {{pi * r^2 * (10r) = 10 * pi * r^3}} and hemisphere volume is {{(2/3) * pi * r^3}}. Adding both parts gives total volume {{(30/3 + 2/3) * pi * r^3 = (32/3) * pi * r^3}}. Equating this to the new sphere's volume {{(4/3) * pi * R^3}} gives {{(4/3) * pi * R^3 = (32/3) * pi * r^3}}, which simplifies to {{R^3 = 8r^3}}. Taking the cube root yields {{R = 2r}}.",
          markScheme: [
            {
              point: "Writes correct expressions 10πr³ (cylinder) and (2/3)πr³ (hemisphere)",
              keywords: ["2/3", "10*pi", "10π", "30/3"],
            },
            {
              point: "Combines volumes to obtain (32/3)πr³",
              keywords: ["32/3"],
            },
            {
              point: "Equates to sphere volume (4/3)πR³ and simplifies to R³ = 8r³",
              keywords: ["4/3", "8r^3", "8r³"],
            },
            {
              point: "Takes the cube root to conclude R = 2r",
              keywords: ["2r", "cube root", "cbrt"],
            },
          ],
          commonError: "Using {{(4/3) * pi * r^3}} instead of {{(2/3) * pi * r^3}} for the hemisphere.",
          difficulty: "challenge",
          guideRef: "cones-spheres-frustums",
          hints: [
            "Write the cylinder volume {{pi * r^2 * (10r)}} and hemisphere volume {{(2/3) * pi * r^3}} over a common denominator of {{3}}.",
            "Set the total equal to {{(4/3) * pi * R^3}} and cancel {{pi}}.",
            "Isolate {{R^3}} and take the cube root.",
          ],
        },
        {
          kind: "written",
          id: "mensuration-circles-p1-q14",
          question:
            "Line {{PAQ}} is a tangent at {{A}} to a circle. Points {{B}} and {{C}} lie on the circle so that chord {{BC}} is parallel to {{PAQ}}. Prove that triangle {{ABC}} is isosceles, giving geometric reasons.",
          marks: 3,
          modelAnswer:
            "Let {{∠PAB = x}} (with {{P}} on the {{B}} side of {{A}}). Because {{BC}} is parallel to {{PAQ}}, {{∠ABC = x}} since alternate angles are equal. By the alternate segment theorem, {{∠ACB = ∠PAB = x}}. Hence {{∠ABC = ∠ACB}}, so triangle {{ABC}} has two equal base angles ({{AB = AC}}) and is therefore isosceles.",
          markScheme: [
            {
              point: "Uses parallel lines to deduce ∠ABC = ∠PAB (alternate angles are equal)",
              keywords: ["alternate angles", "∠pab", "angle pab"],
            },
            {
              point: "Uses the alternate segment theorem to deduce ∠ACB = ∠PAB",
              keywords: ["alternate segment"],
            },
            {
              point: "Concludes ∠ABC = ∠ACB (two equal base angles / AB = AC)",
              keywords: ["ab = ac", "base angles", "∠abc = ∠acb", "equal angles"],
            },
          ],
          commonError: "Assuming {{OA}} bisects {{BC}} without first proving the angles at {{B}} and {{C}} are equal.",
          difficulty: "challenge",
          guideRef: "tangents-alternate-chords",
          hints: [
            "Label the acute angle {{∠PAB = x}} between tangent {{PAQ}} and chord {{AB}}.",
            "Use parallel lines ({{BC ∥ PAQ}}) to find {{∠ABC}}, and the alternate segment theorem to find {{∠ACB}}.",
            "Compare {{∠ABC}} and {{∠ACB}}.",
          ],
        },
      ],
    },
    {
      id: "mensuration-circles-p2",
      title: "Practice Paper 2 — Frustums, Composite Solids & Circle Chords",
      questions: [
        {
          kind: "short",
          id: "mensuration-circles-p2-q01",
          question:
            "A sector of a circle of radius {{18 cm}} has arc length {{9 * pi cm}}. Find the central angle of the sector in degrees.",
          answer: { type: "number", value: 90 },
          traps: [{ spec: { type: "number", value: 180 }, feedback: "Circumference is {{2 * pi * r = 36 * pi}}, not {{18 * pi}}." }],
          solution: ["{{(theta/360) * 2 * pi * 18 = 9 * pi => (theta/360) * 36 = 9 => theta = 90°}}."],
          commonError: "Forgetting the factor {{2}} in {{2 * pi * r}}.",
          difficulty: "warmup",
          guideRef: "sectors-segments",
          hints: ["Full circumference is {{2 * pi * 18 = 36 * pi cm}}. What fraction of {{36 * pi}} is {{9 * pi}}?"],
        },
        {
          kind: "short",
          id: "mensuration-circles-p2-q02",
          question:
            "Sector {{OAB}} has radius {{12 cm}} and central angle {{75°}}. Calculate the **perimeter** of the sector in {{cm}}, correct to 1 decimal place.",
          answer: { type: "number", value: 39.7, tolerance: 0.1 },
          traps: [
            { spec: { type: "number", value: 15.7, tolerance: 0.1 }, feedback: "{{15.7 cm}} is only the curved arc — add {{2r = 24 cm}}!" },
          ],
          solution: [
            "Arc length {{= (75/360) * 2 * pi * 12 = 5 * pi = 15.708... cm}}.",
            "Perimeter {{= 15.708 + 24 = 39.7 cm}} (1 d.p.).",
          ],
          commonError: "Omitting the two straight radii {{OA + OB = 24 cm}}.",
          difficulty: "core",
          guideRef: "sectors-segments",
          hints: ["Calculate {{(75/360) * 24 * pi}}.", "Add {{12 + 12 = 24}} for the straight radii."],
        },
        {
          kind: "short",
          id: "mensuration-circles-p2-q03",
          question:
            "Two identical circles, each of radius {{6 cm}} and centres {{P}} and {{Q}}, overlap so that each circle passes through the centre of the other. If {{A}} and {{B}} are the two points where the circles intersect, find {{∠APB}} in degrees.",
          answer: { type: "number", value: 120 },
          traps: [{ spec: { type: "number", value: 60 }, feedback: "{{60°}} is {{∠APQ}} in one equilateral triangle — double it for {{∠APB}}!" }],
          solution: [
            "Since {{PA = QA = PQ = 6 cm}}, {{△PAQ}} is equilateral, so {{∠APQ = 60°}}.",
            "By symmetry {{△PBQ}} is also equilateral with {{∠BPQ = 60°}}, so {{∠APB = 120°}}.",
          ],
          commonError: "Giving {{60°}} instead of combining both equilateral triangles.",
          difficulty: "core",
          guideRef: "sectors-segments",
          hints: [
            "Compare the lengths {{PA}}, {{QA}} and {{PQ}} — all three are radii of {{6 cm}}!",
            "Combine {{∠APQ}} and {{∠BPQ}}.",
          ],
        },
        {
          kind: "short",
          id: "mensuration-circles-p2-q04",
          question:
            "An open conical paper cup has rim **diameter** {{10 cm}} and vertical depth {{12 cm}}. Calculate the curved surface area of paper in the cup, correct to 1 decimal place (in {{cm^2}}).",
          answer: { type: "number", value: 204.2, tolerance: 0.15 },
          traps: [
            { spec: { type: "number", value: 188.5, tolerance: 0.15 }, feedback: "Use slant height {{l = sqrt(5^2 + 12^2) = 13 cm}}, not vertical depth {{12 cm}}." },
            { spec: { type: "number", value: 282.7, tolerance: 0.15 }, feedback: "An open cup has no circular lid — compute {{pi * r * l}} only!" },
          ],
          solution: [
            "Radius {{r = 5 cm}}, slant height {{l = sqrt(5^2 + 12^2) = 13 cm}}.",
            "Curved SA {{= pi * 5 * 13 = 65 * pi = 204.2 cm^2}} (1 d.p.).",
          ],
          commonError: "Forgetting to halve diameter {{10 cm}} or using {{h = 12}} instead of {{l = 13}}.",
          difficulty: "core",
          guideRef: "cones-spheres-frustums",
          hints: ["Radius {{r = 5 cm}}; find slant height {{l = sqrt(5^2 + 12^2)}}.", "Evaluate {{pi * r * l}}."],
        },
        {
          kind: "short",
          id: "mensuration-circles-p2-q05",
          question:
            "A grain silo consists of a vertical cylinder of radius {{3 m}} and height {{8 m}} capped by a hemisphere of radius {{3 m}}. Find the exact **total volume** of the silo in terms of {{pi}} (in {{m^3}}).",
          answer: { type: "expression", expr: "90*pi", form: "simplified", display: "{{90 * pi}}" },
          traps: [
            { spec: { type: "expression", expr: "108*pi" }, feedback: "The cap is a **hemisphere** ({{(2/3) * pi * r^3 = 18 * pi}}), not a full sphere ({{36 * pi}})." },
          ],
          solution: [
            "Cylinder volume {{= pi * 3^2 * 8 = 72 * pi m^3}}.",
            "Hemisphere volume {{= (2/3) * pi * 3^3 = 18 * pi m^3}}.",
            "Total volume {{= 72 * pi + 18 * pi = 90 * pi m^3}}.",
          ],
          commonError: "Adding {{(4/3) * pi * r^3}} instead of {{(2/3) * pi * r^3}}.",
          difficulty: "core",
          guideRef: "cones-spheres-frustums",
          hints: [
            "Compute the cylinder volume {{pi * 3^2 * 8}} in terms of {{pi}}.",
            "Add the hemisphere volume {{(2/3) * pi * 3^3}}.",
          ],
        },
        {
          kind: "short",
          id: "mensuration-circles-p2-q06",
          question:
            "A **solid** frustum of a cone has top radius {{5 cm}}, bottom radius {{15 cm}} and vertical height {{24 cm}}. Find its exact **total** surface area (curved face plus both circular ends) in terms of {{pi}} (in {{cm^2}}).",
          answer: { type: "expression", expr: "770*pi", form: "simplified", display: "{{770 * pi}}" },
          traps: [
            { spec: { type: "expression", expr: "520*pi" }, feedback: "{{520 * pi}} is only the curved surface — add both circular ends ({{25 * pi + 225 * pi}})!" },
          ],
          solution: [
            "Since {{r : R = 5 : 15 = 1 : 3}}, {{h / (h + 24) = 1 / 3 => h = 12 cm}} and {{H = 36 cm}}.",
            "Small slant {{l = sqrt(5^2 + 12^2) = 13 cm}} and large slant {{L = 3 * 13 = 39 cm}}.",
            "Curved SA {{= pi * 15 * 39 - pi * 5 * 13 = 585 * pi - 65 * pi = 520 * pi cm^2}}.",
            "Add top ({{25 * pi}}) and bottom ({{225 * pi}}): {{520 * pi + 250 * pi = 770 * pi cm^2}}.",
          ],
          commonError: "Leaving out one or both circular ends in the total surface area of a solid frustum.",
          difficulty: "challenge",
          guideRef: "cones-spheres-frustums",
          hints: [
            "Use {{5 / 15 = h / (h + 24)}} to find {{h = 12 cm}}, then find slant heights {{l = 13 cm}} and {{L = 39 cm}}.",
            "Curved area is {{pi * R * L - pi * r * l}}.",
            "Add {{pi * 5^2 + pi * 15^2}} for the top and base discs.",
          ],
        },
        {
          kind: "short",
          id: "mensuration-circles-p2-q07",
          question:
            "Two mathematically similar lunchboxes have capacities {{500 ml}} and {{108 ml}}. The larger lunchbox has length {{25 cm}}. Find the length of the smaller lunchbox in {{cm}}.",
          answer: { type: "number", value: 15 },
          traps: [{ spec: { type: "number", value: 5.4 }, feedback: "Take the **cube root** of {{108 / 500 = 27 / 125}} to get the length scale factor {{3/5}}!" }],
          solution: [
            "Volume ratio {{k^3 = 108 / 500 = 27 / 125}}.",
            "Linear ratio {{k = cbrt(27 / 125) = 3 / 5}}.",
            "Length {{= 25 * (3 / 5) = 15 cm}}.",
          ],
          commonError: "Not dividing {{108}} and {{500}} by {{4}} to uncover the cubes {{27}} and {{125}}.",
          difficulty: "core",
          guideRef: "area-volume-similarity",
          hints: ["Simplify {{108 / 500}} by dividing by {{4}}.", "Take the cube root to find {{k}}."],
        },
        {
          kind: "short",
          id: "mensuration-circles-p2-q08",
          question:
            "A pyramid is sliced parallel to its base so that the sloping surface area of the top small pyramid is {{4/25}} of the sloping surface area of the whole pyramid. Given that the bottom **frustum** has volume {{351 cm^3}}, find the volume of the top small pyramid in {{cm^3}}.",
          answer: { type: "number", value: 24 },
          traps: [
            { spec: { type: "number", value: 22.5, tolerance: 0.1 }, feedback: "{{351 cm^3}} is the **frustum** ({{125 - 8 = 117}} parts), not the whole pyramid ({{125}} parts)!" },
          ],
          solution: [
            "From {{k^2 = 4/25}}, {{k = 2/5}} and {{k^3 = 8/125}}.",
            "Small pyramid : frustum volume ratio {{= 8 : (125 - 8) = 8 : 117}}.",
            "One part {{= 351 / 117 = 3 cm^3}}, so small pyramid volume {{= 8 * 3 = 24 cm^3}}.",
          ],
          commonError: "Multiplying {{351}} by {{8/125}} instead of {{8/(125 - 8)}}.",
          difficulty: "challenge",
          guideRef: "area-volume-similarity",
          hints: [
            "Find {{k = sqrt(4/25) = 2/5}} and {{k^3 = 8/125}}.",
            "If the whole pyramid is {{125}} parts and the top pyramid is {{8}} parts, how many parts is the frustum?",
            "Divide {{351}} by {{117}} and multiply by {{8}}.",
          ],
        },
        {
          kind: "short",
          id: "mensuration-circles-p2-q09",
          question:
            "Points {{A, B, C, D}} lie in order around a circle with centre {{O}}. Given that obtuse {{∠BCD = 128°}}, find the non-reflex central angle {{∠BOD}} in degrees.",
          answer: { type: "number", value: 104 },
          traps: [
            { spec: { type: "number", value: 52 }, feedback: "{{52°}} is {{∠BAD}} at the circumference — double it for {{∠BOD}} at the centre!" },
            { spec: { type: "number", value: 256 }, feedback: "{{256°}} is the reflex angle at {{O}} — subtract from {{360°}} for the non-reflex {{∠BOD}}." },
          ],
          solution: [
            "In cyclic quadrilateral {{ABCD}}, {{∠BAD = 180° - 128° = 52°}}.",
            "Angle at the centre is twice the angle at the circumference: {{∠BOD = 2 * 52° = 104°}}.",
          ],
          commonError: "Doubling {{128°}} to {{256°}} without subtracting from {{360°}}.",
          difficulty: "core",
          guideRef: "circle-theorems-angles",
          hints: [
            "Use cyclic quadrilateral {{ABCD}} to find acute {{∠BAD}} first.",
            "Double {{∠BAD}} to get {{∠BOD}}.",
          ],
        },
        {
          kind: "short",
          id: "mensuration-circles-p2-q10",
          question:
            "From an external point {{P}}, secant {{PAB}} ({{A}} between {{P}} and {{B}}) and secant {{PCD}} ({{C}} between {{P}} and {{D}}) cut a circle. Given {{PA = 6 cm}}, {{AB = 9 cm}} and {{PC = 5 cm}}, find the chord length {{CD}} in {{cm}}.",
          diagram:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 155" role="img" aria-label="External point P with two secants PAB and PCD cutting a circle, PA equals 6, AB equals 9, PC equals 5"><circle cx="165" cy="78" r="54" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/><line x1="22" y1="88" x2="212" y2="51" stroke="#1d4ed8" stroke-width="2"/><line x1="22" y1="88" x2="208" y2="111" stroke="#dc2626" stroke-width="2"/><circle cx="113" cy="70" r="2.8" fill="#1d4ed8"/><circle cx="212" cy="51" r="2.8" fill="#1d4ed8"/><circle cx="115" cy="99" r="2.8" fill="#dc2626"/><circle cx="208" cy="111" r="2.8" fill="#dc2626"/><text x="10" y="93" font-size="12" font-weight="bold" fill="#0f172a">P</text><text x="108" y="61" font-size="11" font-weight="bold" fill="#1d4ed8">A</text><text x="217" y="52" font-size="11" font-weight="bold" fill="#1d4ed8">B</text><text x="110" y="116" font-size="11" font-weight="bold" fill="#dc2626">C</text><text x="213" y="116" font-size="11" font-weight="bold" fill="#dc2626">D</text><text x="66" y="72" font-size="10" fill="#1e3a8a" font-weight="bold">6</text><text x="162" y="55" font-size="10" fill="#1e3a8a" font-weight="bold">9</text><text x="68" y="108" font-size="10" fill="#991b1b" font-weight="bold">5</text></svg>',
          answer: { type: "number", value: 13 },
          traps: [
            { spec: { type: "number", value: 18 }, feedback: "{{18 cm}} is the full secant {{PD}} — subtract {{PC = 5 cm}} to get {{CD}}!" },
            { spec: { type: "number", value: 10.8 }, feedback: "Measure from {{P}}: use {{PA * PB = 6 * 15}}, not {{6 * 9}}." },
          ],
          solution: [
            "{{PB = PA + AB = 6 + 9 = 15 cm}}.",
            "Using {{PA * PB = PC * PD}}: {{6 * 15 = 5 * PD => PD = 18 cm}}.",
            "Chord {{CD = PD - PC = 18 - 5 = 13 cm}}.",
          ],
          commonError: "Writing {{6 * 9 = 5 * CD}} instead of {{6 * (6 + 9) = 5 * (5 + CD)}}.",
          difficulty: "core",
          guideRef: "tangents-alternate-chords",
          hints: ["Find {{PB = 6 + 9 = 15 cm}} first.", "Solve {{6 * 15 = 5 * PD}}, then compute {{PD - 5}}."],
        },
        {
          kind: "short",
          id: "mensuration-circles-p2-q11",
          question:
            "Tangents {{PA}} and {{PB}} from external point {{P}} touch a circle at {{A}} and {{B}}, and point {{C}} lies on the **minor** arc {{AB}} (the arc closer to {{P}}). Given {{∠APB = 50°}}, find {{∠ACB}} in degrees.",
          answer: { type: "number", value: 115 },
          traps: [
            { spec: { type: "number", value: 65 }, feedback: "{{65°}} is the angle on the **major** arc — {{C}} lies on the minor arc, so {{∠ACB = 180° - 65° = 115°}}!" },
          ],
          solution: [
            "With centre {{O}}, {{∠AOB = 180° - 50° = 130°}} (since {{∠OAP = ∠OBP = 90°}}).",
            "A point {{D}} on the major arc has {{∠ADB = 130° / 2 = 65°}}.",
            "By cyclic quadrilateral {{ACBD}}, {{∠ACB = 180° - 65° = 115°}}.",
          ],
          commonError: "Giving the acute angle {{65°}} on the major arc instead of the obtuse angle on the minor arc.",
          difficulty: "core",
          guideRef: "tangents-alternate-chords",
          hints: [
            "Find {{∠AOB = 180° - 50° = 130°}}.",
            "Since {{C}} is on the minor arc, {{∠ACB}} is half the **reflex** angle at {{O}} ({{360° - 130°}}).",
          ],
        },
        {
          kind: "written",
          id: "mensuration-circles-p2-q12",
          question:
            "A frustum is made by slicing a small cone off the top of a mathematically similar large cone. The frustum has top radius {{4 cm}}, base radius {{12 cm}} and vertical height {{12 cm}}. Show clearly that the exact volume of the frustum is {{832 * pi cm^3}}.",
          marks: 4,
          modelAnswer:
            "Let the removed top cone have height {{h}}, so the full cone has height {{h + 12}}. Equating radius and height ratios gives {{4 / 12 = h / (h + 12)}}, so {{3h = h + 12}}, giving {{h = 6 cm}} and full height {{H = 18 cm}}. Large cone volume is {{(1/3) * pi * 12^2 * 18 = 864 * pi cm^3}}, and small cone volume is {{(1/3) * pi * 4^2 * 6 = 32 * pi cm^3}}. Subtracting gives {{864 * pi - 32 * pi = 832 * pi cm^3}}.",
          markScheme: [
            {
              point: "Sets up similar-triangle proportion 4/12 = h/(h + 12) (or 3h = h + 12)",
              keywords: ["h + 12", "3h", "1/3"],
            },
            {
              point: "Finds small cone height h = 6 cm and full cone height H = 18 cm",
              keywords: ["= 6", "6 cm", "18"],
            },
            {
              point: "Evaluates large cone volume = 864π",
              keywords: ["864"],
            },
            {
              point: "Evaluates small cone volume = 32π and subtracts 864π − 32π = 832π",
              keywords: ["32"],
            },
          ],
          commonError: "Working backwards from {{832 * pi}} instead of deriving {{h = 6}} and {{H = 18}} independently from similar triangles.",
          difficulty: "core",
          guideRef: "cones-spheres-frustums",
          hints: [
            "Write {{4 / 12 = h / (h + 12)}} and solve for {{h}}.",
            "Compute both cone volumes {{(1/3) * pi * R^2 * H}} and {{(1/3) * pi * r^2 * h}} separately in terms of {{pi}}.",
          ],
        },
        {
          kind: "written",
          id: "mensuration-circles-p2-q13",
          question:
            "Two mathematically similar storage tanks {{A}} and {{B}} have total surface areas {{75 m^2}} and {{192 m^2}}. A pump flowing at a constant rate fills tank {{A}} in {{125 minutes}}. Work out how many minutes the same pump takes to fill tank {{B}}, showing every scale factor.",
          marks: 3,
          modelAnswer:
            "Dividing by {{3}}, the area ratio is {{k^2 = 192 / 75 = 64 / 25}}, so the linear scale factor is {{k = sqrt(64/25) = 8/5 = 1.6}}. Cubing gives the volume scale factor {{k^3 = (8/5)^3 = 4.096}}. Since filling time is proportional to volume, tank {{B}} takes {{125 * (512 / 125) = 512 minutes}}.",
          markScheme: [
            {
              point: "Simplifies 192/75 = 64/25 and takes square root to find k = 8/5 (or 1.6)",
              keywords: ["8/5", "1.6", "64/25"],
            },
            {
              point: "Cubes k to find volume scale factor k³ = (8/5)³ = 4.096 (or 512/125)",
              keywords: ["4.096", "512/125", "512 / 125", "k^3"],
            },
            {
              point: "Obtains filling time = 512 minutes",
              keywords: ["512 minutes", "= 512"],
            },
          ],
          commonError: "Multiplying {{125}} by the area factor {{192/75 = 2.56}} to get {{320 minutes}}.",
          difficulty: "core",
          guideRef: "area-volume-similarity",
          hints: [
            "Simplify {{192 / 75}} first, then take the square root to get {{k}}.",
            "Filling time depends on **volume**, so multiply {{125}} by {{k^3}}.",
          ],
        },
        {
          kind: "written",
          id: "mensuration-circles-p2-q14",
          question:
            "{{AB}} is a diameter of a circle with centre {{O}}. Point {{C}} lies on the circle, and the tangent at {{C}} meets line {{AB}} extended past {{B}} at {{P}}. Given {{∠CAB = 26°}}, calculate {{∠BPC}}, giving a geometric reason for every step.",
          marks: 4,
          modelAnswer:
            "Using arc {{BC}}, {{∠BOC = 2 * 26° = 52°}} because the angle at the centre is twice the angle at the circumference (or via isosceles triangle {{OAC}} with equal radii). Next, {{∠OCP = 90°}} because a tangent is perpendicular to the radius at the point of contact. In triangle {{OCP}}, angles sum to {{180°}}, so {{∠BPC = 180° - 90° - 52° = 38°}}.",
          markScheme: [
            {
              point: "Finds ∠BOC = 52° (or ∠CBA = 64° via semicircle)",
              keywords: ["52", "64"],
            },
            {
              point: "States circle theorem reason ('angle at the centre is twice the angle at the circumference', 'isosceles', or 'semicircle')",
              keywords: ["twice", "isosceles", "semicircle"],
            },
            {
              point: "Uses ∠OCP = 90° stating 'tangent is perpendicular to the radius' (or alternate segment theorem)",
              keywords: ["perpendicular", "90", "alternate segment"],
            },
            {
              point: "Correct final angle ∠BPC = 38°",
              keywords: ["38"],
            },
          ],
          commonError: "Assuming {{∠BCP = 90°}} instead of {{∠OCP = 90°}}.",
          difficulty: "challenge",
          guideRef: "circle-theorems-angles",
          hints: [
            "Draw radius {{OC}}! What is {{∠BOC}} by *angle at the centre = 2 × angle at the circumference*?",
            "What is {{∠OCP}} between radius {{OC}} and tangent {{CP}}?",
            "Use the angle sum of right-angled triangle {{OCP}}.",
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      kind: "short",
      id: "mensuration-circles-ch-q01",
      question:
        "Three identical coins, each of radius {{4 cm}}, lie flat on a table so that every coin touches the other two externally. Find the exact area of the curved gap enclosed between the three coins in terms of {{pi}} and {{sqrt(3)}} (in {{cm^2}}).",
      commonError: "Subtracting three whole circles (or three 90° quarter-circles) instead of three 60° sectors, which together make one half-circle 8π.",
      answer: {
        type: "expression",
        expr: "16*sqrt(3) - 8*pi",
        form: "simplified",
        display: "{{16 * sqrt(3) - 8 * pi}}",
      },
      solution: [
        "Joining the three coin centres forms an equilateral triangle of side {{4 + 4 = 8 cm}}.",
        "Triangle area {{= (1/2) * 8 * 8 * sin(60°) = 32 * (sqrt(3)/2) = 16 * sqrt(3) cm^2}}.",
        "Inside the triangle sit three {{60°}} sectors of radius {{4 cm}} ({{180°}} total = half a circle): {{(1/2) * pi * 4^2 = 8 * pi cm^2}}.",
        "Enclosed gap {{= 16 * sqrt(3) - 8 * pi cm^2}}.",
      ],
      difficulty: "challenge",
      guideRef: "sectors-segments",
      hints: [
        "Join the centres of the three coins — what kind of triangle of side {{8 cm}} do they form?",
        "Find the exact area of that equilateral triangle using {{(1/2) * 8 * 8 * sin(60°)}}.",
        "Subtract the three {{60°}} coin sectors (which combine into one semicircle of radius {{4 cm}}).",
      ],
      strategy: "Join the centres of touching circles",
    },
    {
      kind: "short",
      id: "mensuration-circles-ch-q02",
      question:
        "A flat sector of radius {{13 cm}} has arc length {{10 * pi cm}}. Its two straight edges are joined cleanly without overlap to form a hollow cone. Find the exact **volume** of this cone in terms of {{pi}} (in {{cm^3}}).",
      commonError: "Using the sector radius 13 cm as the cone's base radius — it becomes the slant height l, so r = 5 and h = √(13² − 5²) = 12.",
      answer: { type: "expression", expr: "100*pi", form: "simplified", display: "{{100 * pi}}" },
      solution: [
        "The arc {{10 * pi cm}} becomes the base circumference {{2 * pi * r}}, so base radius {{r = 5 cm}}.",
        "The sector's radius {{13 cm}} becomes the cone's **slant height** {{l = 13 cm}}.",
        "Vertical height {{h = sqrt(13^2 - 5^2) = 12 cm}}.",
        "Cone volume {{= (1/3) * pi * 5^2 * 12 = 100 * pi cm^3}}.",
      ],
      difficulty: "challenge",
      guideRef: "cones-spheres-frustums",
      hints: [
        "Equate {{2 * pi * r = 10 * pi}} to find the cone's base radius {{r}}.",
        "The sector radius {{13 cm}} is the cone's slant height {{l}}, NOT its vertical height!",
        "Use Pythagoras to find {{h}}, then apply {{V = (1/3) * pi * r^2 * h}}.",
      ],
      strategy: "Track 2D net lengths onto 3D dimensions",
    },
    {
      kind: "short",
      id: "mensuration-circles-ch-q03",
      question:
        "A solid sphere of radius {{6 cm}} fits snugly inside a closed hollow cylinder, touching the base, the lid and the curved side wall. Water is poured in to fill all the empty space inside the cylinder around the sphere. Find the exact volume of water in terms of {{pi}} (in {{cm^3}}).",
      commonError: "Taking the cylinder height as 6 cm (the radius) instead of the sphere's diameter 12 cm.",
      answer: { type: "expression", expr: "144*pi", form: "simplified", display: "{{144 * pi}}" },
      solution: [
        "The cylinder has radius {{r = 6 cm}} and height {{h = 2 * 6 = 12 cm}}, so {{V_\"cyl\" = pi * 6^2 * 12 = 432 * pi cm^3}}.",
        "Sphere volume {{= (4/3) * pi * 6^3 = 288 * pi cm^3}}.",
        "Empty water space {{= 432 * pi - 288 * pi = 144 * pi cm^3}} (exactly one third of the cylinder!).",
      ],
      difficulty: "challenge",
      guideRef: "cones-spheres-frustums",
      hints: [
        "If a sphere of radius {{6 cm}} touches both top and bottom of the cylinder, what is the cylinder's height?",
        "Compute {{V_\"cyl\" = pi * 6^2 * 12}} and {{V_\"sphere\" = (4/3) * pi * 6^3}}.",
        "Subtract the sphere from the cylinder.",
      ],
      strategy: "Complementary volume subtraction",
    },
    {
      kind: "short",
      id: "mensuration-circles-ch-q04",
      question:
        "A solid cone is sliced by **two** planes parallel to its base, dividing its vertical height into three equal layers (top mini-cone, middle frustum, bottom frustum). Given that the **middle frustum** has volume {{56 cm^3}}, find the volume of the **bottom frustum** in {{cm^3}}.",
      commonError: "Splitting the volume in the height ratio 1 : 1 : 1 instead of the cubed ratio 1 : 8 : 27, giving layer volumes 1 : 7 : 19.",
      answer: { type: "number", value: 152 },
      solution: [
        "The three cumulative cones measured from the apex have linear heights {{1 : 2 : 3}}, so their volumes are in the ratio {{1^3 : 2^3 : 3^3 = 1 : 8 : 27}}.",
        "Subtracting consecutive cones gives the three layers' volume ratio {{1 : (8 - 1) : (27 - 8) = 1 : 7 : 19}}.",
        "Since {{7}} parts {{= 56 cm^3}}, {{1}} part {{= 8 cm^3}}, so the bottom frustum ({{19}} parts) has volume {{19 * 8 = 152 cm^3}}.",
      ],
      difficulty: "challenge",
      guideRef: "area-volume-similarity",
      hints: [
        "Compare the three **complete cones** measured from the apex: their heights are in ratio {{1 : 2 : 3}}.",
        "Cube those numbers ({{1 : 8 : 27}}) and subtract to get the individual layer ratios {{1 : 7 : 19}}.",
        "Scale from {{7}} parts ({{56 cm^3}}) up to {{19}} parts.",
      ],
      strategy: "Use cumulative similar cones from the apex",
    },
    {
      kind: "short",
      id: "mensuration-circles-ch-q05",
      question:
        "{{AB}} is a diameter of a circle with centre {{O}}. Points {{C}} and {{D}} lie on the same semicircle (`A, C, D, B` in order) such that chord {{CD}} is **parallel** to diameter {{AB}}. Given {{∠CAB = 64°}}, find {{∠COD}} in degrees.",
      commonError: "Assuming angle COD equals angle CAO, or forgetting that OA = OC = OD makes triangles OAC and OCD isosceles.",
      answer: { type: "number", value: 76 },
      solution: [
        "In isosceles {{△OAC}} ({{OA = OC}}), {{∠OCA = ∠OAC = 64°}}, so {{∠AOC = 180° - 128° = 52°}}.",
        "Since {{CD ∥ AB}}, alternate angles give {{∠OCD = ∠AOC = 52°}} (or by symmetry {{∠BOD = 52°}}).",
        "In isosceles {{△OCD}} ({{OC = OD}}), {{∠ODC = 52°}}, so {{∠COD = 180° - 52° - 52° = 76°}}.",
      ],
      difficulty: "challenge",
      guideRef: "circle-theorems-angles",
      hints: [
        "Draw radii {{OC}} and {{OD}}! Use isosceles {{△OAC}} ({{OA = OC}}) to find {{∠AOC}}.",
        "Use parallel lines {{CD ∥ AB}} (alternate angles) to find {{∠OCD}}.",
        "Use isosceles {{△OCD}} ({{OC = OD}}) to find {{∠COD}}.",
      ],
      strategy: "Add auxiliary radii to unlock isosceles triangles",
    },
    {
      kind: "short",
      id: "mensuration-circles-ch-q06",
      question:
        "From an external point {{P}}, tangent {{PT}} has length {{12 cm}} and secant {{PAB}} passes directly through the centre {{O}} of the circle ({{A}} closer to {{P}}, {{B}} further from {{P}}). Given {{PA = 6 cm}}, find the **radius** of the circle in {{cm}}.",
      answer: { type: "number", value: 9 },
      traps: [
        { spec: { type: "number", value: 18 }, feedback: "{{18 cm}} is the diameter {{AB}} — halve it to give the radius!" },
      ],
      solution: [
        "Let the radius be {{r}}. Because {{AB}} passes through {{O}}, {{AB = 2r}} and {{PB = 6 + 2r}}.",
        "By {{PT^2 = PA * PB}}: {{12^2 = 6(6 + 2r) => 144 = 36 + 12r => 12r = 108 => r = 9 cm}}.",
      ],
      difficulty: "challenge",
      guideRef: "tangents-alternate-chords",
      hints: [
        "Since {{PAB}} passes through centre {{O}}, chord {{AB}} is a diameter of length {{2r}}.",
        "Substitute {{PT = 12}}, {{PA = 6}} and {{PB = 6 + 2r}} into {{PT^2 = PA * PB}}.",
        "Solve for {{r}} (or use Pythagoras in right-angled {{△OTP}} with {{OP = 6 + r}}).",
      ],
      strategy: "Express diameter in terms of r",
    },
    {
      kind: "short",
      id: "mensuration-circles-ch-q07",
      question:
        "Two circles of radii {{9 cm}} and {{4 cm}} touch each other externally and both rest on the same straight common tangent line, touching it at {{A}} and {{B}} respectively. Find the distance {{AB}} in {{cm}}.",
      answer: { type: "number", value: 12 },
      traps: [{ spec: { type: "number", value: 13 }, feedback: "{{13 cm}} is the distance between the two centres, which is sloped because the radii differ!" }],
      solution: [
        "Join the centres {{O_1}} and {{O_2}}: since the circles touch externally, {{O_1 O_2 = 9 + 4 = 13 cm}}.",
        "Radii {{O_1 A = 9 cm}} and {{O_2 B = 4 cm}} are both perpendicular ({{90°}}) to tangent {{AB}}.",
        "Drop a perpendicular from {{O_2}} to {{O_1 A}}, forming a right-angled triangle with hypotenuse {{13 cm}} and short leg {{9 - 4 = 5 cm}}.",
        "By Pythagoras, {{AB = sqrt(13^2 - 5^2) = 12 cm}}.",
      ],
      difficulty: "challenge",
      guideRef: "tangents-alternate-chords",
      hints: [
        "Draw radii {{O_1 A = 9 cm}} and {{O_2 B = 4 cm}} perpendicular to tangent {{AB}}, and join centres {{O_1 O_2 = 9 + 4 = 13 cm}}.",
        "Slide {{AB}} up to {{O_2}} to split trapezium {{O_1 A B O_2}} into a rectangle and a right-angled triangle.",
        "Use Pythagoras with hypotenuse {{13}} and height difference {{9 - 4 = 5}}.",
      ],
      strategy: "Split a right-angled trapezium into a rectangle + right triangle",
    },
    {
      kind: "short",
      id: "mensuration-circles-ch-q08",
      question:
        "An inverted hollow cone has rim radius {{9 cm}} and vertical height {{18 cm}}. It initially holds water to a depth of {{6 cm}} above the apex. Solid lead shot spheres, each of radius {{1.5 cm}}, are dropped in (all completely submerged) until the water reaches the exact brim of the cone. How many spheres are dropped in?",
      commonError: "Using the full rim radius 9 cm for the initial water instead of the similar-triangle radius 3 cm at depth 6 cm.",
      answer: { type: "number", value: 104 },
      solution: [
        "Full cone capacity {{= (1/3) * pi * 9^2 * 18 = 486 * pi cm^3}}.",
        "At depth {{h = 6 cm}}, similar triangles give water radius {{r = 3 cm}} and initial water volume {{= (1/3) * pi * 3^2 * 6 = 18 * pi cm^3}}.",
        "Empty volume to fill {{= 486 * pi - 18 * pi = 468 * pi cm^3}}.",
        "Each sphere has volume {{(4/3) * pi * (1.5)^3 = 4.5 * pi cm^3}}, so {{468 * pi / (4.5 * pi) = 104}} spheres.",
      ],
      difficulty: "challenge",
      guideRef: "cones-spheres-frustums",
      hints: [
        "Find full cone volume {{(1/3) * pi * 9^2 * 18}}, and use similar triangles ({{6/18 = 1/3}}) to find initial water volume.",
        "Subtract to get the empty volume {{468 * pi cm^3}} remaining below the brim.",
        "Divide {{468 * pi}} by the volume of one sphere {{(4/3) * pi * (1.5)^3}}.",
      ],
      strategy: "Equate displaced volume to remaining capacity",
    },
  ],
};
