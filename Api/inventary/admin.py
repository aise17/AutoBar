from django.contrib import admin

# Register your models here.


from .models import Product, Category

admin.site.site_header = 'Autobar'
admin.site.index_title = 'Administración'
admin.site.site_title = 'HTML title from adminsitration'

class ProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    list_filter = ('name',)
    search_fields = ['name']

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    list_filter = ('name',)
    search_fields = ['name']

admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)