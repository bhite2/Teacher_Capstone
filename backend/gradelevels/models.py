from django.db import models

# Create your models here.

class GradeLevel(models.Model):
    level = models.CharField(max_length=10)
    
    def __str__(self) -> str:
        return f"{self.level}"