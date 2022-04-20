from django.urls import path

from . import views
urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('add-property/', views.addProparty, name='addProparty'),
    path('my-properties/', views.myList, name='myList'),
    path('edit-proparty/<int:id>', views.editProparty, name='editProparty'),
    path('delete-proparty/<int:id>', views.deleteProparty, name='deleteProparty'),
    path('change-password/', views.changePass, name='changePass'),
    
]