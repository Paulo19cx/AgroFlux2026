import { Pie, PieChart, Tooltip, Cell, Legend } from 'recharts';

export default function GraficoPizza() {
  const CORES = ['#16a34a', '#10b981', '#84cc16', '#22c55e'];
  
  const dados = [
    { name: 'Fertilizantes', uv: 38 },
    { name: 'Sementes', uv: 30 },
    { name: 'Defensivos', uv: 23 },
    { name: 'Equipamentos', uv: 9 },
  ];

  const renderFormatado = (value, entry, index) => {

    const porcentagem = entry.payload.uv; 
    
    return (
      <span style={{ color: CORES[index], fontWeight: '500', marginLeft: '6px' }}>
        {value} ({porcentagem}%)
      </span>
    );
  };

  return (
    <PieChart width={550} height={400}>
      <Pie 
        data={dados} 
        dataKey="uv"
        cx="35%" 
        cy="50%"
        outerRadius={100}
      >
        {dados.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={CORES[index % CORES.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend 
        layout="vertical" 
        verticalAlign="middle" 
        align="right"
        formatter={renderFormatado}
        iconType="circle"
        iconSize={10}
      />
    </PieChart>
  );
}