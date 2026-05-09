AI Learning & Career Intelligence — Prototype

This workspace contains a minimal prototype:

- `frontend/` — React + Vite + Tailwind UI (demo pages: Login, Dashboard, Profile)
- `backend/` — FastAPI backend with simple JWT auth, user endpoints, and recommendations

Quick start (requires Node.js and Python 3.11+):

Frontend
```bash
cd frontend
npm install
npm run dev
```

Backend
```bash
cd backend
python -m venv .venv
.venv\Scripts\activate   # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```
