# mental_health_backend/checkup/urls.py
from django.urls import path
from .views import CheckupView

urlpatterns = [
    path('checkup/', CheckupView.as_view(), name='checkup'),
]
