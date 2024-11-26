let queryString = location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id")

let nombreReceta= document.querySelector(".receta")
let imagenReceta = document.querySelector(".imagen_receta")
let ingredientesReceta= document.querySelector(".ingredientes")
let instruccionesReceta = document.querySelector(".instrucciones")
let tiempo_coccionReceta = document.querySelector(".tiempo_coccion")
let categoriasReceta = document.querySelector(".categorias_receta")

let recetaIndividual={
    name: "",
    image:"",
    ingredients: "",
    instructions: "",
    cookTimeMinutes: "",
    tags: "",
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

    recetaIndividual.instructions = data.instructions
    instruccionesReceta.innerText = recetaIndividual.instructions

    let instructions = "";
    for (let i = 0; i < recetaIndividual.instructions.length; i++) {
     let markUp = `<li>${recetaIndividual.instructions[i]}</li>`
     instructions += markUp
    }

    instruccionesReceta.innerHTML = instructions

    recetaIndividual.cookTimeMinutes = data.cookTimeMinutes
    tiempo_coccionReceta.innerText = recetaIndividual.cookTimeMinutes

    let tags = "";
    
    for (let j = 0; j < data.tags.length; j++) {
      let tag = data.tags[j];
      tags += `
     
        <a href="./category.html?idCategorias=${tag}" class="tags" ><p>${tag}</p></a>
        `;
  
    };
    categoriasReceta.innerHTML = tags


  })
.catch(function(e){
    console.log(e)
})

