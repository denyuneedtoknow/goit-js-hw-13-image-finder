const refs = {
  root: document.querySelector('#root'),
  inputField: document.querySelector('#search-form'),
  searchBtn: document.querySelector('#search-btn'),
  loadMoreBtn: document.querySelector('.load-more'),
  gallery: document.querySelector('.gallery'),
  API_URL: 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=',
  userKey: '22968833-cf9b798f42870513c2372fa03',
  modalWindow: document.querySelector('.js-lightbox'),
  photo: document.querySelector('.photo-card'),
  renderSection: document.querySelector('.render-section'),
};
export default refs;
