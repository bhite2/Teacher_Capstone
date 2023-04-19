from django.urls import path
from resources import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
   
    path('user/', views.user_resources),
    path('all/', views.get_all_resources),
    path('post/', views.post_new_resource),
]