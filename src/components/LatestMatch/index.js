// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchData

  return (
    <div className="latest-match-container">
      <div className="team-detail">
        <p className="compeating-team">{competingTeam}</p>
        <p className="compeating-team">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <img src={competingTeamLogo} className="competing-team-logo" alt={`latest match ${competingTeam}`}/>
      <div className="match-details-text-container">
        <h1 className="match-details-heading">First Innings</h1>
        <p className="match-details-description">{firstInnings}</p>

        <h1 className="match-details-heading">Second Innings</h1>
        <p className="match-details-description">{secondInnings}</p>

        <h1 className="match-details-heading">Man Of The Match</h1>
        <p className="match-details-description">{manOfTheMatch}</p>

        <h1 className="match-details-heading">Umpaires</h1>
        <p className="match-details-description">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
