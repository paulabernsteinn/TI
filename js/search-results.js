let queryString = location.search
let queryStringObj = new URLSearchParams(queryString);
let q= queryStringObj.get("buscador")
let lista_search = document.querySelector(".recetas")
let recetas_search = ""

console.log(q)
fetch(`https://dummyjson.com/recipes/search?q=${q}`)
.then(function (response){
    return response.json();
})

.then(function (data){    
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
        recetas_search += markUp;
    }
    lista_search.innerHTML = recetas_search;

})
.catch(function (error){
    console.log("Mi error fue", error);
})

let buscador = document.getElementById("buscador")
const invalidBuscador = document.querySelector(".buscador")

form.addEventListener("submit", function(event){
    event.preventDefault();
    let errors= false
    if (buscador.value === ""){
        invalidBucador.innerText = "el campo esta vacio";
        invalidBucador.style.display = 'block';
        errors = true
    } else{
        invalidBucador.style.display = 'none';
    }

    if (buscador.value.length <4){
        invalidBucador.innerText = "no completaste el password o tiene menos de 3 numeros";
        invalidBucador.style.display = 'block';
        errors = true
    } else{
        invalidBucador.style.display = 'none';
    }
})