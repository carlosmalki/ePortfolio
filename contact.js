
function validateName() {
    
    let val = document.getElementById("name");
    
    let span = document.getElementById("name-error");
  
   
    if (val.value.length < 2) {
      
      span.innerHTML = 'Namnet skall vara minst 2 tecken';
      span.style.color = "red";
     
      val.style.border = "3px solid red";
    } else {
      // Annars, om namnet är giltigt
      // Visa ett meddelande om att namnet är giltigt i grönt
      span.innerHTML = 'Namnet är giltigt';
      span.style.color = "green";
      // Markera fältet med en grön ram
      val.style.border = "3px solid green";
    }
  }
  

  function validatePhone() {
   
    let val = document.getElementById("phone");
   
    let span = document.getElementById("phone-error");
    // Skapa ett reguljärt uttryck för att kontrollera att telefonnumret endast innehåller siffror
    let re = /^[0-9]+$/;
  
   
    if (val.value.length !== 10 ) {
    
      span.innerHTML = "Telefonnumret måste vara 10 siffror";
      span.style.color = "red";
   
      val.style.border = "3px solid red";
    } else {
    
      span.innerHTML = "Telefonnumret är giltigt";
      span.style.color = "green";
      // Markera fältet med en grön ram
      val.style.border = "3px solid green";
    }
  }
  
  // Validering av e-post
  function validateEmail() {
   
    let val = document.getElementById("email");
  
    let span = document.getElementById("email-error");
    // Skapa ett reguljärt uttryck för att kontrollera e-postadressens format
    let expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  
   
    if (expr.test(val.value)) {
      
      val.style.border = "3px solid green";
      span.style.color = "green";
      span.innerHTML = "E-mail är giltig";
    } else {
      
      val.style.border = "3px solid red";
      span.innerHTML = "E-mail är ogiltig";
      span.style.color = "red";
    }
  }
  
  function validateMessage() {
   
    let val = document.getElementById("message");
    // Hämta felmeddelande-elementet för meddelandefältet
    let span = document.getElementById("message-error");

    if (val.value.length < 15) {
 
      span.innerHTML = 'Skriv ett meddelande som är minst 15 tecken';
      span.style.color = "red";
    
      val.style.border = "3px solid red";
    } else {
     
      span.innerHTML = 'Giltigt meddelande';
      span.style.color = "green";
     
      val.style.border = "3px solid green";
    }
  }
  