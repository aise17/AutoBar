
from rest_framework import serializers



from django.contrib.auth import authenticate
from django.contrib.auth.models import Group, update_last_login
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
        user.email = validated_data['email']
        user.set_password(validated_data['password'])
        user.save()

        return user

    class Meta:
        model = UserModel
        
        fields = ( "id", "username", "password", 'email' )

class UserLoginSerializer(serializers.Serializer):

    email = serializers.CharField(max_length=255)
    password = serializers.CharField(max_length=128)
    username = serializers.CharField(max_length=255)


class ChangePasswordSerializer(serializers.Serializer):

    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)
    username = serializers.CharField(required=True)

    def update(self, validated_data):
        
        user = authenticate(username=validated_data['username'], password=validated_data['old_password'])
        user.set_password(validated_data['new_password'])
        user.save()

        return user
    
    class Meta:
        model = UserModel
        fields = ( "id", "username", "password", 'email' )



class ChangeImageSerializer(serializers.Serializer):

    image = serializers.CharField(required=True)
    password = serializers.CharField(required=True)
    username = serializers.CharField(required=True)

    def update(self, validated_data):
        
        user = authenticate(username=validated_data['username'], password=validated_data['password'])
        user.image = validated_data['image']
        user.save()

        return user
    
    class Meta:
        model = UserModel
        fields = ( "id", "username", "password", 'email' )