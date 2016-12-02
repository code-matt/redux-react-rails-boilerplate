import {notify} from 'react-notify-toast'

function newFetch (httpAction, auth = false, urlPath, payload) {
  notify.show('Dispatched async redux-thunk action to: ' + urlPath, 'success', 2000)
  var headers
  if (auth) {
    headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  } else {
    headers = {
      'Content-Type': 'application/json'
    }
  }

  var request
  if (payload) {
    request = {
      method: httpAction,
      headers: headers,
      body: JSON.stringify(payload)
    }
  } else {
    request = {
      method: httpAction,
      headers: headers
    }
  }

  return fetch(process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_PROD_HOST + urlPath
  : process.env.REACT_APP_DEV_HOST + urlPath,
  request)
}

export {
  newFetch
}
