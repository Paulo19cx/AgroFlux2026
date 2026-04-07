import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";


function BarraColorida(props) {
  const { x, y, width, height, payload } = props;

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={1}
      ry={1}
      fill={payload.cor}
    />
  );
}


function Grafico(props) {
    const dadosNotas = [
        { nome: "Jan", nota: 80000, cor: '#16a34a' },
        { nome: "Fev", nota: 75000, cor: '#ef4444'},
        { nome: "Mar", nota: 60000, cor: '#16a34a' },
        { nome: "Abr", nota: 55000, cor: '#ef4444' },
        { nome: "Mai", nota: 65000, cor: '#16a34a' },
        { nome: "Jun", nota: 45000, cor: '#ef4444' }
        
    ];


    return (
        <>
            <div className="row">
                <h3 className="mt-3 mb-3">{props.titulo} {props.periodo}</h3>
                <BarChart responsive width={`100%`} height={300} data={dadosNotas}>
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="nome" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="nota" shape={<BarraColorida />} />
                </BarChart>
            </div>

        </>
    );
}
export default Grafico;