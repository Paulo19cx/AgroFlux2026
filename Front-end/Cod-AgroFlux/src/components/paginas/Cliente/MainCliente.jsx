import { useEffect, useState } from "react";
import { Link } from "react-router";

function MainCliente() {

    const urlDadosCliente = 'https://jsonplaceholder.typicode.com/users';
    const [cliente, setCliente] = useState([]);

    useEffect(() => {
        async function buscarDadosCliente() {
            try {
                let resposta = await fetch(urlDadosCliente);
                let dadosCliente = await resposta.json();
                setCliente(dadosCliente);
                console.log(dadosCliente)
            } catch (erro) {
                console.log(erro);
            }
        }
        buscarDadosCliente();
    }, []);

    return (
        <>
            <main class="col-md-10 flex-grow-1 col-lg-9 px-md-4 ph-bg-color">
                <div class="d-flex col-md-9 col-lg-12 justify-content-between align-items-center pt-3 pb-2 mb-3">
                    <h1 class="h5 mt-4">Clientes</h1>
                    <Link to={"/cadastrar-cliente"} type="button" class="btn btn-primary ph-cor-branco mt-3 "><i class="fi fi-br-plus me-3"></i>Novo Cliente</Link>
                </div>

                <div className="col-md-2 col-lg-2 pt-4 ">
                </div>

                <table class="table table-striped">
                    <thead className="ph-cabecalho-table-cor">
                        <tr>
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
                                <tr key={cliente.id}>
                                    <td>{cliente.id}</td>
                                    <td>{cliente.name}</td>
                                    <td>{cliente.email}</td>
                                    <td>{cliente.id}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </main>
        </>
    );
}

export default MainCliente;