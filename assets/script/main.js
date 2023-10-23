import { GetNews } from './fetchData.js';
import '../script/headlineNews.js';
import '../script/mainNews.js';
import '../script/asideNews.js';

function main() {
  function gazaHeadline() {
    const gazaHeadline = new GetNews('https://newsapi.org/v2/everything?langauge=en&sortBy=popularity&searchin=title&pageSize=4&q=', 'gaza');
    gazaHeadline.fetchData()
      .then(renderHeadline)
      .catch(responseMessage);
  }

  function homeHeadline() {
    const homeHeadline = new GetNews('https://newsapi.org/v2/everything?langauge=en&sortBy=popularity&searchin=title&pageSize=4&sources=', 'the-washington-post');
    homeHeadline.fetchData()
      .then(renderHeadline)
      .catch(responseMessage);
  }

  function worldHeadline() {
    const worldHeadline = new GetNews('https://newsapi.org/v2/everything?langauge=en&sortBy=popularity&searchin=title&pageSize=4&sources=', 'new-york-magazine');
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
    const homeMainNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&searchin=title&pageSize=2&sources=', 'the-washington-post');
    homeMainNews.fetchData()
      .then(renderMainNews)
      .catch(responseMessage);
  }

  function worldMainNews() {
    const worldMainNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&searchin=title&pageSize=2&sources=', 'new-york-magazine');
    worldMainNews.fetchData()
      .then(renderMainNews)
      .catch(responseMessage);
  }

  function gazaAsideNews() {
    const gazaAsideNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&pageSize=8&page=2&q=', 'gaza');
    gazaAsideNews.fetchData()
      .then(renderAsideNews)
      .catch(responseMessage);
  }

  function homeAsideNews() {
    const homeAsideNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&pageSize=8&page=2&sources=', 'the-washington-post');
    homeAsideNews.fetchData()
      .then(renderAsideNews)
      .catch(responseMessage);
  }

  function worldAsideNews() {
    const worldAsideNews = new GetNews('https://newsapi.org/v2/everything?langauge=en&pageSize=8&page=2&sources=', 'new-york-magazine');
    worldAsideNews.fetchData()
      .then(renderAsideNews)
      .catch(responseMessage);
  }

  function renderHeadline(items) {
    items.forEach(item => {
      const headlineElement = document.createElement('headline-item');
      headlineElement.setAttribute('class', 'grid-item');
      headlineElement.newsItem = item;

      const headlineGridElement = document.querySelector('.headline-grid');
      const gridArrowRightElement = document.querySelector('.grid-arrow-right');
      headlineGridElement.insertBefore(headlineElement, gridArrowRightElement);
    })
  }

  function renderMainNews(items) {
    items.forEach(item => {
      const mainNewsElement = document.createElement('main-news');
      mainNewsElement.setAttribute('class', 'main-news');
      mainNewsElement.newsItem = item;

      const mainContentElement = document.querySelector('.main-content');
      mainContentElement.append(mainNewsElement);
    })
  }

  function renderAsideNews(items) {
    items.forEach(item => {
      const asideNewsElement = document.createElement('aside-news');
      asideNewsElement.setAttribute('class', 'aside-news');
      asideNewsElement.newsItem = item;

      const asideContentElement = document.querySelector('.aside-content');
      asideContentElement.append(asideNewsElement);
    })
  }

  function responseMessage(message) {
    alert(`Error: ${message}`);
  }

  // homeHeadline();
  // gazaHeadline();
  worldHeadline();

  // homeMainNews();
  // gazaMainNews();
  worldMainNews()

  // homeAsideNews();
  // gazaAsideNews();
  worldAsideNews();
}

export default main;