// En este ejemplo veremoscomo se llama la funcion cuenta regresiva
function cuenta_regresiva(num) {
        num = --num;

    if (num > 0) {
        console.log(num);
        cuenta_regresiva(num);
    } else {
        console.log("Kaboommm");
    }
    
} 
cuenta_regresiva(10);
