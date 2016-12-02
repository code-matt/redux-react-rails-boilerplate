export const logoutActionSuccess = () => ({
  type: 'LOGOUT_SUCCESS'
})

function logout () {
  return function (dispatch) {
    dispatch(logoutActionSuccess())
  }
}

export default logout
