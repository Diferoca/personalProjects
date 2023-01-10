
let numMin = document.getElementById('firstnumber');
let numMax = document.getElementById('lastnumber');
let paresult = document.getElementById('resultado'); 
let result;
let boton = document.getElementById('start');
boton.addEventListener('click',generarAleatorio);

function generarAleatorio() 
{
    let nummin = parseInt(numMin.value);
    let nummax = parseInt(numMax.value);
    result = Math.floor(Math.random () * (nummax-nummin + 1)) + nummin;
    document.getElementById('equall').innerText = result;

} 

