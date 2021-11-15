
from django.contrib import admin
from django.db import router
from django.urls import path, include

from user_profile.views import RegisterView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('user_profile.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    #path('accounts/', include('django.contrib.auth.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest_auth/registration/', include('rest_auth.registration.urls')),
    path('accounts/', include('allauth.urls')),
   


]


