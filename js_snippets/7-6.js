// 7-6 - Attributes and properties

// declaring variables and constants used in file
let arr, array, arrayLike, data, date, desc, descriptor, description, ele, element, elements, item, items, length, lengths, meetup, name, names, num, number, numbers, range, result, results, room, str, string, student, temp, user, users, val, value, values;

// shorthand console.log function
function pr(val) {
  console.log(val);
}

// ==========
//  DOM Properties
// we can add our own properties to DOM nodes as they are regular JavaScript objects. We can alter them.
document.body.myData = {
  name: 'Caesar',
  title: 'Imperator'
};

pr(document.body.myData.title); // Imperator

// we can add functions as well
document.body.sayTagName = function() {
  pr(this.tagName);
};

document.body.sayTagName(); // BODY (the value of "this" in the method is document.body)

// DOM properties and methods behave just like those of regular JavaScript objects:
//  They can have any value.
//  They are case-sensitive (write elem.nodeType, not elem.NoDeTyPe).

// ==========
// HTML Attributes
// When an element has id or another standard attribute, the corresponding property gets created. But that doesn’t happen if the attribute is non-standard.
/* 
<body id="body" type="...">
  <input id="input" type="text">
  <script>
    alert(input.type); // text
    alert(body.type); // undefined: DOM property not created, because it's non-standard
  </script>
</body> 
*/

// we can access these properties by using the following functions
// elem.hasAttribute(name) – checks for existence.
// elem.getAttribute(name) – gets the value.
// elem.setAttribute(name, value) – sets the value.
// elem.removeAttribute(name) – removes the attribute.
// These methods operate exactly with what’s written in HTML.

/*
<body something="non-standard">
  <script>
    alert(document.body.getAttribute('something')); // non-standard
  </script>
</body>
*/

// ==========
// Summary

//     Attributes – is what’s written in HTML.
//     Properties – is what’s in DOM objects.

// A small comparison:
// 	Properties 	Attributes
// Type 	Any value, standard properties have types described in the spec 	A string
// Name 	Name is case-sensitive 	Name is not case-sensitive

// Methods to work with attributes are:

//     elem.hasAttribute(name) – to check for existence.
//     elem.getAttribute(name) – to get the value.
//     elem.setAttribute(name, value) – to set the value.
//     elem.removeAttribute(name) – to remove the attribute.
//     elem.attributes is a collection of all attributes.

// For most needs, DOM properties can serve us well. We should refer to attributes only when DOM properties do not suit us, when we need exactly attributes, for instance:

//     We need a non-standard attribute. But if it starts with data-, then we should use dataset.
//     We want to read the value “as written” in HTML. The value of the DOM property may be different, for instance the href property is always a full URL, and we may want to get the “original” value.
