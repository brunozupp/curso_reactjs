import React from 'react';
import requisicao from './Requisicao';

const Desafio7_1 = () => {

    const [form, setForm] = React.useState({
        nome: '',
        email: '',
        senha: '',
        cep: '',
        rua: '',
        bairro: '',
        cidade: '',
        estado: ''
    });

    const [notification, setNotification] = React.useState(null);
    const timeoutRef = React.useRef();

    const formFields = [
        {
            id: 'nome',
            label: 'Nome',
            type: 'text'
        },
        {
            id: 'email',
            label: 'Email',
            type: 'email',
            props: {
                placeholder: "Digite seu email",
                required: "required"
            }
        },
        {
            id: 'senha',
            label: 'Senha',
            type: 'password'
        },
        {
            id: 'cep',
            label: 'CEP',
            type: 'text',
            props: {
                required: "required"
            }
        },
        {
            id: 'rua',
            label: 'Rua',
            type: 'text',
            props: {
                placeholder: "Digite sua rua"
            }
        },
        {
            id: 'bairro',
            label: 'Bairro',
            type: 'text'
        },
        {
            id: 'cidade',
            label: 'Cidade',
            type: 'text'
        },
        {
            id: 'estado',
            label: 'Estado',
            type: 'text'
        },
    ]

    function handleSubmit(event) {
        event.preventDefault();
        sendRequest(form);
    }

    async function sendRequest(form) {
        const response = await requisicao.post(form);

        const message = response ? "SUCESSO no envio" : "FALHA no envio";

        setNotification(message);

        clearTimeout(timeoutRef);

        timeoutRef.current = setTimeout(() => {
            setNotification(null);
        }, 2000);
    }

    function handleChange({target}) {
        const {id, value} = target;

        setForm({...form, [id]: value});
    }

    return (
        <form onSubmit={handleSubmit}>
            {
                formFields.map((field) => (
                    <div key={field.id}>
                        <label htmlFor={field.id}>{field.label}</label>
                        <input type={field.type} id={field.id} name={field.id} value={form[field.id]} onChange={handleChange} {...field.props} />
                    </div>
                ))
            }

            <p>{notification}</p>
            <button>Enviar</button>
        </form>
    )
}

export default Desafio7_1
