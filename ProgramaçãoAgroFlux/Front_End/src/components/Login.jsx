import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        let logado = localStorage.getItem('token');
        if (logado) {
            navigate('/home');
        }
    }, []);

    async function fazerLogin(e) {
        e.preventDefault();

        if (!email || !senha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        try {
            let resposta = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({ email: email, senha: senha }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            console.log(resposta);
            if (resposta.status === 201) {
                console.log('Resposta do servidor ok!');
                if (resposta.ok === true) {
                    // gera um token aleatório 
                    let tokenBackend = Math.random();
                    // salva no armazenamento local do navegado (Mozilla, Chrome etc)
                    localStorage.setItem('token', tokenBackend);

                    navigate('/home');

                } else {
                    alert('Erro ao realizar login!');
                }
            } else {
                console.log('Resposta do servidor erro!');
            }
        } catch (erro) {
            console.log(erro);
        }
    }

    return (
        <>
            <div className="d-flex align-items-center py-4 bg-body-tertiary vh-100 ph-background-img justify-content-end overflow-hidden">
                <main className="d-flex mt-auto">
                    <div className="row d-flex ph-fundo-login justify-content-center rounded-5 me-4">
                        <div className="d-flex justify-content-center mt-auto mb-auto">
                        </div>

                        <form onSubmit={fazerLogin} className="row d-flex ph-fundo-form-login rounded-5 ms-auto me-auto just align-content-center">
                            <div className="m-auto">
                                <h1>Login</h1>
                            </div>
                            <div className="col-md-12 col-lg-12 mb-4">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    required
                                />
                            </div>
                            <div className="col-md-12 col-lg-12 mb-5">
                                <label htmlFor="senha" className="form-label">Senha</label>
                                <input
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    type="password"
                                    className="form-control"
                                    id="senha"
                                    name="senha"
                                    required
                                />
                            </div>
                            <div>
                                <div className="col-md-12 col-lg-12">
                                    <button type="submit" className="btn ph-cor-botao-login ph-cor-branco mt-3 fw-bold shadow-lg w-100">Entrar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Login;
