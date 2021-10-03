import React from 'react'
import { GlobalContext } from './GlobalContext'

const Buttons = () => {

    const contexto = React.useContext(GlobalContext);

    return (
        <div>
            <button style={{marginRight:"10px"}} onClick={() => contexto.getData("https://ranekapi.origamid.dev/json/api/produto/notebook")}>Pesquisar</button>
            <button onClick={contexto.cleanData}>Limpar</button>
        </div>
    )
}

export default Buttons
