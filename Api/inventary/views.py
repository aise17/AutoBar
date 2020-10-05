from django.shortcuts import render
from .models import Category, Orders, Product, OrdersProducts
from .serializers import ProductsListSerializer, OrderProductsSerializer, OrderListSerializer, ProductsSerializer,CreateOrderSerializer

from rest_framework import permissions
from rest_framework.generics import ListAPIView, CreateAPIView


# Create your views here.


class CategoryView(ListAPIView):

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

    model = OrdersProducts
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = CreateOrderSerializer


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