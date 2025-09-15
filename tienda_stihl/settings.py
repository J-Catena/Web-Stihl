"""
Django settings for tienda_stihl project.

Generado por 'django-admin startproject' usando Django 5.2.6
"""

from pathlib import Path
import os

# ==============================
# Build paths inside the project
# ==============================
BASE_DIR = Path(__file__).resolve().parent.parent

# ==============================
# Quick-start development settings
# ==============================
SECRET_KEY = os.environ.get("SECRET_KEY", "cambia_esta_clave_insegura")

DEBUG = os.environ.get("DEBUG", "False") == "True"

ALLOWED_HOSTS = [
    "jorgegarciastihl.es",
    "www.jorgegarciastihl.es",
    ".onrender.com",
    "127.0.0.1",
    "localhost",
]

# ==============================
# Application definition
# ==============================
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "web",  # tu app principal
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",  # para servir estáticos en producción
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.locale.LocaleMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "tienda_stihl.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [os.path.join(BASE_DIR, "web", "templates")],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "tienda_stihl.wsgi.application"

# ==============================
# Database
# ==============================
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",  # 🚨 cuidado: en Render no es persistente
        "NAME": BASE_DIR / "db.sqlite3",
    }
}
# 👉 Nota: cuando quieras persistencia real en Render, crea una base de datos Postgres
# y cambia ENGINE + NAME/USER/PASSWORD/PORT usando la variable DATABASE_URL.

# ==============================
# Password validation
# ==============================
AUTH_PASSWORD_VALIDATORS = [
    {"NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"},
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]

# ==============================
# Internationalization / i18n
# ==============================
LANGUAGE_CODE = "es"

LANGUAGES = [
    ("es", "Español"),
    ("en", "English"),
    ("fr", "Français"),
    ("de", "Deutsch"),
]

USE_I18N = True
USE_L10N = True
USE_TZ = True
TIME_ZONE = "UTC"

LOCALE_PATHS = [
    BASE_DIR / "locale",
]

# ==============================
# Static files (CSS, JavaScript, Images)
# ==============================
STATIC_URL = "/static/"

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "assets"),  # carpeta de desarrollo
]

STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")  # carpeta para producción

STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

# ==============================
# Email (ajusta si usas Gmail u otro SMTP real)
# ==============================
EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"
EMAIL_HOST = "smtp.gmail.com"
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = "tiendastihlcabopino@gmail.com"
EMAIL_HOST_PASSWORD = "TU_APP_PASSWORD"
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER
