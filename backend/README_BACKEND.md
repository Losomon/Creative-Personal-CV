# Backend (Node.js + Express)

Quick start:

```bash
cd backend
npm install
npm run dev
```

## Server

- `GET /health` → `{ "ok": true, "name": "solomon-cv-backend" }`
- `POST /contact` → Accepts `{name, email, subject, message}`

## Scripts

- `npm run dev` — Development mode with hot reload
- `npm run start` — Production start
- `npm run build` — No build step required (placeholder script)

## Config
- Copy `backend/.env.example` to `backend/.env`

