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
