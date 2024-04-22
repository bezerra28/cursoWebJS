//função que exibe o som e recebe o id 
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();

}

//cria aqui uma lista de teclas se referenciando a elas que esta no index.html na classe tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

//loop
for (let contador = 0; contador < listaDeTeclas.length; contador++){

        //pego a tecla clicada usando o contado do loop
        const tecla = listaDeTeclas[contador];
        //aqui consigo pega o parametro que indica o indice do som que foi clicado
        const instrumento = tecla.classList[1];

        //aqui usa o template string e usa no parametro da função tocaSom
        const idAudio = `#som_${instrumento}`;

        tecla.onclick = function () {
            tocaSom(idAudio);
        }

       // console.log(contador);
    }