
let url = 'https://pokeapi.co/api/v2/pokemon/pikachu';
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parses the JSON response body.
  })
  .then(data =>{
    console.log(data.name)
    console.log(data.height)
  }) 
 .catch(error=>console.error(error));
 