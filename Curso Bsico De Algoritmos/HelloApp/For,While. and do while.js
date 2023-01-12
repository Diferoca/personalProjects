// exercise 1 ciclo for 
//Intentos ingreso de clave para retiro tarjeta debito

for (let cont= 3; cont>=1; cont --) {

    console.log(`intentos clave ${cont}`);
    
}
console.log("Tarjeta Bloqueada")

// exercise 2 ciclo While
// ingrese codigo de verificacion, si ingresa codigo correcto fin del bucle.

let x = '';
let codigo = '1234';

while (x != codigo) {
    console.log("ingrese codigo nuevamente")
    if(x == '')
    break;
  
}
console.log("codigo correcto")


//exercise 3 Ciclo do while

let y = 0

do {
   
    console.log('iteracion ${y}');
    y++;

} while (y <=5);

console.log('fin del bucle');

// Exercise 4 do wile

// función que aumenta el valor recibido en 5 hasta un límite de 8 veces.
// Retornar el valor final.

function doWhile(num) {

let contador = 0
    do {
       num += 5;
       contador ++;
    } while (contador <= 7)
       return num;
 
 }doWhile (5);