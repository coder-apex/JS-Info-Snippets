
//* "CHOOSE QUIZ" SECTION
let chooseQuizSection = document.querySelector('#choose-quiz-section');

// detect click on quiz category buttons
chooseQuizSection.addEventListener('click', chooseQuizCategory);

function chooseQuizCategory(e) {
  //--clkj('\n\n=== Entering chooseQuizCategory() ===');
  //--clkj('- Element clicked on : e.target.id');
  //--clkj(e.target.id);

  // when button is clicked create the row to show topics in selected category
  //--clkj('- Calling createQuizTopicRow() to create row');
  createQuizTopicRow();

  // detecting which button the click was on - HTML, CSS or JS
  switch (e.target.id) {
    case 'html-quiz-category':
      //--clkj('- HTML Button Clicked');
      createQuizTopicButtons(htmlTopics, 'btn-danger');
      break;
    case 'css-quiz-category':
      //--clkj('- CSS Button Clicked');
      createQuizTopicButtons(cssTopics, 'btn-success');
      break;
    case 'js-quiz-category':
      //--clkj('- JS Button Clicked');
      createQuizTopicButtons(jsTopics, 'btn-warning');
      break;
  }
  //--clkj('=== Exiting chooseQuizCategory() ===\n');
}

function createQuizTopicRow() {
  //--clkj('\n  === in createQuizTopicRow() ===');
  let quizTopicRow = document.createElement('div');
  quizTopicRow.className = "row";
  quizTopicRow.id = "quiz-topic";
  //--clkj('  - quizTopicRow created');

  let col = document.createElement('div');
  col.className = 'col';
  //--clkj('  - column created');

  quizTopicRow.appendChild(col);
  //--clkj('  - column inserted into quizTopicRow');
  //--clkj(quizTopicRow);
  //--clkj('  === Exiting createQuizTopicRow() ===\n');
}

function createQuizTopicButtons(topicArray, buttonColor) {

  // fetch no of topics in quiz category
  //--clkj('\n  === in createQuizTopicButtons() ===');
  let noOfTopics = htmlTopics.length;
  //--clkj("- No of topics in subject : " + noOfTopics);
  //--clkj(htmlTopics);

  // fetch quiz-topic row where the buttons will be created
  let quizTopicCol = document.querySelector('#quiz-topic').children[0];
  //--clkj('  - quizTopicCol fetched');
  //--clkj(quizTopicCol);

  // clear current buttons before inserting new buttons
  quizTopicCol.innerHTML = '';

  // create and insert no of buttons based on array length and content of array
  for (let buttonNo = 0; buttonNo < topicArray.length; buttonNo++) {

    //--clkj('Creating button no ' + buttonNo + ' for topic : ' + topicArray[buttonNo]);
    let currentButton = document.createElement('button');

    // <button type="button" class="btn btn-pad btn-secondary btn-md js-quiz-topic" id="js-quiz-basics">JS</button>

    currentButton.setAttribute('type', 'button');
    currentButton.classList = 'btn btn-pad btn-secondary btn-md ' + buttonColor;
    // currentButton.setAttribute('onclick',"event.stopPropagation()");

    // create text node with topic name
    let topicText = document.createTextNode(topicArray[buttonNo]);
    let topicTextValue = topicArray[buttonNo];
    // clkj('Topic Text Value : ' + topicTextValue);

    // adding page redirection addresses depending on the button text
    switch(topicTextValue){
      case 'Tags':
        currentButton.setAttribute('onclick', "location.href = '/quiz-app/html-quiz/html-tags.html';");
        break;
    }
    // onclick="location.href = 'www.yoursite.com';"

    // insert the text node into the button element
    currentButton.appendChild(topicText);

    //--clkj(currentButton);
    quizTopicCol.appendChild(currentButton);
    //--clkj('  - SUCCESS : Button inserted in DOM');
  }
  //--clkj('  === leaving createQuizTopicButtons() ===\n');
}

//* "CHOOSE QUIZ TOPIC" SECTION
let chooseQuizTopicSection = document.querySelector('#quiz-topic');

chooseQuizTopicSection.addEventListener('click', chooseQuizTopic);

// quizCategoryTopicID is used to load the appropriate QB based on quiz topic button clicked
let quizCategoryTopicID;

function chooseQuizTopic(e) {
  //--clkj('\n\n=== in chooseQuizTopic() ===');

  let button = e.target;
  //--clkj('Button cicked is : ');
  //--clkj(button);

  // get text written on the button
  let buttonText = button.innerText;
  //--clkj('Button text is : ');
  //--clkj(buttonText);

  // after setting the ID we will load the correct QB
  clkj(quizCategoryTopicID);
  // clkj('- Calling loadCorrectQB(quizCategoryTopicID)');
  // loadCorrectQB(quizCategoryTopicID);

  //--clkj('=== in chooseQuizTopic() ===\n');
}
