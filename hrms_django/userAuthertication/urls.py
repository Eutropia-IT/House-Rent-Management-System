from django.urls import path

from userAuthertication import views 

urlpatterns = [
    path('signup/', views.signup, name='signup'),
]