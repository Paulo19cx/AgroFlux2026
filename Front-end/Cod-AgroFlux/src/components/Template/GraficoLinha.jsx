import { LineChart, Pie, XAxis, PieChart, YAxis, Line, CartesianGrid, Bar } from "recharts";
  



function GraficoLiha() {
    const dadosNotas = [
        { nome: "Jan", nota: 80000, cor: '#16a34a' },
        { nome: "Fev", nota: 75000, cor: '#16a34a' },
        { nome: "Mar", nota: 60000, cor: '#16a34a' },
        { nome: "Abr", nota: 55000, cor: '#16a34a' },
        { nome: "Mai", nota: 65000, cor: '#16a34a' },
        { nome: "Jun", nota: 45000, cor: '#16a34a' }

    ];


    return (
        <>
            <div className="row">
                <LineChart
                    width={500}
                    height={300}
                    data={dadosNotas}>
                    <XAxis dataKey='mes' />
                    <Line type='monotone'
                        dataKey='nome' />
                    <CartesianGrid stroke="red" strokeDasharray={"5"} />
                <YAxis stroke="red"/>
                <Bar  dataKey={'vendas'}/>
                </LineChart>

            </div>

        </>
    );
}
export default GraficoLiha;