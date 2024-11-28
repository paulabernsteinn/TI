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
let form = document.querySelector(".form_search")
let buscador = document.getElementById("buscador")
let invalidBuscador = document.querySelector(".buscador")

form.addEventListener("submit", function(event){
    event.preventDefault();
    let errors= false
    if (buscador.value === ""){
        invalidBuscador.innerText= "El campo no puede esatr vacio ni tener menos de tres letras"
        invalidBuscador.style.display = "block"
        errors = true
    }else  
    invalidBuscador.style.display = "none"
 
    
    if (buscador.value.length <4){
        invalidBuscador.innerText= "El campo no puede esatr vacio ni tener menos de tres letras"
        invalidBuscador.style.display = "block"
        errors = true
    }else  
    invalidBuscador.style.display = "none"

    if (buscador) {
        buscador.innerHTML = buscador.value;
    } else {
        document.getElementById('resultado-buscador').innerHTML = 'No se ingresó ninguna búsqueda.';
    }
 
    if (!errors){
    this.submit()
    }
})