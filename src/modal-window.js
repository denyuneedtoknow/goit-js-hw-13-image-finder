const modalWindow = document.querySelector('.js-lightbox');
const modalPicture = document.querySelector('.lightbox__image');
const ModalCloseBtn = document.querySelector('[data-action="close-lightbox"]');

function modalOpener(e) {
  e.preventDefault();
  modalWindow.classList.add('is-open');
  modalPicture.alt = e.target.alt;
  modalPicture.src = e.target.dataset.source;
  console.dir(e.target);
}

function modalCloser(e) {
  modalWindow.classList.remove('is-open');
  modalPicture.src = '';
  modalPicture.alt = '';
}

function modalWindowCloser(e) {
  if (e.target !== modalPicture) {
    modalCloser();
  }
}

function onEscapeClose(e) {
  if (e.key !== 'Escape') {
    return;
  }
  modalCloser();
}

export { modalOpener, modalCloser, modalWindowCloser, onEscapeClose };
