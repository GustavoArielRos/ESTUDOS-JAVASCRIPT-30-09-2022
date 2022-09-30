// STRING
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String


// -tipo primitivo
const mensagem = 'minha primeira mensagem'; // typeof -> string

// -tipo objeto
const outraMensagem = new String('bom dia'); // typeof -> object

//ver o tamanho da string
outraMensagem.length()

//ver a primeira letra do objeto
outraMensagem[0]; // acessando por posição

//verificar se existe algo na string
mensagem.includes('primeira')// vai da True

//verificar se inicia/termina com algo
mensagem.startsWith('VERDE');
mensagem.startsWith('AZUL');

//verificar a posição de algo na string
mensagem.indexOf('primeira'); // 6

//trocar algo na string
mensagem.replace('minha','sua')// substitui o 'minha' pelo 'sua'
