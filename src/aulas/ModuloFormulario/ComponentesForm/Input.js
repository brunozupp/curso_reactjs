import React from 'react'

const Input = ({label, id, setValue, ...props}) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} type="text" onChange={({target}) => setValue(target.value)} {...props} />
        </div>
    )
}

export default Input
