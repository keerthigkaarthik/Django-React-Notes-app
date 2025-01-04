from django.db import models

# Create your models here.

class Note(models.Model):
    title = models.TextField(null=False, blank=True, default="")
    body = models.TextField(null=False, blank=True, default="")
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body