import React from 'react'

const EstadoRefAula2 = () => {

    const [comentarios, setComentarios] = React.useState(['teste1', 'teste2']);
    const [input, setInput] = React.useState('teste');

    // Usando o ref para que tenha uma referência ao elemento html para que possa utilizar a função focus sem precisar utilizar o querySelector
    const inputElement = React.useRef();

    function handleClick() {
        setComentarios((old) => [...old, input]);
        setInput("");
        inputElement.current.focus();
    }

    return (
        <div>
            <ul>
                {
                    comentarios.map((comentario) => <li key={comentario}>{comentario}</li>)
                }
            </ul>
            <input ref={inputElement} type="text" value={input} onChange={(event) => setInput(event.target.value)} />
            <button onClick={handleClick}>Enviar</button> 
        </div>
    )
}

export default EstadoRefAula2
