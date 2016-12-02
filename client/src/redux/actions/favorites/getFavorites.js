import { newFetch } from '../lib/newFetch'
import {notify} from 'react-notify-toast'

const setFavoritesAction = (favorites) => ({
  type: 'SET_FAVORITES',
  favorites: favorites
})

function getFavorites (query) {
  return function (dispatch) {
    return newFetch('GET', false, '/api/v1/favorites?query=' + query)
    .catch(error => {
      setTimeout(() => {
        notify.show('Something went wrong, are your sure your rails server is running?', 'error', 2000)
      }, 2500)
    })
    .then(response => response.json())
    .then(json =>
      setTimeout(() => {
        notify.show('Dispatched setFavoritesAction with the returned json results', 'success', 2000)
        dispatch(setFavoritesAction(json.favs))
      }, 2500)
    )
  }
}

export {
  getFavorites
}
