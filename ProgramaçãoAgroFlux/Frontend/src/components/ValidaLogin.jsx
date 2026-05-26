import { Navigate } from 'react-router';

function ValidaLogin({ pagina }) {
  const token = sessionStorage.getItem('token');
  const tokenValido = !!token;

  return tokenValido ? pagina : <Navigate to="/" />;
}

export default ValidaLogin;