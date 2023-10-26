import { headlineHandler } from '../script/headlineNews.js';
import { mainNewsHandler } from '../script/mainNews.js';
import { asideNewsHandler } from '../script/asideNews.js';
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

  function findNews(keyword) {
    headlineHandler(keyword);
    mainNewsHandler(keyword);
    asideNewsHandler(keyword);
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