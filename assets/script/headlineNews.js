import { GetNews } from './fetchData.js';
import readNews from './readNews.js';

let headlineNewsItems = [];
let toRenderIndex = [0, 1, 2, 3];

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

export function homeHeadline() {
  const homeHeadline = new GetNews('https://newsapi.org/v2/everything?langauge=en&sortBy=popularity&searchin=title,content,description&pageSize=20&sources=', 'the-washington-post');
  homeHeadline.fetchData()
    .then(saveHeadlineNewsItems)
    .catch(responseMessage);
}

export function gazaHeadline() {
  const gazaHeadline = new GetNews('https://newsapi.org/v2/everything?langauge=en&sortBy=popularity&searchin=title,content,description&pageSize=20&q=', 'gaza');
  gazaHeadline.fetchData()
    .then(saveHeadlineNewsItems)
    .catch(responseMessage);
}

export function worldHeadline() {
  const worldHeadline = new GetNews('https://newsapi.org/v2/everything?langauge=en&sortBy=popularity&searchin=title,content,description&pageSize=20&sources=', 'new-york-magazine');
  worldHeadline.fetchData()
    .then(saveHeadlineNewsItems)
    .catch(responseMessage);
}

export function businessHeadline() {
  const businessHeadline = new GetNews('https://newsapi.org/v2/everything?langauge=en&sortBy=popularity&searchin=title,content,description&pageSize=20&q=', 'business');
  businessHeadline.fetchData()
    .then(saveHeadlineNewsItems)
    .catch(responseMessage);
}

export function entertainmentHeadline() {
  const entertainmentHeadline = new GetNews('https://newsapi.org/v2/everything?langauge=en&sortBy=popularity&searchin=title,content,description&pageSize=20&q=', 'entertainment');
  entertainmentHeadline.fetchData()
    .then(saveHeadlineNewsItems)
    .catch(responseMessage);
}

export function scienceHeadline() {
  const scienceHeadline = new GetNews('https://newsapi.org/v2/everything?langauge=en&sortBy=popularity&searchin=title,content,description&pageSize=20&q=', 'science');
  scienceHeadline.fetchData()
    .then(saveHeadlineNewsItems)
    .catch(responseMessage);
}

export function sportsHeadline() {
  const sportsHeadline = new GetNews('https://newsapi.org/v2/everything?langauge=en&sortBy=popularity&searchin=title,content,description&pageSize=20&q=', 'sports');
  sportsHeadline.fetchData()
    .then(saveHeadlineNewsItems)
    .catch(responseMessage);
}

export function techHeadline() {
  const techHeadline = new GetNews('https://newsapi.org/v2/everything?langauge=en&sortBy=popularity&searchin=title,content,description&pageSize=20&q=', 'technology');
  techHeadline.fetchData()
    .then(saveHeadlineNewsItems)
    .catch(responseMessage);
}

function responseMessage(message) {
  alert(`Error headline: ${message}`);
}

function saveHeadlineNewsItems(items) {
  if (headlineNewsItems.length) {
    headlineNewsItems = [];
  }

  items.forEach(item => {
    if (item.title.length <= 50 && item.urlToImage !== null) {
      console.log(item);
      headlineNewsItems.push(item);
    }
  })

  toRender();
}

function toRender() {
  let toRender = [];
  toRenderIndex.forEach(index => {
    toRender.push(headlineNewsItems[index]);
  })
  
  render(toRender);
}

function render(items) {
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.innerHTML = ``;

  items.forEach(item => {
    const headlineElement = document.createElement('headline-item');
    headlineElement.setAttribute('class', 'grid-item');
    headlineElement.newsItem = item;

    gridContainer.append(headlineElement);

    headlineElement.addEventListener('click', () => {
      readNews(item);
    })
  })

  document.querySelector('.grid-arrow-left').addEventListener('click', slideLeft);
  document.querySelector('.grid-arrow-right').addEventListener('click', slideRight);
}

function slideLeft() {
  if (toRenderIndex[0] === 0) {
    return;
  } else {
    toRenderIndex.forEach((item, index) => {
      toRenderIndex.splice(index, 1, item - 1);
    })
  }

  toRender();
}

function slideRight() {
  if (toRenderIndex.some(item => item === headlineNewsItems.length - 1)) {
    return;
  } else {
    toRenderIndex.forEach((item, index) => {
      toRenderIndex.splice(index, 1, item + 1);
    })
  }

  toRender(); 
}