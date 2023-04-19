from rest_framework import serializers
from .models import Resource


class ResourceSerializer(serializers.ModelSerializer):
    file = serializers.FileField(required=False)
    class Meta:
        model = Resource
        fields = ['id', 'user', 'title', 'description', 'subject', 'grade_level', 'file']
      