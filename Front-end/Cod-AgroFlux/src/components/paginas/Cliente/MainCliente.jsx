function MainCliente() {

    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 ph-bg-color">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 text-black">
                    <h1 className="h2">Cliente</h1>
                </div>

                <form className="row g-3 text-black">
                    <div className="col-md-6">
                        <label htmlFor="razao_social" className="form-label">Razão Social</label>
                        <input type="text" className="form-control" id="razao_social" name="razao_social" required/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="nome_fantasia" className="form-label">Nome Fantasia</label>
                        <input type="text" className="form-control" id="nome_fantasia" name="nome_fantasia"/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="cnpj" className="form-label">CNPJ</label>
                        <input type="text" className="form-control" id="cnpj" name="cnpj" required/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="telefone" className="form-label">Telefone</label>
                        <input type="text" className="form-control" id="telefone" name="telefone" required/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" required/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="enderco" className="form-label">Endereço</label>
                        <input type="text" className="form-control" id="enderco" name="enderco"/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="bairro" className="form-label">Bairro</label>
                        <input type="text" className="form-control" id="bairro" name="bairro"/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="cidade" className="form-label">Cidade</label>
                        <input type="text" className="form-control" id="cidade" name="cidade"/>
                    </div>
                    <div className="col-md-8">
                        <label htmlFor="cidade" className="form-label">Estado</label>
                        <input type="text" className="form-control" id="cidade" name="cidade"/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="cep" className="form-label">CEP</label>
                        <input type="text" className="form-control" id="cep" name="cep"/>
                    </div>
                    
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Cadastrar</button>
                    </div>
                </form>
            </main>
        </>
    );
}

export default MainCliente;