let grillaCategorias = document.querySelector(".categories_container")
let categories = ""
fetch('https://dummyjson.com/recipes/tags')
.then(function(response){
  return response.json()
})
.then(function(data){
for (let i=0; i<data.length; i++){
  let markUp= `
  <a class="category_button" href="category.html?cat=${data[i]}"> ${data[i]} </a>
  `
  categories += markUp
}
grillaCategorias.innerHTML = categories
})
