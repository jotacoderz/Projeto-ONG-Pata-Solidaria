// Seleciona o botão e o menu
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("header ul");

// Adiciona evento de clique
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show"); // adiciona/remove a classe 'show' do menu
});
