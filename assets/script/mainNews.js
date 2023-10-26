import { GetNews } from './fetchData.js';
import readNews from './readNews.js';

class MainNews extends HTMLElement {
  constructor() {
    super();
  }

  set newsItem(item) {
    this._newsItem = item;
    this.render();
  }

  render() {
    this.innerHTML = `
      <img class="main-news-img" src="${this._newsItem.urlToImage}" alt="${this._newsItem.title}">
      <span><h4>${this._newsItem.source.name}</h4></span>
      <h2><a href="#">${this._newsItem.title}</a></h2>
    `;
  }
}

customElements.define('main-news', MainNews);

const mainNewsBaseUrl = 'https://newsapi.org/v2/everything?' +
                        'langauge=en&' +
                        'sortBy=popularity&' +
                        'searchin=title,content,description&' +
                        'pageSize=2&' +
                        'page=2&';

export function mainNewsHandler(keyword) {
  if (keyword === 'home') {
    const fetchMainNews = new GetNews(`${mainNewsBaseUrl}sources=`, 'the-washington-post');
    fetchMainNews.fetchData()
      .then(render)
      .catch(responseMessage);
  } else if (keyword === 'israel-palestine war') {
    const fetchMainNews = new GetNews(`${mainNewsBaseUrl}q=`, 'gaza');
    fetchMainNews.fetchData()
      .then(render)
      .catch(responseMessage);
  } else {
    const fetchMainNews = new GetNews(`${mainNewsBaseUrl}q=`, `${keyword}`);
    fetchMainNews.fetchData()
      .then(render)
      .catch(responseMessage);
  }
}

function render(items) {
  items.forEach(item => {
    const mainNewsElement = document.createElement('main-news');
    mainNewsElement.setAttribute('class', 'main-news');
    mainNewsElement.newsItem = item;

    document.querySelector('.main-content').append(mainNewsElement);

    mainNewsElement.addEventListener('click', () => {
      readNews(item);
    })
  })
}

function responseMessage(message) {
  alert(`Error main: ${message}`);
}