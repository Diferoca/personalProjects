var paki = {
    nombre: "Pakiman",
    ataque: 101
};
paki.ataque = paki.ataque * 2;
console.log(paki);



var contador = 2;
var na = "na";
while(contador)
{
    na += na;
    contador -= 1;
}
console.log(na + " Freddy ")

var billetes = [ [ 1 , 2 , 3 ] ,
              [ 4 , 5 , 6 ] ,
              [ 7 , 8 , 9 ] ];
console.log(billetes[1][2])

var a = 10;
var b = "12";
var c = b + a;
console.log(c);

function pakiman(vida)
{
    vida = vida + vida;
    vida++;
    return vida;
}
var vida = 2;
vida = pakiman(vida);



var entrar = 0;
var altura = 101;
if( altura > 100 || altura < 50){
    entrar = 1;
}
else if(altura > 60 || altura < 40){
    entrar = 2;
}
console.log(entrar);
