// RESET LOCAL FOR TESTING PURPOSE
localStorage.clear();

function lkj(val) {
  console.log(val);
}

// declaring global variables
let questionBank;
let questionID = 0;
let question = {};

// create localStorage item if it does not exist
if (localStorage.getItem('localQuestionBank') === null) {
  questionBank = [];
} else {
  questionBank = JSON.parse(localStorage.getItem('localQuestionBank'));
}

// fetch elements from DOM
let addQuestionSection = document.querySelector("#add-question-section");
let quizSection = document.querySelector("#quiz-section");


// Add Event Listeners to the Elements
// EVENT - Detect click in Quiz and Question Section
addQuestionSection.addEventListener('click', whereWasTheClick);
quizSection.addEventListener('click', whereWasTheClick);

// function to check on which element the click occured and call the appropriate function
function whereWasTheClick(e) {
  // call appropriate function depending on which element is clicked
  switch (e.target.id) {
    case 'submit-answer':
      lkj('Submit Answer Button Clicked');
      quizSubmitAnswer();
      break;
    case 'show-answer':
      lkj('Show Answer Button Clicked');
      quizShowAnswer();
      break;
    case 'next-question':
      lkj('Next Question Button Clicked');
      showNextQuestion();
      break;
    case 'question-box':
      lkj('Question Box Clicked');
      break;
    case 'correct-answer-box':
      lkj('Correct Answer Box Clicked');
      break;
    case 'wrong-answer-box':
      lkj('Wrong Answer Box Clicked');
      break;
    case 'add-question':
      lkj('Add Question Button Clicked');
      addQuestion();
      break;
    case 'reset-question':
      lkj('Reset Question Button Clicked');
      resetQuestionFields();
      break;
  }
}


function quizSubmitAnswer() {
  lkj("Answer submitted. Waiting for result!")

  // Check if answer is correct


  // display correct/wrong message


}

function quizShowAnswer() {
  lkj("User wants to view Answer!");

  // Show answer to user 


}

function showNextQuestion() {
  lkj("Please show the next question");

  // get random question number
  let id = getRandomQuestionID();

  // fetch question and answer based on id
  question = getQuestion(id);
  // clear out the text in Question and replace tih new question
  replaceQuestion();

  // clear out options and populate the new options
  replaceOptions();

}

function getRandomQuestionID() {
  lkj("In getRandomQuestionID()");
  // get total no of questions

  // select random number from the total
}

function getQuestion(id) {
  lkj("In getQuestion(id)");

  let tempQuestion = {};

  // fetch values based on ID
  // get question


  // get answer


  return tempQuestion;
}

function replaceQuestion() {
  lkj("In replaceQuestion");
  // fetch parent element


  // replace innerText


}

function replaceOptions() {
  lkj("In replaceOptions");
  // fetch parent element


  // replace innerText


}

function addQuestion() {
  lkj("In addQuestion()");

  // fetch question, answers from text input


  // if text inputs are empty, then display error message


  // increment question count


  // Update localQB
  updateLocalQB();


}


function printQuestionBank() {
  lkj("Session Question Bank:");
  lkj(questionBank);
}

function printLocalQB() {
  lkj("local Question Bank:");
  lkj(localStorage.getItem(localQB));
}

function resetQuestionFields() {
  // fetch the input boxes

  // replace values in input boxes as ''
}
// FUNCTION - updateLocalStorage() is called when a value in currentTaskList changes and localStorage needs to be updated
function updateLocalQB() {
  localStorage.setItem('localQB', JSON.stringify(questionBank));
}