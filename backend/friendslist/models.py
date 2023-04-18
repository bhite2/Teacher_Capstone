from django.db import models
from authentication.models import User

# Create your models here.

class AddFriend(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user')
    friend = models.ManyToManyField(User, related_name='friend')
    