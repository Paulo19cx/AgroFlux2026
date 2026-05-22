import { useState, useActionState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router";
import axios from 'axios';

function MainEditarFornecedor() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [razaoSocial, setRazaoSocial] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [email, setEmail] = useState('');
    const [situacao, setSituacao] = useState('ATIVO');
    const [numeroTelefone, setNumeroTelefone] = useState('');
    const [tipoTelefone, setTipoTelefone] = useState('');
    const [principal, setPrincipal] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');

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

    useEffect(() => {
        async function getDadosFornecedor() {
            try {
                const response = await axios.get(`http://localhost:3001/listar-fornecedor/${id}`);
                const dados = response.data;

                setRazaoSocial(dados.razao_social);
                setNomeFantasia(dados.nome_fantasia);
                setCnpj(dados.cnpj);
                setEmail(dados.email);
                setSituacao(dados.situacao);
                setNumeroTelefone(dados.numero_telefone);
                setTipoTelefone(dados.tipo);
                setPrincipal(dados.principal);
                setLogradouro(dados.logradouro);
                setNumero(dados.numero);
                setBairro(dados.bairro);
                setCidade(dados.cidade);
                setEstado(dados.estado);
                setCep(dados.cep);
            } catch (erro) {
                console.log(erro);
            }
        }
        getDadosFornecedor();
    }, [id]);

    const [estadoAtualizar, acaoAtualizar, pendente] = useActionState(
        async (estadoAnterior, formData) => {
            if (!razaoSocial || !cnpj || !email || !numeroTelefone || !situacao || !logradouro || !numero || !cep || !bairro || !cidade || !estado) {
                alert('Todos os campos devem ser preenchidos');
                return;
            }

            const fornecedor = {
                razaoSocial,
                nomeFantasia,
                cnpj, 
                email,
                situacao,
                numeroTelefone,
                tipoTelefone,
                principal,
                logradouro,
                numero,
                bairro,
                cidade,
                estado,
                cep
            };
            
            try {
                const response = await axios.put(`http://localhost:3001/editar-fornecedor/${id}`, fornecedor);

                if (response.status === 200) {
                    alert('Fornecedor atualizado com sucesso!');
                    navigate('/fornecedores');
                } else {
                    alert('Erro ao atualizar fornecedor!');
                }
            } catch (erro) {
                console.log(erro);
            }
        }
    );

    return (
        <main className="ph-main-corpo px-md-4 ph-bg-color">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 text-black">
                <h1 className="h5 mt-3">Editar Fornecedor</h1>
            </div>

            <div className="col-md-12 col-lg-12 ph-cor-fundo-branco p-4 rounded-3 shadow-lg mb-5">
                <form action={acaoAtualizar} className="row g-3 text-black">
                    <h6 className="fw-bold mb-0">Principal</h6>
                    <div className="col-md-5">
                        <label htmlFor="razaoSocial" className="form-label small mb-1">Razão Social</label>
                        <input value={razaoSocial} onChange={(e) => setRazaoSocial(e.target.value)} type="text" className="form-control ph-input" id="razaoSocial" name="razaoSocial" required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="nomeFantasia" className="form-label small mb-1">Nome Fantasia</label>
                        <input value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)} type="text" className="form-control ph-input" id="nomeFantasia" name="nomeFantasia" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="cnpj" className="form-label small mb-1">CNPJ</label>
                        <input value={cnpj} onChange={(e) => setCnpj(e.target.value)} type="text" className="form-control ph-input" id="cnpj" name="cnpj" required />
                    </div>
                    <div className="col-md-6">
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
                    
                    <h6 className="fw-bold mb-0">Telefone</h6>
                        <div className="col-4">
                            <label htmlFor="numeroTelefone" className="form-label small mb-1">Número de telefone</label>
                            <input value={numeroTelefone} onChange={(e) => setNumeroTelefone(e.target.value)} type="text" className="form-control ph-input" id="numeroTelefone" name="numeroTelefone" required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="tipoTelefone" className="form-label small mb-1">Tipo</label>
                            <input value={tipoTelefone} onChange={(e) => setTipoTelefone(e.target.value)} type="text" className="form-control ph-input" id="tipoTelefone" name="tipoTelefone" required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="principal" className="form-label small mb-1">Principal</label>
                            <select value={principal} onChange={(e) => setPrincipal(e.target.value)} type="text" className="form-select ph-input" id="principal" name="principal" required >
                                <option value="">Selecione</option>
                                <option value="SIM">Sim</option>
                                <option value="NAO">Não</option>
                            </select>
                        </div>

                    <h6 className="fw-bold mb-0 mt-4">Endereço</h6>
                    <div className="col-md-6">
                        <label htmlFor="logradouro" className="form-label small mb-1">Rua</label>
                        <input value={logradouro} onChange={(e) => setLogradouro(e.target.value)} type="text" className="form-control ph-input" id="logradouro" name="logradouro" />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="numero" className="form-label small mb-1">Número</label>
                        <input value={numero} onChange={(e) => setNumero(e.target.value)} type="text" className="form-control ph-input" id="numero" name="numero" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="cep" className="form-label small mb-1">CEP</label>
                        <input value={cep} onBlur={buscarDadosCep} onChange={(e) => setCep(e.target.value)} type="text" className="form-control ph-input" id="cep" name="cep" />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="bairro" className="form-label small mb-1">Bairro</label>
                        <input value={bairro} onChange={(e) => setBairro(e.target.value)} type="text" className="form-control ph-input" id="bairro" name="bairro" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="cidade" className="form-label small mb-1">Cidade</label>
                        <input value={cidade} onChange={(e) => setCidade(e.target.value)} type="text" className="form-control ph-input" id="cidade" name="cidade" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="estado" className="form-label small mb-1">Estado</label>
                        <input value={estado} onChange={(e) => setEstado(e.target.value)} type="text" className="form-control ph-input" id="estado" name="estado" />
                    </div>

                    <div className="col-12 mt-4">
                        <button disabled={pendente} type="submit" className="ph-btn-forms ph-btn-forms-cor-cadastrar me-2">
                            {pendente ? 'Atualizando...' : 'Atualizar'}
                        </button>
                        <Link to="/fornecedores" className="ph-btn-forms ph-btn-forms-cor-cancelar text-decoration-none">
                            Voltar
                        </Link>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default MainEditarFornecedor;
