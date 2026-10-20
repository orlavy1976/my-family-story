/* ============================================================
   Family Tree — the family record.
   (Started empty on 2026-10-20 — the demo Adler family was
   cleared to make room for the real one. Git history holds
   the old demo if it's ever needed.)

   How to add people: easiest is in the app (☰ → Edit tree →
   Add person), then paste the change-set from the Save dialog
   into the Claude chat to bake it in. Or just tell Claude the
   names and years and it writes them here directly.

   Shape of the data (hand-editing is fine):
     const people = [
       { id: 'yosef',            // unique slug, used for photos & links
         gen: 0,                 // generation row (0 = oldest)
         sex: 'm' | 'f',
         name: { en: 'Yosef Adler', he: 'יוֹסֵף אַדְלֶר' },
         birth:  { year: 1903, place: 'Vilnius, Lithuania' },
         death:  { year: null, place: null },   // null death = living
         parents: [],           // ids of the parents
         milestones: [          // life-story moments (photos key off the index)
           { year: 1934, en: 'Emigrated', he: 'עלה לארץ', tier: 'major'|'minor',
             post: '…story text…', postHe: '…' }
         ],
         bio: { en: '…one line…', he: '…' } },
     ];
     const unions   = [ { id: 'u_a_b', a: 'id1', b: 'id2', year: 1929, type: 'marriage'|'partnership' } ];
     const sideLinks = [ { from: 'id1', to: 'id2', kind: 'Godfather' } ];
   ============================================================ */
(function () {
  // Sex: 'm' | 'f'. living derived from deathYear == null.
  // gen: generation row (0 = oldest). Spouses-in share partner's gen.
  const people = [];

  // Unions (marriages & partnerships). a/b are person ids. order = layout order of the spouse relative to focal (not critical).
  const unions = [];

  // Side-links — non-blood ties. kind is a free label.
  const sideLinks = [];

  window.FAMILY = { people, unions, sideLinks };
})();
