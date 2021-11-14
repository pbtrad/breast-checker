from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from user_profile.views import RegisterView, GoogleLogin
from user_profile import views
from django.db import router

urlpatterns = [
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
    path('comments/', views.CommentList.as_view()),
    path('comments/<int:pk>/', views.CommentDetail.as_view()),
    #path('register/', views.UserCreate.as_view()),
    path('user-create/', views.UserCreate.as_view()),
    path('auth/google', GoogleLogin.as_view(), name='google_login'),
]


