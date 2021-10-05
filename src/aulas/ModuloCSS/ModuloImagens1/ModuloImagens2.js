import React from 'react'
import foto from './img/foto.jpg';
import {ReactComponent as Dog} from './img/dog.svg';
import './ModuloImagens1.css';
import DogSvg from './DogSvg';

const ModuloImagens2 = () => {

    const [olho,setOlho] = React.useState(0);

    function increase() {
        setOlho(olho + 1);
    }

    function decrease() {
        if(olho == 0) return;
        setOlho(olho - 1);
    }

    function animation() {
        setOlho(0);

        for(let i = 0; i < 6; i++) {
            setTimeout(() => {
                setOlho(i);
            }, 100 * i);
        }
    }

    return (
       <>
        <p className="fundo"></p>
        <div>
            <img src={foto} width="200px" height="200px" />
        </div>
        <Dog />
        <br />
        <DogSvg color="red" olho={olho} />
        <br />
        <button onClick={increase}>AUMENTA</button>
        <button onClick={decrease}>DIMINUI</button>
        <button onClick={animation}>ANIMAÇÃO</button>
       </>
    )
}

export default ModuloImagens2
