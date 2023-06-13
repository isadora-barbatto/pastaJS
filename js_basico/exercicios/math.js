let numbero = Number(prompt("digite um número: "));
document.getElementById('numero'); //selecionei este elemento (para salvar, põe em uma variável)

const idSpan = document.getElementById('numero'); //o nº escolhido foi GUARDADO;

const idDiv = document.getElementById('texto');

idSpan.innerHTML += numbero; //selecionei o ID > disse que quero ADD um texto no html (esse texto no caso foi o número a ser escolhido) = o que vai ser add

idDiv.innerHTML += `<p>A raíz quadrada do seu número é: ${numbero ** 0.5}</p>`;
idDiv.innerHTML += `<p>O número ${numbero} é inteiro: ${Number.isInteger(numbero)}</p>`;
idDiv.innerHTML += `<p>É um NaN: ${Number.isNaN(numbero)}</p>`;
idDiv.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numbero)}</p>`;
idDiv.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numbero)}</p>`;
idDiv.innerHTML += `<p>Com duas casas decimais: ${numbero.toFixed(2)}</p>`;