import React from 'react'

const ModuloFormularioRadio1 = () => {

    const [produto, setProduto] = React.useState('');
    const [fruta, setFruta] = React.useState('');
    const [carro, setCarro] = React.useState('');

    function handleChangeProduto({target}) {
        setProduto(target.value);
    }

    function handleChangeFruta({target}) {
        setFruta(target.value);
    }

    function handleChangeCarro({target}) {
        setCarro(target.value);
    }

    return (
        <form>
            <label>
                {/* Se eu não tivesse o atributo name, eu poderia fazer usando apenas o checked. Ambos são opções */}
                <input type="radio" name="produto" value="smartphone" 
                    checked={produto === 'smartphone'} onChange={handleChangeProduto} />
                Smartphone
            </label>
            <label>
                <input type="radio" name="produto" value="notebook" 
                    checked={produto === 'notebook'} onChange={handleChangeProduto} />
                Notebook
            </label>
            <p>{produto}</p>

            <hr />

            <label>
                {/* Usando o atributo name para separar o grupo */}
                <input type="radio" name="fruta" value="laranja" onChange={handleChangeFruta} />
                Laranja
            </label>
            <label>
                <input type="radio" name="fruta" value="banana" onChange={handleChangeFruta} />
                Banana
            </label>
            <p>{fruta}</p>

            <hr />

            <label>
                {/* Usando o atributo checked para separar o grupo .
                    IMPORTANTE: Esse daqui é PRA SER UTILIZADO caso tenha que ter um valor inicial
                */}
                <input type="radio" value="gol" checked={carro === 'gol'} onChange={handleChangeCarro} />
                Gol
            </label>
            <label>
                <input type="radio" value="corsa" checked={produto === 'corsa'} onChange={handleChangeCarro} />
                Corsa
            </label>
            <p>{carro}</p>

            <hr />

        </form>
    )
}

export default ModuloFormularioRadio1
