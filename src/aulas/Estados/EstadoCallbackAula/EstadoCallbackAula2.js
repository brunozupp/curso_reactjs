import React from 'react'

const set1 = new Set();
const set2 = new Set();

// IMPORTANTE: PARA FAZER ESSE TESTE RETIRAR O MODO STRICT.MODE

const Produto = () => {

    // Como sempre vai recriar a função, na memória vai estar o endereço diferente
    const func1 = () => {
        console.log('Teste');
    };

    // Como não é recriada, a referência na memória é sempre a mesma
    const func2 = React.useCallback(() => {
        console.log('Teste');
    }, []);

    set1.add(func1);
    set2.add(func2);

    console.log("Set 1: ", set1);
    console.log("Set 2: ", set2);

    return (
        <div>
            <p onClick={func1}>Produto 1</p>
            <p onClick={func2}>Produto 2</p>
        </div>
    );
}

const EstadoCallbackAula2 = () => {

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
            <Produto />
            <button onClick={handleClickCallback}>{contar}</button>
        </div>
    )
}

export default EstadoCallbackAula2
