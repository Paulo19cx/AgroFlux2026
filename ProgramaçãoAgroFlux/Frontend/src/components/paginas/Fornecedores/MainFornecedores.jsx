import FotoFornecedor from "../../../assets/img/imagem fornecedor1.jpg";
import FotoSementes from "../../../assets/img/_Sementes Brasil S.A._.jpg";
import FotoBayer from "../../../assets/img/Bayer CropScience_.jpg";
import FotoAgriCorp from "../../../assets/img/agriiCorp.jpg";
function MainFornecedores() {

    return (
        <>
            <main className="ph-main-corpo px-md-4 ph-bg-color">
                <div className="d-flex col-md-9 col-lg-12 justify-content-between align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h5 mt-3">Fornecedores</h1>
                </div>
                <div className="row gap-5 m-2">
                    <div className="card row p-0">
                        <img className="p-0" id="foto fornecedor" src={FotoFornecedor} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">GAG fértil Ltda</h5>
                            <h6 className="card-title">12.345.678/0001-90 </h6>
                            <div className="d-flex p-2">
                                <i class="fi fi-rr-clip-mail"></i><p className="card-text" >contato@gagfertil.com.br</p>
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
                            <div className="d-flex">
                                <li className="mb-3 text-center bm-linha bm-cor-fundo rounded-4 bm-cor-texto-ativo me-3">
                                    Fertilizante
                                </li>
                                <li className="mb-3 text-center bm-linha bm-cor-fundo rounded-4 bm-cor-texto-ativo">
                                    Adubos
                                </li>
                            </div>

                            <div className="">
                             <button type="button" className="btn bm-cor-botao me-3"><i className="fi fi-rr-pencil ph-cor-lapis "></i>Editar</button>
                            <button type="button" className="btn btn-danger"><i class="fi fi-rs-trash"></i></button>
                             
                            </div>
                        </div>
                    </div>

                    <div className="card row p-0">
                        <img className="p-0" id="foto fornecedor sementes" src={FotoSementes} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Sementes Brasil S.A.</h5>
                            <h6 className="card-title">23.456.789/0001-01 </h6>
                            <div className="d-flex p-2">
                                <i class="fi fi-rr-clip-mail"></i><p className="card-text" >vendas@sementesbrasil.com.br</p>
                            </div>
                            <div className="d-flex p-2">
                                <i class="fi fi-rr-phone-call"></i><p className="card-text">19 3234-5678</p>
                            </div>
                            <div className="d-flex p-2">
                                <i class="fi fi-bs-marker"></i><p className="card-text"> Campinas</p>
                            </div>
                            <div className="d-flex p-2">
                                <i class="fi fi-rs-box-alt"></i><p className="card-text"> Categorias:</p>
                            </div>
                            <li className="mb-3 text-center bm-linha bm-cor-fundo rounded-4 bm-cor-texto-ativo">
                                Sementes
                            </li>
                           <div className="">
                             <button type="button" className="btn bm-cor-botao me-3"><i className="fi fi-rr-pencil ph-cor-lapis "></i>Editar</button>
                            <button type="button" className="btn btn-danger"><i class="fi fi-rs-trash"></i></button>
                             
                            </div>
                        </div>
                    </div>

                    <div className="card row p-0">
                        <img className="p-0" id="foto fornecedor Bayer" src={FotoBayer} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Bayer CropScience</h5>
                            <h6 className="card-title">34.567.890/0001-12</h6>
                            <div className="d-flex p-2">
                                <i class="fi fi-rr-clip-mail"></i><p className="card-text" >sac@bayer.com.br</p>
                            </div>
                            <div className="d-flex p-2">
                                <i class="fi fi-rr-phone-call"></i><p className="card-text">11 4567-8901</p>
                            </div>
                            <div className="d-flex p-2">
                                <i class="fi fi-bs-marker"></i><p className="card-text">São Paulo</p>
                            </div>
                            <div className="d-flex p-2">
                                <i class="fi fi-rs-box-alt"></i><p className="card-text"> Categorias:</p>
                            </div>
                            <div className="d-flex">
                                <li className="mb-3 text-center bm-linha bm-cor-fundo rounded-4 bm-cor-texto-ativo me-3">
                                    Defensivos
                                </li>
                                <li className="mb-3 text-center bm-linha bm-cor-fundo rounded-4 bm-cor-texto-ativo">
                                    Herbicidas
                                </li>
                            </div>

                           <div className="">
                             <button type="button" className="btn bm-cor-botao me-3"><i className="fi fi-rr-pencil ph-cor-lapis "></i>Editar</button>
                            <button type="button" className="btn btn-danger"><i class="fi fi-rs-trash"></i></button>
                             
                            </div>
                        </div>
                    </div>

                    <div className="card row p-0">
                        <img className="p-0" id="foto fornecedor" src={FotoAgriCorp} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">AgriCorp Solutions</h5>
                            <h6 className="card-title">17.400.402/0008-70 </h6>
                            <div className="d-flex p-2">
                                <i class="fi fi-rr-clip-mail"></i><p className="card-text" >agri@Corp.com.br</p>
                            </div>
                            <div className="d-flex p-2">
                                <i class="fi fi-rr-phone-call"></i><p className="card-text">14 3478-5623</p>
                            </div>
                            <div className="d-flex p-2">
                                <i class="fi fi-bs-marker"></i><p className="card-text">Belo Horizonte</p>
                            </div>
                            <div className="d-flex p-2">
                                <i class="fi fi-rs-box-alt"></i><p className="card-text"> Categorias:</p>
                            </div>
                            <li className="mb-3 text-center bm-linha bm-cor-fundo rounded-4 bm-cor-texto-ativo">
                                Fertilizante
                            </li>

                             <div className="">
                             <button type="button" className="btn bm-cor-botao me-3"><i className="fi fi-rr-pencil ph-cor-lapis "></i>Editar</button>
                            <button type="button" className="btn btn-danger"><i class="fi fi-rs-trash"></i></button>
                             
                            </div>
                        </div>
                    </div>



                </div>

            </main>
        </>
    );
}

export default MainFornecedores;
