// OPERADORES

// ---------------------------------------
//Operadores aritméticos(matemáticos):

let salario = 100;

// +, - , *, / , **

console.log(salario + salario) // vai dar 100
console.log(salario - salario) // vai dar 0
console.log(salario * salario) // vai 10000
console.log(salario / salario) // vai 1
console.log(salario ** salario) // vai dar um número muito grande (exponencial)

// ++ , -- 

let idade = 18;

console.log(idade++); //vai dar 18
console.log(idade); // vai dar 19

console.log(idade--); //vai dar 18
console.log(idade); // vai dar 17


//Operadores atribuição:

let valorTecladoGamer = 100;
console.log(valorTecladoGamer); // vai dar 100

valorTecladoGamer += valorTecladoGamer; // voce pode fazer isso para todos os operadores aritméticos
console.log(valorTecladoGamer); //vai dar 200

//Operadores de comparação(igualdade):

// - igualdade estrita

console.log(1 === 1); // comparando o valor e o tipo ( vai retornar True)
console.log('1' === 1); // vai dar 'false' um é string e o outro é number

// - igualdade solta

console.log( 1 == 1); // compara só o valor ( vai dar True)
console.log('1' == 1); // Vai meio que "transformar" os 2 em um tipo só (vai dar True) ( a forma que ele interpreta é complexa de entender,não é recomendável)

//Operador ternário:(fazer comparações ao invés de usar só 'if')

//-tem um cliente, se ele tiver mais que 100 pontos , ele será premium , se não ele vai ser comum:
let pontos = 100;

let tipo = pontos > 100 ? 'premium' : 'comum'; // vendo o valor do tipo 
                                               // "?" - > "vai ser"
                                               // ":" -> "caso contrário"
                                               // pontos > 100 -> a expressão de comparação

console.log(tipo); // vai dar o resultado "comum"

//Operadores lógicos:

// e -> (&&) , retorna TRUE se os 2 operandos forem TRUE
console.log(true && true);

// ou -> (||) , retorna TRUE se 1 dos operandos forem TRUE
console.log(true || false);

// not -> (!) , retorna o inverso
let oi = true;
let tchau = !oi; //tchau vale false





