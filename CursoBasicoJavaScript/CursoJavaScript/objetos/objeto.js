/*Aqui estamos creando el objeto el cual contiene
las propiedades de (mycar).
las propiedades se declaran con una palabra clave y
se les asigna valor por medio de dos puntos (key, Value), cada 
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
por ceparado nos muestre todos las propiedades del objeto de una vez 
//** A esto se le conoce o se le llama METODO.
¡importante! la palabra (this) en el caso de objetos hace referencia 
al objeto; es como si dijeramos Car.mark o car.model*/

let Car = {
    mark:'Honda',
    model:'acura',
    year:2019,
    detailofcar: function () {
        console.log(`car: ${this.mark} ${this.model} ${this.year} ${this.kilometers}`);
    }
}
/* If we want to add a property of our object, we can use dot notation 
or bracket notation.*/

Car.kilometers = 80000;
//Car['kilometers'] = 80000; 
Car.detailofcar ();

/* If We want to delete any property of our object, we can use the reserve word 
(delete) */

delete Car.kilometers;
console.log(Car);

/* When we need to check if an object has a property, we can use the method 
called (hasOwnProperty())*/ 

let motorcycle = {
    mark:'Honda',
    model:'pilot',
    year:2019,
}

function checkObj(checkProp){
    if (motorcycle.hasOwnProperty(checkProp)){
        return motorcycle[checkProp];
    }else{
        return 'Not found';
    }
}
console.log(checkObj('serial'));

/* If we need to access to property of nested objects we can do this:*/

let myStorage = {
    'box1' : {
        'inside' : {
            'subBox1' : 'gloves',
            'subBox2' : 'chacket',
        },
        'outside': {
            'mess': 'socks'
        },
    }
};

let allBoxes = myStorage.box1.inside['subBox2'];
console.log(allBoxes);

/* If we need to access to property of nested arrays we can use a combination 
between dot notation and bracket notation */

let myStorage1 = [
    {
        'type' : 'clothes',
        'box2' : [
            'socks',
            'underwear',
            'pants'
        ]
    },
    {
        'type' : 'clothes2',
        'box3' : [
            'tshirt',
            'shirt',
            'red tie'
        ]
    }
]

let secondTree = myStorage1[0].box2[2];
console.log(secondTree);

/* We can use objects to replace the switch statement and if/else if chain because the objects can be thought of as a key/value storage. Notice the exercise below:*/

function phoneticLookup(val) {
    let result = "";

    switch(val) {
      case "alpha":
        result = "Adams";
        break;
      case "bravo":
        result = "Boston";
        break;
      case "charlie":
        result = "Chicago";
        break;
      case "delta":
        result = "Denver";
        break;
      case "echo":
        result = "Easy";
        break;
      case "foxtrot":
        result = "Frank";
    }
  
    return result;
  }
  
  phoneticLookup("charlie");

  // TODO:  Switch statement refactor by use an object!!!

function phoneticLookup(val) {
    let result = "";
    let lookUp = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    }
  let checkVal = lookUp[val];
  result = checkVal;
  return result;
  }
  
  phoneticLookup("charlie");


  const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
  ]

  myMusic[[]]=   {
    "artist": "Michael Jackson",
    "title": "Thriller",
    "release_year": 1985,
    "formats": [
      "8T",
      "LP"
    ]
}

console.log(myMusic); 

