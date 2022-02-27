var countDownTimer;
var timerInterval;
var arrayOfQuestions = [];
const maxTime = 5 * 60 * 1000; //time in seconds
function setCountDownTimer () {
    countDownTimer = maxTime;
}
//When the person clicks the begin button, the timer starts
//Start time
timerInterval = setInterval(updateTimer, 1000)
function updateTimer(){
    countDownTimer = countDownTimer - 1;
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

function nextQuestion (){
    for (let i = 0; i < arrayOfQuestions.length; i++) {

    }
}

function showQuestion (questionindex){
    let questionSection = document.getElementById('question');
    let newQuestion = document.createElement("div");
    newQuestion.id = arrayOfQuestions[questionindex].id;
    newQuestion.innerText = arrayOfQuestions[questionindex].question;
    questionSection.appendChild();
    questionSection.append()
}