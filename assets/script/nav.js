const searchButton = document.querySelector('.nav-button');
const baseUrl = 'https://newsapi.org/v2/everything?langauge=en&searchin=title&pageSize=5&q=';
const APIkey = '&apiKey=277dad093058421980894250311f4805';

searchButton.addEventListener('click', () => {
  const searchValue = `${document.querySelector('.nav-search').value}`;

  fetch(`${baseUrl}${searchValue}${APIkey}`, {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzAyNmFmYjgxNTZmYjk0M2IzOGZhYjc1ODBiNzg3OCIsInN1YiI6IjY1MzIzODZjNDgxMzgyMDBlMjg5Njg5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JfSWLeYQU-I7u0y5nGo66ztnBnd9G6X-_Gbj3VIb3Rk',
    }
  })
  .then(response => {
    return response.json()
  })
  .then(responseJson => {
    if (responseJson.articles.length) {
      console.log(responseJson);
    } else {
      console.log(`Can't find article related to "${searchValue}"`);
    }
  })
  .catch(error => {
    console.log(error);
  })
})