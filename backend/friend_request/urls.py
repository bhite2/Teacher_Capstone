from django.urls import path
from friend_request import views

urlpatterns = [
    path('send_friend_request/<int:userID',
         views.send_friend_request),
    path('accep_friend_request/<int:requestID>/',
         views.accept_friend_request)
]
