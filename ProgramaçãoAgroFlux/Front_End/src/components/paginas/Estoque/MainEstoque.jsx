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
                <Link to="/cadastrar-Estoque" className="ph-btn fw-semibold bm-cor-botao ph-cor-branco mt-0 rounded-3 text-decoration-none">
                    <i className="fi fi-br-plus me-3"></i>Novo Estoque
                </Link>
            </div>

            {/* Cards de Resumo */}
            <div className="container text-center mb-4">
                <div className="row align-items-start">
                    <div className="col-4">
                        <div className="ps-3 py-3 bg-white pricing-card border rounded shadow-sm">
                            Total de Entregas
                            <h2 className="jp-cor-numero-1 mt-4">360</h2>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="ps-3 py-3 bg-white pricing-card border rounded shadow-sm">
                            Total de Saídas
                            <h2 className="jp-cor-numero-2 mt-4">260</h2>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="ps-3 py-3 bg-white pricing-card border rounded shadow-sm">
                            Saldo em Estoque
                            <h2 className="jp-cor-numero-3 mt-4">661</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabela de Dados (Aqui usamos o .map corrigido) */}
            <div className="col-md-12 col-lg-12 border rounded-3 overflow-hidden bg-white">
                <table className="table table-striped mb-0">
                    <thead>
                        <tr className="ph-cabecalho-cor-table">
                            <th scope="col">ID</th>
                            <th scope="col">Empresa</th>
                            <th scope="col">Produto</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col">minimo</th>
                            <th scope="col">atualizado</th>

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
                                <td colSpan="4" className="text-center py-3">Carregando estoque...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    );
}

export default MainEstoque;
