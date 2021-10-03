import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produto = () => {

    const dados = React.useContext(GlobalContext)

    function buildProduct() {
        if(dados.isLoading) {
            return <h1>Carreando informações</h1>
        }

        if(dados.data == null) {
            return <h1>Nenhuma informação presente</h1>
        }

        return (
            <h1>
                Produto: {dados.data.nome}
            </h1>
        );
    }

    return buildProduct();
}

export default Produto
