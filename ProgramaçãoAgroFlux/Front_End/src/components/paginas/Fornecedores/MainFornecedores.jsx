import FotoFornecedor from "../../../assets/img/imagem fornecedor1.jpg";
function MainFornecedores() {

    return (
        <>
            <main className="ph-main-corpo px-md-4 ph-bg-color">
                <div className="d-flex col-md-9 col-lg-12 justify-content-between align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h5 mt-3">Fornecedores</h1>
                </div>
                <div className="card">
                    <img id="foto fornecedor" src={FotoFornecedor} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">GAG fértil Ltda</h5>
                        <h6 className="card-title">12.345.678/0001-90 </h6>
                        <div className="d-flex p-2">
                            <i class="fi fi-rr-clip-mail"></i><p className="card-text" >contato@agrofertil.com.br</p>
                        </div>
                        <div className="d-flex p-2">
                            <i class="fi fi-rr-phone-call"></i><p className="card-text">14 3456-7890</p>
                        </div>
                        <div className="d-flex p-2">
                            <i class="fi fi-bs-marker"></i><p className="card-text"> São Paulo</p>
                        </div>
                        <div className="d-flex p-2">
                            <i class="fi fi-rs-box-alt"></i><p className="card-text"> Categorias:</p>
                        </div>
                         <li className="mb-3 text-center bm-linha bm-cor-fundo rounded-4 bm-cor-texto-ativo">
                                        Fertilizante
                                    </li>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            </main>
        </>
    );
}

export default MainFornecedores;
