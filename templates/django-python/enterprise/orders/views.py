from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Order
class OrderListView(APIView):
    def get(self, request):
        orders = Order.objects.all().values('id', 'user_id', 'product_id', 'quantity')
        return Response(list(orders))
