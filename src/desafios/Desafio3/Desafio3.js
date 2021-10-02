import React from 'react'
import Home from './Home'
import Products from './Products'

const Desafio3 = () => {

    // const { pathname } = window.location;

    // return (
    //     pathname == "/" ? <Home /> : <Products />
    // )

    const { pathname } = window.location;
    const Pagina = pathname == "/" ? Home : Products

    return (
        <Pagina />
    )
}

export default Desafio3
