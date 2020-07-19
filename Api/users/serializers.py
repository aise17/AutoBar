from .models import User
from rest_framework import serializers



from django.contrib.auth import authenticate
from django.contrib.auth.models import User, Group, update_last_login
from django.contrib import admin
admin.autodiscover()

from rest_framework import serializers


# first we define the serializers

from django.contrib.auth import get_user_model # If used custom user model

UserModel = get_user_model()

class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):

        user = UserModel.objects.create(
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()

        return user

    class Meta:
        model = UserModel
        # Tuple of serialized model fields (see link [2])
        fields = ( "id", "username", "password", 'email' )

class UserLoginSerializer(serializers.Serializer):

    email = serializers.CharField(max_length=255)
    password = serializers.CharField(max_length=128)
    username = serializers.CharField(max_length=255)