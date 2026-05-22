import { Link } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import FotoFornecedor from "../../../assets/img/imagem fornecedor1.jpg";
import FotoSementes from "../../../assets/img/_Sementes Brasil S.A._.jpg";
import FotoBayer from "../../../assets/img/Bayer CropScience_.jpg";
import FotoAgriCorp from "../../../assets/img/agriiCorp.jpg";

function MainFornecedores() {
    const [fornecedores, setFornecedores] = useState([]);

    useEffect(() => {
        const carregarFornecedores = async () => {
            try {
                const resposta = await axios.get("http://localhost:3001/listar-fornecedores");
                setFornecedores(resposta.data);
            } catch (erro) {
                console.log(erro);
            }
        };
        carregarFornecedores();
    }, []);

    const deletarFornecedor = async (id) => {
        if (window.confirm("Tem certeza que deseja deletar este fornecedor?")) {
            try {
                await axios.delete(`http://localhost:3001/deletar-fornecedor/${id}`);
                setFornecedores(fornecedores.filter(f => f.id !== id));
                alert("Fornecedor deletado com sucesso!");
            } catch (erro) {
                console.log(erro);
                alert("Erro ao deletar fornecedor!");
            }
        }
    };

    return (
        <>
            <main className="ph-main-corpo z ph-bg-color">
                <div className="d-flex col-md-9 col-lg-12 justify-content-between align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h5 mt-3">Fornecedores</h1>
                    <Link to={"/cadastrar-fornecedor"} type="button" className="ph-btn fw-semibold bm-cor-botao ph-cor-branco mt-0 rounded-3"><i className="fi fi-br-plus me-3"></i>Novo Fornecedor</Link>
                </div>
                <div className="row gap-5 m-2">
                    {fornecedores.length > 0 ? (
                        fornecedores.map((fornecedor) => (
                            <div key={fornecedor.id} className="card row p-0">
                                <img className="p-0" src={FotoFornecedor} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{fornecedor.razao_social}</h5>
                                    <h6 className="card-title">{fornecedor.cnpj}</h6>
                                    <div className="d-flex p-2">
                                        <i className="fi fi-rr-clip-mail"></i><p className="card-text">{fornecedor.email}</p>
                                    </div>
                                    <div className="d-flex p-2">
                                        <i className="fi fi-rr-phone-call"></i><p className="card-text">{fornecedor.numero_telefone}</p>
                                    </div>
                                    <div className="d-flex p-2">
                                        <i className="fi fi-bs-marker"></i><p className="card-text">{fornecedor.cidade}</p>
                                    </div>
                                    <div className="d-flex">
                                        <Link to={`/editar-fornecedor/${fornecedor.id}`} type="button" className="btn bm-cor-botao me-3"><i className="fi fi-rr-pencil ph-cor-lapis"></i>Editar</Link>
                                        <button type="button" className="btn btn-danger" onClick={() => deletarFornecedor(fornecedor.id)}><i className="fi fi-rs-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Nenhum fornecedor cadastrado</p>
                    )}



                </div>

            </main>
        </>
    );
}

export default MainFornecedores;
