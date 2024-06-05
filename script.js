document.addEventListener('DOMContentLoaded', () => {
    const frases = [
        "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el valor para continuar. - Winston Churchill",
        "No cuentes los días, haz que los días cuenten. - Muhammad Ali",
        "El único lugar donde el éxito viene antes que el trabajo es en el diccionario. - Vidal Sassoon",
        "La disciplina es el puente entre las metas y los logros. - Jim Rohn",
        "La mejor forma de predecir el futuro es creándolo. - Peter Drucker"
    ];

    const libros = [
        "Los 7 hábitos de la gente altamente efectiva - Stephen R. Covey",
        "Cómo ganar amigos e influir sobre las personas - Dale Carnegie",
        "Piense y hágase rico - Napoleon Hill",
        "El poder del ahora - Eckhart Tolle",
        "Hábitos atómicos - James Clear"
    ];

    const frasesContainer = document.getElementById('frases');
    const librosContainer = document.getElementById('libros');

    frases.forEach(frase => {
        const p = document.createElement('p');
        p.textContent = frase;
        frasesContainer.appendChild(p);
    });

    libros.forEach(libro => {
        const p = document.createElement('p');
        p.textContent = libro;
        librosContainer.appendChild(p);
    });

    document.getElementById('subscribe-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        document.getElementById('subscribe-message').textContent = `¡Gracias por suscribirte, ${email}!`;
        e.target.reset();
    });

    document.querySelectorAll('nav ul li a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            window.open(this.href);
        });
    });

    const submenuFrases = document.getElementById('submenu-frases');
    document.querySelector('nav ul li a[href="frases.html"]').addEventListener('mouseover', () => {
        submenuFrases.style.display = 'block';
    });

    submenuFrases.addEventListener('mouseleave', () => {
        submenuFrases.style.display = 'none';
    });
});
