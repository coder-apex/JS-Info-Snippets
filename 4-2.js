// 4-2 - Rest parameters and spread operator

// declaring variables and constants used in file
let arr, array, arrayLike, data, date, ele, element, elements, item, items, length, lengths, meetup, name, names, num, number, numbers, range, result, results, room, str, string, student, temp, user, users, val, value, values; 

// shorthand console.log function
function pr(val){
  console.log(val);
}

// ==========
// Rest Parameters
// A function can be called with any number of arguments, no matter how it is defined.
function sum(a, b) {
  return a + b;
}
pr( sum(1, 2, 3, 4, 5) );

// There will be no error because of “excessive” arguments. But only the first two will be counted.
// The rest parameters can be mentioned in a function definition with three dots ...
// They literally mean “gather the remaining parameters into an array”.
function sumAll(...args) { // args is the name for the array
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
pr( sumAll(1) ); // 1
pr( sumAll(1, 2) ); // 3
pr( sumAll(1, 2, 3) ); // 6

// We can choose to get the first parameters as variables, and gather only the rest.
function showName(firstName, lastName, ...titles) {
  pr( firstName + ' ' + lastName ); // Julius Caesar
  // the rest go into titles array
  pr( titles[0] ); // Consul
  pr( titles[1] ); // Imperator
  pr( titles.length ); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");

// ==========
// Spread operator
// Used in function call where it replaces the array with list of arguments
// When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.
// For Math.max:
arr = [3, 5, 1];
pr( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
pr( Math.max(...arr1, ...arr2) ); // 8
// We can even combine the spread operator with normal values:
arr1 = [1, -2, 3, 4];
arr2 = [8, 3, -8, 1];
pr( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

// ==========
// SUMMARY

// When we see "..." in the code, it is either rest parameters or the spread operator.
// There’s an easy way to distinguish between them:
//   When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
//   When ... occurs in a function call or alike, it’s called a “spread operator” and expands an array into a list.

// Use patterns:
//  Rest parameters are used to create functions that accept any number of arguments.
//  Spread operator is used to pass an array to functions that normally require a list of many arguments.

// Together they help to travel between a list and an array of parameters with ease.
// All arguments of a function call are also available in “old-style” arguments: array-like iterable object.