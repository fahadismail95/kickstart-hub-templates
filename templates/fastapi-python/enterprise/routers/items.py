from fastapi import APIRouter
from schemas import Item
router = APIRouter()

@router.get("/", response_model=list[Item])
def list_items():
    return [Item(id=1, name="Item 1"), Item(id=2, name="Item 2")]
