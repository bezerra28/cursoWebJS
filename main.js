//função que exibe o som e recebe o id 
function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    // trata os error se a condição de tocaSom nao for correta
    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log('elemento nao encontrado eou seletor invalido');
    }

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
        //evento de tecla pressionada e verifica qual foi a tecla
        tecla.onkeydown = function(evento){
            //verifica se a tecla clicado foi o espaço ou o enter
            if (evento.code === 'Space' || evento.code === 'Enter'){
                tecla.classList.add('ativa');//deixa a tecla vermelha de o espaço for clicado
            }
        }

        tecla.onkeyup = function(){
            tecla.classList.remove('ativa');
        }
        

       // console.log(contador);
    }