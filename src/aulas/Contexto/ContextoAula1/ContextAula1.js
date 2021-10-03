import React from 'react'
import Produto from './Produto'
import UserContext from './UserContext'

const ContextAula1 = () => {
    return (
        <UserContext.Provider value={{nome: "Bruno"}}>
            <Produto />
        </UserContext.Provider>
    )
}

export default ContextAula1
