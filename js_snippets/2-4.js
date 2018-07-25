/* 2-4 - Arrays */

let arr, array, arrayLike, length, lengths, name, names, result, results, str, string, temp, user, users, val, value, values; 

// Creating Arrays
let arr1 = new Array();
let arr2 = [];
let fruits = ["Apple", "Orange", "Plum"];
// Get length of array with length
pr(fruits.length);
// access array elements with for loop
arr = ["Apple", "Orange", "Pear"];
pr("\nAccessing elements with for loop:");
for (let i = 0; i < arr.length; i++) {
  pr( arr[i] );
}
// access array elements with for..of loop
fruits = ["Apple", "Orange", "Plum"];
pr("\nAccessing elements with for..of loop:");
for (let fruit of fruits) {
  pr( fruit );
}
// access array elements with for..in loop
// for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower
arr = ["Apple", "Orange", "Pear"];
pr("\nAccessing elements with for..in loop:");
for (let key in arr) {
  pr( arr[key] ); // Apple, Orange, Pear
}
