const startButton= document.querySelector('.start-quiz button');
const rulesBox= document.querySelector('.rules-box');
const exitButton= document.querySelector('.exit-bttn button');
const continueButton= document.querySelector('.continue-bttn button');
const quizBox= document.querySelector('.quiz-box');


startButton.onclick = ()=>{
    rulesBox.style.display = 'block';
}

exitButton.onclick = () =>{
    rulesBox.style.display = 'none';
}

continueButton.onclick = ()=>{
    rulesBox.style.display = 'none';
    quizBox.style.display = 'block';
    showQuestions(0);

}

let que_count = 0;
let que_number = 1;

const nextButton = document.getElementById('f-bttn');

nextButton.onclick = ()=>{
    if(
        que_count < questions.length){
            que_count++;
            que_number++;
            showQuestions(que_count)
            queCount(que_number);
        }
    

}



function showQuestions(index){
    const question_text = document.querySelector('.question');
    const options_list = document.querySelector('.obj-list');
    let que_tag = '<h2>'+ questions[index].numb + '. ' + questions[index].question +'</h2>';
    let options_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
                      + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
                      + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
                      + '<div class="option">' + questions[index].options[3] + '<span></span></div>'
    question_text.innerHTML = que_tag;
    options_list.innerHTML = options_tag;
    const option = options_list.querySelectorAll('.option');
for (let i = 0; i < option.length; i++) {
    // const element = array[i];
    option[i].setAttribute('onclick', 'optionSelected(this)')
}
}

function optionSelected(answer){
    let selectAnswer = answer.textContent;
    let correctAnswer = questions[que_count].answer;
    if (selectAnswer == correctAnswer) {
    console.log("Answer is correct")
        
    } else{
        console.log('Answer is wrong')
    }
}

function queCount(index){
    const questionCount = quizBox.querySelector('.num-question');
    let questionCountTag = '<p><span>' + index + '</span>/50 Questions</p>';
    questionCount.innerHTML = questionCountTag;
}