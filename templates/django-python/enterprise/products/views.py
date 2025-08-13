from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product
class ProductListView(APIView):
    def get(self, request):
        products = Product.objects.all().values('id', 'name', 'price')
        return Response(list(products))
