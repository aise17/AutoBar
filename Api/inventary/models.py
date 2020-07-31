from django.db import models
from tenant_schemas.models import TenantMixin


class Product(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)


    def __str__(self):
        return "Author - %s" % self.name 


