import { homeHeadline, gazaHeadline, worldHeadline } from '../script/headlineNews.js';
import { homeMainNews, gazaMainNews, worldMainNews } from '../script/mainNews.js';
import { homeAsideNews, gazaAsideNews, worldAsideNews } from '../script/asideNews.js';
import './searchNews.js';

function main() {
  // const navItem = document.getElementsByClassName('nav-item');

  // for (let item of navItem) {
  //   item.addEventListener('click', () => {
  //     removeId();
  //     item.setAttribute('id', 'selected');

  //     findNews(item.textContent);
  //   })

  //   if (item.id) {
  //     findNews(item.textContent);
  //   }
  // }

  // function removeId() {
  //   const navItem = document.querySelectorAll('.nav-item');

  //   for (let item of navItem) {
  //     item.removeAttribute('id');
  //   }
  // }

  // function findNews(value) {
  //   switch(value) {
  //     case 'home':
  //       homeHeadline();
  //       homeMainNews();
  //       homeAsideNews();
  //       break;
      
  //     case 'israel-palestine war':
  //       gazaHeadline();
  //       gazaMainNews();
  //       gazaAsideNews();
  //       break;

  //     case 'world':
  //       worldHeadline();
  //       worldMainNews();
  //       worldAsideNews();
  //   }
  // }
}

export default main;