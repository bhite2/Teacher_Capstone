from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from .models import ShareResource
from .serializers import ShareResourceSerializer

# Create your views here.


@api_view(["GET","POST"])
@permission_classes([IsAuthenticated])
def get_shared_resource(request):
    if request.method == "GET":
        shared =  ShareResource.objects.filter(user_id=request.user.id)
        serializer = ShareResourceSerializer(shared, many=True)
        return Response(serializer.data)
    if request.method == "POST":
        