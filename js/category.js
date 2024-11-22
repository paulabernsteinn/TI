let queryString = location.search
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("cat")


fetch(`https://dummyjson.com/recipes/tag/${cat}`)
.then(function(response) {
    return response.json()
  })
  .then(function(data){
   
    
   
  })
.catch(function(e){
    console.log(e)
})

