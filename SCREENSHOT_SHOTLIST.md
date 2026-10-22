# NexHub website — screenshot shot list

Drop final images into `public/screenshots/` using the filenames below.
Homepage placeholders reference these paths. Until files exist, the site shows labeled frames.

Aspect tips: phone UI → portrait `9:16` or cropped phone frame; admin UI → landscape `16:9`.

---

## Mobile app (Expo / nexa)

| ID | Filename | Capture from | Why |
|----|----------|--------------|-----|
| M01 | `mobile-student-home.png` | Student Home | Product proof: dashboard, Featured, upcoming events |
| M02 | `mobile-student-rednote-create.png` | Student RedNote create | Start of learning record |
| M03 | `mobile-student-rednote-detail.png` | Student RedNote detail (verified) | Teacher-verified content |
| M04 | `mobile-teacher-inbox.png` | Teacher Inbox (pending items) | Verification workload |
| M05 | `mobile-teacher-approve.png` | Teacher RedNote / activity approve | ConfirmSheet / approve moment |
| M06 | `mobile-student-events.png` | Student Events list + countdown chip | Events + RSVP world |
| M07 | `mobile-teacher-event-checkin.png` | Teacher event detail / check-in roster | Participation truth |
| M08 | `mobile-student-rsvp-detail.png` | Student event detail (Going) | Student side of events |
| M09 | `mobile-parent-dashboard.png` | Parent dashboard (when ready) | Parent visibility story |
| M10 | `mobile-profile-learning.png` | Student profile / learning stats | Record building over time |

## School admin (`nexhub-school-admin`)

| ID | Filename | Capture from | Why |
|----|----------|--------------|-----|
| S01 | `admin-students-list.png` | Students list | School runs people here |
| S02 | `admin-student-detail.png` | Student detail (overview) | Identity + enrollment |
| S03 | `admin-teachers.png` | Teachers list / upload | Teacher provisioning |
| S04 | `admin-classes.png` | Classes & subjects | Academic structure |
| S05 | `admin-final-approvals.png` | Final approvals / credentials queue | School signs off records |
| S06 | `admin-verification-link.png` | Issued verification / share link UI | School gives student the link |
| S07 | `admin-attendance-readonly.png` | Student attendance tab | Institutional visibility |

## Super admin (`nexhub-super-admin`)

| ID | Filename | Capture from | Why |
|----|----------|--------------|-----|
| P01 | `platform-schools.png` | Schools list | Platform provisions schools |
| P02 | `platform-school-detail.png` | School detail / docs review | Onboarding schools |
| P03 | `platform-finance.png` | Finance / billing | Issuance capacity (when shown) |

## Public verify (website)

| ID | Filename | Capture from | Why |
|----|----------|--------------|-----|
| V01 | `verify-success.png` | `/verify` success state (real API) | Close the trust loop for outsiders |

---

## Priority order to shoot first

1. M02 → M04 → M05 (RedNote create → teacher inbox → approve)  
2. M06 → M07 (events + check-in)  
3. S05 → S06 (school approval → shareable link)  
4. M01 (home) as hero product still  
5. Rest as polish  

## Capture notes

- Use a real pilot school account, not dummy “JSS 1” mock lists.
- Prefer light content that won’t leak real student PII; blur names/photos if needed.
- Keep device chrome consistent (one iPhone frame style for all mobile shots).
- Admin shots: same browser zoom, hide bookmarks bar.
