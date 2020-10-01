from .models import Product, Category
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

        # Tuple of serialized model fields (see link [2])
        fields = ( '__all__' )

class ProductsListSerializer(serializers.ModelSerializer):
    products = ProductsSerializer(many=True)

    class Meta:
        model = Category

        # Tuple of serialized model fields (see link [2])
        fields = ( '__all__' )