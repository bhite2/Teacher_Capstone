from django.db import models
from django.core.validators import FileExtensionValidator
from gradelevels.models import GradeLevel
from authentication.models import User


# Create your models here.

def upload_to(instance, filename):
    return 'image/{filename}'.format(filename=filename)

class Resource(models.Model):
    user= models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    subject = models.CharField(max_length=255)
    grade_level = models.ManyToManyField(GradeLevel)
    file = models.FileField(upload_to=upload_to, blank=True, null=True, max_length=255)
    