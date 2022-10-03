function sendMessage(){
    var tempParameters = {
        from_name : document.getElementById("name").value,
        message: document.getElementById("msg").value
    }


    emailjs.send('service_6eisq0d','template_xeb75zg',tempParameters)
    .then(function(res){
        console.log("succes", res.status);
    })
}