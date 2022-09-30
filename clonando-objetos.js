// CLONANDO OBJETOS

const celular ={
    marcaCelular : 'ASUS',
    tamanhoTela:{
        vertical: 155,
        horizontal: 75
    },
    ligar: function(){
        console.log("Fazendo Ligação...");
    }
}

// armazenando um objeto em um outro objeto
const novoObjeto = Object.assign({},celular);

// voce pode armazenar um objeto em um outro objeto e adicionar coisas
const novoObjeto1 = Object.assign({
    bateria: 5000
},celular);

// outra formar de copiar o objeto em outro
const objeto2 = {...celular};