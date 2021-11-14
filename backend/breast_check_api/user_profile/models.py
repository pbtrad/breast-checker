from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class User_profile(models.Model):
    user = models.ForeignKey(User, models.CASCADE)
    name = models.CharField(max_length=100)
    email = models.EmailField(null=True, blank=True)
<<<<<<< HEAD
    check_reminder = models.BooleanField(default=False)

=======
>>>>>>> 3f3edc4fe759645f82b7af01083c680279b682c3

    def __str__(self):
        return "%s - %s" % (self.name, self.email, )

class Comment(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    body = models.TextField(blank=True, default='')
    owner = models.ForeignKey('auth.User', related_name='comments', on_delete=models.CASCADE)

    class Meta:
        ordering = ['created']