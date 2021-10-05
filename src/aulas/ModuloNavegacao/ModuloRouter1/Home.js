import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'

const Home = () => {
    return (
        <div>
            <Head title="Home" description="Essa é a descrição da home" />
            <h1>Home</h1>
            <Link to="produto/notebook">Notebook</Link> {" "}
            <Link to="produto/smartphone">Smartphone</Link>
            <hr />
            <Link to="cor/azul">Azul</Link> {" "}
            <Link to="cor/vermelho">Vermelho</Link>
        </div>
    )
}

export default Home
