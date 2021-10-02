import React from 'react'

const EstadoCallbackAula1 = () => {

    const [contar, setContar] = React.useState(0);

    // Toda vez que renderiza novamente, essa função é recriada. Porém essa operação é hiper-rápida
    const handleClick = () => {
        setContar(contar + 1);
    }

    // Nesse caso, com o React.useCallback, só vai criar essa função na primeira vez que for renderizado, nas outras vezes
    // que tiver renderização, essa função não é recriada. Mesmo esquema do array de depêndencia do UseEffect, se eu colocasse
    // assim [contar], ele ia recriar toda vez que o contar muda-se, o que ia ficar a mesma coisa da função acima
    const handleClickCallback = React.useCallback(() => {
        setContar((contar) => contar + 1);
    }, []);

    // No final das contas, ambas vão ter o mesmo funcionamento, o que vai mudar é isso aí da criação de toda vez que sofrer
    // renderização (modo normal) e de não recriar após a primeira vez renderizado.

    return (
        <div>
            <button onClick={handleClickCallback}>{contar}</button>
        </div>
    )
}

export default EstadoCallbackAula1
