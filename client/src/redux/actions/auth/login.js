import { newFetch } from '../lib/newFetch'

export const loginActionSuccess = (jwt) => ({
  type: 'LOGIN_SUCCESS',
  token: jwt
})

export const loginActionFail = () => ({
  type: 'LOGIN_FAIL',
  token: null
})

function login (email, pass) {
  return function (dispatch) {
    return newFetch('POST', false, '/api/v1/knock/auth_token', {
      auth: {
        email: email,
        password: pass
      }
    })
    .then(response => response.json())
    .then(json => {
      dispatch(loginActionSuccess(json.jwt))
    }).catch(error => {
      dispatch(loginActionFail())
    })
  }
}

export default login
