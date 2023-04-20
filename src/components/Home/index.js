import {Component} from 'react'
import MainInfo from '../MainInfo'
import './index.css'

class Home extends Component {
  state = {fetchedData: []}

  componentDidMount() {
    this.getFetchData()
  }

  getFetchData = async () => {
    const response = await fetch('http://test.api.boxigo.in/sample-data/')
    const data = await response.json()
    this.setState({fetchedData: data.Customer_Estimate_Flow})
  }

  render() {
    const {fetchedData} = this.state
    return (
      <div className="main">
        <div className="sidebar">
          <div className="box-card">
            <li className="box"> </li>
            <li>My Moves</li>
          </div>
          <li>My Profile</li>
          <li>Get Quote</li>
          <li>Log out</li>
        </div>
        <div className="rem">
          <h1 className="main-heading">My Moves</h1>
          {fetchedData.map(each => (
            <MainInfo
              key={each.estimate_id}
              estimateId={each.estimate_id}
              movingFrom={each.moving_from}
              movingTo={each.moving_to}
              distance={each.distance}
              movingOn={each.moving_on}
              propertySize={each.property_size}
              totalItems={each.total_items}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Home
