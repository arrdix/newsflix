import { GetNews } from './fetchData.js';
import readNews from './readNews.js';

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

const asideNewsBaseUrl = 'https://newsapi.org/v2/everything?' +
                        'langauge=en&' +
                        'sortBy=popularity&' +
                        'searchin=title,content,description&' +
                        'pageSize=7&' +
                        'page=2&';

export function asideNewsHandler(keyword) {
  if (keyword === 'home') {
    const fetchAsideNews = new GetNews(`${asideNewsBaseUrl}sources=`, 'the-washington-post');
    fetchAsideNews.fetchData()
      .then(render)
      .catch(responseMessage);
  } else if (keyword === 'israel-palestine war') {
    const fetchAsideNews = new GetNews(`${asideNewsBaseUrl}q=`, 'gaza');
    fetchAsideNews.fetchData()
      .then(render)
      .catch(responseMessage);
  } else {
    const fetchAsideNews = new GetNews(`${asideNewsBaseUrl}q=`, `${keyword}`);
    fetchAsideNews.fetchData()
      .then(render)
      .catch(responseMessage);
  }
}

function render(items) {
  items.forEach(item => {
    const asideNewsElement = document.createElement('aside-news');
    asideNewsElement.setAttribute('class', 'aside-news');
    asideNewsElement.newsItem = item;

    document.querySelector('.aside-news-container').append(asideNewsElement);

    asideNewsElement.addEventListener('click', event => {
      event.preventDefault();
      readNews(item);
    })
  })
}

function responseMessage(message) {
  alert(`Error aside: ${message}`);
}