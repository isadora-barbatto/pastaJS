let num1 = 9.556826645;
let num2 = Math.floor(num1); //utilizando a função Math, método floor para arredonta p baixo num2 = 9)
console.log(num2)
let num3 = Math.ceil(num1); // arredonda pra cima (num3 = 10)
console.log(num3);

console.log(Math.round(num1)); //arredonda para o mais próximo;

console.log(Math.max(1, 5, 6, 46, 87, -45, 36)); //encontra o maior número de uma dada sequencia; = 87
console.log(Math.min(1, 5, 6, 46, 87, -45, 36)); //encontra o menor número de uma dada sequencia; = -45

console.log(Math.random()); //cria um número aleatório entre zero e um.
// BRINCANDO COM ISSO // 
const aleat = Math.random() * (10 - 5) + 5; // nº aleat entre 10 e 5
console.log(aleat);
console.log(Math.round(aleat)); //arredondando um número aleatório;

console.log(Math.PI); //para usar o valor de PI;
console.log(Math.pow(2, 5)); //sendo o primeiro a base e o segundo a potência (2^5);
let num4 = 16;
console.log(num4 ** 0.5); //para descobrir a raíz quadrada

console.log(100 / 0); //em JS dá pra dividir um nº por zero, gera um resultado INFINITY.