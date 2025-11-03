{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const quizData = [\
  \{\
    question: "What is a 'Sp\'e4ti' in Berlin?",\
    options: ["A late-night convenience store", "A club", "A caf\'e9", "A tram line"],\
    answer: 0,\
  \},\
  \{\
    question: "Which iconic club was a former power plant?",\
    options: ["Berghain", "Watergate", "Tresor", "Sisyphos"],\
    answer: 0,\
  \},\
  \{\
    question: "Which river runs through Berlin?",\
    options: ["Rhine", "Elbe", "Spree", "Oder"],\
    answer: 2,\
  \},\
  \{\
    question: "What\'92s Berlin\'92s famous curry dish called?",\
    options: ["Currywurst", "Curryfries", "Curryhuhn", "Currytoast"],\
    answer: 0,\
  \},\
  \{\
    question: "What color are Berlin\'92s underground trains?",\
    options: ["Red", "Blue", "Yellow", "Green"],\
    answer: 2,\
  \},\
];\
\
const quizContainer = document.getElementById("quiz-container");\
const result = document.getElementById("result");\
const popup = document.getElementById("popup");\
\
let currentQuestion = 0;\
let score = 0;\
\
function loadQuestion() \{\
  if (currentQuestion < quizData.length) \{\
    const q = quizData[currentQuestion];\
    quizContainer.innerHTML = `\
      <h2>$\{q.question\}</h2>\
      $\{q.options\
        .map(\
          (opt, i) =>\
            `<button class="btn option" onclick="checkAnswer($\{i\})">$\{opt\}</button>`\
        )\
        .join("")\}\
    `;\
  \} else \{\
    quizContainer.innerHTML = `<h2>You scored $\{score\}/$\{quizData.length\}! \uc0\u55357 \u56485 </h2>`;\
  \}\
\}\
\
function checkAnswer(selected) \{\
  if (selected === quizData[currentQuestion].answer) score++;\
  currentQuestion++;\
\
  // After 3 questions, show popup if not subscribed\
  if (currentQuestion === 3 && !localStorage.getItem("subscribed")) \{\
    popup.classList.remove("hidden");\
  \} else \{\
    loadQuestion();\
  \}\
\}\
\
// Close popup after form submit\
const form = popup.querySelector("form");\
form.addEventListener("submit", () => \{\
  localStorage.setItem("subscribed", "true");\
  popup.classList.add("hidden");\
  setTimeout(() => loadQuestion(), 1000);\
\});\
\
loadQuestion();\
}