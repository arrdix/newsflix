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