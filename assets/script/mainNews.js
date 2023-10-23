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

function homeMainNews() {
  const homeMainNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&searchin=title&pageSize=2&sources=', 'the-washington-post');
  homeMainNews.fetchData()
    .then(render)
    .catch(responseMessage);
}

function gazaMainNews() {
  const gazaMainNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&searchin=title&pageSize=2&q=gaza&sources=', 'al-jazeera-english');
  gazaMainNews.fetchData()
    .then(render)
    .catch(responseMessage);
}

function worldMainNews() {
  const worldMainNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&searchin=title&pageSize=2&sources=', 'new-york-magazine');
  worldMainNews.fetchData()
    .then(render)
    .catch(responseMessage);
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

export { homeMainNews, gazaMainNews, worldMainNews };