function createWrapper() {
  const mainElement = document.querySelector('main');
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('class', 'wrapper');

  wrapperElement.innerHTML = `
    <div class="headline-container">
      <div class="headline-grid">
        <button class="grid-arrow-left">
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </button>
        <div class="grid-container">
        </div>
        <button class="grid-arrow-right">
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
      <div class="headline-bg"></div>
    </div>
    <div class="content-container">
      <div class="main-content">
      </div>
      <aside class="aside-content">
        <div class="aside-title">
          <h4>Most Popular</h4>
        </div>
        <div class="aside-news-container">
        </div>
      </aside>
    </div>
  `;

  mainElement.innerHTML = ``;
  mainElement.append(wrapperElement);
}

export default createWrapper;