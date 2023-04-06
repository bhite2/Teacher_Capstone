from rest_framework import serializers
from .models import Friends_List


class FriendsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friends_List
        fields = ['user_id']
        depth = 1