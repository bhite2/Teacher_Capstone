from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from authentication.models import User
from authentication.serializers import RegistrationSerializer
from .models import Favorites
from .serializers import FavoritesSerializer
from .models import Resource


# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def users_favorites(request):
    userf = Favorites.objects.filter(userf=request.user.id)
    serializer = FavoritesSerializer(userf, many=True)
    return Response(serializer.data)

@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def add_favorite(request, userf_pk, resource_pk):
    try:
        user = User.objects.get(pk=userf_pk)
    except:
        return Response ({"Resource not found!"}, status=status.HTTP_404_NOT_FOUND)
    
    try:
        favorites = Resource.objects.get(pk=resource_pk)
    except:
        return Response ({"User not found!"}, status=status.HTTP_404_NOT_FOUND)
    
    add_favorite = Favorites.objects.create(userf=user)
    add_favorite.favorites.add(favorites)
    
    serializer = FavoritesSerializer(add_favorite)
    return Response(serializer.data, status=status.HTTP_200_OK)
    