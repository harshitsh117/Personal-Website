
var sendersName = document.getElementById("senders-name").value
var sendersEmail = document.getElementById("senders-email").value
var subject = document.getElementById("subject").value
var message = document.getElementById("message").value
var sendButton = document.getElementById("send-button")

console.log(sendersName)
console.log("dddd")
sendButton.addEventListener("click", () => {

    Email.send({
        Host: "smtp.gmail.com",
        Username: "demo.harshit11@gmail.com",
        Password: "demo1234898",
        To: 'harshitsh117@gmail.com',
        From: "demo.harshit1@gmail.com",
        Subject: `Mail from : ${sendersName}`,
        Body: `${message}\n\n Sender's email : ${sendersEmail}`,
    }).then(
        message => alert("mail sent successfully")
    );

})
// if(sendButton){
//     sendButton.addEventListener("click",()=>{
//         // console.log(sendersName.value)
//         // console.log(sendersEmail.value)
//         // console.log(subject.value)
//         // console.log(message.value)

//         window.open(`mailto:harshitsh117@gmail.com?subject=${subject}&body=${message}`);
//     })
// }
console.log("dd")


console.log("hh")

