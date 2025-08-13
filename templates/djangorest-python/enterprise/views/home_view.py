from rest_framework.views import APIView
from rest_framework.response import Response
from ..services.api_service import get_data
class HomeView(APIView):
    def get(self, request):
        return Response(get_data())
