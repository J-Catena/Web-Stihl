from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
import os

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('web.urls')),  # Incluye las rutas de la app 'web'

    # 👇 sitemap global
    path(
        "sitemap.xml",
        TemplateView.as_view(
            template_name="sitemap.xml",
            content_type="application/xml"
        ),
        name="sitemap"
    ),
]

# Para servir archivos estáticos desde la carpeta assets/ en modo desarrollo
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=os.path.join(settings.BASE_DIR, "assets"))
