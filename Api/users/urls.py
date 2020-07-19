from django.urls import path
from . import views
from django.contrib import admin

app_name = "users"

urlpatterns = [

    path('', views.UserViewSet.as_view({'get': 'list'}), name="users-list"),
    path('admin/', admin.site.urls),
]