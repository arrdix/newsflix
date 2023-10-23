import { GetNews } from './fetchData.js';

class AsideNews extends HTMLElement {
  constructor() {
    super();
  }

  set newsItem(item) {
    this._newsItem = item;

    this.newsDate = new Date(this._newsItem.publishedAt);
    this.newsYear = this.newsDate.getFullYear();
    this.newsMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(this.newsDate);
    this.newsDay = this.newsDate.getDate();

    this.render();
  }

  render() {
    this.innerHTML = `
      <img src="${this._newsItem.urlToImage}" alt="${this._newsItem.title}">
      <div class="aside-news-detail">
        <div class="aside-news-title">
          <P><a href="">${this._newsItem.title}</a></P>
        </div>
        <div class="aside-news-date">
          <p>${this.newsMonth} ${this.newsDay}, ${this.newsYear}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('aside-news', AsideNews);

function homeAsideNews() {
  const homeAsideNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&pageSize=8&page=2&sources=', 'the-washington-post');
  homeAsideNews.fetchData()
    .then(render)
    .catch(responseMessage);
}

function gazaAsideNews() {
  const gazaAsideNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&pageSize=8&page=2&q=', 'gaza');
  gazaAsideNews.fetchData()
    .then(render)
    .catch(responseMessage);
}

function worldAsideNews() {
  const worldAsideNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&pageSize=8&page=2&sources=', 'new-york-magazine');
  worldAsideNews.fetchData()
    .then(render)
    .catch(responseMessage);
}

function render(items) {
  const asideNewsContainerElement = document.querySelector('.aside-news-container');
  asideNewsContainerElement.innerHTML = "";

  items.forEach(item => {
    const asideNewsElement = document.createElement('aside-news');
    asideNewsElement.setAttribute('class', 'aside-news');
    asideNewsElement.newsItem = item;

    asideNewsContainerElement.append(asideNewsElement);
  })
}

function responseMessage(message) {
  alert(`Error: ${message}`);
}

export { homeAsideNews, gazaAsideNews, worldAsideNews };