//*ciclo for

// Aqui estamos creando nuestro array.
//let students = ['Juliana', 'Maria', 'Leydi', 'Ivan' , 'Andres'];

/* En segundo paso creamos una funcion la cual recibira el parametro name.
la cual concatenara el saludo con el parametro de la funcion.*/
//function callstudents(name) {
//console.log(`Hi, ${name}`);    
//}
/*Por ultimo creamos un ciclo (for) que recorrera nuestro array,
el for tendra una variable (i) que comienza en cero es decir la
posicion cero de nuestro array, luego la variable (i) iterara 
mientras esta sea menor que el largo de nuestro array, y umentara
en uno en cada iteracion.
finalmente llamaremos a nuestra funcion dentro del for para 
que ejecute el saludo*/ 

//for (let i = 0; i < students.length; i++) {
//    callstudents(students[i]);
//}

//*Ciclo for of

// Aqui estamos creando nuestro array.
let students = ['Juliana', 'Maria', 'Leydi', 'Ivan' , 'Andres'];

/* En segundo paso creamos una funcion la cual recibira el parametro name.
la cual concatenara el saludo con el parametro de la funcion.*/
function callstudents(name) {
    console.log(`Hi, ${name}`);    
}
/*Por ultimo creamos un ciclo (for of) que recorrera nuestro array,
el for tendra una variable (name) que sera nuestro index del array
y esta arrancara por default en la posicion cero de nuestro array, 
finalmente llamaremos a nuestra funcion dentro del for para 
que ejecute el saludo trayendo cada uno de los nombres del array*/ 

for (let name of students) {
    callstudents(name);
}



