from rest_framework import viewsets
from .models import Composition
from .serializers import CompositionSerializer

class CompositionViewSet(viewsets.ModelViewSet):
    queryset = Composition.objects.all()
    serializer_class = CompositionSerializer