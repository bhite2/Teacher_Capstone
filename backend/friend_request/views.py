from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from authentication.models import User
from .models import Friend_Request

# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def send_friend_request(request, userID):
    from_user = request.user
    to_user = User.objects.get(id=userID)
    friend_request, created= Friend_Request.objects.get_or_create(from_user='from_user', to_user='to_user')
    if created:
        return HttpResponse('friend request sent')
    else:
        return HttpResponse('friend request was already sent')
    
@permission_classes([IsAuthenticated])
def accept_friend_request(request, requestID):
    friend_request = Friend_Request.objects.get(id=requestID)
    if friend_request.to_user == request.user:
        friend_request.to_user.friends.add(friend_request.from_user)
        friend_request.from_user.friends.add(friend_request.to_user)
        friend_request.delete
        return HttpResponse('friend request accepted')
    else:
        return HttpResponse('friend request not accepted')
    