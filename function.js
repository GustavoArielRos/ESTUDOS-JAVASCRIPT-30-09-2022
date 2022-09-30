// FUNCTION

// Faz parte dos "tipos de referências"

// função = Verbo + Substantivo

//verbo = resetar
//substativo = cor
// Criando uma função:
let corSite = "azul"
function resetaCor(){
    corSite = " ";

}; 

// Chamando a função
resetaCor();// Nesse momento ela acaba de resetar aa variável "corSite"
console.log(corSite)

// Colocando parâmetros na função:
function resetaCor2(cor){
    corSite = cor; // colocando o parâmetro 'cor' como argumento da função

};
resetaCor2("vermelho");
console.log(corSite)// vai aparecer "vermelho"

// Colocando mais de um parâmetro na função:
function resetaCor3(cor,tonalidade){
    corSite = cor +' ' + tonalidade; // colocando o parâmetro 'cor' como argumento da função

};

console.log(corSite);
resetaCor3("verde", "claro");
console.log(corSite);

// TIPOS DE FUNÇÕES

// 1- Realizar uma tarefa, não devolve nada

function dizerNome(){
    console.log('jhonatan');
}

dizerNome();

// 2- Faz um cálculo ou operação e retorna algo
function MultiplicarPorDois(valor){
    return valor* 2;
}

console.log(MultiplicarPorDois(5)); // vai devolver o número 10

// -colocando o resultado da função dentro de uma variável

let resultado = MultiplicarPorDois(5); // armazenando o valor 10 nessa variável

console.log(resultado);// vai aparecer o valor 10
