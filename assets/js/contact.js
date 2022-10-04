document.getElementById("modal").style.display = none;

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("send-msg").addEventListener("click", sendMessage);
});

/**
 * emailsjs script, taken from emailjs tutorial page.
 */
(function() {
    emailjs.init("nHsMv-fGFHGxcKPg5");
})();

/**
 * Send information from contact form to my email adress according to template
 * using emailJS
 * 
 * Code taken from tutorial:
 * "Contact Form with Email Js | Send Emails using JavaScript through Email Js | Email Js Tutorial"
 * by ALTERCODES
 * https://www.youtube.com/watch?v=5EZsRnJpUNU&t=1s&ab_channel=ALTERCODES
 */
function sendMessage(){
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        message : document.getElementById("msg").value
    };
        if (params.from_name !== '' && params.email_id !== '' && params.message !== '' && checkIfEmailInString(params.email_id)){
            emailjs.send("service_6eisq0d","template_yf457nh",params).then(function(res){
            });
            document.getElementById("modal").style.display = block;
        }
}

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