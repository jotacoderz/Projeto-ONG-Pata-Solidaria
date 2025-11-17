document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede recarregar a página

    const nome = document.querySelector("input[name='nome']").value.trim();
    const email = document.querySelector("input[name='email']").value.trim();
    const mensagem = document
      .querySelector("textarea[name='mensagem']")
      .value.trim();

    // ====== Validação básica ======
    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // ====== Criando o objeto a ser salvo ======
    const dadosVoluntario = {
      nome,
      email,
      mensagem,
      dataEnvio: new Date().toLocaleString("pt-BR"),
    };

    // ====== Salvando no LocalStorage ======
    let lista = JSON.parse(localStorage.getItem("voluntarios")) || [];
    lista.push(dadosVoluntario);

    localStorage.setItem("voluntarios", JSON.stringify(lista));

    // ====== Mensagem de sucesso ======
    alert("Obrigado! Seus dados foram enviados com sucesso.");

    // Limpa o formulário
    form.reset();
  });
});
