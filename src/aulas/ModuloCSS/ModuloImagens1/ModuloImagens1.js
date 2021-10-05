import React from 'react'
import foto from './img/foto.jpg';
import dog from './img/dog.svg';
import './ModuloImagens1.css';

const ModuloImagens1 = () => {
    return (
       <>
        <p className="fundo"></p>
        <div>
            <img src={foto} width="200px" height="200px" />
        </div>
        <div>
            <img src={dog} width="200px" height="200px" />
        </div>
       </>
    )
}

export default ModuloImagens1
