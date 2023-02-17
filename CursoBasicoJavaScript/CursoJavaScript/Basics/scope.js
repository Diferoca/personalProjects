// se define como el alcance que pueden tener nuestras varibles.
// esto depende del lugar donde las declaremos.
// Hay dos tipos de scope: Scope Global y Scope local.

let firstname = "Ferney"; // esta varible estaria declarada en Scope Global.

function nam() {
    let surname = "Rodriguez";// esta variable esta declarada dentro de la funcion por lo tanto es Scope local.
    console.log(firstname + " " + surname); 
    
}
nam();// aqui llame mi funcion en el global.
console.log(firstname);// aqui llame mi variable en el global.
surname();// aqui llame la variable que esta dentro del local desde el global lo cual produce un error.

// Entonces las variables declaradas en el Scope local pueden acceder a la informacion de variables globales,
// pero el Scope global no puede acceder a la infomacion de las variables declararas en el scope Local.

