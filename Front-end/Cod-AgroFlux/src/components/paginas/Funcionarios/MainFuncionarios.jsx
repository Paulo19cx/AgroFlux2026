import DadosFuncionario from "../../DadosFuncionario";
function MainFuncionarios() {
    return (
        <>
            <main class="col-md-9 col-lg-10 flex-grow-1 px-md-4 ph-bg-color">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Funcionários</h1>
                    <DadosFuncionario/>
                </div>
            </main>
        </>
    );
}

export default MainFuncionarios;