import { Link, useParams } from "react-router";
import { useState, useActionState, useEffect } from "react";
function MainEditarFuncionario() {

    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [situacao, setSituacao] = useState('ATIVO');
    const [endereco, setEndereco] = useState('');

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

    const [estadoAtualizar, acaoAtualizar, pendente]
        = useActionState(
            async (estadoAnterior, formData) => {
                let dadosFuncionario = JSON.stringify(
                    Object.fromEntries(formData.entries()));
                // Simula uma espera em segundos
                await new Promise((resolve) => setTimeout(
                    resolve, 2000
                ));
                console.log(dadosFuncionario);
                try {
                    let resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                        method: 'POST',
                        body: dadosFuncionario,
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
                            setNome('');
                            setSobrenome('');
                            setSituacao('ATIVO');
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
     async function getDadosFuncionario(){
        let resposta = await 
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        let dadosFuncionario = await resposta.json();
        console.log(dadosFuncionario);
        setNome(dadosFuncionario.name);
        setSobrenome(dadosFuncionario.username);
        setEmail(dadosFuncionario.email);
        setEndereco(dadosFuncionario.address.street);
        setCidade(dadosFuncionario.address.city);
        setEstado(dadosFuncionario.address.suite);
        setSituacao(dadosFuncionario.situacao || 'ATIVO');
    
     }
     getDadosFuncionario();

     }, [id] );

    return (
        <main className="ph-main-corpo px-md-4 ph-bg-color">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 text-black">
                <h1 className="h5 mt-3">Editar Funcionário: {id}</h1>
            </div>

            <div className="col-md-12 col-lg-12 ph-cor-fundo-branco p-4 rounded-3 shadow-lg mb-5">
                <form action={acaoAtualizar} className="row g-3 text-black">
                    <h6 className="fw-bold mb-0">Principal</h6>
                    <div className="col-md-6">
                        <label htmlFor="nome" className="form-label small mb-1">Nome</label>
                        <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" className="form-control ph-input" id="nome" name="nome" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="sobrenome" className="form-label small mb-1">Sobrenome</label>
                        <input value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} type="text" className="form-control ph-input" id="sobrenome" name="sobrenome" required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="email" className="form-label small mb-1">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control ph-input" id="email" name="email" required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="cidade" className="form-label small mb-1">Cidade</label>
                        <input value={cidade} onChange={(e) => setCidade(e.target.value)} type="text" className="form-control ph-input" id="cidade" name="cidade" required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="estado" className="form-label small mb-1">Estado</label>
                        <input value={estado} onChange={(e) => setEstado(e.target.value)} type="text" className="form-control ph-input" id="estado" name="estado" required />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="cep" className="form-label small mb-1">CEP</label>
                        <input value={cep} onBlur={(e) => buscarDadosCep(e.target.value)} onChange={(e) => setCep(e.target.value)} type="text" className="form-control ph-input" id="cep" name="cep" required />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="situacao" className="form-label small mb-1">Situação</label>
                        <select value={situacao} onChange={(e) => setSituacao(e.target.value)} className="form-select ph-input" id="situacao" name="situacao">
                            <option value="ATIVO">ATIVO</option>
                            <option value="INATIVO">INATIVO</option>
                        </select>
                    </div>

                    <h6 className="fw-bold mb-0 mt-4">Endereço</h6>
                    <div className="col-12">
                        <label htmlFor="endereco" className="form-label small mb-1">Endereço</label>
                        <input value={endereco} onChange={(e) => setEndereco(e.target.value)} type="text" className="form-control ph-input" id="endereco" name="endereco" required />
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
