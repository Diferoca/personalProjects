const canvas = document.createElement('canvas');
canvas.id= 'draw';
canvas.width='300';
canvas.height='300';
document.body.appendChild(canvas);

let d = document.getElementById('Draw');
let width=canvas.width;
let ctx = canvas.getContext("2d");

let txlin=document.getElementById("cant_lineas");
let colorr=document.getElementById("colorr");
let boton=document.getElementById("botonn");
boton.addEventListener("click",take);
let colorcolor='#010101';

function drawline(color, xini, yini, xfin, yfin)
 {
    ctx.beginPath();        
    ctx.moveTo(xini, yini);    
    ctx.lineTo(xfin, yfin);
    ctx.strokeStyle = color;
    ctx.stroke();   
    ctx.closePath;    
}
    
function take() 
 {
  let _colorlin=colorr.value
  let Nlineas=parseInt(txlin.value);
  let tab= width / Nlineas; 
  let l= 0;
  let yini,xfin;
  let xini,yfin;

for(l = 0; l < Nlineas; l ++ )
  {
    yfin= tab * l;
    xini= tab * (l+1); 
    drawline(_colorlin, xini, 0, 300, yfin);
    l=l ++;

    yini= tab * l;
    xfin= tab * (l+1);
    drawline(_colorlin, 0, yini, xfin, 300);
    l=l++;
  }
  if(txlin.value=="")
  {
    alert('Es obligatorio digitar el numero de lineas');
    document.getElementById("cant_lineas").focus();
  }
  else
  {
    if(colorr.value=="")
  {
    alert('Es obligatorio digitar el color');
    document.getElementById("colorr").focus();
  }
  else
  {
    document.getElementById("cant_lineas").value="";
    document.getElementById("colorr").value="";
  }  
  }
  } 
//Dibujando el contorno del canvas
  drawline(colorcolor, 1, 1, 1, 300);
  drawline(colorcolor, 0, 299, 300, 299);
  drawline(colorcolor, 0, 0, 300, 1);
  drawline(colorcolor, 300, 0, 299, 300);
  
    

       