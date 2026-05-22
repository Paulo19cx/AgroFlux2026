import { useState, useActionState } from "react";
import { Link, useNavigate } from "react-router";
import axios from 'axios';

function MainCadastrarFornecedor() {
    const [nomeRazaoSocial, setNomeRazaoSocial] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [email, setEmail] = useState('');
    const [situacao, setSituacao] = useState('ATIVO');
    const [telefone, setTelefone] = useState('');
    const [tipoTelefone, setTipoTelefone] = useState('');
    const [principal, setPrincipal] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');

    const navigate = useNavigate();

     async function buscarDadosCep() {
        if (cep.length < 8) return;
        try {
            const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const dadosCep = await resposta.json();

            if (dadosCep.erro) return;

            setLogradouro(dadosCep.logradouro);
            setBairro(dadosCep.bairro);
            setCidade(dadosCep.localidade);
            setEstado(dadosCep.uf);
        }
        catch (erro) {
            console.log(erro);
        }
    }

    const [estadoCadastro, acaoCadastro, pendente] = useActionState(
        async (estadoAnterior, formData) => {
            // const dadosFuncionario = JSON.stringify(Object.fromEntries(formData.entries()));
            // await new Promise((resolve) => setTimeout(resolve, 2000));

            if (!nomeRazaoSocial || !nomeFantasia || !cnpj || !email || !situacao || !numero || !cep || !bairro || !cidade || !estado) {
                alert('Todos os campos devem ser preenchidos');
                return;
            }

            const fornecedor = {
                nomeRazaoSocial,
                nomeFantasia,
                cnpj,
                email
            };

            try {
                const response = await axios('https://localhost:3001/cadastrar-fornecedor', fornecedor)


                if (response.status === 201) {
                    alert('Fornecedor cadastrado com sucesso!');

                    setNomeRazaoSocial('');
                    setNomeFantasia('');
                    setCnpj('');
                    setEmail('');
                    setSituacao('')
                } else {
                    alert('Erro ao cadastrar fornecedor!');
                }
            } catch (erro) {
                console.log(erro);
            }
        }
    );

    return (
        <main className="ph-main-corpo px-md-4 ph-bg-color">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 text-black">
                <h1 className="h5 mt-3">Cadastrar Fornecedor</h1>
            </div>

            <div className="col-md-12 col-lg-12 ph-cor-fundo-branco p-4 rounded-3 shadow-lg mb-5">
                <form action={acaoCadastro} className="row g-3 text-black">
                    <h6 className="fw-bold mb-0">Principal</h6>
                    <div className="col-md-5">
                        <label htmlFor="nome" className="form-label small mb-1">Nome Razão social</label>
                        <input value={nomeRazaoSocial} onChange={(e) => setNomeRazaoSocial(e.target.value)} type="text" className="form-control ph-input" id="nome" name="nomeRazaoSocial" required />
                    </div>
                     <div className="col-md-5">
                        <label htmlFor="nome" className="form-label small mb-1">Nome Fantasia</label>
                        <input value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)} type="text" className="form-control ph-input" id="nome" name="nomeFantasia" required />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="cpf" className="form-label small mb-1">CNPJ</label>
                        <input value={cnpj} onChange={(e) => setCnpj(e.target.value)} type="text" className="form-control ph-input" id="cnpj" name="cnpj" required />
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="email" className="form-label small mb-1">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control ph-input" id="email" name="email" required />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="situacao" className="form-label small mb-1">Situação</label>
                        <select value={situacao} onChange={(e) => setSituacao(e.target.value)} className="form-select ph-input" id="situacao" name="situacao">
                            <option value="ATIVO">Ativo</option>
                            <option value="INATIVO">Inativo</option>
                        </select>
                    </div>

                    <div className="col-12 mt-4">
                        <button disabled={pendente} type="submit" className="ph-btn-forms ph-btn-forms-cor-cadastrar me-2">
                            {pendente ? 'Cadastrando...' : 'Cadastrar'}
                        </button>
                        <Link to="/funcionarios" className="ph-btn-forms ph-btn-forms-cor-cancelar text-decoration-none">
                            Voltar
                        </Link>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default MainCadastrarFornecedor;
