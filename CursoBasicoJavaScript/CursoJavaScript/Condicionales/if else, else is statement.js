//Juego piedra,papel o tijera utilizando tablas de la verdad y operadores de comparacion.
 

let usuario = "papel";
    computer = "tijera";

  if(usuario === computer) {
    console.log("segir jugando");
} else if (usuario == "piedra" && computer == "tijera") {
    console.log("User Win");
} else if (usuario == "papel" && computer == "piedra") {
    console.log("usuario win");
} else if(usuario == "tijera" && computer == "papel") {
    console.log("User Win");
} else {
    console.log("Computer win");
}