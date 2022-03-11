let countDownTimer;
let timerInterval;
let arrayOfQuestions = [];
let gamescore = 0;
let highScores = [];
const timePenalty = 30;
const maxTime = 5 * 60; //time in seconds



function setCountDownTimer () {
    countDownTimer = maxTime;
    console.log("CountDownTimer: ", countDownTimer);
}
//When the person clicks the begin button, the timer starts
//Start time
function startTimer(){
    timerInterval = setInterval(updateTimer, 1000);
}
function updateTimer(){
    countDownTimer--;
    presentTimer();
}

function presentTimer(){
    let currentTime = document.getElementById('timer');
    currentTime.innerText = countDownTimer;
    console.log("presentTimer: currentTime ", currentTime);
}
function showScoreBoard(){
    let scoreBoard = document.getElementById('score-board');
    //scoreBoard.classList.toggle('hide',false);
    scoreBoard.classList.remove('hide');

}
function showScore(){
    let currentScore = document.getElementById('score');
    currentScore.innerText = gamescore;
    console.log("ShowScore: currentScore ", currentScore);
}
function hideGreeting(){
    let greeting = document.getElementById('greeting');
    console.log("hideGreeting: greeting", greeting);
    greeting.classList.add('hide');
}
//question is asked
function SetupQuestions(){
    let question1 = {
        id: "quest0",
        question: "To select elements with a specific class: ",
        answer1: "write a semicolon character, followed by the class name",
        answer2: "write a period character, followed by the class name",
        answer3: "write a period character",
        answer4: "write a comma character",
        correctAnswer: 2
    };
    let question2 = {
        id: "quest1",
        question: "In CSS, a color can be specified using a predefined color",
        answer1: "yes",
        answer2: "no",
        answer3: "null",
        answer4: "null",
        correctAnswer: 1
    }
    arrayOfQuestions.push(question1);
    arrayOfQuestions.push(question2);
    console.log("SetupQuestions arrayOfQuestions: ", arrayOfQuestions);
}

function nextQuestion (questionId){

    let found = false;
    for (let i = 0; i < arrayOfQuestions.length; i++) {
        if (questionId == arrayOfQuestions[i].id) {
            prepareQuestionAndAnswers(i);
        }
    }
}

function prepareQuestionAndAnswers (questionindex){
    let questionSection = document.getElementById('question');
    let newQuestion = document.createElement("div");
    newQuestion.id = arrayOfQuestions[questionindex].id;
    newQuestion.innerText = arrayOfQuestions[questionindex].question;
    questionSection.appendChild(newQuestion);
    newQuestion.classList.add('question');
    
    if(arrayOfQuestions[questionindex].answer1){
        let answer = document.createElement('div');
        let rdoBtn = document.createElement('input');
        let label = document.createElement('label');
        
        rdoBtn.id = `${arrayOfQuestions[questionindex].id}_answer1`;
        rdoBtn.setAttribute('type','radio');
        rdoBtn.value = 1;
        rdoBtn.classList.add('answer');
        rdoBtn.classList.add('answer') = arrayOfQuestions[questionindex].id;
        rdoBtn.name = arrayOfQuestions[questionindex].id;
        
        label.innerText = arrayOfQuestions[questionindex].answer1;
        label.setAttribute('for',`${rdoBtn.id}`);


        answer.innerText = arrayOfQuestions[questionindex].answer1;
        answer.classList.add('answer');
        answer.id= `${arrayOfQuestions[questionindex].id}_answer1`;
        questionSection.appendChild(answer);
    }
    if(arrayOfQuestions[questionindex].answer2){
        let answer = document.createElement('div');
        answer.innerText = arrayOfQuestions[questionindex].answer2;
        answer.classList.add('answer');
        answer.id= `${arrayOfQuestions[questionindex].id}_answer2`;
        questionSection.appendChild(answer);
    }
}
function doGame(){
    setCountDownTimer();
    startTimer();
    hideGreeting();
    showScoreBoard();
    presentTimer();
    showScore();
    prepareQuestionAndAnswers(i);
}