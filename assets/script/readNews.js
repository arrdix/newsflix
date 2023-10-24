function readNews(item) {
  const mainElement = document.querySelector('main');
  const modalContainerElement = document.createElement('div');

  const itemDate = new Date(item.publishedAt);
  const itemYear = itemDate.getFullYear();
  const itemMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(itemDate);
  const itemDay = itemDate.getDate();

  modalContainerElement.setAttribute('class', 'modal-container');
  modalContainerElement.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h4>Reading Mode</h4>
        <i id="modal-close-button" class="modal-close-button fa fa-times" aria-hidden="true"></i>
      </div>
      <div class="content-detail">
        <div class="content-header">
          <img src="${item.urlToImage}" alt="">
          <h2>${item.title}</h2>
          <p>By: ${item.author} on ${itemMonth} ${itemDay}, ${itemYear}</p>
        </div>
        <div class="content-body">
          <p>${item.content}</p>
        </div>
        <div class="content-footer">
          <p>Source:<a class="source-link" href="${item.url}"> ${item.source.name}</a></p>
          <div>
            <a href=""><i class="modal-sosmed-logo fa-brands fa-instagram"></i></a>
            <a href=""><i class="modal-sosmed-logo fa-brands fa-telegram"></i></a>
            <a href=""><i class="modal-sosmed-logo fa-brands fa-square-facebook"></i></a>
            <a href=""><i class="modal-sosmed-logo fa-brands fa-square-x-twitter"></i></a>
            <a href=""><i class="modal-sosmed-logo fa-brands fa-telegram"></i></a>
            <a href=""><i class="modal-sosmed-logo fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </div>
  `;

  mainElement.append(modalContainerElement);
  closeModal();
}

function closeModal() {
  const modalCloseButton = document.querySelector('#modal-close-button');

  modalCloseButton.addEventListener('click', () => {
    const modalContainerElement = document.querySelector('.modal-container');
    modalContainerElement.remove();
  })
}

export default readNews;