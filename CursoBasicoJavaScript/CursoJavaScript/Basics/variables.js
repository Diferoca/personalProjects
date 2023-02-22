let nombre = "Diego";
console.log(nombre);

// Se declara una varible de la siguente manera. 
var algo; // asi solo estamos declarando la variable aun no la hemos inicializado.
console.log(algo);
// Ahora la vamos a inicializar
var algo = 5; //Le asignamos valor a la variable, por medio del uso del operador =
console.log(algo)

// Ahora generaremos varibles un poco mas complejas (Arrays).
let comonobjets = ["computadora", "celular"];// Cuando abrimos corchetes estamos llamando un array.  
console.log(comonobjets [1]);

//Tambien se pueden generar objetos por medio de las llaves {}
 
let phone= {
    name: "xiomy",
    model: 10,
}
console.log(phone);

let num1 = 10;
let num2 = 20

num1 = num1 + num2;
console.log(num1);

//* another way to say that is through (+=) operator, This operator besides work with minus sign (-=), multiply sign (*=) and divide sign (/=).

let num3 = 30;
let num4 = 40;

num3 += num4
console.log(num3);

let num5 = 50;
let num6 = 60;

num5 -= num6;
console.log(num5);

let num7 = 70;
let num8 = 80;

num7 *= num8;
console.log(num7);

let num9 = 1100;
let num10 = 30;

num9 /= num10;
console.log(num9);