class AsideNews extends HTMLElement {
  constructor() {
    super();
  }

  set newsItem(item) {
    this._newsItem = item;

    this.newsDate = new Date(this._newsItem.publishedAt);
    this.newsYear = this.newsDate.getFullYear();
    // this.newsMonth = newsDate.getMonth() + 1;
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