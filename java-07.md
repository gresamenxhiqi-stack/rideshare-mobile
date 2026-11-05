# Java 7 · Provo, korrigjo dhe shpjego RideShare-in

## Rasti im

**Rasti 2 · Pa vende**

Udhëtimi i testimit është ID `2`. Për provën me pa vende, fusha `vende`
duhet të jetë `0` në të dhënat e testimit. Aplikacioni nuk duhet të premtojë
rezervim ose vend të lirë.

## Parashikimi

Kur hap ID 2 nga lista, pres të shoh të njëjtat të dhëna në listë dhe në
detaje. Nëse `vende` është `0`, pres një mesazh të qartë se nuk ka vende dhe
një kërkesë joaktive. Faqja e kërkesës mbetet vetëm demonstrim dhe nuk duhet
ta paraqesë veprimin si rezervim real.

## Dy probleme ose paqartësi të vërejtura

1. Kur një udhëtim nuk gjendet, adresa duhet të shfaqë qartë që udhëtimi
   mungon dhe të japë kthim te lista. Kjo sjellje kontrollohet nga
   `src/app/udhetimi/[id]/not-found.tsx` dhe aktualisht është e qartë.
2. Te detajet, një buton i çaktivizuar “Nuk ka vende të lira” nuk e
   shpjegonte mjaftueshëm pse kërkesa nuk mund të vazhdonte. Përdoruesi mund
   ta kuptonte butonin, por jo domosdoshmërisht kufizimin e rrjedhës.

## Korrigjimi

**Skedari:** `src/app/udhetimi/[id]/page.tsx`

Kur `udhetim.vende === 0`, u shtua mesazhi i statusit:
“Kërkesa është joaktive sepse nuk ka vende të lira.” Butoni mbetet i
çaktivizuar. Nuk u shtuan vende artificiale dhe nuk u ndryshua kontrolli i
serverit. Kjo e bën kufizimin të dukshëm dhe ruan faktin që aplikacioni nuk
kryen rezervime reale.

## Tri prova

### Prova 1 · Rrjedha e listës te detajet

**Hapat:** Hap listën, zgjidh udhëtimin me ID 2 dhe krahaso nisjen,
destinacionin, orën dhe numrin e vendeve me kartën e listës.

**Pritshmëria:** I njëjti ID duhet të shfaqë të njëjtin udhëtim dhe të njëjtat
vlera në detaje.

**Vëzhgimi:** Plotëso pas ekzekutimit në shfletues: `________________`.

### Prova 2 · Korrigjimi me 0 vende

**Hapat:** Vendos `vende = 0` në të dhënat e testimit, rifresko listën, hap
ID 2 dhe vëzhgo pjesën e kërkesës.

**Pritshmëria:** Shfaqet mesazhi që kërkesa është joaktive dhe butoni
“Nuk ka vende të lira” mbetet i çaktivizuar; nuk premtohet rezervim.

**Vëzhgimi:** Plotëso rezultatin real: `________________`.

### Prova 3 · Një hyrje tjetër

**Hapat:** Përdor një ID tjetër që ekziston, ose hap një ID që nuk ekziston,
pa ndryshuar skedarët e aplikacionit.

**Pritshmëria:** ID-ja ekzistuese hap detajet e veta. Për ID-në që mungon,
shfaqet “Udhëtimi nuk u gjet” dhe lidhja kthen te lista.

**Vëzhgimi:** Plotëso rezultatin real: `________________`.

## Versionet

Para: `https://github.com/<llogaria>/<repository>/commit/<commit-para>`

Pas: `https://github.com/<llogaria>/<repository>/commit/<commit-pas>`

Këto dy lidhje duhet të zëvendësohen me adresat e plota nga GitHub pasi të
krijohen commit-i i parashikimit dhe commit-i i korrigjimit. Ato duhet të
jenë në të njëjtin repository dhe të jenë të ndryshme.

## Ndryshimi i ri dhe ndihma

Ndryshimi i ri është mesazhi i qartë i statusit për rastin me 0 vende.
Gjatë korrigjimit u përdor ndihmë për të kontrolluar kërkesat dhe strukturën
e projektit; ndryshimi u verifikua në skedarin ekzistues të detajeve pa krijuar
panel ose rezervim të ri.
