import React from 'react'

const ModuloFormularioSelect1 = () => {

    const [select, setSelect] = React.useState('');
    const [select2, setSelect2] = React.useState('tablet');

    return (
        <form>
            <select value={select} onChange={({target}) => setSelect(target.value)}>
                <option value="" disabled>Selecione</option>
                <option value="notebook">Notebook</option>
                <option value="smartphone">Smartphone</option>
                <option value="tablet">Tablet</option>
            </select>
            <p>{select}</p>
            <hr />

            <select value={select2} onChange={({target}) => setSelect2(target.value)}>
                <option value="" disabled>Selecione</option>
                <option value="notebook">Notebook</option>
                <option value="smartphone">Smartphone</option>
                <option value="tablet">Tablet</option>
            </select>
            <p>{select2}</p>
        </form>
    )
}

export default ModuloFormularioSelect1
