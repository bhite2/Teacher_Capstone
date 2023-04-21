from django.urls import path
from ratings import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
   
    path('rate/<int:post_id>/<int:rating>/', views.resource_rating),
]