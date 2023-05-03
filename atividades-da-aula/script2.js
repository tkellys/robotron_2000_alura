const cliqueBotao = document.querySelector("#calcular");
let textoResposta = document.querySelector('.resultado') ;

cliqueBotao.addEventListener("click", ()=>{
    textoResposta.innerHTML = "Fui clicado"
})

// RESPOSTA DO PROF.
// const elemento = document.querySelector("#calcular");
// const resultado = document.querySelector(".resultado");

// elemento.addEventListener("click", (evento) => {
//   resultado.innerHTML = "Fui clicado"
// })