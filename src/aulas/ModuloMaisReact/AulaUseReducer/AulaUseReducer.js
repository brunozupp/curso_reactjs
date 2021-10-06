import React from 'react'
import Exemplo from './Exemplo';

// O que eu retornar dessa função vai ser o novo estado
// O action seria os argumentos 'aumentar' e 'diminuir'
function reducer(state, action) {

    switch(action) {
        case 'aumentar':
            return state + 1;
        case 'diminuir':
            return state - 1;
        default:
            return state;
    }
}

const AulaUseReducer = () => {

    // Primeiro argumento é a função redutora e o segundo é o estado inicial
    //  Me devolve o state que seria o valor atual do item e o dispatch que seria uma função que vai mandar as ações para o reducer
    const [state, dispatch] = React.useReducer(reducer, 0);

    // a função de reducer só é ativada quando dispatch é ativada

    return (
        <div>
            <button onClick={() => dispatch('aumentar')}>+</button>
            <button onClick={() => dispatch('diminuir')}>-</button>
            <p>{state}</p>
            <Exemplo />
        </div>
    )
}

export default AulaUseReducer
