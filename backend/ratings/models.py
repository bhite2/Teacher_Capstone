from django.db import models
from resources.models import Resource
from authentication.models import User

# Create your models here.

class Rating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    resource = models.ForeignKey(Resource, on_delete=models.CASCADE)
    rating = models.IntegerField(default=0)