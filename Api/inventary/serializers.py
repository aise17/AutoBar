from django.contrib import admin
from django.contrib.auth import authenticate
from django.contrib.auth.models import Group, User, update_last_login
from rest_framework import serializers

from .models import Category, Orders, OrdersProducts, Product

admin.autodiscover()

from django.contrib.auth import get_user_model  # If used custom user model
from rest_framework import serializers
from django.utils import timezone

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

    def create(self, validated_data):
        
        user: User = User.objects.filter(username='autobar').first()
        order = Orders.objects.create(user= user)
        product_instance = Product.objects.get(id=validated_data['product']['id'])
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
        #product.save()

        return orders

    class Meta:
        model = Orders
        optional_fields = ['order_product', ]
        fields = '__all__'
