// Names object to contain "global" variables:
const guillotineGlobalVariables = {
    "answer" : ''
}

// Wait for the DOM to load, then execute main game function:
document.addEventListener("DOMContentLoaded", runGuillotineGame);

/**
 * Main "game-loop"...called after loading the DOM.
 */
function runGuillotineGame(){   
    guillotineGlobalVariables.answer = grabRandomWord();
    buildKeyboard();
    buildAnswerDisplay()
    listenToKeyboard()
}

/**
 * Picks a random word from a pre-made array of words.
 * @returns Array containing all letters of random words as seperate values.
 */
function grabRandomWord(){
    const WORDS = ["ABSOLUTE", "BATHROOM", "CHAMPION", "DATABASE"];
    let rand = Math.floor(Math.random()*WORDS.length);
    let word = Array.from(WORDS[rand]);
    return word;
}

/**
 * Generates HTML for keyboard section and populates with the letters of the alphabet.
 */
function buildKeyboard(){
    let keyboard = document.getElementById("keyboard");
    let alphabet = "ABCDEFGHJIKLMNOPQRSTUVWXYZ";
    let letters = Array.from(alphabet);
    let i = 0;
    while (i < letters.length){
        key = letters[i]; i++;
        keyboard.innerHTML += `<button class="keys" data-type="`+key+`">`+key+`</button>`;
    }
}

/**
 * Generates html for answer display and assigns a unique ID to each element.
 */
function buildAnswerDisplay(){
    let display = document.getElementById("answer-display");
    let wordLength = guillotineGlobalVariables.answer.length;
    let i = 0;
    while (i < wordLength){
        i++;
        display.innerHTML += `<p class="answer" id="pos`+i+`">_</p>`;
    }   
}

/**
 * Listen for user input, check if chosenletter is included in answer and execute
 * relevant function.
 */
function listenToKeyboard(){
    let keyboard = document.getElementsByClassName("keys");
    for (keys of keyboard){
        keys.addEventListener("click", function(){
            let answer = guillotineGlobalVariables.answer;
            let letter = this.getAttribute("data-type");
            if (answer.includes(letter)){
                this.style.backgroundColor = "#747474";
                positions = (guessCorrect(letter,answer));
                for (i of positions){
                    document.getElementById("pos"+i).textContent = letter;
                }
            } else {
                this.style.backgroundColor = "#272626";
            }
        })
    }
}