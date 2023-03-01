/* Loop for to make an array with Odd numbers */
let i = 1;
let myOddNumbers = [];

for (i; i < 20; i += 2) {
  myOddNumbers.push(i);
    
}
console.log(myOddNumbers);

/* Loop for to create an array with Odd numbers backwards*/

let contBackwards = [];
let total = 0;

for (let i = 11; i > 0; i -= 2) {
  contBackwards.push(i);  
}
console.log(contBackwards);

/* Lopp for to add up each number with the next number that contain our array */

for (let i = 0; i < contBackwards.length; i++) {
  total += contBackwards[i];
}
console.log(total)

