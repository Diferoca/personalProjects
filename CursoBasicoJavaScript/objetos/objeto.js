/*Aqui estamos creando el objeto el cual contiene
las propiedades de (mycar).
las propiedades se declaran con una palabra clave y
se les asigna valor por medio de dos puntos, cada 
propiedad debe ir ceparado por una coma.*/

let myCar = {
    mark:'Honda',
    model:'acura',
    year:2019,
};
console.log(myCar.mark);

/* variacion del objeto con una funcion dentro.
Dentro del objeto se crea una propiedad que contenga una funcion
que en este caso en lugar de estar llamando cada propiedad
por ceparado nos muestre todos las propiedades del objeto de una vez.
¡importante! la palabra (this) en el caso de objetos hace referencia 
al objeto; es como si dijeramos Car.mark o car.model*/

let Car = {
    mark:'Honda',
    model:'acura',
    year:2019,
    detailofcar: function () {
        console.log(`car: ${this.mark} ${this.model} ${this.year}`);
    }
};
Car.detailofcar();