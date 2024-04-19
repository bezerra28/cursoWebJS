//função que exibe o som
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();

}

//cria aqui uma lista de teclas se referenciando a elas que esta no index.html
const listaDeTeclas = document.querySelectorAll('.tecla');

//contador do loop
let contador = 0;

//loop
while (contador < listaDeTeclas.length){

    listaDeTeclas[contador].onclick = function(){

    }
    contador = contador + 1;

    console.log(contador);
}