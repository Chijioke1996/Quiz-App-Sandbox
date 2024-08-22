const Questions = [
    {
        topic: 'tech',
        question: 'What is the colour of the sky?',
        possibleAnswers: ["Green", "Blue", "Red", "white"],
        correctAnswer: "Blue"
    },

    {
        topic: 'science',
        question: 'What branch of science studies life?',
        possibleAnswers: ["Biology", "Agriculture", "Engineering"],
        correctAnswer: 'Biology'
    },

    {
        topic: 'Aviation',
        question: 'Another name for a spin roll is what?',
        possibleAnswers: ["Barrel roll", "Easy glide", "Bumper manoeuvre"],
        correctAnswer: 'Barrel roll'
    }
]

const progressBar = document.querySelector(".progress-bar")
const questionContainer = document.querySelector(".question-container")
const answerContainer = document.querySelector(".answer-container")

let currentQuestionIndex = 0

//Quiz Handler 
function Quiz(index) {

    //Quiz progress
    progressBar.innerHTML = ""
    Questions.forEach((question) => {
        progressBar.innerHTML += `<span class="span"></span>`
    })

    let spans = document.querySelectorAll(".span")
    for (let i = 0; i <= index; i++) {
        spans[i].classList.add("seen")
    }

    // topic/question
    questionContainer.innerHTML = ""
    questionContainer.innerHTML += `<p class="topic">${Questions[index].topic}</p>
    <p class="question">${Questions[index].question}</p>`

    //answer
    answerContainer.innerHTML = ""
    Questions[index].possibleAnswers.forEach((answer) => {
        answerContainer.innerHTML += `<button>${answer}</button>`
    })

    const options = document.querySelectorAll("button")
    options.forEach((option) => {
        option.addEventListener("click", (e) => {
            if (e.target.textContent === Questions[index].correctAnswer) {
                alert("correct Answer")
                console.log("Correct");

            } else {
                alert("Wrong Answer")
                console.log("Wrong");
                
            }
            if (currentQuestionIndex === Questions.length - 1) {
                currentQuestionIndex = 0
            } else {
                currentQuestionIndex++
            }

            Quiz(currentQuestionIndex)
        })
    })
}

Quiz(currentQuestionIndex)