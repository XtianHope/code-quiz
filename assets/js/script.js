// Declaring/selecting HTML elements
var startScreen = document.querySelector(".start");
var quizScreen = document.querySelector(".quiz");
var endScreen = document.querySelector(".end");
var startButton = document.querySelector("#start-btn");
var nextButton = document.querySelector("#next-btn");
var questionContainer = document.querySelector("question-container");
var questionTitle = document.querySelector("question-title");

//Index to keep track of the current question user is on
var currentQuestionIndex = 0;

// Questions and Answers
var questions = [
    {
        question: "What does HTML stand for?",
        answers: ["HyperText Markup Language", "High-Level Text Management Language", "HyperTransfer Markup Language", "HyperText Manipulation Language"],
    },
    {
        question: "What is the purpose of the console.log() function in JavaScript?",
        answers: ["Display a message in the console", "Log information to the server", "Print content on the webpage", "Define a new variable"],
    },
    {
        question: "How do you declare a variable named count and assign it the value 10?",
        answers: ["var count = 10;", "variable count = 10;", "count = 10;", "declare count = 10;"],
    },
    {
        question: "What is the result of the expression 5 + "5" in JavaScript?",
        answers: ["55<", "10", "5", "Error"],
    },
    {
        question: "What does the term "Boolean" represent in JavaScript?",
        answers: ["A type of loop", "A sequence of characters", "A data type representing true or false", "A function declaration"],
    },
    {
        question: "What is JavaScript used for in web development?",
        answers: ["Styling web pages", "Adding interactivity to websites", "Creating database tables", "Defining webpage structure"],
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answers: ["let", "variable", "var", "const"],
    },
    {
        question: "Which function is used to display a message in a popup box?",
        answers: ["popup()", "prompt()", "message()", "alert()"],
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        answers: ["#", "//", "/", "__"],
    },
    {
        question: "In JavaScript, what does the term "array" represent?",
        answers: ["A group of related variables", "A type of loop", "A sequence of characters", "A mathematical operation"],
    },
]

// Function to show the start screen
function showStart() {
    startScreen.style.display = null;
    quizScreen.style.display = "none";
    endScreen.style.display = "none";
}

// Function to show the quiz screen
function showQuiz() {
    startScreen.style.display = "none";
    quizScreen.style.display = null;
    endScreen.style.display = "none";
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
quizScreen.addEventListener("click", function(event) {
    if (event.target.matches("button")) {
        showEnd();
    }
});

// Event listener added to show the next question upon clicking the next button, show end of quiz if no more questions remain
nextButton.addEventListener("click", function(event) {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        showEnd();
    }
});

// Function to initialize the quiz
function init () {
    showStart();
}

// Initial function call to set up the start screen
init();
