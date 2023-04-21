from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from authentication.models import User
from authentication.serializers import RegistrationSerializer
from .models import AddFriend
from .serializer import AddFriendSerializer

# Create your views here.


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_users(request):
    users = User.objects.all()
    serializer = RegistrationSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def add_friend(request, user_pk, friend_pk):
    try:
        user = User.objects.get(pk=user_pk)
    except:
        return Response ({"Friend not found!"}, status=status.HTTP_404_NOT_FOUND)
    
    try:
        friend = User.objects.get(pk=friend_pk)
    except:
        return Response ({"User not found!"}, status=status.HTTP_404_NOT_FOUND)
    
    add_friend = AddFriend.objects.create(user=user)
    add_friend.friend.add(friend)
    
    serializer = AddFriendSerializer(add_friend)
    return Response(serializer.data, status=status.HTTP_200_OK)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def users_friends(request):
    friends = AddFriend.objects.filter(user_id=request.user.id)
    serializer = AddFriendSerializer(friends, many=True)
    return Response(serializer.data)