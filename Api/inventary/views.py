from django.shortcuts import render
from .models import Category, Orders, Product, OrdersProducts
from .serializers import ProductsListSerializer, OrderProductsSerializer, OrderListSerializer, ProductsSerializer,CreateOrderSerializer

from rest_framework import permissions
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.viewsets import ViewSet

from rest_framework import generics, permissions, serializers, views, status
from django.http import JsonResponse
import json
from django.contrib.auth.models import User
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



class CreateOrdersView(generics.ListCreateAPIView):

    model = OrdersProducts
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = OrderProductsSerializer

    def post(self, request, *args, **kwargs):
        salida = dict()

        user = request.data["user"]

        try:

            user: User = User.objects.get(pk=user)

            order = Orders.objects.create(user= user)

            for product in request.data["product"]:
                serializer = CreateOrderSerializer().create(validated_data= product, user= user,order= order)

            salida['ok'] = True
            salida['user'] = user.id
        except:
            salida['ok'] = True
            salida['user'] = user.id

        return JsonResponse(salida, status=status.HTTP_200_OK)


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