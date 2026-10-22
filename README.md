# NexHub Website

Marketing site for [nexhub.africa](https://nexhub.africa) — **where learning becomes trusted**.

Dark-theme Next.js landing page for the NexHub product: one mobile app (student, teacher, parent roles) and a school portal for institutional ops and **NexHub Records**.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## What’s on the homepage

- Hero + brand mark (“Where learning becomes trusted”)
- Everyday school-life story (RedNotes, activities, events, parents in the loop)
- How school life flows → NexHub Records
- Roles (one app, three roles + school portal)
- Still more of school life (class pulse, timetables, etc.)
- Product surfaces — frosted role phone carousels + school portal frames
- Trust / access CTA

## Screenshots

Drop captures into `public/screenshots/`. Filenames currently used by the homepage:

**Mobile (per role carousels)**

- Teacher: `mobile-teacher-inbox.png`, `mobile-teacher-boards.png`, `mobile-teacher-events.png`
- Student: `mobile-student-home.png`, `mobile-student-rednote-create.png`, `mobile-student-rednote-detail.png`, `mobile-student-events.png`, `mobile-profile-learning.png`, `mobile-student-class-board.png`
- Parent: `mobile-parent-class-board.png`, `mobile-parent-dashboard.png`

**School portal**

- `admin-students-list.png`
- `admin-nexhub-records.png`

See also `public/screenshots/README.md`. Soft frost is applied in the UI (CSS) — no need for a separate scrub pipeline for the live site.

## Brand

- Primary green: `#00674F` / bright `#56B38A`
- Dark surfaces: `#0E1F17`, `#0B1A14`, cards `#142D23`
- Logo mark: four nodes + diagonal N (`components/NexHubLogo.tsx`)

## Project layout

```
app/                 # routes, layout, globals
components/          # page sections + RolePhoneCarousel / ScreenshotFrame
public/screenshots/  # product teasers
assets/logo/         # SVG logo sources
```

## License

© NexHub · Built in Nigeria
