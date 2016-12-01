import { connect } from 'react-redux'
import LoginForm from '../../components/login/login-form'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const VisibleLoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default VisibleLoginForm
