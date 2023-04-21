from django.urls import path
from friendslist import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
   
    # path('', views.user_resources),
    path('all/', views.get_all_users),
    # path('post/', views.post_new_resource),
]