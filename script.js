var contador = document.querySelector(".badge");

document.getElementById("add").addEventListener("click", function () {
  var numero = parseInt(contador.textContent) + 1;
  contador.textContent = numero;
});
document.getElementById("remove").addEventListener("click", function () {
  var numero = parseInt(contador.textContent) - 1;
  contador.textContent = numero;
});

function handleSubmit() {
  var nome = document.getElementById("nome").value;
  var nomeAlert = document.getElementById("nomeAlert");

  var email = document.getElementById("email").value;
  var nomeEmail = document.getElementById("nomeEmail");

  if (nome.length == 0) {
    nomeAlert.style.display = "block";
  } else {
    nomeAlert.style.display = "none";
  }
  if (email.length == 0) {
    nomeEmail.style.display = "block";
  } else {
    nomeEmail.style.display = "none";
  }
}
