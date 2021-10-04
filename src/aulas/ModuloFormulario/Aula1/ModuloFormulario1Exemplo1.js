import React from 'react'

const ModuloFormulario1Exemplo1 = () => {

    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" value={nome} onChange={(event) => setNome(event.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <button>Enviar</button>
        </form>
    )
}

export default ModuloFormulario1Exemplo1
