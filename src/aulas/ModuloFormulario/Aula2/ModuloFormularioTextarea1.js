import React from 'react'

const ModuloFormularioTextarea1 = () => {
    
    const [textarea, setTextarea] = React.useState('');
    
    return (
        <form>
            <textarea value={textarea} onChange={({target}) => setTextarea(target.value)} />
            <p>{textarea}</p>
        </form>
    )
}

export default ModuloFormularioTextarea1
