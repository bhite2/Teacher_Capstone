from django.urls import path
from shareresource import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
   
    path('', views.shared_with_user),
    path('user/<int:user_pk>/friends/<int:friends_pk>/resource/<int:resource_pk>/', views.share_resource),
]