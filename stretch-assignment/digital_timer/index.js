
// const digits = document.querySelector('.digits');
// const secondTens = document.querySelector('#secondTens');
// const secondOnes = document.querySelector('#secondOnes');



let time = 0;
let counter;
const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msHunds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');
const startButton = document.querySelector('.start');
const resetButton = document.querySelector('.reset');
const digits = document.querySelector('.digits');
function displayTime() {
    time += 10;
    let timeArray = time.toString().split('');
    msTens.textContent = timeArray[timeArray.length-2];
    if(timeArray.length >= 3){
        msHunds.textContent = timeArray[timeArray.length-3];
    }
    if(timeArray.length >= 4){
        secondOnes.textContent = timeArray[timeArray.length-4];
    }
    if(timeArray.length >= 5){
        msTens.textContent = 0;
        msHunds.textContent = 0;
        secondOnes.textContent = 0;
        secondTens.textContent = 1;
        digits.style.color = 'red';
        clearInterval(counter);
    }
}   
startButton.addEventListener("click",startTimer);
function startTimer(){
    counter = setInterval( displayTime ,10);
    startButton.disabled = true;
}
resetButton.addEventListener("click",resetTimer);
function resetTimer(){
    clearInterval(counter);
    time = 0;
    msTens.textContent = '-';
    msHunds.textContent = '-';
    secondOnes.textContent = '-';
    secondTens.textContent = '-';
    startButton.disabled = false;
    digits.style.color = 'dodgerblue';
}
