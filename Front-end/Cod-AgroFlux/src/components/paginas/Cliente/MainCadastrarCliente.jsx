import { useState, useActionState } from "react";

function MainCadastrarCliente() {

    const [razaoSocial, setRazaoSocial] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [numero, setNumero] = useState('');
    const [email, setEmail] = useState('');
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
            <main className="ph-main-shell px-md-4 ph-bg-color">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 text-black">
                    <h1 className="h2">Cadastrar Cliente</h1>
                </div>

                <form action={acaoCadastro} className="row g-3 text-black">
                    <div className="col-md-6">
                        <label htmlFor="razao_social" className="form-label">Razão Social</label>
                        <input value={razaoSocial} onChange={(e) => setRazaoSocial(e.target.value)} type="text" className="form-control" id="razao_social" name="razao_social" required/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="nome_fantasia" className="form-label">Nome Fantasia</label>
                        <input value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)} type="text" className="form-control" id="nome_fantasia" name="nome_fantasia"/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="cnpj" className="form-label">CNPJ</label>
                        <input value={cnpj} onChange={(e) => setCnpj(e.target.value)} type="text" className="form-control" id="cnpj" name="cnpj" required/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="telefone" className="form-label">Telefone</label>
                        <input value={numero} onChange={(e) => setNumero(e.target.value)} type="text" className="form-control" id="telefone" name="telefone" required/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" name="email"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="endereco" className="form-label">Endereço</label>
                        <input value={endereco} onChange={(e) => setEndereco(e.target.value)} type="text" className="form-control" id="endereco" name="endereco"/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="bairro" className="form-label">Bairro</label>
                        <input value={bairro} onChange={(e) => setBairro(e.target.value)} type="text" className="form-control" id="bairro" name="bairro"/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="cidade" className="form-label">Cidade</label>
                        <input value={cidade} onChange={(e) => setCidade(e.target.value)} type="text" className="form-control" id="cidade" name="cidade"/>
                    </div>
                    <div className="col-md-8">
                        <label htmlFor="estado" className="form-label">Estado</label>
                        <input value={estado} onChange={(e) => setEstado(e.target.value)} type="text" className="form-control" id="estado" name="estado"/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="cep" className="form-label">CEP</label>
                        <input value={cep} onBlur={(e) => buscarDadosCep(e.target.value)} onChange={(e) => setCep(e.target.value)} type="text" className="form-control" id="cep" name="cep"/>
                    </div>
    
                    <div className="col-12">
                        <button disabled={pendente} type="submit" className="btn btn-primary">{pendente ? 'Cadastrando...' : 'Cadastrar'}</button>
                    </div>
                </form>
            </main>
        </>
    );
}

export default MainCadastrarCliente;