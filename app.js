let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela (tag, texto){
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Descubra o numero Secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');

function verificarChute(){
        let chute = document.querySelector('input').value;
        
        if (chute == numeroSecreto){
                exibirTextoNaTela('h1', 'Acertou!')
        }
} 

function gerarNumeroAleatorio() {
        return parseInt(Math.random() * 10 + 1);
}