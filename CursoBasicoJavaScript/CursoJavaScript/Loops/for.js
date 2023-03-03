/* Loop for to make an array with Odd numbers */

let myOddNumbers = [];

for (i = 1; i < 20; i += 2) {
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

/* Loop for to create an array with decrease values */

let decrease = [];

for (let i = 10; i >= 0; i--) {
  decrease.push(i);
}
console.log(decrease);

/* sometimes we can find Multi-dimensional arrays and we need to use nesting (for) loops */

function multiplyAll(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {//We check the length of arr in the [i] for loop, and the arr[i] length in the [j] for loop.  
   for (let j = 0; j < arr[i].length; j++) {
    product *= arr[i][j];
  }
}
  console.log(product)
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);