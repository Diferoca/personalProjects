let PIN = document.getElementById('pin');
let vtransf = document.getElementById('num');
let tax = 100;
let codigo = 1234;
let balance = 1500000;
let cb = 'Broken Bank';
// funcion para ingresar pin de seguridad.
function pincheck() 
{
    key = parseInt(PIN.value);
    if(key != codigo){result.innerHTML = 'Enter Your PIN Again';}
    else
    if(key = codigo){result.innerHTML = 'Welcome Continue With Your Transfer';}
}form.reset();

// funcion para chequear los fondos. 
function foundscheck() 
{
    cash = parseInt(vtransf.value);
    if (cash < balance){result.innerHTML = 'Continue With Your Transfer <br> Please, Select Destination Bank';
    return true;}
    result.innerHTML ='Insufficient Funds';    
}

// funcion para seleccionar el banco de destino.
function selectbank()
{

    let db = document.getElementById('select');
    let banks = db.value;
console.log(banks);
    if(banks != cb)
    {
        result.innerHTML = `The Bank Selected is:  ${banks} <br> The Cost Of transfer is: ${tax} USD`;
        return true; 
    }result.innerHTML = `The Bank Selected is:  ${banks} <br> The Cost Of transfer is: 0 USD`;
} 

//funcion realizar transferencia. En donde se llaman las dos funciones anteriores.  
function transfer() 
{    
    if ((foundscheck = true) && (selectbank = true))
    {
        result.innerHTML = 'It is Done Total Cost is :' + (cash + tax); 
    }
}

// funcion para mostar la hora.
function viewHours() {
        actualdate = new Date();
        let hour = actualdate.getHours();
        let min = actualdate.getMinutes();
        let timeShift = hour >= 12 ? 'PM' : 'AM';
        let actualTime = `${hour % 12} : ${min} ${timeShift}`;
        time.innerHTML = `Local Time <br><br> ${actualTime}`    
}
viewHours();     
