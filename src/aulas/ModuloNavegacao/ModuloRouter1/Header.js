import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Header.css';

const Header = () => {

    const location = useLocation();

    React.useEffect(() => {
        console.log("Mudou a rota: ", location.pathname)
    }, [location]);

    return (
        <div>
            <h1>Meu Header</h1>
            <nav>
                {/* O Link não dá a informação em que página eu estou no momento */}
                <Link style={{marginRight:"10px"}} to="/">Home</Link>
                <Link style={{marginRight:"10px"}} to="sobre">Sobre</Link>
                <Link style={{marginRight:"10px"}} to="contato">Contato</Link>
                <Link style={{marginRight:"10px"}} to="login">Login</Link>
                <Link to="sdsad">Não encontrada</Link>

                <hr />
                {/* O NavLink informa qual página estou no momento. No caso ele coloca a class do elemento como 'active' */}
                <NavLink style={{marginRight:"10px"}} to="/" end>Home</NavLink>
                <NavLink style={{marginRight:"10px"}} activeStyle={{color: "green"}} to="sobre">Sobre</NavLink>
                <NavLink style={{marginRight:"10px"}} to="contato">Contato</NavLink>
                <NavLink style={{marginRight:"10px"}} to="login">Login</NavLink>
                <NavLink to="sdsad">Não encontrada</NavLink>
            </nav>
        </div>
    )
}

export default Header
