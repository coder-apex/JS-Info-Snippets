// this file contains all question banks for the different topics such as HTML, CSS, JS etc

// define the topics which will be shown on the home page
let htmlTopics = ['Tags', 'Elements', 'Features'];
let cssTopics = ['CSS Basics', 'CSS Advanced', 'CSS Responsive', 'CSS Grid'];
let jsTopics = ['JS Tags', 'JS Elements', 'JS Features'];

// localQB - stored on local storage
// mainQB - it is set as an object whose keys match questionBankID's
// originalQB - this is the original QB copied from local or being set to local if user is setting questions
//     - as each question is answered, if the answer is correct or false they are sent to the corretQB and wrong QB respectively.
// correctQB - this will contain questions which will be removed as they are answered
// wrongQB - as questions are answered wrong questions are added to this  

let originalQB;
// create localStorage item if it does not exist
if (localStorage.getItem('localQB') === null) {
  originalQB = [];
  cl("No localQuestionBank value. Creating questionBank[]. ")
} else {
  originalQB = JSON.parse(localStorage.getItem('localQB'));
  cl("localQB value exists. Values copied to originalQB[]. ")
}





function setLocalQB() {
  cl("\n\n  ===== In setLocalQB() =====");
  localStorage.setItem('localQB', JSON.stringify(questionBank));
  cl("  ===== End of setLocalQB() =====\n\n");
}






// load the correct question bank when user requires
function loadCorrectQB(quizCategoryTopicID) {
  cl('\n\n  ===  In loadCorrectQB(quizCategoryTopicID) ===');

  cl(quizCategoryTopicID);
  let categoryString = quizCategoryTopicID.toString();

  //! Tried to load by matching quizCategoryTopicID to variable 











  cl('  ===  Exiting loadCorrectQB(quizCategoryTopicID) ===\n\n');
}










// TRACKING USER SESSION
let totalQuestions = 0;
let correctAnswers = 0;





































// SETTING THE QUESTION BANKS
let html1 = [{
    qID: 0,
    que: 'HTML1 - Q0',
    ans: 'HTML1 - A0',
    opt: ['O1', 'O2', 'O3', 'O4'],
    correct: false
  },
  {
    qID: 1,
    que: 'HTML1 - Q1',
    ans: 'HTML1 - A1',
    opt: ['O1', 'O2', 'O3', 'O4'],
    correct: false
  },
  {
    qID: 2,
    que: 'HTML1 - Q2',
    ans: 'HTML1 - A2',
    opt: ['O1', 'O2', 'O3', 'O4'],
    correct: false
  },
  {
    qID: 3,
    que: 'HTML1 - Q3',
    ans: 'HTML1 - A3',
    opt: ['O1', 'O2', 'O3', 'O4'],
    correct: false
  },
  {
    qID: 4,
    que: 'HTML1 - Q4',
    ans: 'HTML1 - A4',
    opt: ['O1', 'O2', 'O3', 'O4'],
    correct: false
  },
  {
    qID: 5,
    que: 'HTML1 - Q5',
    ans: 'HTML1 - A5',
    opt: ['O1', 'O2', 'O3', 'O4'],
    correct: false
  },
  {
    qID: 6,
    que: 'HTML1 - Q6',
    ans: 'HTML1 - A6',
    opt: ['O1', 'O2', 'O3', 'O4'],
    correct: false
  },
  {
    qID: 7,
    que: 'HTML1 - Q7',
    ans: 'HTML1 - A7',
    opt: ['O1', 'O2', 'O3', 'O4'],
    correct: false
  },
  {
    qID: 8,
    que: 'HTML1 - Q8',
    ans: 'HTML1 - A8',
    opt: ['O1', 'O2', 'O3', 'O4'],
    correct: false
  },
  {
    qID: 9,
    que: 'HTML1 - Q9',
    ans: 'HTML1 - A9',
    opt: ['O1', 'O2', 'O3', 'O4'],
    correct: false
  }
];

let mainQB = {
  html1: [{
      qID: 0,
      que: 'HTML1 - Q0',
      ans: 'HTML1 - A0',
      opt: ['O1', 'O2', 'O3', 'O4'],
      correct: false
    },
    {
      qID: 1,
      que: 'HTML1 - Q1',
      ans: 'HTML1 - A1',
      opt: ['O1', 'O2', 'O3', 'O4'],
      correct: false
    },
    {
      qID: 2,
      que: 'HTML1 - Q2',
      ans: 'HTML1 - A2',
      opt: ['O1', 'O2', 'O3', 'O4'],
      correct: false
    },
    {
      qID: 3,
      que: 'HTML1 - Q3',
      ans: 'HTML1 - A3',
      opt: ['O1', 'O2', 'O3', 'O4'],
      correct: false
    },
    {
      qID: 4,
      que: 'HTML1 - Q4',
      ans: 'HTML1 - A4',
      opt: ['O1', 'O2', 'O3', 'O4'],
      correct: false
    },
    {
      qID: 5,
      que: 'HTML1 - Q5',
      ans: 'HTML1 - A5',
      opt: ['O1', 'O2', 'O3', 'O4'],
      correct: false
    },
    {
      qID: 6,
      que: 'HTML1 - Q6',
      ans: 'HTML1 - A6',
      opt: ['O1', 'O2', 'O3', 'O4'],
      correct: false
    },
    {
      qID: 7,
      que: 'HTML1 - Q7',
      ans: 'HTML1 - A7',
      opt: ['O1', 'O2', 'O3', 'O4'],
      correct: false
    },
    {
      qID: 8,
      que: 'HTML1 - Q8',
      ans: 'HTML1 - A8',
      opt: ['O1', 'O2', 'O3', 'O4'],
      correct: false
    },
    {
      qID: 9,
      que: 'HTML1 - Q9',
      ans: 'HTML1 - A9',
      opt: ['O1', 'O2', 'O3', 'O4'],
      correct: false
    }
  ]
};