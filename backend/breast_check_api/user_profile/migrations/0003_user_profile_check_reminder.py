# Generated by Django 3.2.9 on 2021-11-13 18:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_profile', '0002_comment'),
    ]

    operations = [
        migrations.AddField(
            model_name='user_profile',
            name='check_reminder',
            field=models.BooleanField(default=False),
        ),
    ]