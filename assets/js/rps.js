document.addEventListener("DOMContentLoaded", rpsGame);

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
    }
}