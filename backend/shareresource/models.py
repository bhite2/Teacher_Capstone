from django.db import models
from authentication.models import User
from resources.models import Resource
# Create your models here.

class ShareResource(models.Model):
    user1 = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user1')
    friends = models.ManyToManyField(User, related_name='friends')
    resource = models.ManyToManyField(Resource, related_name='resource')
    