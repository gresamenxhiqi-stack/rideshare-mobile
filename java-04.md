# Java 4 · Udhëtimet lexohen nga Neon

## Prova 1 · Ndryshimi ruhet në databazë

Hapat: Në Neon SQL Editor duhet ndryshuar ora e ID 2 në `08:25`, të rifreskohen lista dhe detajet, pastaj ora të kthehet në `08:15`. Rezultati real në këtë mjedis: prova nuk u krye, sepse nuk ka databazë Neon të lidhur dhe `DATABASE_URL` nuk është konfiguruar; ndryshimi i orës nga Neon ende nuk është verifikuar.

## Prova 2 · Lista bosh nuk është gabim lidhjeje

Hapat: Duhet shtuar përkohësisht `WHERE false` te pyetja e listës, të rifreskohet faqja, pastaj kushti të hiqet dhe faqja të rifreskohet përsëri. Rezultati real në këtë mjedis: prova nuk u krye, sepse pa `DATABASE_URL` nuk mund të ekzekutohet pyetja në Neon. Faqja është implementuar të shfaqë “Nuk ka udhëtime për momentin.” kur pyetja kthen zero rreshta.

## Prova 3 · Lidhja mungon dhe pastaj rikthehet

Hapat: Kontrollova listën, detajet dhe kërkesën pa `DATABASE_URL` të konfiguruar. Rezultati real: të tri adresat u përgjigjën me HTTP 200 dhe shfaqën “Nuk u lidhëm me databazën. Provo përsëri.”; nuk ka `.env.local` në këtë mjedis. Rilidhja me kredencialet e Neon ende nuk është provuar.

## Konfigurimi

Ekzekuto `schema.sql` në Neon SQL Editor. Vendos lidhjen private të Neon si `DATABASE_URL` në `.env.local` pranë `package.json`, pastaj rinis `npm run dev`. `.env.local` nuk duhet ngarkuar në GitHub.
