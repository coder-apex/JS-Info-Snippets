// 7-4 - Searching: getElement* and querySelector*

// declaring variables and constants used in file
let arr, array, arrayLike, data, date, desc, descriptor, description, ele, element, elements, item, items, length, lengths, meetup, name, names, num, number, numbers, range, result, results, room, str, string, student, temp, user, users, val, value, values;

// shorthand console.log function
function pr(val) {
  console.log(val);
}

// ==========
// document.getElementById or just id
// If an element has the id attribute, then there’s a global variable by the name from that id.

// <div id="elem">
//   <div id="elem-content">Element</div>
// // </div>
// pr(elem); // DOM-element with id="elem"
// pr(window.elem); // accessing global variable like this also works
// // for elem-content things are a bit more complex
// // that has a dash inside, so it can't be a variable name
// pr(window['elem-content']); // ...but accessible using square brackets [...]


// ==========
// getElementsBy*
// There are also other methods to look for nodes:
//   elem.getElementsByTagName(tag) looks for elements with the given tag and returns the collection of them. The tag parameter can also be a star "*" for “any tags”.
//   elem.getElementsByClassName(className) returns elements that have the given CSS class. Elements may have other classes too.
//   document.getElementsByName(name) returns elements with the given name attribute, document-wide. Exists for historical reasons, very rarely used, we mention it here only for completeness.

let divs = document.getElementsByTagName('div');
pr(divs);

let lists = document.getElementsByClassName('lists');
pr(lists);
pr(lists.length);

// ==========
// querySelectorAll
// The call to elem.querySelectorAll(css) returns all elements inside elem matching the given CSS selector. 
let querySelAll = document.querySelectorAll('li');
pr(querySelAll);
querySelAll = document.querySelectorAll('ol>li');
pr(querySelAll);
querySelAll = document.querySelectorAll('ol>li#chosenID');
pr(querySelAll);

// ==========
// querySelector
// The call to elem.querySelector(css) returns the first element for the given CSS selector.
// The result is the same as elem.querySelectorAll(css)[0], but the latter is looking for all elements and picking one, while elem.querySelector just looks for one. So it’s faster and shorter to write.
querySelAll = document.querySelectorAll('li')[0];
pr(querySelAll);
querySelAll = document.querySelector('li');
pr(querySelAll);

// ==========
// matches
// Previous methods were searching the DOM.
// The elem.matches(css) does not look for anything, it merely checks if elem matches the given CSS-selector. It returns true or false.
// The method comes handy when we are iterating over elements (like in array or something) and trying to filter those that interest us.

// ==========
// closest
// The method elem.closest(css) looks the nearest ancestor that matches the CSS-selector. The elem itself is also included in the search.
// In other words, the method closest goes up from the element and checks each of parents. If it matches the selector, then the search stops, and the ancestor is returned.

// ==========
// Summary

// There are 6 main methods to search for nodes in DOM:
// Method 	Searches by... 	Can call on an element? 	Live?
// getElementById 	id 	- 	-
// getElementsByName 	name 	- 	✔
// getElementsByTagName 	tag or '*' 	✔ 	✔
// getElementsByClassName 	class 	✔ 	✔
// querySelector 	CSS-selector 	✔ 	-
// querySelectorAll 	CSS-selector 	✔ 	-

// Please note that methods getElementById and getElementsByName can only be called in the context of the document: document.getElementById(...). But not on an element: elem.getElementById(...) would cause an error.

// Other methods can be called on elements too. For instance elem.querySelectorAll(...) will search inside elem (in the DOM subtree).

// Besides that:
//     There is elem.matches(css) to check if elem matches the given CSS selector.
//     There is elem.closest(css) to look for the nearest ancestor that matches the given CSS-selector. The elem itself is also checked.

// And let’s mention one more method here to check for the child-parent relationship:
//     elemA.contains(elemB) returns true if elemB is inside elemA (a descendant of elemA) or when elemA==elemB.
