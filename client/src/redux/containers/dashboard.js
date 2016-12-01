import { connect } from 'react-redux'
import Dashboard from '../../components/dashboard/dashboard'

const mapStateToProps = (state, ownProps) => {
  return {
    favorites: state.favorites
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const VisibleDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default VisibleDashboard
