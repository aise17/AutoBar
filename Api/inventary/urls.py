from django.urls import path, include
from . import views

from django.contrib import admin

app_name = "users"

urlpatterns = [


    path('product_list', views.CreateUserView.as_view(), name='ProductList'),
    path('orders_list', views.GetOrdersView.as_view(), name='OrdersList'),
    path('create_orders', views.CreateOrdersView.as_view(), name='CretaeOrder'),
    path('create_category', views.CreatecategoryView.as_view(), name='CretaeCategory'),
    path('create_product', views.CreateProductView.as_view(), name='CretaeProduct'),

]