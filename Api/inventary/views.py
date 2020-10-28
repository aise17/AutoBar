from django.shortcuts import render
from .models import Category, Orders, Product, OrdersProducts, Mesa, Address
from .serializers import ProductsListSerializer, OrderProductsSerializer, OrderListSerializer, ProductsSerializer,CreateOrderSerializer, OrderSerialicer, Test, AddressSerialicer
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
from rest_framework.views import APIView
from django.db.models import Q


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
        mesa: Mesa = None
        address: Address = None

        try:

            _user = request.data["user"]
            user: User = User.objects.get(pk=_user)

            if 'mesa' in request.data:
                _mesa = request.data["mesa"]
                mesa = Mesa.objects.get(pk=_mesa)
            if 'address' in request.data:
                _address = request.data["address"]["id"]
                address = Address.objects.get(pk=_address)

            if mesa and address is None:
                order = Orders.objects.create(user= user, mesa=mesa)
            elif mesa is None and address:
                order = Orders.objects.create(user= user, address= address)
            else:
                salida['ok'] = False
                salida['error'] = "la peticion no puede contener mesa y direccion"
                return JsonResponse(salida, status=status.HTTP_400_BAD_REQUEST)
            

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


    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]

    def get(self, request, *args, **kwargs):
            
        orders_products = OrdersProducts.objects.filter(order_product__orders_status_barra=False, product__preparation_site=2).values()

        ids_order_product = orders_products.values_list('order_product', flat=True)
        ids_products = orders_products.values_list('product', flat=True)

        products = Product.objects.filter(preparation_site=2,pk__in= ids_products)

        orders = getObject(Orders.objects.filter(id__in = ids_order_product ).values())
        
        for order in orders:
            order_product_of_order = orders_products.filter(order_product=order['id'])
            product_ids = order_product_of_order.values_list('product', flat=True)
            if order['address_id']:
                order['address'] = getObject(Address.objects.filter(pk = order['address_id']).values())
                del order['address_id']
            order['products']= getObject( Product.objects.filter(pk__in=product_ids).values() )
                
        return JsonResponse(orders, safe=False, status=status.HTTP_200_OK)


class OrderCocinaModule(generics.ListAPIView):


    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]

    def get(self, request, *args, **kwargs):
            
        orders_products = OrdersProducts.objects.filter(order_product__orders_status_cocina=False, product__preparation_site=1).values()

        ids_order_product = orders_products.values_list('order_product', flat=True)
        ids_products = orders_products.values_list('product', flat=True)

        products = Product.objects.filter(preparation_site=1,pk__in= ids_products)

        orders = getObject(Orders.objects.filter(id__in = ids_order_product ).values())
        
        for order in orders:
            order_product_of_order = orders_products.filter(order_product=order['id'])
            product_ids = order_product_of_order.values_list('product', flat=True)
            if order['address_id']:
                order['address'] = getObject(Address.objects.filter(pk = order['address_id']).values())
                del order['address_id']
            order['products']= getObject( Product.objects.filter(pk__in=product_ids).values() )
                
        return JsonResponse(orders, safe=False, status=status.HTTP_200_OK)


class OrderCamareroModule(generics.ListAPIView):


    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]

    def get(self, request, *args, **kwargs):
            
        orders_products = OrdersProducts.objects.filter(Q(order_product__orders_status_cocina=True) | Q(order_product__orders_status_cocina=True)).values()

        ids_order_product = orders_products.values_list('order_product', flat=True)
        ids_products = orders_products.values_list('product', flat=True)

        products = Product.objects.filter(preparation_site=1,pk__in= ids_products)

        orders = getObject(Orders.objects.filter(id__in = ids_order_product ).values())
        
        for order in orders:
            order_product_of_order = orders_products.filter(order_product=order['id'])
            product_ids = order_product_of_order.values_list('product', flat=True)
            if order['address_id']:
                order['address'] = getObject(Address.objects.filter(pk = order['address_id']).values())
                del order['address_id']
            order['products']= getObject( Product.objects.filter(pk__in=product_ids).values() )
                
        return JsonResponse(orders, safe=False, status=status.HTTP_200_OK)


class ActiveOrders(generics.ListAPIView):


    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]

    def get(self, request, *args, **kwargs):
            
        orders_products = OrdersProducts.objects.filter(Q(order_product__orders_status_barra=False) | Q(order_product__orders_status_cocina=False)).values()

        ids_order_product = orders_products.values_list('order_product', flat=True)
        ids_products = orders_products.values_list('product', flat=True)

        products = Product.objects.filter(pk__in= ids_products)

        user = User.objects.get(pk= request.GET['id'])
        orders = getObject(Orders.objects.filter(id__in = ids_order_product, user= user.pk ).values())
        
        for order in orders:
            order_product_of_order = orders_products.filter(order_product=order['id'])
            product_ids = order_product_of_order.values_list('product', flat=True)
            if order['address_id']:
                order['address'] = getObject(Address.objects.filter(pk = order['address_id']).values())
                del order['address_id']
            order['products']= getObject( Product.objects.filter(pk__in=product_ids).values() )
                
        return JsonResponse(orders, safe=False, status=status.HTTP_200_OK)

class OrderHistory(generics.ListAPIView):


    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]

    def get(self, request, *args, **kwargs):
            
        orders_products = OrdersProducts.objects.filter(order_product__orders_status_barra=True , order_product__orders_status_cocina=True).values()

        ids_order_product = orders_products.values_list('order_product', flat=True)
        ids_products = orders_products.values_list('product', flat=True)

        products = Product.objects.filter(pk__in= ids_products)
        user = User.objects.get(pk= request.GET['id'])

        orders = getObject(Orders.objects.filter(id__in = ids_order_product, user= user.pk ).values())
        
        for order in orders:
            order_product_of_order = orders_products.filter(order_product=order['id'])
            product_ids = order_product_of_order.values_list('product', flat=True)
            if order['address_id']:
                order['address'] = getObject(Address.objects.filter(pk = order['address_id']).values())
                del order['address_id']
            order['products']= getObject( Product.objects.filter(pk__in=product_ids).values() )
                
        return JsonResponse(orders, safe=False, status=status.HTTP_200_OK)

class CreateListAddress(APIView):

    model = Address
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = AddressSerialicer

    def get(self, request, *args, **kwargs):
        salida= dict()

        id = request.GET['id']
        address = getObject(Address.objects.filter(user__pk=id).values())

        if len(address) > 0:
            salida['ok']=True
            salida['datos'] = address
        else:
            salida['ok']=False
            salida['error'] = "No hay registros para este usuario"

        return JsonResponse(salida, safe=False, status=status.HTTP_200_OK)


    def post(self, request, *args, **kwargs):
        salida=dict()   

        try:
            user = User.objects.get(pk=request.data['user'])
            del request.data['user']
            AddressSerialicer().create(request.data , user)

            salida['ok'] = True
        except Exception as ex:
            salida['ok'] = False
            salida['error'] = str(ex)
        return JsonResponse(salida, safe=False, status=status.HTTP_202_ACCEPTED)


class DeleteAddress(APIView):
    model = Address
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = AddressSerialicer

    def get(self, request, *args, **kwargs):
        salida= dict()

        try:
            id = request.GET['id']
            address = Address.objects.get(pk=id)
            address.delete()
            salida['ok']=True

        except Exception as ex:
            salida['ok']=False
            salida['error'] = "Error" + ex

        return JsonResponse(salida, safe=False, status=status.HTTP_200_OK)


def getObject(obj):
    return [o for o in obj]