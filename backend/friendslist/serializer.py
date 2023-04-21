from rest_framework import serializers
from .models import AddFriend


class AddFriendSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddFriend
        fields = ['id','user', 'friend']
        depth = 1