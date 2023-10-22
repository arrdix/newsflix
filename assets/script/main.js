import { GetNews } from './fetchData.js';
import '../script/headlineNews.js';
import '../script/mainNews.js'

function main() {
  function gazaHeadline() {
    const gazaHeadline = new GetNews('https://newsapi.org/v2/everything?langauge=en&sortBy=popularity&searchin=title&pageSize=4&q=', 'gaza');
    gazaHeadline.fetchData()
      .then(renderHeadline)
      .catch(responseMessage);
  }

  function homeHeadline() {
    const homeHeadline = new GetNews('https://newsapi.org/v2/top-headlines?pageSize=4&sources=', 'al-jazeera-english');
    homeHeadline.fetchData()
      .then(renderHeadline)
      .catch(responseMessage);
  }

  function worldHeadline() {
    const worldHeadline = new GetNews('https://newsapi.org/v2/top-headlines?pageSize=4&country=', 'us');
    worldHeadline.fetchData()
      .then(renderHeadline)
      .catch(responseMessage);
  }

  function gazaMainNews() {
    const gazaMainNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&searchin=title&pageSize=2&q=', 'gaza');
    gazaMainNews.fetchData()
     .then(renderMainNews)
     .catch(responseMessage);
  }

  function homeMainNews() {
    const homeMainNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&searchin=title&pageSize=2&sources=', 'al-jazeera-english');
    homeMainNews.fetchData()
      .then(renderMainNews)
      .catch(responseMessage);
  }

  function worldMainNews() {
    const worldMainNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&searchin=title&pageSize=2&country=', 'us');
    worldMainNews.fetchData()
      .then(renderMainNews)
      .catch(responseMessage);
  }

  function renderHeadline(items) {
    items.forEach(item => {
      const gazaHeadlineElement = document.createElement('headline-item');
      gazaHeadlineElement.setAttribute('class', 'grid-item');
      gazaHeadlineElement.newsItem = item;

      const headlineGridElement = document.querySelector('.headline-grid');
      const gridArrowRightElement = document.querySelector('.grid-arrow-right');
      headlineGridElement.insertBefore(gazaHeadlineElement, gridArrowRightElement);
    })
  }

  function renderMainNews(items) {
    items.forEach(item => {
      const gazaMainNewsElement = document.createElement('main-news');
      gazaMainNewsElement.setAttribute('class', 'main-news');
      gazaMainNewsElement.newsItem = item;

      const mainContentElement = document.querySelector('.main-content');
      mainContentElement.append(gazaMainNewsElement);
    })
  }

  function responseMessage(message) {
    alert(`Error: ${message}`);
  }

  // homeHeadline();
  // gazaHeadline();
  worldHeadline();

  // gazaMainNews();
  // homeMainNews();
  worldMainNews()
}

export default main;