import React from 'react'

// ...props pega o restante do que foi colocado de argumento
const InputMelhorado = ({id, label, ...props}) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} {...props} />
        </div>
    )
}

export default InputMelhorado
