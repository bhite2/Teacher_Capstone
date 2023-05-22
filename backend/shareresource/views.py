from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from authentication.models import User
from friendslist.models import AddFriend
from resources.models import Resource
from .models import ShareResource
from .serializers import ShareResourceSerializer

# Create your views here.


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def shared_with_user(request):
    if request.method == "GET":
        shared =  ShareResource.objects.filter(user_id=request.user.id)
        serializer = ShareResourceSerializer(shared, many=True)
        return Response(serializer.data)
        
@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def share_resource(request, user1_pk, friends_pk, resource_pk):
    try:
        user = User.objects.get(pk=user1_pk)
    except:
        return Response ({"Friend not found!"}, status=status.HTTP_404_NOT_FOUND)
    
    try:
        friends = AddFriend.objects.get(pk=friends_pk)
    except:
        return Response ({"User not found!"}, status=status.HTTP_404_NOT_FOUND)
    
    try:
        resource = Resource.objects.get(pk=resource_pk)
    except:
        return Response ({"Resource not found!"}, status=status.HTTP_404_NOT_FOUND)
    
    add_friend = ShareResource.objects.create(user1=user)
    add_friend.friends.add(friends)
    
    add_resource = ShareResource.objects.create(user1=user)
    add_resource.resource.add(resource)
    
    serializer = ShareResourceSerializer(add_friend)
    return Response(serializer.data, status=status.HTTP_200_OK)
        