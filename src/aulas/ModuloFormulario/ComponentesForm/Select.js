import React from 'react'

const Select = ({label, id, options, setValue, ...props}) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <select id={id} name={id} onChange={({target}) => setValue(target.value)} {...props}>
                <option value="" disabled>Selecione</option>
                {
                    options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Select
