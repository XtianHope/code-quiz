// Declaring/selecting HTML elements
var startScreen = document.querySelector(".start");
var quizScreen = document.querySelector("#quiz-screen");
var endScreen = document.querySelector(".end");
var startButton = document.querySelector("#start-btn");
var nextButton = document.querySelector('.quiz button[id^="next-btn"]');
var initialsInput = document.querySelector("initials");
var submitScoreButton = document.querySelector("#submit-score");


// Variable to set timer in seconds - 5 miutes
var timeLeft = 300;
var elem = document.querySelector('#timer');

// Function to initialize the quiz
function init() {
    showStart();
}

// Timer
function setTime() {
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



// Function to show the start screen
function showStart() {
    startScreen.style.display = "flex";
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
    endScreen.style.display = "flex";
}

// Event listener added to take user to Quiz screen upon clicking the start button
startButton.addEventListener("click", function (event) {
    showQuiz();
    setTime();
});

// Event listener added to take user through the quiz upon clicking the answer buttons
quizScreen.addEventListener("click", function (event) {
    if (event.target.id.startsWith("answer")) {
        // Check if the answer selected by the user is correct
        if (event.target.textContent.indexOf(questions[currentQuestionIndex - 1].answer)>-1) {
            alert("Correct!");
        } else {
            alert("Incorrect!");
            // Penalty for user selecting wrong answer
            timeLeft -= 10;
            document.getElementById("timer").textContent = "Time: " + timeLeft;
        }
        nextQuestion();
    }
});


// Event listener for submitting score button
submitScoreButton.addEventListener("click", function () {
    var userInitials = initialsInput.value;
    var userScore = timeLeft;
    var userEntry = { initials: userInitials, score: userScore };
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push(userEntry);
    // Store high scores in local storage
    local.Storage.setItem("highScores", JSON.stringify(highScores));
});




// Initial function call to set up the start screen
init();
function nextQuestion() {
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
}

