from django.shortcuts import render
from rest_framework import generics
from .models import Contact
from .serializers import ContactSerializer

class ContactCreateView(generics.CreateAPIView):
    queryset=Contact.objects.all()
    serializer_class=ContactSerializer
    

# Create your views here.
