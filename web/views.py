from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.contrib import messages

def index(request):
    return render(request, 'index.html')

def contacto(request):
    if request.method == 'POST':
        nombre = request.POST.get('nombre')
        email = request.POST.get('email')
        consulta = request.POST.get('consulta')

        asunto = f'Nuevo mensaje de contacto de {nombre}'
        mensaje = f'Nombre: {nombre}\nEmail: {email}\n\nConsulta:\n{consulta}'
        destinatario = ['tiendastihlcabopino@gmail.com']  # Aquí llega el correo

        try:
            send_mail(
                asunto,
                mensaje,
                email,          # Remitente (usuario que llena el formulario)
                destinatario,   # Destinatario (tu correo)
                fail_silently=False,
            )
            messages.success(request, 'Tu mensaje ha sido enviado correctamente.')
        except Exception as e:
            messages.error(request, f'Error al enviar el mensaje: {e}')

        return redirect('contacto')

    return render(request, 'contacto.html')
