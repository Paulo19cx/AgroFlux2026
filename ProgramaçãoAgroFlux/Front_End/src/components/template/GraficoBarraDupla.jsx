import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  {
    name: 'Jan',
    Vendas: 43000,
    Custos: 30000,
    amt: 2400,
  },
  {
    name: 'Fev',
    Vendas: 55000,
    Custos: 36000,
    amt: 2210,
  },
  {
    name: 'Mar',
    Vendas: 49000,
    Custos: 33000,
    amt: 2290,
  },
  {
    name: 'Abr',
    Vendas: 63000,
    Custos: 37000,
    amt: 2000,
  },
  {
    name: 'Mai',
    Vendas: 57000,
    Custos: 34000,
    amt: 2181,
  },
  {
    name: 'Jun',
    Vendas: 78000,
    Custos: 43000,
    amt: 2500,
  },
];

// #endregion
const GraficoBarraDupla = () => {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" orientation="left" stroke="#000000" width="auto" />
      <Tooltip />
      <Legend />
      <Bar yAxisId="right" dataKey="Vendas" fill="#16a34a" />
      <Bar yAxisId="left" dataKey="Custos" fill="#ef4444" />
      <RechartsDevtools />
    </BarChart>
  );
};

export default GraficoBarraDupla;