let yournam = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let submit = document.getElementById("submit");
let boxName = document.getElementById("namer");
let boxEmail = document.getElementById("emailer");
let boxMessage = document.getElementById("messager");

// submit.onclick = function(){
//     boxName.value = "Name: " + yournam.value
//     boxEmail.value = "Email: " + email.value
//     boxMessage.value = "Message: " + message.value
//     yournam.value = ""
//     email.value = ""
//     message.value = ""
//     submit.innerText = "Done" 
//     // submit.style.backgroundColor = "red"
// }

function submitForm() {
    submit.onclick = function(){
       boxName.value = "Name: " + yournam.value
       boxEmail.value = "Email: " + email.value
       boxMessage.value = "Message: " + message.value
       yournam.value = ""
       email.value = ""
       message.value = ""
       submit.innerText = "Done" 
       // submit.style.backgroundColor = "red"
    }
    return true
}
submitForm();

// setTimeout(() => {
//     if (submitForm() === true) {
//         submit.innerText = "Submit"
//     }    
//     // submit.style.backgroundColor = "red"
// }, 300);



//This code is creating page unresponsive
// setTimeout(() => {
//     while (submitForm() === true) {
//         submit.innerText = "Submit"
//     }
// }, 300);