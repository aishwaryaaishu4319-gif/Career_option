from pydantic import BaseModel
from typing import Optional, List

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"

class LoginIn(BaseModel):
    email: str
    password: str

class UserOut(BaseModel):
    id: int
    name: str
    email: str
    role: str

class Recommendation(BaseModel):
    title: str
    description: Optional[str]

class RecommendationsOut(BaseModel):
    recommendations: List[Recommendation]
