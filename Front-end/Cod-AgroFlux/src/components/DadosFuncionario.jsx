import { Link } from "react-router";

function DadosFuncionario(props) {
    return (
        <>
           
                        <div className="card h-100 pricing-card col-4 mb-3">
                            <div className="pricing-header bm-bg-verde text-white text-center">
                               
                            </div>
                            <img    
                                    src={props.foto}
                                    alt="mdo"
                                    width="201"
                                    height="177"
                                    className="rounded-circle bm-borda-img mx-center"
                                />
                            <div className="card-body pricing-features">
                                <ul className="list-unstyled ">
                                    <li className="mb-1 text-center h5">
                                        {props.nome}
                                    </li>
                                    <li className="mb-3 text-center h6 bm-cor-texto">
                                    {props.cargo}
                                    </li>
                                    <div className='row justify-content-center'>
                                    <li className="mb-3 text-center bm-linha bm-cor-fundo rounded-4 bm-cor-texto-ativo">
                                        Ativo
                                    </li>
                                    </div>
                                    
                                    <li className="mb-3 text-center"><i class="fi fi-rr-clip-mail"></i>
                                       {props.email}
                                    </li>
                                    <li className="mb-3 text-center"><i class="fi fi-rs-briefcase"></i>
                                       {props.remuneracao}
                                    </li>
                                </ul>
                                <div className="text-center mt-4 d-flex gap-3 justify-content-center">
                                    <Link to={`/editar-funcionario/${props.id}`} className="btn btn-outline-primary btn-custom bm-cor-botao"><i class="bi bi-pencil"></i>Editar</Link>
                                     
                                    <Link to="" className="btn btn-outline-primary btn-custom bm-cor-botao-excluir"><i class="fi fi-rs-trash"></i></Link>
                                
                                </div>
                               
                            </div>
                        </div>


        </>
    );
}

export default DadosFuncionario;