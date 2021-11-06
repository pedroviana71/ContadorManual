let valor = 0
const update = document.querySelector(".contador")
const aumentar = document.getElementById("aumentar")
const diminuir = document.getElementById("diminuir")
const reset = document.getElementById("reset")

aumentar.addEventListener("click", function() {
    valor += 1
    update.textContent = valor
    if(valor>0){
        update.style.color = "rgb(129, 204, 122)"
    }  
}
)

diminuir.addEventListener("click", function(){
    valor -= 1    
    update.textContent = valor
    if(valor < 0) {
        update.style.color = "rgb(211, 132, 132)"
    }
    


})

reset.addEventListener("click", function(){
    valor = 0
    update.textContent = valor
    if (valor == 0){
        update.style.color = "#49475B"
    }
})


