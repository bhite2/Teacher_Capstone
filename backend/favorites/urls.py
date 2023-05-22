from django.urls import path
from favorites import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
   
    path('user/<int:userf_pk>/favorite/<int:resource_pk>/', views.add_favorite),
    path('', views.users_favorites),
]