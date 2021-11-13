from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from user_profile.views import RegisterView
from user_profile import views
from django.db import router


urlpatterns = [
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
    path('comments/', views.CommentList.as_view()),
    path('comments/<int:pk>/', views.CommentDetail.as_view()),
    path('register/', views.UserCreate.as_view()),
]


