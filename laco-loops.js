// LOOP


// 1.FOR

for (let i = 0; i < 5; i++){
    console.log('Estou aprendendo!');
}

// 2.WHILE

let i =5;

while(i >= 1){
    if( i % 2 !== 0){
        console.log(i);
    }
    i--;

}
// 3. DO WHILE(executa no mínimo 1 vez antes de verificar )

let i = 0;

do {
    console.log('digitando!');
    i++;
} while(i<10)

// 4. FOR IN

const pessoa ={
    nome: 'Jhonatan', // key ->  nome , value -> Jhonatan
    idade: 25
};
//key-value
for(let chave in pessoa){
    console.log(chave); // vai printar o nome das chaves de "pessoa"
    console.log(pessoa);// vai printar o valor das chaves de "pessoa"
    console.log(pessoa['nome']) // vai printar o valor de uma chave específica de "pessoa"
}

// -outro exemplo:

const cores = ['Vermelho', 'Azul', 'Verde'];

for(let indice in cores){
    console.log(indice) // vai printar as posições do vetor(0,1,2 ...)
    console.log(indice,cores[indice])// vai printar as posições e os valores do vetor
}

// 5. FOR OF(melhor para interar com itens de um vetor)

const cores = ['Vermelho', 'Azul', 'Verde'];

for(let cor of cores){
    console.log(cor); // vai printar todas os valores do vetor

}


