const token = (state, action) => {
  var localStorage = window.localStorage
  if (!state) {
    state = localStorage.token || null
  }
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.token = action.token
      return action.token
    case 'LOGIN_FAIL':
      delete localStorage.token
      return null
    case 'LOGOUT_SUCCESS':
      delete localStorage.token
      return null
    default:
      return state
  }
}

export {
  token
}
