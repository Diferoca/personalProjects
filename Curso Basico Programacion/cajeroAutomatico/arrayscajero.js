let pictures = [];
pictures ['100'] = 'billete100.png';
pictures ['50'] = 'billete50.png';
pictures ['20'] = 'billete20.png';
pictures ['10'] = 'billete10.png';

let box = [];
box.push(new billetes(100, 6));
box.push(new billetes(50, 6));
box.push(new billetes(20, 6));
box.push(new billetes(10, 6));

function deliverycash()
{
    cash = parseInt(getnum.value);
    delivery.splice(0,delivery.length);
       
    for (let travel of box)
    {
        if(cash > 0)
            {
            div = Math.floor(cash / travel.val);
            if(div > travel.quantity)
            {getclient=travel.quantity;}
            else
            {getclient=div;}
            cash = cash - (travel.val*getclient);
            delivery.push(new billetes(travel.val,getclient));
            }        
    }
    
    if(cash > 0)
    {result.innerHTML = 'No se puede realizar operacion';}
    else {
        for (let d of delivery){
        if(d.quantity > 0){
        d.view();}
        }
        }
} 
