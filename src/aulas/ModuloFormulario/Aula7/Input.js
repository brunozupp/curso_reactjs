import React from 'react'

const Input = ({label, id, onChange, ...props}) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} type="text" onChange={onChange} {...props} />
        </div>
    )
}

export default Input
