import React from 'react'
import Input from './Input';
import useForm from './useForm';

const ModuloFormularioHookForm = () => {

    const cep = useForm('cep');
    const email = useForm('email');
    const nome = useForm();
    const sobrenome = useForm(false);

    function handleSubmit(event) {
        event.preventDefault();

        if(cep.validate() && email.validate() && nome.validate()) {
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
                {...cep}
            />
            <Input
                type="email" 
                id="email" 
                label="Email" 
                placeholder="Digite seu email" 
                {...email}
            />
            <Input
                type="text" 
                id="nome" 
                label="Nome" 
                placeholder="Digite seu nome" 
                {...nome}
            />
            <Input
                type="text" 
                id="sobrenome" 
                label="Sobrenome" 
                placeholder="Digite seu sobrenome" 
                {...sobrenome}
            />
            <button>ENVIAR</button>
        </form>
    )
}

export default ModuloFormularioHookForm
