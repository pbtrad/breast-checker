from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class User_profile(models.Model):
    user = models.ForeignKey(User, models.CASCADE)
    name = models.CharField(max_length=100)
    email = models.EmailField(null=True, blank=True)

    def __str__(self):
        return "%s - %s" % (self.name, self.email, )