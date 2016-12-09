import { connect } from 'react-redux'
import Header from '../../components/header/header'
import { logout } from '../actions/auth'

const mapStateToProps = (state, ownProps) => {
  return {
    appData: state.appData,
    token: state.token
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    _authActions: {
      logout: () => {
        dispatch(logout())
      }
    }
  }
}

const VisibleHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default VisibleHeader
