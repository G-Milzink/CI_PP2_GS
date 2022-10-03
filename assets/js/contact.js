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