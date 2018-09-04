function lkj(val) {
  console.log(val);
}

// RESET LOCAL FOR TESTING PURPOSE
// localStorage.removeItem('localTasks');

// The Script is organized as follows
// 1. Initial Setup
// 2. Event Listeners
// 3. Functions for Events
// 4. Functions called from Event Functions

// 1. Initial Setup
// getting global variables 
let submitTaskBox = document.querySelector('#input');
let submitTaskButton = document.querySelector('#submit');
let taskList = document.querySelector('#task-list');
let clearTaskButton = document.querySelector('#clear-button');

// create currentTaskList object to store tasks for session
// As the value of currentTaskList is changed, it is reflected in localStorage by updating its value
let currentTaskList;

// create localStorage item if it does not exist
if (localStorage.getItem('localTasks') === null) {
  currentTaskList = [];
} else {
  currentTaskList = JSON.parse(localStorage.getItem('localTasks'));
}

// lkj(submitTaskBox);
// lkj(submitTaskButton);
// lkj(taskList);
// lkj(clearTaskButton);

// 2. Event Listeners
// EVENT - Add new task on click submit button
submitTaskButton.addEventListener('click', addTask);
// EVENT - Submit task if enter is pressed in submitTaskBox
submitTaskBox.addEventListener('keypress', valueInInputBox);
// EVENT - Delete task if x icon is clicked
taskList.addEventListener('click', deleteTask);
// EVENT - Complete task if checkbox is checked is clicked
taskList.addEventListener('click', completeTask);
// EVENT - Clear all tasks when clear button is clicked
clearTaskButton.addEventListener('click', deleteAllTasks);

// initiate tasks and render on HTML Page if any tasks are stored in localStorage
populateTasks();

// 3. Functions for Events
// FUNCTION EVENT - addTask() executed when person clicks on submit task button
function addTask(e) {
  // fetch the current value input in task box
  let task = submitTaskBox.value;
  // lkj(task);
  
  currentTaskList.push(task);
  // displayCurrentTaskList();
  
  updateLocalStorage();
  
  //   alert('Task saved');
  
  //creating task on the HTML Page
  createTask(task);
}

// FUNCTION EVENT - valueInInputBox() is executed when there is a keypress in text field and it submits value when enter is pressed
function valueInInputBox(e) {
  // submit value if enter is pressed
  if (e.target.value != '' && e.keyCode == 13) {
    lkj('enter pressed. Value Added: ' + e.target.value);
    displayCurrentTaskList();
    displayLocalStorage();
    submitTaskButton.click();
    e.target.value = '';
  } else if (e.target.value == '' && e.keyCode == 13) {
    lkj('ERROR: enter pressed. NO VALUE ');
    alert('Oops, you have not entered anything');
  }
  
}

// FUNCTION EVENT - createTask() creates HTML task element in task list when submit button is clicked or enter is pressed in submit text box
function deleteTask(e) {
  // lkj('deleteTask Event');
  // lkj(e.target.classList);
  
  // delete task if element clicked is the delete icon
  if (e.target.classList.contains('delete-icon')) {
    lkj('Delete Icon clicked');
    let toDeleteTask = e.target.parentElement.parentElement;
    
    lkj("Before Delete:");
    displayCurrentTaskList();
    lkj(e.target.parentElement.parentElement.innerText);
    
    taskValue = e.target.parentElement.parentElement.innerText;
    removeTaskFromTaskList(taskValue);
    toDeleteTask.remove();
    
    lkj("After Delete:");
    displayCurrentTaskList();
    toDeleteTask.remove();
    
    updateLocalStorage();
  }
}

// FUNCTION EVENT- createTask() creates HTML task element in task list when submit button is clicked or enter is pressed in submit text box
function completeTask(e) {
  let currentTask;
  
  if (e.target.type == 'checkbox') {
    currentTask = e.target.parentElement;
  }
  
  // delete task if element clicked is the delete icon
  if (e.target.getAttribute('checked') == 'false') {
    lkj('Task Done');
    currentTask.classList.add('completed-task');
    e.target.setAttribute('checked', 'true');
  } else if (e.target.getAttribute('checked') == 'true') {
    lkj('Task Not Done');
    currentTask.classList.remove('completed-task');
    e.target.setAttribute('checked', 'false');
  }
}

// 4. Functions called from Event Functions
// FUNCTION - populateTasks() is executed at the initial setup phase of the script and populates the tasks that are stored in local storage on the HTML Page
function populateTasks(){
  currentTaskList.forEach(taskInTaskList => {
    createTask(taskInTaskList);
  });
}

// FUNCTION - createTask() creates HTML task element in task list when submit button is clicked or enter is pressed in submit text box
function createTask(taskText) {
  let newTask = document.createElement('li');
  newTask.className = 'task';

  // create checkbox element
  let newCheckbox = document.createElement('input');
  newCheckbox.setAttribute('type', 'checkbox');
  newCheckbox.setAttribute('value', '');
  newCheckbox.setAttribute('checked', 'false');

  // create task description text node
  let taskValue = document.createTextNode(taskText);

  // create anchor elemet
  let newA = document.createElement('a');
  newA.setAttribute('href', '#');

  // create icon element
  let newI = document.createElement('i');
  newI.classList = 'far fa-times-circle delete-icon';
  newI.setAttribute('style', 'font-size:7x;');

  // append icon element in anchor
  newA.appendChild(newI);

  // append checkbox, text and anchor in list item
  newTask.appendChild(newCheckbox);
  newTask.appendChild(taskValue);
  newTask.appendChild(newA);

  // append list item to main task list
  taskList.appendChild(newTask);
}

// FUNCTION - deleteAllTasks() is executed when delete tasks bustton is clicked
function deleteAllTasks() {
  
    lkj("Before Delete ALL:");
    displayCurrentTaskList();
    
    taskList.innerHTML = '';
    currentTaskList = [];
    localStorage.setItem('localTasks', JSON.stringify(currentTaskList));

    lkj("After Delete ALL:");
    displayCurrentTaskList();
}

// FUNCTION - updateLocalStorage() is called when a value in currentTaskList changes and localStorage needs to be updated
function updateLocalStorage() {
  localStorage.setItem('localTasks', JSON.stringify(currentTaskList));
}

// FUNCTION - removeTaskFromTaskList() is called to remove a task form currentTaskList 
function removeTaskFromTaskList(task) {
  var index = currentTaskList.indexOf(task);
  if (index > -1) {
    currentTaskList.splice(index, 1);
  }
}

// FUNCTION - 
function displayLocalStorage(){
  lkj("Local Storage value:");
  lkj(localStorage);
}

// FUNCTION - 
function displayCurrentTaskList(){
  lkj("Current task list Array:");
  lkj(currentTaskList);
}