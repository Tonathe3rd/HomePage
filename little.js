var yournam = document.getElementById("name");
var email = document.getElementById("email");
var message = document.getElementById("message");
var submit = document.getElementById("submit");
var boxName = document.getElementById("namer");
var boxEmail = document.getElementById("emailer");
var boxMessage = document.getElementById("messager");

submit.onclick = function(){
        boxName.value = "Name: " + yournam.value
        boxEmail.value = "Email: " + email.value
        boxMessage.value = "Message: " + message.value
        yournam.value = ""
        email.value = ""
        message.value = ""
        submit.innerText = "Done"
    }

// submit.style.backgroundColor = "black";