# Sitcom Episodes — "Grade Nine Or Bust" (IGCSE Maths `4MA1` Higher)

8 narrated animated sitcom episodes (one per Edexcel `4MA1` Higher topic) rendered to `.mp4` + `.jpg` posters in `public/videos/`.

Cast:
- `vani` — Vanishree (Year 11, razor-sharp, deadpan)
- `dad` — Dad (overconfident DIY & spreadsheet disaster)
- `mum` — Mum (sharp, practical)
- `sigma` — Sigma (purple calculus/algebra monster who teaches on the Holo-Board with crisp inline SVGs)
- `examiner` — Chief Examiner (calls out the #1 Edexcel `4MA1` mark-scheme trap in every episode)
- `uncle` / `cashier` — Hawker Uncle Hock & Cashier Kai

Build & render sequentially (`<= 2` parallel `ffmpeg` workers):

```bash
bash scripts/sitcom/make_episode.sh <topic-id>
```
