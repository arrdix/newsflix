import { GetNews } from './fetchData.js';

class HeadlineNews extends HTMLElement {
  constructor() {
    super();
  }

  set newsItem(item) {
    this._newsItem = item;
    this.render();
  }

  render() {
    this.innerHTML = `
      <img class="highlight-img" src="${this._newsItem.urlToImage}" alt="${this._newsItem.title}">
      <h3>
        <a href="#">${this._newsItem.title}</a>
      </h3>
    `
  }
}

customElements.define('headline-item', HeadlineNews);

function homeHeadline() {
  const homeHeadline = new GetNews('https://newsapi.org/v2/everything?langauge=en&sortBy=popularity&searchin=title&pageSize=4&sources=', 'the-washington-post');
  homeHeadline.fetchData()
    .then(render)
    .catch(responseMessage);
}

function gazaHeadline() {
  const gazaHeadline = new GetNews('https://newsapi.org/v2/everything?langauge=en&sortBy=popularity&searchin=title&pageSize=4&q=', 'gaza');
  gazaHeadline.fetchData()
    .then(render)
    .catch(responseMessage);
}

function worldHeadline() {
  const worldHeadline = new GetNews('https://newsapi.org/v2/everything?langauge=en&sortBy=popularity&searchin=title&pageSize=4&sources=', 'new-york-magazine');
  worldHeadline.fetchData()
    .then(render)
    .catch(responseMessage);
}

function responseMessage(message) {
  alert(`Error: ${message}`);
}

function render(items) {
  const gridContainerElement = document.querySelector('.grid-container');
  gridContainerElement.innerHTML = "";

  items.forEach(item => {
    const headlineElement = document.createElement('headline-item');
    headlineElement.setAttribute('class', 'grid-item');
    headlineElement.newsItem = item;

    gridContainerElement.append(headlineElement);
  })
}

export { homeHeadline, gazaHeadline, worldHeadline };