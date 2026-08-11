import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router'


function MainEstoque() {

    const [estoque, setEstoque] = useState([]);
    const [itemSelecionado, setItemSelecionado] = useState(null);
    const [pesquisa, setPesquisa] = useState('');

    useEffect(() => {
        const buscarDadosEstoque = async () => {
            try {
                const response = await axios.get("http://localhost:3001/listar-estoques");
                console.log(response.data);

                const dadosOrdenados = response.data.sort((a, b) =>
                    a.nome.localeCompare(b.nome)
                );
                setEstoque(dadosOrdenados);
            } catch (erro) {
                console.error("Erro ao buscar dados:", erro);
            }
        };
        buscarDadosEstoque();
    }, []);

    const pesquisarEstoque = async (texto) => {

        setPesquisa(texto);

        try {
            if (texto.trim() === '') {
                const response = await axios.get('http://localhost:3001/listar-estoques');
                const estoquesOrdenados = response.data.sort((a, b) =>
                    a.nome.localeCompare(b.nome)
                );
                setEstoque(estoquesOrdenados);
                return;
            }

            const response = await axios.get(`http://localhost:3001/pesquisar-estoque?nome=${texto}`);
            setEstoque(response.data);
        } catch (erro) {
            console.log(erro);
        }
    };

    return (
        <main className="ph-main-corpo px-md-4 ph-bg-color">
            {/* Títulos e Botão Novo */}
            <div className="d-flex col-md-9 col-lg-12 justify-content-between align-items-center pt-3 pb-2 mb-3">
                <h1 className="h5 mt-3">Controle de Estoque</h1>

            </div>

            {/* Cards de Resumo */}
            <div className="row g-3 pt-4">
                <div className="col-sm-6 col-lg-4">
                    <div className="card shadow bg-body-tertiary rounded h-100">
                        <div className="card-body d-flex flex-column justify-content-between">
                            <div>
                                <h6 className="card-title text-secondary">Total de Entradas</h6>
                                <p className="h3 card-text text-success mb-0">336.000</p>
                            </div>
                            <div className="hh-verde-circulo float-end"><i className="fi fi-br-arrow-trend-up hh-icon text-success"></i></div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="card shadow bg-body-tertiary rounded h-100">
                        <div className="card-body d-flex flex-column justify-content-between">
                            <div>
                                <h6 className="card-title text-secondary">Total de Saída</h6>
                                <p className="h3 card-text text-danger mb-0">130.000</p>
                            </div>
                            <div className="hh-vermelho-circulo float-end"><i className="fi fi-br-arrow-trend-down hh-icon text-danger"></i></div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="card shadow bg-body-tertiary rounded h-100">
                        <div className="card-body d-flex flex-column justify-content-between">
                            <div>
                                <h6 className="card-title text-secondary">Saldo em Estoque</h6>
                                <p className="h3 card-text text-primary mb-0">206.000</p>
                            </div>
                            <div className="hh-azul-circulo float-end"><i className="fi fi-rs-box-open hh-icon text-primary"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3">
                <div className="ph-bg-search col-md-5">
                    <input type="text" placeholder="Pesquisar estoque por nome..." className="form-control ph-input" value={pesquisa} onChange={(e) => pesquisarEstoque(e.target.value)} />
                </div>

                <div className="m-2 jp-container-pai">
                    <Link to={"/cadastrar-estoque"} type="button" className="ph-btn fw-semibold bm-cor-botao ph-cor-branco mt-0 rounded-3 text-decoration-none mb-4 mt-4"><i className="fi fi-br-plus me-3"></i>Cadastro de nota</Link>
                </div>
            </div>

            <div className="col-md-12 col-lg-12 border rounded-3 overflow-hidden bg-white">
                <div className="ph-tabela-responsiva">
                    <table className="table table-striped mb-0">
                        <thead>
                            <tr className="ph-cabecalho-cor-table">
                                <th scope="col">ID</th>
                                <th scope="col">Empresa</th>
                                <th scope="col">Produto</th>
                                <th scope="col">Quantidade</th>
                                <th scope="col">Minimo</th>
                                <th scope="col">Atualizado</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {estoque.length > 0 ? (
                                estoque.map((estoque) => (
                                    <tr key={estoque.id} className="ph-corpo-cor-table">
                                        <td>{estoque.id}</td>
                                        <td>{estoque.empresa_id}</td>
                                        <td>{estoque.nome}</td>
                                        <td>{estoque.quantidade}</td>
                                        <td>{estoque.minimo}</td>
                                        <td>{estoque.atualizado_em}</td>
                                        <td>
                                            <button onClick={() => setItemSelecionado(estoque)} className="border-0 bg-transparent" title="Visualizar">
                                                <i className="fi fi-rr-eye" style={{ color: '#0d6efd' }}></i>
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
            </div>

            {itemSelecionado && (
                <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
                    <div className="card shadow" style={{ width: '90%', maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto' }}>
                        <div className="card-header text-white d-flex justify-content-between align-items-center" style={{ backgroundColor: '#2e8b57' }}>
                            <h5 className="mb-0">Detalhes do Estoque</h5>
                            <button onClick={() => setItemSelecionado(null)} className="btn-close btn-close-white" style={{ cursor: 'pointer' }}></button>
                        </div>
                        <div className="card-body">
                            <p><strong>ID:</strong> {itemSelecionado.id}</p>
                            <p><strong>Empresa:</strong> {itemSelecionado.empresa_id}</p>
                            <p><strong>Produto:</strong> {itemSelecionado.nome}</p>
                            <p><strong>Quantidade:</strong> {itemSelecionado.quantidade}</p>
                            <p><strong>Mínimo:</strong> {itemSelecionado.minimo}</p>
                            <p><strong>Atualizado em:</strong> {itemSelecionado.atualizado_em}</p>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default MainEstoque;
