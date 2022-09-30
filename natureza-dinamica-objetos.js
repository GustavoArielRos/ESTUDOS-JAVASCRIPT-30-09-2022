// NATUREZA DINÂMICA DE OBJETOS

const mouse ={
    cor : 'red',
    marcar: 'dazz'
}

mouse.velocidade = 5000; // adicionei uma propriedade fora do objeto no objeto
//adicionando um função no objeto
mouse.trocarDPI = function (){
    console.log('mudando DPI');
}
//deletando uma propriedade do objeto
delete mouse.velocidade;
//deletando uma função dentro do objeto
delete mouse.trocarDPI;
console.log(mouse);