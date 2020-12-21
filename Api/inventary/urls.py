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
    path('order/orderactives', views.ActiveOrders.as_view(), name='activeOrders'),
    path('order/history', views.OrderHistory.as_view(), name='orderHistory'),
    path('order/bar', views.OrderBarModule.as_view(), name='OrderBarModule'),
    path('order/cocina', views.OrderCocinaModule.as_view(), name='OrderCocinaModule'),
    path('order/camarero', views.OrderCamareroModule.as_view(), name='OrderCocinaModule'),
    path('order/barra/status', views.updateStatusBarra.as_view(), name='barraAccept'),
    path('order/mesa_update', views.updateStatusEMesas.as_view(), name='updatemesas'),
    path('order/mesaList', views.GetTablesView.as_view(), name='listtables'),
    path('mesa/newmesa', views.updateMesas().as_view(), name='newmesa'),


]