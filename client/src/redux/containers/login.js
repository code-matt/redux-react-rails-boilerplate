import { connect } from 'react-redux'
import LoginForm from '../../components/login/login-form'
import { login } from '../actions/auth'
import { changeData } from '../actions/app/changeData'

const mapStateToProps = (state, ownProps) => {
  return {
    appData: state.appData
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    _appActions: {
      changeData: (value, fieldId, objectPropName) => {
        dispatch(changeData(value, fieldId, objectPropName))
      }
    },
    _authActions: {
      login: (email, pass) => {
        dispatch(login(email, pass))
      }
    }
  }
}

const VisibleLoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default VisibleLoginForm
