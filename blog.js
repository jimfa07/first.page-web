document.addEventListener("DOMContentLoaded", function() {
    const articles = [
        {
            title: "Primer Artículo del Blog",
            content: "Este es el contenido de tu primer artículo. Aquí puedes escribir sobre superación personal, motivación, disciplina, y más.",
            link: "#"
        },
        {
            title: "Segundo Artículo del Blog",
            content: "Este es el contenido de tu segundo artículo. Aquí puedes continuar con temas relacionados a tu enfoque.",
            link: "#"
        }
        // Añadir más artículos aquí
    ];

    const blogContent = document.getElementById("blog-content");

    articles.forEach(article => {
        const articleElement = document.createElement("article");
        const titleElement = document.createElement("h3");
        titleElement.textContent = article.title;

        const contentElement = document.createElement("p");
        contentElement.textContent = article.content;

        const linkElement = document.createElement("a");
        linkElement.textContent = "Leer más";
        linkElement.href = article.link;

        articleElement.appendChild(titleElement);
        articleElement.appendChild(contentElement);
        articleElement.appendChild(linkElement);

        blogContent.appendChild(articleElement);
    });
});
