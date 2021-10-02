/**
 * SEMPRE mudar o valor de um item reativo através da função setAlgumaCoisa
 */

import React from 'react'

const EstadoAula2 = () => {

    const [ativo, setAtivo] = React.useState(true);

    function handleClick() {
        // Posso atualizar o valor usando uma callback que possui o valor antigo
        setAtivo((anterior) => !anterior);
    }

    return (
        <div>
            <button onClick={handleClick}>
                {ativo ? 'Está ativo' : 'Está inativo'}
            </button>
        </div>
    )
}

export default EstadoAula2
