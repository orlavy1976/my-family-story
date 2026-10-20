# Lavy Family Tree — project goals & status

> **Read this first when opening a new session.** It says where we are, what's
> next, and the conventions this project runs on. Companion docs: `CLAUDE.md`
> (how the app + change-set baking works) and `README.md` (the app itself).
>
> **Maintenance:** keep the Status table and Session log below current — update
> them whenever the family data changes (this is also wired into `CLAUDE.md`).

Last updated: **2026-10-20**

---

## Goal

Build the **Lavy family tree**, from the **beginning of the 20th century to
today**, as a single self-contained web record (this repo). Names + rough
years first; photos, stories and world events filled in visit by visit.

Scope of "done", roughly:
- [ ] Every branch we can remember, back to ~1900, is on the tree
- [ ] Each person: name (EN + HE), birth year, key life moments
- [ ] Deaths recorded for those no longer with us
- [ ] Photos dropped in as they're scanned
- [ ] World events trimmed/added to match the family's geography & history

## Status right now

**One person on the tree: me (Or Lavy).** Everything else is empty and waiting.

| | |
|---|---|
| People | **1** — `or` = Or Lavy, b. 1976 |
| Unions | 0 |
| Side-links | 0 |
| Home people photos | 0 |
| Timeline range | 1976 → 2026 |
| Baseline version | `baseV 34` (`tree-seed.js`) |
| App version | v1.1.2 |
| Pending change-set | none (sidecars clean) |

The demo Adler family is gone (commit `86e5544`) — the app was also fixed to
handle an empty tree properly, so this is a clean start.

## Next steps (rough order)

1. **Add my parents** — the next gen-0 pair. Gives the tree its real roots.
2. **Add my grandparents** on both sides (4 people) — pushes the record back
   toward the early 1900s, which is the stated goal.
3. **Siblings, spouse/partner, children** — fill out the middle generations.
4. **Great-grandparents / great-aunts** as remembered — care with spelling.
5. **Photos**: scan and drop in, one person at a time (in-app crop is best).
6. **Stories & world events**: once names are in, add the era they lived
   through (aliyot, wars, migrations, professions).

Open question we hit early: **exact dates.** The data model stores
`birth.year` only — no month/day field anywhere. Today "30 January 1976" lives
in my birth *story* text. If day-level dates matter (birthdays etc.), that's an
app feature to add — not yet decided.

---

## How this project works (conventions)

**Two ways to add data:**
1. **In the app** (`Edit tree`) — click a person, hang parents / partners /
   children off them; the Records Room edits fields and stories.
2. **In the chat** — tell me names + rough years and I write them straight
   into `family-data.js`, then commit. Fastest for bulk.

Either way, edits made *in the app* accumulate as a **change-set** that I
**bake** into the baseline (photos → real files, edits → source files, `baseV`
+1). Never hand-edit the sidecars.

**Files that matter:**
| File | What it is |
|---|---|
| `family-data.js` | **the family** — people, unions, side-links. Hand-editable. |
| `tree-seed.js` | the shared baseline — baked photos + `baseV`. Claude writes it on bake. |
| `world-events.js` | the history band (43 events; toggle in Records Room) |
| `photos/` | real photo files (`ph-*` people, `wev-*` world events) |
| `.ft-doc.state.json`, `.image-slots.state.json` | working sidecars — **#1 rule: git will think these change on every run; commit them deliberately** |

**Versions & commits:**
- App changes (features/fixes) → bump `CHANGELOG.md` + the `App version` line
  in `README.md` / `README.he.md`.
- Data bakes → bump `tree-seed.js` `baseV` only. **Separate counter.**
- Push to `origin` = https://github.com/orlavy1976/my-family-story (personal
  fork). Repo-local git identity is already `orlavy1976`; pushes work without
  touching the work `gh` account.

**Running it locally:**
```bash
cd ~/dev/personal/my-family-story
python3 -m http.server 8777
# http://localhost:8777/Family%20Tree.html      (editing on)
# http://localhost:8777/Family%20Tree.html?edit=0   (viewer-only)
```
Must be served over HTTP (not `file://`) — the app fetches its own JSON/JSX.

**Known gotchas:**
- `MIN_YEAR` is captured at **page load**, so after adding an early-born person
  in-app, **reload** to rescale the timeline.
- Exact dates are **year-only** in the data model (see open question above).
- Photos in the working copy are data URLs until baked into `photos/`.

---

## Session log

### 2026-10-20
- Forked `aviranrevach/my-family-story` to `orlavy1976/my-family-story`; set
  `origin` = my fork, `upstream` = the original.
- Cleared the demo Adler family (people, 126 photos, stories) → `baseV 34`;
  kept the world-events library and its images.
- **App fix v1.1.2:** empty tree is now a first-class state — a "First person"
  card appears in Edit tree, and the Records Room / layout no longer crash at
  zero people. (The old demo-first app had no way to plant the very first
  person.) Verified in headless Chrome, 0 console errors.
- Set repo-local git identity to `orlavy1976` + keychain token so pushes work
  with the work `gh` account active.
- **Planted the first person:** `or` = Or Lavy, b. 30 January 1976 (gen 0).
  Timeline now 1976 → present; top-bar subtitle made dynamic.
- Baby photo (`~/Downloads/A6023121_002.jpg`, 1600×1060) **not added** — the
  model can't see images; add it via the app so the crop can be set visually.
