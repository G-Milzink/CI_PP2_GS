// Create array of words to guess for "Guillotine game."
const WORDS = ["ABSOLUTE", "BATHROOM", 
                "CHAMPION", "DATABASE",
                "BANANAS", "BICYCLE", 
                "RESTAURANT", "DOLPHIN", 
                "AMENITIES","APRICOT",
                "MOUNTAIN","PINEAPPLE",
                "REINDEER","PROFESSIONAL",
                "VARIABLE","CONSTANT",
                "INTERFACE","FEATURE",
                "ALIBI","RAINFOREST",
                "MANAGER", "SUPERNOVA",
                "DEVELOPER", "SIDEWALK",
                "HOUSEHOLD","INVESTIGATION",
                "AUTHORITARIAN", "UNDERGROUND",
                "MALEVOLENT", "MEASUREMENT",
                "CHAINSAW", "COMMUNITY",
                "COMEDY", "HIGHWAY"];

// Wrap variables in named object to avoid global scope.
const guillotineGlobalVariables = {
    "answer" : '',
    "wrongGuesses" : 0,
    "correctGuesses" : 0,
    "loseCounter" : 0,
    "winCounter" : 0
};

// Wait for the DOM to load, then execute main game function:
document.addEventListener("DOMContentLoaded", runGuillotineGame);
document.getElementById("new-word").addEventListener("click",resetGame);


/**
 * Main "game-loop"...called after loading the DOM.
 */
function runGuillotineGame(){
    guillotineGlobalVariables.answer = grabRandomWord();
    buildKeyboard();
    buildAnswerDisplay();
    listenToKeyboard();
}

/**
 * Picks a random word from a pre-made array of words.
 * @returns Array containing all letters of random words as seperate values.
 */
function grabRandomWord(){
    let rand = Math.floor(Math.random()* WORDS.length);
    let word = Array.from(WORDS[rand]);
    return word;
}

/**
 * Generates HTML for keyboard section and populates with the letters of the alphabet.
 */
function buildKeyboard(){
    let keyboard = document.getElementById("keyboard");
    keyboard.style.visibility = "visible";
    let alphabet = "ABCDEFGHJIKLMNOPQRSTUVWXYZ";
    let letters = Array.from(alphabet);
    let i = 0;
    while (i < letters.length){
        let key = letters[i]; i++;
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
 * Listen for user input, check if chosen letter is included in answer and execute
 * relevant function.
 */
function listenToKeyboard(){
    let keyboard = document.getElementsByClassName("keys");
    for (let keys of keyboard){
        keys.addEventListener("click", function(){
            let answer = guillotineGlobalVariables.answer;
            let letter = this.getAttribute("data-type");
            if (answer.includes(letter)){
                this.style.backgroundColor = "#747474";
                this.style.border = "3px solid #15C400";
                this.setAttribute("data-type", "0");
                let positions = (guessCorrect(letter,answer));
                for (let i of positions){
                    document.getElementById("pos"+i).textContent = letter;
                    incrementCorrectGuesses();
                }
            } else if (this.getAttribute("data-type") !== "0"){
                this.setAttribute("data-type", "0");
                guessWrong();
                this.style.backgroundColor = "#272626";
                this.style.border = "3px solid red";
            }
        });
    }
}

/**
 * Increments invisible counter and counts as a win if all letters have been guessed.
 */
function incrementCorrectGuesses(){
    ++guillotineGlobalVariables.correctGuesses;
    if (guillotineGlobalVariables.correctGuesses === guillotineGlobalVariables.answer.length){
        document.getElementById("keyboard").style.visibility = "hidden";
        document.getElementById("guillotine-display").src = "assets/images/guillotine/07.webp";
        document.getElementById("guillotine-display").style.border = "3px solid #15C400";
        ++guillotineGlobalVariables.winCounter;
        document.getElementById("guillotine-wins").textContent = `WIN: ${guillotineGlobalVariables.winCounter}`;
    }
}

/**
 * Evaluate player guess to determine positions of letter inside answer.
 * @param {*} letter 
 * @param {*} answer 
 * @returns Array containing the positions of the correctly guessed letters as appearing in the answer
 */
function guessCorrect(letter,answer){
    let position = [];
    for (let i = 0; i < answer.length; i++){
        if (letter === answer[i]){
            position.push(i+1);
        }
    }
    return position;
}

/**
 * Update display to represent number of wrong guesses and determine if lose-condition is reached
 * (6 wrong guesses ends the game)
 */
function guessWrong(){
    ++guillotineGlobalVariables.wrongGuesses;
    switch(guillotineGlobalVariables.wrongGuesses){
        case 1:
            document.getElementById("guillotine-display").src = "assets/images/guillotine/01.webp";
            break;
        case 2:
            document.getElementById("guillotine-display").src = "assets/images/guillotine/02.webp";
            break;
        case 3:
            document.getElementById("guillotine-display").src = "assets/images/guillotine/03.webp";
            break;
        case 4:
            document.getElementById("guillotine-display").src = "assets/images/guillotine/04.webp";
            break;
        case 5:
            document.getElementById("guillotine-display").src = "assets/images/guillotine/05.webp";
            break;
        case 6:
            document.getElementById("guillotine-display").style.border = "3px solid red";
            document.getElementById("guillotine-display").src = "assets/images/guillotine/06.webp";
            ++guillotineGlobalVariables.loseCounter;
            document.getElementById("guillotine-losses").textContent = `LOSE: ${guillotineGlobalVariables.loseCounter}`;
            document.getElementById("keyboard").style.visibility = "hidden";
            break; 
    }
}


/**
 * Clear keyboard and answer display, reset guess-counters and guillotine-image.
 * Restart game.
 */
function resetGame(){
    document.getElementById("answer-display").innerHTML = "";
    document.getElementById("keyboard").innerHTML = "";
    document.getElementById("guillotine-display").style.border = "3px solid #BABB9F";

    guillotineGlobalVariables.wrongGuesses = 0;
    guillotineGlobalVariables.correctGuesses = 0;

    document.getElementById("guillotine-display").src = "assets/images/guillotine/00.webp";

    runGuillotineGame();

}