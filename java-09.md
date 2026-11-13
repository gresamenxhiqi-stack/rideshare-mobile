# RideShare — Java 9

## Çfarë ndërtova

Shtova ruajtjen e udhëtimeve të preferuara për përdoruesit e kyçur. Nga faqja e detajeve, përdoruesi mund të ruajë një udhëtim. Ndërfaqja përditëson yllin dhe numrin menjëherë, bllokon butonin gjatë kërkesës dhe i rikthen vlerat e mëparshme nëse serveri nuk e konfirmon ruajtjen. Preferimi ruhet në Neon për çiftin përdorues–udhëtim; çelësi primar dhe `ON CONFLICT DO NOTHING` parandalojnë rreshtat e dyfishtë. Kjo veçori nuk krijon rezervim dhe nuk ndryshon numrin e vendeve.

## Provat që bëra

Nuk munda të kryej prova manuale në aplikacion: në këtë kopje mungon `.env.local`, prandaj nuk ka konfigurim të verifikueshëm për hyrjen GitHub dhe Neon. Më poshtë shënoj veçmas sjelljen që kontrollova në kod; këto nuk janë rezultate të ekzekutimit në shfletues ose databazë.

### Prova 1: Ruajtja e suksesshme mbetet pas rifreskimit.

**Statusi:** Nuk u ekzekutua manualisht.

**Kontrolli në kod:** Faqja lexon gjendjen fillestare me `gjendjaPreferimit`; API-ja bën `INSERT` në `preferimet`, ndërsa skema vendos çelës primar mbi `github_id` dhe `udhetim_id`. Kjo është rrjedha e implementuar për ruajtje dhe rifreskim, por nuk verifikova një rresht real në Neon.

### Prova 2: Gabimi i serverit nuk lë një sukses të rremë në ekran.

**Statusi:** Nuk u ekzekutua manualisht.

**Kontrolli në kod:** Kur `JAVA09_FORCE_FAVORITE_FAILURE=true`, API-ja kthen HTTP 503. Komponenti e trajton përgjigjen jo të suksesshme duke rikthyer gjendjen dhe numrin e mëparshëm dhe shfaq mesazhin për riprovim. Nuk e aktivizova këtë konfigurim dhe nuk vëzhgova sjelljen në shfletues.

### Prova 3: Klikimet e përsëritura nuk krijojnë kopje.

**Statusi:** Nuk u ekzekutua manualisht.

**Kontrolli në kod:** Komponenti bllokon klikimet gjatë kërkesës; databaza ka çelës primar për çiftin përdorues–udhëtim, dhe API-ja përdor `ON CONFLICT DO NOTHING`. Kjo parandalon dublikimin në implementim, por nuk numërova rreshta realë pas klikimeve në aplikacion.

## Ku gjendet puna

- `src/components/FavoritiUdhetimi.tsx` — gjendja optimiste, bllokimi gjatë kërkesës dhe rikthimi në gabim.
- `src/app/api/udhetimet/[id]/preferim/route.ts` — kontrolli i hyrjes, ruajtja dhe përgjigjja e simuluar HTTP 503.
- `src/lib/preferimet.ts` — leximi i gjendjes së preferimit dhe numrit.
- `src/app/udhetimi/[id]/page.tsx` — shfaqja e gjendjes fillestare në detaje.
- `schema-java09.sql` — tabela `preferimet` dhe çelësi primar kundër dublikimeve.
- Demonstrim publik: nuk kam konfirmuar një adresë të publikuar.

## Çfarë mbetet për përmirësim

Duhet të konfigurohen kredencialet e hyrjes dhe lidhja me Neon, të ekzekutohet `schema-java09.sql`, pastaj të bëhen tri provat manuale dhe të regjistrohen rezultatet reale. Aktualisht përdoruesi mund të ruajë një preferim, por nuk mund ta heqë; heqja mund të jetë zgjerim i ardhshëm.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)

Përdora AI për të shqyrtuar modelin e raportit dhe implementimin ekzistues, si dhe për të plotësuar këtë dokument. Verifikova pohimet duke lexuar komponentin, API-në, funksionin e leximit dhe skemën. Nuk i paraqita si të kryera provat manuale që kërkojnë hyrje dhe databazë.
