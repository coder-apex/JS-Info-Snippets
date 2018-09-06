//* CHOOSE QUIZ SECTION
let chooseQuizSection = document.querySelector('#choose-quiz-section');

// detect click on quiz category buttons
chooseQuizSection.addEventListener('click', chooseQuizCategory);

function chooseQuizCategory(e) {
  cl('\n\n=== Entering chooseQuizCategory() ===');
  cl('- Element clicked on : e.target.id');
  cl(e.target.id);

  // when button is clicked create the row to show topics in selected category
  cl('- Calling createQuizTopicRow() to create row');
  createQuizTopicRow();

  // detecting which button the click was on - HTML, CSS or JS
  let topicButtonClass = ''; //! this class will be added to the topic buttons
  switch (e.target.id) {
    case 'html-quiz-category':
      cl('- HTML Button Clicked');
      createQuizTopicButtons(htmlTopics, 'btn-danger');
      break;
    case 'css-quiz-category':
      cl('- CSS Button Clicked');
      createQuizTopicButtons(cssTopics, 'btn-success');
      break;
    case 'js-quiz-category':
      cl('- JS Button Clicked');
      createQuizTopicButtons(jsTopics, 'btn-warning');
      break;
  }



  cl('=== Exiting chooseQuizCategory() ===\n\n');
}

function createQuizTopicRow() {
  cl('\n\n  === in createQuizTopicRow() ===');
  let quizTopicRow = document.createElement('div');
  quizTopicRow.className = "row";
  quizTopicRow.id = "quiz-topic";
  cl('  - quizTopicRow created');

  let col = document.createElement('div');
  col.className = 'col';
  cl('  - column created');

  quizTopicRow.appendChild(col);
  cl('  - column inserted into quizTopicRow');
  cl(quizTopicRow);
  cl('  === Exiting createQuizTopicRow() ===\n\n');
}

function createQuizTopicButtons(topicArray, buttonColor){

  // fetch no of topics in quiz category
  cl('\n\n  === in createQuizTopicButtons() ===');
  let noOfTopics = htmlTopics.length;
  cl("- No of topics in subject : " + noOfTopics);
  cl(htmlTopics);

  // fetch quiz-topic row where the buttons will be created
  let quizTopicCol = document.querySelector('#quiz-topic').children[0];
  cl('  - quizTopicCol fetched');
  cl(quizTopicCol);

  // clear current buttons before inserting new buttons
  quizTopicCol.innerHTML = '';

  // create and insert no of buttons based on array length and content of array
  for (let buttonNo = 0; buttonNo < topicArray.length; buttonNo++) {

    cl('Creating button no ' + buttonNo + ' for topic : ' + topicArray[buttonNo]);
    let currentButton = document.createElement('button');

    // <button type="button" class="btn btn-pad btn-secondary btn-md js-quiz-topic" id="js-quiz-basics">JS</button>

    currentButton.setAttribute('type', 'button');
    currentButton.classList = 'btn btn-pad btn-secondary btn-md ' + buttonColor;
    
    // create text node with topic name
    let topicText = document.createTextNode(topicArray[buttonNo]);

    // insert the text node into the button element
    currentButton.appendChild(topicText);

    cl(currentButton);
    quizTopicCol.appendChild(currentButton);
    cl('  - SUCCESS : Button inserted in DOM');
  }

  cl('  === leaving createQuizTopicButtons() ===\n\n');
}










































// FUNCTION - shortcut for console logs. cause i am lazy to type console.log
function cl(val) {
  console.log(val);
}