//* Codigo para saber si un numero es entero.
// Con esta funcion validamos si un numero es entero cuando verificamos que el numero dividido por cualquier otro no tenga decimales y esto lo hacemos con el operador modulo (%) y le indicamos que debe ser estrictamente igual a cero(0).

function esEntero (num){
    if (num % 1 ===0){console.log
        return true;
    }else{return false}
} esEntero(1.3);

//TODO: Refactor this method ES5 with ternary operator

function esntero(numero) {
    let reultado = (numero % 1 === 0) ? true : false
}esntero (50);

//TODO: Refactor this method ES6 using Number.isInterger()

function esTero(nume) {
    return (Number.isInteger(nume));
 }esTero(1);



//* codigo para saber si eun numero es primo.

