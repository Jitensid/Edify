# Generated by Django 3.1.1 on 2020-09-19 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_auto_20200919_0943'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='videos',
            field=models.ManyToManyField(blank=True, null=True, to='home.Video'),
        ),
    ]
