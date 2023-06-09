from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Rating
from .serializers import RatingSerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def resource_rating(request, resource_id):
    ratings = Rating.objects.filter(resource_id=resource_id)
    serializer = RatingSerializer(ratings, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def rate_resource(request, resource_id):
    if request.method == 'POST':
        serializer = RatingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)