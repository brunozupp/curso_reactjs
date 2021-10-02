import React from 'react'

const ButtonModal = ({setModal}) => {
    return (
        <div>
            <button onClick={() => setModal(true)}>
                ABRIR
            </button>
            {/* <button onClick={() => setModal(false)}>
                FECHAR
            </button> */}
        </div>
    )
}

export default ButtonModal
