document.addEventListener('DOMContentLoaded', () => {
    const subscribeForm = document.getElementById('subscribe-form');
    const subscribeMessage = document.getElementById('subscribe-message');

    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = subscribeForm.email.value;

        // Aquí puedes añadir la lógica para enviar el correo a tu servidor
        // Para este ejemplo, solo mostramos un mensaje de éxito
        subscribeMessage.textContent = `¡Gracias por suscribirte, ${email}!`;
        subscribeForm.reset();
    });
});

