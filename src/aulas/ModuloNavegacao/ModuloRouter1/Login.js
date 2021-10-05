import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();

    function handleClick() {
        // Tem que passar o barra
        navigate("/sobre");
    }

    return (
        <div>
            <h1>Formulário</h1>
            <button onClick={handleClick}>LOGIN</button>
        </div>
    )
}

export default Login
