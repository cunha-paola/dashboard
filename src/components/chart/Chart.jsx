import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default function Chart({title, data,dataKey, grid}) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#e19072" />
          <Line type="monotone" dataKey={dataKey} stroke="#e19072" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
