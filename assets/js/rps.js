document.addEventListener("DOMContentLoaded", rpsGame);

/**
 * Main "game-loop", called after loading the DOM
 * waits for user input then starts rps game.
 */
function rpsGame(){
    var rpsCountdownTimer;

    document.getElementById("rps-start").addEventListener("click", rpsBegin);
}

/**
 * Set countdown duration and start countdown loop.
 */
function rpsBegin(){
    document.getElementById("ai-choice").style.backgroundImage = "";
    document.getElementById("player-choice").style.backgroundImage = "";
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

function rpsAwaitUserInput(){
    let selectors = document.getElementsByClassName("rps-selection");
    for (selector of selectors){
        selector.addEventListener("click", function(){
            if (document.getElementById("rps-outcome-display").textContent === "Go!" && this.getAttribute("data-type") === "rock"){
                document.getElementById("player-choice").style.backgroundImage = "url(assets/images/rps/rock.png)";
                console.log("0");
                // aiInput();
            } else if (document.getElementById("rps-outcome-display").textContent === "Go!" && this.getAttribute("data-type") === "paper"){
                document.getElementById("player-choice").style.backgroundImage = "url(assets/images/rps/paper.png)";
                console.log("1");
                // aiInput();
            } else if (document.getElementById("rps-outcome-display").textContent === "Go!" && this.getAttribute("data-type") === "scissors"){
                document.getElementById("player-choice").style.backgroundImage = "url(assets/images/rps/scissors.png)";
                console.log("2");
                // aiInput();
            } 
        })
    }
}