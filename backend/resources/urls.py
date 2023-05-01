from django.urls import path
from resources import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
   
    path('', views.user_resources),
    path('<int:pk>/', views.resource_details),
    path('edit/<int:pk>/', views.edit_resources),
    path('all/', views.get_all_resources),
    path('post/', views.post_new_resource),
]