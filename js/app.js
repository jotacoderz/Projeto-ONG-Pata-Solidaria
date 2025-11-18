// =======================
// Dados dos animais
// =======================
const animais = [
  { nome: "Boomerang", imagem: "img/malu.jpeg" },
  { nome: "Malu", imagem: "img/boo.jpeg" },
  {
    nome: "Sapeca",
    imagem: "img/sapeca.jpeg",
  },
];

// Favoritos salvos no navegador
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

// =======================
// Renderizar cards
// =======================
function renderizarAnimais() {
  const container = document.getElementById("lista-animais");
  container.innerHTML = "";

  animais.forEach((animal) => {
    const card = document.createElement("div");
    card.classList.add("card-animal");

    card.innerHTML = `
      <img src="${animal.imagem}" alt="${animal.nome}">
      <h4>${animal.nome}</h4>
      <button class="fav-btn">❤️ Favoritar</button>
    `;

    // Favoritar
    card.querySelector(".fav-btn").onclick = () => {
      favoritos.push(animal);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      alert(`${animal.nome} adicionado aos favoritos!`);
    };

    container.appendChild(card);
  });
}

renderizarAnimais();
// Botão voltar ao topo
const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
