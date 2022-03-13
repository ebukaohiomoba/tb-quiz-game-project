let timerKey = 'timer';
let maxTime = 1000 * 60 * 5; //4 minutes
let timerInterval;
let wrongAnswerPenalty = 1000 * 45; //45 seconds
let myScore = 0;
let myScoreKey = 'score';
let questIdPrefix = 'quest';
let highScores = [];
let highScoreKey = 'high-score;'


function setUpTimer() {
    //clear the timer from localstorage
    localStorage.removeItem(timerKey);
    //set timer in local storage to maxTime
    localStorage.setItem(timerKey, `${maxTime}`);
    console.log("setUpTimer timerKey ", timerKey);
    console.log("setUpTimer maxTime ", maxTime);
}

//When the person clicks the begin button, the timer starts
//Start time
function startTimer() {
    timerInterval = setInterval(showTimer, 1000, timerKey);
    console.log("startTimer");
}

function setUpScore() {
    //clear the score from localstorage
    localStorage.removeItem(myScoreKey);
    //set score in local storage to 0
    localStorage.setItem(myScoreKey, '0');
    console.log("setUpScore myScoreKey ", myScoreKey);
}

//update the score by showing the score on the screen
function updateScore(){
    showScore(myScoreKey);
}

//decrementTimer for a wrong answer
function wrongAnswer() {
    decrementTimer(wrongAnswerPenalty);
    console.log("wrongAnswer");
}

function showTimer(id) {
    let newVal = decrementTimer(1000);
    //console.log("newVal ", newVal);
    //show the value of the timer
    let val = parseInt(localStorage.getItem(timerKey));
    document.getElementById(id).innerHTML = val/1000;
    //console.log('showTimer id', id);
    //console.log('showTimer document.getElementById(id).innerHTML',  document.getElementById(id).innerHTML);

    //console.log('showTimer localStorage.getItem(timerKey)',  localStorage.getItem(timerKey));
}

function showScore(id) {
    let score = parseInt(localStorage.getItem(myScoreKey));
    document.getElementById(id).innerHTML = score;
}

//decrement the time by getting it from local stor
function decrementTimer(decrementBy) {
    //console.log('decrementTimer decrementBy',  decrementBy);
    let timeRemaining = parseInt(localStorage.getItem(timerKey));
    if(timeRemaining) {
        if(timeRemaining <= 0) {
            localStorage.setItem(timerKey, `0`);
        }
        else {
            let newTimeRemaining = timeRemaining - decrementBy;
            localStorage.setItem(timerKey, `${newTimeRemaining}`);
        }

    }
    else {
        localStorage.setItem(timerKey, `0`);
    }

    return parseInt(localStorage.getItem(timerKey));
}

//stop the time by clearing the intervale
function stopTimer() {
    clearInterval(theTimerInterval);
}



/************************** */
var sQuestion = 'sQuestion';

function setupQuestionSection() {
    //clear the timer from localstorage
    localStorage.removeItem(sQuestion);
    //set timer in local storage to sOriginalTime
    localStorage.setItem(sQuestion, `quest0`);
}


//prepare the questions and answers by
//getting the div questions
//all the questions that are created on the fly
//will be placed there
//use radio buttons to mark the correct answers
function prepareQuestionAndAnswers(questionId, i) {
    console.log("prepareQuestionAndAnswers questionId", questionId);

    console.log("prepareQuestionAndAnswers i", i);

    //get the questions div
    let questionSec = document.getElementById('questions');
    //create a new div block to hold the question frome the array
    let questionBlock = document.createElement('div');
    //set the id of the question
    questionBlock.id = questionArr[i].id;
    //set the class name to question
    questionBlock.className = "question";
    console.log("prepareQuestionAndAnswers questionBlock", questionBlock);

    //create a span to hold the question text
    let qSpan = document.createElement('span');
    qSpan.innerText = questionArr[i].question;
    questionBlock.appendChild(qSpan);

    //if there is a answer1 then
    //create an answer div with a radio button and label
    if(questionArr[i].answer1){
        let answer = document.createElement('div');
        let rdoBtn = document.createElement('input');
        let label = document.createElement('label');

        //set the id of the radio button
        rdoBtn.id = `${questionArr[i].id}_answer1`
        rdoBtn.setAttribute('type','radio');
        rdoBtn.value = 1;  //use the value to determine how this person is answering
        rdoBtn.classList.add('answer');  //set the class as answer
        rdoBtn.classList.add(`${questionArr[i].id}`);  //also add the class as the id of the questoin
        rdoBtn.name = `${questionArr[i].id}`; //indicate that these radio buttons go togther by giving
        //them all the same name as the question's id
        
        label.innerText = questionArr[i].answer1;  //set the text of the answer in the label
        label.setAttribute('for',`${rdoBtn.id}`); //indicate that this label is for the radio button

        //give the div the answer class
        answer.classList.add('answer');
        answer.appendChild(rdoBtn); // append the radio button to the div answer as a child
        answer.appendChild(label); //append the label to dive answer as a child
        questionBlock.appendChild(answer); //append the answer to the question block.
        //the above places the newly created elements into the existing html on the screen
    }

    if(questionArr[i].answer2){
        let answer = document.createElement('div');
        let rdoBtn = document.createElement('input');
        let label = document.createElement('label');

        rdoBtn.id = `${questionArr[i].id}_answer2`
        rdoBtn.setAttribute('type','radio');
        rdoBtn.value = 2;
        rdoBtn.classList.add('answer');
        rdoBtn.classList.add(`${questionArr[i].id}`);
        rdoBtn.name = `${questionArr[i].id}`;
        
        label.innerText = questionArr[i].answer2;
        label.setAttribute('for',`${rdoBtn.id}`);

        answer.classList.add('answer');
        answer.appendChild(rdoBtn);
        answer.appendChild(label);
        questionBlock.appendChild(answer);
    }

    if(questionArr[i].answer3){
        let answer = document.createElement('div');
        let rdoBtn = document.createElement('input');
        let label = document.createElement('label');

        rdoBtn.id = `${questionArr[i].id}_answer3`
        rdoBtn.setAttribute('type','radio');
        rdoBtn.value = 3;
        rdoBtn.classList.add('answer');
        rdoBtn.classList.add(`${questionArr[i].id}`);
        rdoBtn.name = `${questionArr[i].id}`;
        
        label.innerText = questionArr[i].answer3;
        label.setAttribute('for',`${rdoBtn.id}`);

        answer.classList.add('answer');
        answer.appendChild(rdoBtn);
        answer.appendChild(label);
        questionBlock.appendChild(answer);
    }

    if(questionArr[i].answer4){
        let answer = document.createElement('div');
        let rdoBtn = document.createElement('input');
        let label = document.createElement('label');

        rdoBtn.id = `${questionArr[i].id}_answer4`
        rdoBtn.setAttribute('type','radio');
        rdoBtn.value = 4;
        rdoBtn.classList.add('answer');
        rdoBtn.classList.add(`${questionArr[i].id}`);
        rdoBtn.name = `${questionArr[i].id}`;
        
        label.innerText = questionArr[i].answer4;
        label.setAttribute('for',`${rdoBtn.id}`);

        answer.classList.add('answer');
        answer.appendChild(rdoBtn);
        answer.appendChild(label);
        questionBlock.appendChild(answer);
    }
    
    //create a button
    let btnNxt = document.createElement('button');
    btnNxt.innerText = "Next"; //give it the text next
    btnNxt.setAttribute('onclick',`evaluateQuestion(this,${i});`); //add an onclick event attribute that will call the evaluateQuestion method with the index as a parameter
    questionBlock.appendChild(btnNxt);  //add the button to the question block
    questionSec.appendChild(questionBlock); //add the question block to the question section
    
}

//get the question if the questionId is equal the quesionId for the question in the array
//and prepare the question for the screen.  Return whether the question has been found
function getQuestion(questionId) {
    console.log("getQuestion questionId", questionId);

    let found = false;

    console.log("getQuestion questionArr", questionArr);
    for(let i = 0; i<questionArr.length; i++) {
        console.log("getQuestion questionArr[i]", questionArr[i]);
        if(questionId == questionArr[i].id) {
            localStorage.setItem(sQuestion, questionId);
            prepareQuestionAndAnswers(questionId, i);
            found = true
            break;
        }
    }

    return found;
}



var questionArr = [];
//Create 3 sample questions for testing
function setupQuestionsAndAnswers() {
    let question1 = {
        id:"quest0", 
        question:"To select elements with a specific class: ", 
        answer1:" write a semicolon (;) character, followed by the class name.", 
        answer2:" write a period (.) character, followed by the class name.", 
        answer3:" write a period (.) character", 
        answer4:"write a comma (,) character", 
        correctAnswer:2
    };
    let question2 = {
        id:"quest1", 
        question:"In CSS, a color can be specified by using a predefined color name.", 
        answer1:"yes", 
        answer2:"no", 
        answer3:null, 
        answer4:null, 
        correctAnswer:1
    };
    let question3 = {
        id:"quest2", 
        question:"To horizontally center a block element", 
        answer1:"width: auto", 
        answer2:"border: auto", 
        answer3:"padding: auto", 
        answer4:"margin: auto", 
        correctAnswer:4
    };
    let question4 = {
        id:"quest3", 
        question:"Use the _____ property to determine the width of the input field:", 
        answer1:"width", 
        answer2:"height", 
        answer3:"margin", 
        answer4:null, 
        correctAnswer:1
    };

    questionArr.push(question1);
    questionArr.push(question2);
    questionArr.push(question3);
    questionArr.push(question4);

    console.log("setupQuestionsAndAnswers: ", setupQuestionsAndAnswers);

}


//grade a question by comparing the answer that was given to the correct answer number which indicates
//the answer that should have been chosen. Return whether the value is correct.
function gradeQuestion(questionId, answerNumber) {
    let isCorrect = false;
    for(let i=0; i< questionArr.length; i++){
        if(questionId == questionArr[i].id &&  answerNumber == questionArr[i].correctAnswer) {
            isCorrect = true;
            break;
        }
    }

    return isCorrect;
}

//evaluate a question by determing which answer was checked and using that to grade the question.
function evaluateQuestion(element, questNum) {
    console.log(element);
    //the questionId is equal to quest and then the number
    let questId = `quest${questNum}`
    //grab all the radio buttons on the page that have been checked
    let radioButtonsAll = document.querySelectorAll('input:checked');
    console.log('radioButtonsAll: ', radioButtonsAll);
    let rdBtn;
    //check each of those radio buttons to determine if 
    //the name used to group the radio buttons contains the same name 
    //as the question
    for(let i =0; i < radioButtonsAll.length; i++ )
    {
        
        rbID = radioButtonsAll[i].name;
        if(rbID.includes(`${questId}`)) {
            rdBtn = radioButtonsAll[i];
        }
    }
    console.log('rdBtn: ', rdBtn);
    //the value of the radio button indicates the answer that the person has chosen
    let answerNum = rdBtn.value;
    console.log('answerNum: ', answerNum);

    let keepGoing = false;
    //if the time has not elapsed continue otherwise skip to last screen.
    if(parseInt(localStorage.getItem(timerKey)) > 0 )
    {
        //if the question is correct add points
        let answer = gradeQuestion(questId, answerNum);
        console.log("evaluateQuestion answer ", answer);

        if(answer)
        {
            let myScore = parseInt(localStorage.getItem(myScoreKey));
            localStorage.setItem(myScoreKey, `${myScore + 10}` );
            updateScore();
            alert('Correct');
            console.log("evaluateQuestion localStorage.getItem(myScoreKey) ", localStorage.getItem(myScoreKey));
        }
        else {
            //else if the question is incorrect decrementTimer by 30 sec
            decrementTimer(wrongAnswerPenalty);
            console.log("decrementTimer wrongAnswerPenalty", wrongAnswerPenalty);
            alert('Incorrect');
        }

        document.getElementById(questId).classList.add('hide');
        //assume that the next question is sequential
        let nextQuestId = questIdPrefix + `${questNum+1}`;
        //go to next question
        keepGoing = getQuestion(nextQuestId)
        console.log("getQuestion questId", nextQuestId);

        console.log("getQuestion keepGoing", keepGoing);

    }
    else {
        keepGoing = false;
    }

    //if there are no more questions give the user the option to save their high score with their initials
    if(!keepGoing) {
        let screen = document.getElementById('enterHighScore');
        screen.classList.remove('hide');
        localStorage.setItem(timerKey, '0');
        stopTimer();
        document.getElementById('questions').classList.add('hide');
    }

}

/******************* */

function doGame() {
    hideWelcome();
    toggleQuestionSection();
    showScoreBoard();
    setupQuestionsAndAnswers();
    //set up the timer
    setUpTimer();
    setUpScore();
    startTimer();
    //startShowScore();
    setupQuestionSection();
    getQuestion('quest0');
}

function toggleSectionVisibilty(sectionElement) {
    let welcome = document.getElementById(sectionElement);
    if(welcome.className.includes('hide'))
    {
        welcome.classList.remove('hide');
    }
    else {
        welcome.classList.add('hide');
    }
}

function hideWelcome() {
    toggleSectionVisibilty('welcome') ;
}

function toggleQuestionSection() {
    toggleSectionVisibilty('questions') ;
}

function showScoreBoard() {
    let scoreboard = document.getElementById('score-board');
    scoreboard.classList.remove('hide');
}

function setUpHighScore() {
    //set timer in local storage to sOriginalTime
    if(!localStorage.getItem(highScoreKey)) {
        localStorage.setItem(highScoreKey, JSON.stringify(highScores))
    }

}

//add the score to the high score array
function addScore() {
    console.log("addScore");
    //if the high score array exists read it from json otherwise
    //return an empty array
    let hScores = localStorage.getItem(highScoreKey) 
    ? JSON.parse(localStorage.getItem(highScoreKey))
    : [];

    console.log("addScore hScores", hScores);

    //get the initals textbox
    let tbInitials = document.getElementById('tbInitials');
    console.log("addScore tbInitials", tbInitials);
    if(!tbInitials.value) {
        alert('Please enter your initials');
        return;
    }

    let score = parseInt(localStorage.getItem(myScoreKey));
    console.log("addScore score", score);

    //create an object with the initials and the score
    let myHighScore = {
        initials: tbInitials.value,
        score: score
    }
    //push that into the array
    hScores.push(myHighScore);

    //sort the array in descending order
    hScores.sort(function(a,b) {
        if(a.score < b.score) {
            return 1;
        }
        else {
            return -1;
        }
    })

    //save the array by converting it into a json string
    localStorage.setItem(highScoreKey, JSON.stringify(hScores))

    console.log('high scores: ', hScores);
    showHighScores();

}

function showHighScores() {
    let highScoresDiv = document.getElementById('high-scores');
    let table = document.createElement('table');
    let tableRowHeader = document.createElement('tr');
    let tableheader0 = document.createElement('th');
    let tableheader1 = document.createElement('th');
    let tableheader2 = document.createElement('th');


    tableheader0.innerText = 'Rank';
    tableheader1.innerText = 'Score';
    tableheader2.innerText = 'Initials';
    tableRowHeader.appendChild(tableheader0);
    tableRowHeader.appendChild(tableheader1);
    tableRowHeader.appendChild(tableheader2);
    table.appendChild(tableRowHeader);

    let hScores = localStorage.getItem(highScoreKey) 
    ? JSON.parse(localStorage.getItem(highScoreKey))
    : [];

    //remove this line when you have updated the code.

    let i=0;
    while(i<hScores.length ) {
        console.log("hScores[i].score: ", hScores[i].score);
        console.log("hScores[i].initals: ", hScores[i].initials);
    
        let tabledataRow = document.createElement('tr');
        let tabledata0 = document.createElement('td');
        let tabledata1 = document.createElement('td');
        let tabledata2 = document.createElement('td');
        tabledata0.innerText = i+1;
        tabledata1.innerText = hScores[i].score;
        tabledata2.innerText = hScores[i].initials;
        tabledataRow.appendChild(tabledata0);
        tabledataRow.appendChild(tabledata1);
        tabledataRow.appendChild(tabledata2);
        table.appendChild(tabledataRow)
        i++;
    }
    highScoresDiv.appendChild(table);
    highScoresDiv.classList.remove('hide');
    document.getElementById('enterHighScore').classList.add('hide');
    document.getElementById('score-board').classList.add('hide');
}
