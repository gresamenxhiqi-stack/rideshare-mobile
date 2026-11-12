# Java 9 · Udhëtimet e preferuara

## Çfarë u ndërtua

- Përdoruesi i kyçur ruan një udhëtim nga faqja e detajeve.
- Ylli dhe numri përditësohen menjëherë; gjatë kërkesës butoni bllokohet.
- Në dështim pamja kthehet te vlerat e mëparshme dhe shfaqet mundësia për riprovim.
- Preferimet ruhen në Neon për çiftin përdorues–udhëtim. Çelësi primar e bën
  shkrimin të përsëritshëm pa krijuar rreshta dublikatë.
- Veprimi nuk dërgon kërkesë rezervimi dhe nuk ndryshon numrin e vendeve.

## Skedarët

- `src/components/FavoritiUdhetimi.tsx` — ndërfaqja optimiste dhe rikthimi në gabim.
- `src/app/api/udhetimet/[id]/preferim/route.ts` — verifikimi i hyrjes dhe shkrimi.
- `src/lib/preferimet.ts` — leximi i gjendjes së preferimit.
- `src/app/udhetimi/[id]/page.tsx` — gjendja fillestare nga serveri.
- `schema-java09.sql` — skema e tabelës dhe kufizimi unik.

## Provat

Ekzekutoji me hyrje aktive dhe pas aplikimit të `schema-java09.sql`:

1. **Ruajtje dhe rifreskim:** ruaj një udhëtim dhe rifresko faqen.
   Rezultati: yll i mbushur, numër i qëndrueshëm, një rresht në `preferimet`.
   **Rezultati real:** për t'u plotësuar pas provës në Neon.
2. **Gabim dhe riprovim:** vendos përkohësisht
   `JAVA09_FORCE_FAVORITE_FAILURE=true`, provo ruajtjen, pastaj çaktivizoje dhe
   provo sërish. Rezultati: pas gabimit ylli dhe numri rikthehen; pas riprovimit
   preferimi ruhet. **Rezultati real:** për t'u plotësuar.
3. **Përsëritje:** kliko disa herë gjatë pritjes; butoni pranon vetëm kërkesën e
   parë ndërsa pret. Pas suksesit, kliko **Ruaj përsëri** për të dërguar sërish
   të njëjtin synim. Rezultati: vetëm një rresht për çiftin përdorues–udhëtim.
   **Rezultati real:** për t'u plotësuar.

## Kufizimet dhe ndihma

- Heqja e preferimit nuk është përfshirë; është zgjerim opsional.
- Provat manuale të mësipërme nuk pretendohen të jenë ekzekutuar. Plotëso
  rezultatet reale para dorëzimit.
- U përdor ndihma e AI për zbatimin dhe kontrollin teknik; provat në Neon dhe
  konfirmimi i sjelljes duhet të bëhen nga studenti.
