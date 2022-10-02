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
