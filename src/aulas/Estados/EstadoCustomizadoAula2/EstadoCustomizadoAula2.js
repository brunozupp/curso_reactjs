import React from 'react'
import useFetch from './useFetch'
import useLocalStorage from './useLocalStorage';

const EstadoCustomizadoAula2 = () => {

    const {produto, setProduto} = useLocalStorage('produto', '');
    const {request, data, loading, error} = useFetch();

    React.useEffect(() => {

        async function fetchData() {
            const {response, json} = await request("https://ranekapi.origamid.dev/json/api/produto");

            console.log(response);
            console.log(json);
        }

        fetchData();

    }, [request]);

    function handleClick({target}) {
        setProduto(target.innerText);
    }

    if(error) {
        return <h1>{error}</h1>
    }

    if(loading) {
        return <h1>Carregando</h1>
    }

    if(data)
        return (
            <div>
                <p>Produto preferido: {produto}</p>
                <button onClick={handleClick}>notebook</button>
                <button onClick={handleClick}>smartphone</button>
                {
                    data.map((produto) => (
                        <li key={produto.id}>{produto.nome}</li>
                    ))
                }
            </div>
        )
    
    return null;
}

export default EstadoCustomizadoAula2
