import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router'


function MainEstoque() {

    const [estoque, setEstoque] = useState([]);

    useEffect(() => {
        const buscarDadosEstoque = async () => {
            try {
                const response = await axios.get("http://localhost:3001/lis");

                const dadosOrdenados = response.data.sort((a, b) =>
                    (a.nome || "").localeCompare(b.nome || "")
                );
                setEstoque(dadosOrdenados);
            } catch (erro) {
                console.error("Erro ao buscar dados:", erro);
            }
        };
        buscarDadosEstoque();
    }, []);

    async function deletarEstoque(id) {
        const confirmar = confirm("Deseja realmente excluir?");
        if (!confirmar) return;

        try {

            const resposta = await fetch(`https://typicode.com{id}`, {
                method: 'DELETE'
            });

            if (resposta.ok) {
                setEstoque(estoque.filter(item => item.id !== id));
                alert("Produto excluído com sucesso!");
            } else {
                alert("Erro ao excluir o produto.");
            }
        } catch (erro) {
            console.error(erro);
        }
    }

    return (
        <main className="ph-main-corpo px-md-4 ph-bg-color">
            {/* Títulos e Botão Novo */}
            <div className="d-flex col-md-9 col-lg-12 justify-content-between align-items-center pt-3 pb-2 mb-3">
                <h1 className="h5 mt-3">Controle de Estoque</h1>

            </div>

            {/* Cards de Resumo */}
            <div className="row pt-4    ">
                <div className="col-sm-4 hh-mb ">
                    <div className="card shadow bg-body-tertiary rounded ms-3">
                        <div className="card-body">
                            <h6 className="card-title text-secondary">Total de Entradas</h6>
                            <p className="h3 card-text text-success"> 336.000</p>
                            <div className="hh-verde-circulo float-end"><i className="fi fi-br-cart-shopping-fast hh-icon text-success"></i></div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card shadow bg-body-tertiary rounded ms-3">
                        <div className="card-body">
                            <h6 className="card-title text-secondary">Total de Saída</h6>
                            <p className="h3 card-text text-success"> 130.000</p>
                            <div className="hh-verde-circulo float-end"><i className="fi fi-br-arrow-trend-up hh-icon text-success"></i></div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card shadow bg-body-tertiary rounded ms-3">
                        <div className="card-body">
                            <h6 className="card-title text-secondary">Saldo em Estoque</h6>
                            <p className="h3 card-text text-danger"> 206.000</p>
                            <div className="hh-vermelho-circulo float-end"><i className="fi fi-br-arrow-trend-down hh-icon text-danger"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            {/*botão cadastrar*/}
            <div className="m-2 jp-container-pai">

                <Link to={"./CadastrarEstoque"} className="ph-btn fw-semibold bm-cor-botao ph-cor-branco mt-0 rounded-3 text-decoration-none">
                    <i className="fi fi-br-plus me-3  ">
                    </i>Cadastro de nota 
                </Link>
            </div>
            {/*começo da tabela*/}
            <div className="col-md-12 col-lg-12 border rounded-3 overflow-hidden bg-white">
                <table className="table table-striped mb-0">
                    <thead>
                        <tr className="ph-cabecalho-cor-table">
                            <th scope="col">ID</th>
                            <th scope="col">Empresa</th>
                            <th scope="col">Produto</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col">Minimo</th>
                            <th scope="col">Atualizado</th>

                        </tr>
                    </thead>
                    <tbody>
                        {estoque.length > 0 ? (
                            estoque.map((estoque) => (
                                <tr key={estoque.id} className="ph-corpo-cor-table">
                                    <td>{estoque.empresa}</td>
                                    <td>{estoque.produto}</td>
                                    <td>{estoque.quantidade}</td>
                                    <td>{estoque.minimo}</td>
                                    <td>{estoque.atualizado}</td>
                                    <td>
                                        <Link to={`/editar-Estoque/${estoque.id}`} className="me-3">
                                            <i className="fi fi-rr-pencil ph-cor-lapis text-primary"></i>
                                        </Link>
                                        <button onClick={() => deletarEstoque(estoque.id)} className="border-0 bg-transparent">
                                            <i className="fi fi-rr-trash ph-cor-lixo text-danger"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center py-3">Carregando estoque...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    );
}

export default MainEstoque;
