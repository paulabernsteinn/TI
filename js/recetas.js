let queryString = location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id")

let nombreReceta= document.querySelector(".receta")
let imagenReceta = document.querySelector(".imagen_receta")
let ingredientesReceta= document.querySelector(".ingredientes")
let instruccionesReceta = document.querySelector(".instrucciones")

let recetaIndividual={
    name: "",
    image:"",
    ingredients: "",
    instructions: "",
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

  })
.catch(function(e){
    console.log(e)
})

