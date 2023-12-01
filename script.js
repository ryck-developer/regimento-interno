import quiz from './questions.js';
let questionIndex = -1;
const startBtn = document.querySelector('.start-button');
const quizContainer = document.querySelector('.quiz-container');
const indicator = document.querySelector('.indicator');
let answered = false;
let goodAnswers = 0;
let isIndicatorSetuped = false;
let isIndicatorActive = false;

startBtn.addEventListener('click', () => {
  hiddenPage();
  nextQuestion();
});
function hiddenPage() {
  isIndicatorActive = false;
  indicator.classList.add('hidden');
  const page = document.querySelector('.page');
  page.classList.add('hidden');
  setTimeout(() => page.remove(), 500);
}

function nextQuestion() {
  questionIndex++;
  if (questionIndex === quiz.length) {
    showFinalPage();
    return;
  }

  const page = document.createElement('div');
  page.className = 'page';
  quizContainer.appendChild(page);
  const questionContainer = document.createElement('h4');
  questionContainer.className = 'question';
  page.appendChild(questionContainer);
  const answerContainer = document.createElement('div');
  answerContainer.className = 'answer-container';
  page.appendChild(answerContainer);
  answered = false;
  questionContainer.textContent = quiz[questionIndex].question;

  const options = ['A', 'B', 'C', 'D', 'E'];

  quiz[questionIndex].answers.forEach((answer, index) => {
    const element = document.createElement('button');
    element.className = 'answer';
    element.textContent = options[index] + ': ' + answer;
    element.addEventListener('click', () => {
      if (answered) return;
      if (index == quiz[questionIndex].goodAnswer) {
        element.classList.add('good');
        indicator.classList.add('good');
        goodAnswers++;
      } else {
        element.classList.add('bad');
        indicator.classList.add('bad');
      }
      answered = true;
      setTimeout(() => {
        showNextBtn(page);
      }, 1100);
    });

    indicator.className = 'indicator hidden';
    answerContainer.appendChild(element);
    indicator.style.setProperty('--height', element.clientHeight);
    setTimeout(() => {
      isIndicatorActive = true;
    }, 500);
    element.addEventListener('mousemove', () => {
      if (answered) return;
      if (!isIndicatorActive || !isIndicatorSetuped) return;
      indicator.className = 'indicator';
      const clientRect = element.getBoundingClientRect();
      indicator.style.setProperty('--y', clientRect.y);
      indicator.style.setProperty('--x', clientRect.x);
    });
  });
  const button = document.querySelector('.answer');
  const clientRect = button.getBoundingClientRect();
  indicator.style.setProperty('--y', clientRect.y - clientRect.height * 2);
  console.log(clientRect.y);
  setTimeout(() => {
    if (isIndicatorSetuped) return;
    const button = document.querySelector('.answer');
    const clientRect = button.getBoundingClientRect();
    indicator.style.setProperty('--x', clientRect.x);
    indicator.style.setProperty('--width', clientRect.width);
    setTimeout(() => {
      isIndicatorSetuped = true;
    }, 400);
  }, 500);
}

function showNextBtn(page) {
  const element = document.createElement('button');
  element.className = 'next-button';
  element.addEventListener('click', () => {
    hiddenPage();
    nextQuestion();
  });
  element.textContent = 'next';
  page.appendChild(element);
}
function showFinalPage() {
  const page = document.createElement('div');
  page.className = 'page';
  page.innerHTML = `
    <h1 class="question">
    Congratulations 🎉!!!
    </h1>
    <p class="score">
      You score is ${goodAnswers}/${quiz.length}
    </p>
  `;
  quizContainer.appendChild(page);
}
