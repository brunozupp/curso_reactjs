import React from 'react'
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const EstadoAula1_1 = () => {

    const [modal, setModal] = React.useState(false);

    return (
        <div>
            <div>{modal ? 'Modal Aberto' : 'Modal Fechado'}</div>
            <Modal modal={modal} setModal={setModal} />
            <ButtonModal setModal={setModal} />
        </div>
    )
}

export default EstadoAula1_1
