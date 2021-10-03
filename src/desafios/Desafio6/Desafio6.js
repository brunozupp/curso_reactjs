import React from 'react'
import Buttons from './Buttons'
import { GlobalStorage } from './GlobalContext'

import Produto from './Produto'

const Desafio6 = () => {
    return (
        <GlobalStorage>
            <Buttons />
            <hr />
            <Produto />
        </GlobalStorage>
    )
}

export default Desafio6
