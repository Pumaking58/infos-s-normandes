function auth() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "eregelbrugge" && pass === "30062006") {
    document.getElementById("login").style.display = "none";
    document.getElementById("editor-section").style.display = "block";
  } else {
    alert("Identifiants incorrects.");
  }
}

function publier() {
  const titre = document.getElementById("titre").value;
  const contenu = document.getElementById("editor").innerHTML;
  const categorie = document.getElementById("categorie").value;
  const date = new Date().toLocaleDateString("fr-FR");
  const file = document.getElementById("image").files[0];
  const article = { titre, contenu, categorie, date };

  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      article.image = reader.result;
      enregistrer(article);
    };
    reader.readAsDataURL(file);
  } else {
    enregistrer(article);
  }
}

function enregistrer(article) {
  let articles = JSON.parse(localStorage.getItem("articles")) || [];
  articles.push(article);
  localStorage.setItem("articles", JSON.stringify(articles));
  alert("Article publié !");
  window.location.href = "index.html";
}
