// 7-3 - Walking the DOM

// declaring variables and constants used in file
let arr, array, arrayLike, data, date, desc, descriptor, description, ele, element, elements, item, items, length, lengths, meetup, name, names, num, number, numbers, range, result, results, room, str, string, student, temp, user, users, val, value, values;

// shorthand console.log function
function pr(val){
  console.log(val);
}

// ==========
// DOM Collections
// looks like an array. But actually it’s not an array, but rather a collection – a special array-like iterable object.
// There are two important consequences:
//  1. We can use for..of to iterate over it:
for (let node of document.body.childNodes) {
  pr(node); // shows all nodes from the collection
}
//  2. It’s iterable but not an array so Array methods won’t work
pr(document.body.childNodes.filter); // undefined (there's no filter method!)
// If we want array methods:
pr( Array.from(document.body.childNodes).filter ); // now it's there

// ==========
// Siblings and the parent
// Siblings are nodes that are children of the same parent. For instance, <head> and <body> are siblings:
//     <body> is said to be the “next” or “right” sibling of <head>,
//     <head> is said to be the “previous” or “left” sibling of <body>.
// The parent is available as parentNode.
// The next node in the same parent (next sibling) is nextSibling, and the previous one is previousSibling.

// ==========
// Element-only navigation
// children – only those children that are element nodes.
// firstElementChild, lastElementChild – first and last element children.
// previousElementSibling, nextElementSibling – neighbour elements.
// parentElement – parent element.

// ==========
// SUMMARy
// Given a DOM node, we can go to its immediate neighbours using navigation properties.

// There are two main sets of them:
//     For all nodes: parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling.
//     For element nodes only: parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling.

// Some types of DOM elements, e.g. tables, provide additional properties and collections to access their content