var questionCount = 1;

function newQuestion(button) {
  var container = document.createElement('div');
  container.setAttribute('class', 'single-question-container');

  var questionTitle = document.createElement('h2');
  questionTitle.setAttribute('class', 'question-title');
  questionTitle.textContent = 'Pergunta';

  var questionInput = document.createElement('input');
  questionInput.setAttribute('class', 'question');
  questionInput.setAttribute('type', 'text');
  questionInput.setAttribute('name', 'question' + questionCount);

  var correctAnswerTitle = document.createElement('h3');
  correctAnswerTitle.setAttribute('class', 'correct-answer-title');
  correctAnswerTitle.textContent = 'Resposta Correta';

  var correctAnswerInput = document.createElement('input');
  correctAnswerInput.setAttribute('class', 'correctAnswer');
  correctAnswerInput.setAttribute('type', 'text');
  correctAnswerInput.setAttribute('name', 'correctAnswer' + questionCount);

  var wrongAnswerTitle = document.createElement('h3');
  wrongAnswerTitle.setAttribute('class', 'wrong-answer-title');
  wrongAnswerTitle.textContent = 'Respostas Incorretas';

  var wrongAnswerContainer = document.createElement('div');
  wrongAnswerContainer.setAttribute('class', 'wrong-answer-container');

  var addAnswerButton = document.createElement('button');
  addAnswerButton.setAttribute('class', 'add-answer-button');
  addAnswerButton.setAttribute('onclick', 'newAnswer();');
  addAnswerButton.textContent = 'Adicionar Alternativa Incorreta';

  var wrongAnswerInput = document.createElement('input');
  wrongAnswerInput.setAttribute('class', 'wrongAnswer');
  wrongAnswerInput.setAttribute('type', 'text');

  wrongAnswerContainer.appendChild(wrongAnswerInput);
  wrongAnswerContainer.appendChild(addAnswerButton);

  container.appendChild(questionTitle);
  container.appendChild(questionInput);
  container.appendChild(correctAnswerTitle);
  container.appendChild(correctAnswerInput);
  container.appendChild(wrongAnswerTitle);
  container.appendChild(wrongAnswerContainer);

  var buttonContainer = button.parentNode;
  var mainContainer = buttonContainer.parentNode;
  mainContainer.insertBefore(container, buttonContainer);

  questionCount++;
};

function newAnswer() {
  var container = event.target.parentNode;
  var newInput = document.createElement('input');
  newInput.setAttribute('class', 'wrongAnswer');
  newInput.setAttribute('type', 'text');
  container.insertBefore(newInput, event.target);
};

function verifyAndSend() {
  var quizTitle = document.querySelector('.quiz-title').value;
  var tagsInputs = document.querySelectorAll('.tag');
  var tags = [];
  
  tagsInputs.forEach(function(tagInput) {
    if (tagInput.value.trim() !== '') {
      tags.push(tagInput.value);
    }
  });

  var questions = [];

  var questionContainers = document.querySelectorAll('.single-question-container');
  questionContainers.forEach(function (questionContainer) {
    var question = questionContainer.querySelector('.question').value;
    var correctAnswer = questionContainer.querySelector('.correctAnswer').value;
    var wrongAnswers = [];

    var wrongAnswerInputs = questionContainer.querySelectorAll('.wrongAnswer');
    wrongAnswerInputs.forEach(function (wrongAnswerInput) {
      if (wrongAnswerInput.value.trim() !== '') {
        wrongAnswers.push(wrongAnswerInput.value);
      }
    });

    var questionData = {
      question: question,
      correctAnswer: correctAnswer,
      wrongAnswers: wrongAnswers
    };

    questions.push(questionData);
  });

  var data = {
    quizTitle: quizTitle,
    tags: tags,
    questions: questions
  };

  fetch('/register-quiz', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Erro na requisição');
      }
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
