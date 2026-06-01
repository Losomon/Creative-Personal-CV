# Project Repository Template (per-project README)

## Project Name

## Tech Stack
- Frontend: React + Vite
- Backend: Node.js + Express (Prisma)
- DB: PostgreSQL
- Auth: JWT + Role-based access (if needed)

## MVP Scope (must-have)
- Core entities + CRUD
- Auth/roles where applicable
- One or more “hard skill” features (analytics, RBAC, reporting, WebSockets, multi-tenancy)

## Setup
```bash
# 1) Install deps
npm install

# 2) Configure env
cp .env.example .env

# 3) DB
npx prisma migrate dev
npx prisma db seed

# 4) Run
npm run dev
```

## ERD / Data Model
- Link to ERD diagram or describe key relationships.

## Security/Performance Notes
- Tenant isolation strategy (if multi-tenant)
- Rate limiting and validation (if API)

## Demo
- Screenshots or short video link

## Known Limitations
- List what’s not implemented yet

