from django.shortcuts import render
from rest_framework import viewsets

from .serializers import UserSerializer, UserLoginSerializer, ChangePasswordSerializer, ChangeImageSerializer


import json
from pprint import pformat

from django.contrib.auth import authenticate
from django.contrib.auth.forms import AuthenticationForm

from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth import login as do_login
from django.contrib.auth import logout as do_logout


from django.contrib.auth.models import  Group
from django.contrib import admin
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
# Create your views here.

admin.autodiscover()
from rest_framework import generics, permissions, serializers, views, status
from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope, TokenHasScope
from rest_framework.decorators import permission_classes

from rest_framework import permissions
from rest_framework.generics import CreateAPIView, UpdateAPIView
from django.contrib.auth import get_user_model # If used custom user model

from django.contrib.auth import get_user_model

User = get_user_model()



class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


@permission_classes([AllowAny])
class LoginApi(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserLoginSerializer
    

    def post(self, request, *args, **kwargs):

        serializer = UserLoginSerializer(data=request.data)

        if serializer.is_valid():

            salida = dict()

            user = authenticate(username=serializer['username'].value, password=serializer['password'].value)
            if user:
                
                ser = UserSerializer(instance=user)

                salida['ok'] = True
                salida['datos'] = ser.data
            else:
                salida['ok'] = False
                salida['error'] = 'fallo en la autentificacion'

            return JsonResponse(salida, status=status.HTTP_200_OK)


class CreateUserView(CreateAPIView):

    model = get_user_model()
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = UserSerializer


class ChangePassword(UpdateAPIView):

    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]

    def update(self, request, *args, **kwargs):

        salida=dict()
        salida['ok'] = False
        salida['datos'] = str(request)

        user = authenticate(username=request.data['username'], password=request.data['old_password'])
        if user:

            serializer = ChangePasswordSerializer().update(request.data)
    
            salida['ok'] = True
            salida['datos'] = str(request)


        return JsonResponse(salida, status=status.HTTP_200_OK)



class ChangeImage(UpdateAPIView):

    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]

    def update(self, request, *args, **kwargs):

        salida=dict()
        salida['ok'] = False
        salida['datos'] = str(request)

        user = authenticate(username=request.data['username'], password=request.data['password'])
        if user:

            serializer = ChangeImageSerializer().update(request.data)
    
            salida['ok'] = True
            salida['datos'] = str(request)


        return JsonResponse(salida, status=status.HTTP_200_OK)



def logout(request):
    salida = dict()
    do_logout(request)
    salida['ok'] = True
    salida['datos'] = str(request)

    return JsonResponse(salida, status=status.HTTP_200_OK)