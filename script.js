document.addEventListener('DOMContentLoaded', () => {
    const frases = [
        "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el valor para continuar. - Winston Churchill",
        "No cuentes los días, haz que los días cuenten. - Muhammad Ali",
        "El único lugar donde el éxito viene antes que el trabajo es en el diccionario. - Vidal Sassoon",
        "La disciplina es el puente entre las metas y los logros. - Jim Rohn",
        "La mejor forma de predecir el futuro es creándolo. - Peter Drucker"
    ];

    const libros = [
        { title: "Los 7 Hábitos de la Gente Altamente Efectiva", author: "Stephen R. Covey" },
        { title: "Cómo Ganar Amigos e Influir sobre las Personas", author: "Dale Carnegie" },
        { title: "Piense y Hágase Rico", author: "Napoleon Hill" },
        { title: "El Poder del Ahora", author: "Eckhart Tolle" },
        { title: "Despierta tu Héroe Interior", author: "Victor Hugo Manzanilla" }
    ];

    const frasesContainer = document.getElementById('frases');
    const librosContainer = document.getElementById('libros');

    frases.forEach(frase => {
        const fraseElement = document.createElement('p');
        fraseElement.textContent = frase;
        frasesContainer.appendChild(fraseElement);
    });

    libros.forEach(libro => {
        const libroElement = document.createElement('p');
        libroElement.innerHTML = `<strong>${libro.title}</strong> por ${libro.author}`;
        librosContainer.appendChild(libroElement);
    });

    // Código para la suscripción
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

