function p(val){
  console.log(val);
}

let items, mainItem, list, listArray, listItem, listItems, subItem, val, value;


// we traverse the DOM by getting children and parents after selecting a single element
list = document.querySelector('ul.collection');
// p(list); // getting the whole ul list
listArray = document.querySelector('li.collection-item:first-child');
// p(listArray); // getting the first list item

// getting child nodes - returns NodeList - includes the text nodes
val = list.childNodes;
val = list.childNodes[0];
// p(val);
val = list.childNodes[0].nodeType;
// p(val);
val = list.childNodes[1];
// p(val);
val = list.childNodes[1].nodeType;
// p(val);
val = list.childNodes[2];
// p(val);
val = list.childNodes[2].nodeType;
// p(val);

// getting children - returns HTMLCollection - no text nodes
val = list.children;
// p(val);
val = list.children[1].childType;
// p(val);


// val = list.
// first child
val = list.firstChild;
// p(val);
val = list.firstElementChild; 
// p(val);

// last child
val = list.lastChild;
// p(val);
val = list.lastElementChild;
// p(val);

// count child elements
val = list.childElementCount;
// p(val);

// get parents
// p(listArray);
val = listArray.parentElement;
// p(val);
val = listArray.parentElement.parentElement;
// p(val);
val = listArray.parentElement.parentElement.parentElement;
// p(val);

// get next siblings
val = listArray.nextSibling;
// p(val);
val = listArray.nextElementSibling;
// p(val);


// get previous element sibling
val = listArray.previousSibling;
// p(val);
val = listArray.previousElementSibling;
// p(val);


