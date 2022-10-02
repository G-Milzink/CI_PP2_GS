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