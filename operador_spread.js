// OPERADOR SPREAD

const primeiro = [1,2,3];
const segundo = [4,5,6];

const combinado = primeiro.concat(segundo);
const cortado = combinado.slice();

// spread

const combinado1 = [...primeiro,...segundo]; // concatenando usando o spread

const combinado2 = [...primeiro,'a',...segundo,'vb'];//adicionei coisas na concatenação do spread

const clonado = [...combinado1]; // colocando o array combinado1 em uma variável(clonando)

