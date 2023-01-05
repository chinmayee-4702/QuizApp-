const quizDB = [
{
    question: "Q1: What is the full form of HTML?",
    a: "Hello To My Land",
    b: "Hey Text Markup Language",
    c: "HyperText Markup Language",
    d: "Hypertext Markup Language",
    ans: "ans4"

},
{
    question: "Q1: What is the full form of JS?",
    a: "Java Shell",
    b: "Java Script",
    c: "Jammy Shell",
    d: "Joel Salt",
    ans: "ans2"

}
];

const question = document.querySelector(".question");
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');

// To get the reference of all inputs
const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
// console.log(quizDB[0]);


const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    

    question.innerHTML = (questionList.question);
    option1.innerHTML = (questionList.a);
    option2.innerHTML = (questionList.b);
    option3.innerHTML = (questionList.c);
    option4.innerHTML = (questionList.d);

}



loadQuestion();
const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
const getCheckAns = () =>{
    // storing user answer in variable answer
    let answer;
    answers.forEach((curAnsElem) => {
        // Inbuilt Function
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
        
    })
    return answer;

    
};
let count = 0;

submit.addEventListener('click',() =>{
    const checkedAnswer = getCheckAns();
    console.log(checkedAnswer);
    if(checkedAnswer == quizDB[questionCount].ans){
        // console.log("correct");
        count++;
    }; 

    deselectAll();
    questionCount++;
    if(questionCount < quizDB.length){
        
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
            <h3>Your Score is : ${count}/${quizDB.length}</h3>
            <button class="btn" onclick="location.reload()" >Play Again</button>
        `;
        showScore.classList.remove('scoreArea');
    }
})