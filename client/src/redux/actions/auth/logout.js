import {notify} from 'react-notify-toast'
import { browserHistory } from 'react-router'

export const logoutActionSuccess = () => ({
  type: 'LOGOUT_SUCCESS'
})

function logout () {
  return function (dispatch) {
    browserHistory.push('/')
    notify.show('Dispatched logoutActionSuccess', 'success', 2000)
    dispatch(logoutActionSuccess())
  }
}

export default logout
