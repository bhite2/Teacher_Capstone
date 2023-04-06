from django.db import models
from gradelevels.models import GradeLevel

# Create your models here.

class Resource(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    subject = models.CharField(max_length=255)
    grade_level = models.ManyToManyField(GradeLevel)
    file = models.FileField(upload_to=None, max_length=255)
    