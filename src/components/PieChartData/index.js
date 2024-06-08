import React, {PureComponent} from 'react'
import {PieChart, Pie, ResponsiveContainer} from 'recharts'

class PieChartData extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-of-two-levels-gor24'

  render() {
    const {matchesData} = this.props

    const matchesWon = matchesData.recentMatches.filter(
      each => each.matchStatus === 'Won',
    )
    const noOfMatchesWon = matchesWon.length

    const matchesLost = matchesData.recentMatches.filter(
      each => each.matchStatus === 'Lost',
    )
    const noOfMatchesLost = matchesLost.length

    const matchesDraw = matchesData.recentMatches.filter(
      each => each.matchStatus === 'Draw',
    )
    const noOfMatchesDraw = matchesDraw.length

    /* if (matchesData.latestMatchDetails.matchStatus === 'Won') {
      noOfMatchesWon + 1
    } else if (matchesData.latestMatchDetails.matchStatus === 'Lost') {
      noOfMatchesLost + 1
    } else if (matchesData.latestMatchDetails.matchStatus === 'Draw') {
      noOfMatchesDraw + 1
    } */

    // const totalMatchesPlayed = noOfMatchesWon + noOfMatchesLost

    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={730} height={250}>
          <Pie
            dataKey={noOfMatchesWon}
            nameKey="Won"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
          <Pie
            dataKey={noOfMatchesLost}
            nameKey="Lost"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
          <Pie
            dataKey={noOfMatchesDraw}
            nameKey="Lost"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#83ca9d"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    )
  }
}

export default PieChartData
