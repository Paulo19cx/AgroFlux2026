import FotoIg from '../assets/img/MCIG (1).jfif'
function DadosFuncionario() {
    return (
        <>
            <title>Nomefuncionário</title>
            <div className="container py-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100 pricing-card">
                            <div className="pricing-header bg-verde text-white text-center">

                                <img
                                    src={FotoIg}
                                    alt="mdo"
                                    width="180"
                                    height="201"
                                    className="rounded-circle"
                                />
                                <p className="mb-0">per month</p>
                            </div>
                            <div className="card-body pricing-features">
                                <ul className="list-unstyled">
                                    <li className="mb-3">
                                        <svg className="feature-icon text-primary" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        10 GB Storage
                                    </li>
                                    <li className="mb-3">
                                        <svg className="feature-icon text-primary" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        2 Users
                                    </li>
                                    <li className="mb-3">
                                        <svg className="feature-icon text-primary" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        Email Support
                                    </li>
                                </ul>
                                <div className="text-center mt-4">
                                    <a href="#" className="btn btn-outline-primary btn-custom">Get Started</a>
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