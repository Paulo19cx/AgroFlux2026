import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router";

const MainCliente = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const buscarDadosCliente = async () => {
            try {
                const response = await axios.get("http://localhost:3001/lis");
                
            } catch (erro) {
                console.log(erro);
            }
        }
        buscarDadosCliente();
    }, []);

    async function deletarCliente(id) {

        const confirmar = confirm("Deseja realmente excluir?");

        if (!confirmar) return;

        try {
            const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: 'DELETE'
            });

            if (resposta.ok) {
                setCliente(cliente.filter(c => c.id !== id));
                alert("Cliente excluído com sucesso!");
            } else {
                alert("Erro ao excluir o cliente.");
            }
        } catch (erro) {
            console.error(erro);
        }
    }

    return (
        <>
            <main className="ph-main-corpo px-md-4 ph-bg-color">
                <div className="d-flex col-md-9 col-lg-12 justify-content-between align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h5 mt-3">Clientes</h1>
                    <Link to={"/cadastrar-cliente"} type="button" className="ph-btn fw-semibold bm-cor-botao ph-cor-branco mt-0 rounded-3"><i className="fi fi-br-plus me-3"></i>Novo Cliente</Link>
                </div>

                <div className="col-md-12 col-lg-12 border rounded-3 overflow-hidden">
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
                                cliente.map((cliente) => (
                                    <tr key={cliente.id} className="ph-corpo-cor-table">
                                        <td>{cliente.id}</td>
                                        <td>{cliente.name}</td>
                                        <td>{cliente.email}</td>
                                        <td>{cliente.username}</td>
                                        <td>
                                            <Link to={`/editar-cliente/${cliente.id}`} className="text-decoration-none"><i className="fi fi-rr-pencil ph-cor-lapis"></i></Link>
                                            <button onClick={() => deletarCliente(cliente.id)} className="border border-0 bg-transparent"><i className="fi fi-rr-trash ph-cor-lixo"></i></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}

export default MainCliente;