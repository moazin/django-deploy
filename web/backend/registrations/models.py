from django.db import models

class Registration(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email = models.EmailField()
    username = models.CharField(max_length=30)

    def __str__(self):
        return self.first_name + ' ' + self.last_name