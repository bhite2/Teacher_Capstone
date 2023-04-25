from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Rating
from .serializers import RatingSerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def resource_rating(request):
    ratings = Rating.objects.filter(user_id=request.user.id)
    serializer = RatingSerializer(ratings, many=True)
    return Response(serializer.data)

# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def rate_resource(request):
#     serializer = RatingSerializer.objects.