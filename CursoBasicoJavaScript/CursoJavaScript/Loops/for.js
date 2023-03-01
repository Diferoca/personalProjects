/* Loop for to make a matrix of Odd numbers */
let i = 1;
let myOddNumbers = [];

for (i; i < 20; i += 2) {
  myOddNumbers.push(i);
    
}
console.log(myOddNumbers);

/* Loop for to create a matrix Odd numbers backwards*/

let contBackwards = [];
let total = 0;

for (let i = 11; i > 0; i -= 2) {
  contBackwards.push(i);  
}
console.log(contBackwards);

for (let i = 0; i < contBackwards.length; i++) {
  total += contBackwards[i];
  
}
console.log(total)

