# mental_health_backend/checkup/views.py
from django.http import JsonResponse
from django.views import View

class CheckupView(View):
    def post(self, request, *args, **kwargs):
        answer = request.POST.get('answer')
        # Store the answer in the database or perform any desired processing
        # For simplicity, we'll just echo the answer back for now.
        return JsonResponse({'message': f'Thank you for sharing: {answer}'})


# Create your views here.
