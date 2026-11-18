# Year 11 IGCSE Maths Lab (`4MA1` Higher)

Interactive Pearson Edexcel International GCSE Mathematics A (`4MA1` Higher Tier) study dashboard built for **Vanishree** (Year 11, Tanglin Trust School):

- **Zero-login instant launch** (`localStorage` persistence under `y11maths.*` for stars, streaks, draft answers, SRS review queue, and watched episodes).
- **8 Complete Edexcel `4MA1` Higher Units**:
  1. `number-bounds-surds` — Bounds, Standard Form, Fractional/Negative Indices & Surds
  2. `algebra-quadratics` — Expanding 3 Brackets, Quadratics, Completing the Square, Algebraic Fractions & Proof
  3. `equations-inequalities` — Quadratic/Fraction Equations, Linear-Quadratic Simultaneous & Quadratic Inequalities
  4. `sequences-functions-graphs` — Arithmetic Series `S_n`, Composite/Inverse Functions, Curves & Transformations
  5. `calculus-kinematics` — Differentiation `dy/dx`, Tangents, Stationary Points & Kinematics (`s`, `v`, `a`)
  6. `mensuration-circles` — Sectors, 3D Cones/Spheres/Frustums, `k²`/`k³` Similarity & Circle Theorems
  7. `trigonometry-3d` — 3D Trig, Sine Rule (Ambiguous Case), Cosine Rule, `½ab sin C`, Bearings & Trig Graphs
  8. `vectors-sets-stats` — Vector Proofs, Sets/Venn Diagrams, Conditional Probability, Cumulative Frequency & Histograms
- **🎯 Exam-Prep & Marks-Savers Vault (`/formulas` + `Revise` tab)**: Explicit `Never Write This ❌ → Write This Instead ✅` examiner comparisons, M1/A1 mark-scheme pitfalls, and targeted `traps` feedback on practice questions.
- **4 Cross-Topic `4MA1` Higher Mock Papers (`/exam`)**, **Interactive Explorables**, **3-Tier Seeded Drills (`/skills`)**, **60s Fluency Sprint (`/sprint`)**, and **8 Narrated Animated Sitcom Episodes (`/episodes`)** (*Grade Nine Or Bust*).

## Commands

```bash
npm run gen        # regenerate topic, exam, drill, and widget registries
npm run validate   # validate all 8 topics, 4 mock exams, and all drills
npm test           # unit + content + server safety tests
npm run lint       # ESLint
npm run build      # Next.js 16 production build
```
