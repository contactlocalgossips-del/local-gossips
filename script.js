// ==== Local Gossips Berlin Quiz ====

const quizContainer = document.getElementById('quiz-container');
const popup = document.getElementById('popup');
const resultDiv = document.getElementById('result');

const questions = [
  { q: "Which Berlin neighborhood is famous for street art and clubs?", a: "Kreuzberg" },
  { q: "What color is the Berlin S-Bahn logo?", a: "Green" },
  { q: "What’s the park where people sing karaoke on Sundays?", a: "Mauerpark" },
  { q: "Which tower defines Berlin’s skyline?", a: "TV Tower" },
  { q: "Berlin’s symbol is which animal?", a: "Bear" }
];

let current = 0;
let score = 0;

function loadQuestion() {
  if (current < questions.length) {
    const q = questions[current];
    quizContainer.innerHTML = `
      <h2>${q.q}</h2>
      <input id="answer" type="text" placeholder="Type your answer..." />
      <button onclick="checkAnswer()">Submit</button>
    `;
  } else {
    quizContainer.innerHTML = `<h2>🎉 You got ${score} out of ${questions.length} right!</h2>`;
  }
}

function checkAnswer() {
  const input = document.getElementById('answer');
  const userAnswer = input.value.trim().toLowerCase();
  const correct = questions[current].a.toLowerCase();

  if (userAnswer === correct) {
    score++;
  }

  current++;

  // Show popup after 3 questions
  if (current === 3) {
    popup.classList.remove('hidden');
  } else {
    loadQuestion();
  }
}

loadQuestion();
