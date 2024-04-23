from django.urls import path
from . import views

urlpatterns = [
    path("blogs/", views.BlogReadView.as_view(), name='blog-read'),
    path("blogs/", views.BlogListCreateAPIView.as_view(), name='blog-list-create'),
    path("blogs/<slug:slug>/", views.BlogRetrieveUpdateDestroyAPIView.as_view(), name='blog-detail'),
]