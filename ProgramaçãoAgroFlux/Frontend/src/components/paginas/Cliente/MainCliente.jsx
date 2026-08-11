import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router";

const MainCliente = () => {
    const [clientes, setClientes] = useState([]);
    const [clienteSelecionado, setClienteSelecionado] = useState(null);
    const [pesquisa, setPesquisa] = useState('');

    const regra = sessionStorage.getItem("regra");

    useEffect(() => {
        const buscarDadosCliente = async () => {
            try {
                const response = await axios.get("http://localhost:3001/listar-clientes");

                const clientesOrdenados = response.data.sort((a, b) =>
                    a.nome_fantasia.localeCompare(b.nome_fantasia)
                );

                setClientes(clientesOrdenados);
            } catch (erro) {
                console.log(erro);
            }
        }
        buscarDadosCliente();
    }, []);

    const pesquisarCliente = async (texto) => {
        setPesquisa(texto);

        try {
            if (texto.trim() === '') {
                const response = await axios.get('http://localhost:3001/listar-clientes');
                const clientesOrdenados = response.data.sort((a, b) =>
                    a.nome_fantasia.localeCompare(b.nome_fantasia)
                );
                setClientes(clientesOrdenados);
                return;
            }

            const response = await axios.get(`http://localhost:3001/pesquisar-cliente?nome=${texto}`);
            setClientes(response.data);
        } catch (erro) {
            console.log(erro);
        }
    };

    const deletarCliente = async (id) => {

        const confirmar = confirm("Deseja realmente excluir?");

        if (!confirmar) return;

        try {
            const resposta = await axios.delete(`http://localhost:3001/deletar-cliente/${id}`);

            if (resposta.status === 200) {
                setClientes(clientes.filter(c => c.id !== id));
                alert("Cliente excluído com sucesso!");
            } else {
                alert("Erro ao excluir o cliente.");
            }
        } catch (erro) {
            console.error(erro);
        }
    }

    const tipoPessoaTexto = clienteSelecionado?.tipo_pessoa === 'JURIDICA' ? 'Pessoa Jurídica' : 'Pessoa Física';

    return (
        <>
            <main className="ph-main-corpo px-md-4 ph-bg-color">
                <div className="d-flex col-md-9 col-lg-12 justify-content-between align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h5 mt-3">Clientes</h1>
                    <Link to={"/cadastrar-cliente"} type="button" className="ph-btn fw-semibold bm-cor-botao ph-cor-branco mt-0 rounded-3"><i className="fi fi-br-plus me-3"></i>Novo Cliente</Link>
                </div>

                <div className="col-md-12 col-lg-12 border rounded-3 overflow-hidden">
                    <div className="p-3 ph-bg-search">
                        <input 
                            type="text" 
                            placeholder="Pesquisar cliente por nome..." 
                            className="form-control ph-input" 
                            value={pesquisa}
                            onChange={(e) => pesquisarCliente(e.target.value)}
                        />
                    </div>
                    <div className="ph-tabela-responsiva">
                        <table className="table table-striped mb-0">
                        <thead className="">
                            <tr className="ph-cabecalho-cor-table">
                                <th scope="col">ID</th>
                                <th scope="col">Nome Fantasia</th>
                                <th scope="col">Email</th>
                                <th scope="col">Data de Cadastro</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                clientes.map((cliente) => (
                                    <tr key={cliente.id} className="ph-corpo-cor-table">
                                        <td>{cliente.id}</td>
                                        <td>{cliente.nome_fantasia}</td>
                                        <td>{cliente.email}</td>
                                        <td>{cliente.data_cadastro}</td>
                                        <td>
                                            <button onClick={() => setClienteSelecionado(cliente)} className="border border-0 bg-transparent me-2" title="Visualizar"><i className="fi fi-rr-eye" style={{color: '#0d6efd'}}></i></button>
                                            {regra === 'Administrador' &&(
                                                <Link to={`/editar-cliente/${cliente.id}`} className="text-decoration-none"><i className="fi fi-rr-pencil ph-cor-lapis"></i></Link>
                                            )}
                                            {regra === 'Administrador' &&(
                                                <button onClick={() => deletarCliente(cliente.id)} className="border border-0 bg-transparent"><i className="fi fi-rr-trash ph-cor-lixo"></i></button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    </div>
                </div>

                {/* Modal Card com Detalhes do Cliente */}
                {clienteSelecionado && (
                    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050}}>
                        <div className="card shadow" style={{width: '90%', maxWidth: '650px', maxHeight: '90vh', overflowY: 'auto'}}>
                            <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
                                <h5 className="mb-0">Detalhes do Cliente</h5>
                                <button onClick={() => setClienteSelecionado(null)} className="btn-close btn-close-white" style={{cursor: 'pointer'}}></button>
                            </div>

                            <div className="card-body">
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <p><strong>ID:</strong> {clienteSelecionado.id}</p>
                                        <p><strong>Nome/Razão Social:</strong> {clienteSelecionado.nome_razao_social}</p>
                                        <p><strong>Nome Fantasia:</strong> {clienteSelecionado.nome_fantasia}</p>
                                        <p><strong>Tipo Pessoa:</strong> {tipoPessoaTexto}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p><strong>CNPJ:</strong> {clienteSelecionado.cnpj || 'N/A'}</p>
                                        <p><strong>CPF:</strong> {clienteSelecionado.cpf || 'N/A'}</p>
                                        <p><strong>Email:</strong> {clienteSelecionado.email}</p>
                                        <p><strong>Situação:</strong> {clienteSelecionado.situacao}</p>
                                    </div>
                                </div>

                                <h6 className="fw-bold mt-4 mb-3">Telefone</h6>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <p><strong>Número:</strong> {clienteSelecionado.numero_telefone}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p><strong>Tipo:</strong> {clienteSelecionado.tipo_telefone}</p>
                                    </div>
                                </div>

                                <h6 className="fw-bold mt-4 mb-3">Endereço</h6>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <p><strong>Rua:</strong> {clienteSelecionado.logradouro}</p>
                                        <p><strong>Número:</strong> {clienteSelecionado.numero}</p>
                                        <p><strong>Bairro:</strong> {clienteSelecionado.bairro}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p><strong>Cidade:</strong> {clienteSelecionado.cidade}</p>
                                        <p><strong>Estado:</strong> {clienteSelecionado.estado}</p>
                                        <p><strong>CEP:</strong> {clienteSelecionado.cep}</p>
                                    </div>
                                </div>

                                <p className="text-secondary small mt-4"><strong>Data de Cadastro:</strong> {clienteSelecionado.data_cadastro}</p>
                            </div>

                        </div>
                    </div>
                )}
            </main>
        </>
    );
}

export default MainCliente;
