from django.urls import path
from comments import views

urlpatterns = [
    path('', views.user_comments),
    path('<str:resource_id>/', views.get_resource_comments),
]