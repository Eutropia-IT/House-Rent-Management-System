# Generated by Django 4.0.3 on 2022-04-13 00:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='proparty',
            name='status',
            field=models.CharField(default='Active', max_length=1000),
        ),
    ]
