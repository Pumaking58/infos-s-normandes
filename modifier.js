const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));
let articles = JSON.parse(localStorage.getItem("articles") || "[]");
let article = articles[id];

document.getElementById("titre").value = article.titre;
document.getElementById("categorie").value = article.categorie;
document.getElementById("editor").innerHTML = article.contenu;

function sauvegarder() {
  article.titre = document.getElementById("titre").value;
  article.categorie = document.getElementById("categorie").value;
  article.contenu = document.getElementById("editor").innerHTML;

  const file = document.getElementById("image").files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      article.image = reader.result;
      enregistrer();
    };
    reader.readAsDataURL(file);
  } else {
    enregistrer();
  }
}

function enregistrer() {
  articles[id] = article;
  localStorage.setItem("articles", JSON.stringify(articles));
  alert("Article modifié !");
  window.location.href = "article.html?id=" + id;
}
