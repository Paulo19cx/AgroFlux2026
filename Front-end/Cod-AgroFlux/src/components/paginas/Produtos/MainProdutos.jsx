import { useEffect, useState } from "react";
import { Link } from "react-router";

function MainProdutos() {

    const jsonDadosProdutos = 'https://jsonplaceholder.typicode.com/users';
    const [produto, setProduto] = useState([]);

    useEffect(() => {
        async function buscarDadosProdutos() {
            try {
                let resposta = await fetch(jsonDadosProdutos);
                let dadosProduto = await resposta.json();
                setProduto(dadosProduto);
                console.log(dadosProduto)
            } catch (erro) {
                console.log(erro);
            }
        }
        buscarDadosProdutos();
    }, []);

    return (
        <>
            <main className="ph-main-corpo px-md-4 ph-bg-color">
                <div className="d-flex col-md-9 col-lg-12 justify-content-between align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h5 mt-3">Produtos</h1>
                    <Link to={"/cadastrar-produto"} type="button" className="ph-btn fw-semibold bm-cor-botao ph-cor-branco mt-0 rounded-3"><i className="fi fi-br-plus me-3"></i>Novo Produto</Link>
                </div>

                <div className="col-md-12 col-lg-12 border rounded-3 overflow-hidden">
                    <table className="table table-striped mb-0">
                        <thead>
                            <tr className="ph-cabecalho-cor-table">
                                <th scope="col">ID</th>
                                <th scope="col">Descrição</th>
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
                                        <td>{produto.descricao}</td>
                                        <td>{produto.categoria}</td>
                                        <td>{produto.unidade}</td>
                                        <td>{produto.precoVenda}</td>
                                        <td>{produto.estoqueAtual}</td>
                                        <td>
                                            <Link to={`/editar-produto/${produto.id}`} className="text-decoration-none"><i className="fi fi-rr-pencil ph-cor-lapis"></i></Link>
                                            <button onClick className="border border-0 bg-transparent"><i className="fi fi-rr-trash ph-cor-lixo"></i></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}

export default MainProdutos;