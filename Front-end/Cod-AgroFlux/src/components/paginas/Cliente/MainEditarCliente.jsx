import { useParams } from "react-router";
import { useState, useActionState, useEffect } from "react";

function MainEditarCliente() {

    const { id } = useParams();
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

    let urlViaCep = `https://viacep.com.br/ws/${cep}/json/ `;

    async function buscarDadosCep() {
        try {
            let resposta = await fetch(urlViaCep);
            let dadosCep = await resposta.json();
            setEndereco(dadosCep.logradouro);
            console.log(dadosCep);
        }
        catch (erro) {
            console.log(erro);
        }
    }

    const [estadoAtualizar, acaoAtualizar, pendente] = useActionState(
        
            async (estadoAnterior, formData) => {
                let dadosCliente = JSON.stringify(
                    Object.fromEntries(formData.entries()));
                // Simula uma espera em segundos
                await new Promise((resolve) => setTimeout(
                    resolve, 2000
                ));
                console.log(dadosCliente);
                try {
                    let resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                        method: 'POST',
                        body: dadosCliente,
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                    })
                    console.log(resposta);
                    console.log(resposta.status);
                    console.log(resposta.ok);

                    if (resposta.status === 201) {
                        console.log('Resposta do servidor ok!');
                        if (resposta.ok === true) {
                            alert('Cadastrado com sucesso');
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
        );

     useEffect( () => {
     async function getDadosCliente(){
        let resposta = await 
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        let dadosCliente = await resposta.json();
        console.log(dadosCliente);
        setRazaoSocial(dadosCliente.name);
        setNomeFantasia(dadosCliente.username);
        setCnpj(dadosCliente.cnpj);
        setNumero(dadosCliente.numero);
        setEmail(dadosCliente.email);
        setEndereco(dadosCliente.address.street);
        setBairro(dadosCliente.bairro);
        setCidade(dadosCliente.address.city);
        setEstado(dadosCliente.address.suite);
    
     }
     getDadosCliente();

     }, [id] );

    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 ph-bg-color">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
                >
                    <h1 className="h2">Editar Cliente: {id}</h1>
                </div>

                <form action={acaoAtualizar} className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="nome" className="form-label">Razão Social:</label>
                        <input value={razaoSocial} onChange={(e) => setRazaoSocial(e.target.value)} type="text" className="form-control" id="nome" name="nome" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="sobrenome" className="form-label">Nome Fantasia:</label>
                        <input value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)} type="text" className="form-control" id="sobrenome" name="sobrenome" required />
                    </div>
                    <div className="col-4">
                        <label htmlFor="cnpj" className="form-label">CNPJ</label>
                        <input value={cnpj} onChange={(e) => setCnpj(e.target.value)} type="text" className="form-control" id="cnpj" name="cnpj" required/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="telefone" className="form-label">Telefone</label>
                        <input value={numero} onChange={(e) => setNumero(e.target.value)} type="text" className="form-control" id="telefone" name="telefone" required/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" name="email" placeholder="Digite seu melhor email" required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="endereco" className="form-label">Endereço:</label>
                        <input value={endereco} onChange={(e) => setEndereco(e.target.value)} type="text" className="form-control" id="endereco" name="endereco" placeholder="Rua, Avenida..." required />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="bairro" className="form-label">Bairro</label>
                        <input value={bairro} onChange={(e) => setBairro(e.target.value)} type="text" className="form-control" id="bairro" name="bairro"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="cidade" className="form-label">Cidade:</label>
                        <input value={cidade} onChange={(e) => setCidade(e.target.value)} type="text" className="form-control" id="cidade" name="cidade" required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="estado" className="form-label">Estado</label>
                        <input value={estado} onChange={(e) => setEstado(e.target.value)} type="text" className="form-control" id="estado" name="estado" required />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="cep" className="form-label">Cep:</label>
                        <input value={cep} onBlur={(e) => buscarDadosCep(e.target.value)} onChange={(e) => setCep(e.target.value)} type="text" className="form-control" id="cep" name="cep" required />
                    </div>


                    <div className="col-12">
                        <button disabled={pendente} type="submit" className="btn btn-primary">
                            {pendente ? 'Atualizando...' : 'Atualizar'}
                        </button>
                    </div>
                </form>


            </main>
        </>
    );
}
export default MainEditarCliente;
