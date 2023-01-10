/* Coercion:
Es la forma en que podemos cambiar un tipo de valor en otro.
Existen dos tipos de coercion.

Coercion implicita: cuando el propio lenguaje se encarga de cambiar 
el tipo de valor.

example */

let b = 4 +"7";
console.log(b,typeof b);
// para este caso JavaScript interpreta que por el uso de el controlador  +
// este concatena o une los dos tipos de datos y como resultado tenemos un string.


let c = 4*"7";
console.log(c, typeof c);
// en este caso con el uso del operador matematico * JavaScript interpreta que se 
//debe ejecutar una operacion asumiendo que hos hemos equivocado y que el valor "7"
//no es un string si no un numero.

/* Coercion explicita:
ocurre cuando nosotros obligamos el cambio de tipo de dato.

example: */
let x = 15;
let y = x + "";
console.log(typeof y);
let z = String(x); // con este comando convertimos un valor
// numerico en un valor de tipo string.
console.log(z, typeof z);

let w = Number(z);// con este comando cambiamos el tipo de dato 
// de un string a un numero.
console.log(w, typeof w);







