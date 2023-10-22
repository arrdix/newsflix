import { GetNews } from "./fetchData";

const searchButton = document.querySelector('.nav-button');

searchButton.addEventListener('click', () => {
  const searchValue = `${document.querySelector('.nav-search').value}`;
  const searchNews = new GetNews('https://newsapi.org/v2/everything?langauge=en &searchin=title&pageSize=5&q=', searchValue);
  
  searchNews.fetchData();
})