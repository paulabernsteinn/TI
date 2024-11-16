let queryString = location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id")

let nombreReceta= document.querySelector(".receta")
let imagenReceta = document.querySelector(".imagen_receta")
let ingredientesReceta= document.querySelector(".ingredientes")
let instruccionesReceta = document.querySelector(".instrucciones")
let tiempo_coccionReceta = document.querySelector(".tiempo_coccion")

let recetaIndividual={
    name: "",
    image:"",
    ingredients: "",
    instructions: "",
    cookTimeMinutes: "",
}
fetch(`https://dummyjson.com/recipes/${id}`)
.then(function(response) {
    return response.json()
  })
  .then(function(data){
   
    
    recetaIndividual.name = data.name
    nombreReceta.innerText = recetaIndividual.name

    recetaIndividual.image = data.image
    imagenReceta.innerHTML = `<img src=${recetaIndividual.image} />`

    recetaIndividual.ingredients = data.ingredients
    ingredientesReceta.innerText = recetaIndividual.ingredients

    recetaIndividual.instructions = data.instructions
    instruccionesReceta.innerText = recetaIndividual.instructions

    recetaIndividual.cookTimeMinutes = data.cookTimeMinutes
    tiempo_coccionReceta.innerText = recetaIndividual.cookTimeMinutes


  })
.catch(function(e){
    console.log(e)
})

