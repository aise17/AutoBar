from django.contrib import admin

# Register your models here.


from .models import Product

admin.site.site_header = 'productos'
admin.site.index_title = 'Administración'
admin.site.site_title = 'HTML title from adminsitration'

class ProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    list_filter = ('name',)
    search_fields = ['name']


admin.site.register(Product, ProductAdmin)