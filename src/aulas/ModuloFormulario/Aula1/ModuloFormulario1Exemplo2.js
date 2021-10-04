import React from 'react'

const ModuloFormulario1Exemplo2 = () => {

    const [form, setForm] = React.useState({
        nome: '',
        email: ''
    });

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event);
    }

    function handleChange({target}) {
        const {id,value} = target;

        // Eu preciso passar o id como [id] para pegar o valor dele mesmo. Se não ter isso, ele vai passar o nome da propriedade como literalmente id
        setForm({...form, [id]: value});
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" value={form.nome} onChange={handleChange} />
            </div>
            <p>{form.nome}</p>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange} />
            </div>
            <p>{form.email}</p>
            <button>Enviar</button>
        </form>
    )
}

export default ModuloFormulario1Exemplo2
