import { connect } from 'react-redux'
import Links from '../../components/shared/links'
import logout from '../actions/auth/logout'

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

const VisibleLinks = connect(
  mapStateToProps,
  mapDispatchToProps
)(Links)

export default VisibleLinks
