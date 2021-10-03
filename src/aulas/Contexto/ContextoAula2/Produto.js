import React from 'react'
import { GlobalContext } from './GlobalContext';

const Produto = () => {

    const dados = React.useContext(GlobalContext);

    console.log(dados);

    return (
        <div>
            Produto: {dados.nome}
            <hr />
            <button onClick={() => dados.setContar((old) => old + 1)}>Contador1: {dados.contar}</button>
            <button onClick={dados.adicionarUm}>Contador2: {dados.contar}</button>
        </div>
    )
}

export default Produto
