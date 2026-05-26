import { Navigate } from "react-router-dom";

function Protegida({ children, regrasPermitidas }) {
    const token = sessionStorage.getItem("token");
    const regra = sessionStorage.getItem("regra");

    if (!token) {
        return <Navigate to="/" />;
    }

    if (regrasPermitidas && !regrasPermitidas.includes(regra)) {
        return <Navigate to="/home" />;
    }

    return children;
}

export default Protegida;