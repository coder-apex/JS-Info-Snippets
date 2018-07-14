/* 2-5 - Array Methods */

// declaring variables and constants used in file
let arr, array, arrayLike, length, lengths, name, names, result, results, str, string, temp, user, users, val, value, values; 

/*  
    arr.push(...items) – adds items to the end,
    arr.pop() – extracts an item from the end,
    arr.shift() – extracts an item from the beginning,
    arr.unshift(...items) – adds items to the beginning.
*/
// arr.splice(str) can: add, remove and insert elements
// Syntax: arr.splice(index[, deleteCount, elem1, ..., elemN])
arr = ["I", "study", "JavaScript"];
pr("\nSplicingInitial array is:");
pr(arr);

arr.splice(1, 1); // from index 1 remove 1 element
pr("after splice(1,1) array is:");
pr( arr ); // ["I", "JavaScript"]

arr = ["I", "study", "JavaScript", "right", "now"];
pr("Initial array is:");
pr(arr);
// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");
pr("after splice(0, 3, \"Let's\", \"dance\") array is:");
pr( arr ) // now ["Let's", "dance", "right", "now"]

// ==========
// arr.concat - joins the array with other arrays and/or items.
// r.concat(arg1, arg2...) - accepts any number of arguments
// Result is a new array containing items from arr, then arg1, arg2 etc.
arr = [1, 2];
// merge arr with [3,4]
pr( arr.concat([3, 4])); // 1,2,3,4
// merge arr with [3,4] and [5,6]
pr( arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
// merge arr with [3,4], then add values 5 and 6
pr( arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6
// Other objects, even if they look like arrays, added as a whole
arr = [1, 2];
arrayLike = {
  0: "something",
  length: 1
};
pr( arr.concat(arrayLike) ); // 1,2,[object Object]
//[1, 2, arrayLike]


/* 
SEARCHING ARRAYS
- arr.indexOf(item, from) looks for item starting from index from, and returns the index where it was found, otherwise -1.
- arr.lastIndexOf(item, from) – same, but looks from right to left.
- arr.includes(item, from) – looks for item starting from index from, returns true if found.
*/
arr = [1, 0, false];
// ==========
// indexOf() method
pr( arr.indexOf(0) ); // 1
pr( arr.indexOf(false) ); // 2
pr( arr.indexOf(null) ); // -1
// includes() method
pr( arr.includes(1) ); // true

// ==========
// find and findIndex
// let result = arr.find(function(item, index, array) {
//   // should return true if the item is what we are looking for
// });

// The function is called repetitively for each element of the array:
//   item is the element.
//   index is its index.
//   array is the array itself.
// If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned.
users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
user = users.find(item => item.id == 1);
pr(user.name); // John

// ==========
// filter
// filter returns an array of matching elements
// let results = arr.filter(function(item, index, array) {
//   // should return true if the item passes the filter
// });

users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);
pr(someUsers.length); // 2


// ARRAY TRANSFORMATION

// ==========
// MAP calls the function for each element of the array and returns the array of results.
// Syntax is:
// let result = arr.map(function(item, index, array) {
//   // returns the new value instead of item
// })
lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length)
pr(lengths); // 5,7,6

// ==========
// sort(fn)
// The method arr.sort sorts the array in place.
arr = [ 1, 2, 15 ];
// the method reorders the content of arr (and returns it)
arr.sort();
pr( arr );  // 1, 15, 2
// The items are sorted as strings by default.
// To use our own sorting order, we need to supply a function of two arguments as the argument of arr.sort()
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
arr = [ 1, 2, 15 ];
arr.sort(compareNumeric);
pr(arr);  // 1, 2, 15

// ==========
// reverse
// The method arr.reverse reverses the order of elements in arr
arr = [1, 2, 3, 4, 5];
arr.reverse();
pr( arr ); // 5,4,3,2,1

// ==========
// split and join
// str.split(delim) splits the string into an array by the given delimiter delim.
names = 'Bilbo, Gandalf, Nazgul';
arr = names.split(', ');
for (let name of arr) {
  pr( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}
// split method has an optional second numeric argument – a limit on the array length. If it is provided, then the extra elements are ignored. 
arr = 'Bilbo, Gandalf, Nazgul, Saruman';
names = arr.split(', ', 2);
pr(names); // Bilbo, Gandalf

// arr.join(str) does the reverse to split. It creates a string of arr items glued by str between them.
arr = ['Bilbo', 'Gandalf', 'Nazgul'];
str = arr.join(';');
pr( str ); // Bilbo;Gandalf;Nazgul

// ==========
// reduce/reduceRight
// arr.reduce and arr.reduceRight are used to calculate a single value based on the array
// The syntax is:
// let value = arr.reduce(function(previousValue, item, index, arr) {
//   // ...
// }, initial);
// The function is applied to the elements. You may notice the familiar arguments, starting from the 2nd:
//     item – is the current array item.
//     index – is its position.
//     arr – is the array.
//     previousValue – is the result of the previous function call, initial for the first call.
arr = [1, 2, 3, 4, 5];
result = arr.reduce((sum, current) => sum + current, 0);
// pr(resultThe method arr.reduceRight does the same, but goes from right to left.

// ==========
// Iterate: forEach
// arr.forEach method allows to run a function for every element of the array.
// The syntax:
// arr.forEach(function(item, index, array) {
//   // ... do something with item
// });
["Bilbo", "Gandalf", "Nazgul"].forEach(pr);
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  pr(`${item} is at index ${index} in ${array}`);
});

// ==========
// Array.isArray()
// Array.isArray(value) returns true if the value is an array, and false otherwise
alert(typeof {}); // object
alert(typeof []); // same
alert(Array.isArray({})); // false
alert(Array.isArray([])); // true

/* ==========
CHEATSHEET of array methods:

To add/remove elements:
    push(...items) – adds items to the end,
    pop() – extracts an item from the end,
    shift() – extracts an item from the beginning,
    unshift(...items) – adds items to the beginning.
    splice(pos, deleteCount, ...items) – at index pos delete deleteCount elements and insert items.
    slice(start, end) – creates a new array, copies elements from position start till end (not inclusive) into it.
    concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.

To search among elements:
    indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
    includes(value) – returns true if the array has value, otherwise false.
    find/filter(func) – filter elements through the function, return first/all values that make it return true.
    findIndex is like find, but returns the index instead of a value.

To transform the array:
    map(func) – creates a new array from results of calling func for every element.
    sort(func) – sorts the array in-place, then returns it.
    reverse() – reverses the array in-place, then returns it.
    split/join – convert a string to array and back.
    reduce(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.

To iterate over elements:
    forEach(func) – calls func for every element, does not return anything.

Additionally:
    Array.isArray(arr) checks arr for being an array.

Please note that methods sort, reverse and splice modify the array itself.

These methods are the most used ones, they cover 99% of use cases. But there are few others:

  arr.some(fn)/arr.every(fn) checks the array.

  The function fn is called on each element of the array similar to map. If any/all results are true, returns true, otherwise false.

  arr.fill(value, start, end) – fills the array with repeating value from index start to end.

  arr.copyWithin(target, start, end) – copies its elements from position start till position end into itself, at position target (overwrites existing).

For the full list, see the manual.

From the first sight it may seem that there are so many methods, quite difficult to remember. But actually that’s much easier than it seems.

Look through the cheatsheet just to be aware of them. Then solve the tasks of this chapter to practice, so that you have experience with array methods.

Afterwards whenever you need to do something with an array, and you don’t know how – come here, look at the cheatsheet and find the right method. Examples will help you to write it correctly. Soon you’ll automatically remember the methods, without specific efforts from your side.
*/