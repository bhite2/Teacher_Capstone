from django.db import models
from resources.models import Resource

# Create your models here.

class Rating(models.Model):
    resource = models.ForeignKey(Resource)
    rating = models.IntegerField(default=0)