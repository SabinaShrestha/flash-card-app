const question = document.querySelector('.qtn');
const answer = document.querySelector('.ans');
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');
const addNewCard = document.querySelector('.add');
const form = document.querySelector('.form');
const save = document.querySelector('.save');
const done = document.querySelector('.done');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const message = document.getElementById("msg");

const stack = [
    { question: "HTML", answer: "Hyper Text Markup Language" },
    { question: "CSS", answer: "Cascading Style Sheet" },
    { question: "JS", answer: "JavaScript" }
]

function fadeOutEffect() {
    var fadeTarget = message;
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
}

function getRandomStack() {
    randomStack = stack[Math.floor(Math.random() * stack.length)]
    question.innerHTML = `<h3>${randomStack.question}</h3>`;
    answer.innerHTML = `<h3>${randomStack.answer}</h3>`;
}

save.addEventListener('click', function() {
    const qtn = document.getElementById('question').value;
    const ans = document.getElementById('answer').value;
    stack.push({question: qtn, answer: ans})
    document.querySelector('#question').value = '';
    document.querySelector('#answer').value = '';
    fadeOutEffect();
    message.style.removeProperty('opacity');
})

done.addEventListener('click', function() {
    second.style.display = 'none';
    first.style.display = 'block';
}) 

checkButton.addEventListener('click', function() {
    answer.style.display = 'block';
});

nextButton.addEventListener('click', function() {
    getRandomStack();
    answer.style.display = 'none';
});

addNewCard.addEventListener('click', function() {
    second.style.display = 'block';
    first.style.display = 'none';
} )




