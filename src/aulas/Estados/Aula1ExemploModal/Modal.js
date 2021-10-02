import React from 'react'

const Modal = ({modal, setModal}) => {
    return (modal &&
        <div>
            Esse é um modal.
            <button onClick={() => setModal(false)}>FECHAR</button>
        </div>
    )
}

export default Modal
