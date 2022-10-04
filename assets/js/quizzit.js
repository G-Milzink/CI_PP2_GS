
// Wrap variables in named object to avoid global scope.
const quizzitGlobalVariables = {
    "RANDOMIZED_RIDDLES" : [],
    "RANDOMIZED_ANSWERS" : [],
    "CORRECT_ANSWER" : '',
    "CHOSEN_ANSWER" : '',
    "SCORE" : 0,
    "WRONG" : 0,
    "ALLOW_SUBMIT" : false,
    "ANSWERED" : false
};

// Assign randomized values to 'global' variables.
quizzitGlobalVariables.RANDOMIZED_RIDDLES = generateListOfRiddles(RIDDLES);
quizzitGlobalVariables.RANDOMIZED_ANSWERS = generateListOfAnswers(FALSE_ANSWERS);

// Listen for user input: (riddle-me button loads a new riddle).
document.getElementById("riddle-me").addEventListener("click",riddleSelection);

//Assign anser-buttons to global array
const BUTTONS = document.getElementsByClassName("answer-button"); 
for (button of BUTTONS){
        button.addEventListener("click", selectAnswer);
}

// Listen for user input: (submit button submits answer for evaluation ONLY IF an answer has been selected).
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
    document.getElementById("riddle-display").style.color = "#BABB9F";
    quizzitGlobalVariables.ANSWERED = false;
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
    for (button of buttons){
            button.style.color = "#BABB9F";
            if (button.getAttribute("data-type") === randomButton){
                button.textContent = correctAnswer;    
            } else {
                    button.textContent = FALSE_ANSWERS[quizzitGlobalVariables.RANDOMIZED_ANSWERS[0]];
                    quizzitGlobalVariables.RANDOMIZED_ANSWERS.shift();
            }
    }
}

/**
 * Assign chosen answer to global vaiable.
 */
 function selectAnswer(){
    quizzitGlobalVariables.CHOSEN_ANSWER = this.textContent;
    quizzitGlobalVariables.ALLOW_SUBMIT = true;
}

/**
 * Check if answer is correct and if riddle has not been answered yet prcess
 * answer and update win/lose tally.
 */
 function submitAnswer(){
    if (quizzitGlobalVariables.CHOSEN_ANSWER === quizzitGlobalVariables.CORRECT_ANSWER && quizzitGlobalVariables.ALLOW_SUBMIT && !quizzitGlobalVariables.ANSWERED){
            ++quizzitGlobalVariables.SCORE;
            document.getElementById("quizzit-correct").textContent = "Correct: " + quizzitGlobalVariables.SCORE;
            document.getElementById("riddle-display").textContent = "Congratulations! You are correct.";
            document.getElementById("riddle-display").style.color = "#15C400";
            for (button of BUTTONS){
                button.style.color = "#15C400";
                    button.textContent = " :) ";
            }
    } else if(quizzitGlobalVariables.ALLOW_SUBMIT && !quizzitGlobalVariables.ANSWERED) {
            ++quizzitGlobalVariables.WRONG;
            document.getElementById("quizzit-wrong").textContent = "Wrong: " + quizzitGlobalVariables.WRONG;
            document.getElementById("riddle-display").textContent = "Sorry! You are mistaken.";
            document.getElementById("riddle-display").style.color = "red";
            for (button of BUTTONS){
                    button.style.color = "red";
                    button.textContent = " :( ";
            }
    }
    quizzitGlobalVariables.ALLOW_SUBMIT = false;
    quizzitGlobalVariables.ANSWERED = true;
}