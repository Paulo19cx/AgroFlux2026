import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/login', { email, senha });

            if (response.status === 200) {
                const idUsuario = response.data.id;
                localStorage.setItem('id', idUsuario)

                navigate('/home');
            }
            else {
                alert('Email ou senha incorretos!');
            }
        }
        catch (erro) {
            console.log(erro)
            console.error('Erro no login', erro)
            alert('Email ou senha incorretos!');
        }
    }

    return (
        <>
            <div className="d-flex align-items-center py-4 bg-body-tertiary vh-100 ph-background-img justify-content-end overflow-hidden">
                <main className="d-flex mt-auto">
                    <div className="row d-flex ph-fundo-login justify-content-center rounded-5 me-4">
                        <div className="d-flex justify-content-center mt-auto mb-auto">
                        </div>

                        <form onSubmit={handleLogin} className="row d-flex ph-fundo-form-login rounded-5 ms-auto me-auto just align-content-center">
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
