from fastapi import APIRouter, Header, HTTPException
from app.schemas import UserOut
from app.auth import decode_token

router = APIRouter()

# Mirror of in-memory store from auth module
_USERS = {
    1: {"id":1, "name":"Demo User", "email": "user@example.com", "role": "student"}
}

def _get_user_from_token(auth: str):
    if not auth: return None
    if auth.startswith('Bearer '):
        token = auth.split(' ')[1]
    else:
        token = auth
    data = decode_token(token)
    if not data: return None
    try:
        uid = int(data.get('sub'))
    except Exception:
        return None
    return _USERS.get(uid)

@router.get('/me', response_model=UserOut)
def me(authorization: str | None = Header(None)):
    user = _get_user_from_token(authorization)
    if not user:
        raise HTTPException(status_code=401, detail='Invalid or missing token')
    return user

@router.get('/{user_id}')
def get_user(user_id: int):
    return _USERS.get(user_id)
