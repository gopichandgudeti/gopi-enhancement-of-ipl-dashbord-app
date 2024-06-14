// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import PieChartData from '../PieChartData'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamMatchesData: {},
  }

  componentDidMount() {
    this.getSelectedTeamData()
  }

  getMatchDetails = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getSelectedTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.getMatchDetails(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachMatch =>
        this.getMatchDetails(eachMatch),
      ),
    }
    this.setState({
      isLoading: false,
      teamMatchesData: formattedData,
    })
  }

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SR':
        return 'sr'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  getMatchCard = () => {
    const {teamMatchesData} = this.state
    const {recentMatches} = teamMatchesData

    return (
      <ul className="match-cards-container">
        {recentMatches.map(recentMatch => (
          <MatchCard matchCardData={recentMatch} key={recentMatch.id} />
        ))}
      </ul>
    )
  }

  getTeamMatches = () => {
    const {teamMatchesData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchesData

    const calculateStatistics = () => {
      let wins = 0
      let losses = 0
      let draws = 0

      recentMatches.forEach(match => {
        if (match.matchStatus === 'Won') {
          wins += 1
        } else if (match.matchStatus === 'Lost') {
          losses += 1
        } else {
          draws += 1 // Assuming "NA tie" or other statuses are considered as draws
        }
      })

      return {wins, losses, draws}
    }

    const {wins, losses, draws} = calculateStatistics()

    return (
      <div className="responsive-container">
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-banner-url"
        />
        <p className="latest-matches-text">Latest Matches</p>
        <LatestMatch latestMatchData={latestMatchDetails} />
        <PieChartData wins={wins} losses={losses} draws={draws} />
        {this.getMatchCard()}
        <Link to="/" className="link-container">
          <button type="button" className="back-btn">
            Back
          </button>
        </Link>
      </div>
    )
  }

  render() {
    const {isLoading, teamMatchesData} = this.state
    const className = `team-matches-bg-container ${this.getRouteClassName()}`

    return (
      <div className={className}>
        {isLoading && (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        )}
        {!isLoading && this.getTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
