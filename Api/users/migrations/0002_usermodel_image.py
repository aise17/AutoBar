# Generated by Django 3.0.1 on 2020-10-18 14:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='usermodel',
            name='image',
            field=models.TextField(blank=True, null=True),
        ),
    ]
