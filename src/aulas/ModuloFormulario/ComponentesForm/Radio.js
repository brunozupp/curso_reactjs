import React from 'react'

const Radio = ({options, label, value, setValue, ...props}) => {
    return (
        <div>
            <label>{label}</label>
            {
                options.map((option) => (
                    <label key={option} style={{textTransform: "capitalize"}}>
                        <input type="radio" value={option} checked={value === option} onChange={({target}) => setValue(option)} {...props} />
                        {option}
                    </label>
                ))
            }
        </div>
    )
}

export default Radio
