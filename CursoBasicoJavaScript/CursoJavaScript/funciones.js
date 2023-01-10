//Funciones: conjunto de sentencias que utilizamos para generar acciones 
//con los valores que contienen las variables.

//Declarativas
//Estas se declaran mediante la palabra reservada (function)
//Su sintaxis es: palabra reservada (parametros) {codigo a ejecutar}

function resta(a,b,c) {
    let resultado = a-b-c;
    return (resultado);
}
console.log(resta (10,3,5));

//De expresion 
//conocidas como funciones anonimas. Estas se guardan dentro de una variable.
//Su sintaxis es: variable = function (parametros) {codigo a ejecutar}

let multiplicar = function (a,b,c) {
    return a*b*c;
}
console.log(multiplicar(5,6,2));



