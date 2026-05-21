import { Link, useNavigate } from "react-router";

import DadosFuncionario from "../../DadosFuncionario";
import FotoIg from "../../../assets/img/igiconrecorte.png";
import FotoMenoK from "../../../assets/img/MKrecorte.png";
import FotoVeigh from "../../../assets/img/veigh.jfif";
import FotoKB from "../../../assets/img/Kayblack.jfif";
import FotoTayler from "../../../assets/img/TaylerT.jfif";
import FotoDrake from "../../../assets/img/drakeRecorte.png";
import Fotoye from "../../../assets/img/kanye.jfif";
import FotoBillie from "../../../assets/img/billie.jfif";
import FotoGP from "../../../assets/img/gpfoto.png";
import { useEffect, useState } from "react";
import axios from  'axios';''

const MainFuncionarios = () => {
    const [funcionarios, setFuncionarios] = useState([]);
    const [carregando, setCarregando] = useState(true);
    //const navegar = useNavigate();

    useEffect(() => {
        const carregarFuncionarios = async () => {
            try {
                const resposta = await axios.get("http://localhost:3001/listar-funcionarios");

                const funcioanriosOrdenados = resposta.data.sort((a, b) =>
                    a.nome.localeCompare(b.nome)
                );

                setFuncionarios(funcioanriosOrdenados);
            }
            catch (erro) {
                console.log(erro)
            }
        };
        carregarFuncionarios();
    }, []);

    // let dados = [
    //     { id: 1, nome: "Guilherme Sérgio", cargo: "Gerente agrônomico", email: "ig@4mguilherme.com", remuneracao: "R$8.000", foto: FotoIg },
    //     { id: 2, nome: "Kauan soares", cargo: "Vendedor técnico", email: "meno@ksoares.com", remuneracao: "R$5.550", foto: FotoMenoK },
    //     { id: 3, nome: "Thiago Veigh", cargo: "Analista de produtos", email: "veight@iago.com", remuneracao: "R$ 6.000", foto: FotoVeigh },
    //     { id: 4, nome: "Kaique Menezes", cargo: "Analista de produtos", email: "k@menezes.com", remuneracao: "R$ 6.000", foto: FotoKB },
    //     { id: 5, nome: "Tyler Gregory Okonma", cargo: "Vendedor técnico", email: "t@creator.com", remuneracao: "R$ 5.500", foto: FotoTayler },
    //     { id: 6, nome: "Aubrey Drake Graham", cargo: "Vendedor técnico", email: "drake@aubrey.com", remuneracao: "R$ 5.500", foto: FotoDrake },
    //     { id: 7, nome: "Billie Eillish Pirate Baird O’ Connell", cargo: "Analista de produtos", email: "billie.e@pirate.com", remuneracao: "R$ 6.000", foto: FotoBillie },
    //     { id: 8, nome: "Kanye Omari West", cargo: "Gerente agrônomico", email: "k@yewest.com", remuneracao: "R$8.000", foto: Fotoye },
    //     { id: 9, nome: "Gabriel Porto", cargo: "Analista de produtos", email: "gab@porto.com", remuneracao: "R$6.000", foto: FotoGP },
    //    { id: 9, nome: "Gabriel Porto", cargo: "Analista de produtos", email: "gab@porto.com", remuneracao: "R$6.000", foto: FotoGP },
    // ]
    return (
        <>
            <main className="ph-main-corpo px-md-4 ph-bg-color">
                <div className="d-flex col-md-9 col-lg-12 justify-content-between align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h5 mt-3">Funcionários</h1>
                    <Link to={"/cadastrar-funcionario"} type="button" className="ph-btn fw-semibold bm-cor-botao ph-cor-branco mt-0 rounded-3"><i className="fi fi-br-plus me-3"></i>Novo Funcionário</Link>
                </div>
                <div className="d-flex justify-content-around flex-wrap">
                    {
                        funcionarios.map(Funcionario => (
                            <DadosFuncionario key={Funcionario.id} id={Funcionario.id} nome={Funcionario.nome} cargo={Funcionario.cargo} email={Funcionario.email} remuneracao={Funcionario.remuneracao} foto={Funcionario.foto} />
                        ))
                    }
                </div>
            </main>
        </>
    );
}

export default MainFuncionarios;