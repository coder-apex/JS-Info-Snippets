// 7-7 - Modifying the document

// declaring variables and constants used in file
let arr, array, arrayLike, data, date, desc, descriptor, description, ele, element, elements, item, items, length, lengths, meetup, name, names, num, number, numbers, range, result, results, room, str, string, student, temp, user, users, val, value, values;

// shorthand console.log function
function pr(val) {
  console.log(val);
}

// ==========
// Creating an element
// document.createElement(tag)
    // Creates a new element with the given tag:
    let divVar = document.createElement('divVar');

// document.createTextNode(text)
    // Creates a new text node with the given text:
    let textNode = document.createTextNode('Here I am');

// creating the message
divVar = document.createElement('div');
divVar.className = "alert alert-success";
divVar.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

// The DOM element is ready but it’s in the variable, and can not be seen, because it’s not been inserted into the page yet.

// ==========
// Insertion Methods
// To make the div show up, we need to insert it somewhere into document. 
// To insert it in the document body we use document.body.appendChild(div)
document.body.appendChild(divVar);

// adding a new li in the ol
let newLi = document.createElement("li"); // create new li
newLi.innerHTML = 'OL Item 4 - Created'; // define innerHTML text
let olItem = document.getElementById('ol'); // choose .ol
ol.appendChild(newLi);

// Here’s a brief list of methods to insert a node into a parent element (parentElem for short):
// parentElem.appendChild(node)
// Appends node as the last child of parentElem.
/*
<ol id="list">
  <li>0</li>
  <li>1</li>
  <li>2</li>
</ol>
<script>
  let newLi = document.createElement('li');
  newLi.innerHTML = 'Hello, world!';

  list.insertBefore(newLi, list.children[1]);
</script>
*/


// parentElem.appendChild(node)
// Appends node as the last child of parentElem. 
// to insert li in ol after item 2
let ordList = document.getElementById('ol');
let newItem = document.createElement('li');
newItem.innerHTML = 'Created new element';
ordList.insertBefore(newItem, ordList.children[2]);


// parentElem.replaceChild(node, oldChild)
// Replaces oldChild with node among children of parentElem.
let selectedList = document.getElementsByClassName('lists');
// selectedList = selectedList.

console.log(selectedList);

/*
<ol id="list">
  <li>0</li>
  <li>1</li>
  <li>2</li>
</ol>
<script>
  let newLi = document.createElement('li');
  newLi.innerHTML = 'Hello, world!';

  list.insertBefore(newLi, list.children[1]);
</script>
*/

// ==========
parentElem = document.getElementById("divA");
console.log(parentElem);
oldChild = document.querySelector('#divA > ul').firstElementChild;
console.log(oldChild);
let newChild = document.createElement('li');
newChild.innerText = 'New child text';
parentElem.replace(oldChild, newChild);


// ==========



// ==========



// ==========


// ==========


// ==========


// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========



// ==========


// ==========


// ==========


// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========



// ==========


// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========



// ==========


// ==========


// ==========


// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========



// ==========


// ==========


// ==========


// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========



// ==========


// ==========


// ==========


// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========



// ==========


// ==========


// ==========


// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========



// ==========


// ==========


// ==========


// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========



// ==========


// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========



// ==========


// ==========


// ==========


// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========



// ==========


// ==========


// ==========


// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========



// ==========


// ==========


// ==========


// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========


// ==========



// ==========




// ==========



// ==========



// ==========



// ==========


// ==========


// ==========


// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========



// ==========


// ==========


// ==========


// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========



// ==========


// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========



// ==========


// ==========


// ==========


// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========



// ==========


// ==========


// ==========


// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========



// ==========


// ==========


// ==========


// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========


// ==========



// ==========




// ==========



// ==========



// ==========



// ==========


// ==========


// ==========


// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========



// ==========


// ==========


// ==========


// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========



// ==========


// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========



// ==========


// ==========


// ==========


// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========



// ==========


// ==========


// ==========


// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========



// ==========


// ==========


// ==========


// ==========



// ==========



// ==========



// ==========




// ==========



// ==========



// ==========


