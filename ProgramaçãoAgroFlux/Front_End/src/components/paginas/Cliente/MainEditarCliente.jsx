import axios from "axios";
import { useParams, Link, useNavigate } from "react-router";
import { useState, useEffect, useActionState } from "react";

function MainEditarCliente() {
    const { id } = useParams();
    const [razaoSocial, setRazaoSocial] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [tipoPessoa, setTipoPessoa] = useState('juridica');
    const [cnpj, setCnpj] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [situacao, setSituacao] = useState('ativo');
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
            setEstado(dadosCep.uf);
        }
        catch (erro) {
            console.log(erro);
        }
    }

    const [estadoAtualizar, acaoAtualizar, pendente] = useActionState(
        async (estadoAnterior, formData) => {
            //let dadosCliente = JSON.stringify(Object.fromEntries(formData.entries()));
            // Simula uma espera em segundos
            //await new Promise((resolve) => setTimeout(resolve, 2000));

            if (!razaoSocial || !nomeFantasia || !email || !telefone || !tipoTelefone || !principal || !logradouro || !numero || !bairro || !cidade || !estado || !cep){
                alert('Todos os campos devem ser preenchidos');
                return;
            }

            const cliente = {
                razaoSocial,
                nomeFantasia,
                tipoPessoa,
                cnpj,
                cpf,
                email,
                situacao,
                telefone,
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
                const response = await axios.put(`http://localhost:3001/editar-cliente/${id}`, cliente);

                console.log(response)

                if (response.status === 200) {
                    alert('Atualizado com sucesso');

                    navigate('/clientes')
                    
                } else {
                    console.log('Resposta do servidor erro!');
                }
            } catch (erro) {
                console.log(erro);
            }
        }
    );

    useEffect(() => {
        const buscarDadosCliente = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/listar-cliente/${id}`);

                console.log(response)

                setRazaoSocial(response.data.nome_razao_social);
                setNomeFantasia(response.data.nome_fantasia);
                setTipoPessoa(response.data.tipo_pessoa);
                setCnpj(response.data.cnpj);
                setCpf(response.data.cpf);
                setEmail(response.data.email);
                setSituacao(response.data.situacao);
                setTelefone(response.data.telefone);
                setTipoTelefone(response.data.tipo);
                setPrincipal(response.data.principal);
                setLogradouro(response.data.logradouro);
                setNumero(response.data.numero);
                setBairro(response.data.bairro);
                setCidade(response.data.cidade);
                setEstado(response.data.estado);
                setCep(response.data.cep);
            }
            catch (erro) {
                console.log(erro);
            }
        }
        buscarDadosCliente();
    }, [id]);

    return (
        <>
            <main className="ph-main-corpo px-md-4 ph-bg-color">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 text-black">
                    <h1 className="h5 mt-3">Editar Cliente</h1>
                </div>

                <div className="col-md-12 col-lg-12 ph-cor-fundo-branco p-4 rounded-3 shadow-lg">
                    <form action={acaoAtualizar} className="row g-3 text-black">

                        <h6 className="fw-bold mb-0">Principal</h6>
                        <div className="col-md-6">
                            <label htmlFor="razao_social" className="form-label small mb-1">Nome/Razão Social</label>
                            <input value={razaoSocial} onChange={(e) => setRazaoSocial(e.target.value)} type="text" className="form-control ph-input" id="razao_social" name="razao_social" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="nome_fantasia" className="form-label small mb-1">Nome Fantasia</label>
                            <input value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)} type="text" className="form-control ph-input" id="nome_fantasia" name="nome_fantasia" />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="tipo" className="form-label small mb-1">Tipo</label>
                            <select value={tipoPessoa} onChange={(e) => setTipoPessoa(e.target.value)} className="form-select ph-input" id="tipo" name="tipo">
                                <option value="fisica">Fisíca</option>
                                <option value="juridica">Jurídica</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <label htmlFor="cnpj" className="form-label small mb-1">CNPJ</label>
                            <input value={cnpj} onChange={(e) => setCnpj(e.target.value)} type="text" className="form-control ph-input" id="cnpj" name="cnpj" required />
                        </div>
                        <div className="col-3">
                            <label htmlFor="cpf" className="form-label small mb-1">CPF</label>
                            <input value={cpf} onChange={(e) => setCpf(e.target.value)} type="text" className="form-control ph-input" id="cpf" name="cpf" required disabled />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="email" className="form-label small mb-1">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control ph-input" id="email" name="email" required/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="situacao" className="form-label small mb-1">Situação</label>
                            <select value={situacao} onChange={(e) => setSituacao(e.target.value)} className="form-select ph-input" id="situacao" name="situacao">
                                <option value="ativo">Ativo</option>
                                <option value="inativo">Inativo</option>
                            </select>
                        </div>

                        <h6 className="fw-bold mb-0">Telefone</h6>
                        <div className="col-4">
                            <label htmlFor="telefone" className="form-label small mb-1">Número de telefone</label>
                            <input value={telefone} onChange={(e) => setTelefone(e.target.value)} type="text" className="form-control ph-input" id="telefone" name="telefone" required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="tipo_telefone" className="form-label small mb-1">Tipo</label>
                            <input value={tipoTelefone} onChange={(e) => setTipoTelefone(e.target.value)} type="text" className="form-control ph-input" id="tipo_telefone" name="tipo_telefone" required/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="principal" className="form-label small mb-1">Princípal</label>
                            <input value={principal} onChange={(e) => setPrincipal(e.target.value)} type="text" className="form-control ph-input" id="principal" name="principal" />
                        </div>

                        <h6 className="fw-bold mb-0">Endereço</h6>
                        <div className="col-md-6">
                            <label htmlFor="logradouro" className="form-label small mb-1">Rua</label>
                            <input value={logradouro} onChange={(e) => setLogradouro(e.target.value)} type="text" className="form-control ph-input" id="logradouro" name="logradouro" required/>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="numero" className="form-label small mb-1">Número</label>
                            <input value={numero} onChange={(e) => setNumero(e.target.value)} type="text" className="form-control ph-input" id="numero" name="numero" required/>
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
                            <input value={cep} onBlur={buscarDadosCep} onChange={(e) => setCep(e.target.value)} type="text" className="form-control ph-input" id="cep" name="cep" required/>
                        </div>

                        <div className="col-12">
                            <button disabled={pendente} type="submit" className="ph-btn-forms ph-btn-forms-cor-cadastrar mt-3">{pendente ? 'Atualizando...' : 'Atualizar'}</button>
                            <Link to="/clientes" type="submit" className="ph-btn-forms ph-btn-forms-cor-cancelar mt-3 ms-2">Voltar</Link>
                        </div>
                    </form>
                </div>
            </main >
        </>
    );
}

export default MainEditarCliente;
