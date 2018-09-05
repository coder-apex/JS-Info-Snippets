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
let populateButton = document.querySelector("#populate-kb");


// Add Event Listeners to the Elements
// EVENT - Detect click in Quiz and Question Section
addQuestionSection.addEventListener('click', whereWasTheClick);
quizSection.addEventListener('click', whereWasTheClick);
quizSection.addEventListener('keypress', wasEnterPressed);
quizSection.addEventListener('keypress', whereWasTheClick);
populateButton.addEventListener('click', populateQuiz);

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
  return;
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
  if (selectedQuestion.id % 2 == 0) {
    oddOptionOrder(questionList, selectedQuestion);
  } else {
    evenOptionOrder(questionList, selectedQuestion);
  }

  lkj("  ===== End of replaceOptions() =====\n\n");
}

function oddOptionOrder(questionList, selectedQuestion) {
  let div;
  let isRight = true;
  div = createDivForOption(selectedQuestion, selectedQuestion.ans, isRight);
  questionList.appendChild(div);
  questionList.removeChild(questionList.children[0]);

  isRight = false;
  div = createDivForOption(selectedQuestion, selectedQuestion.wro, isRight);
  questionList.appendChild(div);
  questionList.removeChild(questionList.children[0]);
}

function evenOptionOrder(questionList, selectedQuestion) {
  let div;
  let isRight = false;
  div = createDivForOption(selectedQuestion, selectedQuestion.wro, isRight);
  questionList.appendChild(div);
  questionList.removeChild(questionList.children[0]);

  isRight = true;
  div = createDivForOption(selectedQuestion, selectedQuestion.ans, isRight);
  questionList.appendChild(div);
  questionList.removeChild(questionList.children[0]);
}

function createDivForOption(selectedQuestion, optionText, isRight) {
  let questionList = document.querySelector('#quiz-options');
  // create div
  let div = document.createElement("div");
  div.className = 'form-check';

  // create label
  let label = document.createElement('label');
  label.setAttribute("class", "form-check-label");
  if (isRight) {
    label.setAttribute("correct", "yes");
  } else {
    label.setAttribute("correct", "no");
  }
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
  if (e.keyCode == 13) {
    lkj("Enter pressed");
  }
  if (e.target.value != '' && e.keyCode == 13) {
    lkj('enter pressed. Value Added: ' + e.target.value);
    // addQuestion(e);
  } else if (e.target.value == '' && e.keyCode == 13) {
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
  lkj("===== In resetQuestionFields() =====");
  // fetch the input boxes
  document.querySelector("#question-box").value = '';
  document.querySelector("#correct-answer-box").value = '';
  document.querySelector("#wrong-answer-box").value = '';

  displayQuestionMessage('Fields Reset');
  // replace values in input boxes as ''
  lkj("===== End of resetQuestionFields() =====");
}

function displayQuestionMessage(message) {
  message = '<h2>' + message + '</h2>';
  document.querySelector("#question-section-message").innerHTML = message;
  document.querySelector("#question-section-message").style.color = 'red';
}

// FUNCTION - updateLocalStorage() is called when a value in currentTaskList changes and localStorage needs to be updated
function updateLocalQB() {
  lkj("\n\n  ===== In updateLocalQB() =====");
  localStorage.setItem('localQB', JSON.stringify(questionBank));
  lkj("  ===== End of updateLocalQB() =====\n\n");
}

function populateQuiz() {
  questionBank = [{
      id: 1,
      que: 'As far as has ever been reported, no-one has ever seen an ostrich bury its head in the sand.',
      ans: 'True',
      wro: 'False'
    },
    {
      id: 2,
      que: 'Approximately one quarter of human bones are in the feet.',
      ans: 'True',
      wro: 'False'
    },
    {
      id: 3,
      que: 'Popeye’s nephews were called Peepeye, Poopeye, Pipeye and Pupeye.',
      ans: 'True',
      wro: 'False'
    },
    {
      id: 4,
      que: 'In ancient Rome, a special room called a vomitorium was available for diners to purge food in during meals.',
      ans: 'True',
      wro: 'False'
    },
    {
      id: 5,
      que: 'The average person will shed 10 pounds of skin during their lifetime.',
      ans: 'True',
      wro: 'False'
    },
    {
      id: 6,
      que: 'Sneezes regularly exceed 100 m.p.h.',
      ans: 'True',
      wro: 'False'
    },
    {
      id: 7,
      que: 'A slug’s blood is green.',
      ans: 'True',
      wro: 'False'
    },
    {
      id: 8,
      que: 'The Great Wall Of China is visible from the moon.',
      ans: 'True',
      wro: 'False'
    },
    {
      id: 9,
      que: 'Virtually all Las Vegas gambling casinos ensure that they have no clocks.',
      ans: 'True',
      wro: 'False'
    },
    {
      id: 10,
      que: 'The total surface area of two human lungs have a surface area of approximately 70 square metres.',
      ans: 'True',
      wro: 'False'
    }
  ];
  updateLocalQB;
}

















function lkj(val) {
  console.log(val);
}