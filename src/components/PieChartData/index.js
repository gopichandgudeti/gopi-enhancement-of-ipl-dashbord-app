import React, {PureComponent} from 'react'
import {PieChart, Pie, Sector, Cell, ResponsiveContainer} from 'recharts'

class PieChartData extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-of-two-levels-gor24'

  render() {
    const {wins, losses, draws} = this.props

    const data = [
      {name: 'wins', value: wins},
      {name: 'losses', value: losses},
      {name: 'draws', value: draws},
    ]

    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    )
  }
}

export default PieChartData

// eslint-disable import/no-extranumarouse-dependencies
/* import {
  PieChart as PieChartComponent,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from 'recharts'

import './index.css'

const COLORS = ['#37DC2A', '#E45B16', '#E4DB16']

const PieChart = props => {
  const {data} = props

  return (
    <div className="pie-chart-bg-container mt-2 d-flex justify-content-center">
      <PieChartComponent width={400} height={350}>
        <Pie
          data={data}
          innerRadius={0}
          outerRadius={100}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChartComponent>
    </div>
  )
}

export default PieChart */
