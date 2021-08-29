import { alert, info, error, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify';

function fetchPicture(requestAddress) {
  return fetch(requestAddress)
    .then(response => {
      if (response.status === 404) {
        error('Nothing found');
      }
      return response.json();
    })
    .catch(error => console.log('error'));
}
export default fetchPicture;
