const email = document.getElementById("email")
const invalidEmail= document.querySelector("email")


form.addEventListener ("submit", function(event){
    event.preventDefault();
    let errors = false;

    if(email.value==""){
        alert("No completaste el Email");
        
    } else{
        invalidEmail.style.display="none";
    }

    if(!errors){
        this.submit();}

    })