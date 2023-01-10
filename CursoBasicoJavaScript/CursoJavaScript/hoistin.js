
// hoisting es cuando las varibles y las funciones se procesan antes de que se ejecute cualquier tipo de codigo.

// hoistin aplica solo para la funcion declarativa, no para las funciones de expresion.

// El hoisting solo aplica para las palabras reservadas var y function. Revisar ECMAScript6+.

// Importante!!!!! el compilador de JavaScript siempre buscara primero (elevar) la declaracion de
// la variable o la funcion antes que la inicializacion o la ejecucion de cualquier linea de codigo. 

// Si tenemos una funcion y una variable decalaradas por jerarquia lo primero que buscara (elevar) JavaScript 
// sera la funcion antes que la variable.

//Example for variables:

console.log(numero);// aqui JavaScript solo referencia la variable.
var numero;// aqui declaramos la variable y JavaScript la eleva y le asigna valor como undefined.
// es por eso que el console.log arroja como resultado undefined.
numero = 5;// aqui inicializamos la variable.
console.log(numero);// aqui se imprime en la consola el valor que le hemos asignado a la variable.

//Example for function:

saludo(); // declaracion de la funcion.

function saludo() {
    console.log("Hola mi nombre es " + nombre);    
} // inicializacion de la funcion. en donde JavaScript interpreta que hay una variable pero esta
// no esta inicializada, por lo cual le asigna valor undefined.Pero se imprime el string
//"Hola mi nombre es" esto sucede por que JavaScrip eleva y ejecuta primero la funcion antes que las variables.
var nombre = "Ferney";// declaracion e inicializacion de la varible.
saludo();//llamado de la funcion.

