import React from 'react'
import { NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';
import ProdutoDescricao from './ProdutoDescricao';

const Produto = () => {

    const params = useParams();

    const location = useLocation();

    const search = new URLSearchParams(location.search);

    // http://localhost:3000/produto/notebook?memoria=1tb&cor=amarelo
    console.log(search.get("memoria"));
    console.log(search.get("cor"));

    return (
        <div>
            <h1>Produto: {params.id}</h1>
            <nav>
                <NavLink to="">Descrição</NavLink>
                <NavLink to="avaliacao">Avaliação</NavLink>
                <NavLink to="customizado">Customizado</NavLink>
            </nav>
            <Routes>
                <Route path="" element={<ProdutoDescricao />} /> {/* Aparece já de cara na página da rota /produto */}
                <Route path="avaliacao" element={<ProdutoAvaliacao />} />
                <Route path="customizado" element={<ProdutoCustomizado />} />
            </Routes>
        </div>
    )
}

export default Produto
