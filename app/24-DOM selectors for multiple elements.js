function p(val){
  console.log(val);
}

let items, mainItem, list, listArray, listItems, subItem;

// list = select l.collection

// listItems = select li.collection-item:first-child


// DOM Selection for muntiple items

// // document.getElementsByClassName gets items that are of the same class and it returns a HTML Collection
// items = document.getElementsByClassName('collection-item');

// console.log(items);

// // we can access the elements from the returned set as an array and access the different elements like how we would treat an array and use the square brackets [] to access them
// pr(items[0]);
// pr(items[1]);
// // getElementsByClassName can also be applied on the returned results of a previous collection
// mainItem = document.querySelector('ul');
// pr(mainItem);
// subItem = mainItem.getElementsByClassName('collection-item');
// pr(subItem);

// // document.getElementsByTagName works similar to ClassName but takes the type of tag as the input
// // It returns a HTMLCollection
// lists = document.getElementsByTagName('li');
// pr(lists);

// // HTMLCollecitons are not arrays and therefore we cannot apply any of the array functions on them
// // In order to apply the array functions we need to convert them into an Array by using Array.from
// listArray = Array.from(lists);
// pr(listArray);


// // document.querySelectorAll - returns NodeList
// // nodeList returns all items that are in a HTMLList and also some additional items such as text nodes in it
// // we can perform some more activities on it such as for each without having to convert into an array
// // selects anything that matches the query
// // we can put multiple queries to be matched
// items = document.querySelectorAll('ul.collection');
// // p(items);
// items = document.querySelectorAll('li.collection-item');
// // p(items);
// items = document.querySelectorAll('li.collection-item i.fa');
// // p(items);
// items = document.querySelectorAll('i.fa');
// // p(items);
// // we can use any type of css query selector as the condition
// items = document.querySelectorAll(`li:nth-child(2)`);
// // p(items);
// items = document.querySelectorAll(`li:nth-child(4)`);
// // p(items);
// items = document.querySelectorAll(`li:nth-child(odd)`);
// // p(items);


// using javascript to set background for the table
// list = document.getElementsByTagName('li');
// p(list);
// list = Array.from(list);
// p(list);
// list.forEach(function(item, index){
//   if(index % 2 == 0)
//     item.style.backgroundColor = "#eee";
//   else
//     item.style.backgroundColor = "#ccc";
// });

// let oddRow = document.querySelectorAll('li:nth-child(odd)');
// oddRow.forEach(  function(item, index){
//     item.style.backgroundColor = '#ddd';
// });
// let evenRow = document.querySelectorAll('li:nth-child(even)');
// evenRow.forEach(  function(item, index){
//     item.style.backgroundColor = '#eee';
// });










