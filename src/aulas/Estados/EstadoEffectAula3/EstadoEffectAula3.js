import React from 'react'
import Produto from './Produto';

const EstadoEffectAula3 = () => {

    const [ativo, setAtivo] = React.useState(false);

    return (
        <div>
            <button onClick={() => setAtivo(!ativo)}>Ativar</button>
            {ativo && <Produto />}
        </div>
    )
}

export default EstadoEffectAula3
