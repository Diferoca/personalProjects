let pictures = [];
pictures ['Earthquake'] = 'golem.png';
pictures ['Lightstorm'] = 'lightstorm.png';
pictures ['Sunshot'] = 'sunshot.png';
/* En este array asociativo solo se genera datos tipo string.
No un indice numerico.*/

let collection = [];
collection.push(new pakitron('Earthquake', 200, 70, 'earth'));
collection.push(new pakitron('Lightstorm', 200, 75, 'electric'));
collection.push(new pakitron('Sunshot', 200, 80, 'light'));
// En este array el push me genera un indice numerico (0, 1 ,2 ,3 etc).
for (let viewing of collection)
{
    viewing.view();
}
/* Este es un ciclo for especial que solo opera o recorre la cantidad
de objetos que estan dentro del array. y se puede usar con (in) que itera 
en el indice y con (of) que itera sobre el objeto.*/

