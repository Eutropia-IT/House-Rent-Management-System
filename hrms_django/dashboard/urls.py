from django.urls import path

from . import views
urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('add-property/', views.addProparty, name='addProparty'),
    path('my-properties/', views.myList, name='myList'),
    path('change-password/', views.changePass, name='changePass'),
]