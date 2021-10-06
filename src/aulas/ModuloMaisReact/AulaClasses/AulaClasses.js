import React from 'react'
import Produtos from './Produto'

const AulaClasses = () => {

    const [ativo, setAtivo] = React.useState(false);

    return (
        <div>
            <button onClick={() => setAtivo(!ativo)}>{ativo ? 'Ativo' : 'Inativo'}</button>
            {
                ativo && <Produtos title="Esses são os produtos" />
            }
        </div>
    )
}

export default AulaClasses
