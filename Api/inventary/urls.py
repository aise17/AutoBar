from django.urls import path, include
from . import views

from django.contrib import admin

app_name = "users"

urlpatterns = [


    path('product_list', views.CreateUserView.as_view(), name='ProductList'),
    path('orders_list', views.getOrdersView.as_view(), name='OrdersList'),

]