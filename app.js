// import functions and grab DOM elements
const myButton= document.getElementById('quizbutton');


// initialize state
myButton.addEventListener('click', () =>{
    
    const name = prompt ('What is your name?');
    console.log(name);
    const answer1 = prompt('Are cats mammals?');
    const answer2 = prompt('Do cats like to chase laser lights?');
    const answer3 = prompt('Are cats pretty much the best pet in the world');
    console.log(answer1, answer2, answer3);
})

// set event listeners to update state and DOM