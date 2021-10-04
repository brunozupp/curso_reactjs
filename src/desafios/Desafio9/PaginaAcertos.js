import React from 'react'

const PaginaAcertos = ({respostasTeste, respostasUsuario}) => {

    const acertos = respostasTeste.reduce((old, current) => {

        console.log("Old", old);
        console.log("Current", current);
        
        if(respostasUsuario.includes(current)) {
            old++
        }

        return old;
    }, 0);

    return (
        <h3>Você acertou {acertos} de {respostasTeste.length}</h3>
    )
}

export default PaginaAcertos
