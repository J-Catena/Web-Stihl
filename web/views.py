from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.contrib import messages
from .productos_data import PRODUCTOS  # Importamos los productos


# Página principal
def index(request):
    return render(request, 'index.html')


# Formulario de contacto con envío de correo
def contacto(request):
    if request.method == 'POST':
        nombre = request.POST.get('nombre')
        email = request.POST.get('email')
        consulta = request.POST.get('consulta')

        asunto = f'Nuevo mensaje de contacto de {nombre}'
        mensaje = f'Nombre: {nombre}\nEmail: {email}\n\nConsulta:\n{consulta}'
        destinatario = ['tiendastihlcabopino@gmail.com']  # Reemplaza por tu correo real

        try:
            send_mail(
                asunto,
                mensaje,
                email,
                destinatario,
                fail_silently=False,
            )
            messages.success(request, 'Tu mensaje ha sido enviado correctamente.')
        except Exception as e:
            messages.error(request, f'Error al enviar el mensaje: {e}')

        return redirect('contacto')

    return render(request, 'contacto.html')


# Vista general de productos (categorías principales)
def productos(request):
    categorias = PRODUCTOS.keys()  # ['motosierras', 'motores', ...]
    data = {key: PRODUCTOS[key]['nombre'] for key in categorias}
    return render(request, 'productos.html', {'categorias': data})


# Vista por categoría (con filtro por tipo: batería o gasolina)
def categoria(request, categoria):
    categoria = categoria.lower()
    datos_categoria = PRODUCTOS.get(categoria)

    if not datos_categoria:
        messages.error(request, 'Categoría no encontrada.')
        return redirect('productos')

    tipo = request.GET.get('tipo')
    productos = datos_categoria['productos']

    if tipo in ['bateria', 'gasolina']:
        productos = [p for p in productos if p['tipo'] == tipo]

    return render(request, 'categoria.html', {
        'categoria_key': categoria,
        'categoria': datos_categoria['nombre'],
        'productos': productos,
    })
