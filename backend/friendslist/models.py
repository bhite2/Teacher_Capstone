from django.db import models
from authentication.models import User

# Create your models here.

class Friends_List(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
   