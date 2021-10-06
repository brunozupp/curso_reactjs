import React from 'react'

function reducer(state, action) {

    switch(action.type) {

        case 'remover':
            return state.filter((item) => item !== action.content);
        case 'adicionar':
            return [...state, action.content];
        default:
            throw new Error("Função não presente no reducer");
    }
}

const Exemplo = () => {
    
    const [state, dispatch] = React.useReducer(reducer, ['Banana', 'Uva']);
    
    return (
        <div>
            <button onClick={() => dispatch({type: "remover", content: "Banana"})}>Remover banana</button>
            <button onClick={() => dispatch({type: "remover", content: "Uva"})}>Remover uva</button>
            <button onClick={() => dispatch({type: "adicionar", content: "Banana"})}>Adicionar banana</button>
            <button onClick={() => dispatch({type: "adicionar", content: "Uva"})}>Adicionar uva</button>
            <button onClick={() => dispatch({type: "remover", content: "Morango"})}>Remover morango</button>
            <button onClick={() => dispatch({type: "adicionar", content: "Morango"})}>Adicionar morango</button>
            <p>{state.map((item) => item + " ")}</p>
        </div>
    )
}

export default Exemplo
