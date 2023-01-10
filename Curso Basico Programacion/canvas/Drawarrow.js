let keys =
{
  UP:38,
  DOWN:40, 
  LEFT:37,
  RIGHT:39
};

const canvas = document.createElement('canvas');
canvas.id= 'lienzo';
canvas.width='400';
canvas.height='400';
document.body.appendChild(canvas);

let keydraw = document.getElementById('lienzo');
let _ctx = canvas.getContext('2d');
let x = 200;
let y = 200;

function drawline(color, xini, yini, xfin, yfin, ctx)
{
  ctx.beginPath();        
  ctx.moveTo(xini, yini);    
  ctx.lineTo(xfin, yfin);
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.stroke();   
  ctx.closePath;    
}

document.addEventListener('keydown', drawArrow);

function drawArrow(_event) 
{
  let colorr = 'violet';
  let movement = 1;

switch (_event.keyCode) {
  case keys.UP:
    drawline(colorr, x, y, x, y - movement, _ctx);
    y = y - movement;
    break;
  
  case keys.DOWN:
    drawline(colorr, x, y, x, y + movement, _ctx);
    y = y + movement;
    break;

  case keys.LEFT:
    drawline(colorr, x, y, x - movement, y, _ctx);
    x = x - movement;
  break;
  
  case keys.RIGHT:
    drawline(colorr, x, y, x + movement, y, _ctx);
    x = x + movement;
  break;
}
} 
