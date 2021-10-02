import React from 'react'
import Product from './Product.js';
import Requisicao from './Requisicao.js';

const Desafio4 = () => {

    const [information, setInformation] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false)

    async function getInformation(url) {
        
        setIsLoading(true);
        
        let data = await Requisicao.get(url);

        console.log(data);

        setInformation((old) => data);

        setIsLoading(false);
    }

    return (
        <div>
            <button style={{marginRight:"10px"}} onClick={() => getInformation("https://ranekapi.origamid.dev/json/api/produto/smartphone")}>SMARTPHONE</button>
            <button style={{marginRight:"10px"}} onClick={() => getInformation("https://ranekapi.origamid.dev/json/api/produto/notebook")}>NOTEBOOK</button>
            <button onClick={() => getInformation("https://ranekapi.origamid.dev/json/api/produto/tablet")}>TABLET</button>

            <hr />

            {
                isLoading && <p>Carregando...</p>
            }

            {
                (!isLoading && information === null) && <p>Nenhuma pesquisa feita ainda</p>
            }

            {
                (!isLoading && information !== null) && <Product data={information} />
            }

        </div>
    )
}

export default Desafio4
