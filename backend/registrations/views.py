from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response

from . import serializers

class NewRegistration(APIView):
    def post(self, request, format=None):
        registration = serializers.RegistrationSerializer(data=request.data)
        if registration.is_valid():
            registration.save()
            return Response(registration.data)
        else:
            return Response('Failed bro')