// juego piedra, papel y tijera con switch

let usuario = 'tijera';
let computer = 'piedra';

switch (true)
{
    case usuario == "tijera" && computer == "papel" : 
        console.log("usuario Win");break; 
    case usuario == "papel" && computer == "piedra" :
        console.log("usuario win");break;
    case usuario == "piedra" && computer == "tijera":
        console.log("usuario win");break;
    case usuario === computer :
        console.log("Iguales");break;
    default : console.log('computer win'); 
}