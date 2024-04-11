let url = 'https://api.themoviedb.org/3/movie/157336?api_key=55c68cc085d781dbb4e4351aba2d2b36&append_to_response=videos';
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parses the JSON response body.
  })
  .then(data =>{
    console.log(data.genres[1])
  }) 
 .catch(error=>console.error(error));