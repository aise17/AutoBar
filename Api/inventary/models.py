from django.db import models
from django.contrib.auth.models import User
from datetime import timezone
from django.conf import settings


class Category(models.Model):
    name = models.TextField(null=True, blank=True)

    publish = models.BooleanField(null=True, blank=True)
    publish_date = models.DateTimeField(null=True, blank=True)
    creation_date = models.DateTimeField(null=True, blank=True)
    modification_date = models.DateTimeField(null=True, blank=True)
    unpublish_date= models.DateTimeField(null=True, blank=True)
    

    
    def __str__(self):
        return "Categoria - %s" % self.name 

class Product(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    image = models.TextField(null=True, blank=True)
    description = models.TextField(null=True, blank=True,)
    allergy = models.TextField(null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    category = models.ForeignKey(Category, models.CASCADE, null=True, related_name='products')
    
    publish = models.BooleanField(null=True, blank=True)
    publish_date = models.DateTimeField(null=True, blank=True)
    creation_date = models.DateTimeField(null=True, blank=True)
    modification_date = models.DateTimeField(null=True, blank=True)
    unpublish_date= models.DateTimeField(null=True, blank=True)

 

    def __str__(self):
        return "Producto - %s" % self.name 

class Orders(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, models.CASCADE, null=True, related_name='user')
    creation_date = models.DateTimeField(null=True, blank=True)
    
    def __str__(self):
        return "Orders - {0} - {1}".format(self.id, self.user )


class OrdersProducts(models.Model):
    product = models.ForeignKey(Product, models.CASCADE, null=True, related_name='product',)
    order_product = models.ForeignKey(Orders, models.CASCADE, null=True, related_name='order_product')
    creation_date = models.DateTimeField(null=True, blank=True)

 

    def __str__(self):
        name = self.product
        return "OrdersProducts - {0} - {1}".format( self.id, name )