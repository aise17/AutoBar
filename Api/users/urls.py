from django.urls import path, include
from . import views
from django.contrib import admin

app_name = "users"

urlpatterns = [

    path('', views.UserViewSet.as_view({'get': 'list'}), name="users-list"),
    path('admin/', admin.site.urls),
    path('o/', include('oauth2_provider.urls', namespace='oauth2_provider')),
    path('loginApi/', views.LoginApi.as_view(), name='loginApi'),
    path('register', views.CreateUserView.as_view(), name='createUser'),
]