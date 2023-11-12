var startScreen = document.querySelector(".start");
var quizScreen = document.querySelector(".quiz");
var endScreen = document.querySelector(".end");
var startButton = document.querySelector("#start-btn");

function showStart() {
    startScreen.style.display = null;
    quizScreen.style.display = "none";
    endScreen.style.display = "none";
}

function showQuiz() {
    startScreen.style.display = "none";
    quizScreen.style.display = null;
    endScreen.style.display = "none";
}

function showEnd() {
    startScreen.style.display = "none";
    quizScreen.style.display = "none";
    endScreen.style.display = null;
}

startButton.addEventListener("click", function(event) {
    showQuiz();
});

function init () {
    showStart();
}

init();
