import React from 'react';
import requisicao from './Requisicao';

const Desafio7 = () => {

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
            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" value={form.nome} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" name="senha" value={form.senha} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="cep">CEP</label>
                <input type="text" id="cep" name="cep" value={form.cep} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="rua">Rua</label>
                <input type="text" id="rua" name="rua" value={form.rua} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="bairro">Bairro</label>
                <input type="text" id="bairro" name="bairro" value={form.bairro} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="cidade">Cidade</label>
                <input type="text" id="cidade" name="cidade" value={form.cidade} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="estado">Estado</label>
                <input type="text" id="estado" name="estado" value={form.estado} onChange={handleChange} />
            </div>
            {
                notification && <p>{notification}</p>
            }
            <button>Enviar</button>
        </form>
    )
}

export default Desafio7
