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
  const people = [
    // ---- Gen 0 — my parents ----
    { id: 'israel', gen: 0, sex: 'm', name: { en: 'Israel Lavy', he: 'יִשְׂרָאֵל לָבִי' },
      birth: { year: 1946, place: 'Kibbutz Shamir, Israel' }, death: null, parents: [], milestones: [
        { year: 1946, en: 'Born — 31 December 1946', he: 'נוֹלָד — 31 בְּדֶצֶמְבֶּר 1946', tier: 'major',
          post: 'Born on 31 December 1946 at Kibbutz Shamir, in the Upper Galilee — the last day of the year.' } ],
      bio: { en: 'Born 31 December 1946 at Kibbutz Shamir. My father.', he: 'נולד ב-31 בדצמבר 1946 בקיבוץ שמיר. אבא שלי.' } },
    { id: 'ruthi', gen: 0, sex: 'f', name: { en: 'Ruthi Lavy', he: 'רוּתִי לָבִי' },
      birth: { year: 1946, place: 'Germany' }, death: { year: 1999, place: '' }, parents: [], milestones: [
        { year: 1946, en: 'Born — 17 August 1946', he: 'נוֹלְדָה — 17 בְּאוֹגוּסְט 1946', tier: 'major',
          post: 'Born on 17 August 1946 in Germany — the year after the war, among the displaced families of post-war Europe.' },
        { year: 1999, en: 'Died — 9 December 1999', he: 'נִפְטְרָה — 9 בְּדֶצֶמְבֶּר 1999', tier: 'major',
          post: 'Died on 9 December 1999, aged 53.' } ],
      bio: { en: 'Born 17 August 1946 in Germany; died 9 December 1999. My mother.', he: 'נולדה ב-17 באוגוסט 1946 בגרמניה; נפטרה ב-9 בדצמבר 1999. אמא שלי.' } },

    // ---- Gen 1 ----
    { id: 'or', gen: 1, sex: 'm', name: { en: 'Or Lavy', he: 'אוֹר לָבִי' },
      birth: { year: 1976, place: '' }, death: null, parents: ['israel', 'ruthi'], milestones: [
        { year: 1976, en: 'Born — 30 January 1976', he: 'נוֹלָד — 30 בְּיָנוּאָר 1976', tier: 'major',
          post: 'Born on 30 January 1976.' } ],
      bio: { en: 'Born 30 January 1976. Son of Israel and Ruthi.', he: 'נולד ב-30 בינואר 1976. בנם של ישראל ורותי.' } },
  ];

  // Unions (marriages & partnerships). a/b are person ids. order = layout order of the spouse relative to focal (not critical).
  const unions = [
    { id: 'u_israel_ruthi', a: 'israel', b: 'ruthi', type: 'marriage' },
  ];

  // Side-links — non-blood ties. kind is a free label.
  const sideLinks = [];

  window.FAMILY = { people, unions, sideLinks };
})();
