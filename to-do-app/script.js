function lkj(val){
  console.log(val);
}

// getting variables
let inputBox = document.querySelector('#input');
let submitButton = document.querySelector('#submit');
let taskList = document.querySelector('#task-list');
let delButton = document.querySelectorAll('.delete-icon');
let taskCheckBox = document.querySelectorAll('li.task > input');
let clearTaskButton = document.querySelector('a.btn.btn-warning.btn-lg.active');

// lkj(inputBox);
// lkj(submitButton);
// lkj(taskList);
// lkj(delButton);
// lkj(taskCheckBox);
// lkj(clearTaskButton);

// EVENTLISTENER - for keypress in new task submit box
inputBox.addEventListener('keypress', captureInput);
function captureInput(event){
  // lkj('Input Event');
  // lkj(event.target.value);

  // if enter is pressed
  if (event.keyCode === 13) {
    // lkj('Enter button clicked');
    submitButton.click();
  }
}

// EVENTLISTENER - for click on submit button
submitButton.addEventListener('click', clickSubmit);
function clickSubmit(e){
  // lkj(e.type);
  // lkj('Submit clicked');

  // create a new task 'li' item
  let newTask = document.createElement('li');
  newTask.className = 'task';
  newTask.id = 'new-task';

  // create rest of the inner html elements
  // Input tag - checkbox
  let newElement = document.createElement('input');
  newElement.setAttribute('type', 'checkbox');
  newElement.setAttribute('value', '');
  newElement.setAttribute('style', 'text-align: left; align: left;');
  newElement.addEventListener('click', completeTask);  
  newTask.appendChild(newElement);
  // newTask.innerHTML = newElement;
  // setAttribute('class', 'task');
  
  // append text node with value of input
  newElement = document.createTextNode(inputBox.value);
  newTask.appendChild(document.createTextNode(inputBox.value));

  // append x icon used to delete item
  newElement = document.createElement('a');
  newElement.setAttribute('href', '#');
  let newIcon = document.createElement('i');
  newIcon.classList = 'far fa-times-circle delete-icon'
  newIcon.setAttribute('style', 'font-size:7x;');
  newIcon.addEventListener('click', deleteTask);
  newElement.appendChild(newIcon);

  newTask.appendChild(newElement);
  // add deleteTask event to the 

  // lkj(newElement);
  // lkj(newIcon);

  taskList.appendChild(newTask);

  // clear the input box after creating the element
  inputBox.value = '';
}

// EVENTLISTENER - for click on task delete button
// to delete task we need to addEventListener to all the icons
// we will do this by running a for loop on all the nodelist elements
for(let count = 0; count < delButton.length; count++){
  // lkj(delButton[count]);
  delButton[count].addEventListener('click', deleteTask);  
}
function deleteTask(e){
  // lkj('delete icon clicked');
  let toDeleteTask = e.target.parentElement.parentElement;
  // lkj(toDeleteTask);

  // removing the element
  toDeleteTask.remove();
}

// EVENTLISTENER - for clicking on complete task button
// to complete task we need to addEventListener to all the checkboxes
// we will do this by running a for loop on all the nodelist elements
for(let count = 0; count < taskCheckBox.length; count++){
  // lkj(delButton[count]);
  taskCheckBox[count].addEventListener('click', completeTask);  
}
function completeTask(e){
  lkj('Comlete task checkbox clicked');

  let eventNow = e.target.parentElement;
  // lkj(eventNow);

  // lkj(e.target.getAttribute('checked'));

  if(e.target.getAttribute('checked') == 'false'){
  eventNow.style.textDecoration = 'line-through';
  eventNow.style.color = 'black';
  eventNow.style.fontSize = '1.25em';
  }
  else if(e.target.getAttribute('checked') == 'true'){
    eventNow.style.textDecoration = 'underline';
    eventNow.style.color = 'inherit';
    eventNow.style.fontSize = '1.5em';    
  }
  // lkj(eventNow.style.textDecoration);

  // check and uncheck the checkbox based on current status
  if(e.target.getAttribute('checked') == 'false'){
    e.target.setAttribute('checked', 'true');
  }
  else if(e.target.getAttribute('checked') == 'true'){
    e.target.setAttribute('checked', 'false');
  }
}

// EVENTLISTENER - Clear tasks on clicking clear task button
clearTaskButton.addEventListener('click', clearTasks);
function clearTasks(e){
  lkj('Clear Task Button Clicked');
  taskList.innerHTML = '';

}









