import React, { Component } from 'react'
import './dashboard.css'
import FavoriteCard from '../favorites/favorite-card'
import VisibleLoginForm from '../../redux/containers/login'
import logo from './logo.svg'
import SearchForm from '../search/search-form'

class Dashboard extends Component {

  handleValueChange (value, fieldId, propName) {
    this.props._appActions.changeData(value, fieldId, propName)
  }

  handleSearch () {
    this.props._favActions.getFavorites(
      this.props.appData.search.searchInput
    )
  }

  renderFavorites (favorites, component) {
    if (favorites.length > 0) {
      return favorites.map((favorite, index) => (
        <FavoriteCard key={index} favorite={favorite} favorites={favorites} parent={component} />
      ))
    } else {
      return []
    }
  }

  render () {
    return (
      <div className='App App-header'>
        <div className='mdl-tooltip' data-mdl-for='tt2'>
          Everything you see is inside a container named Dashboard.
          It knows about Redux and has props and actions
          connected to it! You can find it in /redux/containers/dashboard.js.
        </div>
        <div id='tt2'>
          <div className='App-logo'>
            <img src={logo} className='App-logo' alt='logo' />
          </div>
          <h6>Welcome to Redux + React + Rails boilerplate</h6>
          <div className='subtitle'><span className='highlight'>React</span> provided via create-react-app package <i className='fa fa-heart highlight fa-1x' aria-hidden='true' /></div>
        </div>
        <VisibleLoginForm />
        <br />
        <SearchForm
          valueChangeCB={this.handleValueChange.bind(this)}
          searchCB={this.handleSearch.bind(this)} />
        {this.props.favorites.length > 0
          ? this.renderFavorites(this.props.favorites, this)
          : <div className='searchErr'><strong>No search results found, try again...</strong></div>
        }
      </div>
    )
  }
}

// const Job = ({job, parent, jobs}) => {
//   return (
//     <div id={job.id} className='card text-md-center jobresult'
//       onMouseOver={() => parent.props._uiActions.changeLocation({
//         lat: job.lat,
//         lng: job.lng
//       })}>
//       <div className='card-block'>
//         <h4 className='card-title'>{job.title}</h4>
//         <h6 className='card-subtitle text-muted'>{job.address}</h6>
//       </div>
//       <img className='searchresult-img' src={'https://builditreact.s3.amazonaws.com/uploads/user/avatar/' + job.user_id + '/image.png'} alt='Card image' />
//       <div className='card-block'>
//         <p className='card-text'>{job.description}</p>
//         <p><button onClick={() => parent.props._uiActions.showJob(job.id, jobs)} className='btn btn-primary'>{job.hourly_rate / 100 + '$/hr '}Details</button></p>
//       </div>
//     </div>
//   )
// }

export default Dashboard
