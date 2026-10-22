# NexHub website — screenshot shot list

Drop final images into `public/screenshots/` using the filenames below.
Homepage placeholders reference these paths. Until files exist, the site shows labeled frames.

Aspect tips: phone UI → portrait `9:16` or cropped phone frame; admin UI → landscape `16:9`.

Story framing for captions: everyday school life that quietly builds a NexHub Record — growth through school, not just exam results. RedNote = Read Every Day. One app, three roles.

---

## Mobile app (Expo / nexa)

| ID | Filename | Capture from | Why |
|----|----------|--------------|-----|
| M01 | `mobile-student-home.png` | Student Home | Daily hub: featured, upcoming events |
| M02 | `mobile-student-rednote-create.png` | Student learning-note create | After-school jot / video of what they learnt |
| M03 | `mobile-student-rednote-detail.png` | Student note detail (teacher-confirmed) | Confirmed everyday learning |
| M04 | `mobile-teacher-inbox.png` | Teacher Inbox (pending) | Day’s notes, activities, recommendations |
| M05 | `mobile-teacher-approve.png` | Teacher approve moment | Human confirmation of truth |
| M06 | `mobile-student-events.png` | Student Events list | Class / school life participation |
| M07 | `mobile-teacher-event-checkin.png` | Teacher event check-in roster | Who showed up |
| M08 | `mobile-student-rsvp-detail.png` | Student event detail (Going) | Student side of events |
| M09 | `mobile-parent-dashboard.png` | Parent dashboard | Full child trail: notes, events, attendance |
| M10 | `mobile-profile-learning.png` | Student profile / learning trail | Record building over years |
| M11 | `mobile-parent-notifications.png` | Parent notifications (event / assignment) | School reaches parent in-app |
| M12 | `mobile-teacher-post-assignment.png` | Teacher posting assignment / event notice | Safer reach to home |

## School admin (`nexhub-school-admin`)

| ID | Filename | Capture from | Why |
|----|----------|--------------|-----|
| S01 | `admin-students-list.png` | Students list | School runs people here |
| S02 | `admin-student-detail.png` | Student detail (overview) | Identity + enrollment |
| S03 | `admin-teachers.png` | Teachers list / upload | Teacher provisioning |
| S04 | `admin-classes.png` | Classes & subjects | Academic structure |
| S05 | `admin-final-approvals.png` | Final approvals / NexHub Records | School seals official record |
| S06 | `admin-verification-link.png` | Issue NexHub Record UI | Cryptographic immutable record |
| S07 | `admin-attendance-readonly.png` | Student attendance tab | Institutional + parent-visible story |

## Super admin (`nexhub-super-admin`)

| ID | Filename | Capture from | Why |
|----|----------|--------------|-----|
| P01 | `platform-schools.png` | Schools list | Platform provisions schools |
| P02 | `platform-school-detail.png` | School detail / docs review | Onboarding schools |
| P03 | `platform-finance.png` | Finance / billing | Issuance capacity (when shown) |

## Public verify (website) — later

Hold until the product is ready to promote outward verification. Do not feature on homepage CTAs yet.

| ID | Filename | Capture from | Why |
|----|----------|--------------|-----|
| V01 | `verify-success.png` | `/verify` success (real API) | For partners / admissions later |

---

## Priority order to shoot first

1. M02 → M04 → M05 (everyday note → teacher inbox → confirm)  
2. M09 → M11 (parent trail + in-app notice)  
3. M06 → M07 (events + check-in)  
4. S05 → S06 (school seal → cryptographic share link)  
5. M01 (home) as product still  
6. Rest as polish  

## Capture notes

- Use a real pilot school account, not dummy class lists.
- Prefer light content that won’t leak real student PII; blur names/photos if needed.
- Keep device chrome consistent (one iPhone frame style for all mobile shots).
- Admin shots: same browser zoom, hide bookmarks bar.
- Caption language: “learning note / what they learnt,” not “complete RedNote task.”
