const quiz = [
  {
    question:
      'De acordo com o Artigo 1º do Regimento Interno da Assembleia Legislativa do estado do Piauí, assinale a alternativa correta sobre o local de funcionamento e a possibilidade de alteração desse local pela Assembleia Legislativa:',
    answers: [
      'O Artigo 1º estabelece que a Assembleia Legislativa do estado do Piauí funciona exclusivamente no Palácio Petrônio Portella, sem possibilidade de realização de atividades legislativas em outro local.',
      'Conforme o Artigo 1º, a Assembleia Legislativa do estado do Piauí pode se reunir em outro edifício ou localidade somente mediante autorização do governador do estado.',
      'O texto do Artigo 1º prevê que a Assembleia Legislativa do estado do Piauí pode funcionar no Palácio Petrônio Portella, e caso haja motivo relevante ou de força maior, a Assembleia pode se reunir em outro edifício ou localidade, com aprovação da Mesa e da maioria absoluta dos Deputados.',
      'O Artigo 1º indica que a Assembleia Legislativa do estado do Piauí está autorizada a funcionar em qualquer edifício ou localidade, desde que seja aprovado por unanimidade dos Deputados.',
      'Segundo o Artigo 1º do Regimento Interno, a Assembleia Legislativa do estado do Piauí pode funcionar no Palácio Petrônio Portella apenas durante os períodos ordinários, devendo se reunir em outro local durante sessões extraordinárias.',
    ],
    goodAnswer: 2, // Índice da resposta correta na array 'answers'
  },
  {
    question: 'Question 2',
    answers: ['answer1', 'answer2', 'answer3', 'answer4'],
    goodAnswer: 1,
  },
];
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
