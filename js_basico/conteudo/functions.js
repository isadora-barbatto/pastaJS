/*function saudacao() {
    console.log('Bom dia!');
}
saudacao();*/

//se por acaso eu quiser 'personalizar' a função (ex: Bom dia, Isadora; Bom dia, Daniella),
/*function saudacao(nome) {
    console.log(`Bom dia ${nome}`);
} 
saudacao('Isadora'); */

//A função recebe um valor mas não retorna nenhum, a menos que seja pedido:
function saudacao(nome) {
    return `Bom dia ${nome}`;
}
const retorno = saudacao('Isadora');
console.log(retorno);

function soma(x, y){
    const resultado = x + y;
    return resultado; //nada após o return é executado (ex: se tiver um console.log("olá mundo" nada irá aparecer na tela));
}

console.log(soma(2, 5));
console.log(soma(12, 6));

//É possível criar uma "função anônima", que fica dentro de uma variável:

const raiz = function(n) {
    return n ** 0.5;
}; //nesse caso precisa do ; no fim

console.log(raiz(36)); //chama a função da mesma forma 

//Criar função por meio de ARROW FUNCTION: 
const expo = (m) => m * m;
console.log(expo(9));
console.log(expo(12));
