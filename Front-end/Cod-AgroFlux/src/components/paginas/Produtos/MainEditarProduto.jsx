import { useParams } from "react-router";
import { useState, useEffect, useActionState } from "react";

function MainEditarProduto() {

    const { id } = useParams();

    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [custoUnitario, setCustoUnitario] = useState('');
    const [precoVenda, setPrecoVenda] = useState('');
    const [estoqueAtual, setEstoqueAtual] = useState('');
    const [estoqueMinino, setEstoqueMinino] = useState('');

    const [estadoAtualizar, acaoAtualizar, pendente] = useActionState(
        
            async (estadoAnterior, formData) => {
                const dadosProdutos = JSON.stringify(Object.fromEntries(formData.entries()));
                // Simula uma espera em segundos
                await new Promise((resolve) => setTimeout(
                    resolve, 2000
                ));
                console.log(dadosProdutos);
                try {
                    let resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                        method: 'PUT',
                        body: dadosProdutos,
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                    })
                    console.log(resposta);
                    console.log(resposta.status);
                    console.log(resposta.ok);

                    if (resposta.status === 200) {
                        console.log('Resposta do servidor ok!');
                        if (resposta.ok === true) {
                            alert('Alterado com sucesso');
                        } else {
                            alert('Erro ao alterar!');
                        }
                    } else {
                        console.log('Resposta do servidor erro!');
                    }
                } catch (erro) {
                    console.log(erro);
                }


            }
        );

     useEffect( () => {
     async function getDadosProduto(){
        let resposta = await 
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        let dadosProduto = await resposta.json();
        console.log(dadosProduto);
        
    
     }
     getDadosProduto();

     }, [id] );

    return (
        <>
            <main className="ph-main-corpo px-md-4 ph-bg-color">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
                >
                    <h1 className="h2">Editar Produto: {id}</h1>
                </div>

                <form action={acaoAtualizar} className="row g-3 text-black">
                    <div className="col-md-6">
                        <label
                            htmlFor="descricao"
                            className="form-label">
                            Descrição
                        </label>
                        <input
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            type="text" className="form-control"
                            id="descricao"
                            name="descricao"
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label
                            htmlFor="nome_fantasia"
                            className="form-label">
                            Categoria
                        </label>
                        <input
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                            type="text"
                            className="form-control"
                            id="nome_fantasia"
                            name="nome_fantasia"
                        />
                    </div>

                    <div className="col-4">
                        <label
                            htmlFor="cnpj"
                            className="form-label">
                            Custo Unitário
                        </label>
                        <input value={custoUnitario}
                            onChange={(e) => setCustoUnitario(e.target.value)}
                            type="text"
                            className="form-control"
                            id="cnpj" name="cnpj"
                            required
                        />
                    </div>

                    <div className="col-4">
                        <label
                            htmlFor="telefone"
                            className="form-label">
                            Preço Venda
                        </label>
                        <input
                            value={precoVenda}
                            onChange={(e) => setPrecoVenda(e.target.value)}
                            type="text"
                            className="form-control"
                            id="telefone"
                            name="telefone"
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <label
                            htmlFor="email"
                            className="form-label">
                            Estoque Atual
                        </label>
                        <input
                            value={estoqueAtual}
                            onChange={(e) => setEstoqueAtual(e.target.value)}
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                        />
                    </div>

                    <div className="col-md-6">
                        <label
                            htmlFor="endereco"
                            className="form-label">
                            Estoque Mínimo
                        </label>
                        <input
                            value={estoqueMinino}
                            onChange={(e) => setEstoqueMinino(e.target.value)}
                            type="text"
                            className="form-control"
                            id="endereco"
                            name="endereco"
                        />
                    </div>

                    <div className="col-12">
                        <button
                            disabled={pendente}
                            type="submit"
                            className="btn btn-primary">{pendente ? 'Cadastrando...' : 'Cadastrar'}
                        </button>
                    </div>
                </form>


            </main>
        </>
    );
}
export default MainEditarProduto;
