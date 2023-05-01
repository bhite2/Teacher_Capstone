from rest_framework import serializers
from .models import ShareResource


class ShareResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShareResource
        fields = ['id','user1', 'friends', 'resource']
        depth = 1