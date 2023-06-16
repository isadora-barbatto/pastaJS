//add frases na tela



const nome = prompt("Digite seu nome: ");
const sobrenome = prompt("Digite seu sobrenome: ");
const idade = prompt("Digite sua idade: ");
const altura = prompt("Digite sua altura: ");
const pets = prompt("Digite o nome do seus pets: ");

const resultado = document.querySelector('.resultado');

resultado.innerHTML += `Seu nome completo é ${nome} ${sobrenome}, vc tem ${idade} anos, ${altura} de altura e seus pets se chamam ${pets}`;

const pessoa = [];
pessoa.push({
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
    altura: altura,
    pets: pets
});

console.log(pessoa);





