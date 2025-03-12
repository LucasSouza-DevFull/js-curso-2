let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela (tag, texto){
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Descubra o numero Secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');

function verificarChute(){
        console.log('O botão foi clicado!');
} 

function gerarNumeroAleatorio() {
        parseInt(Math.random() * 10 + 1);
}