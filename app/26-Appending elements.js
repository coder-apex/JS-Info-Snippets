function p(val){
  console.log(val);
}

let items, mainItem, list, listArray, listItem, listItems, subItem, val, value;

// creating elements
let li = document.createElement('li');
li.className = 'collection-item';
// add id
li.id = 'new-item';
// add attribute
li.setAttribute('title', 'Custom li');


// to append the item to the ul
// 1. create the item to append
let textNode = document.createTextNode('Hello World');
// 2. insert the text to the created element
li.appendChild(textNode); 
// 3. insert the element into the list
document.querySelector('ul.collection').appendChild(li);

// above block creates the li item and inserts it into the ul
// now we will create the a link and insert in into the ul

// creating the link element
let link = document.createElement('a');
link.setAttribute('href', '#');
link.setAttribute('class', 'delete-item secondary-content');
// inserting the li element inside the li element
item = document.querySelector('li#new-item');
item.appendChild(link);

// creating and inserting the icon
// let icon = document.createElement('i');
// icon.setAttribute("class", 'fa fa-remove');
// item = document.querySelector('ul li#new-item a');
// item.appendChild(icon);
link.innerHTML = '<i class="fa fa-remove"></i>';

p(item);
// p(link);










