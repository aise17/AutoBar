from django.shortcuts import render
from .models import Category, Orders, Product
from .serializers import ProductsListSerializer, OrderProductsSerializer, OrderListSerializer, ProductsSerializer

from rest_framework import permissions
from rest_framework.generics import ListAPIView, CreateAPIView


# Create your views here.


class CreateUserView(ListAPIView):

    model = Category
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = ProductsListSerializer
    queryset = Category.objects.all()


class GetOrdersView(ListAPIView):

    model = Orders
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = OrderListSerializer
    queryset = Orders.objects.all()


class CreateOrdersView(CreateAPIView):

    model = Orders
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = OrderListSerializer


class CreatecategoryView(CreateAPIView):

    model = Category
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = ProductsListSerializer


class CreateProductView(CreateAPIView):

    model = Product
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = ProductsSerializer