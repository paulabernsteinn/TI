const lista_category = document.querySelector(".grilla_category")
let grilla_category = ""




fetch(`https://dummyjson.com/recipes/tag/${cat}`)
.then(function(response) {
    return response.json()
  })
  .then(function(data){
    for (let i=0; i < data.length; i++){
        let receta = data.recipes.cat[i];
        
        let markUp = `
            <article class="receta">
                <img src= ${receta.image} >
                <p class = "nombre_receta"> ${receta.name} </p>
                <p> Dificultad: ${receta.difficulty} </p>
                <p class = "ver_mas"> <a href=receta.html?id=${receta.id}>Ver más </a></p>
            </article>
            `;
        grilla_category += markUp;
    }
    lista_category.innerHTML = grilla_category;
    
   
  })
.catch(function(e){
    console.log(e)
})

