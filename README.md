# RideShare Mobile

Prototip mësimor Next.js për listën e udhëtimeve, detajet dhe një kërkesë të simuluar. Udhëtimet lexohen nga PostgreSQL në Neon; nuk kryhen pagesa ose rezervime reale.

## Nisja lokale

```bash
npm install
npm run dev
```

Hap adresën që shfaq terminali (zakonisht `http://localhost:3000`). Për lidhjen me Neon, ekzekuto `schema.sql` në Neon SQL Editor dhe vendos lidhjen private në `DATABASE_URL` brenda `.env.local`. Mos e ngarko `.env.local` në GitHub.
