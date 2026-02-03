// Game data
const questions = [
  {
    text: "Water collected from an open river near a village.",
    correct: "unsafe",
    explanation: "Open rivers may contain bacteria, parasites, or pollution."
  },
  {
    text: "Water from a protected underground well.",
    correct: "safe",
    explanation: "Protected wells reduce exposure to contaminants."
  },
  {
    text: "Rainwater collected without filtration.",
    correct: "unsafe",
    explanation: "Rainwater can pick up contaminants from surfaces."
  },
  {
    text: "Treated tap water in a city with water infrastructure.",
    correct: "safe",
    explanation: "Proper treatment removes harmful pathogens."
  },
  {
    text: "Standing water near agricultural runoff.",
    correct: "unsafe",
    explanation: "Runoff can contain chemicals and bacteria."
  }
];

// Game state
let currentQuestion = 0;
let score = 0;

// Select elements
const description = document.getElementById("waterDescription");
const feedback = document.getElementById("feedback");
const questionTitle = document.getElementById("questionTitle");
const safeBtn = document.querySelector(".safe");
const unsafeBtn = document.querySelector(".unsafe");

// Load first question
function loadQuestion() {
  const q = questions[currentQuestion];
  description.textContent = q.text;
  feedback.textContent = "";
  questionTitle.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
}

loadQuestion();

// Handle answers
function checkAnswer(choice) {
  const q = questions[currentQuestion];

  if (choice === q.correct) {
    score++;
    feedback.textContent = "Correct! " + q.explanation;
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Incorrect. " + q.explanation;
    feedback.style.color = "red";
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    setTimeout(loadQuestion, 1500);
  } else {
    setTimeout(endGame, 1500);
  }
}

// Button events
safeBtn.addEventListener("click", () => checkAnswer("safe"));
unsafeBtn.addEventListener("click", () => checkAnswer("unsafe"));

// End screen
function endGame() {
  description.textContent = "";
  questionTitle.textContent = "Game Complete!";
  feedback.innerHTML = `
    You scored ${score} out of ${questions.length}.<br><br>
    Access to clean water saves lives.
  `;
}