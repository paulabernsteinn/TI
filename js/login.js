let form = document.querySelector(".form_login")
let email = document.getElementById("email")
let contraseña = document.getElementById("contraseña")


form.addEventListener("submit", function(event){
    event.preventDefault();
    let errors= false
    if (email.value === ""){
        alert("Por favor complete el campo Email")
        errors = true
    }else errors = false

    if (contraseña.value === ""){
        alert("Por favor complete el campo Contraseña")
        errors = true
    }else errors = false
    if(!errors)
    this.submit()
})