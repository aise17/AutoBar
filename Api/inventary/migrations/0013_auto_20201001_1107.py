# Generated by Django 3.0.1 on 2020-10-01 11:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('inventary', '0012_ordersproducts_order'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ordersproducts',
            name='product',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='orderproducts', to='inventary.Product'),
        ),
    ]