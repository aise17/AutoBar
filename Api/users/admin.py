from django.contrib import admin

from .models import UserModel

# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'first_name', 'is_active']
    list_filter = ('is_active',)
    search_fields = ['is_active']

admin.site.register(UserModel, UserAdmin)