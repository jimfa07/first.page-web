document.addEventListener('DOMContentLoaded', () => {
    const posts = [
        {
            title: "El Camino al Éxito",
            content: "El éxito no es el destino, sino el viaje. A lo largo de este viaje, enfrentaremos desafíos y adversidades, pero cada paso nos acerca más a nuestras metas. La clave está en la perseverancia y la disciplina."
        },
        {
            title: "La Importancia de la Disciplina",
            content: "La disciplina es la base de todo éxito duradero. Sin disciplina, las metas se vuelven solo sueños inalcanzables. Es importante establecer rutinas y hábitos que nos lleven hacia nuestros objetivos."
        },
        {
            title: "Motivación Diaria",
            content: "La motivación puede ser efímera, pero la inspiración constante nos mantiene en el camino. Rodéate de personas y entornos que te impulsen a ser mejor cada día."
        },
        {
            title: "Desarrollo Personal y Negocios",
            content: "El desarrollo personal es crucial para el éxito en los negocios. Invertir en uno mismo, adquirir nuevas habilidades y conocimientos, y mantener una mentalidad positiva son fundamentales para prosperar en el mundo empresarial."
        },
        {
            title: "Ejemplos de Superación Personal",
            content: "Historias inspiradoras de personas que han superado grandes obstáculos en su vida. Estos ejemplos nos muestran que con determinación y esfuerzo, cualquier meta es alcanzable."
        }
    ];

    const blogPostsContainer = document.getElementById('blog-posts');

    posts.forEach(post => {
        const postElement = document.createElement('article');

        const postTitle = document.createElement('h3');
        postTitle.textContent = post.title;

        const postContent = document.createElement('p');
        postContent.textContent = post.content;

        postElement.appendChild(postTitle);
        postElement.appendChild(postContent);

        blogPostsContainer.appendChild(postElement);
    });
});

const subscribeForm = document.getElementById('subscribe-form');
const subscribeMessage = document.getElementById('subscribe-message');

subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    subscribeMessage.textContent = `Gracias por suscribirte con ${email}.`;
});

const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('comment-list');

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const comment = document.getElementById('comment').value;
    const commentElement = document.createElement('p');
    commentElement.textContent = comment;
    commentList.appendChild(commentElement);
    commentForm.reset();
});
