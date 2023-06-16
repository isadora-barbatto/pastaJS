let contador = 0;
let resultado = document.querySelector('.resultado');
let botao = document.querySelector('.botao');

function contarF() {
    contador++
    resultado.innerHTML += `<p>foram contadas ${contador} vezes</p>`;
}

contarF();

function zerarF() {
    resultado.innerHTML = ' ';
    contador = 0;
}

