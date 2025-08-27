from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),           
    path('contacto/', views.contacto, name='contacto'),
]

# web/urls.py
from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html'), name='index'),
    path('contacto/', TemplateView.as_view(template_name='contacto.html'), name='contacto'),
    path('aviso-legal/', TemplateView.as_view(template_name='aviso-legal.html'), name='aviso-legal'),
    path('proteccion-datos/', TemplateView.as_view(template_name='proteccion-de-datos.html'), name='proteccion-datos'),
    path('politica-cookies/', TemplateView.as_view(template_name='cookies.html'), name='politica-cookies'),
]
