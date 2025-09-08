# Ram Tech Institute — Next.js + Supabase

This is a Next.js (App Router) app wired for Supabase and Tailwind CSS. It scaffolds public pages and an admin area to integrate your Figma designs and data.

## Stack
- Next.js 14+ (App Router)
- React 18
- Tailwind CSS 3
- Supabase (Auth + Database)

## Getting Started
1) Install deps
```bash
npm install
```

2) Environment
- Copy `.env.local.example` to `.env.local` and fill values from your Supabase project.
```
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
# Optional (server-side only). Do NOT expose this in the client.
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

3) Tailwind is already configured. Start dev server
```bash
npm run dev
```
The app runs at http://localhost:3000

4) Database (Supabase)
- Create a project at https://supabase.com
- Run the SQL in `supabase/schema.sql` in the Supabase SQL editor to create tables.
- Configure RLS as desired. For MVP, you can keep RLS off while wiring the UI.

## Routes planned
- Public:
  - `/` (Home)
  - `/courses`
  - `/trainer-register`
  - `/about`
  - `/contact`
- Admin:
  - `/admin/login`
  - `/admin/trainers`
  - `/admin/courses`
  - `/admin/demo-classes`
  - `/admin/statistics`
  - `/admin/requests`

## Where to put code
- UI and pages live in `app/` (App Router).
- Global CSS in `app/globals.css` (Tailwind imported here).
- Supabase client helpers in `lib/supabase/`.

## Next steps
- Port each Figma page design into its corresponding component in `app/`.
- Connect forms and lists to Supabase using the client in `lib/supabase/`.
- Add auth guard for admin routes (Supabase Auth). Redirect unauthenticated users to `/admin/login`.
- Add RLS policies or protect writes via server components / route handlers with the service role key.
