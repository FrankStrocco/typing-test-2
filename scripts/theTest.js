const TEST_WRAPPER = document.querySelector('.testWrapper');
const TEST_AREA = document.querySelector('#testArea');
const ORIG_TEXT = document.querySelector('#origText p').innerHTML;
const RESET_BTN = document.querySelector('#reset');
const THE_TIMER = document.querySelector('.timer');

var timer = [0,0,0,0];
var interval; //declaring global interval
var timerRunning = false;
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
    let origTextMatch = ORIG_TEXT.substring(0, textEntered.length);
    if (textEntered == ORIG_TEXT){
        TEST_WRAPPER.style.borderColor = '#1ccc9e';
        timerRunning = false;

    } else {
        if (textEntered == origTextMatch) {
            TEST_WRAPPER.style.borderColor = '#5499D0';
        } else {
            TEST_WRAPPER.style.borderColor = 'orangered';
        }
    }
    console.log(textEntered);
}

// start the THE_TIMER

function start(){
    let textEnteredLength = testArea.value.length
    if (textEnteredLength === 0 && timerRunning == false) {
        //setInterval(runTimer, 10);
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }

}

// reset all

function reset(){
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    THE_TIMER.innerHTML = '00:00:00'
    TEST_AREA.value = '';
    timerRunning = false;
    TEST_WRAPPER.style.borderColor = '#888';
}

testArea.addEventListener('keyup', spellCheck, false);
testArea.addEventListener('keypress', start, false);
RESET_BTN.addEventListener('click', reset, false);
