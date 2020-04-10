
// https://www.youtube.com/watch?v=Yw-SYSG-028&list=PLhAYqyL8bdjy10dbfKoxnO4CXyGR9quCs&index=17&t=0s

window.addEventListener("load", init);

//Global variables

//Available Levels

const levels = {
    easy: 5,
    medium: 3,
    hard: 1
}

//To change level
let currentLevel = levels.easy;




let time = currentLevel;
let score = 0;
let isPlaying = false; 

// DOM Elements
const easyBtn = document.getElementById('easy');
const mediumBtn = document.getElementById('medium');
const hardBtn = document.getElementById('hard');

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const timeDisplay = document.querySelector('#time');
const scoreDisplay = document.querySelector('#score');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

// Words array

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

// Initialize game
function init(){
    //show number of seconds in display
    seconds.innerHTML = currentLevel;
    //Load word from arr
    timeDisplay.innerHTML = currentLevel;
    showWord();  
    // Start matching on word input
    wordInput.addEventListener('input', startMatch);
    //Start count down every second
    setInterval(countDown, 1000);
    //Check game status
    setInterval(checkStatus, 50);
}

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add('active');
    mediumBtn.classList.remove('active');
    hardBtn.classList.remove('active');
    currentLevel = levels.easy;
    startMatch();
    //show number of seconds in display
    seconds.innerHTML = currentLevel;
    //Load word from arr
    timeDisplay.innerHTML = currentLevel;
})

mediumBtn.addEventListener("click", function(){
    
    easyBtn.classList.remove('active');
    mediumBtn.classList.add('active');
    hardBtn.classList.remove('active');
    currentLevel = levels.medium;
    startMatch();
     //show number of seconds in display
     seconds.innerHTML = currentLevel;
     //Load word from arr
     timeDisplay.innerHTML = currentLevel;
})

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove('active');
    mediumBtn.classList.remove('active');
    hardBtn.classList.add('active');
    currentLevel = levels.hard;
    startMatch();
    //show number of seconds in display
    seconds.innerHTML = currentLevel;
    //Load word from arr
    timeDisplay.innerHTML = currentLevel;
})

// Pick random word from words array and display
function showWord(){
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

// Start match
function startMatch() {
    if (matchWords()) {
     isPlaying = true;
     time = currentLevel + 1;
     
     showWord(words);
     wordInput.value = "";
     score++;
    }
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
    
}

// Match currentWord to wordInput
function matchWords() {
    if (wordInput.value === currentWord.innerHTML){  //innerHTML will select the word 
        message.innerHTML = 'Correct!!!';
        
        return true;
        } else {
            message.innerHTML = '';
            return false;
        }
}

// Countdown timer - Time Left
function countDown(){
    
    if(time > 0){
        time--;
    } else if (time === 0){
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
    
}

// Check game status
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = "Game Over!!!";
        score = -1;
    }
}

