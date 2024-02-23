const quizQuestions = [
  {
    question: "What is the name of the tallest mountain in the world?",
    a: "Mount Everest",
    b: "Killi mangaro",
    c: "Dahhin terara",
    d: "Amazon",
    correct: "a",
  },
  {
    question: "Which country has the largest population in the world?",
    a: "Australia",
    b: "USA",
    c: "Africa",
    d: "China",
    correct: "d",
  },
  {
    question: "What is the name of the longest river in Africa?",
    a: "Bantu",
    b: "Red sea",
    c: " The Nile River",
    d: "Amazon",
    correct: "c",
  },
  {
    question: "What American city is the Golden Gate Bridge located in?",
    a: "Texas",
    b: "California",
    c: "San Francisco",
    d: "Nevada",
    correct: "c",
  },
  {
    question: "What is the capital of Mexico?",
    a: "Sans",
    b: "Mehico",
    c: "Pablo mari",
    d: "Mexico City",
    correct: "d",
  },
  {
    question: "What is the name of the largest country in the world?",
    a: "Russia",
    b: "USA",
    c: "Africa",
    d: "India",
    correct: "a",
  },
];

const geography = document.querySelector(".topic");
const questionEl = document.getElementById("question");
const chooseA = document.getElementById("chooseA");
const chooseB = document.getElementById("chooseB");
const chooseC = document.getElementById("chooseC");
const chooseD = document.getElementById("chooseD");
const submitButton = document.getElementById("submitButton");
const endScreen = document.getElementById("endScreen");
const choose = document.getElementById("choose");
const count = document.getElementById("count");
const questionLength = document.getElementById("questionLength");
const resultLength = document.getElementById("resultLength");
const refreshButton = document.getElementById("restart");
let currentQuiz = 0;
function loadGeograph() {
  currentQuizData = quizQuestions[currentQuiz];

  questionEl.innerText = currentQuizData.question;

  chooseA.innerText = currentQuizData.a;
  chooseB.innerText = currentQuizData.b;
  chooseC.innerText = currentQuizData.c;
  chooseD.innerText = currentQuizData.d;
  count.innerText = currentQuiz;
  questionLength.innerText = quizQuestions.length;
  resultLength.innerText = quizQuestions.length;
}

submitButton.addEventListener("click", () => {
  currentQuiz++;

  if (currentQuiz < quizQuestions.length) {
    loadGeograph();
  } else {
    endScreen.style.display = "block";
  }
});

choose.addEventListener("click", (e) => {
  alert("clicked");
});
 refreshButton.addEventListener("click", function () {
   // Refresh the page
   location.reload();
 });
const spinWrapper = document.querySelector(".spinner-wrapper");
window.addEventListener("load", () => {
  spinWrapper.style.opacity = "0";

  setTimeout(() => {
    spinWrapper.style.display = "none";
  }, 300);
});

const topic = document.querySelector(".topic");
topic.addEventListener("click", (e) => {
  window.location.href = "question.html";
});

const back = document.querySelector("#back");
back.addEventListener("click", (e) => {
  window.location.href = "index.html";
});
loadGeograph();

let icon = document.querySelector(".icon");
function changeTheme() {
  // Toggle the dark-theme class on the body element
  document.body.classList.toggle("dark-theme");

  // Get a reference to the icon element
  let icon = document.querySelector(".icon");

  // Check if the dark-theme class is present after toggling
  if (document.body.classList.contains("dark-theme")) {
    // If the dark-theme class is present, change the icon to sun
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    // If the dark-theme class is not present, change the icon to moon
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}
