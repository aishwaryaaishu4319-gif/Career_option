from fastapi import APIRouter
from app.schemas import RecommendationsOut

router = APIRouter()

@router.get('/{user_id}', response_model=RecommendationsOut)
def recommendations(user_id: int):
    # Demo static recommendations; replace with real recommender service/inference
    data = [
        {"title": "Intro to Python", "description": "Beginner Python course"},
        {"title": "Data Structures", "description": "Core DS concepts"},
        {"title": "Resume Writing", "description": "Improve job docs"}
    ]
    return {"recommendations": data}
