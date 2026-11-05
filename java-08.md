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

## Prova me një hyrje të re

**Hyrja që provova:** Në faqen `/java-08-test` shkrova `Biblioteka` në
fushën “Shkruaj vendtakimin” dhe shtypa “Konfirmo në telefon”. Më pas
ndryshova fushën në `Parkingu`, por nuk shtypa përsëri konfirmimin. Në fund
provova edhe një vlerë që përmban vetëm hapësira.

**Parashikimi im para klikimit:** Pas konfirmimit duhet të shfaqet
“Vendtakimi i konfirmuar” me vlerën `Biblioteka`. Ndryshimi në `Parkingu` nuk
duhet ta ndryshojë zgjedhjen derisa të shtypet përsëri konfirmimi. Për vetëm
hapësira, butoni duhet të mbetet i çaktivizuar.

**Çfarë pashë realisht:** U shfaq “Vendtakimi i konfirmuar” dhe `Biblioteka`.
Kur shkrova `Parkingu` pa konfirmuar, `Biblioteka` mbeti zgjedhja e
konfirmuar. Kur fusha përmbante vetëm hapësira, butoni i konfirmimit ishte i
çaktivizuar. Kjo provë u krye në faqen lokale me të dhëna fiktive; nuk u
ruajt dhe nuk u dërgua asnjë vendndodhje.

**Skedari dhe funksioni që e shpjegojnë:** `src/components/Vendtakimi.tsx`;
funksionet `confirmPlace` dhe `useDeviceLocation`. `confirmPlace` përdor
`trim()` për të refuzuar boshllëqet dhe e ndryshon `confirmedPlace` vetëm pas
klikimit.

**Çfarë kuptova ose korrigjova:** Teksti që përdoruesi po shkruan dhe
vendtakimi i konfirmuar janë dy vlera të ndara. Korrigjimi siguron që vetëm
një klikim i qëllimshëm e ndryshon zgjedhjen dhe që hyrja bosh nuk
konfirmohet.

## Privatësia

Provat përdorin të dhëna fiktive. Koordinatat nuk shfaqen, nuk ruhen në
localStorage/cookie/service worker dhe nuk dërgohen në Neon ose te shoferi.

## Verifikim teknik

```text
npm run build  ✓
```
