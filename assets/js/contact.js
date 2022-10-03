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
 * Code taken from:
 * Contact Form with Email Js | Send Emails using JavaScript through Email Js | Email Js Tutorial
 * by ALTERCODES
 * https://www.youtube.com/watch?v=5EZsRnJpUNU&t=1s&ab_channel=ALTERCODES
 */
function sendMessage(){
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        message : document.getElementById("msg").value
    }
    emailjs.send("service_6eisq0d","template_yf457nh",params).then(function(res){
    })
    alert("message sent! Thank you! :)");
}

