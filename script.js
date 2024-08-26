const startButton= document.querySelector('.start-quiz button');
const rulesBox= document.querySelector('.rules-box');
const exitButton= document.querySelector('.exit-bttn button');
const continueButton= document.querySelector('.continue-bttn button');
const quizBox= document.querySelector('.quiz-box');
const options_list = document.querySelector('.obj-list');
const timerCount = quizBox.querySelector('.time-display')

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
    queCount(1);
    timerStart(20);

}

let que_count = 0;
let que_number = 1;
let count;
let timeVal = 20;
let score = 0;

const nextButton = document.getElementById('f-bttn');
const resultSection = document.querySelector('.result-section');
const replayBttn = document.querySelector('.replay');
const quitBttn = document.querySelector('.quit');

nextButton.onclick = ()=>{
    if(
        que_count < questions.length){
            que_count++;
            que_number++;
            showQuestions(que_count)
            queCount(que_number);
            timerStart(timeVal);
            // clearInterval(count);
        } else{
            displayResult();
        }
    

}



function showQuestions(index){
    const question_text = document.querySelector('.question');
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

let x_Icon = '<div><span class="icons icon-x">&#10006;</span></div>';
let tickIcon = '<div><span class="icons icon-tick">&#10004</span></div>';

function optionSelected(answer){
    clearInterval(count);
    let selectAnswer = answer.textContent;
    let correctAnswer = questions[que_count].answer;
    let allOptions = options_list.children.length;
    
    if (selectAnswer == correctAnswer) {
        score += 1;
        console.log(score)
        answer.classList.add('correct');
        answer.insertAdjacentHTML('beforeend', tickIcon);

    // console.log("Answer is correct")
        
    } else{
        answer.classList.add('wrong');
        answer.insertAdjacentHTML('beforeend', x_Icon);

        // console.log('Answer is wrong');
    }

    for (let i = 0; i < allOptions; i++) {
        if (options_list.children[i].textContent == correctAnswer) {
            options_list.children[i].setAttribute('class', 'correct' );
            options_list.children[i].insertAdjacentHTML('beforeend', tickIcon);

        }       
    }

    for (let i = 0; i < allOptions; i++) {
        options_list.children[i].classList.add('remove');
        
    }
}

function displayResult() {
    
    rulesBox.style.display = 'none';
    quizBox.style.display = 'none';
    resultSection.style.display = 'block';
    const userScore =  resultSection.querySelector('.score-text p')
    let scoreTag = '<span>You got <p>' + score + '</p> out of <p>50</p></span>';
    userScore.innerHTML = scoreTag;
}

function timerStart(time){
    count = setInterval(timer, 1000);
    function timer(){
        timerCount.textContent = time; 
        time--;
        if(time > 0) {
            clearInterval(count);
            timerCount.textContent = '00';
        }
    }
}

function queCount(index){
    const questionCount = quizBox.querySelector('.num-question');
    let questionCountTag = '<p><span>' + index + '</span>/50 Questions</p>';
    questionCount.innerHTML = questionCountTag;
}
