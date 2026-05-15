import { useState, useActionState } from "react";
import { Link } from "react-router";

function MainCadastrarCliente() {

    const [razaoSocial, setRazaoSocial] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [tipo, setTipo] = useState('juridica')
    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');

    let urlViaCep = `https://viacep.com.br/ws/${cep}/json/`;

    async function buscarDadosCep() {
        try {
            const resposta = await fetch(urlViaCep);
            const dadosCep = await resposta.json();

            if (dadosCep.erro) {
                return;
            }

            setEndereco(dadosCep.logradouro);
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
                        setRazaoSocial('');
                        setNomeFantasia('');
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
                    <h1 className="h5 mt-3">Cadastrar Cliente</h1>
                </div>

                <div className="col-md-12 col-lg-12 ph-cor-fundo-branco p-4 rounded-3 shadow-lg">
                    <form action={acaoCadastro} className="row g-3 text-black">
                        <h6 className="fw-bold mb-0">Principal</h6>
                        <div className="col-md-6">
                            <label htmlFor="razao_social" className="form-label small mb-1">Razão Social</label>
                            <input value={razaoSocial} onChange={(e) => setRazaoSocial(e.target.value)} type="text" className="form-control ph-input" id="razao_social" name="razao_social" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="nome_fantasia" className="form-label small mb-1">Nome Fantasia</label>
                            <input value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)} type="text" className="form-control ph-input" id="nome_fantasia" name="nome_fantasia" />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="tipo" className="form-label small mb-1">Tipo</label>
                            <select value={tipo} onChange={(e) => setTipo(e.target.value)} type="text" className="form-select ph-input" id="tipo" name="tipo">
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
                            <input value={cpf} onChange={(e) => setCpf(e.target.value)} type="text" className="form-control ph-input" id="cpf" name="cpf" required />
                        </div>
                        <div className="col-4">
                            <label htmlFor="telefone" className="form-label small mb-1">Telefone</label>
                            <input value={telefone} onChange={(e) => setTelefone(e.target.value)} type="text" className="form-control ph-input" id="telefone" name="telefone" required />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="email" className="form-label small mb-1">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control ph-input" id="email" name="email" />
                        </div>

                        <h6 className="fw-bold mb-0">Endereço</h6>
                        <div className="col-md-6">
                            <label htmlFor="endereco" className="form-label small mb-1">Rua</label>
                            <input value={endereco} onChange={(e) => setEndereco(e.target.value)} type="text" className="form-control ph-input" id="endereco" name="endereco" />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="bairro" className="form-label small mb-1">Bairro</label>
                            <input value={bairro} onChange={(e) => setBairro(e.target.value)} type="text" className="form-control ph-input" id="bairro" name="bairro" />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="cidade" className="form-label small mb-1">Cidade</label>
                            <input value={cidade} onChange={(e) => setCidade(e.target.value)} type="text" className="form-control ph-input" id="cidade" name="cidade" />
                        </div>
                        <div className="col-md-8">
                            <label htmlFor="estado" className="form-label small mb-1">Estado</label>
                            <input value={estado} onChange={(e) => setEstado(e.target.value)} type="text" className="form-control ph-input" id="estado" name="estado" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="cep" className="form-label small mb-1">CEP</label>
                            <input value={cep} onBlur={(e) => buscarDadosCep(e.target.value)} onChange={(e) => setCep(e.target.value)} type="text" className="form-control ph-input" id="cep" name="cep" />
                        </div>

                        <div className="col-12">
                            <button disabled={pendente} type="submit" className="ph-btn-forms ph-btn-forms-cor-cadastrar mt-3">{pendente ? 'Cadastrando...' : 'Cadastrar'}</button>
                            <button disabled={pendente} type="submit" className="ph-btn-forms ph-btn-forms-cor-cadastrar mt-3 ms-2">{pendente ? 'Cadastrando...' : 'Cadastrar e permanecer'}</button>
                            <Link to="/clientes" type="submit" className="ph-btn-forms ph-btn-forms-cor-cancelar mt-3 ms-2">Cancelar</Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}

export default MainCadastrarCliente;