import { homeHeadline, gazaHeadline, worldHeadline, businessHeadline, entertainmentHeadline, scienceHeadline, sportsHeadline, techHeadline } from '../script/headlineNews.js';
import { homeMainNews, gazaMainNews, worldMainNews, businessMainNews, entertainmentMainNews, scienceMainNews, sportsMainNews, techMainNews } from '../script/mainNews.js';
import { homeAsideNews, gazaAsideNews, worldAsideNews, businessAsideNews, entertainmentAsideNews, scienceAsideNews, sportsAsideNews, techAsideNews } from '../script/asideNews.js';
import './searchNews.js';
import './wrapper.js';
import createWrapper from './wrapper.js';

function main() {
  const navbarButton = document.getElementsByClassName('nav-bar-button');

  for (let item of navbarButton) {
    item.addEventListener('click', () => {
      removeId();
      item.setAttribute('id', 'selected');

      createWrapper();
      findNews(item.textContent);
    })

    if (item.id) {
      createWrapper();
      findNews(item.textContent);
    }
  }

  function removeId() {
    for (let item of navbarButton) {
      item.removeAttribute('id');
    }
  }

  function findNews(value) {
    switch(value) {
      case 'home':
        homeHeadline();
        homeMainNews();
        homeAsideNews();
        break;
      
      case 'israel-palestine war':
        gazaHeadline();
        gazaMainNews();
        gazaAsideNews();
        break;

      case 'world':
        worldHeadline();
        worldMainNews();
        worldAsideNews();
        break;

      case 'business':
        businessHeadline();
        businessMainNews();
        businessAsideNews();
        break;

      case 'entertainment':
        entertainmentHeadline();
        entertainmentMainNews();
        entertainmentAsideNews();
        break;

      case 'science':
        scienceHeadline();
        scienceMainNews()
        scienceAsideNews();
        break;

      case 'sports':
        sportsHeadline();
        sportsMainNews();
        sportsAsideNews();
        break;

      case 'technology':
        techHeadline();
        techMainNews();
        techAsideNews();
        break;
    }
  }

  document.querySelector('.search-button').addEventListener('click', () => {
    const navForm = document.querySelector('.nav-form');

    if (navForm.classList.value === 'nav-form') {
      navForm.setAttribute('class', 'nav-form show-nav-form');
    } else if (navForm.classList.value === 'nav-form show-nav-form') {
      navForm.setAttribute('class', 'nav-form');
    }
  })

  document.querySelector('.share-button').addEventListener('click', () => {
    const sosmedLogos = document.querySelector('.sosmed-logos');

    if (sosmedLogos.classList.value === 'sosmed-logos') {
      sosmedLogos.setAttribute('class', 'sosmed-logos show-sosmed-logos');
    } else if (sosmedLogos.classList.value === 'sosmed-logos show-sosmed-logos') {
      sosmedLogos.setAttribute('class', 'sosmed-logos');
    }
  })
}

export default main;