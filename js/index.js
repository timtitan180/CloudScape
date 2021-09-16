//js script for the signup

alert("Javascript works!");

var firstName = document.querySelector("#fname").value;
var lastName = document.querySelector("#lname"),value;
var city = document.querySelector("#city").value;
var zipCode = document.querySelector("#zipcode").value;
var state = document.querySelectorAll("select");

function inputsAreNotEmpty() {
    return firstName.length > 0 && lastName.length > 0 && city.length > 0 && zipCode.length > 0;
}


function checkStateExists() {
    if(state.value == state[0].value) {
        document.getElementById("select").style.border = "2px solid red";
        var message = document.getElementById("errorMessage");
        message.style.visibility = "visible";
        message.innerHTML = "Please enter your State";
    }
}

var button = document.getElementById("button").addEventListener("click",inputsAreNotEmpty(),
    checkStateExists());

    if(!inputsAreNotEmpty()) {
        document.querySelectorAll("inputs").style.border = "2px solid red";
        var message = document.getElementById("errorMessage");
        message.style.visibility = "visible";
        message.innerHTML = "Please enter all fields";
    }
