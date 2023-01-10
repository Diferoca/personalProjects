//Juego piedra,papel o tijera

/*let usuario = 'piedra';
let computer = 'tijera';


function ppt (usuario,computer)
{
    if((usuario == "tijera") && (computer == "papel")) 
    {console.log("usuario Win");} 
    else if ((usuario == "tijera") && (computer == "piedra")) {
        console.log("computer win");
    } else if ((usuario == "papel") && (computer == "piedra")) {
        console.log("usuario win");
    } else if ((usuario == "papel") && (computer == "tijera")) {
        console.log("computer win");
    } else if ((usuario == "piedra") && (computer == "tijera")) {
        console.log("usuario win");
    } else if ((usuario == "piedra") && (computer == "papel")) {
        console.log("computer win");
    } else if(usuario === computer)
        console.log("segir jugando");
}
ppt(usuario,computer);

// operador ternario cumple como un if else
let edad = 35

let validacion = edad > 40 ? 'eres mayor de 40' : edad < 40 ? 'eres menor de 40' : 'tienes 40';
console.log(validacion);*/

// juego piedra, papel y tijera con switch

let usuario = 'papel';
let computer = 'piedra';

switch (true)
{
    case usuario == "tijera" && computer == "papel" : 
    console.log("usuario Win");break; 
    case usuario == "tijera" && computer == "piedra" :
        console.log("computer win");break;
    case usuario == "papel" && computer == "piedra" :
        console.log("usuario win");break;
    case usuario == "papel" && computer == "tijera":
        console.log("computer win");break;
    case usuario == "piedra" && computer == "tijera":
        console.log("usuario win");break;
    case usuario == "piedra" && computer == "papel":
        console.log("computer win");break;
    case usuario === computer :
        console.log("Iguales");break;
    default : console.log('segir jugando'); 
}

if (false === !true) { console.log(false == true) } 
else { console.log(true === !false) }