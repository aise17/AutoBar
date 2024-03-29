from django.contrib import admin
from django.contrib.auth import authenticate
from django.contrib.auth.models import Group, update_last_login
from rest_framework import serializers

from .models import Category, Orders, OrdersProducts, Product, Address,Mesa

admin.autodiscover()

from django.contrib.auth import get_user_model  # If used custom user model
from rest_framework import serializers

from datetime import timezone
# first we define the serializers
import logging

# Get an instance of a logger
logger = logging.getLogger(__name__)

UserModel = get_user_model()


class ProductsSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField()

    

    class Meta:
        model = Product
        
        fields = '__all__' 


class CreateOrderSerializer(serializers.ModelSerializer):

    product = ProductsSerializer(many=False)

    def create(self, validated_data, user, order):
        
        #_user: User = User.objects.filter(pk=user).first()
        #order = Orders.objects.create(user= _user)
        product_instance = Product.objects.get(id=validated_data['id'])
        ordersProducts = OrdersProducts.objects.create(product=product_instance, order_product=order)

        return ordersProducts

    class Meta:
        model = OrdersProducts

        fields = '__all__' 
        


class ProductsListSerializer(serializers.ModelSerializer):
    products = ProductsSerializer(many=True) 



    class Meta:
        model = Category
        fields = '__all__'
        #depth = 1


class OrderProductsSerializer(serializers.ModelSerializer):
    product = ProductsSerializer(many=False)

    def create(self, validated_data):

        order_product = OrdersProducts.objects.create(**validated_data)
        #product.save()

        return order_product

    class Meta:
        model = OrdersProducts

        fields = '__all__'

class OrderListSerializer(serializers.ModelSerializer):
    order_product = OrderProductsSerializer(many=True)

    def create(self, validated_data):

        orders = Orders.objects.create(**validated_data)
        

        return orders

    class Meta:
        model = Orders
        optional_fields = ['order_product', ]
        fields = '__all__'

class OrderSerialicer(serializers.ModelSerializer):
    
    class Meta:
        model = Orders

        fields = '__all__'
        depth = 2

class Test(serializers.ModelSerializer):
    id = serializers.IntegerField()
    order_product = OrderProductsSerializer()


class AddressSerialicer(serializers.ModelSerializer):

    name = serializers.CharField(required=True)
    calle = serializers.CharField(required=True)
    numero = serializers.IntegerField()
    portal = serializers.IntegerField()
    piso = serializers.IntegerField()
    puerta = serializers.CharField(required=True)
    localidad = serializers.CharField(required=True)
    latitud = serializers.CharField(required=True)
    longitud = serializers.CharField(required=True)
    user = serializers.IntegerField()
    
    def create(self, validated_data, user):

        address = Address(**validated_data)
        address.user=user
        address.save()
        return address

    class Meta:
        model = Address
        fields = '__all__'


class TableSerializer(serializers.ModelSerializer):
    id  = serializers.IntegerField()
    name = serializers.CharField(required=True)
    ejex = serializers.IntegerField()
    ejey = serializers.IntegerField()

    class Meta:
        model = Mesa
        fields = '__all__'