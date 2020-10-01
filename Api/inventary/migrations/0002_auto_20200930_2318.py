# Generated by Django 3.0.1 on 2020-09-30 23:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('inventary', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(blank=True, null=True)),
                ('publish', models.BooleanField(null=True)),
                ('publish_date', models.DateTimeField(null=True)),
                ('creation_date', models.DateTimeField(null=True)),
                ('modification_date', models.DateTimeField(null=True)),
                ('unpublish_date', models.DateTimeField(null=True)),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='allergy',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='creation_date',
            field=models.DateTimeField(null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='modification_date',
            field=models.DateTimeField(null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='price',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='publish',
            field=models.BooleanField(null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='publish_date',
            field=models.DateTimeField(null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='unpublish_date',
            field=models.DateTimeField(null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='inventary.Category'),
        ),
    ]