// FUNÇÃO  DE CONSTRUTOR

// camelCase umDoisTresQuatro 
// a criação vem dentro da própria função
function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("Fazendo ligação...")
        }
    }
}

// pascal case - UmDoisTresQuatro
// a criação vem do 'new'
function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
    this.marcaCelular = marcaCelular;
    this.tamanhotela = tamanhoTela;
    this.capacidadeBateria = capacidadeBateria;
    this.ligar = function(){
        console.log("Fazendo ligação...");
    }
}

const celular = new Celular('asus',5.5,5000);
console.log(celular);