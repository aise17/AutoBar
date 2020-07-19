from customers.models import Client

# create your public tenant
tenant = Client(domain_url='my-domain.com', 
                schema_name='public',
                name='Schemas Inc.',
                paid_until='2016-12-05',
                on_trial=False)
tenant.save()

tenant = Client(domain_url='tenant.my-domain.com', # don't add your port or www here!
                schema_name='tenant1',
                name='Fonzy Tenant',
                paid_until='2014-12-05',
                on_trial=True)
tenant.save()