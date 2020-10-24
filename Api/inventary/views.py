from django.shortcuts import render
from .models import Category, Orders, Product, OrdersProducts, Mesa, OrderObject
from .serializers import ProductsListSerializer, OrderProductsSerializer, OrderListSerializer, ProductsSerializer,CreateOrderSerializer, OrderSerialicer, Test
from rest_framework import permissions
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.viewsets import ViewSet

from rest_framework import generics, permissions, serializers, views, status
from django.http import JsonResponse
import json
from django.contrib.auth import get_user_model
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt

from typing import List
User = get_user_model()
# Create your views here.
from django.core import serializers


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

        _user = request.data["user"]
        _mesa = request.data["mesa"]

        try:

            user: User = User.objects.get(pk=_user)
            mesa: Mesa = Mesa.objects.get(pk=_mesa)

            order = Orders.objects.create(user= user, mesa=mesa)
            

            for product in request.data["product"]:
                serializer = CreateOrderSerializer().create(validated_data= product, user= user,order= order)

            salida['ok'] = True
            salida['user'] = user.id
        except ValueError as ex:
            salida['ok'] = False
            salida['error'] = ex

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


class OrderBarModule(generics.ListAPIView):

    model = Orders
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = OrderListSerializer


    def get(self, request, *args, **kwargs):

        if request.method == 'GET':
            
            orders_products = OrdersProducts.objects.filter(order_product__orders_status_barra=False, product__preparation_site=2).values()

            ids_order_product = orders_products.values_list('order_product', flat=True)
            ids_products = orders_products.values_list('product', flat=True)

            products = Product.objects.filter(preparation_site=2,pk__in= ids_products)

            orders = getObject(Orders.objects.filter(id__in = ids_order_product ).values())
            
            for order in orders:
                order_product_of_order = orders_products.filter(order_product=order['id'])
                product_ids = order_product_of_order.values_list('product', flat=True)
                order['products']= getObject( Product.objects.filter(pk__in=product_ids).values() )
                
        return JsonResponse(orders, safe=False, status=status.HTTP_200_OK)


def getObject(obj):
    return [o for o in obj]