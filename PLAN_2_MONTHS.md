# 2-Month Plan — 10 Individual Projects (Skill-Focused)

## Assumptions (so you can execute fast)
- Create **one separate repository** per project on GitHub (10 repos total).
- Use a **consistent stack** across most projects to reduce setup time:
  - Frontend: React + Vite
  - Backend: Node.js + Express (optional TypeScript)
  - Database: PostgreSQL
  - ORM: Prisma
- Each project targets a working MVP by end of Month 2.

## Output by the end of 2 months
For each project: 
- Deployed or runnable MVP
- ERD/schema + migrations
- Auth/roles (when required)
- Tests (minimum: unit/integration for critical path)
- README with setup + MVP features + known limitations

---

## Week-by-week schedule

### Month 1
**Week 1 (Scaffolds + foundation)**
- Create repo/recommended stack templates
- Implement shared conventions: README, env vars, Prisma setup
- Start projects 1–3 with basic auth scaffolding if needed

**Week 2 (ERP core + LMS core + CRM core)**
1) Enterprise ERP System
- Roles (RBAC) + base entities (Users, Roles, HR employees, Inventory items)
- Basic CRUD + audit fields
2) Learning Management System (LMS)
- Courses, modules, lesson pages, quiz skeleton
3) Multi-Tenant SaaS CRM
- Tenants + users + leads + basic analytics skeleton

**Week 3 (ERP relationships + LMS progress + CRM deals)**
1) ERP: inventory + sales + accounting tables and relationships
2) LMS: quizzes, scoring + student progress tracking
3) CRM: deals pipeline + email campaign skeleton (store + send mock)

**Week 4 (AI Resume/Interview + Real-time PM + Logistics core)**
- Project 2: AI Resume & Interview Platform
  - Resume upload + parse/scoring pipeline (stub or demo AI integration)
- Project 3: Real-Time Project Management Tool
  - Kanban board + drag-and-drop (UI) + WebSocket event model
- Project 5: Logistics & Fleet Management
  - Fleet entities + delivery scheduling CRUD + route optimization placeholder

### Month 2
**Week 5 (ERP reporting + LMS certificates + CRM security)**
- ERP: reporting queries (SQL views or Prisma aggregations)
- LMS: certificates generation skeleton
- CRM: tenant isolation checks + security hardening

**Week 6 (Mock interviews + notifications + logistics tracking UI)**
- AI Resume/Interview
  - Interview flow + feedback loop + analytics
- Real-time PM
  - Notifications + activity feed
- Logistics
  - Real-time tracking UI (mock stream) + map integration skeleton

**Week 7 (Crowdfunding + Online Exam core + Dev Collaboration core)**
- Crowdfunding
  - Campaigns + donations + progress calculation
- Online Exam
  - Timed sessions + question models + auto-mark skeleton
- Dev Collaboration
  - Projects + issues + activity feed skeleton

**Week 8 (Smart City Dashboard + Exam proctoring dashboard + PR workflow)**
- Smart City Dashboard
  - Incident reporting + service requests + GIS placeholder
- Online Exam
  - Proctoring dashboard skeleton + results analytics
- Dev Collaboration
  - PR workflow + review comments skeleton

**Week 9 (Integration polish + deployments)**
- Deploy all 10 MVPs (or at least the first 6 if time is tight)
- Fix edge cases + validation + logging

**Week 10 (Final polish + writeups)**
- Final README quality, ERD diagrams, demo videos/screenshots
- Ensure each project runs from scratch with one command

---

## Running order (10 projects)
1. Enterprise ERP System
2. AI Resume & Interview Platform
3. Real-Time Project Management Tool
4. Learning Management System (LMS)
5. Logistics & Fleet Management Platform
6. Multi-Tenant SaaS CRM
7. Crowdfunding Platform
8. Online Examination System
9. Developer Collaboration Platform
10. Smart City Management Dashboard


