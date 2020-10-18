from django.contrib import admin

from .models import Client

# Register your models here.


class ClientAdmin(admin.ModelAdmin):
    list_display = ['name', 'created_on']
    list_filter = ('created_on',)
    search_fields = ['created_on']

admin.site.register(Client, ClientAdmin)