from django.urls import path, include
from . import views




from django.contrib import admin

app_name = "inventary"

urlpatterns = [


    path('product_list', views.CategoryView.as_view(), name='ProductList'),
    path('orders_list', views.GetOrdersView.as_view(), name='OrdersList'),
    path('create_orders', views.CreateOrdersView.as_view(), name='CretaeOrder'),
    path('create_category', views.CreatecategoryView.as_view(), name='CretaeCategory'),
    path('create_product', views.CreateProductView.as_view(), name='CretaeProduct'),
    path('address', views.CreateListAddress.as_view(), name='Address'),
    path('address/delete', views.DeleteAddress.as_view(), name='deleteAddress'),
    path('test', views.OrderBarModule.as_view(), name='OrderBarModule'),

]