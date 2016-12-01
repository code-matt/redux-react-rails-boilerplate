import { newFetch } from '../lib/newFetch'

const setFavoritesAction = (favorites) => ({
  type: 'SET_FAVORITES',
  favorites: favorites
})

function getFavorites (query) {
  return function (dispatch) {
    return newFetch('GET', false, '/api/v1/favorites?query=' + query)
    .then(response => response.json())
    .then(json =>
      dispatch(setFavoritesAction(json.favs))
    )
  }
}

export {
  getFavorites
}
