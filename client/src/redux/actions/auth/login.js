export const loginActionSuccess = (jwt) => ({
  type: 'LOGIN_SUCCESS',
  token: jwt,
})

export const loginActionFail = () => ({
  type: 'LOGIN_FAIL',
  token: null,
  error: [{
    div: 'non-specific',
    message: 'Username and or password do not match'
  }]
})

function login (email, pass) {
  return function (dispatch) {
    return fetch('http://localhost:3000/api/v1/knock/auth_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        auth: {
          email: email,
          password: pass
        }
      })
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
