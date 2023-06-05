from django.urls import path
from ratings import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
   
    path('<int:resource_id>/', views.resource_rating),
    path('rate/<int:resource_id>/', views.rate_resource),
]