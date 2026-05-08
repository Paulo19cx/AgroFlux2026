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
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            </main>
        </>
    );
}

export default MainFornecedores;
