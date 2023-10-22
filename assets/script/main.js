import { GetNews } from './fetchData.js';
import '../script/headlineNews.js';

function main() {
  function gazaHeadline() {
    const gazaHeadline = new GetNews('https://newsapi.org/v2/everything?langauge=en&sortBy=popularity&searchin=title&pageSize=4&q=', 'gaza');
    gazaHeadline.fetchData()
      .then(render)
      .catch(responseMessage);
  }

  function homeHeadline() {
    const homeHeadline = new GetNews('https://newsapi.org/v2/top-headlines?pageSize=4&sources=', 'al-jazeera-english');
    homeHeadline.fetchData()
      .then(render)
      .catch(responseMessage);
  }

  function worldHeadline() {
    const worldHeadline = new GetNews('https://newsapi.org/v2/top-headlines?pageSize=4&country=', 'us');
    worldHeadline.fetchData()
      .then(render)
      .catch(responseMessage);
  }

  function render(items) {
    items.forEach(item => {
      console.log(item);
      const gazaHeadlineElement = document.createElement('headline-item');
      gazaHeadlineElement.setAttribute('class', 'grid-item');
      gazaHeadlineElement.newsItem = item;

      const headlineGridElement = document.querySelector('.headline-grid');
      const gridArrowRightElement = document.querySelector('.grid-arrow-right');
      headlineGridElement.insertBefore(gazaHeadlineElement, gridArrowRightElement);
    })
  }

  function responseMessage(message) {
    alert(`Error: ${message}`);
  }

  // homeHeadline();
  gazaHeadline();
  // worldHeadline();
}

export default main;