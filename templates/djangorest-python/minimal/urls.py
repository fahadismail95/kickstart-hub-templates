from django.urls import path
from app import home
urlpatterns = [
    path('', home),
]
