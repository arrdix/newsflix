import { GetNews } from "./fetchData";

const searchButton = document.querySelector('.nav-button');

searchButton.addEventListener('click', () => {
  const searchValue = `${document.querySelector('.nav-search').value}`;

  const searchNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&searchin=title&pageSize=5&q=', searchValue);
  searchNews.fetchData()
   .then(render)
   .catch(responseMessage);

  function render(items) {
    const mainElement = document.querySelector('main');
    const searchContainer = document.createElement('div');

    mainElement.innerHTML = '';
    searchContainer.setAttribute('class', 'search-container');
    mainElement.append(searchContainer);

    items.forEach(item => {
      const newsDate = new Date(item.publishedAt);
      const newsYear = newsDate.getFullYear();
      const newsMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(newsDate);
      const newsDay = newsDate.getDate();

      const searchItem = document.createElement('div');
      searchItem.setAttribute('class', 'search-item');
      searchItem.innerHTML = `
        <img src="${item.urlToImage}" alt="">
        <div class="search-detail">
          <div class="search-head">
            <h3>${item.title}</h3>
            <p>By: ${item.author} on ${newsMonth} ${newsDay}, ${newsYear}</p>
          </div>
          <div class="search-body">
            <p>${item.description}<a href=""> (Read More)</a></span></p>
          </div>
          <div class="search-footer">
            <p>Source: <a href="${item.url}">${item.source.name}</a></p>
          </div>
        </div>
      `;

      searchContainer.append(searchItem);
    })
  }

  function responseMessage(message) {
  alert(`Error: ${message}`);
  }
})