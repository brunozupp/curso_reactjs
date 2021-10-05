import React from 'react'
import { NavLink, useParams, Outlet } from 'react-router-dom'

const Cor = () => {

    const params = useParams();

    return (
        <div>
            <h1>Cor: {params.cor}</h1>
            <nav>
                <NavLink to="">Descrição</NavLink>
                <NavLink to="avaliacao">Avaliação</NavLink>
                <NavLink to="customizado">Customizado</NavLink>
            </nav>
            <Outlet /> {/** Renderizando o que vem das rotas específicas aqui */}
        </div>
    )
}

export default Cor
