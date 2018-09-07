// FUNCTION - shortcut for console logs. cause i am lazy to type console.log
function clkj(val) {
  console.log(val);
}

// setting variables used per quiz
let x = [100, "string", 50];
let userName = '';
let questionBank = {};
let totalQuestions = '';
let answeredCorrect = '';
let answeredWrong = '';
let getUserNameHeadings;
let getUserNameText;
let welcomeNewUserHeading;

quiz();

function quiz() {
  //! Clearing local storage for testing purposes
  localStorage.clear();
  
  //* Declare the data (like heading text, description text etc) before calling any other functions
  createEssentials();

  //* VALIDATE USER
  // fetch user name from local storage
  let doesUserNameExist = false;
  doesUserNameExist = getUserNameFromLocal(doesUserNameExist);


  // if user name does not exist, get user name
  if (doesUserNameExist == false) {
    askUserNameScreen();
  }
  else {
    beginQuizWelcomeScreen();
  }

  //TODO: if user name exists, confirm user is same or wants to change name

  //* BEGIN QUIZ















}

function getUserNameFromLocal(doesUserNameExist) {
  clkj("\n  === In getUserName() ===");

  if (localStorage.getItem('localUserName') === null) {
    userName = [];
    localStorage.setItem("localUserName", userName);
    clkj("  FAIL - User name does not exist in local. Please create user name!");
  } else {
    userName = JSON.parse(localStorage.getItem('localUserName'));
    clkj("  SUCCESS - User name exists in local. \n  Value copied : " + userName);
    doesUserNameExist = true;
  }
  clkj("  === Exiting getUserName() ===\n");
  return doesUserNameExist;
}

function askUserNameScreen() {
  clkj("\n  === In askUserNameScreen() ===");

  // creating new heading to get users name
  let newHeading = getRandomText(getUserNameHeadings);
  createQuizHeading(newHeading);
  clkj("  - Created Ask User Name Heading");
  
  // creating new descriptive text to ask user to enter their name
  let newDescription = getRandomText(getUserNameText);
  createQuizText(newDescription);
  clkj("  - Created Ask User Name Description");
  
  let nameInputSection = document.querySelector('#quiz-section-text');
  createGetUserNameForm();
  clkj("  - Created getUserNameForm");

  clkj("  === Exiting askUserNameScreen() ===\n");
}

function beginQuizWelcomeScreen(){
  clkj("\n      === In beginQuizWelcomeScreen() ==="); 

  userName = document.querySelector('#getUserNameInputField').value;

  saveToLocal(userName, "localUserName");
  
  // creating new heading to get users name
  let newHeading = getRandomText(welcomeNewUserHeading) + " to Quizzacious, " + userName;
  // let newHeading = getRandomText(welcomeNewUserHeading) + "Welcome to Quizzacious, " + userName;
  createQuizHeading(newHeading);

  // creating new descriptive text to ask user to enter their name
  let newDescription = 'Are you ready to begin with the quiz?';
  createQuizText(newDescription);

  let beginQuizButton = document.querySelector('#quiz-section-text');
  beginQuizButton.innerHTML = `
  <button type="button" class="btn btn-success" onclick="beginQuiz()">Let's Begin</button>
  <button type="button" class="btn btn-success" onclick="askUserNameScreen()">I'm not ` + userName + `</button>`;

  clkj("      === In beginQuizWelcomeScreen() ===\n");
}

function createGetUserNameForm() {
  clkj("\n    === In createGetUserNameForm() ===");

  let getUserNameForm = `<form><div class="form-group"><input type="text" class="form-control" id="getUserNameInputField" placeholder="My name is..."></div><button type="submit" id="getUserNameFormSubmitBox" class="btn btn-primary" onclick="beginQuizWelcomeScreen()">Submit</button></form>`;

  // printing the form on the quiz-section-text HTML section 
  document.querySelector('#quiz-section-text').innerHTML = getUserNameForm;
  clkj('    SUCCESS : Form Created');

  // prevent default behavour of redirect when click button is clicked
  document.querySelector('#getUserNameFormSubmitBox').addEventListener("click", function (event) {
    event.preventDefault();
  });

  clkj("    === Exiting createGetUserNameForm() ===\n");
}

function getRandomText(fromWhere) {
  clkj("\n    === In getRandomText() ===");

  clkj("    Current fromWhere : ");
  clkj(fromWhere);

  clkj("    Length : " + fromWhere.length);
  let randomPostion = Math.floor((Math.random() * fromWhere.length));
  clkj("    Random postion : " + randomPostion);

  clkj("    Selected text : " + fromWhere[randomPostion]);

  clkj("    === Exiting getRandomText() ===\n");
  return fromWhere[randomPostion];
}

function createQuizHeading(newText) {
  clkj("\n    === In createQuizHeading() ===");

  // get new heading
  let quizHeading = document.querySelector('#quiz-section-heading');
  clkj("    Old Text Heading : " + quizHeading.innerHTML);

  // replace new heading with the newText
  quizHeading.innerHTML = '<h2>' + newText + '<\h2>';
  clkj("    New Text Heading : " + quizHeading.innerHTML);

  clkj("    === Exiting createQuizHeading() ===\n");
}

function createQuizText(newText) {
  clkj("\n    === In createQuizText() ===");

  // get new heading
  let quizText = document.querySelector('#quiz-section-description');
  clkj("    Old Text : " + quizText.innerHTML);

  // replace new heading with the newText
  quizText.innerHTML = '<p class="lead">' + newText + '</p>';
  clkj("    New Text : " + quizText.innerHTML);

  clkj("    === Exiting createQuizText() ===\n");

}

function createQuizDescriptionText(newText) {
  clkj("\n    === In createQuizDescriptionText() ===");

  // get new heading
  let quizDescriptionText = document.querySelector('#quiz-section-text');
  clkj("    Old Text : " + quizText.innerHTML);

  // replace new heading with the newText
  quizDescriptionText.innerHTML = '<p class="lead">' + newText + '</p>';
  clkj("    New Text : " + quizText.innerHTML);

  clkj("    === Exiting createQuizDescriptionText() ===\n");
}

function createQuizOptions(options) {

}

// use function to save data to local
// saveToLocal(userName, 'localUserName') - will save the value in userName to variable named 'localUserName' in local
function saveToLocal(programData, localStorageString) {

  clkj("\n  ===== In setToLocal() =====");

  switch(localStorageString){
    case 'localTest':
    clkj('  ' + localStorageString + ' Case Activated');
    localStorage.setItem('localTest', JSON.stringify(programData));
    break;
    case 'localUserName':
    clkj('  ' + localStorageString + ' Case Activated');
    localStorage.setItem('localUserName', JSON.stringify(programData));
    break;
  }
  
  clkj("  ===== End of setToLocal() =====\n");
}




function createEssentials(){
getUserNameHeadings = ["'I'm sorry, I didnt't get your name", "What be thy name?", "What do they call you?", "Please enter your name", "कृपया अपना नाम बताओ। <br>(Hindi - Please tell me your name)", "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹೆಸರನ್ನು ಹೇಳಿ <br>(Kannada - Please tell me your name)", "¿Cómo se llama Usted? <br>(Spanish - What is your name?)", " 	Vad heter du? <br>(Swedish - What is your name)", "Wie heissen Sie? <br>(German - What is your name)", "Wat is uw naam? <br>(Dutch - What is your name)", "你叫什麼名字？ <br>(Mandrin - Please tell me your name)", ];

getUserNameText = ["We don't seem to have met before. Could you enter your name in the box below, please", "Hi, I'm Quizzacious. My owner doesn't seem to have a stron imagination and has given me such a boring name. <br>What do I call you today?", "You see the box below, right?<br>Put your name below; and tap that ass! Oops, I mean tap that 'butt'on.", "I seem to have lost my keys. And your name with it. <br>Can you help me out here and type in your name below while I look for my keys, please?", "I'm so stoked to meet ya, mate. <br>* shakes your hand *<br>I'm sorry, I didn't catch that. What's your name again?"];

welcomeNewUserHeading = ["(French) Bienvenue ", "(German) Willkommen ", "(Kannada - susvāgata) ಸುಸ್ವಾಗತ ", "(Somali) Soo dhowow ", "(Tongan) Talitali fiefia ", "(Uzbek)  	Xush kelibsiz ", "(Bislama) Welkam ", "(Papiamento)	Bon bini"];
}


































// //* "CHOOSE QUIZ" SECTION
// let chooseQuizSection = document.querySelector('#choose-quiz-section');

// // detect click on quiz category buttons
// chooseQuizSection.addEventListener('click', chooseQuizCategory);

// function chooseQuizCategory(e) {
//   //--cl('\n\n=== Entering chooseQuizCategory() ===');
//   //--cl('- Element clicked on : e.target.id');
//   //--cl(e.target.id);

//   // when button is clicked create the row to show topics in selected category
//   //--cl('- Calling createQuizTopicRow() to create row');
//   createQuizTopicRow();

//   // detecting which button the click was on - HTML, CSS or JS
//   switch (e.target.id) {
//     case 'html-quiz-category':
//       //--cl('- HTML Button Clicked');
//       createQuizTopicButtons(htmlTopics, 'btn-danger');
//       break;
//     case 'css-quiz-category':
//       //--cl('- CSS Button Clicked');
//       createQuizTopicButtons(cssTopics, 'btn-success');
//       break;
//     case 'js-quiz-category':
//       //--cl('- JS Button Clicked');
//       createQuizTopicButtons(jsTopics, 'btn-warning');
//       break;
//   }
//   //--cl('=== Exiting chooseQuizCategory() ===\n');
// }

// function createQuizTopicRow() {
//   //--cl('\n  === in createQuizTopicRow() ===');
//   let quizTopicRow = document.createElement('div');
//   quizTopicRow.className = "row";
//   quizTopicRow.id = "quiz-topic";
//   //--cl('  - quizTopicRow created');

//   let col = document.createElement('div');
//   col.className = 'col';
//   //--cl('  - column created');

//   quizTopicRow.appendChild(col);
//   //--cl('  - column inserted into quizTopicRow');
//   //--cl(quizTopicRow);
//   //--cl('  === Exiting createQuizTopicRow() ===\n');
// }

// function createQuizTopicButtons(topicArray, buttonColor) {

//   // fetch no of topics in quiz category
//   //--cl('\n  === in createQuizTopicButtons() ===');
//   let noOfTopics = htmlTopics.length;
//   //--cl("- No of topics in subject : " + noOfTopics);
//   //--cl(htmlTopics);

//   // fetch quiz-topic row where the buttons will be created
//   let quizTopicCol = document.querySelector('#quiz-topic').children[0];
//   //--cl('  - quizTopicCol fetched');
//   //--cl(quizTopicCol);

//   // clear current buttons before inserting new buttons
//   quizTopicCol.innerHTML = '';

//   // create and insert no of buttons based on array length and content of array
//   for (let buttonNo = 0; buttonNo < topicArray.length; buttonNo++) {

//     //--cl('Creating button no ' + buttonNo + ' for topic : ' + topicArray[buttonNo]);
//     let currentButton = document.createElement('button');

//     // <button type="button" class="btn btn-pad btn-secondary btn-md js-quiz-topic" id="js-quiz-basics">JS</button>

//     currentButton.setAttribute('type', 'button');
//     currentButton.classList = 'btn btn-pad btn-secondary btn-md ' + buttonColor;
//     // currentButton.setAttribute('onclick',"event.stopPropagation()");

//     // create text node with topic name
//     let topicText = document.createTextNode(topicArray[buttonNo]);

//     // insert the text node into the button element
//     currentButton.appendChild(topicText);

//     //--cl(currentButton);
//     quizTopicCol.appendChild(currentButton);
//     //--cl('  - SUCCESS : Button inserted in DOM');
//   }

//   //--cl('  === leaving createQuizTopicButtons() ===\n');
// }

// //* "CHOOSE QUIZ TOPIC" SECTION
// let chooseQuizTopicSection = document.querySelector('#quiz-topic');

// chooseQuizTopicSection.addEventListener('click', chooseQuizTopic);

// // quizCategoryTopicID is used to load the appropriate QB based on quiz topic button clicked
// let quizCategoryTopicID;

// function chooseQuizTopic(e) {
//   //--cl('\n\n=== in chooseQuizTopic() ===');

//   let button = e.target;
//   //--cl('Button cicked is : ');
//   //--cl(button);

//   // get text written on the button
//   let buttonText = button.innerText;
//   //--cl('Button text is : ');
//   //--cl(buttonText);

//   // set quizCategoryTopicID based on the text of the button
//   setQuizCategoryTopicID(buttonText);

//   // after setting the ID we will load the correct QB
//   cl(quizCategoryTopicID);
//   cl('- Calling loadCorrectQB(quizCategoryTopicID)');
//   loadCorrectQB(quizCategoryTopicID);

//   //--cl('=== in chooseQuizTopic() ===\n');
// }

// function setQuizCategoryTopicID(buttonText) {
//   switch (buttonText) {
//     case 'Tags':
//       quizCategoryTopicID = 'html1';
//       cl('HTML1 Success;');
//       return quizCategoryTopicID;
//       break;
//     case 'Elements':
//       quizCategoryTopicID = 'html2';
//       return quizCategoryTopicID;
//       break;
//     case 'Features':
//       quizCategoryTopicID = 'html3';
//       return quizCategoryTopicID;
//       break;
//     case 'CSS Basics':
//       quizCategoryTopicID = 'css1';
//       return quizCategoryTopicID;
//       break;
//     case 'CSS Advanced':
//       quizCategoryTopicID = 'css2';
//       return quizCategoryTopicID;
//       break;
//     case 'CSS Responsive':
//       quizCategoryTopicID = 'css3';
//       return quizCategoryTopicID;
//       break;
//     case 'CSS Grid':
//       quizCategoryTopicID = 'css4';
//       return quizCategoryTopicID;
//       break;
//     case 'JS Tags':
//       quizCategoryTopicID = 'js1';
//       return quizCategoryTopicID;
//       break;
//     case 'JS Elements':
//       quizCategoryTopicID = 'js2';
//       return quizCategoryTopicID;
//       break;
//     case 'JS Features':
//       quizCategoryTopicID = 'js3';
//       return quizCategoryTopicID;
//       break;
//   }
//   //--cl('quizCategoryTopicID : ' + quizCategoryTopicID);
// }