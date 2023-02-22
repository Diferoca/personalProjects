//The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations. JavaScript arrays are resizable and can contain a mix of different data types.

//* example:

let newArray = ['cake','bread','cupcake','brownie'] // here we build an array.

newArray.push('flour'); // Method to add any element at the final of the array. 
console.log( newArray);

newArray.pop();  // Method to remove any element at the final of the array. This method don't need any value because always remove the last index of our array.
console.log( newArray);

console.log(newArray.indexOf('bread')); // Method to know the number of index of some data into our array.
let Index = newArray.indexOf('bread');
console.log(newArray[Index]);

newArray [3] = 'Flour'; // modify array data with indexes: so in this case the value with the index number 3 into our array     ('brownie') was changed to the new value ('flour'). 
console.log(newArray); 

let myArray = [['cake', 'bread'], ['cupcake', 'brownie'], ['flour', 'oats', 'butter']]// Access Multidimentional arrays with indexes: Well, in this case we access to nested index 3, and at the same time we access to sub index 1 of the nested index 3.
let myData = myArray [2] [1];
console.log(myData);