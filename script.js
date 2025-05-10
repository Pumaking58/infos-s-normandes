window.onload = () => {
  const container = document.getElementById("articles");
  const articles = JSON.parse(localStorage.getItem("articles") || "[]");

  const reversed = [...articles].reverse();

  reversed.forEach((article, index) => {
    const realIndex = articles.length - 1 - index;

    const div = document.createElement("div");
    div.className = "article-preview";
    div.innerHTML = `
      <h2>${article.titre}</h2>
      <p><em>${article.date} - ${article.categorie}</em></p>
      ${article.image ? `<img src="${article.image}" style="max-width:100%; margin: 10px 0;">` : ""}
      <p>${article.contenu.slice(0, 200)}...</p>
      <a href="article.html?id=${realIndex}">Lire la suite →</a>
    `;
    container.appendChild(div);
  });
};
