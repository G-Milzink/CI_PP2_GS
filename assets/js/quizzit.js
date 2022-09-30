// Create an array of riddles and answers.
const RIDDLES = [];
RIDDLES[0] = ["I'm rarely touched but often held. If you have wit, you'll use me well. What am I?","A Tongue"];
RIDDLES[1] = ["I have seas with no water, coast with no sand, towns without people, mountains without land. What am I?","A Map"];
RIDDLES[2] = ["Often will I spin a tale, never will I charge a fee. I'll amuse you an entire eve, but, alas you wont remember me. What am I?", "A Dream"];
RIDDLES[3] = ["What does it have in it pocketsessss?", "A Ring"];
RIDDLES[4] = ["I have roots that no one sees. I am taller then the trees. Up and up I go. And yet I never grow. What am i?", "A Mountain"];

// Create array of "false" answers.
const FALSE_ANSWERS = ["A Tree", "A Cloud", "A Journey",
                                "A Hammer","The Sea", "The Sky",
                                "A Foot", "An Arm", "A Leg",
                                "A Vision", "A Lake", "An Egg",
                                "The Grass", "The Ground", "A Sword"
];

// Wrap variables in named object to avoid global scope.
const quizzitGlobalVariables = {
    "RANDOMIZED_RIDDLES" : '',
    "RANDOMIZED_ANSWERS" : '',
    "CORRECT_ANSWER" : '',
    "CHOSEN_ANSWER" : '',
    "SCORE" : '0',
    "WRONG" : '0',
    "ALLOW_SUBMIT" : ''
}

// Assign randomized values to global variables.
quizzitGlobalVariables.RANDOMIZED_RIDDLES = generateListOfRiddles(RIDDLES);
quizzitGlobalVariables.RANDOMIZED_ANSWERS = generateListOfAnswers(FALSE_ANSWERS);
quizzitGlobalVariables.ALLOW_SUBMIT = false;

// Listen for user input.
document.getElementById("riddle-me").addEventListener("click",riddleSelection);

const BUTTONS = document.getElementsByClassName("answer-button");
for (button of BUTTONS){
        button.addEventListener("click", selectAnswer);
}

document.getElementById("answer-submit-button").addEventListener("click",submitAnswer);

/**
 * Generate a array of random numbers equal in length to the number of riddles available.
 * The list is used to randomize the order of questions for each game.
 * @returns randomized array of numbers.
 */
 function generateListOfRiddles(_array){
    let generated = [];
    for (i = 0; i < _array.length; i++){
            generated[i] = i;
    }
    generated.sort(() => Math.random() - 0.5);
    return generated;
}

/**
 * Generate a array of random numbers equal in length to the number of false answers available.
 * The list is used to randomize the false answers presented for each game.
 * @returns randomized array of numbers.
 */
 function generateListOfAnswers(_array){
    let generated = [];
    for (i = 0; i < _array.length; i++){
            generated[i] = i;
    }
    generated.sort(() => Math.random() - 0.5);
    return generated;
}

/**
 * Select riddle according to randomized list and remove current selection from list
 */
 function riddleSelection(){
    document.getElementById("riddle-display").style.color = "greenyellow";
    var answer;
    if (quizzitGlobalVariables.RANDOMIZED_RIDDLES.length > 0) {
            document.getElementById("riddle-display").textContent = RIDDLES[quizzitGlobalVariables.RANDOMIZED_RIDDLES[0]][0];
            answer = RIDDLES[quizzitGlobalVariables.RANDOMIZED_RIDDLES[0]][1];
            quizzitGlobalVariables.CORRECT_ANSWER = answer;
            quizzitGlobalVariables.RANDOMIZED_RIDDLES.shift();
            randomizeButton(answer);
    } else {
            quizzitGlobalVariables.RANDOMIZED_RIDDLES = generateListOfRiddles(RIDDLES);
            quizzitGlobalVariables.RANDOMIZED_ANSWERS = generateListOfAnswers(FALSE_ANSWERS);
            document.getElementById("riddle-display").textContent = ".......?";
            let buttons = document.getElementsByClassName("answer-button");
            for (button of buttons){
                    button.textContent = "...";
            }
            alert("You have answered all our riddles!");
    } 
}

/**
 * Randomize the button that displays the correct answer.
 * Populate other buttons with flase answers.
 */
 function randomizeButton(correctAnswer){
    let rand = Math.floor(Math.random()*3);
    let randomButton = `answer-${rand+1}`;
    let buttons = document.getElementsByClassName("answer-button");
    for (button of BUTTONS){
            button.style.color = "greenyellow";
            if (button.getAttribute("data-type") === randomButton){
                button.textContent = correctAnswer;    
            } else {
                    button.textContent = FALSE_ANSWERS[quizzitGlobalVariables.RANDOMIZED_ANSWERS[0]];
                    quizzitGlobalVariables.RANDOMIZED_ANSWERS.shift();
            }
    }
}