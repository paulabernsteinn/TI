let queryString = location.search
let queryStringObj = new URLSearchParams(queryString);
let cat= queryStringObj.get("cat")

let lista_categorias = document.querySelector(".grilla_categoria")
let grilla = ""


fetch(`https://dummyjson.com/recipes/tag/${cat}`)
.then(function(response) {
    return response.json()
  })
  .then(function(data){
    for (let i=0; i < data.recipes.length ; i++){
        let receta = data.recipes[i];
        
        let markUp = `
            <article class="receta">
                <img src= ${receta.image} >
                <p class = "nombre_receta"> ${receta.name} </p>
                <p> Dificultad: ${receta.difficulty} </p>
                <p class = "ver_mas"> <a href=receta.html?id=${receta.id}>Ver más </a></p>
            </article>
            `;
        grilla += markUp;
    }
    lista_categorias.innerHTML = grilla;
    
   
  })
.catch(function(e){
    console.log(e)
})

