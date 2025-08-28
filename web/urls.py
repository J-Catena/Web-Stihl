from django.urls import path
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    # Vistas con lógica
    path('', views.index, name='index'),
    path('contacto/', views.contacto, name='contacto'),

    # Vistas estáticas (solo plantilla)
    path('aviso-legal/', TemplateView.as_view(template_name='aviso-legal.html'), name='aviso-legal'),
    path('proteccion-datos/', TemplateView.as_view(template_name='proteccion-de-datos.html'), name='proteccion-datos'),
    path('politica-cookies/', TemplateView.as_view(template_name='cookies.html'), name='politica-cookies'),
]
