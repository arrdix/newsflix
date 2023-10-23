import { GetNews } from './fetchData.js';

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
  const gazaMainNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&searchin=title&pageSize=2&q=', 'gaza');
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
  const mainContentElement = document.querySelector('.main-content');
  mainContentElement.innerHTML = '';

  items.forEach(item => {
    const mainNewsElement = document.createElement('main-news');
    mainNewsElement.setAttribute('class', 'main-news');
    mainNewsElement.newsItem = item;

    mainContentElement.append(mainNewsElement);
  })
}

function responseMessage(message) {
  alert(`Error: ${message}`);
}

export { homeMainNews, gazaMainNews, worldMainNews };