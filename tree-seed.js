// tree-seed.js — the SHARED BASELINE of the family record.
// This file is only ever edited by Claude, when someone pastes a change-set
// ("save file") into the project chat. Claude bakes the pending changes from
// the working sidecars (.image-slots.state.json / .ft-doc.state.json) into
// real project files and updates this baseline. See CLAUDE.md for the exact
// procedure.
//
//   seedStamp  bump to Date.now() on every bake — clients drop their
//              published ops when they see a newer stamp.
//   baseV      human-friendly version counter, +1 per bake.
//   slots      { [slotId]: { src, w, h, s, x, y } } — baked photos.
//              src is a real project file (photos/…), never a data URL.
//              ph-<person>-e<idx> = milestone photo · av-<person>-e<idx> = avatar crop.
//   excluded   [key] — photos hidden from the tree, key = `<person>-e<idx>`.
//
// v34: cleared the demo Adler family (people, photos, stories) — empty
// baseline, ready for the real family record.
window.FT_SEED = {
  seedStamp: 1792497159132,
  baseV: 34,
  slots: {},
  excluded: [],
};
