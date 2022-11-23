let valor = 0;
const update = document.querySelector(".contador");
const aumentar = document.getElementById("aumentar");
const diminuir = document.getElementById("diminuir");
const reset = document.getElementById("reset");

const resetarCor = () => {
  valor = 0;
  update.textContent = valor;
  update.style.color = "#49475B";
};

aumentar.addEventListener("click", function () {
  valor += 1;
  update.textContent = valor;
  if (valor > 0) {
    update.style.color = "rgb(129, 204, 122)";
  }
  if (valor === 0) {
    resetarCor();
  }
});

diminuir.addEventListener("click", function () {
  valor -= 1;
  update.textContent = valor;
  if (valor < 0) {
    update.style.color = "rgb(211, 132, 132)";
  }
  if (valor === 0) {
    resetarCor();
  }
});

reset.addEventListener("click", function () {
  resetarCor();
});
