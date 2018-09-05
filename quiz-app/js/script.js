let questionBank;
// create localStorage item if it does not exist
if (localStorage.getItem('localQB') === null) {
  questionBank = [];
  lkj("No localQuestionBank value. Creating questionBank[]. ")
} else {
  questionBank = JSON.parse(localStorage.getItem('localQB'));
  lkj("localQuestionBank value exists. Values copied to questionBank[]. ")
}

// RESET LOCAL FOR TESTING PURPOSE
// localStorage.clear();

//! TODO: Check enter Keypress on questions field. It has to submit form on keypress

// declaring global variables
let questionID = questionBank.length;
let question = {};

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
  lkj("===== In showNextQuestion() =====");
  
  // get random question number
  let id = getRandomQuestionID();
  
  // fetch question and answer based on id
  question = getQuestion(id);
  lkj("Recieved Question:");
  lkj(question);

  // clear out the text in Question and replace tih new question
  replaceQuestion(question);
  
  // clear out options and populate the new options
  replaceOptions(question);
  lkj("===== End of showNextQuestion() =====");

}

function getRandomQuestionID() {
  lkj("\n\n  ===== In getRandomQuestionID() =====");
  // get total no of questions
  let qID = Math.floor(Math.random() * Math.floor(questionID));
  // select random number from the total
  lkj(`  - SUCCESS : ID Generated : ${qID} `);
  lkj(`  ===== End of getRandomQuestionID(). =====\n\n`);
  return qID;
}

function getQuestion(id) {
  lkj("\n\n  ===== In getQuestion(id) =====");
  
  let tempQuestion = questionBank[id];  
  
  lkj("  - SUCCESS : Selected question returned.");
  lkj("  ===== End of getQuestion(id). Selected question returned. =====\n\n");
  return tempQuestion;
}

function replaceQuestion(selectedQuestion) {
  lkj("\n\n  ===== In replaceQuestion() =====");
  // fetch parent element
  let currentQuestion = document.querySelector("#quiz-question");
  lkj("  - Current Question:");
  lkj(currentQuestion); 
  
  // replace innerText
  currentQuestion.innerText = selectedQuestion.que;
  
  lkj("  - SUCCESS : Question replaced successfully");
  lkj("  ===== End of replaceQuestion() =====\n\n");
}

function replaceOptions(selectedQuestion) {
  lkj("\n\n  ===== In replaceOptions() =====");

  let questionList = document.querySelector('#quiz-options');

  // Follow one order for odd and other order for even
  if(selectedQuestion.id % 2 == 0){
    lkj("    - ***************** Even order question");
    oddOptionOrder(questionList, selectedQuestion);
  }
  else{
    lkj("    - Odd order question");
    evenOptionOrder(questionList, selectedQuestion);    
  }
    
  lkj("  ===== End of replaceOptions() =====\n\n");
}

function oddOptionOrder(questionList, selectedQuestion){
  let div;
  div = createDivForQuestion(selectedQuestion, selectedQuestion.ans);
  questionList.appendChild(div);
  questionList.removeChild(questionList.children[0]);

  div = createDivForQuestion(selectedQuestion, selectedQuestion.wro);
  questionList.appendChild(div);
  questionList.removeChild(questionList.children[0]);
}

function evenOptionOrder(questionList, selectedQuestion){
  let div;
  div = createDivForQuestion(selectedQuestion, selectedQuestion.wro);
  questionList.appendChild(div);
  questionList.removeChild(questionList.children[0]);

  div = createDivForQuestion(selectedQuestion, selectedQuestion.ans);
  questionList.appendChild(div);
  questionList.removeChild(questionList.children[0]);
}

function createDivForQuestion(selectedQuestion, optionText){
  let questionList = document.querySelector('#quiz-options');
  // create div
  let div = document.createElement("div");
  div.className = 'form-check';
  
    // create label
    let label = document.createElement('label');
    label.setAttribute("class", "form-check-label");
    // lkj("Label:");
    // lkj(label);
    
    // create new input element
    let inputElement = document.createElement("input");
    inputElement.setAttribute("class", "form-check-input");
    inputElement.setAttribute("type", "radio");
    // lkj("Input Label:");
    // lkj(inputElement);
    
    // create text node
    let newText = document.createTextNode(optionText);
    // replacing innerText of original question
    questionList.children[0].innerText = newText;
    
    // append into div - lavel, text and input
    label.appendChild(inputElement);
    label.appendChild(newText);
    div.appendChild(label);

    return div;  
}

function wasEnterPressed(e) {
  lkj("In wasEnterPressed()");
  if (e.currentTarget.value != '' && e.keyCode == 13) {
    lkj('enter pressed. Value Added: ' + e.target.value);
    addQuestion(e);
  } else if (e.currentTarget.value == '' && e.keyCode == 13) {
    lkj('ERROR: enter pressed. NO VALUE ');
  }

}

function addQuestion(e) {
  lkj("\n\n===== QUESTION ADDITION PHASE =====");
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
  if (hasNoErrors) {
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
    resetQuestionFields();
  } else {
    lkj("ERROR - Something Field is Missing");
  }
  lkj("===== QUESTION ADDITION PHASE COMPLETE =====\n\n")
}

function getQuestionText(e) {
  lkj("In getQuestionText()");
  // getting question text
  let parentElement = e.currentTarget;
  let element = parentElement.querySelector("#question-box");
  let value = element.value;
  lkj("SUCCESS - Question Text Obtained")
  return value;
}

function getCorrectAnswerText(e) {
  lkj("In getCorrectAnswerText()");
  // getting question text
  let parentElement = e.currentTarget;
  let element = parentElement.querySelector("#correct-answer-box");
  let value = element.value;
  lkj("SUCCESS - Correct Answer Text Obtained")
  return value;
}

function getWrongAnswerText(e) {
  lkj("In getWrongAnswerText()");
  // getting question text
  let parentElement = e.currentTarget;
  let element = parentElement.querySelector("#wrong-answer-box");
  let value = element.value;
  lkj("SUCCESS - Wrong Answer Text Obtained");
  return value;
}

function canCreateQuestion(question, correctAns, wrongAns) {
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
  } else {
    lkj("SUCCESS - All Question Fields completed and no error raised");
  }
  return canWeDoThat;
}

function resetQuestionFields() {
  lkj("In resetQuestionFields()");
  // getting question text
  let parentElement = e.currentTarget;
  let element = parentElement.querySelector("#question-box");
  element.value = '';
  element = parentElement.querySelector("#correct-answer-box");
  element.value = '';
  element = parentElement.querySelector("#wrong-answer-box");
  element.value = '';
  lkj("SUCCESS - All Question Values cleared.")
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






































function lkj(val) {
  console.log(val);
}