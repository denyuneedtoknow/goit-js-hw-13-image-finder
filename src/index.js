import { alert, info, error, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify';
import fetchPicture from './apiService';
import requestedImg from './templates/requestedImg.hbs';
import refs from './refs';
import { modalOpener, modalCloser, modalWindowCloser, onEscapeClose } from './modal-window';

let pageNumber = 1;

function morePictureLoader() {
  refs.loadMoreBtn.classList.remove('is-hidden');
}

function renderRequest(e) {
  e.preventDefault();

  const input = String(refs.inputField[0].value);
  const request = `${refs.API_URL}${input}&page=${pageNumber}&per_page=12&key=${refs.userKey}`;
  if (input === '') {
    alert('Enter your request')
    return
  }
  fetchPicture(request)
    .then(pictures => {
      const picArray = pictures.hits;
      console.log(picArray);
      function markup(picArray) {
        return picArray.map(requestedImg).join('');
      }
      refs.gallery.insertAdjacentHTML('beforeEnd', `${markup(picArray)}`);
      pageNumber++;
      if (picArray.length > 0) {
        morePictureLoader();
        refs.gallery.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      } else if (picArray.length === 0) {
        alert('nothing found')
      }
    })
    .catch(err => {
      error('something wrong');
    });
}

function onClickOpener(e) {
  if (e.target.hasAttribute('alt')) {
    modalOpener(e)
  }
}



refs.gallery.addEventListener('click', onClickOpener);
refs.searchBtn.addEventListener('click', renderRequest);
refs.loadMoreBtn.addEventListener('click', renderRequest);
window.addEventListener('keydown', onEscapeClose);
refs.modalWindow.addEventListener('click', modalWindowCloser);
