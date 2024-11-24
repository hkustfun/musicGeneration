from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from api.views import CompositionViewSet

router = routers.DefaultRouter()
router.register(r'compositions', CompositionViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]