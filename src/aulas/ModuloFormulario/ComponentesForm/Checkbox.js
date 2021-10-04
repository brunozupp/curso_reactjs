import React from 'react'

const Checkbox = ({options, label, value, setValue, ...props}) => {

    function handleMultiple({target}) {
        const value = target.value;

        if(target.checked) {
            setValue((old) => [...old, value]);
        } else {
            setValue((old) => old.filter((val) => val !== value))
        }
    }

    return (
        <div>
            <label>{label}</label>
            {
                options.map((option) => (
                    <label key={option}>
                        <input type="checkbox" checked={value.includes(option)} value={option} onChange={handleMultiple} {...props} />
                        {option}
                    </label>
                ))
            }
        </div>
    )
}

export default Checkbox
