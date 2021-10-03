import React from 'react'
import { GlobalStorage } from './GlobalContext'
import Produto from './Produto'

const ContextAula2 = () => {
    return (
        <GlobalStorage>
            <Produto />
        </GlobalStorage>
    )
}

export default ContextAula2
