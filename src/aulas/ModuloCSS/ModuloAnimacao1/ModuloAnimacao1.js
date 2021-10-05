import React from 'react'
import Produto from './Produto';

const ModuloAnimacao1 = () => {

    const [ativar, setAtivar] = React.useState(false);

    return (
        <div>
            <button onClick={() => setAtivar(!ativar)}>{ativar ? 'Desativar' : 'Ativar'}</button>
            {
                ativar && <Produto />
            }
        </div>
    )
}

export default ModuloAnimacao1
