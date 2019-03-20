const TEST_WRAPPER = document.querySelector('.testWrapper');
const TEST_AREA = document.querySelector('#testArea');
const ORIG_TEXT = document.querySelector('#origText p').innerHTML;
const RESET_BTN = document.querySelector('#reset');
const THE_TIMER = document.querySelector('.timer');

var timer = [0,0,0,0];

// helper function

function leadingZero(time) {
    time <= 9 ? time = '0' + time : time
    return time;
}

// timer function

function runTimer(){
    let currentTime = leadingZero(timer[0]) + ':' + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    THE_TIMER.innerHTML = currentTime;
    timer[3]++;
    timer[0] = Math.floor((timer[3] / 100) / 60); // gives minutes
    timer[1] = Math.floor((timer[3] / 100) - (timer[0] * 60)); // gives minutes
    timer[2] = Math.floor((timer[3]) - (timer[1] * 100) - (timer[0] * 6000)); // gives minutes

}


// -start timer when keypress is detected inside of the textArea element
// -compare the text entered
// -on the timer we need to track how long it takes
// -constantly update the timer
// -stop the timer when entriew match
// -at anytime we want the user to be able to start hover
// -change textArea box styling (color) to indicate feedback


// spell check

function spellCheck(){
    let textEntered = testArea.value;
    console.log(textEntered);
}

// start the THE_TIMER

function start(){
    let textEnteredLength = testArea.value.length
    if (textEnteredLength === 0) {
        setInterval(runTimer, 10);
    }
    console.log(textEnteredLength);

}

// reset all

function reset(){
    console.log('Reset Button Has Been Pressed');
}

testArea.addEventListener('keyup', spellCheck, false);
testArea.addEventListener('keypress', start, false);
RESET_BTN.addEventListener('click', reset, false);
