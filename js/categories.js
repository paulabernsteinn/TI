let queryString = location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id")

let nombreCategorias= document.querySelector(".categorias")

let CategoriasIndividual={
    mealType: "",
}
fetch(`https://dummyjson.com/recipes/${id}`)
.then(function(response) {
    return response.json()
  })
  .then(function(data){
   
    
    CategoriasIndividual.mealType = data.mealType
    nombreCategorias.innerText = CategoriasIndividual.mealType

  })
.catch(function(e){
    console.log(e)
})

