// FUNÇÃO DE FÁBRICA

// Simplificar os códigos

function criarCelular(marcaCelular, tamanhoTela,capacidadeBateria){
    // dar return daqui direto
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,

        // criando uma função de maneira simples
        ligar(){
            console.log("Fazendo ligação...")
        }
    }
}

const celular1 = criarCelular('Zenfone', 5.5,5000);
console.log(celular1);

