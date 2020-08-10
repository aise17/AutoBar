
from django.db import migrations, models
import tenant_schemas.postgresql_backend.base
from oauth2_provider.models import get_application_model

from django.contrib.auth.models import User

import os
from sys import path
from django.core import serializers

from customers.models import Client


def load_fixture(apps, schema_editor):

    user = User.objects.create_user('autobar', 'autobar@autobar.com', 'swdzswdz')
    user.last_name = 'Admin'
    user.save()

    Aplication = get_application_model()
    aplication = Aplication()
    aplication.client_secret = 'NrQc6Bud2JcrNBQICcWitVQJThiMPdXXIAp5sOsVYchApExmq3WmVNI0WjygNQDJhcDCllzMOuvbLPi6fjr708FN9da0thpYVLY1JI72i1XPr4ksHD6ziDZrjX1HYAzD'
    aplication.client_id = 'MJgIqPJxAMvLHCDG4vTwhHJBiIQYVSM82Mbij6dV'
    aplication.client_type = aplication.CLIENT_PUBLIC
    aplication.authorization_grant_type = aplication.GRANT_PASSWORD
    aplication.name = 'lacentro'
    aplication.user = user
    aplication.redirect_uris = 'http://localhost:8000'

    aplication.save()

    # create your public tenant
    tenant = Client(domain_url='my-domain.com', 
                    schema_name='public',
                    name='Schemas Inc.',
                    paid_until='2016-12-05',
                    on_trial=False)

    tenant.save()

    tenant = Client(domain_url='lacentro.my-domain.com', # don't add your port or www here!
                    schema_name='lacentro',
                    name='lacentro',
                    paid_until='2014-12-05',
                    on_trial=True)

    tenant.save()

    tenant = Client(domain_url='ellibra.my-domain.com', # don't add your port or www here!
                    schema_name='ellibra',
                    name='el libra',
                    paid_until='2014-12-05',
                    on_trial=True)

    tenant.save()


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(load_fixture),
    ]


