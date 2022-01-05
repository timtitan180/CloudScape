 var firstName = document.querySelector("#fname");
    var lastName = document.querySelector("#lname");
    var city = document.querySelector("#city");
    var zipCode = document.querySelector("#zipcode");
    var age = document.querySelector("#age");
    var state = document.querySelector("select");

    function checkFirstName() {
        var pattern = firstName.getAttribute("pattern");
        var reg = new RegExp(pattern);
        message = "";
        if(!reg.test(firstName.value)) {
          firstName.style.borderColor = "red";
          var p = document.querySelector(".firstNameError");
          message+="Please enter your first name e.g. John";
          p.textContent = message;
          
        }

        else {
          firstName.style.borderColor = "green";
            document.querySelector(".firstNameError").textContent = "";
        }

      
    }

    function checkLastName() {
      var pattern = lastName.getAttribute("pattern");
        var reg = new RegExp(pattern);
        message = "";
        if(!reg.test(lastName.value)) {
          lastName.style.borderColor = "red";
          message+="Please enter your last name e.g. Dolittle";
          document.querySelector(".lastNameError").textContent = message;
        }

        if(reg.test(lastName.value)) {  
            lastName.style.borderColor = "green";
            document.querySelector(".lastNameError").textContent= "";
        }   
      
    }

    function checkAge() {
      var pattern = age.getAttribute("pattern");
        var reg = new RegExp(pattern);
        message = "";
        if(!reg.test(age.value)) {
          age.style.borderColor = "red";
          message+="Please enter your age e.g. 22";
          document.querySelector(".ageError").textContent = message;
        }
        if(reg.test(age.value)) {  
            age.style.borderColor = "green";
            document.querySelector(".ageError").textContent= "";
        }   
      
    }

    function checkCity() {
      var pattern = city.getAttribute("pattern");
        var reg = new RegExp(pattern);
        message = "";
        if(!reg.test(city.value)) {
          city.style.borderColor = "red";
          message+="Please enter your city e.g. Chicago";
          document.querySelector(".cityError").textContent = message;
        }

        if(reg.test(city.value)) {  
            city.style.borderColor = "green";
            document.querySelector(".cityError").textContent= "";
        }   
      
    }

    function checkState() {
      var pattern = state.getAttribute("pattern");
      var reg = new RegExp(pattern);
      message = "";
      if(!reg.test(select.value)) {
          state.style.borderColor = "red";
          message+="Please enter your state";
          document.querySelector(".stateError").textContent = message;
        }

        if(reg.test(select.value)) {  
            state.style.borderColor = "green";
            document.querySelector(".stateError").textContent= "";
        }   
      
    
     
        }

    function checkZipCode() {
      var pattern = zipCode.getAttribute("pattern");
        var reg = new RegExp(pattern);
        message = "";
        if(!reg.test(zipCode.value)) {
          zipCode.style.borderColor = "red";
          message+="Please enter your zip code e.g. 11111";
          document.querySelector(".zipCodeError").textContent = message;
        }

        if(reg.test(zipCode.value)) {  
            zipCode.style.borderColor = "green";
            document.querySelector(".zipCodeError").textContent= "";
        }   
      
    }



    var button = document.getElementById("button").addEventListener("click",function(event){
      event.preventDefault();
      checkFirstName();
      checkLastName();
      checkAge();
      checkCity();
      checkState();
      checkZipCode();

    });
