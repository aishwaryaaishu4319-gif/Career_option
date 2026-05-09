from fastapi import APIRouter, HTTPException
from app.schemas import LoginIn, Token
from app.auth import create_access_token

router = APIRouter()

# In-memory demo users
_USERS = {
    "user@example.com": {"id": 1, "email": "user@example.com", "name": "Demo User", "password": "password", "role": "student"}
}

@router.post("/login", response_model=Token)
def login(data: LoginIn):
    user = _USERS.get(data.email)
    if not user or user.get('password') != data.password:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = create_access_token(str(user['id']))
    return {"access_token": token, "token_type": "bearer"}

@router.post("/register")
def register(data: LoginIn):
    if data.email in _USERS:
        raise HTTPException(status_code=400, detail="User exists")
    uid = max(u['id'] for u in _USERS.values()) + 1
    _USERS[data.email] = {"id": uid, "email": data.email, "name": data.email.split('@')[0], "password": data.password, "role": "student"}
    token = create_access_token(str(uid))
    return {"access_token": token, "token_type": "bearer"}
