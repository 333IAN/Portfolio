from django.db import models

class Contact(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField()
    message=models.TextField()
    sent_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

# Create your models here.
