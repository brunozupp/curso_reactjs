import React from 'react'

function operacaoLenta() {
    let c;

    for (let i = 0; i < 1000000000; i++) {
        c = i + i /10;
    }
    
    return c;
}


const EstadoMemoAula1 = () => {

    const [contar,setContar] = React.useState(0);
    
    // Aquele segundo argumento ([]) funciona igual o array de dependência do UseEffect, se não passar nada executa apenas uma vez
    // após a página renderizar. Se passar algum valor específico como 'contar', vai sempre executar quando 'contar' atualizar
    // const valor = React.useMemo(() => {
    //     const localItem = localStorage.getItem("produto");

    //     console.log("Aconteceu o memo");

    //     return localItem;
    // }, []);

    const t1 = performance.now();

    const valor = React.useMemo(() => operacaoLenta(), []);
    
    console.log(`Tempo gasto = ${performance.now() - t1}`);

    console.log(valor);

    return (
        <div>
            <button onClick={() => setContar(contar + 1)}>{contar}</button>
        </div>
    )
}

export default EstadoMemoAula1
