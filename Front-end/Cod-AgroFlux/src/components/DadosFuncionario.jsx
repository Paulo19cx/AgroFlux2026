import FotoIg from '../assets/img/igiconrecorte.png'
function DadosFuncionario() {
    return (
        <>
            <title>Nomefuncionário</title>
            <div className="container py-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100 pricing-card">
                            <div className="pricing-header bm-bg-verde text-white text-center">
                               
                            </div>
                            <img
                                    src={FotoIg}
                                    alt="mdo"
                                    width="201"
                                    height="177"
                                    className="rounded-circle bm-borda-img mx-center"
                                />
                            <div className="card-body pricing-features">
                                <ul className="list-unstyled ">
                                    <li className="mb-1 text-center h5">
                                        Guilherme Sérgio
                                    </li>
                                    <li className="mb-3 text-center h6 bm-cor-texto">
                                    Gerente agrônomico
                                    </li>
                                    <div className='row justify-content-center'>
                                    <li className="mb-3 text-center linha bm-cor-fundo rounded-4 bm-cor-texto-ativo">
                                        Ativo
                                    </li>
                                    </div>
                                    
                                    <li className="mb-3 text-center"><i class="fi fi-rr-clip-mail"></i>
                                       ig@4mguilherme.com
                                    </li>
                                    <li className="mb-3 text-center"><i class="fi fi-rs-briefcase"></i>
                                       8.000
                                    </li>
                                </ul>
                                <div className="text-center mt-4">
                                    <a href="#" className="btn btn-outline-primary btn-custom "><i class="bi bi-pencil"></i>Editar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default DadosFuncionario;