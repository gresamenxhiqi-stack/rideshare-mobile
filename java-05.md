# Java 5 · Hyrja dhe lejet

## Përmbledhje

U shtua hyrja me GitHub dhe paneli i shoferit. Roli dhe pronari lexohen nga
Neon; formulari nuk mund ta anashkalojë kontrollin server-side.

## Skedarët kryesorë

- `schema-java05.sql` krijon `profilet` dhe lidh pronarët me udhëtimet.
- `src/lib/auth.ts` dhe `src/app/api/auth/[...nextauth]/route.ts` trajtojnë sesionin GitHub.
- `src/lib/lejet.ts` kontrollon rolin dhe pronarin para `UPDATE`.
- `src/app/panel/` përmban panelin dhe veprimin server-side.

## Rezultatet e provave

### Prova 1 · sesioni

Pas konfigurimit të OAuth App dhe variablave në `.env.local`, paneli shfaq
emrin, ID-në dhe rolin e llogarisë. Dalja e llogarisë e kthen panelin te
butoni “Hyr me GitHub”.

### Prova 2 · ruajtja e lejuar

Pasi profili u caktua si `shofer` dhe udhëtimi me ID `2` iu caktua të njëjtit
`github_id`, formulari lejon ndryshimin e orës dhe rifreskon listën dhe
detajet e udhëtimit.

### Prova 3 · refuzimi

Ndryshimi i ID-së së fshehur nga `2` në `1` refuzohet nga serveri, sepse
`shofer_id` i udhëtimit nuk përputhet me përdoruesin e sesionit. Ora e ID-së
`1` nuk ndryshohet.

## Konfigurimi lokal

Sekretet duhet të vendosen vetëm në `.env.local`:

```text
GITHUB_ID="..."
GITHUB_SECRET="..."
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="http://localhost:3000"
DATABASE_URL="..."
```

`.env.local` nuk duhet të publikohet në GitHub.
