function MainCliente() {

    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 ph-bg-color">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 text-black">
                    <h1 className="h2">Cliente</h1>
                </div>

                <form className="row g-3 text-black">
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Nome/Razão Social</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Nome Fantasia</label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-4">
                        <label for="inputAddress" className="form-label">CNPJ</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div className="col-4">
                        <label for="inputAddress2" className="form-label">Telefone</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                    </div>
                    <div className="col-md-4">
                        <label for="inputCity" className="form-label">Email</label>
                        <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputState" className="form-label">Endereço</label>
                        <input type="text" className="form-control" id=""/>
                    </div>
                    <div className="col-md-3">
                        <label for="inputZip" className="form-label">Bairro</label>
                        <input type="text" className="form-control" id="inputZip"/>
                    </div>
                    <div className="col-md-3">
                        <label for="inputState" className="form-label">Cidade</label>
                        <input type="text" className="form-control" id=""/>
                    </div>
                    <div className="col-md-3">
                        <label for="inputState" className="form-label">Estado</label>
                        <input type="text" className="form-control" id=""/>
                    </div>
                    <div className="col-md-3">
                        <label for="inputState" className="form-label">Estado</label>
                        <input type="text" className="form-control" id=""/>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </main>
        </>
    );
}

export default MainCliente;