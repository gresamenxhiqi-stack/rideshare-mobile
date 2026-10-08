# Java 3 · Kartat dhe faqet

## Prova 1 · Lista në telefon

Hapi: hapa faqen kryesore `/` në aplikacionin lokal dhe kontrollova përgjigjen e saj. Rezultati: faqja u përgjigj me HTTP 200 dhe shfaqi tri karta udhëtimi. CSS përmban rregulla për ekranet e ngushta; pamjen në 375 px dhe mungesën e lëvizjes anash duhet t’i provojmë në shfletuesin e telefonit me koleg.

## Prova 2 · Detajet, zero vende dhe ID 99

Hapi: hapa `/udhetimi/2`, `/udhetimi/3` dhe `/udhetimi/99` në aplikacionin lokal. Rezultati: ID 2 u përgjigj me HTTP 200 dhe shfaqi vendtakimin “Te stacioni kryesor”; ID 3 u përgjigj me HTTP 200 dhe shfaqi “Nuk ka vende të lira”; ID 99 u përgjigj me HTTP 404 dhe shfaqi faqen “Udhëtimi nuk u gjet”. Klikimet në shfletues duhen provuar edhe me koleg.

## Prova 3 · Kërkesa dhe kthimi mbrapa

Hapi: hapa `/udhetimi/2/kerkesa` dhe kontrollova përmbajtjen e faqes. Rezultati: faqja u përgjigj me HTTP 200, shfaqi “Simulim: Në pritje” dhe përmban lidhjen te `/udhetimi/2`; faqja e detajeve përmban lidhjen te lista `/`. Kthimin duke klikuar lidhjet duhet ta provojmë edhe me koleg; nuk dërgohet rezervim real.
