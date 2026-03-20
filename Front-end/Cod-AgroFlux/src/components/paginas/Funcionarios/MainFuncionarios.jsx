import { Link } from "react-router";

import DadosFuncionario from "../../DadosFuncionario";
import FotoIg from "../../../assets/img/igiconrecorte.png";
import FotoMenoK from "../../../assets/img/MKrecorte.png";
import FotoVeigh from "../../../assets/img/veigh.jfif";
import FotoKB from "../../../assets/img/Kayblack.jfif";
import FotoTayler from "../../../assets/img/TaylerT.jfif";
import FotoDrake from "../../../assets/img/drakeRecorte.png";
import Fotoye from "../../../assets/img/kanye.jfif";
import FotoBillie from "../../../assets/img/billie.jfif";
import FotoGP from"../../../assets/img/gpfoto.png";

function MainFuncionarios() {
    let dados = [
        { id: 1, nome: "Guilherme Sérgio", cargo: "Gerente agrônomico", email: "ig@4mguilherme.com", remuneracao: "R$8.000", foto: FotoIg },
        { id: 2, nome: "Kauan soares", cargo: "Vendedor técnico", email: "meno@ksoares.com", remuneracao: "R$5.550", foto: FotoMenoK },
        { id: 3, nome: "Thiago Veigh", cargo: "Analista de produtos", email: "veight@iago.com", remuneracao: "R$ 6.000", foto: FotoVeigh },
        { id: 4, nome: "Kaique Menezes", cargo: "Analista de produtos", email: "k@menezes.com", remuneracao: "R$ 6.000", foto: FotoKB },
        { id: 5, nome: "Tyler Gregory Okonma", cargo: "Vendedor técnico", email: "t@creator.com", remuneracao: "R$ 5.500", foto: FotoTayler },
        { id: 6, nome: "Aubrey Drake Graham", cargo: "Vendedor técnico", email: "drake@aubrey.com", remuneracao: "R$ 5.500", foto: FotoDrake },
        { id: 7, nome: "Billie Eillish Pirate Baird O’ Connell", cargo: "Analista de produtos", email: "billie.e@pirate.com", remuneracao: "R$ 6.000", foto: FotoBillie },
        { id: 8, nome: "Kanye Omari West", cargo: "Gerente agrônomico", email: "k@yewest.com", remuneracao: "R$8.000", foto: Fotoye },
        {id: 9, nome: "Gabriel Porto", cargo: "Analista de produtos", email: "gab@porto.com", remuneracao: "R$6.000", foto: FotoGP},
    ]
    return (
        <>
            <title>funcionários</title>

            <main class="col-md-9 col-lg-10 flex-grow-1 px-md-4 ph-bg-color">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Funcionários</h1>
                    <Link to={"/cadastrar-funcionario"} type="button" class="btn ph-cor-branco mt-3 bm-cor-botao"><i class="fi fi-br-plus me-3 bm-botao-novo"></i>Novo Cliente</Link>
                </div>
                <div className="d-flex justify-content-around flex-wrap">
                    {
                        dados.map((Funcionario) =>
                            <DadosFuncionario id={Funcionario.id} nome={Funcionario.nome} cargo={Funcionario.cargo} email={Funcionario.email} remuneracao={Funcionario.remuneracao} foto={Funcionario.foto} />

                        )
                    }


                </div>

            </main>
        </>
    );
}

export default MainFuncionarios;