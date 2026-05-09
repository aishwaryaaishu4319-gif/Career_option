from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import auth, users, recommendations

app = FastAPI(title="AI Learning Platform - Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(users.router, prefix="/api/users", tags=["users"])
app.include_router(recommendations.router, prefix="/api/recommendations", tags=["recommendations"])

@app.get("/api/health")
def health():
    return {"status": "ok"}
