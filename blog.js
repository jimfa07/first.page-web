<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog - Inspiración Constante</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="canonical" href="https://inspiracionconstante.com/blog.html">
    <meta name="description" content="Lee los últimos artículos sobre superación personal, motivación y disciplina en el blog de Inspiración Constante.">
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-7M0WYD3RNG"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7M0WYD3RNG');
    </script>
</head>
<body>
    <header>
        <h1>Inspiración Constante</h1>
        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="exito-disciplina.html">Éxito y Disciplina</a></li>
                <li><a href="contacto.html">Contacto</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="frases.html" target="_blank">Frases</a></li>
                <li><a href="libros.html" target="_blank">Libros</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Blog</h2>
        <section id="blog-posts">
            <!-- Aquí se cargarán los posts del blog -->
        </section>

        <!-- Formulario de suscripción -->
        <section id="subscribe">
            <h3>Suscríbete a nuestro boletín</h3>
            <form id="subscribe-form">
                <input type="email" id="email" name="email" placeholder="Ingresa tu correo electrónico" required>
                <button type="submit">Suscribirse</button>
            </form>
            <p id="subscribe-message"></p>
        </section>

        <!-- Sección de comentarios -->
        <section id="comments">
            <h3>Comentarios</h3>
            <div id="comment-list"></div>
            <form id="comment-form">
                <input type="text" id="comment" name="comment" placeholder="Escribe tu comentario" required>
                <button type="submit">Enviar</button>
            </form>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Inspiración Constante. Todos los derechos reservados.</p>
    </footer>
    <script src="blog.js"></script>
</body>
</html>
