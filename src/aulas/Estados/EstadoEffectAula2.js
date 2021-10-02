import React from 'react'

const EstadoEffectAula2 = () => {

    const [contar, setContar] = React.useState(0);
    const [dados, setDados] = React.useState(null);

    // Esse seria o onInit do GetX
    React.useEffect(() => {
        getData("https://ranekapi.origamid.dev/json/api/produto/notebook").then((value) => {
            setDados(value);
        });
    }, []);

    async function getData(url) {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }

    // 'https://ranekapi.origamid.dev/json/api/produto/notebook'

    return (
        <div>
            <button onClick={() => setContar((old) => old + 1)}>Clicar {contar}</button>
            {
                dados && (
                    <div>
                        <h1>
                            {dados.nome}
                        </h1>
                        <p>
                            {dados.preco * contar}
                        </p>
                    </div>
                )
            }
        </div>
    )
}

export default EstadoEffectAula2
