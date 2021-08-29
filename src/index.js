import { alert, info, error, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import fetchPicture from './apiService';
import debounce from 'lodash.debounce';
import requestedImg from './templates/requestedImg.hbs';
import refs from './refs';

const pageNumber = 1;

function renderRequest(e) {
  e.preventDefault();
  const input = String(refs.inputField[0].value);
  console.dir(input);
  const request = `${refs.API_URL}${input}&page=${pageNumber}&per_page=12&key=${refs.userKey}`;
  fetchPicture(request).then(pictures => {
    const picArray = pictures.hits;
    console.log(picArray);
    const tags = picArray.map(picture => picture.tags);
    function markup(picArray) {
      return picArray.map(requestedImg).join('');
    }
    refs.gallery.insertAdjacentHTML('beforeEnd', `${markup(picArray)}`);
  });
}

refs.searchBtn.addEventListener('click', renderRequest);
