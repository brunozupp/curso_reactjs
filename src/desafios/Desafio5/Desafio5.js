import React from 'react'
import Requisicao from './Requisicao.js';
import PersistenciaLocal from './PersistenciaLocal.js'
import Produto from './Produto.js';

const Desafio5 = () => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [data, setData] = React.useState(null);

    React.useEffect(() => {

        if(!PersistenciaLocal.hasKey("produto")) return;

        const product = PersistenciaLocal.getItem("produto");

        getData(product);

    }, []);

    React.useEffect(() => {

        if(data !== null) {
            PersistenciaLocal.setItem("produto",data.nome);
        }

    }, [data]);

    async function getData(product) {
        setIsLoading(true);

        const url = "https://ranekapi.origamid.dev/json/api/produto/" + product;
        const json = await Requisicao.get(url);
        setData(json);
        
        setIsLoading(false);
    }

    return (
        <>
            <div>
                <h1>Preferência: {
                    isLoading ? "carregando..." : data !== null ? data.nome : "nenhuma"     
                }</h1>
                <button style={{marginRight:"10px"}} onClick={() => getData("notebook")}>Notebook</button>
                <button onClick={() => getData("smartphone")}>Smartphone</button>
            </div>
            <hr />
            {
                isLoading && <h3>Carregando informações...</h3>
            }
            {
                !isLoading && data && <Produto data={data} />
            }
        </>
        
    )
}

export default Desafio5
