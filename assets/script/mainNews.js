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

export function homeMainNews() {
  const homeMainNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&searchin=title&pageSize=2&sources=', 'the-washington-post');
  homeMainNews.fetchData()
    .then(render)
    .catch(responseMessage);
}

export function gazaMainNews() {
  const gazaMainNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&searchin=title&pageSize=2&q=gaza&sources=', 'al-jazeera-english');
  gazaMainNews.fetchData()
    .then(render)
    .catch(responseMessage);
}

export function worldMainNews() {
  const worldMainNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&searchin=title&pageSize=2&sources=', 'new-york-magazine');
  worldMainNews.fetchData()
    .then(render)
    .catch(responseMessage);
}

export function businessMainNews() {
  const businessMainNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&sortBy=popularity&searchin=title,content,description&pageSize=2&q=', 'business');
  businessMainNews.fetchData()
    .then(render)
    .catch(responseMessage);
}

export function entertainmentMainNews() {
  const entertainmentMainNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&sortBy=popularity&searchin=title,content,description&pageSize=2&q=', 'entertainment');
  entertainmentMainNews.fetchData()
    .then(render)
    .catch(responseMessage);
}

export function scienceMainNews() {
  const scienceMainNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&sortBy=popularity&searchin=title,content,description&pageSize=2&q=', 'science');
  scienceMainNews.fetchData()
    .then(render)
    .catch(responseMessage);
}

export function sportsMainNews() {
  const sportsMainNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&sortBy=popularity&searchin=title,content,description&pageSize=2&q=', 'sports');
  sportsMainNews.fetchData()
    .then(render)
    .catch(responseMessage);
}

export function techMainNews() {
  const techMainNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&sortBy=popularity&searchin=title,content,description&pageSize=2&q=', 'technology');
  techMainNews.fetchData()
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