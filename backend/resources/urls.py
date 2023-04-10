from django.urls import path, include
from resources import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    # path('', views.user_cars),
    path('all/', views.get_all_resources),
]