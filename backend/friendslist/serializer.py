from rest_framework import serializers
from .models import FriendsList


class FriendsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = FriendsList
        fields = ['user_id']
        depth = 1