import { alert, info, error, defaultModules } from '@pnotify/core/dist/PNotify';

function fetchPicture(requestAddress) {
  return fetch(requestAddress)
    .then(response => {
      if (response.status === 404) {
        error('No country founded, please try another approach');
      }
      return response.json();
    })
    .catch(error => console.log('error'));
}
export default fetchPicture;
