from django.urls import path

from . import views
app_name = 'registrations'

urlpatterns = [
    path('newregistration', views.NewRegistration.as_view())
]