const update = document.querySelector(".contador");
const aumentar = document.getElementById("aumentar");
const diminuir = document.getElementById("diminuir");
const reset = document.getElementById("reset");

let valor = 0;
const verde = "rgb(129, 204, 122)";
const vermelho = "rgb(211, 132, 132)";
const cinza = "#49475B";

const resetarCor = () => {
  valor = 0;
  update.textContent = valor;
  update.style.color = cinza;
};

aumentar.addEventListener("click", function () {
  valor += 1;
  update.textContent = valor;
  if (valor > 0) {
    update.style.color = verde;
  }
  if (valor === 0) {
    resetarCor();
  }
});

diminuir.addEventListener("click", function () {
  valor -= 1;
  update.textContent = valor;
  if (valor < 0) {
    update.style.color = vermelho;
  }
  if (valor === 0) {
    resetarCor();
  }
});

reset.addEventListener("click", function () {
  resetarCor();
});
