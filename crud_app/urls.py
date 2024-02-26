from django.urls import path
from . import views

urlpatterns = [
    path('users', views.indexUser, name='user_index'),
    path('user/add', views.createUser, name='user_create'),
    path('genders', views.indexGender, name='gender_index'),
    path('gender/add', views.createGender, name='gender_create'),
    path('storeGender', views.storeGender, name='gender_store')
]
