import { homeHeadline, gazaHeadline, worldHeadline, businessHeadline, entertainmentHeadline, scienceHeadline, sportsHeadline, techHeadline } from '../script/headlineNews.js';
import { homeMainNews, gazaMainNews, worldMainNews, businessMainNews, entertainmentMainNews, scienceMainNews, sportsMainNews, techMainNews } from '../script/mainNews.js';
import { homeAsideNews, gazaAsideNews, worldAsideNews, businessAsideNews, entertainmentAsideNews, scienceAsideNews, sportsAsideNews, techAsideNews } from '../script/asideNews.js';
import createWrapper from './wrapper.js';
import './searchNews.js';
import './wrapper.js';

function main() {
  const navbarButtons = document.getElementsByClassName('nav-bar-button');

  for (let button of navbarButtons) {
    button.addEventListener('click', () => {
      removeId();
      button.setAttribute('id', 'selected');

      createWrapper();
      findNews(button.textContent);
    })

    if (button.id) {
      createWrapper();
      findNews(button.textContent);
    }
  }

  function removeId() {
    for (let item of navbarButtons) {
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

  document.querySelector('.bars-icon').addEventListener('click', () => {
   for (let button of navbarButtons) {
        button.classList.toggle('hide-nav-bar-button');
      }
  })

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