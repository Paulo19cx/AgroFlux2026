import { LineChart, Pie, XAxis, PieChart, YAxis, Line, CartesianGrid, Bar } from "recharts";




function GraficoLinha() {

    const dadosNotas = [
        { nome: 'Jan', nota: 8},
        { nome: 'Fev', nota: 6},
        { nome: 'Mar', nota: 9},
        { nome: 'Abr', nota: 7},
        { nome: 'Mai', nota: 7},
        { nome: 'Jun', nota: 7},
        ];

    return (
        <>
        <LineChart
        width={500}
        height={300}
        data={dadosNotas}>
        <XAxis dataKey='nome' />
        <Line type='monotone'
        dataKey='nota' />
        </LineChart>
        </>
    );
  }
export default GraficoLinha;