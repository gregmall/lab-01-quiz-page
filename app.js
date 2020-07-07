// import functions and grab DOM elements
import { confirmedYes } from './quiz-functions.js';
const myButton= document.getElementById('quizbutton');
const resultSpan = document.getElementById('result');




// initialize state

// set event listeners to update state and DOM
myButton.addEventListener('click', () =>{
    
    const name = prompt ('What is your name?');
    console.log(name);
    const really = confirm('Are you sure you want to take this difficult test?');
    if (really === false){
        console.log("ok");
        return;
    }
    const answer1 = prompt('Are cats mammals?');
    const answer2 = prompt('Do cats like to chase laser lights?');
    const answer3 = prompt('Are cats pretty much the best pet in the world');
    const answer4 = prompt('Do cats have wings?');
    console.log(answer1, answer2, answer3, answer4);

let score = 0;
console.log(score);

if (confirmedYes(answer1)) {
    score++;

}

if (confirmedYes(answer2)) {
    score++;
}

if (confirmedYes(answer3)){
    score++;
}
if (!confirmedYes(answer4)){
    score++;
}

console.log(score);
if (score ===4){
    resultSpan.textContent = 'Hi ' + name + ', your score is: '  +  score + ' out of 4. You are a smart person';
}else{
    resultSpan.textContent = 'Hi ' + name + ', your score is: ' + score + ' out of 4. Maybe you should meet some cats.'
}


});