from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import(
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include('blog.urls')),
    
    path("auth/token/", TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path("auth/token/refresh", TokenRefreshView.as_view(), name='token_refresh'),
    path("auth/token/verify/", TokenVerifyView.as_view(), name='token_verify'),
    
    # path("auth/", include('djoser.urls')),
    # path("auth/", include('djoser.urls.jwt'))
]
