from django.shortcuts import render
from .models import Category, Orders
from .serializers import ProductsListSerializer, OrderProductsSerializer, OrderListSerializer

from rest_framework import permissions
from rest_framework.generics import ListAPIView


# Create your views here.


class CreateUserView(ListAPIView):

    model = Category
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = ProductsListSerializer
    queryset = Category.objects.all()


class getOrdersView(ListAPIView):

    model = Orders
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = OrderListSerializer
    queryset = Orders.objects.all()