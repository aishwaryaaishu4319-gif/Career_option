from datetime import datetime, timedelta
from typing import Optional
from jose import jwt

SECRET_KEY = "dev-secret-key-change-me"
ALGORITHM = "HS256"

def create_access_token(subject: str, expires_minutes: int = 60):
    expire = datetime.utcnow() + timedelta(minutes=expires_minutes)
    to_encode = {"sub": subject, "exp": expire}
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def decode_token(token: str) -> Optional[dict]:
    try:
        return jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    except Exception:
        return None
