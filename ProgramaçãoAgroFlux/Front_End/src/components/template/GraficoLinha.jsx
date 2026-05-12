import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  {
    name: 'Jan',
    Lucro: 16500,
    amt: 2400,
  },
  {
    name: 'Fev',
    Lucro: 20000,
    amt: 2210,
  },
  {
    name: 'Mar',
    Lucro: 17500,
    amt: 2290,
  },
  {
    name: 'Abr',
    Lucro: 22550,
    amt: 2000,
  },
  {
    name: 'Mai',
    Lucro: 22400,
    amt: 2181,
  },
  {
    name: 'Jun',
    Lucro: 30000,
    amt: 2500,
  },
];

// #endregion
const GraficoLinha = ({ isAnimationActive = true }) => (
  <LineChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis width="auto" />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="Lucro" stroke="#82ca9d" isAnimationActive={isAnimationActive} />
    <RechartsDevtools />
  </LineChart>
);

export default GraficoLinha;