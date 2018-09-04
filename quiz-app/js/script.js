// RESET LOCAL FOR TESTING PURPOSE
localStorage.clear();

//TODO: Check enter Keypress on questions field

function lkj(val) {
  console.log(val);
}

// declaring global variables
let questionBank = [];
let questionID = 1;
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
quizSection.addEventListener('keypress', wasEnterPressed);

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
      wasEnterPressed(e);
      break;
    case 'correct-answer-box':
      lkj('Correct Answer Box Clicked');
      wasEnterPressed(e);
      break;
    case 'wrong-answer-box':
      lkj('Wrong Answer Box Clicked');
      wasEnterPressed(e);
      break;
    case 'add-question':
      lkj('Add Question Button Clicked');
      addQuestion(e);
      break;
    case 'reset-question':
      lkj('Reset Question Button Clicked');
      resetQuestionFields();
      break;
  }
}


function quizSubmitAnswer() {
  lkj("In quizSubmitAnswer()");

  // Check if answer is correct


  // display correct/wrong message


}

function quizShowAnswer() {
  lkj("In quizShowAnswer()");

  // Show answer to user 


}

function showNextQuestion() {
  lkj("In showNextQuestion()");

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
  lkj("In replaceQuestion()");
  // fetch parent element


  // replace innerText


}

function replaceOptions() {
  lkj("In replaceOptions()");
  // fetch parent element


  // replace innerText


}

function wasEnterPressed(e){
  lkj("In wasEnterPressed()");
    if (e.currentTarget.value != '' && e.keyCode == 13) {
    lkj('enter pressed. Value Added: ' + e.target.value);
    addQuestion(e);
  } else if (e.currentTarget.value == '' && e.keyCode == 13) {
    lkj('ERROR: enter pressed. NO VALUE ');
  }

}

function addQuestion(e) {
  lkj("In addQuestion()");
  // lkj(e.currentTarget);

    let questionText = getQuestionText(e);
  lkj("Question text: " + questionText);
  
  let correctAnswerText = getCorrectAnswerText(e);
  lkj("Correct Answer text: " + correctAnswerText);
  
  let wrongAnswerText = getWrongAnswerText(e);
  lkj("Wrong Answer text: " + wrongAnswerText);
  
  // return false if any values are empty
  let hasNoErrors = canCreateQuestion(questionText, correctAnswerText, wrongAnswerText);

  // save values only if no error
  if(hasNoErrors){
  // save received values to the question object
  question = {};
  question.id = questionID;
  question.que = questionText;
  question.ans = correctAnswerText;
  question.wro = wrongAnswerText;

  printQuestion();

  questionBank.push(question);
  printQuestionBank();

  // increment question count
  questionID++;
  // Update localQB
  updateLocalQB();
  }
  else{
    lkj("Something Missing");
  }

}

function getQuestionText(e) {
  lkj("In getQuestionText()");
  // getting question text
  let parentElement = e.currentTarget;
  let element = parentElement.querySelector("#question-box");
  let value = element.value;

  return value;
}

function getCorrectAnswerText(e) {
  lkj("In getCorrectAnswerText()");
  // getting question text
  let parentElement = e.currentTarget;
  let element = parentElement.querySelector("#correct-answer-box");
  let value = element.value;

  return value;
}

function getWrongAnswerText(e) {
  lkj("In getWrongAnswerText()");
  // getting question text
  let parentElement = e.currentTarget;
  let element = parentElement.querySelector("#wrong-answer-box");
  let value = element.value;

  return value;
}

function canCreateQuestion(question, correctAns, wrongAns){
    // if any of the fields are empty, then display error message
    let canWeDoThat = true;
    if (question == '') {
      lkj("ERROR : Question Missing");
      alert('Oops! You have no Question, mate!\nERROR - Question field empth');
      canWeDoThat = false;
    } else if (correctAns == '') {
      lkj("ERROR : Correct Answer Missing");
      alert("This question don't have no right answer?\nERROR - Correct Answer field empth");
      canWeDoThat = false;
    } else if (wrongAns == '') {
      lkj("ERROR : Wrong Answer Missing");
      alert('Not everything is right. Please enter a wrong answer!\nERROR - Wrong Answer field empth');
      canWeDoThat = false;
    }

    return canWeDoThat; 
}

function printQuestionBank() {
  lkj("Session Question Bank:");
  lkj(questionBank);
}

function printQuestion() {
  lkj("Current Question:");
  lkj(question);
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
  lkj("In updateLocalQB()");
  localStorage.setItem('localQB', JSON.stringify(questionBank));
}