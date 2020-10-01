from django.contrib import admin
from django.contrib.auth import authenticate
from django.contrib.auth.models import Group, User, update_last_login
from rest_framework import serializers

from .models import Category, Orders, OrdersProducts, Product

admin.autodiscover()

from django.contrib.auth import get_user_model  # If used custom user model
from rest_framework import serializers

# first we define the serializers


UserModel = get_user_model()


class ProductsSerializer(serializers.ModelSerializer):

    def create(self, validated_data):

        product = Product.objects.create(**validated_data)
        #product.save()

        return product

    class Meta:
        model = Product
        
        fields = ( '__all__' )

class ProductsListSerializer(serializers.ModelSerializer):
    products = ProductsSerializer(many=True)

    def create(self, validated_data):

        category = Category.objects.create(**validated_data)
        #category.save()

        return category

    class Meta:
        model = Category

        fields = ( '__all__' )


class OrderProductsSerializer(serializers.ModelSerializer):
    product = ProductsSerializer(many=False)

    class Meta:
        model = OrdersProducts

        fields = ( '__all__' )

class OrderListSerializer(serializers.ModelSerializer):
    order_product = OrderProductsSerializer(many=True)

    class Meta:
        model = Orders
        optional_fields = ['order_product', ]
        fields = ( '__all__' )
