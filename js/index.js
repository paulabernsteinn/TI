const lista_recetas = document.querySelector(".recetas")
let recetas = ""

const grilla = document.querySelector('.grilla')


fetch('https://dummyjson.com/recipes')
    .then(function (response){
        return response.json();
    })
    
    .then(function (data){    
        for (let i=0; i < 10; i++){
            let receta = data.recipes[i];
            
            let markUp = `
                <article class="receta">
                    <img src= ${receta.image} >
                    <p class = "nombre_receta"> ${receta.name} </p>
                    <p> Dificultad: ${receta.difficulty} </p>
                    <p class = "ver_mas"> <a href=receta.html?id=${receta.id}>Ver más </a></p>
                </article>
                `;
            recetas += markUp;
        }
        lista_recetas.innerHTML = recetas;

    })
    .catch(function (error){
        console.log("Mi error fue", error);
    })

let skip = 0;
cargarRecetas("https://dummyjson.com/recipes?limit=10%skip=0");
document.querySelector(".cargar_mas").addEventListener('click', function(){
    skip += 10
    let url = 'https://dummyjson.com/recipes?limit=10%skip=' + skip;
    cargarRecetas(url)
});