from django.db import models
from gradelevels.models import GradeLevel

# Create your models here.

class Resource(models.Model):
    name = models.CharField(max_length=255)
    alter_ego = models.CharField(max_length=255)
    primary_ability = models.CharField(max_length=255)
    secondary_ability = models.CharField(max_length=255)
    catch_phrase = models.CharField(max_length=255)
    grade_level = models.ManyToManyField(GradeLevel, on_delete=models.CASCADE, null=True)