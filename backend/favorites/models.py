from django.db import models
from resources.models import Resource
from authentication.models import User

# Create your models here.

class Favorites(models.Model):
    userf = models.ForeignKey(User, on_delete=models.CASCADE, related_name='userf')
    favorites = models.ManyToManyField(Resource, related_name='favorites')