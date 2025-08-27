from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
import os  # Importar os para usar os.path.join()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('web.urls')),  # usa las rutas de la app "web"
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=os.path.join(settings.BASE_DIR, 'assets'))

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('web.urls')),  # Esto es clave para que se carguen tus páginas
]
