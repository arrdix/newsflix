const baseUrl = 'https://newsapi.org/v2/everything?langauge=en&sortBy=popularity&searchin=title&pageSize=4&q=';
const APIkey = '&apiKey=277dad093058421980894250311f4805';
const keyword = 'palestine';

fetch(`${baseUrl}${keyword}${APIkey}`, {
  method: 'GET',
  header: {
    'accept': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzAyNmFmYjgxNTZmYjk0M2IzOGZhYjc1ODBiNzg3OCIsInN1YiI6IjY1MzIzODZjNDgxMzgyMDBlMjg5Njg5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JfSWLeYQU-I7u0y5nGo66ztnBnd9G6X-_Gbj3VIb3Rk',
  }
})
.then(response => {
  return response.json();
})
.then(responseJson => {
  if (responseJson.articles.length === 4) {
    console.log(responseJson.articles)
  } else {
    console.log(`There is no headline news related to "${keyword}"`)
  }
})
.catch(error => {
  console.log(error);
})