import React from 'react'

const Input = ({label, id, onChange, value, type, onBlur, placeholder, error}) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} type={type} onChange={onChange} placeholder={placeholder} onBlur={onBlur} value={value} />
            {
                error && <p>{error}</p>
            }
        </div>
    )
}

export default Input
