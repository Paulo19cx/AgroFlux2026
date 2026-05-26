import { useState, useActionState } from "react";
import { Link, useNavigate } from "react-router";
import axios from 'axios';

function MainCadastrarFuncionario() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [cargo, setCargo] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [dataContratacao, setDataContratacao] = useState('');
    const [salarioInicial, setSalarioInicial] = useState('');
    const [salarioAtual, setSalarioAtual] = useState('');
    const [regra, setRegra] = useState('');
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

            if (!nome || !cpf || !dataNascimento || !email || !numeroTelefone || !cargo || !dataContratacao || !salarioInicial || !regra || !salarioAtual || !situacao || !senha || !logradouro || !numero || !cep || !bairro || !cidade || !estado) {
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
                regra,
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
                const response = await axios.post('http://localhost:3001/cadastrar-funcionario', funcionario)
                    

                if (response.status === 201) {
                    alert('Funcionário cadastrado com sucesso!');
                    
                    // setNome('');
                    // setCpf('');
                    // setCargo('');
                    // setEmail('');
                    // setSenha('');
                    // setDataNascimento('');
                    // setDataAdmissao('');
                    // setSalarioInicial('');
                    // setSalarioAtual('');
                    // setFoto('');
                    // setSituacao('')
                    // setTelefone('');
                    // setTipoTelefone('');
                    // setPrincipal('');
                    // setLogradouro('');
                    // setNumero('');
                    // setBairro('');
                    // setCidade('');
                    // setEstado('');
                    // setCep('');
                } else {
                    alert('Erro ao cadastrar funcionário!');
                }
            } catch (erro) {
                console.log(erro);
            }
        }
    );

    return (
        <main className="ph-main-corpo px-md-4 ph-bg-color">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 text-black">
                <h1 className="h5 mt-3">Cadastrar Funcionário</h1>
            </div>

            <div className="col-md-12 col-lg-12 ph-cor-fundo-branco p-4 rounded-3 shadow-lg mb-5">
                <form action={acaoCadastro} className="row g-3 text-black">
                    <h6 className="fw-bold mb-0">Principal</h6>
                    <div className="col-md-5">
                        <label htmlFor="nome" className="form-label small mb-1">Nome Completo</label>
                        <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" className="form-control ph-input" id="nome" name="nome"  />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="cpf" className="form-label small mb-1">CPF</label>
                        <input value={cpf} onChange={(e) => setCpf(e.target.value)} type="text" className="form-control ph-input" id="cpf" name="cpf"  />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="cargo" className="form-label small mb-1">Cargo</label>
                        <input value={cargo} onChange={(e) => setCargo(e.target.value)} type="text" className="form-control ph-input" id="cargo" name="cargo" />
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="email" className="form-label small mb-1">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control ph-input" id="email" name="email"  />
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
                        <label htmlFor="dataContratacao" className="form-label small mb-1">Data de Contratação</label>
                        <input value={dataContratacao} onChange={(e) => setDataContratacao(e.target.value)} type="date" className="form-control ph-input" id="dataContratacao" name="dataContratacao" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="salario" className="form-label small mb-1">Salário Inicial</label>
                        <input value={salarioInicial} onChange={(e) => setSalarioInicial(e.target.value)} type="text" className="form-control ph-input" id="salario" name="salario" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="salario" className="form-label small mb-1">Salário Atual</label>
                        <input value={salarioAtual} onChange={(e) => setSalarioAtual(e.target.value)} type="text" className="form-control ph-input" id="salario" name="salario" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="regra" className="form-label small mb-1">Regra</label>
                        <select value={regra} onChange={(e) => setRegra(e.target.value)} className="form-select ph-input" id="regra" name="regra">
                            <option value="">Selecione</option>
                            <option value="ADMINISTRADOR">Administrador</option>
                            <option value="USUARIO">Usuário</option>
                            <option value="LEITOR">Leitor</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="situacao" className="form-label small mb-1">Situação</label>
                        <select value={situacao} onChange={(e) => setSituacao(e.target.value)} className="form-select ph-input" id="situacao" name="situacao">
                            <option value="ATIVO">Ativo</option>
                            <option value="INATIVO">Inativo</option>
                        </select>
                    </div>
                    
                    <h6 className="fw-bold mb-0 mt-5">Telefone</h6>
                        <div className="col-4">
                            <label htmlFor="numeroTelefone" className="form-label small mb-1">Número de telefone</label>
                            <input value={numeroTelefone} onChange={(e) => setNumeroTelefone(e.target.value)} type="text" className="form-control ph-input" id="numeroTelefone" name="numeroTelefone"  />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="tipoTelefone" className="form-label small mb-1">Tipo</label>
                            <input value={tipoTelefone} onChange={(e) => setTipoTelefone(e.target.value)} type="text" className="form-control ph-input" id="tipoTelefone" name="tipoTelefone"  />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="principal" className="form-label small mb-1">Principal</label>
                            <select value={principal} onChange={(e) => setPrincipal(e.target.value)} className="form-select ph-input" id="principal" name="principal">
                                <option value="SIM">Sim</option>
                                <option value="NAO">Não</option>
                            </select>
                        </div>

                    <h6 className="fw-bold mb-0 mt-5">Endereço</h6>
                    <div className="col-md-6">
                        <label htmlFor="endereco" className="form-label small mb-1">Rua</label>
                        <input value={logradouro} onChange={(e) => setLogradouro(e.target.value)} type="text" className="form-control ph-input" id="endereco" name="endereco" />
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

                    <h6 className="fw-bold mb-0 mt-4">Outros</h6>
                    

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

export default MainCadastrarFuncionario;
