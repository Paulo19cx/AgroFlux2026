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
        { nome: "Fertilizantes", Quantidade: 400, cor: '#16a34a' },
        { nome: "Sementes", Quantidade: 100, cor: '#16a34a'},
        { nome: "Defensivos", Quantidade: 250, cor: '#16a34a' }
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
                    <Bar dataKey="Quantidade" fill="#16a34a" shape={<BarraColorida />} />
                </BarChart>
            </div>

        </>
    );
}
export default Grafico;