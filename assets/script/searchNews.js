import { GetNews } from "./fetchData";
import readNews from './readNews.js';

const searchButton = document.querySelector('.nav-button');
const searchForm = document.querySelector('.nav-search');

searchButton.addEventListener('click', searchNews);
searchForm.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    searchNews();
  }
})

function searchNews() {
  const searchValue = `${document.querySelector('.nav-search').value}`;

  const searchNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&searchin=title&pageSize=5&q=', searchValue);
  searchNews.fetchData()
   .then(render)
   .catch(responseMessage);

  function render(items) {
    const mainElement = document.querySelector('main');
    const searchContainer = document.createElement('div');

    mainElement.innerHTML = ``;
    searchContainer.setAttribute('class', 'search-container');
    mainElement.append(searchContainer);

    items.forEach(item => {
      const itemDate = new Date(item.publishedAt);
      const itemYear = itemDate.getFullYear();
      const itemMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(itemDate);
      const itemDay = itemDate.getDate();

      const searchItem = document.createElement('div');
      searchItem.setAttribute('class', 'search-item');
      searchItem.innerHTML = `
        <img src="${item.urlToImage}" alt="">
        <div class="search-detail">
          <div class="search-head">
            <h3>${item.title}</h3>
            <p>By: ${item.author} on ${itemMonth} ${itemDay}, ${itemYear}</p>
          </div>
          <div class="search-body">
            <p>${item.description}<a class="read-more" href=""> (Read More)</a></p>
          </div>
          <div class="search-footer">
            <p>Source: ${item.source.name}</p>
          </div>
        </div>
      `;

      searchContainer.append(searchItem);

      searchItem.addEventListener('click', event => {
        event.preventDefault();
        readNews(item);
      })
    })
  }

  function responseMessage(message) {
  alert(`Error search: ${message}`);
  }
}