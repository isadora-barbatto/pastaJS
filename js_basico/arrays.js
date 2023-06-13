//              0      1       2     3        4
let familia = ['Isa', 'Dani', 'Yo', 'Monin', 'Ritin'];
console.log(familia[2]);
//para editar algum elemento do array, deve-se seleciona-lo e dizer seu novo valor, ex:
familia[0] = 'Isadora'; //o primeiro elemento terá este novo valor;
console.log(familia); //'Isadora', 'Dani', 'Yo', 'Monin', 'Ritin';

familia.push('Tadeu'); //adiciona ao fim da lista;
console.log(familia);

familia.unshift('Anchieta'); //adiciona ao 1º indice da lista [0];
console.log(familia);

familia.pop(); //retira o ultimo elemento da lista; para salvar o nome do removido, basta adicionar a função em uma variável(const removido = familia.pop()/ console.log(removido) = ultimo elemento (neste caso, Tadeu));
console.log(familia);

familia.shift();
console.log(familia); //remove do começo da lista;

//para deletar um elemento sem modificar os índices do array:
delete familia[0];
console.log(familia); //<1 empty item>, 'Dani', 'Yo', 'Monin', 'Ritin'


