from django.db import models
from authentication.models import User


# Create your models here.

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    resource_id = models.CharField(max_length=30)
    text = models.CharField(max_length=100)
