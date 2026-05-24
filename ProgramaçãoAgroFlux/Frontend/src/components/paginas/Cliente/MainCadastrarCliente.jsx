import axios from "axios";
import { useState, useActionState } from "react";
import { Link } from "react-router";

function MainCadastrarCliente() {

    const [nomeRazaoSocial, setnomeRazaoSocial] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [tipoPessoa, setTipoPessoa] = useState('JURIDICA');
    const [cnpj, setCnpj] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [situacao, setSituacao] = useState('ATIVO');
    const [numeroTelefone, setNumeroTelefone] = useState('');
    const [tipoTelefone, setTipoTelefone] = useState('');
    const [principal, setPrincipal] = useState('SIM');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');

    const urlViaCep = `https://viacep.com.br/ws/${cep}/json/`;

    const buscarDadosCep = async() => {
        try {
            const resposta = await fetch(urlViaCep);
            const dadosCep = await resposta.json();

            if (dadosCep.erro) {
                return;
            }

            setLogradouro(dadosCep.logradouro);
            setBairro(dadosCep.bairro);
            setCidade(dadosCep.localidade);
            setEstado(dadosCep.estado);
        }
        catch (erro) {
            console.log(erro);
        }
    }

    const [estadoCadastro, acaoCadastro, pendente] = useActionState(

        async (estadoAnterior, formData) => {
            const cliente = {
                nomeRazaoSocial,
                nomeFantasia,
                tipoPessoa,
                cnpj,
                cpf,
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
            }

            try {
                const response = await axios.post('http://localhost:3001/cadastrar-cliente', cliente);

                if (response.status === 201) {
                    alert('Cliente cadastrado com sucesso!');

                    setnomeRazaoSocial('');
                    setNomeFantasia('');
                    setTipoPessoa('JURIDICA');
                    setCnpj('');
                    setCpf('');
                    setEmail('');
                    setSituacao('ATIVO');
                    setNumeroTelefone('');
                    setTipoTelefone('');
                    setPrincipal('SIM');
                    setLogradouro('');
                    setNumero('');
                    setBairro('');
                    setCidade('');
                    setEstado('');
                    setCep('');
                } else {
                    console.log('Erro no servidor!');
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
                    <h1 className="h5 mt-3">Cadastrar Cliente</h1>
                </div>

                <div className="col-md-12 col-lg-12 ph-cor-fundo-branco p-4 rounded-3 shadow-lg">
                    <form action={acaoCadastro} className="row g-3 text-black">

                        <h6 className="fw-bold mb-0">Principal</h6>
                        <div className="col-md-6">
                            <label htmlFor="razao_social" className="form-label small mb-1">Nome/Razão Social</label>
                            <input value={nomeRazaoSocial} onChange={(e) => setnomeRazaoSocial(e.target.value)} type="text" className="form-control ph-input" id="razao_social" name="razao_social" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="nome_fantasia" className="form-label small mb-1">Nome Fantasia</label>
                            <input value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)} type="text" className="form-control ph-input" id="nome_fantasia" name="nome_fantasia" />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="tipo" className="form-label small mb-1">Tipo</label>
                            <select value={tipoPessoa} onChange={(e) => {setTipoPessoa(e.target.value); setCnpj(''); setCpf(''); }} type="text" className="form-select ph-input" id="tipo" name="tipo">
                                <option value="FISICA">Fisíca</option>
                                <option value="JURIDICA">Jurídica</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <label htmlFor="cnpj" className="form-label small mb-1">CNPJ</label>
                            <input value={cnpj} onChange={(e) => setCnpj(e.target.value)} type="text" className="form-control ph-input" id="cnpj" name="cnpj" disabled={tipoPessoa === 'FISICA'} />
                        </div>
                        <div className="col-3">
                            <label htmlFor="cpf" className="form-label small mb-1">CPF</label>
                            <input value={cpf} onChange={(e) => setCpf(e.target.value)} type="text" className="form-control ph-input" id="cpf" name="cpf" disabled={tipoPessoa === 'JURIDICA'}/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="email" className="form-label small mb-1">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control ph-input" id="email" name="email" required/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="email" className="form-label small mb-1">Situação</label>
                            <select value={situacao} onChange={(e) => setSituacao(e.target.value)} type="email" className="form-select ph-input" id="email" name="email"> 
                                <option value="ATIVO">Ativo</option>
                                <option value="INATIVO">Inativo</option>
                            </select>
                        </div>

                        <h6 className="fw-bold mb-0">Telefone</h6>
                        <div className="col-4">
                            <label htmlFor="numero_telefone" className="form-label small mb-1">Número de telefone</label>
                            <input value={numeroTelefone} onChange={(e) => setNumeroTelefone(e.target.value)} type="text" className="form-control ph-input" id="numero_telefone" name="numero_telefone" required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="tipo_telefone" className="form-label small mb-1">Tipo</label>
                            <input value={tipoTelefone} onChange={(e) => setTipoTelefone(e.target.value)} type="text" className="form-control ph-input" id="tipo_telefone" name="tipo_telefone" required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="principal" className="form-label small mb-1">Princípal</label>
                            <select value={principal} onChange={(e) => setPrincipal(e.target.value)} type="text" className="form-select ph-input" id="principal" name="principal" required >
                                <option value="SIM">Sim</option>
                                <option value="NAO">Não</option>
                            </select>
                        </div>

                        <h6 className="fw-bold mb-0">Endereço</h6>
                        <div className="col-md-6">
                            <label htmlFor="endereco" className="form-label small mb-1">Rua</label>
                            <input value={logradouro} onChange={(e) => setLogradouro(e.target.value)} type="text" className="form-control ph-input" id="endereco" name="endereco" required/>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="endereco" className="form-label small mb-1">Número</label>
                            <input value={numero} onChange={(e) => setNumero(e.target.value)} type="text" className="form-control ph-input" id="endereco" name="endereco" required/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="bairro" className="form-label small mb-1">Bairro</label>
                            <input value={bairro} onChange={(e) => setBairro(e.target.value)} type="text" className="form-control ph-input" id="bairro" name="bairro" required/>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="cidade" className="form-label small mb-1">Cidade</label>
                            <input value={cidade} onChange={(e) => setCidade(e.target.value)} type="text" className="form-control ph-input" id="cidade" name="cidade" required/>
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="estado" className="form-label small mb-1">Estado</label>
                            <input value={estado} onChange={(e) => setEstado(e.target.value)} type="text" className="form-control ph-input" id="estado" name="estado" required/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="cep" className="form-label small mb-1">CEP</label>
                            <input value={cep} onBlur={(e) => buscarDadosCep(e.target.value)} onChange={(e) => setCep(e.target.value)} type="text" className="form-control ph-input" id="cep" name="cep" required/>
                        </div>

                        <div className="col-12">
                            <button disabled={pendente} type="submit" className="ph-btn-forms ph-btn-forms-cor-cadastrar mt-3">{pendente ? 'Cadastrando...' : 'Cadastrar'}</button>
                            <Link to="/clientes" type="submit" className="ph-btn-forms ph-btn-forms-cor-cancelar mt-3 ms-2">Voltar</Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}

export default MainCadastrarCliente;