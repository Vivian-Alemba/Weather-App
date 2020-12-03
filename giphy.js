const image=document.querySelector('img')



fetch('https://api.giphy.com/v1/gifs/translate?api_key=2kh9kYij2II0VWHa7CQTkZ6pqsj66aLV&s=cats'
,{mode: 'cors'})
.then(function(response){
    return response.json()
})
.then(function(response){
  
    // console.log(response.data.images.original.url)
    image.src=response.data.images.original.url
})


// URL (required), options (optional)
// fetch('https://url.com/some/url')
// .then(function(response) { 
  // Successful response :)
// })
// .catch(function(err) {
  // Error :(
// });