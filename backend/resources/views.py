
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Resource
from .serializer import ResourceSerializer
from django.shortcuts import get_object_or_404

# Create your views here.

parser_classes = (MultiPartParser, FormParser)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_resources(request):
    if request.method == 'GET':
        resources = Resource.objects.all()
        serializer = ResourceSerializer(resources, many=True)
        return Response(serializer.data)
    
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def post_new_resource(request):
    if request.method == 'POST':
        serializer = ResourceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_resources(request):
        resources = Resource.objects.filter(user_id=request.user.id)
        serializer = ResourceSerializer(resources, many=True)
        return Response(serializer.data)
    
@api_view(['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def edit_resources(request, pk):
    resource = get_object_or_404(Resource, pk=pk)   
    if request.method == 'PUT':
        serializer = ResourceSerializer(resource, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        resource.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)