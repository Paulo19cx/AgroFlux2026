import { useState, useActionState } from "react";

function MainCadastrarEntradaEstoque() {

    const [numeroNota, setNumeroNota] = useState('');
    const [fornecedor, setFornecedor] = useState('');
    const [dataEmissao, setDataEmissao] = useState('');
    const [observacoes, setObservacoes] = useState('');

    const [produto, setProduto] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [valorUnitario, setValorUnitario] = useState('');
    const [subtotal, setSubtotal] = useState('');

    const [ acaoCadastro, pendente] = useActionState(

        async (estadoAnterior, formData) => {
            const dadosCliente = JSON.stringify(Object.fromEntries(formData.entries()));

            await new Promise((resolve) => setTimeout(resolve, 2000));

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
                    if (resposta.ok) {
                        alert('Cadastrado com sucesso');
                        setNumeroNota('');
                        setFornecedor('');
                        setDataEmissao('');
                        setObservacoes('');
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
                    <h1 className="h2">Cadastrar Nota</h1>
                </div>

                <div className="col-md-12 col-lg-12 ph-cor-fundo-branco p-4 rounded-3 shadow-lg">
                    <form action={acaoCadastro} className="row g-3 text-black">
                        <h6 className="fw-bold mb-0">Dados da Nota</h6>
                        <div className="col-md-3">
                            <label htmlFor="numero_nota" className="form-label">Número da Nota</label>
                            <input value={numeroNota} onChange={(e) => setNumeroNota(e.target.value)} type="text" className="form-control ph-input" id="numero_nota" name="numero_nota" required/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="fornecedor" className="form-label">Fornecedor</label>
                            <input value={fornecedor} onChange={(e) => setFornecedor(e.target.value)} type="text" className="form-control ph-input" id="fornecedor" name="fornecedor" />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="data_emissao" className="form-label">Data Emissão</label>
                            <input value={dataEmissao} onChange={(e) => setDataEmissao(e.target.value)} type="text" className="form-control ph-input" id="data_emissao" name="data_emissao" required />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="observacoes" className="form-label">Observações</label>
                            <input value={observacoes} onChange={(e) => setObservacoes(e.target.value)} type="text" className="form-control ph-input" id="observacoes" name="observacoes" required />
                        </div>

                        <h6 className="fw-bold mb-0">Produtos</h6>
                        <div className="col-md-4">
                            <label htmlFor="email" className="form-label">Produto</label>
                            <input value={produto} onChange={(e) => setProduto(e.target.value)} type="email" className="form-control ph-input" id="email" name="email" />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="endereco" className="form-label">Quantidade</label>
                            <input value={quantidade} onChange={(e) => setQuantidade(e.target.value)} type="text" className="form-control ph-input" id="endereco" name="endereco" />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="endereco" className="form-label">Valor Unitário</label>
                            <input value={valorUnitario} onChange={(e) => setValorUnitario(e.target.value)} type="text" className="form-control ph-input" id="endereco" name="endereco" />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="endereco" className="form-label">Subtotal</label>
                            <input value={subtotal} onChange={(e) => setSubtotal(e.target.value)} type="text" className="form-control ph-input" id="endereco" name="endereco" />
                        </div>
                        <div className="col-12">
                            <button disabled={pendente} type="submit" className="ph-btn-forms ph-btn-forms-cor-cadastrar mt-3">{pendente ? 'Confirmando...' : 'Confirmar'}</button>
                        </div>

                    </form>
                </div>
            </main>
        </>
    );
}

export default MainCadastrarEntradaEstoque;