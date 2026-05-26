import { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from 'axios';

const MainProdutos = () => {

    const [produto, setProduto] = useState([]);
    const [pesquisa, setPesquisa] = useState('');

    useEffect(() => {
        const buscarDadosProdutos = async () => {
            try {
                const response = await axios.get('http://localhost:3001/listar-produtos');
                
                const produtosOrdenados = response.data.sort((a, b) =>
                    a.nome.localeCompare(b.nome)
                );

                setProduto(produtosOrdenados);
            } catch (erro) {
                console.log(erro);
            }
        }
        buscarDadosProdutos();
    }, []);

    const pesquisarProduto = async (texto) => {

        setPesquisa(texto);

        try {
            if (texto.trim() === '') {
                const response = await axios.get('http://localhost:3001/listar-produtos');
                const produtosOrdenados = response.data.sort((a, b) =>
                    a.nome.localeCompare(b.nome)
                );
                setProduto(produtosOrdenados);
                return;
            }

            const response = await axios.get(`http://localhost:3001/pesquisar-produto?nome=${texto}`);
            setProduto(response.data);
        } catch (erro) {
            console.log(erro);
        }
    };

    const deletarProduto = async (id) => {

        const confirmar = confirm("Deseja realmente excluir?");

        if (!confirmar) return;

        try {
            const resposta = await axios.delete(`http://localhost:3001/deletar-produto/${id}`);

            if (resposta.status === 200) {
                setProduto(produto.filter(p => p.id !== id));
                alert("Produto excluído com sucesso!");
            } else {
                alert("Erro ao excluir o produto.");
            }
        } catch (erro) {
            console.error(erro);
        }
    }

    return (
        <>
            <main className="ph-main-corpo px-md-4 ph-bg-color">
                <div className="d-flex col-md-9 col-lg-12 justify-content-between align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h5 mt-3">Produtos</h1>
                    <Link to={"/cadastrar-produto"} type="button" className="ph-btn fw-semibold bm-cor-botao ph-cor-branco mt-0 rounded-3"><i className="fi fi-br-plus me-3"></i>Novo Produto</Link>
                </div>

                <div className="col-md-12 col-lg-12 border rounded-3 overflow-hidden">
                    <div className="p-3 ph-bg-search">
                        <input type="text" placeholder="Pesquisar produto por nome..." className="form-control ph-input" value={pesquisa}onChange={(e) => pesquisarProduto(e.target.value)} />
                    </div>
                    <div className="ph-tabela-responsiva">
                    <table className="table table-striped mb-0">
                        <thead>
                            <tr className="ph-cabecalho-cor-table">
                                <th scope="col">ID</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Unidade</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Estoque</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                produto.map((produto) => (
                                    <tr key={produto.id} className="ph-corpo-cor-table">
                                        <td>{produto.id}</td>
                                        <td>{produto.nome}</td>
                                        <td>{produto.categoria}</td>
                                        <td>{produto.unidade_medida}</td>
                                        <td>{produto.preco_venda}</td>
                                        <td>{produto.estoqueAtual}</td>
                                        <td>
                                            <Link to={`/editar-produto/${produto.id}`} className="text-decoration-none"><i className="fi fi-rr-pencil ph-cor-lapis"></i></Link>
                                            <button onClick={() => deletarProduto(produto.id)} className="border border-0 bg-transparent"><i className="fi fi-rr-trash ph-cor-lixo"></i></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
            </main>
        </>
    );
}

export default MainProdutos;