// COMPARAÇÕES NÃO BOOLEANAS

// o resultado de uma comparação lógica nem sempre retornará True or False

// Falsy
// undefined
// null
// 0
//false
//''
// NaN - not a number

//Truthy  
//  (se tiver false || 1) -> retorna 1
//  (false || 1 || 3) -> retorna 1 , pois ele é o primeiro depois do false

let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil)// -> retorna 'Vermelho' pois ele é o primeiro valor "truthy"

let corPersonalizada2= ''; // valor Falsy
let corPadrao2 = 'Azul';
let corPerfil2 = corPersonalizada || corPadrao;

console.log(corPerfil2) // -> retorna a 'Azul'