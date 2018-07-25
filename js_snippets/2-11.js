// 2-11 - JSON methods, toJSON

// declaring variables and constants used in file
let arr, array, arrayLike, length, lengths, meetup, name, names, number, numbers, range, result, results, room, str, string, student, temp, user, users, val, value, values; 

// shorthand console.log function
function pr(val){
  console.log(val);
}

// ==========
// JSON

// JSON.stringify to convert objects into JSON.
// JSON.parse to convert JSON back into an object.

// The full syntax of JSON.stringify is:
// let json = JSON.stringify(value[, replacer, space])

student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let studentJSON = JSON.stringify(student);

pr(typeof studentJSON); // we've got a string!

pr(studentJSON);
/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/

// If we pass an array of properties to it, only these properties will be encoded.
room = {
  number: 23
};

meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

pr( JSON.stringify(meetup, ['title', 'participants']) );
// {"title":"Conference","participants":[{},{}]}

// The property list is applied to the whole object structure. So participants are empty, because name is not in the list.
pr( JSON.stringify(meetup, ['title', 'participants', 'name']) );
// {"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}]}

// ==========
// JSON replacer
// The function will be called for every (key,value) pair and should return the “replaced” value, which will be used instead of the original one.
let replacerJSON = JSON.stringify(meetup, function replacer(key, value) {
  pr(`${key}: ${value}`); // to see what replacer gets
  return (key == 'occupiedBy') ? undefined : value; // if key is occupiedBy then it is replaced by undefined value
});

pr(replacerJSON);

// ==========
// JSON Spacer
// The third argument of JSON.stringify(value, replacer, spaces) is the number of spaces to use for pretty formatting. The spacer argument is used exclusively for a nice output.
user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};
pr("With 2 spaces:");
pr(JSON.stringify(user, null, 2));
// Here spacer = 2 tells JavaScript to show nested objects on multiple lines, with indentation of 2 spaces inside an object:
pr("With 4 spaces:");
pr(JSON.stringify(user, null, 4)); // with 4 spaces for indentation

// ==========
// JSON Custom toJSON()
 
room = {
  number: 23
};

meetup = {
  title: "Conference",
  date: new Date(Date.UTC(2017, 0, 1)),
  room
};

pr( JSON.stringify(meetup) );
// {
//   "title":"Conference",
//   "date":"2017-01-01T00:00:00.000Z",  // (1)
//   "room": {"number":23}               // (2)
// }
// date (1) became a string. All dates have a built-in toJSON method which returns such kind of string.
// Let us define a custom return for room (2)

room = {
  number: 23
};
pr("Without toJSON():\n====\n" +  JSON.stringify(room) ); // 23

room = {
  number: 23,
  toJSON() { // this value is returned when JSON.stringify is called
    return this.number;
  }
};
pr("With toJSON():\n====\n" +  JSON.stringify(room) ); // 23

meetup = {
  title: "Conference",
  room 
  // room is now referenced and toJSON() is called from the room object
};
pr( JSON.stringify(meetup) );
/*
  {
    "title":"Conference",
    "room": 23
  }
*/

// ==========
// JSON.parse
// To decode a JSON-string, we need another method named JSON.parse. The syntax:
// let value = JSON.parse(str[, reviver]);
// str : JSON-string to parse.
// reviver : Optional function(key,value) that will be called for each (key,value) pair and can transform the value. 
let numbersString = "[0, 1, 2, 3]";
// numbersString is a string and we use JSON.parse() to convert it to an object 
numbers = JSON.parse(numbersString);
pr( numbers ); // prints numbers array object
pr( numbers[1] ); // 1

// JSON.parse also parses nested JSON and complex objects
let userString = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
user = JSON.parse(userString);
pr(user);
pr( user.friends[1] ); // 1

// COMMON ERRORS IN HANDWRITTEN JSON
let json = `{
  // Comment - ERROR as JSON does not support comments
  name: "John",                     
  // mistake: property name without quotes
  "surname": 'Smith',               
  // mistake: single quotes in value (must be double)
  'isAdmin': false                  
  // mistake: single quotes in key (must be double)
  "birthday": new Date(2000, 2, 3), 
  // mistake: no "new" is allowed, only bare values
  "friends": [0,1,2,3]              
  // here all fine
}`;

// REVIEWER
// 
str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
meetup = JSON.parse(str);
pr(meetup); // notice date is returned as a string and not date 
// ==== Commented as it is an error
// pr( meetup.date.getDate() ); // Error!
// ====

meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') 
    return new Date(value);
  else return value;
});
pr(meetup); // notice date is returned as a string and not date 
pr( meetup.date.getDate() ); // returns date value 30

//  Reviewer also works for nested objects
let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function(key, value) {
  if (key == 'date') 
    return new Date(value);
  return value;
});

pr(schedule);
pr( schedule.meetups[1].date.getDate() ); // works!

// ==========
// SUMMARY

// JSON is a data format that has its own independent standard and libraries for most programming languages.
// JSON supports plain objects, arrays, strings, numbers, booleans and null.
// JavaScript provides methods JSON.stringify to serialize into JSON and JSON.parse to read from JSON.
// Both methods support transformer functions for smart reading/writing.
// If an object has toJSON, then it is called by JSON.stringify.


