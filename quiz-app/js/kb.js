// this file contains all question banks for the different topics such as HTML, CSS, JS etc

let kb = 100;

// define the topics which will be shown on the home page
let htmlTopics = ['Tags', 'Elements', 'Features'];
let cssTopics = ['CSS Basics', 'CSS Advanced', 'CSS Responsive', 'CSS Grid'];
let jsTopics = ['JS Tags', 'JS Elements', 'JS Features'];

// 3 question banks will be used
// localQB - stored on local storage
// originalQB - this is the original QB copied from local
// correctQB - this will contain questions which will be removed as they are answered
// test QB - as questions are answered  

let originalQB;
// create localStorage item if it does not exist
if (localStorage.getItem('localQB') === null) {
  originalQB = [];
  cl("No localQuestionBank value. Creating questionBank[]. ")
} else {
  questionBank = JSON.parse(localStorage.getItem('localQB'));
  cl("localQuestionBank value exists. Values copied to questionBank[]. ")
}




// TRACKING USER SESSION
let totalQuestions = 0;
let correctAnswers = 0;