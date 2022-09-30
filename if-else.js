// IF AND ELSE:

// -Se a hora estiver entre 06:00 até 12:00 -> Bom dia!
// -Se estiver entre 12:00 até 18:00 -> Boa tarde!
// -Caso contrário: Boa noite!

let hora = 10;

    // codição
if (hora > 6 && hora < 12){
    // codigo a ser executado
    console.log("bom dia");
}
         //outra condição
else if (hora > 12 && hora < 18){
    // codigo a ser executado
    console.log("Boa tarde");
}

else{
    // codigo a ser executado
    console.log("Boa noite");
}



// SWITCH CASE:

let permissao; // comum,gerente,diretor

        //variável
switch (permissao){
// caso de usuario comum:
    case 'comum':
    console.log('usuario comum');
    break;

// caso de usuario gerente:
    case 'gerente':
    console.log('usuario gerente');
    break;

// caso de usuario diretor:
    case 'diretor':
    console.log('usuario diretor');
    break;

// caso não seja nenhum desses casos:
    default:
    console.log('usuario não reconhecido');
}