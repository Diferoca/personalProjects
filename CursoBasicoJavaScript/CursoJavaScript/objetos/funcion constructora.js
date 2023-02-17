/* Aqui creamos nuestra funcion constructora*/
function cars (make, model, year, color) {
    this.make=make;
    this.model=model;
    this.year=year;
    this.color=color; 
}    
let newcar = new cars('Nissan', 'centra', '2014', 'white');
console.log(newcar);

let newcar1 = new cars('Honda', 'Acura', '2015', 'red');
console.log(newcar1);


