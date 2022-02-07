const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },{
        question: 'What is the most used programming language?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'javascript',
        correct: 'a'
    },{
        question: 'Who is the president?',
        a: 'Florin',
        b: 'donald',
        c: 'ivan',
        d: 'mihai',
        correct: 'b'
    },{
        question: 'what is HTML',
        a: 'hypertext markup language',
        b: 'cascading style sheet',
        c: ' jason object Notation',
        d: 'helicopter terminales motor lambo',
        correct: 'a'
    },{
        question: 'What year was javascript',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none',
        correct: 'b'
    }
]

const inputEl = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_txt = document.getElementById('a_text');
const b_txt = document.getElementById('b_text');
const c_txt = document.getElementById('c_text');
const d_txt = document.getElementById('d_text');
const btn = document.getElementById('submit')
const pts = document.querySelector('.score');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselect();

    const currentQuizData = quizData[currentQuestion];

    questionEl.innerText = currentQuizData.question;
    a_txt.innerText = currentQuizData.a;
    b_txt.innerText = currentQuizData.b;
    c_txt.innerText = currentQuizData.c;
    d_txt.innerText = currentQuizData.d;
}

function selectInput() {
    
    let answer = undefined;
    inputEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselect(params) {
    inputEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

btn.addEventListener('click', () =>{
    const answer = selectInput()
    
    if (answer) {
        if (answer == quizData[currentQuestion].correct) {
            score++
        }
        currentQuestion++
        if (currentQuestion < quizData.length) {
            loadQuiz();
        }else{
            btn.style.display = 'none'
            pts.innerHTML = "You have finish the quiz Yor score is: " + score + "<button id='reload'>reload</button>"
            const reload = document.getElementById('reload')
            reload.addEventListener('click', ()=>{
                btn.style.display = 'block'
                reload.style.display = 'none'
                location.reload()
            })
        }
    }
    
})