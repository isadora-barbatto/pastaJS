// para acessar um elemento específico de uma string, põe o colchete e o nº do índice;

let txt = "palavra";
let ditado = "O rato roeu a roupa do rei de Roma.";

console.log(txt[3]); // > encontra o 3º indice na variável, no caso a letra 'a';

console.log(ditado.slice (-5, -1)); // 'fatia' a string na sequencia escolhida; o negativo é pq está de trás para frente;

console.log(ditado.length); // para descobrir quantos caracteres tem na string;

console.log(ditado.indexOf('roeu')); // em qual índice se está a string desejada (roeu é o 7º índice);

console.log(ditado.replace(/rato/, 'roedor')); // substitui a palavra por outra;

console.log(ditado.split(' ')); // divide a string nos termos escolhidos (ali foi com espaços); se colocasse uma letra (R, por ex) essa letra não é incluida na separação('O' 'ato' 'oeu' 'a' 'oupa' 'do' ...)

console.log(txt.toLocaleUpperCase()); // transforma a string TODA EM MAIÚSCULA; to lower case põe em minuscula;


