from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    pass  # Additional fields can be added here

class Composition(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    tempo = models.IntegerField(default=120)
    key_signature = models.CharField(max_length=10)
    chord_progression = models.TextField()
    mood = models.CharField(max_length=50)
    genre = models.CharField(max_length=50)
    instruments = models.TextField()
    midi_file = models.FileField(upload_to='midi_files/')
    created_at = models.DateTimeField(auto_now_add=True)