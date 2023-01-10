
let storagecars = [];


class cars {
    
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
}
    function getdata() {
    if(storagecars.length >= 4){
        result.innerHTML = 'You cannot insert more cars';
    }
    make=document.getElementById('mark').value;
    model=document.getElementById('model').value;
    year=document.getElementById('year').value;
    color=document.getElementById('color').value;    
    storagecars.push(new cars(make,model,year,color));
    console.log(storagecars);
    }

    


