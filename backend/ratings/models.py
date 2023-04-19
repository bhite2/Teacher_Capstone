from django.db import models
from resources.models import Resource

# Create your models here.

class Rating(models.Model):
    resource = models.ForeignKey(Resource, on_delete=models.CASCADE)
    rating = models.IntegerField(default=0)