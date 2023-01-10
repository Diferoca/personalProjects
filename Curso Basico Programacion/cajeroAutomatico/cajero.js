let cash = 0 ;
let getclient = 0;
let div = 0;
let delivery = [];
let result = document.getElementById('result');
let getnum = document.getElementById('num');
let boton = document.getElementById('boton');
boton.addEventListener('click',deliverycash);

class billetes
{
    constructor (val, quantity)
    {
        this.val = val
        this.quantity = quantity
        this.picture = new Image()
        this.picture.src = pictures[this.val]
    } 
     view()
    {
    result.innerHTML += this.quantity  + 'Billetes de' + '<br>';
    result.appendChild(this.picture);
    result.innerHTML += '<br>' + '<br>';
    }    
} 

