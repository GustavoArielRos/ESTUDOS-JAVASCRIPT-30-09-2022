// INTRODUÇÃO A ARRAYS

// 1- Add novos elementos

const numeros = [1,2,3];
//um array tbm é um objeto

//inicio
numeros.unshift(0);
console.log(numeros);
//Meio
numeros.splice(1,0,'a');//(indice que vai colocar, o item que vai deletar, o que vai inserir no lugar)
                        // como eu coloquei "0", não vai deletar nenhum item
console.log(numeros);
//Final
numeros.push(5);
console.log(numeros)



// 2- Encontrar Elementos

const numeros1 = [1,2,3,4];
numeros1.indexOf(2); // vai retornar o índice do número(1) caso ele exista, se não encontrar , ele devolve -1
console.log(numeros1.indexOf(5));// retorna o -1

console.log(numeros1.lastIndexOf(1));// vai buscar a ultima ocorrência desse valor( o ultimo índice que ele aparece)

console.log( numeros1.indexOf(2) !== -1 );// se retorna 'true' o número tá lá

console.log(numeros1.includes(2));// se retorna 'true' o número ta lá

// 3- Encontrando elementos(TIPOS DE REFERÊNCIA)

const marcas = [
    {id : 1 , nome : 'a'},
    {id : 2 , nome : 'b'},
];

const marca = marcas.find(function(marca){
    return marca.nome === 'a';
});

console.log(marca); // vai retonar {id: 1, nome: "a"}

// 4- Arrow functions
const marcas1 = [
    {id : 1 , nome : 'a'},
    {id : 2 , nome : 'b'},
];

console.log(marcas1.find(marca => marca.nome === 'a' )); // faz a mesma parada que o "3" lá em cima


// 5- Remover Elementos
const numeros2 = [1,2,3,4,5,6];

//final
const ultimo = numeros2.pop(); // remove o ultimo elemento do array e coloca nessa variável
console.log(ultimo); // vai printar o ultimo valor

//inicio
const primeiro = numeros2.shift(); // remove o primeiro elemento do array e coloca na variavel
console.log(primeiro)// vai printar o primeiro valor

//meio
const meio = numeros2.splice(2,1); //(indice de inicio, a quantidade de elementos que quer eliminar apartir desse índice)

console.log(meio);// nesse caso vai retornar um item só da posição 2

// 6- Esvaziando um array

let numeros3 = [1,2,3,4,5,6];

//soluçao 1
numeros3 = []; // porém a lista tem que ser "let"

//soluçao 2
numeros3.lenght = 0;
console.log(numeros3);

//soluçao 3
numeros3.splice(0,numeros3.lenght);
console.log(numeros3);

//soluçao 4
while(numeros3.lenght > 0)
{
    numeros3.pop();
}

// 7- Combinando e cortando Arrays

const primeiro = [1,2,3];
const segundo = [4,5,6];

//combinar
const combinado = primeiro.concat(segundo) // jutando o primeiro array com o segundo
console.log(combinado);// [1,2,3,4,5,6]
//dividir
const cortado = combinado.slice(1,3); //(indice 1 até o indice 2)
console.log(cortado);//[2,3]

const cortado = combinado.slice(1);//[2,3,4,5,6,7]

const cortado = combinado.slice();//[1,2,3,4,5,6,7]


