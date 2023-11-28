// Seleciona o formulário e os campos
const form = document.querySelector("form");
const firstName = form.querySelector("#first-name");
const lastName = form.querySelector("#last-name");
const email = form.querySelector("#email");
const phone = form.querySelector("#phone");
const card = form.querySelector("#card");
const amount = form.querySelector("#amount");

// Adiciona um listener para o evento "submit" do formulário
form.addEventListener("submit", function(event) {
  // Valida o campo de nome
  if (firstName.value.trim() === "") {
    alert("Por favor, preencha o campo de nome.");
    event.preventDefault();
    return;
  }

  // Valida o campo de sobrenome
  if (lastName.value.trim() === "") {
    alert("Por favor, preencha o campo de sobrenome.");
    event.preventDefault();
    return;
  }

  // Valida o campo de email
  if (email.value.trim() === "") {
    alert("Por favor, preencha o campo de email.");
    event.preventDefault();
    return;
  }

  // Valida o campo de telefone
  if (phone.value.trim() === "") {
    alert("Por favor, preencha o campo de telefone.");
    event.preventDefault();
    return;
  }

  // Valida o campo de cartão de crédito
  if (card.value === "") {
    alert("Por favor, selecione um cartão de crédito.");
    event.preventDefault();
    return;
  }

  // Valida o campo de valor
  if (amount.value.trim() === "") {
    alert("Por favor, preencha o campo de valor.");
    event.preventDefault();
    return;
  }

  // Valida o campo de valor para aceitar apenas números
  if (isNaN(amount.value.trim())) {
    alert("Por favor, insira apenas números no campo de valor.");
    event.preventDefault();
    return;
  }
});
