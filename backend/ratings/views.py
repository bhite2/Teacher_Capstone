from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from .models import Rating
from .serializers import RatingSerializer

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def resource_rating(request):
    if request.method == 'GET':
       rating = rating
    elif request.method == 'POST': 
        rating = rating
    
    
    

    


