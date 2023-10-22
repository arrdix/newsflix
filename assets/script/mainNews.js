class MainNews extends HTMLElement {
  constructor() {
    super();
  }

  set newsItem(item) {
    this._newsItem = item;
    this.render();
  }

  render() {
    this.innerHTML = `
      <img class="main-news-img" src="${this._newsItem.urlToImage}" alt="${this._newsItem.title}">
      <h2><a href="#">${this._newsItem.title}</a></h2>
    `;
  }
}

customElements.define('main-news', MainNews);