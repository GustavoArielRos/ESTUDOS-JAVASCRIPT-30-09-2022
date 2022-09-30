

const numeros = [1,2,3,4,5];

for(numero of numeros)
    console.log(numero);

// forEach(percorre cada elemento do array)
numeros.forEach(function(numero){
    console.log(numero);
})  

// ou 
numeros.forEach((numero) => console.log(numero));