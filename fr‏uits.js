const quizData = [
    {
        question: "what is it?",
        pic: "apple.jpg",
        a: "orange",
        b: "papaya",
        c: "peach",
        d: "apple",
        correct: "d",
        aud: "apple.mp3",
    },
    {
        question: "what is it?",
        pic: "apricot.jpg",

        a: "banana",
        b: "apricot",
        c: "apple",
        d: "kiwi",
        correct: "b",
        aud: "apricot.mp3",
    },
    {
        question: "What is it?",
        pic: "avocado.jpg",

        a: "avocado",
        b: "apricot",
        c: "coconut",
        d: "pineapple",
        correct: "a",
        aud: "avocado.mp3",
    },
    {
        question: "What is it?",
        pic: "banana.jpg",

        a: "apple",
        b: "banana",
        c: "peach",
        d: "kiwi",
        correct: "b",
        aud: "banana.mp3",
    },
    {
        question: "what is it?",
        pic: "cherries.jpg",
        a: "orange",
        b: "papaya",
        c: "peach",
        d: "cherries",
        correct: "d",
        aud: "cherries.mp3",
    },
    {
        question: "what is it?",
        pic: "coconut.jpg",

        a: "banana",
        b: "coconut",
        c: "apple",
        d: "kiwi",
        correct: "b",
        aud: "coconut.mp3",
    },
    {
        question: "What is it?",
        pic: "grapes.jpg",

        a: "grapes",
        b: "apricot",
        c: "coconut",
        d: "pineapple",
        correct: "a",
        aud: "grapes.mp3",
    },
    {
        question: "What is it?",
        pic: "kiwi.jpg",

        a: "apple",
        b: "banana",
        c: "peach",
        d: "kiwi",
        correct: "d",
        aud: "kiwi.mp3",
    },
    {
        question: "what is it?",
        pic: "mango.jpg",
        a: "orange",
        b: "mango",
        c: "peach",
        d: "apple",
        correct: "b",
        aud: "mango.mp3",
    },
    {
        question: "what is it?",
        pic: "orange.jpg",

        a: "banana",
        b: "orange",
        c: "apple",
        d: "kiwi",
        correct: "b",
        aud: "orange.mp3",
    },
    {
        question: "What is it?",
        pic: "papaya.jpg",

        a: "papaya",
        b: "apricot",
        c: "coconut",
        d: "pineapple",
        correct: "a",
        aud: "papaya.mp3",
    },
    {
        question: "What is it?",
        pic: "peach.jpg",

        a: "apple",
        b: "banana",
        c: "peach",
        d: "kiwi",
        correct: "c",
        aud: "peach.mp3",
    },
    {
        question: "what is it?",
        pic: "pineapple.jpg",
        a: "orange",
        b: "pineapple",
        c: "peach",
        d: "cherries",
        correct: "b",
        aud: "pineapple.mp3",
    },
    {
        question: "what is it?",
        pic: "pomegranate.jpg",

        a: "banana",
        b: "pomegranate",
        c: "apple",
        d: "kiwi",
        correct: "b",
        aud: "pomegranate.mp3",
    },
    {
        question: "What is it?",
        pic: "strawberry.jpg",

        a: "grapes",
        b: "apricot",
        c: "strawberry",
        d: "pineapple",
        correct: "c",
        aud: "strawberry.mp3",
    },
    {
        question: "What is it?",
        pic: "watermelon.jpg",

        a: "apple",
        b: "banana",
        c: "peach",
        d: "watermelon",
        correct: "d",
        aud: "watermelon.mp3",
    },


];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const pic = document.getElementById('pic')
const mp = document.getElementById('audio')

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question

    pic.src = currentQuizData.pic
    mp.src = currentQuizData.aud

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)

}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

var choosen = ["", "", "", "", ""];
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        choosen[currentQuiz] = answer;
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {

            quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <h2>correct answer of quetion 1 is ${quizData[0].correct}/your choice:${choosen[0]}</h2>
           <h2>correct answer of quetion 2 is ${quizData[1].correct}/your choice:${choosen[1]}</h2>
           <h2>correct answer of quetion 3 is ${quizData[2].correct}/your choice:${choosen[2]}</h2>
           <h2>correct answer of quetion 4 is ${quizData[3].correct}/your choice:${choosen[3]}</h2>
           <h2>correct answer of quetion 5 is ${quizData[4].correct}/your choice:${choosen[4]}</h2>
           <h2>correct answer of quetion 1 is ${quizData[5].correct}/your choice:${choosen[5]}</h2>
           <h2>correct answer of quetion 2 is ${quizData[6].correct}/your choice:${choosen[6]}</h2>
           <h2>correct answer of quetion 3 is ${quizData[7].correct}/your choice:${choosen[7]}</h2>
           <h2>correct answer of quetion 4 is ${quizData[8].correct}/your choice:${choosen[8]}</h2>
           <h2>correct answer of quetion 5 is ${quizData[9].correct}/your choice:${choosen[9]}</h2>
           <h2>correct answer of quetion 1 is ${quizData[10].correct}/your choice:${choosen[10]}</h2>
           <h2>correct answer of quetion 2 is ${quizData[11].correct}/your choice:${choosen[11]}</h2>
           <h2>correct answer of quetion 3 is ${quizData[12].correct}/your choice:${choosen[12]}</h2>
           <h2>correct answer of quetion 4 is ${quizData[13].correct}/your choice:${choosen[13]}</h2>
           <h2>correct answer of quetion 5 is ${quizData[14].correct}/your choice:${choosen[14]}</h2>
           <h2>correct answer of quetion 1 is ${quizData[15].correct}/your choice:${choosen[15]}</h2>
        
           <button onclick="location.reload()">Reload</button>
           
           `
        }
    }
})
/**
 *  <h2>correct answer of quetion 1 is ${quizData[0].correct}/your choice:${choosen[0]}</h2>
           <h2>correct answer of quetion 2 is ${quizData[1].correct}/your choice:${choosen[1]}</h2>
           <h2>correct answer of quetion 3 is ${quizData[2].correct}/your choice:${choosen[2]}</h2>
           <h2>correct answer of quetion 4 is ${quizData[3].correct}/your choice:${choosen[3]}</h2>
           <h2>correct answer of quetion 5 is ${quizData[4].correct}/your choice:${choosen[4]}</h2>
 */