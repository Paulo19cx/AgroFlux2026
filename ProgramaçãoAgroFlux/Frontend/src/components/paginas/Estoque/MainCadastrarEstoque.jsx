import { useState, useActionState } from "react";

function MainCadastrarEstoque() {

    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [custoUnitario, setCustoUnitario] = useState('');
    const [precoVenda, setPrecoVenda] = useState('');
    const [estoqueAtual, setEstoqueAtual] = useState('');
    const [estoqueMinino, setEstoqueMinino] = useState('');

    const [ acaoCadastro, pendente] = useActionState(

        async (estadoAnterior, formData) => {
            const dadosCliente = JSON.stringify(Object.fromEntries(formData.entries()));

            await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log(dadosCliente);

            try {
                const resposta = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: dadosCliente,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                });
                console.log(resposta);
                console.log(resposta.status);
                console.log(resposta.ok);

                if (resposta.status === 201) {
                    console.log('Resposta do servidor ok!');
                    if (resposta.ok) {
                        alert('Cadastrado com sucesso');
                        setDescricao('');
                        setCategoria('');
                        setCustoUnitario('');
                        setPrecoVenda('');
                        setEstoqueAtual('');
                        setEstoqueMinino('');
                    } else {
                        alert('Erro ao cadastrar!');
                    }
                } else {
                    console.log('Resposta do servidor erro!');
                }
            } catch (erro) {
                console.log(erro);
            }
        }
    )

    return (
        <>
            <main className="ph-main-corpo px-md-4 ph-bg-color">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 text-black">
                    <h1 className="h2">Cadastrar Estoque</h1>
                </div>

                <div className="col-md-12 col-lg-12 ph-cor-fundo-branco p-4 rounded-3 shadow-lg">
                    <form action={acaoCadastro} className="row g-3 text-black">
                        <div className="col-md-6">
                            <label htmlFor="descricao" className="form-label">Descrição</label>
                            <input
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                type="text"
                                className="form-control ph-input"
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
                                className="form-control ph-input"
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
                                className="form-control ph-input"
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
                                className="form-control ph-input"
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
                                className="form-control ph-input"
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
                                className="form-control ph-input"
                                id="endereco"
                                name="endereco"
                            />
                        </div>

                        <div className="col-12">
                            <button
                                disabled={pendente}
                                type="submit"
                                className="ph-btn-forms ph-btn-forms-cor-cadastrar mt-3">{pendente ? 'Cadastrando...' : 'Cadastrar'}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}

export default MainCadastrarEstoque;