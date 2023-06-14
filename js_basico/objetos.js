//É possível criar um objeto para agrupar valores:

const pessoa01 = {
    nome: "Isadora",
    sobrenome: "Cavalcante Barbatto",
    idade: 28
};

const pessoa02 = {
    nome: "Daniella",
    sobrenome: "Fabres Izoton",
    idade: 28
};

//não diminui o trabalho, mas dá pra criar uma função que cria os atributos (nome, sobrenome e idade) sempre que precisar.

function criaPessoa(nome, sobrenome, idade) {return {nome, sobrenome, idade}};

let pessoa03 = criaPessoa("Yolanda", "Barbatto", 2);
let pessoa04 = criaPessoa("Monalisa", "Barbatto", 1.5);

console.log(pessoa03.sobrenome);
console.log(pessoa04.nome);