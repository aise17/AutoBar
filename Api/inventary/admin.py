from django.contrib import admin

# Register your models here.


from .models import Product, Category, Orders, OrdersProducts

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

class OrdersAdmin(admin.ModelAdmin):
    list_display = ['id', 'creation_date']
    list_filter = ('creation_date',)
    search_fields = ['creation_date']

class OrdersProductsAdmin(admin.ModelAdmin):
    list_display = ['id', 'creation_date']
    list_filter = ('creation_date',)
    search_fields = ['creation_date']

admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Orders, OrdersAdmin)
admin.site.register(OrdersProducts, OrdersProductsAdmin)