from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import get_user_model
class UserListView(APIView):
    def get(self, request):
        users = get_user_model().objects.all().values('id', 'username')
        return Response(list(users))
