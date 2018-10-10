from rest_framework import serializers

from . import models

class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Registration
        fields = ('id', 'first_name', 'last_name', 'email', 'username')