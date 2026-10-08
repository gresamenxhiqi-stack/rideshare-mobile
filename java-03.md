# Java 3: Kartat dhe faqet

## Prova 1: Lista në telefon

Hapat: Hapa faqen kryesore `/` në aplikacionin lokal dhe kontrollova listën me tri udhëtime. Rezultati real: faqja u përgjigj me HTTP 200 dhe shfaqi tri karta. Stilet për ekran të ngushtë janë në `src/app/globals.css`; provën vizuale në telefon 375 px me koleg nuk e kam kryer ende, prandaj lëvizjen anash nuk e kam konfirmuar.

## Prova 2: Detajet, zero vende dhe ID 99

Hapat: Hapa `/udhetimi/2`, `/udhetimi/3` dhe `/udhetimi/99` në aplikacionin lokal. Rezultati real: ID 2 u përgjigj me HTTP 200 dhe shfaqi vendtakimin “Te stacioni kryesor”; ID 3 u përgjigj me HTTP 200 dhe shfaqi “Nuk ka vende të lira”; ID 99 u përgjigj me HTTP 404 dhe shfaqi “Udhëtimi nuk u gjet”.

## Prova 3: Kërkesa dhe kthimi mbrapa

Hapat: Hapa `/udhetimi/2/kerkesa` dhe kontrollova faqen e detajeve `/udhetimi/2`. Rezultati real: kërkesa u përgjigj me HTTP 200 dhe shfaqi “Simulim: Në pritje”; në faqe gjendet lidhja për te detajet dhe prej detajeve lidhja për te lista `/`. Klikimin mbrapa në shfletues me koleg nuk e kam kryer ende. Nuk dërgohet rezervim real.
