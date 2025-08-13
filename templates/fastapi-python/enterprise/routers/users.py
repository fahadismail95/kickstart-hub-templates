from fastapi import APIRouter
from schemas import User
router = APIRouter()

@router.get("/", response_model=list[User])
def list_users():
    return [User(id=1, name="Alice"), User(id=2, name="Bob")]
