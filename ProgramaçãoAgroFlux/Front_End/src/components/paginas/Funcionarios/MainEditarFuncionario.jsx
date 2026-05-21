import { useState, useActionState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router";
import axios from 'axios';

function MainEditarFuncionario() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [cargo, setCargo] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [dataContratacao, setDataContratacao] = useState('');
    const [salarioInicial, setSalarioInicial] = useState('');
    const [salarioAtual, setSalarioAtual] = useState('');
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
        async function getDadosFuncionario() {
            try {
                const response = await axios.get(`http://localhost:3001/listar-funcionario/${id}`);
                const dados = response.data;

                setNome(dados.nome);
                setCpf(dados.cpf);
                setCargo(dados.cargo);
                setEmail(dados.email);
                setDataNascimento(dados.data_nascimento ? dados.data_nascimento.split('/').reverse().join('-') : '');
                setDataContratacao(dados.data_contratacao ? dados.data_contratacao.split(' ')[0].split('/').reverse().join('-') : '');
                setSalarioInicial(dados.salario_inicial);
                setSalarioAtual(dados.salario_atual);
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
        getDadosFuncionario();
    }, [id]);

    const [estadoAtualizar, acaoAtualizar, pendente] = useActionState(
        async (estadoAnterior, formData) => {
            if (!nome || !cpf || !dataNascimento || !email || !numeroTelefone || !cargo || !dataContratacao || !salarioInicial || !situacao || !logradouro || !numero || !cep || !bairro || !cidade || !estado) {
                alert('Todos os campos devem ser preenchidos');
                return;
            }

            const funcionario = {
                nome,
                cpf, 
                cargo,
                email,
                senha,
                dataNascimento,
                dataContratacao,
                salarioInicial,
                salarioAtual,
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
                const response = await axios.put(`http://localhost:3001/editar-funcionario/${id}`, funcionario);

                if (response.status === 200) {
                    alert('Funcionário atualizado com sucesso!');
                    navigate('/funcionarios');
                } else {
                    alert('Erro ao atualizar funcionário!');
                }
            } catch (erro) {
                console.log(erro);
            }
        }
    );

    return (
        <main className="ph-main-corpo px-md-4 ph-bg-color">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 text-black">
                <h1 className="h5 mt-3">Editar Funcionário</h1>
            </div>

            <div className="col-md-12 col-lg-12 ph-cor-fundo-branco p-4 rounded-3 shadow-lg mb-5">
                <form action={acaoAtualizar} className="row g-3 text-black">
                    <h6 className="fw-bold mb-0">Principal</h6>
                    <div className="col-md-5">
                        <label htmlFor="nome" className="form-label small mb-1">Nome Completo</label>
                        <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" className="form-control ph-input" id="nome" name="nome" required />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="cpf" className="form-label small mb-1">CPF</label>
                        <input value={cpf} onChange={(e) => setCpf(e.target.value)} type="text" className="form-control ph-input" id="cpf" name="cpf" required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="cargo" className="form-label small mb-1">Cargo</label>
                        <input value={cargo} onChange={(e) => setCargo(e.target.value)} type="text" className="form-control ph-input" id="cargo" name="cargo" />
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="email" className="form-label small mb-1">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control ph-input" id="email" name="email" required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="senha" className="form-label small mb-1">Senha de login</label>
                        <input value={senha} onChange={(e) => setSenha(e.target.value)} type="text" className="form-control ph-input" id="senha" name="senha" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="dataNascimento" className="form-label small mb-1">Data de Nascimento</label>
                        <input value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} type="date" className="form-control ph-input" id="dataNascimento" name="dataNascimento" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="dataContratacao" className="form-label small mb-1">Data de Admissão</label>
                        <input value={dataContratacao} onChange={(e) => setDataContratacao(e.target.value)} type="date" className="form-control ph-input" id="dataContratacao" name="dataContratacao" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="salarioInicial" className="form-label small mb-1">Salário Inicial</label>
                        <input value={salarioInicial} onChange={(e) => setSalarioInicial(e.target.value)} type="text" className="form-control ph-input" id="salarioInicial" name="salarioInicial" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="salarioAtual" className="form-label small mb-1">Salário Atual</label>
                        <input value={salarioAtual} onChange={(e) => setSalarioAtual(e.target.value)} type="text" className="form-control ph-input" id="salarioAtual" name="salarioAtual" />
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
                        <Link to="/funcionarios" className="ph-btn-forms ph-btn-forms-cor-cancelar text-decoration-none">
                            Voltar
                        </Link>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default MainEditarFuncionario;
