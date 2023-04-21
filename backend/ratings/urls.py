from django.urls import path
from ratings import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
   
    path('', views.users_friends),
    path('', views.get_all_users),
    # path('post/', views.post_new_resource),
]