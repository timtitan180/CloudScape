console.log("JS Script");
var sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click",function(){
    document.querySelector(".submission-alert").style.visibility = "visible";
});