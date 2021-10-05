import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './Contact'
import Cor from './Cor/Cor'
import CorAvaliacao from './Cor/CorAvaliacao'
import CorCustomizado from './Cor/CorCustomizado'
import CorDescricao from './Cor/CorDescricao'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import NotFound from './NotFound'
import Produto from './Produto'
import Sobre from './Sobre'

const ModuloRouter1 = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="sobre" element={<Sobre />} />
                <Route path="contato" element={<Contact />} />
                <Route path="login" element={<Login />} />
                <Route path="produto/:id/*" element={<Produto />} /> {/** o /* significa que pode ser qualquer coisa ali */}
                
                {/** outra forma de fazer rotas aninhadas - Prefiro esse, dá uma visão mais objetiva do que esperar */}
                {/** Posso retirar o /*, vai funcionar da mesma maneira */}
                <Route path="cor/:cor" element={<Cor />}>
                    <Route path="" element={<CorDescricao />} /> {/* Aparece já de cara na página da rota /produto */}
                    <Route path="avaliacao" element={<CorAvaliacao />} />
                    <Route path="customizado" element={<CorCustomizado />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default ModuloRouter1
