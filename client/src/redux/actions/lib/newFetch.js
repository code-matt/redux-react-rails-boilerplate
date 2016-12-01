function newFetch (httpAction, auth = false, urlPath, payload) {
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
