import React from 'react'
import Input from './Input';

const ModuloFormularioValidacao1 = () => {

    const [cep, setCep] = React.useState('');
    const [error,setError] = React.useState(null);

    function validateCep(value) {
        if(value.length === 0) {
            setError("Preencha um valor");
            return false;
        } else if(!(/^\d{5}-?\d{3}$/.test(value))) {
            setError("Preencha um CEP válido");
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    function handleChange({target}) {
        if(error) validateCep(target.value)
        setCep(target.value)
    }

    function handleBlur({target}) {
        validateCep(target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if(validateCep(cep)) {
            console.log("Enviou");
        } else {
            console.log("Não enviar");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text" 
                id="cep" 
                label="CEP" 
                placeholder="00000-000" 
                value={cep} 
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {
                error && <p>{error}</p>
            }
            <button>ENVIAR</button>
        </form>
    )
}

export default ModuloFormularioValidacao1
