import type { Drill } from "./types.ts";
import { gcd, roundTo } from "./helpers.ts";

const PYTHAG_CONES: ReadonlyArray<readonly [number, number, number]> = [
  [3, 4, 5],
  [5, 12, 13],
  [8, 15, 17],
  [7, 24, 25],
  [9, 12, 15],
  [6, 8, 10],
];

const COPRIME_PAIRS: ReadonlyArray<readonly [number, number]> = [
  [1, 2],
  [1, 3],
  [2, 3],
  [1, 4],
  [3, 4],
  [2, 5],
  [3, 5],
  [4, 5],
  [1, 5],
  [5, 6],
];

function piTerm(coef: number): { expr: string; display: string } {
  if (coef === 1) return { expr: "pi", display: "{{pi}}" };
  return { expr: `${coef}*pi`, display: `{{${coef} * pi}}` };
}

export const drills: Drill[] = [
  {
    id: "mensuration-circles.sectors-segments",
    topicId: "mensuration-circles",
    title: "Arc length, sector perimeter & minor segment area",
    level: 2,
    guideRef: "sectors-segments",
    generate(rng, tier) {
      if (tier === 1) {
        const radii = [3, 4, 5, 6, 8, 9, 10, 12, 15, 18];
        const angles = [30, 40, 45, 60, 72, 80, 90, 100, 120, 135, 144, 150, 160, 180, 210, 240, 270, 300];
        const askArea = rng.bool();
        let r = 6;
        let theta = 60;
        for (let i = 0; i < 80; i++) {
          r = rng.pick(radii);
          theta = rng.pick(angles);
          const ok = askArea ? (theta * r * r) % 360 === 0 : (theta * 2 * r) % 360 === 0;
          if (ok) break;
        }
        if (askArea) {
          const areaCoef = (theta * r * r) / 360;
          const ans = piTerm(areaCoef);
          const wrongArcNum = theta * 2 * r;
          const g = gcd(wrongArcNum, 360);
          const trapExpr = wrongArcNum % 360 === 0 ? piTerm(wrongArcNum / 360).expr : `(${wrongArcNum / g}/${360 / g})*pi`;
          return {
            prompt: `A sector of a circle has radius {{${r} cm}} and central angle {{${theta}°}}. Find its exact **area** in terms of {{pi}} (in {{cm^2}}).`,
            answer: { type: "expression", expr: ans.expr, form: "simplified", display: ans.display },
            solution: [
              `Sector area {{= (${theta}/360) * pi * ${r}^2}}.`,
              `Simplify {{(${theta} * ${r * r})/360 = ${areaCoef}}}, giving ${ans.display} {{cm^2}}.`,
            ],
            hint: "Use sector area = {{(theta/360) * pi * r^2}}.",
            traps: [
              {
                spec: { type: "expression", expr: trapExpr },
                feedback: "That uses {{2 * pi * r}} (arc length) — square the radius for sector area!",
              },
            ],
          };
        }
        const arcCoef = (theta * 2 * r) / 360;
        const ans = piTerm(arcCoef);
        const wrongAreaNum = theta * r * r;
        const g = gcd(wrongAreaNum, 360);
        const trapExpr = wrongAreaNum % 360 === 0 ? piTerm(wrongAreaNum / 360).expr : `(${wrongAreaNum / g}/${360 / g})*pi`;
        return {
          prompt: `A sector of a circle has radius {{${r} cm}} and central angle {{${theta}°}}. Find the exact length of its **arc** in terms of {{pi}} (in {{cm}}).`,
          answer: { type: "expression", expr: ans.expr, form: "simplified", display: ans.display },
          solution: [
            `Arc length {{= (${theta}/360) * 2 * pi * ${r}}}.`,
            `Simplify {{(${theta} * ${2 * r})/360 = ${arcCoef}}}, giving ${ans.display} {{cm}}.`,
          ],
          hint: "Use arc length = {{(theta/360) * 2 * pi * r}}.",
          traps: [
            {
              spec: { type: "expression", expr: trapExpr },
              feedback: "That is the sector area — use circumference {{2 * pi * r}} for arc length.",
            },
          ],
        };
      }

      if (tier === 2) {
        const radii = [4, 5, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20];
        const angles = [36, 45, 60, 72, 90, 108, 120, 135, 144, 150, 180, 210, 225, 240, 270, 300];
        let r = 6;
        let theta = 120;
        for (let i = 0; i < 80; i++) {
          r = rng.pick(radii);
          theta = rng.pick(angles);
          if ((theta * 2 * r) % 360 === 0 && (theta * 2 * r) / 360 >= 2) break;
        }
        const arcCoef = (theta * 2 * r) / 360;
        return {
          prompt: `A sector of a circle has radius {{${r} cm}} and central angle {{${theta}°}}. Find the exact **perimeter** of the sector in terms of {{pi}} (in {{cm}}).`,
          answer: {
            type: "expression",
            expr: `${2 * r} + ${arcCoef}*pi`,
            form: "simplified",
            display: `{{${2 * r} + ${arcCoef} * pi}}`,
          },
          solution: [
            `Curved arc length {{= (${theta}/360) * 2 * pi * ${r} = ${arcCoef} * pi cm}}.`,
            `Add the two straight radii {{2 * ${r} = ${2 * r} cm}}: perimeter {{= ${2 * r} + ${arcCoef} * pi cm}}.`,
          ],
          hint: "Find the curved arc length first, then add both straight radii ({{+ 2r}}).",
          traps: [
            {
              spec: { type: "expression", expr: `${arcCoef}*pi` },
              feedback: "That is only the curved arc — include the two straight radii ({{+ 2r}})!",
            },
            {
              spec: { type: "expression", expr: `${r} + ${arcCoef}*pi` },
              feedback: "A sector has **two** straight radii ({{+ 2r}}), not just one.",
            },
          ],
        };
      }

      const r = rng.int(6, 16);
      const theta = rng.pick([45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135]);
      const sec = (theta / 360) * Math.PI * r * r;
      const tri = 0.5 * r * r * Math.sin((theta * Math.PI) / 180);
      const seg = roundTo(sec - tri, 1);
      const secRound = roundTo(sec, 1);
      return {
        prompt: `Sector {{OAB}} has radius {{${r} cm}} and central angle {{${theta}°}}. Calculate the area of the **minor segment** cut off by chord {{AB}}, correct to 1 decimal place (in {{cm^2}}).`,
        answer: { type: "number", value: seg, tolerance: 0.1 },
        solution: [
          `Sector area {{= (${theta}/360) * pi * ${r}^2 = ${roundTo(sec, 2)} cm^2}}.`,
          `Triangle {{OAB}} area {{= (1/2) * ${r}^2 * sin(${theta}°) = ${roundTo(tri, 2)} cm^2}}.`,
          `Minor segment area {{= ${roundTo(sec, 2)} - ${roundTo(tri, 2)} = ${seg} cm^2}} (1 d.p.).`,
        ],
        hint: "Subtract triangle {{(1/2) * r^2 * sin(theta)}} from sector {{(theta/360) * pi * r^2}}.",
        traps: [
          {
            spec: { type: "number", value: secRound, tolerance: 0.1 },
            feedback: "That is the full sector area — subtract triangle {{OAB}} ({{(1/2) * r^2 * sin(theta)}})!",
          },
        ],
      };
    },
  },
  {
    id: "mensuration-circles.cones-spheres-frustums",
    topicId: "mensuration-circles",
    title: "Cones, solid hemispheres & frustums",
    level: 2,
    guideRef: "cones-spheres-frustums",
    generate(rng, tier) {
      if (tier === 1) {
        if (rng.bool()) {
          const [br, bh, bl] = rng.pick(PYTHAG_CONES);
          const m = rng.pick([1, 2, 3, 4]);
          const r = br * m;
          const h = bh * m;
          const l = bl * m;
          const totalCoef = r * l + r * r;
          const curvedCoef = r * l;
          return {
            prompt: `A **solid** right circular cone has base radius {{${r} cm}} and vertical height {{${h} cm}}. Find its exact **total** surface area in terms of {{pi}} (in {{cm^2}}).`,
            answer: {
              type: "expression",
              expr: `${totalCoef}*pi`,
              form: "simplified",
              display: `{{${totalCoef} * pi}}`,
            },
            solution: [
              `Slant height {{l = sqrt(${r}^2 + ${h}^2) = ${l} cm}}.`,
              `Curved SA {{= pi * ${r} * ${l} = ${curvedCoef} * pi cm^2}} and base area {{= pi * ${r}^2 = ${r * r} * pi cm^2}}.`,
              `Total surface area {{= ${curvedCoef} * pi + ${r * r} * pi = ${totalCoef} * pi cm^2}}.`,
            ],
            hint: "Find slant height {{l = sqrt(r^2 + h^2)}}, then add curved SA {{pi * r * l}} and circular base {{pi * r^2}}.",
            traps: [
              {
                spec: { type: "expression", expr: `${curvedCoef}*pi` },
                feedback: "That is only the curved surface area — include the flat circular base {{+ pi * r^2}}!",
              },
              {
                spec: { type: "expression", expr: `${r * h + r * r}*pi` },
                feedback: `Use slant height {{l = ${l}}}, not vertical height {{h = ${h}}}, inside {{pi * r * l}}.`,
              },
            ],
          };
        }
        const r = rng.int(2, 28);
        const totalCoef = 3 * r * r;
        const curvedCoef = 2 * r * r;
        return {
          prompt: `Find the exact **total** surface area of a **solid hemisphere** of radius {{${r} cm}} in terms of {{pi}} (in {{cm^2}}).`,
          answer: {
            type: "expression",
            expr: `${totalCoef}*pi`,
            form: "simplified",
            display: `{{${totalCoef} * pi}}`,
          },
          solution: [
            `Curved dome area {{= 2 * pi * ${r}^2 = ${curvedCoef} * pi cm^2}}.`,
            `Flat circular base {{= pi * ${r}^2 = ${r * r} * pi cm^2}}.`,
            `Total surface area {{= 3 * pi * ${r}^2 = ${totalCoef} * pi cm^2}}.`,
          ],
          hint: "A solid hemisphere has curved dome {{2 * pi * r^2}} plus circular base {{pi * r^2}} = {{3 * pi * r^2}}.",
          traps: [
            {
              spec: { type: "expression", expr: `${curvedCoef}*pi` },
              feedback: "Don't forget the exposed circular base {{pi * r^2}} — solid hemisphere SA is {{3 * pi * r^2}}!",
            },
            {
              spec: { type: "expression", expr: `${4 * r * r}*pi` },
              feedback: "{{4 * pi * r^2}} is the surface area of a whole sphere, not a solid hemisphere ({{3 * pi * r^2}}).",
            },
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool()) {
          const validPairs: Array<[number, number]> = [];
          for (let s = 3; s <= 18; s++) {
            for (let c = 2; c <= 24; c++) {
              const num4 = 4 * s * s * s;
              if (num4 % (c * c) === 0) {
                const hv = num4 / (c * c);
                if (hv >= 3 && hv <= 90 && hv !== s && hv % 3 === 0) validPairs.push([s, c]);
              }
            }
          }
          const [rs, rc] = rng.pick(validPairs);
          const h = (4 * rs * rs * rs) / (rc * rc);
          const sphCoef = (4 * rs * rs * rs) / 3;
          return {
            prompt: `A solid metal sphere of radius {{${rs} cm}} is melted down and recast into a solid cone of base radius {{${rc} cm}} with no waste. Find the vertical height of the cone in {{cm}}.`,
            answer: { type: "number", value: h },
            solution: [
              `Sphere volume {{= (4/3) * pi * ${rs}^3${Number.isInteger(sphCoef) ? ` = ${sphCoef} * pi` : ""} cm^3}}.`,
              `Equate to cone volume {{(1/3) * pi * ${rc}^2 * h}}: {{${rc * rc} * h = 4 * ${rs * rs * rs} = ${4 * rs * rs * rs}}}.`,
              `{{h = ${4 * rs * rs * rs} / ${rc * rc} = ${h} cm}}.`,
            ],
            hint: "Equate volumes {{(4/3) * pi * r_s^3 = (1/3) * pi * r_c^2 * h}} and multiply both sides by {{3 / pi}}.",
            traps: [
              {
                spec: { type: "number", value: h / 3 },
                feedback: "Remember the {{1/3}} factor in the cone volume formula {{(1/3) * pi * r^2 * h}}!",
              },
            ],
          };
        }
        const r = rng.int(2, 12);
        const k = rng.int(2, 9);
        const h = 3 * k - 2 * r > 0 ? 3 * k - 2 * r : 3 * (k + r) - 2 * r;
        const volCoef = (r * r * (h + 2 * r)) / 3;
        const trapFullSph = volCoef + (2 * r * r * r) / 3;
        const traps = Number.isInteger(trapFullSph)
          ? [
              {
                spec: { type: "expression" as const, expr: `${trapFullSph}*pi` },
                feedback: "Use {{(2/3) * pi * r^3}} for a hemisphere, not {{(4/3) * pi * r^3}}.",
              },
            ]
          : [];
        return {
          prompt: `A composite solid consists of a cone of base radius {{${r} cm}} and vertical height {{${h} cm}} joined at its base to a hemisphere of radius {{${r} cm}}. Find its exact **total volume** in terms of {{pi}} (in {{cm^3}}).`,
          answer: {
            type: "expression",
            expr: `${volCoef}*pi`,
            form: "simplified",
            display: `{{${volCoef} * pi}}`,
          },
          solution: [
            `Cone volume {{= (1/3) * pi * ${r}^2 * ${h} = (${r * r * h}/3) * pi cm^3}}.`,
            `Hemisphere volume {{= (2/3) * pi * ${r}^3 = (${2 * r * r * r}/3) * pi cm^3}}.`,
            `Sum {{= (${r * r * h + 2 * r * r * r}/3) * pi = ${volCoef} * pi cm^3}}.`,
          ],
          hint: "Add cone {{(1/3) * pi * r^2 * h}} and hemisphere {{(2/3) * pi * r^3}}.",
          traps,
        };
      }

      const [a, b] = rng.pick([
        [1, 2],
        [1, 3],
        [2, 3],
        [1, 4],
        [3, 4],
        [2, 5],
        [3, 5],
      ] as const);
      const u = rng.pick([1, 2, 3]);
      const v = rng.pick([3, 6, 9, 12]);
      const r = a * u;
      const R = b * u;
      const h = a * v;
      const H = b * v;
      const hf = H - h;
      const vLarge = (R * R * H) / 3;
      const vSmall = (r * r * h) / 3;
      const vFrust = vLarge - vSmall;
      const trapSingleCone = (R * R * hf) / 3;
      return {
        prompt: `A frustum is made by removing a small cone from the top of a similar large cone. The frustum has top radius {{${r} cm}}, base radius {{${R} cm}} and vertical height {{${hf} cm}}. Find its exact **volume** in terms of {{pi}} (in {{cm^3}}).`,
        answer: {
          type: "expression",
          expr: `${vFrust}*pi`,
          form: "simplified",
          display: `{{${vFrust} * pi}}`,
        },
        solution: [
          `By similar triangles, {{${r} / ${R} = h / (h + ${hf}) => h = ${h} cm}} and full cone height {{H = ${H} cm}}.`,
          `{{V_"large" = (1/3) * pi * ${R}^2 * ${H} = ${vLarge} * pi cm^3}} and {{V_"small" = (1/3) * pi * ${r}^2 * ${h} = ${vSmall} * pi cm^3}}.`,
          `{{V_"frustum" = ${vLarge} * pi - ${vSmall} * pi = ${vFrust} * pi cm^3}}.`,
        ],
        hint: `Set up similar triangles {{${r} / ${R} = h / (h + ${hf})}} to find the removed cone's height {{h}} first.`,
        traps: [
          {
            spec: { type: "expression", expr: `${vLarge}*pi` },
            feedback: "That is the full large cone — subtract the removed small cone from the top!",
          },
          {
            spec: { type: "expression", expr: `${trapSingleCone}*pi` },
            feedback: "A frustum is not a single cone of height {{H - h}} — complete the cone first using similar triangles.",
          },
        ],
      };
    },
  },
  {
    id: "mensuration-circles.area-volume-similarity",
    topicId: "mensuration-circles",
    title: "Similar shapes & solids (k, k², k³)",
    level: 2,
    guideRef: "area-volume-similarity",
    generate(rng, tier) {
      if (tier === 1) {
        const [a, b] = rng.pick(COPRIME_PAIRS);
        const m = rng.int(2, 9);
        if (rng.bool()) {
          const a1 = m * a * a;
          const a2 = m * b * b;
          const linTrap = roundTo((a1 * b) / a, 2);
          return {
            prompt: `Two mathematically similar shapes have corresponding lengths in the ratio {{${a} : ${b}}}. The smaller shape has area {{${a1} cm^2}}. Find the area of the larger shape in {{cm^2}}.`,
            answer: { type: "number", value: a2 },
            solution: [
              `Linear scale factor {{k = ${b}/${a}}}, so area scale factor {{k^2 = (${b}/${a})^2 = ${b * b}/${a * a}}}.`,
              `Larger area {{= ${a1} * (${b * b}/${a * a}) = ${a2} cm^2}}.`,
            ],
            hint: "Square the linear scale factor ({{k^2}}) to scale area.",
            traps: [
              {
                spec: { type: "number", value: linTrap },
                feedback: "You multiplied by the linear ratio {{k}} — area scales by {{k^2}}!",
              },
            ],
          };
        }
        const v1 = m * a * a * a;
        const v2 = m * b * b * b;
        const areaTrap = (v1 * b * b) / (a * a);
        return {
          prompt: `Two mathematically similar containers have heights in the ratio {{${a} : ${b}}}. The smaller container has capacity {{${v1} ml}}. Find the capacity of the larger container in {{ml}}.`,
          answer: { type: "number", value: v2 },
          solution: [
            `Linear scale factor {{k = ${b}/${a}}}, so volume scale factor {{k^3 = (${b}/${a})^3 = ${b * b * b}/${a * a * a}}}.`,
            `Larger capacity {{= ${v1} * (${b * b * b}/${a * a * a}) = ${v2} ml}}.`,
          ],
          hint: "Cube the linear scale factor ({{k^3}}) to scale volume/capacity.",
          traps: [
            {
              spec: { type: "number", value: areaTrap },
              feedback: "You multiplied by {{k^2}} — capacity is 3D volume, so multiply by {{k^3}}!",
            },
          ],
        };
      }

      if (tier === 2) {
        const [a, b] = rng.pick(COPRIME_PAIRS.slice(0, 8));
        const c = rng.pick([2, 3, 5, 6, 7]);
        const m = rng.int(2, 6);
        const areaSmall = c * a * a;
        const areaLarge = c * b * b;
        const volSmall = m * a * a * a;
        const volLarge = m * b * b * b;
        const findLarge = rng.bool();
        if (findLarge) {
          return {
            prompt: `Two mathematically similar statues have surface areas {{${areaSmall} cm^2}} and {{${areaLarge} cm^2}}. The smaller statue has volume {{${volSmall} cm^3}}. Find the volume of the larger statue in {{cm^3}}.`,
            answer: { type: "number", value: volLarge },
            solution: [
              `Simplify the area ratio: {{k^2 = ${areaLarge}/${areaSmall} = ${b * b}/${a * a}}}.`,
              `Cross the linear bridge: {{k = sqrt(${b * b}/${a * a}) = ${b}/${a}}}, then cube: {{k^3 = ${b * b * b}/${a * a * a}}}.`,
              `Larger volume {{= ${volSmall} * (${b * b * b}/${a * a * a}) = ${volLarge} cm^3}}.`,
            ],
            hint: "Simplify the area ratio first, take its square root for {{k}}, then cube {{k}} for volume.",
            traps: [
              {
                spec: { type: "number", value: m * a * b * b },
                feedback: "Don't multiply volume by the area ratio {{k^2}} — take {{sqrt(k^2) = k}} first, then multiply by {{k^3}}!",
              },
            ],
          };
        }
        return {
          prompt: `Two mathematically similar vases have surface areas {{${areaSmall} cm^2}} and {{${areaLarge} cm^2}}. The larger vase holds {{${volLarge} ml}}. Find the capacity of the smaller vase in {{ml}}.`,
          answer: { type: "number", value: volSmall },
          solution: [
            `Area ratio (large → small) is {{${areaSmall}/${areaLarge} = ${a * a}/${b * b}}}, so {{k = ${a}/${b}}}.`,
            `Volume scale factor {{k^3 = (${a}/${b})^3 = ${a * a * a}/${b * b * b}}}.`,
            `Smaller capacity {{= ${volLarge} * (${a * a * a}/${b * b * b}) = ${volSmall} ml}}.`,
          ],
          hint: "Simplify the area ratio, take the square root for {{k}}, and cube for {{k^3}}.",
          traps: [
            {
              spec: { type: "number", value: m * b * a * a },
              feedback: "Step through linear {{k}} before scaling volume by {{k^3}}!",
            },
          ],
        };
      }

      const [a, b] = rng.pick(COPRIME_PAIRS.slice(0, 8));
      const m = rng.int(2, 8);
      const vSmall = m * a * a * a;
      const vFull = m * b * b * b;
      const vFrust = vFull - vSmall;
      if (rng.bool()) {
        return {
          prompt: `A pyramid is sliced parallel to its base so that the height of the top small pyramid to the height of the whole pyramid is {{${a} : ${b}}}. Given that the bottom **frustum** has volume {{${vFrust} cm^3}}, find the volume of the top small pyramid in {{cm^3}}.`,
          answer: { type: "number", value: vSmall },
          solution: [
            `Small pyramid : full pyramid volume ratio {{= ${a}^3 : ${b}^3 = ${a * a * a} : ${b * b * b}}}.`,
            `Therefore small pyramid : frustum {{= ${a * a * a} : (${b * b * b} - ${a * a * a}) = ${a * a * a} : ${b * b * b - a * a * a}}}.`,
            `One part {{= ${vFrust} / ${b * b * b - a * a * a} = ${m} cm^3}}, so small pyramid volume {{= ${a * a * a} * ${m} = ${vSmall} cm^3}}.`,
          ],
          hint: `Cube the linear ratio to get {{${a * a * a} : ${b * b * b}}}, then subtract {{${b * b * b} - ${a * a * a}}} for the frustum's volume parts.`,
          traps: [
            {
              spec: { type: "number", value: roundTo((vFrust * a * a * a) / (b * b * b), 2) },
              feedback: `{{${vFrust} cm^3}} is the **frustum** ({{${b * b * b - a * a * a}}} parts), not the whole pyramid ({{${b * b * b}}} parts)!`,
            },
          ],
        };
      }
      return {
        prompt: `A cone is sliced parallel to its base so that the curved surface area of the top small cone is {{${a * a}/${b * b}}} of the curved surface area of the whole cone. If the top small cone has volume {{${vSmall} cm^3}}, find the volume of the bottom **frustum** in {{cm^3}}.`,
        answer: { type: "number", value: vFrust },
        solution: [
          `From {{k^2 = ${a * a}/${b * b}}}, linear ratio {{k = ${a}/${b}}} and volume ratio {{k^3 = ${a * a * a}/${b * b * b}}}.`,
          `Full cone volume {{= ${vSmall} * (${b * b * b}/${a * a * a}) = ${vFull} cm^3}}.`,
          `Frustum volume {{= ${vFull} - ${vSmall} = ${vFrust} cm^3}}.`,
        ],
        hint: "Find the full cone's volume using {{k^3}}, then subtract the top small cone!",
        traps: [
          {
            spec: { type: "number", value: vFull },
            feedback: `{{${vFull} cm^3}} is the whole cone — subtract the top cone ({{${vSmall} cm^3}}) to leave the frustum!`,
          },
        ],
      };
    },
  },
  {
    id: "mensuration-circles.circle-theorems-angles",
    topicId: "mensuration-circles",
    title: "Circle theorems I: centre, semicircle, same segment & cyclic quads",
    level: 2,
    guideRef: "circle-theorems-angles",
    generate(rng, tier) {
      if (tier === 1) {
        const mode = rng.int(1, 3);
        if (mode === 1) {
          let x = rng.int(24, 78);
          if (x === 60) x = 62;
          return {
            prompt: `Points {{A, B, C}} lie on a circle with centre {{O}}, with {{C}} on the major arc {{AB}}. Given {{∠AOB = ${2 * x}°}}, find {{∠ACB}} in degrees.`,
            answer: { type: "number", value: x },
            solution: [
              `The angle at the centre is twice the angle at the circumference subtended by the same arc.`,
              `{{∠ACB = ${2 * x}° / 2 = ${x}°}}.`,
            ],
            hint: "Halve the central angle {{∠AOB}}.",
            traps: [
              {
                spec: { type: "number", value: 180 - 2 * x },
                feedback: "{{O}} is at the centre, not on the circumference — halve {{∠AOB}}, don't subtract from {{180°}}!",
              },
            ],
          };
        }
        if (mode === 2) {
          let a = rng.int(52, 134);
          if (a === 90) a = 94;
          return {
            prompt: `{{ABCD}} is a cyclic quadrilateral. Given {{∠ABC = ${a}°}}, find the opposite angle {{∠ADC}} in degrees.`,
            answer: { type: "number", value: 180 - a },
            solution: [
              `Opposite angles of a cyclic quadrilateral sum to {{180°}}.`,
              `{{∠ADC = 180° - ${a}° = ${180 - a}°}}.`,
            ],
            hint: "Opposite angles of a cyclic quadrilateral add up to {{180°}}.",
            traps: [
              {
                spec: { type: "number", value: a },
                feedback: "Opposite angles in a cyclic quadrilateral sum to {{180°}} — they are not equal unless {{90°}}.",
              },
            ],
          };
        }
        let a = rng.int(18, 72);
        if (a === 45) a = 48;
        return {
          prompt: `{{AB}} is a diameter of a circle with centre {{O}}, and {{C}} lies on the circumference. Given {{∠CAB = ${a}°}}, find {{∠CBA}} in degrees.`,
          answer: { type: "number", value: 90 - a },
          solution: [
            `Since {{AB}} is a diameter, {{∠ACB = 90°}} (the angle in a semicircle is {{90°}}).`,
            `In {{△ABC}}, {{∠CBA = 180° - 90° - ${a}° = ${90 - a}°}}.`,
          ],
          hint: "Spot {{∠ACB = 90°}} from diameter {{AB}}, then use angles in {{△ABC}}.",
          traps: [
            {
              spec: { type: "number", value: 180 - a },
              feedback: "Subtract {{∠ACB = 90°}} as well when using the {{180°}} sum of {{△ABC}}!",
            },
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(1, 3);
        if (mode === 1) {
          let a = rng.int(16, 58);
          if (a === 30) a = 32;
          const aob = 180 - 2 * a;
          const acb = 90 - a;
          return {
            prompt: `Points {{A, B, C}} lie on a circle with centre {{O}}, with {{C}} on the major arc {{AB}}. Given {{∠OAB = ${a}°}}, find {{∠ACB}} in degrees.`,
            answer: { type: "number", value: acb },
            solution: [
              `Since {{OA = OB}} (radii), {{△OAB}} is isosceles with {{∠OBA = ${a}°}} and {{∠AOB = 180° - ${2 * a}° = ${aob}°}}.`,
              `Angle at the centre = {{2 ×}} angle at the circumference: {{∠ACB = ${aob}° / 2 = ${acb}°}}.`,
            ],
            hint: "Use isosceles {{△OAB}} ({{OA = OB}}) to find {{∠AOB}}, then halve it.",
            traps: [
              {
                spec: { type: "number", value: aob },
                feedback: `{{${aob}°}} is the central angle {{∠AOB}} — divide by {{2}} for {{∠ACB}}!`,
              },
            ],
          };
        }
        if (mode === 2) {
          const a = rng.int(22, 56);
          let b = rng.int(24, 62);
          if (a + b === 90) b += 4;
          const ans = 180 - a - b;
          return {
            prompt: `Points {{A, B, C, D}} lie in order around a circle and chords {{AC}} and {{BD}} intersect at {{X}}. Given {{∠BAC = ${a}°}} and {{∠ACD = ${b}°}}, find {{∠AXB}} in degrees.`,
            answer: { type: "number", value: ans },
            solution: [
              `Angles in the same segment (subtended by arc {{AD}}) give {{∠ABD = ∠ACD = ${b}°}}.`,
              `In {{△AXB}}, {{∠AXB = 180° - ${a}° - ${b}° = ${ans}°}}.`,
            ],
            hint: "Use *angles in the same segment are equal* to find {{∠ABD}}, then use {{△AXB}}.",
            traps: [
              {
                spec: { type: "number", value: a + b },
                feedback: `{{${a + b}°}} is the exterior angle {{∠BXC}} — subtract from {{180°}} for {{∠AXB}}!`,
              },
            ],
          };
        }
        const x = rng.int(12, 38);
        const p = rng.pick([2, 3]);
        const r = rng.pick([2, 3, 4]);
        const sumX = (p + r) * x;
        const cTotal = 180 - sumX;
        const c1 = rng.int(-15, 25);
        const c2 = cTotal - c1;
        const fmt = (k: number, c: number) => (c === 0 ? `${k}x` : c > 0 ? `${k}x + ${c}` : `${k}x - ${-c}`);
        return {
          prompt: `{{ABCD}} is a cyclic quadrilateral with opposite angles {{∠DAB = (${fmt(p, c1)})°}} and {{∠BCD = (${fmt(r, c2)})°}}. Find the value of {{x}}.`,
          answer: { type: "number", value: x },
          solution: [
            `Opposite angles of a cyclic quadrilateral sum to {{180°}}: {{(${fmt(p, c1)}) + (${fmt(r, c2)}) = 180}}.`,
            `{{${p + r}x ${cTotal >= 0 ? `+ ${cTotal}` : `- ${-cTotal}`} = 180 => ${p + r}x = ${sumX} => x = ${x}}}.`,
          ],
          hint: "Add the two opposite angle expressions and set their sum equal to {{180}}.",
        };
      }

      const mode = rng.int(1, 3);
      if (mode === 1) {
        let k = rng.int(48, 78);
        if (k === 60) k = 64;
        const aoc = 2 * k;
        const reflex = 360 - aoc;
        const ans = reflex / 2;
        return {
          prompt: `Points {{A, B, C}} lie on a circle with centre {{O}}, with {{B}} lying on the **minor** arc {{AC}}. Given that non-reflex {{∠AOC = ${aoc}°}}, find the obtuse angle {{∠ABC}} in degrees.`,
          answer: { type: "number", value: ans },
          solution: [
            `Reflex angle at centre {{O}} is {{360° - ${aoc}° = ${reflex}°}}.`,
            `Angle at the centre is twice the angle at the circumference: {{∠ABC = ${reflex}° / 2 = ${ans}°}}.`,
          ],
          hint: "Remember {{O}} is at the centre, NOT on the circumference — halve the **reflex** angle {{360° - ∠AOC}}!",
          traps: [
            {
              spec: { type: "number", value: 180 - aoc },
              feedback: "{{OABC}} is NOT a cyclic quadrilateral because {{O}} is the centre, not on the circumference!",
            },
            {
              spec: { type: "number", value: k },
              feedback: `{{${k}°}} is the acute angle on the major arc — {{B}} is on the minor arc, so use {{180° - ${k}° = ${ans}°}}.`,
            },
          ],
        };
      }
      if (mode === 2) {
        let a = rng.int(18, 68);
        if (a === 45) a = 42;
        const ans = 90 - a;
        return {
          prompt: `Points {{A, B, C, D}} lie in order around a circle with centre {{O}} such that {{BD}} is a **diameter**. Given {{∠BDC = ${a}°}}, find {{∠DAC}} in degrees.`,
          answer: { type: "number", value: ans },
          solution: [
            `Since {{BD}} is a diameter, {{∠BCD = 90°}} (angle in a semicircle), so {{∠CBD = 90° - ${a}° = ${ans}°}}.`,
            `Angles in the same segment (subtended by chord {{CD}}) give {{∠DAC = ∠CBD = ${ans}°}}.`,
          ],
          hint: "Find {{∠CBD}} using right-angled {{△BCD}}, then match angles subtended by chord {{CD}}.",
          traps: [
            {
              spec: { type: "number", value: a },
              feedback: `{{${a}°}} is subtended by chord {{BC}} ({{∠BAC}}), whereas {{∠DAC}} is subtended by chord {{CD}}!`,
            },
          ],
        };
      }
      let a = rng.int(50, 76);
      if (a === 60) a = 64;
      const aoc = 180 - 2 * a;
      const cod = 4 * a - 180;
      return {
        prompt: `{{AB}} is a diameter of a circle with centre {{O}}. Chord {{CD}} is parallel to {{AB}} (with {{A, C, D, B}} in order on the semicircle). Given {{∠CAB = ${a}°}}, find {{∠COD}} in degrees.`,
        answer: { type: "number", value: cod },
        solution: [
          `In isosceles {{△OAC}} ({{OA = OC}}), {{∠OCA = ${a}°}}, so {{∠AOC = 180° - ${2 * a}° = ${aoc}°}}.`,
          `Since {{CD ∥ AB}}, alternate angles give {{∠OCD = ∠AOC = ${aoc}°}}, and in isosceles {{△OCD}}, {{∠ODC = ${aoc}°}}.`,
          `Therefore {{∠COD = 180° - 2 * ${aoc}° = ${cod}°}}.`,
        ],
        hint: "Draw radii {{OC}} and {{OD}} to form isosceles triangles {{△OAC}} and {{△OCD}}, and use alternate angles on {{CD ∥ AB}}.",
        traps: [
          {
            spec: { type: "number", value: aoc },
            feedback: `{{${aoc}°}} is {{∠AOC}} — use {{CD ∥ AB}} and straight line {{AOB}} to find {{∠COD = 180° - 2 * ${aoc}°}}!`,
          },
        ],
      };
    },
  },
  {
    id: "mensuration-circles.tangents-alternate-chords",
    topicId: "mensuration-circles",
    title: "Circle theorems II: tangents, alternate segment & intersecting chords",
    level: 3,
    guideRef: "tangents-alternate-chords",
    generate(rng, tier) {
      if (tier === 1) {
        const mode = rng.int(1, 3);
        if (mode === 1) {
          let k = rng.int(16, 56);
          if (k === 30) k = 34;
          const apb = 2 * k;
          const pab = 90 - k;
          return {
            prompt: `From an external point {{P}}, two tangents {{PA}} and {{PB}} touch a circle at {{A}} and {{B}}. Given {{∠APB = ${apb}°}}, find {{∠PAB}} in degrees.`,
            answer: { type: "number", value: pab },
            solution: [
              `Tangents from an external point are equal ({{PA = PB}}), so {{△PAB}} is isosceles.`,
              `{{∠PAB = (180° - ${apb}°) / 2 = ${pab}°}}.`,
            ],
            hint: "Use isosceles triangle {{PAB}} ({{PA = PB}}).",
            traps: [
              {
                spec: { type: "number", value: 180 - apb },
                feedback: `{{${180 - apb}°}} is {{∠AOB}} (or the sum of both base angles) — divide by {{2}} for {{∠PAB}}!`,
              },
            ],
          };
        }
        if (mode === 2) {
          let a = rng.int(16, 72);
          if (a === 45) a = 48;
          return {
            prompt: `Line {{PT}} is a tangent to a circle with centre {{O}} at {{T}}. Given {{∠OPT = ${a}°}}, find {{∠POT}} in degrees.`,
            answer: { type: "number", value: 90 - a },
            solution: [
              `A tangent is perpendicular to the radius at the point of contact: {{∠OTP = 90°}}.`,
              `In {{△OTP}}, {{∠POT = 90° - ${a}° = ${90 - a}°}}.`,
            ],
            hint: "Use {{∠OTP = 90°}} in right-angled triangle {{OTP}}.",
            traps: [
              {
                spec: { type: "number", value: 180 - a },
                feedback: "Remember {{∠OTP = 90°}}, so {{∠POT + ∠OPT = 90°}}, not {{180°}}.",
              },
            ],
          };
        }
        const cp = rng.int(2, 9);
        const pd = rng.int(4, 15);
        const prod = cp * pd;
        const divisors: number[] = [];
        for (let d = 2; d <= 16; d++) if (prod % d === 0 && d !== cp && d !== pd) divisors.push(d);
        const ap = divisors.length ? rng.pick(divisors) : cp;
        const pb = prod / ap;
        return {
          prompt: `Chords {{AB}} and {{CD}} intersect inside a circle at {{P}}. Given {{AP = ${ap} cm}}, {{PB = ${pb} cm}} and {{CP = ${cp} cm}}, find {{PD}} in {{cm}}.`,
          answer: { type: "number", value: pd },
          solution: [
            `By intersecting chords {{AP * PB = CP * PD}}: {{${ap} * ${pb} = ${cp} * PD}}.`,
            `{{PD = ${prod} / ${cp} = ${pd} cm}}.`,
          ],
          hint: "Equate products of internal chord pieces: {{AP * PB = CP * PD}}.",
        };
      }

      if (tier === 2) {
        const mode = rng.int(1, 3);
        if (mode === 1) {
          const bat = rng.int(38, 74);
          let abc = rng.int(36, 72);
          if (bat + abc >= 165) abc = 45;
          const bac = 180 - bat - abc;
          return {
            prompt: `Line {{AT}} is a tangent to a circle at {{A}}. Points {{B}} and {{C}} lie on the circle with {{C}} in the alternate segment to acute {{∠BAT}}. Given {{∠BAT = ${bat}°}} and {{∠ABC = ${abc}°}}, find {{∠BAC}} in degrees.`,
            answer: { type: "number", value: bac },
            solution: [
              `By the alternate segment theorem, {{∠ACB = ∠BAT = ${bat}°}}.`,
              `In {{△ABC}}, {{∠BAC = 180° - ${bat}° - ${abc}° = ${bac}°}}.`,
            ],
            hint: "Use the alternate segment theorem to get {{∠ACB = ∠BAT}}, then use the angle sum of {{△ABC}}.",
            traps: [
              {
                spec: { type: "number", value: bat },
                feedback: `{{${bat}°}} is {{∠ACB}} — subtract both {{∠ACB}} and {{∠ABC}} from {{180°}} to find {{∠BAC}}!`,
              },
            ],
          };
        }
        if (mode === 2) {
          const [p, q] = rng.pick(COPRIME_PAIRS);
          const s = rng.pick([1, 2, 3]);
          const pa = p * p * s;
          const pb = q * q * s;
          const pt = p * q * s;
          const ab = pb - pa;
          return {
            prompt: `From an external point {{P}}, tangent {{PT}} has length {{${pt} cm}} and secant {{PAB}} ({{A}} between {{P}} and {{B}}) has external part {{PA = ${pa} cm}}. Find the chord length {{AB}} in {{cm}}.`,
            answer: { type: "number", value: ab },
            solution: [
              `Using {{PT^2 = PA * PB}}: {{${pt}^2 = ${pa} * PB => PB = ${pt * pt} / ${pa} = ${pb} cm}}.`,
              `Chord {{AB = PB - PA = ${pb} - ${pa} = ${ab} cm}}.`,
            ],
            hint: "Find the whole secant {{PB}} from {{PT^2 = PA * PB}}, then subtract {{PA}}.",
            traps: [
              {
                spec: { type: "number", value: pb },
                feedback: `{{${pb} cm}} is the whole secant {{PB}} — subtract {{PA = ${pa} cm}} to find chord {{AB}}!`,
              },
            ],
          };
        }
        let pa = 4, pb = 15, pc = 5, pd = 12;
        for (let i = 0; i < 80; i++) {
          pa = rng.int(3, 9);
          const ab = rng.int(4, 14);
          pb = pa + ab;
          const prod = pa * pb;
          const pcs: number[] = [];
          for (let c = 2; c <= 12; c++) {
            if (c !== pa && prod % c === 0 && prod / c > c + 1) pcs.push(c);
          }
          if (pcs.length) {
            pc = rng.pick(pcs);
            pd = prod / pc;
            break;
          }
        }
        const ab = pb - pa;
        const cd = pd - pc;
        return {
          prompt: `From an external point {{P}}, secant {{PAB}} ({{A}} between {{P}} and {{B}}) and secant {{PCD}} ({{C}} between {{P}} and {{D}}) cut a circle. Given {{PA = ${pa} cm}}, {{AB = ${ab} cm}} and {{PC = ${pc} cm}}, find the chord length {{CD}} in {{cm}}.`,
          answer: { type: "number", value: cd },
          solution: [
            `Whole secant {{PB = ${pa} + ${ab} = ${pb} cm}}.`,
            `Using {{PA * PB = PC * PD}}: {{${pa} * ${pb} = ${pc} * PD => PD = ${pd} cm}}.`,
            `Chord {{CD = PD - PC = ${pd} - ${pc} = ${cd} cm}}.`,
          ],
          hint: "Measure from {{P}}: {{PA * (PA + AB) = PC * PD}}, then subtract {{PC}} from {{PD}}.",
          traps: [
            {
              spec: { type: "number", value: pd },
              feedback: `{{${pd} cm}} is the full secant {{PD}} — subtract {{PC = ${pc} cm}} to get {{CD}}!`,
            },
          ],
        };
      }

      if (rng.bool()) {
        const [p, q] = rng.pick(COPRIME_PAIRS);
        const s = rng.pick([1, 2, 3]);
        const x = p * p * s;
        const pb = q * q * s;
        const pt = p * q * s;
        const ab = pb - x;
        return {
          prompt: `From an external point {{P}}, tangent {{PT}} has length {{${pt} cm}} and secant {{PAB}} ({{A}} between {{P}} and {{B}}) has {{PA = x cm}} and chord {{AB = ${ab} cm}}. Find {{x}}.`,
          answer: { type: "number", value: x },
          solution: [
            `Whole secant {{PB = x + ${ab}}}. Using {{PT^2 = PA * PB}}: {{${pt}^2 = x(x + ${ab})}}.`,
            `{{x^2 + ${ab}x - ${pt * pt} = 0 => (x + ${pb})(x - ${x}) = 0}}.`,
            `Since {{x > 0}}, {{x = ${x}}}.`,
          ],
          hint: `Substitute {{PB = x + ${ab}}} into {{PT^2 = PA * PB}} and factorise the quadratic.`,
          traps: [
            {
              spec: { type: "number", value: pb },
              feedback: `Check your signs when factorising {{(x + ${pb})(x - ${x}) = 0}} — the positive root is {{${x}}}, not {{${pb}}}!`,
            },
          ],
        };
      }

      const [p, q] = rng.pick([
        [1, 3],
        [1, 5],
        [2, 4],
        [3, 5],
        [2, 6],
        [3, 7],
        [4, 6],
        [1, 7],
      ] as const);
      const s = rng.pick([1, 2, 3]);
      const pa = p * p * s;
      const pb = q * q * s;
      const pt = p * q * s;
      const diam = pb - pa;
      const r = diam / 2;
      return {
        prompt: `From an external point {{P}}, tangent {{PT}} has length {{${pt} cm}}, and secant {{PAB}} passes directly through the centre {{O}} of the circle ({{A}} closer to {{P}}). Given {{PA = ${pa} cm}}, find the **radius** of the circle in {{cm}}.`,
        answer: { type: "number", value: r },
        solution: [
          `Using {{PT^2 = PA * PB}}: {{${pt}^2 = ${pa} * PB => PB = ${pb} cm}}.`,
          `Since {{AB}} passes through centre {{O}}, diameter {{AB = PB - PA = ${pb} - ${pa} = ${diam} cm}}.`,
          `Radius {{r = ${diam} / 2 = ${r} cm}}.`,
        ],
        hint: "Use {{PT^2 = PA * PB}} to find {{PB}}, subtract {{PA}} for diameter {{AB}}, and halve for the radius.",
        traps: [
          {
            spec: { type: "number", value: diam },
            feedback: `{{${diam} cm}} is the diameter {{AB}} — divide by {{2}} for the radius!`,
          },
        ],
      };
    },
  },
];
