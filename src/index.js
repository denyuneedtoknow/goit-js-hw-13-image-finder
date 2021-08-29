import { alert, info, error, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import fetchPicture from './apiService';
import debounce from 'lodash.debounce';
import requestedImg from './templates/requestedImg.hbs';
import refs from './refs';
import { modalOpener, modalCloser, modalWindowCloser, onEscapeClose } from './modal-window';

let pageNumber = 1;

function morePictureLoader() {
  refs.loadMoreBtn.classList.remove('is-hidden');
  console.log(refs.loadMoreBtn);
}

function renderRequest(e) {
  e.preventDefault();
  refs.gallery.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
  const input = String(refs.inputField[0].value);
  const request = `${refs.API_URL}${input}&page=${pageNumber}&per_page=12&key=${refs.userKey}`;
  fetchPicture(request).then(pictures => {
    const picArray = pictures.hits;
    console.log(picArray);
    function markup(picArray) {
      return picArray.map(requestedImg).join('');
    }
    refs.gallery.insertAdjacentHTML('beforeEnd', `${markup(picArray)}`);
    pageNumber++;
  });
}

refs.gallery.addEventListener('click', modalOpener);
refs.searchBtn.addEventListener('click', renderRequest);
refs.searchBtn.addEventListener('click', morePictureLoader);

refs.loadMoreBtn.addEventListener('click', renderRequest);
window.addEventListener('keydown', onEscapeClose);
