import React from 'react'

const EstadoRefProblemaTimeOut = () => {
    
    const [carrinho, setCarrinho] = React.useState(0);
    const [notificacao, setNotificacao] = React.useState(null);
    const timeoutRef = React.useRef();

    function handleClick() {
        setCarrinho(carrinho + 1);

        setNotificacao(`Item adicionado ao carrinho ${carrinho}`);

        // Primeiro vai limpar o timeout anterior e depois agendar outro. Por isso que eu utilizo o UseRef aqui, para não
        // perder a referência do timeout anterior e assim eu poder retirar ele caso o tempo de execução ainda não tenha chegado.
        // Desse modo eu evito que ele apague a notificação atual antes da hora (dos 2 segundos que pertencem a ela, e não ao tempo da notificação anterior).
        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            setNotificacao(null);
        }, 2000);

    }
    
    return (
        <div>
            <p>{notificacao}</p>
            <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
        </div>
    )
}

export default EstadoRefProblemaTimeOut
