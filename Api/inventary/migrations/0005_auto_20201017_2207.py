# Generated by Django 3.0.1 on 2020-10-17 22:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventary', '0004_auto_20201017_2138'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='creation_date',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
        migrations.AlterField(
            model_name='orders',
            name='creation_date',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
        migrations.AlterField(
            model_name='ordersproducts',
            name='creation_date',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='creation_date',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]