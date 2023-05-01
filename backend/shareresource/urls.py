from django.urls import path
from shareresource import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
   
    path('friends/', views.users_friends),
    path('all/', views.get_all_users),
    path('add/user/<int:user_pk>/friend/<int:friend_pk>/', views.add_friend),
]