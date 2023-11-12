// Declaring/selecting HTML elements
var startScreen = document.querySelector(".start");
var quizScreen = document.querySelector(".quiz");
var endScreen = document.querySelector(".end");
var startButton = document.querySelector("#start-btn");
var nextButton = document.querySelector('.quiz button[id^="next-btn"]');
var initialsInput = document.querySelector("initials");
var submitScoreButton = document.querySelector("#submit-score");
var button1 = document.querySelector("#answer-1-btn");
var button2 = document.querySelector("#answer-2-btn");
var button3 = document.querySelector("#answer-3-btn");
var button4 = document.querySelector("#answer-4-btn");

// Variable to set timer in seconds - 5 miutes
var timeLeft = 300;
var elem = document.querySelector('#timer');

// Function to initialize the quiz
function init () {
    showStart();
}

// Timer
function setTime() {
    displayQuestions();
    let timerInterval = setInterval(function () {
      timeLeft--;
      document.getElementById("timer").textContent = "Time: " + timeLeft;
  
      if (timeLeft <= 0 || currentQuestionIndex > questions.length) {
        clearInterval(timerInterval);
        showEnd();
        captureUserScore();
      }
    }, 1000);
  }



//Index to keep track of the current question user is on
var currentQuestionIndex = 1;


// Questions and Answers Array
var questions = [
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "High-Level Text Management Language", "HyperTransfer Markup Language", "HyperText Manipulation Language"],
        answer: "HyperText Markup Language"
    },

    {
        question: "What is the purpose of the console.log() function in JavaScript?",
        options: ["Display a message in the console", "Log information to the server", "Print content on the webpage", "Define a new variable"],
        answer: "Display a message in the console"
    },

    {
        question: "How do you declare a variable named count and assign it the value 10?",
        options: ["var count = 10;", "variable count = 10;", "count = 10;", "declare count = 10;"],
        answer: "var count = 10"
    },

    {
        question: "What is the result of the expression 5 + 5 in JavaScript?",
        options: ["55", "10", "5", "Error"],
        answer: "55"
    },

    {
        question: "What does the term Boolean represent in JavaScript?",
        options: ["A type of loop", "A sequence of characters", "A data type representing true or false", "A function declaration"],
        answer: "A data type representing true or false"
    },

    {
        question: "What is JavaScript used for in web development?",
        options: ["Styling web pages", "Adding interactivity to websites", "Creating database tables", "Defining webpage structure"],
        answer: "Adding interactivity to websites"
    },

    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["let", "variable", "var", "const"],
        answer: "var"
    },


    {
        question: "Which function is used to display a message in a popup box?",
        options: ["popup()", "prompt()", "message()", "alert()"],
        answer: "alert()"
    },

    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["#", "//", "/", "__"],
        answer: "//"
    },

    {
        question: "In JavaScript, what does the term array represent?",
         options: ["A group of related variables", "A type of loop", "A sequence of characters", "A mathematical operation"],
        answer: "A group of related variables"
    },
]

// NEED A FUNCTION TO RENDER CURRENT QUESTION AND ANSWER HERE
function renderQuestion(){
    var currentQuestion = questions[currentQuestionIndex];
    
}


// Function to show the start screen
function showStart() {
    startScreen.style.display = null;
    quizScreen.style.display = "none";
    endScreen.style.display = "none";
}

// Function to show the quiz screen
function showQuiz() {
    startScreen.style.display = "none";
    quizScreen.style.display = "flex";
    endScreen.style.display = "none";

    document.getElementById("question1").style.display = "flex";
}

// Function to show the end screen
function showEnd() {
    startScreen.style.display = "none";
    quizScreen.style.display = "none";
    endScreen.style.display = null;
}

// Event listener added to take user to Quiz screen upon clicking the start button
startButton.addEventListener("click", function(event) {
    showQuiz();
});

// Event listener added to take user through the quiz upon clicking the answer buttons
quizScreen.addEventListener("click", function (event) {
    if (event.target.id.startsWith("answer")) {
        // Check if the answer selected by the user is correct
        if (event.target.textContent === questions[currentQuestionIndex - 1].answer) {
            console.log("Correct!");
        } else {
            console.log("Incorrect!");
            // Penalty for user selecting wrong answer
            timeLeft -= 10;
            document.getElementById("timer").textContent = "Time: " + timeLeft;
        }
    }
});


/*quizScreen.addEventListener("click", function (event) {
    if (event.target.id.startsWith("answer")) {
        if (answer-1-btn == true)
        console.log("answer-1-btn")
    } else {
        console.log("not answer-1-btn")
    }
    if (event.target.id.startsWith("next-btn")) {
        showEnd();
    }
});*/

// Event listener added to show the next question upon clicking the next button, show end of quiz if no more questions remain
nextButton.addEventListener("click", function (event) {
    currentQuestionIndex++;
    var currentQuestion = document.getElementById("question" + currentQuestionIndex);

    if (currentQuestion) {
        document.querySelectorAll(".quiz").forEach(function (quiz) {
            quiz.style.display = "none";
        });

        currentQuestion.style.display = "flex";
        renderQuestion(); // Render the new question
    } else {
        showEnd();
    }
});

// Event listener for submitting score button
submitScoreButton.addEventListener("click", function () {
    var userInitals = initialsInput.value;
    var userScore = timeLeft;
    var userEntry = {initials: userInitials, score: userScore };
    highScores.push(userEntry);
});


// Store high scores in local storage
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
/*
local.Storage.setItem("highScores", JSON.stringify(highScores));
});
*/

// Initial function call to set up the start screen
init();
