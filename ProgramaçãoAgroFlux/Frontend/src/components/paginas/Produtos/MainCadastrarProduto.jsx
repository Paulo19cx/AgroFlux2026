import { useState, useActionState } from "react";
import { Link, useNavigate } from "react-router";
import axios from 'axios';

function MainCadastrarProduto() {

    const [fornecedorId, setFornecedorId] = useState('');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [unidadeMedida, setUnidadeMedida] = useState('');
    const [precoVenda, setPrecoVenda] = useState('');
    const [custoUnitario, setCustoUnitario] = useState('');
    const [situacao, setSituacao] = useState('ATIVO');

    const funcionarioId = sessionStorage.getItem('id');

    const navigate = useNavigate();

    const [estadoCadastro, acaoCadastro, pendente] = useActionState(

        async (estadoAnterior, formData) => {
            const produto = {
                fornecedorId,
                funcionarioId,
                nome,
                descricao,
                categoria,
                unidadeMedida,
                precoVenda,
                custoUnitario,
                situacao
            };

            try {
                const response = await axios.post('http://localhost:3001/cadastrar-produto', produto);

                if (response.status === 201) {
                    alert('Produto cadastrado com sucesso');

                    setFornecedorId('');
                    setNome('');
                    setDescricao('');
                    setCategoria('');
                    setUnidadeMedida('');
                    setPrecoVenda('');
                    setCustoUnitario('');
                    setSituacao('ATIVO');

                    navigate('/produtos');
                } else {
                    alert('Erro ao cadastrar!');
                }
            } catch (erro) {
                console.log(erro);
                alert('Erro ao cadastrar produto');
            }
        }
    )

    return (
        <>
            <main className="ph-main-corpo px-md-4 ph-bg-color">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 text-black">
                    <h1 className="h5 mt-3">Cadastrar Produto</h1>
                </div>

                <div className="col-md-12 col-lg-12 ph-cor-fundo-branco p-4 rounded-3 shadow-lg">
                    <form action={acaoCadastro} className="row g-3 text-black">
                        <h6 className="fw-bold mb-0">Produto</h6>
                        <div className="col-md-4">
                            <label htmlFor="fornecedorId" className="form-label small mb-1">Fornecedor</label>
                            <input onChange={(e) => setFornecedorId(e.target.value)} value={fornecedorId} type="text" className="form-control ph-input" id="fornecedorId" name="fornecedorId" required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="nome" className="form-label small mb-1">Nome</label>    
                            <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" className="form-control ph-input" id="nome" name="nome" required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="unidadeMedida" className="form-label small mb-1">Unidade de Medida</label>
                            <input value={unidadeMedida} onChange={(e) => setUnidadeMedida(e.target.value)} type="text" className="form-control ph-input" id="unidadeMedida" name="unidadeMedida" required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="categoria" className="form-label small mb-1">Categoria</label>
                            <select value={categoria} onChange={(e) => setCategoria(e.target.value)} className="form-select ph-input" id="categoria" name="categoria" required>
                                <option value="">Selecione uma categoria</option>
                                <option value="SEMENTE">Semente</option>
                                <option value="ADUBO">Adubo</option>
                                <option value="FERTILIZANTES">Fertilizantes</option>
                                <option value="DEFENCIVOS">Defencivos</option>
                                <option value="EMBALAGENS">Embalagens</option>
                                <option value="BIOLOGICOS">Biológicos</option>
                            </select>
                        </div>
                        <div className="col-md-8">
                            <label htmlFor="descricao" className="form-label small mb-1">Descrição</label>
                            <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} className="form-control ph-input" id="descricao" name="descricao" rows="3" required />
                        </div>

                        <h6 className="fw-bold mb-0">Preços</h6>
                        <div className="col-md-4">
                            <label htmlFor="custoUnitario" className="form-label small mb-1">Custo Unitário</label>
                            <input value={custoUnitario} onChange={(e) => setCustoUnitario(e.target.value)} type="number" step="0.01" className="form-control ph-input" id="custoUnitario" name="custoUnitario" required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="precoVenda" className="form-label small mb-1">Preço de Venda</label>
                            <input value={precoVenda} onChange={(e) => setPrecoVenda(e.target.value)} type="number" step="0.01" className="form-control ph-input" id="precoVenda" name="precoVenda" required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="situacao" className="form-label small mb-1">Situação</label>
                            <select value={situacao} onChange={(e) => setSituacao(e.target.value)} className="form-select ph-input" id="situacao" name="situacao" required >
                                <option value="ATIVO">Ativo</option>
                                <option value="INATIVO">Inativo</option>
                            </select>
                        </div>

                        <div className="col-12">
                            <button
                                disabled={pendente}
                                type="submit"
                                className="ph-btn-forms ph-btn-forms-cor-cadastrar mt-3">{pendente ? 'Cadastrando...' : 'Cadastrar'}
                            </button>
                            <Link to="/produtos" className="ph-btn-forms ph-btn-forms-cor-cancelar mt-3 ms-2">Voltar</Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}

export default MainCadastrarProduto;