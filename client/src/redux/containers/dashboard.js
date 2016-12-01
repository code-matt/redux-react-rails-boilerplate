import { connect } from 'react-redux'
import Dashboard from '../../components/dashboard/dashboard'
import { changeData } from '../actions/app/changeData'
import { getFavorites } from '../actions/favorites/getFavorites'

const mapStateToProps = (state, ownProps) => {
  return {
    favorites: state.favorites,
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
    _favActions: {
      getFavorites: (query) => {
        dispatch(getFavorites(query))
      }
    }
  }
}

const VisibleDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default VisibleDashboard
