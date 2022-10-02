// Names object to contain "global" variables:
const guillotineGlobalVariables = {
    "answer" : '',
    "wrongGuesses" : 0,
    "correctGuesses" : 0,
    "loseCounter" : 0,
    "winCounter" : 0
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
    const WORDS = ["ABSOLUTE", "BATHROOM", "CHAMPION", "DATABASE","BANANAS", "BICYCLE", "RESTAURANT", "DOLPHIN", "SUPERCALIFRAGILISTICEXPIALIDOCIOUS"];
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
                    incrementCorrectGuesses();
                }
            } else {
                guessWrong();
                this.style.backgroundColor = "#272626";
            }
        })
    }
}

function incrementCorrectGuesses(){
    ++guillotineGlobalVariables.correctGuesses;
    console.log(guillotineGlobalVariables.correctGuesses);
    console.log(guillotineGlobalVariables.answer.length);
    if (guillotineGlobalVariables.correctGuesses === guillotineGlobalVariables.answer.length){
        alert("You survive...to opress the peasants one more day!")
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
    for (i = 0; i < answer.length; i++){
        if (letter === answer[i]){
            position.push(i+1);
        }
    }
    return position;
}

function guessWrong(){
    ++guillotineGlobalVariables.wrongGuesses;
    switch(guillotineGlobalVariables.wrongGuesses){
        case 1:
            document.getElementById("guillotine-display").src = "assets/images/guillotine/1.png";
            break;
        case 2:
            document.getElementById("guillotine-display").src = "assets/images/guillotine/2.png";
            break;
        case 3:
            document.getElementById("guillotine-display").src = "assets/images/guillotine/3.png";
            break;
        case 4:
            document.getElementById("guillotine-display").src = "assets/images/guillotine/4.png";
            break;
        case 5:
            document.getElementById("guillotine-display").src = "assets/images/guillotine/5.png";
            break;
        case 6:
            document.getElementById("guillotine-display").src = "assets/images/guillotine/6.png";
            ++guillotineGlobalVariables.loseCounter;
            document.getElementById("guillotine-losses").textContent = `LOSE: ${guillotineGlobalVariables.loseCounter}`;
            alert("Vive La Revolution!")
            break; 
    }
}