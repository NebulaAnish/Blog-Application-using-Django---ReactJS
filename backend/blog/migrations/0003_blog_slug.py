# Generated by Django 5.0.4 on 2024-04-22 16:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_rename_model_blog'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='slug',
            field=models.SlugField(blank=True, max_length=200, unique=True),
        ),
    ]
