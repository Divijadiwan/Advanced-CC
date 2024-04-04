let url = //pokeapi.co/api/v2/pokemon/pikachu
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // parses JSON response into native JavaScript objects
  })
  .then(data => {
    console.log(data); // processes the data
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  })
  .finally(() => {
    console.log('Fetch attempt finished.'); // executes regardless of the Promise's outcome
  });

