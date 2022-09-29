document.addEventListener("DOMContentLoaded", rpsGame);

/**
 * Main "game-loop", called after loading the DOM
 * waits for user input then starts rps game.
 */
function rpsGame(){
    let rpsCountdownTimer;
    let rpsPlayerChoice;
    let rpsAIChoice;

    document.getElementById("rps-start").addEventListener("click", rpsBegin);
}

/**
 * Set countdown duration and start countdown loop.
 */
function rpsBegin(){
    document.getElementById("ai-choice").style.backgroundImage = "assets/images/rps/rock.png";
    document.getElementById("player-choice").style.backgroundImage = "assets/images/rps/paper.png";
    document.getElementById("rps-outcome-display").textContent = 3;
    rpsCountdownTimer = setInterval(rpsCountdown,1000);
}

/**
 * countdown to 0 == Go!
 * clear timer and move on to accept user input.
 */
 function rpsCountdown(){
    let msg = document.getElementById("rps-outcome-display").textContent;
    console.log(msg);
    if (msg >= 2){
         document.getElementById("rps-outcome-display").textContent = --msg;
    } else {
        document.getElementById("rps-outcome-display").textContent = "Go!";
    }
    if (document.getElementById("rps-outcome-display").textContent === "Go!"){
        clearInterval(rpsCountdownTimer);
        rpsAwaitUserInput();
    }
}

/**
 * Check if countdown is at "Go!", if so accept user input,
 * set player choice display to appropriate image and aply ai-choice.
 */
function rpsAwaitUserInput(){
    let selectors = document.getElementsByClassName("rps-selection");
    for (selector of selectors){
        selector.addEventListener("click", function(){
            if (document.getElementById("rps-outcome-display").textContent === "Go!" && this.getAttribute("data-type") === "rock"){
                document.getElementById("player-choice").style.backgroundImage = "url(assets/images/rps/rock.png)";
                rpsPlayerChoice = 0;
                rpsAiInput();
            } else if (document.getElementById("rps-outcome-display").textContent === "Go!" && this.getAttribute("data-type") === "paper"){
                document.getElementById("player-choice").style.backgroundImage = "url(assets/images/rps/paper.png)";
                rpsPlayerChoice = 1;
                rpsAiInput();
            } else if (document.getElementById("rps-outcome-display").textContent === "Go!" && this.getAttribute("data-type") === "scissors"){
                document.getElementById("player-choice").style.backgroundImage = "url(assets/images/rps/scissors.png)";
                rpsPlayerChoice = 2;
                rpsAiInput();
            } 
        })
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
            document.getElementById("ai-choice").style.backgroundImage = "url(assets/images/rps/rock.png)";
            rockPaperScissorsAiChoice = 0;
        } else if (choice === 2){
            document.getElementById("countdown").textContent = "...";
            document.getElementById("ai-choice").style.backgroundImage = "url(assets/images/rps/paper.png)";
            rockPaperScissorsAiChoice = 1;
        } else if (choice === 3){
            document.getElementById("countdown").textContent = "...";
            document.getElementById("ai-choice").style.backgroundImage = "url(assets/images/rps/scissors.png)";
            rockPaperScissorsAiChoice = 2;
        } 
    }
    // decideRound();
}