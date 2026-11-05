# Java 8 · Sensorët dhe Device APIs

## Çfarë u ndërtua

U shtua zgjedhja dhe konfirmimi lokal i vendtakimit për Artën. Në detajet e
udhëtimit përdoruesi mund të kërkojë vendndodhjen vetëm pasi shtyp butonin,
ose mund të shkruajë vetë një vendtakim. Zgjedhja e konfirmuar ruhet vetëm në
state lokale të komponentit dhe nuk dërgohet te shoferi.

Komponenti kryesor është [src/components/Vendtakimi.tsx](./src/components/Vendtakimi.tsx).
Ai përdoret në [src/app/udhetimi/[id]/page.tsx](./src/app/udhetimi/[id]/page.tsx).

## Faqja e testimit

Hap `/java-08-test`. Faqja përdor të dhëna fiktive dhe nuk kërkon Neon ose
hyrje në GitHub. Përmes listës së simulimit mund të provohen:

- Rasti 1 · Leja pranohet;
- Rasti 2 · Leja refuzohet;
- Rasti 3 · Koha mbaron;
- Rasti 3 · Pa mbështetje.

Në faqen reale të udhëtimit përdoret Geolocation API i pajisjes dhe leja
kërkohet vetëm pas klikimit.

## Provat

### Prova 1 · Leja pranohet

**Hapat:** Hapa `/java-08-test`, zgjodha “Leja pranohet” dhe shtypa
“Përdor vendndodhjen time”.

**Pritshmëria:** Shfaqet mesazh që pika u mor dhe mund të konfirmohet
“Vendndodhja ime”, pa shfaqur koordinata.

**Vëzhgimi:** Plotëso rezultatin real: `________________`.

### Prova 2 · Leja refuzohet

**Hapat:** Zgjodha “Leja refuzohet” dhe shtypa butonin e vendndodhjes.

**Pritshmëria:** Shfaqet mesazh refuzimi dhe fusha manuale mbetet e përdorshme.

**Vëzhgimi:** Plotëso rezultatin real: `________________`.

### Prova 3 · Koha mbaron ose pajisja nuk mbështetet

**Hapat:** Prova të dyja opsionet nga lista e simulimit.

**Pritshmëria:** Shfaqet mesazh i veçantë për timeout ose mungesë mbështetjeje
dhe përdoruesi mund të vazhdojë me tekst manual.

**Vëzhgimi:** Plotëso rezultatin real: `________________`.

### Prova 4 · Zgjedhja manuale

**Hapat:** Shkrova `Biblioteka` dhe shtypa “Konfirmo në telefon”. Pastaj
shkrova `Parkingu` pa konfirmuar dhe provova vetëm hapësira.

**Pritshmëria:** “Biblioteka” mbetet e konfirmuar derisa të konfirmohet vlera
e re; vetëm hapësirat nuk aktivizojnë konfirmimin.

**Vëzhgimi:** Plotëso rezultatin real: `________________`.

## Privatësia

Provat përdorin të dhëna fiktive. Koordinatat nuk shfaqen, nuk ruhen në
localStorage/cookie/service worker dhe nuk dërgohen në Neon ose te shoferi.

## Verifikim teknik

```text
npm run build  ✓
```
