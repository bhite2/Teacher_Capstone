from django.db import models
from authentication.models import User

# Create your models here.

class FriendsList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
   