
/**
 * Send information from contact form to my email adress according to template
 * using emailJS
 * 
 * Code taken from tutorial:
 * "Contact Form with Email Js | Send Emails using JavaScript through Email Js | Email Js Tutorial"
 * by ALTERCODES
 * https://www.youtube.com/watch?v=5EZsRnJpUNU&t=1s&ab_channel=ALTERCODES
 */

document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        message : document.getElementById("msg").value
    };
    emailjs.init("nHsMv-fGFHGxcKPg5");
    document.getElementById("send-msg").textContent = "WORKING";
    emailjs.send("service_6eisq0d","template_yf457nh",params).then(() => {
        displayMessage();
    });       
});


/**
 * Code snippet taken from Stack Over Flow:
 * "Check if a string contains an email address?"
 * https://stackoverflow.com/questions/16424659/check-if-a-string-contains-an-email-address
 * @param {*} string
 * @returns true if string contains an email adress 
 */
function checkIfEmailInString(string) { 
    /\b[a-z0-9-_.]+@[a-z0-9-_.]+(\.[a-z0-9]+)+/i.test(string);
}

function displayMessage(){
    let message = `
                    <div id="modal">
                        <h1>Thanks!</h1>
                        <h2>Your message has been seent!</h2>
                        <button id="back-home" onclick="window.location.href='index.html';">Take me back.</button>
                    </div>
    `;
    document.getElementById("contact-wrapper").innerHTML = message;
}