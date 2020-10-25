from django.contrib import admin

# Register your models here.


from .models import Product, Category, Orders, OrdersProducts, Mesa, PreparationSite, Address

admin.site.site_header = 'Autobar'
admin.site.index_title = 'Administración'
admin.site.site_title = 'HTML title from adminsitration'

class ProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'price','publish_date', 'publish' ]
    list_filter = ('name','publish_date', 'publish')
    search_fields = ['name']


class SiteAdmin(admin.ModelAdmin):
    list_display = ['id','name',]
    list_filter = ('name',)
    search_fields = ['name',]


class MesaAdmin(admin.ModelAdmin):
    list_display = [ 'id','name',]
    list_filter = ('name',)
    search_fields = ['name',]



class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name','publish_date', 'publish']
    list_filter = ('name', 'publish_date', 'publish')
    search_fields = ['name']

class OrdersAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'creation_date']
    list_filter = ('creation_date', 'user')
    search_fields = ['creation_date']

class OrdersProductsAdmin(admin.ModelAdmin):
    list_display = ['id', 'creation_date']
    list_filter = ('creation_date',)
    search_fields = ['creation_date']


class AddressAdmin(admin.ModelAdmin):
    list_display = [ 'id','name','user']
    list_filter = ('name',)
    search_fields = ['name',]


admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Orders, OrdersAdmin)
admin.site.register(OrdersProducts, OrdersProductsAdmin)
admin.site.register(PreparationSite, SiteAdmin)
admin.site.register(Mesa, MesaAdmin)
admin.site.register(Address, AddressAdmin)
