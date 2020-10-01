from .models import Product, Category, Orders, OrdersProducts
from rest_framework import serializers



from django.contrib.auth import authenticate
from django.contrib.auth.models import User, Group, update_last_login
from django.contrib import admin
admin.autodiscover()

from rest_framework import serializers


# first we define the serializers

from django.contrib.auth import get_user_model # If used custom user model

UserModel = get_user_model()



class ProductsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product

        fields = ( '__all__' )

class ProductsListSerializer(serializers.ModelSerializer):
    products = ProductsSerializer(many=True)

    class Meta:
        model = Category

        fields = ( '__all__' )


class OrderProductsSerializer(serializers.ModelSerializer):
    product = ProductsSerializer(many=False)

    class Meta:
        model = OrdersProducts

        fields = ( '__all__' )

class OrderListSerializer(serializers.ModelSerializer):
    order = OrderProductsSerializer(many=True)

    class Meta:
        model = Orders

        fields = ( '__all__' )