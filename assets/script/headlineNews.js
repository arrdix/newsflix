import { GetNews } from './fetchData.js';
import readNews from './readNews.js';

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

let headlineNewsItems = [];
let toRenderIndex = [0, 1, 2, 3];

const headlineBaseUrl = 'https://newsapi.org/v2/everything?' +
                        'langauge=en&' +
                        'sortBy=popularity&' +
                        'searchin=title,content,description&' +
                        'pageSize=20&';

export function headlineHandler(keyword) {
  if (keyword === 'home') {
    const fetchHeadlineNews = new GetNews(`${headlineBaseUrl}sources=`, 'the-washington-post');
    fetchHeadlineNews.fetchData()
      .then(saveHeadlineNewsItems)
      .catch(responseMessage);
  } else if (keyword === 'israel-palestine war') {
    const fetchHeadlineNews = new GetNews(`${headlineBaseUrl}q=`, 'gaza');
    fetchHeadlineNews.fetchData()
      .then(saveHeadlineNewsItems)
      .catch(responseMessage);
  } else {
    const fetchHeadlineNews = new GetNews(`${headlineBaseUrl}q=`, `${keyword}`);
    fetchHeadlineNews.fetchData()
      .then(saveHeadlineNewsItems)
      .catch(responseMessage);
  }
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