// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class Home extends Component {
  state = {
    isLoading: true,
    matchCardDetails: [],
  }

  componentDidMount() {
    this.getMatchCardsData()
  }

  getMatchCardsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const statusCode = await response.statusCode
    const data = await response.json()
    console.log(data)

    const {teams} = data
    const formattedData = teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({isLoading: false, matchCardDetails: formattedData})
  }

  render() {
    const {isLoading, matchCardDetails} = this.state

    return (
      <div className="home-bg-container">
        <div className="teams-list-container">
          {isLoading ? (
            <div testid="loader" className="loader-container">
              {' '}
              <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
            </div>
          ) : (
            <>
              <div className="home-heading-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                  className="ipl-logo"
                />
                <h1 className="home-heading">IPL Dashboard</h1>
              </div>
              <ul className="match-cards-list">
                {matchCardDetails.map(eachItem => (
                  <TeamCard teamData={eachItem} key={eachItem.id} />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Home
