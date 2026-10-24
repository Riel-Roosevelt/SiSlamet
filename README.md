# SiSlamet UI v0.3 — Mobile User + Admin Monitoring

Responsive Next.js UI prototype for the SiSlamet HSE operations app.

## What's included
- Admin monitoring dashboard with activity planning, realization, HSE report, and HSE performance views.
- Mobile-first field-user home showing today's scheduled activities and progress.
- Field realization form with date, notes, and optional photo picker (camera/gallery capable on supported phones).
- Demo role switch between Admin Monitoring and User Lapangan.
- SiSlamet safety mascot asset.
- Dummy data only. Nothing is sent to a database; role switch is only a UI preview, not authentication or authorization.

## Run locally
1. Install Node.js LTS.
2. Extract this folder and open a terminal inside it.
3. Run `npm install`
4. Run `npm run dev`
5. Open http://localhost:3000

## Next steps
Connect Supabase Auth, PostgreSQL tables, Storage for evidence photos, and enforce permissions with Row Level Security before real use. Admin/User role access in this prototype is for preview only.
