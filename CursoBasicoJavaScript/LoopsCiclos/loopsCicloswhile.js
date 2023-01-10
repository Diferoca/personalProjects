// Aqui estamos creando nuestro array.
let students = ['Juliana', 'Maria', 'Leydi', 'Ivan' , 'Andres'];

/* En segundo paso creamos una funcion la cual recibira el parametro name.
la cual concatenara el saludo con el parametro de la funcion.*/
function callstudents(name) {
    console.log(`Hi, ${name}`);    
}
/*Por ultimo creamos un ciclo (while) que tendra como condicion
(mientras que la longitud de nuestro array sea mayor a cero continue
con la ejecucion del codigo que se encuentre dentro del while).
Luego la variable name recibira el dato que retorne el metodo (shift)
el cual se encarga de eliminar la primera posicion de nuestro array (posicion 0)en
cada ejecucion del ciclo y la guarda en la variable name que es el parametro 
que recibe nuestra funcion, hasta que finalmente se deje de cumplir la condicion.
Por ultimo llamamos a nuestra funcion dentro del while para que ejecute 
el saludo e imprima lo que esta guardando la variable name.*/ 
while (students.length > 0 ) {
    let name = students.shift();
    callstudents(name);
    
}