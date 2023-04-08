const startButton = $("start-btn");
const nextButton = $("next-btn");
const questionContainerElement = $("question-container");
const questionElement = $("question");
const answerButtonElement = $("answer-button");
let suffledQuestions, correctQuestionIndex;
let quizScore = 0;


startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () =>
{
    correctQuestionIndex++;
    setNextQuestion();
})

function startQuiz()
{
    startButton.classList.add("hide")
    document.querySelector("h1").style.display = "none"
    suffledQuestions = questions.sort(() => Math.random() - 0.5);
    correctQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
    quizScore = 0;
}

function setNextQuestion()
{
    resetState();
    showQuestion(suffledQuestions[correctQuestionIndex]);
}


function showQuestion(question)
{
    questionElement.innerText = question.question;
    question.answers.forEach((answer) =>
    {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn")
        if (answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonElement.appendChild(button);
    });
}

function resetState()
{
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while (answerButtonElement.firstChild)
    {
        answerButtonElement.removeChild(answerButtonElement.firstChild);
    }
}

function selectAnswer(e)
{
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    setStausClass(document.body, correct);
    Array.from(answerButtonElement.children).forEach((button) =>
    {
        setStausClass(button, button.dataset.correct);
    });
    if (suffledQuestions.length > correctQuestionIndex + 1)
    {
        nextButton.classList.remove("hide");
    } else
    {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
    }
    if (selectedButton.dataset = correct)
    {
        quizScore++;
    }
    $("right-answer").innerHTML = quizScore;
}

function setStausClass(element, correct)
{
    clearStatusClass(element);
    if (correct)
    {
        element.classList.add("correct");
    } else
    {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element)
{
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: "What is HTML?",
        answers: [
            { text: "HTML describes the structure of a webpage", correct: false },
            { text: "HTML is the standard markup language mainly used to create web pages", correct: false },
            { text: "HTML consists of a set of elements that helps the browser how to view the content", correct: false },
            { text: "All of the mentioned", correct: true }
        ],
    },
    {
        question: "Who is the father of HTML?",
        answers: [
            { text: "Rasmus Lerdorf", correct: false },
            { text: "Tim Berners-Lee", correct: true },
            { text: "Brendan Eich", correct: false },
            { text: "Sergey Brin", correct: false }
        ],
    },
    {
        question: "HTML stands for __________",
        answers: [
            { text: "HyperText Machine Language", correct: false },
            { text: "HyperText Marking Language", correct: false },
            { text: "HyperText Markup Language", correct: true },
            { text: "HighText Marking Language", correct: false }
        ],
    },
    {
        question: "What is the correct syntax of doctype in HTML5?",
        answers: [
            { text: "</doctype html>", correct: false },
            { text: " <doctype html>", correct: false },
            { text: "<doctype html!>", correct: false },
            { text: "<!doctype html>", correct: true }
        ],
    },
    {
        question: "Which of the following is used to read an HTML page and render it?",
        answers: [
            { text: "Web server", correct: false },
            { text: " Web network", correct: false },
            { text: "Web browser", correct: true },
            { text: "Web matrix", correct: false }
        ],
    },
    {
        question: "Which of the following is not a difference between HTML and XHTML?",
        answers: [
            { text: "Charset in both html and xhtml is 'text/html' ", correct: true },
            { text: " Tags and attributes are case-insensitive in HTML but not in XHTML", correct: false },
            { text: "Special characters must be escaped using character entities in XHTML unlike HTML", correct: false },
            { text: "Charset in html is “text/html” where as in xhtml it is 'application/xml+xhtml' ", correct: false }
        ],
    },
    {
        question: " Which of the following tag is used for inserting the largest heading in HTML?",
        answers: [
            { text: "head", correct: false },
            { text: "<h6>", correct: false },
            { text: "<h1>", correct: true },
            { text: "heading", correct: false }
        ],
    },
    {
        question: "What is DOM in HTML?",
        answers: [
            { text: "Language dependent application programming", correct: false },
            { text: "Hierarchy of objects in ASP.NET", correct: false },
            { text: "Application programming interface", correct: false },
            { text: "Convention for representing and interacting with objects in html documents", correct: true }
        ],
    },
    {
        question: "In which part of the HTML metadata is contained?",
        answers: [
            { text: "head tag", correct: true },
            { text: "title tag", correct: false },
            { text: "html tag", correct: false },
            { text: "body tag", correct: false }
        ],
    },
    {
        question: "Which element is used to get highlighted text in HTML5?",
        answers: [
            { text: "<u>", correct: false },
            { text: "<mark>", correct: true },
            { text: " <highlight>", correct: false },
            { text: " <b>", correct: false }
        ],
    },
    {
        question: "Which of the following is not a HTML5 tag?",
        answers: [
            { text: "<track>", correct: false },
            { text: "<video>", correct: false },
            { text: "<slider>", correct: true },
            { text: "<source>", correct: false }
        ],
    },
    {
        question: " How do we write comments in HTML?",
        answers: [
            { text: "</…….>", correct: false },
            { text: "<!……>", correct: true },
            { text: "</……/>", correct: false },
            { text: " <…….!>", correct: false }
        ],
    },
    {
        question: "Which of the following elements in HTML5 defines video or movie content?",
        answers: [
            { text: "<video>", correct: true },
            { text: "<movie>", correct: false },
            { text: "<audio>", correct: false },
            { text: "<media>", correct: false }
        ],
    },
    {
        question: "Which of the following is not the element associated with the HTML table layout?",
        answers: [
            { text: "alignment", correct: false },
            { text: "color", correct: true },
            { text: "size", correct: false },
            { text: "spanning", correct: false }
        ],
    },
    {
        question: "Which element is used for or styling HTML5 layout?",
        answers: [
            { text: "jQuery", correct: false },
            { text: "CSS", correct: true },
            { text: "javaScript", correct: false },
            { text: "PHP", correct: false }
        ],
    },
]

function $(element)
{
    return document.getElementById(element);
}