import React from 'react'

const Produto = () => {

    // Milésimos de segundos antes, a questão do callback de desmontar vai ser ativada para remover o evento do scroll
    React.useEffect(() => {

        function handleScroll(event) {
            console.log(event);
        }

        window.addEventListener('scroll', handleScroll);

        // Essa função só ocorre quando o elemento Produto some da tela
        return () => {
            // Para limpar uma função deve ser uma função nomeada, e não uma função anônima
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    return (
        <div style={{height:"200vh"}}>
            <p>Meu produto</p>
        </div>
    )
}

export default Produto
