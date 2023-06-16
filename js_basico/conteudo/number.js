let num1 = 15;
let num2 = 278.565465456;

console.log(num1.toString() + num2.toString()); //transforma o number em string momentaneamente;
console.log(typeof num1); //continua number;

num1 = num1.toString(); //tranforma em string pra sempre;
console.log(typeof num1); // agora é uma string;

// também é possível ver a representação binária de um número através do método toString();

console.log(num2.toString(2)); //100010110.10010000110000100101100000011000100010011011;

console.log(num2.toFixed(2)); //arredonda para o nº de casas decimais dos parenteses;

// Pode ocorrer de alguma conta ser feita errada, por ex. quando tenta-se multiplicar um number com string; esse resultado retorna um NotANumber (NaN); para verificar isso, usar a função:
let temp = num1 * "olá"; // resultado NaN;
console.log(Number.isNaN(temp)); //retorna true ou false (se é ou não NaN);

// as contas em JS são um pouco imprecisas

let num3 = 0.7;
let num4 = 0.1;
console.log(num3 + num4); // result 0.79