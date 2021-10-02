import React from 'react'

const EstadoEffectAula1 = () => {

    const [contar, setContar] = React.useState(0);

    // React.useEffect(() => {
    //     console.log("Executa toda vez que a tela sofre renderização, isso é, que o estado é modificado")
    // });

    // Executa esse effect toda vez que o 'contar' sofrer alteração no seu estado
    React.useEffect(() => {
        // Executa quando a tela é aberta pela primeira vez.
        console.log("Executou o Effect de Contar");
    }, [contar]);

    // Esse seria o onInit do GetX
    React.useEffect(() => {
        console.log("Executa apenas UMA VEZ após a renderização, indepentende de quantas vezes a tela sofrer alteração no estado")
    }, []);

    return (
        <div>
            <button onClick={() => setContar((old) => old + 1)}>Clicar {contar}</button>
        </div>
    )
}

export default EstadoEffectAula1
