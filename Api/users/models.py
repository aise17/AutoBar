from django.db import models

# Create your models here.

from django.db import models
from tenant_schemas.models import TenantMixin
from django.contrib.auth.models import AbstractUser

from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import ugettext_lazy as _



class UserModel(AbstractUser):
   date_of_birth = models.DateField(blank=True, null=True)




        
