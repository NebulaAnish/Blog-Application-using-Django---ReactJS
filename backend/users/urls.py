from django.urls import path
from . import views

urlpatterns = [ 
    path("accounts/create/", views.UserCreateAPIView.as_view(), name='user-create'),
]