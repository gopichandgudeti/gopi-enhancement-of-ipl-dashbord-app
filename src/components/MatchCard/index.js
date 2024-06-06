// Write your code here

import './index.css'

const MatchCard = props => {
  const {matchCardData} = props

  const {result, competingTeam, competingTeamLogo, matchStatus} = matchCardData

  const getMatchStatusClassName = status =>
    status === 'Won' ? 'match-won' : 'match-lost'

  const matchStatusClassName = `match-status ${getMatchStatusClassName(
    matchStatus,
  )}`

  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt="competing team {competing_team}"
        className="competing-team-logo"
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
