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
                    <p> ${receta.name} </p>
                    <p> <a href=detalle.html?id=${receta.id}>Ver mas </a></p>
                    <p> Dificultad: ${receta.difficulty} </p>
                    
                </article>
                `;
            recetas += markUp;
        }
        lista_recetas.innerHTML = recetas;

    })
    .catch(function (error){
        console.log("Mi error fue", error);
    })
