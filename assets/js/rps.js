// Create array with possible outcomes.
const outcomeTable = [];
    outcomeTable[0] = ["DRAW", "WIN",  "LOSE"];
    outcomeTable[1] = ["LOSE", "DRAW", "WIN"];
    outcomeTable[2] = ["WIN",  "LOSE", "DRAW"];

// Wrap variables in named object to avoid global scope:
const rpsGlobalVars = {
    "rpsCountdownTimer" : '',
    "rpsPlayerChoice" : '',
    "rpsAIChoice" : '',
    "rpsLoseCounter" : 0,
    "rpsWinCounter" : 0,
    "timerRunning" : false
};

// Wait for DOM to load then run main "game-loop":
document.addEventListener("DOMContentLoaded", rpsGame);

/**
 * Main "game-loop", called after loading the DOM
 * waits for user input then starts rps game.
 */
function rpsGame(){
    document.getElementById("rps-start").addEventListener("click", rpsBegin);
}

/**
 * Set countdown duration and start countdown loop.
 */
function rpsBegin(){
    document.getElementById("ai-choice").style.backgroundImage = "";
    document.getElementById("player-choice").style.backgroundImage = "";
    document.getElementById("rps-outcome-display").style.color = "#BABB9F";
    document.getElementById("rps-outcome-display").textContent = 3;
    if (rpsGlobalVars.timerRunning === false){
        rpsGlobalVars.timerRunning = true;
        rpsGlobalVars.rpsCountdownTimer = setInterval(rpsCountdown,1000);
    }
}

/**
 * countdown to 0 then Go!
 * clear timer and move on to accept user input.
 */
 function rpsCountdown(){
    let msg = document.getElementById("rps-outcome-display").textContent;
    if (msg >= 2){
         document.getElementById("rps-outcome-display").textContent = --msg;
    } else {
        document.getElementById("rps-outcome-display").textContent = "Go!";
        clearInterval(rpsGlobalVars.rpsCountdownTimer);
        rpsGlobalVars.timerRunning = false;
        rpsAwaitUserInput();
    }
}

/**
 * Check if countdown is at "Go!", if so accept user input,
 * set player choice display to appropriate image and aply ai-choice.
 */
function rpsAwaitUserInput(){
    let selectors = document.getElementsByClassName("rps-selection");
    for (let selector of selectors){
        selector.addEventListener("click", function(){
            if (document.getElementById("rps-outcome-display").textContent === "Go!" && this.getAttribute("data-type") === "rock"){
                document.getElementById("player-choice").style.backgroundImage = "url(assets/images/rps/rock.webp)";
                rpsGlobalVars.rpsPlayerChoice = 0;
                rpsAiInput();
            } else if (document.getElementById("rps-outcome-display").textContent === "Go!" && this.getAttribute("data-type") === "paper"){
                document.getElementById("player-choice").style.backgroundImage = "url(assets/images/rps/paper.webp)";
                rpsGlobalVars.rpsPlayerChoice = 1;
                rpsAiInput();
            } else if (document.getElementById("rps-outcome-display").textContent === "Go!" && this.getAttribute("data-type") === "scissors"){
                document.getElementById("player-choice").style.backgroundImage = "url(assets/images/rps/scissors.webp)";
                rpsGlobalVars.rpsPlayerChoice = 2;
                rpsAiInput();
            } 
        });
    }
}

/**
 * Generate selection for "ai-opponent" and assign correct image to relevant HTML element.
 */
function rpsAiInput(){
    let choice = Math.floor(Math.random()* 3 + 1);
    if (document.getElementById("rps-outcome-display").textContent === "Go!"){
        if (choice === 1){
            document.getElementById("rps-outcome-display").textContent = "...";
            document.getElementById("ai-choice").style.backgroundImage = "url(assets/images/rps/rock.webp)";
            rpsGlobalVars.rpsAiChoice = 0;
        } else if (choice === 2){
            document.getElementById("rps-outcome-display").textContent = "...";
            document.getElementById("ai-choice").style.backgroundImage = "url(assets/images/rps/paper.webp)";
            rpsGlobalVars.rpsAiChoice = 1;
        } else if (choice === 3){
            document.getElementById("rps-outcome-display").textContent = "...";
            document.getElementById("ai-choice").style.backgroundImage = "url(assets/images/rps/scissors.webp)";
            rpsGlobalVars.rpsAiChoice = 2;
        } 
    }
    rpsDecideRound();
}

/**
 * compare player and "ai" selections to outcomeTable (2d-array) and retrieve outcome.
 * Display outcome for player and update score counters.
 */
 function rpsDecideRound(){
    document.getElementById("rps-outcome-display").textContent = outcomeTable[rpsGlobalVars.rpsAiChoice][rpsGlobalVars.rpsPlayerChoice];
    if (outcomeTable[rpsGlobalVars.rpsAiChoice][rpsGlobalVars.rpsPlayerChoice] === "LOSE") {
        document.getElementById("rps-outcome-display").style.color = "red";
        ++rpsGlobalVars.rpsLoseCounter;
        document.getElementById("rps-losses").textContent = `LOSE: ${rpsGlobalVars.rpsLoseCounter}`;
    } else if (outcomeTable[rpsGlobalVars.rpsAiChoice][rpsGlobalVars.rpsPlayerChoice] === "WIN") {
        document.getElementById("rps-outcome-display").style.color = "#15C400";
        ++rpsGlobalVars.rpsWinCounter;
        document.getElementById("rps-wins").textContent = `WIN: ${rpsGlobalVars.rpsWinCounter}`;
    } else {
        document.getElementById("rps-outcome-display").style.color = "yellow";
    }
}