import React from 'react'
import Image from './Image'

const Product = ({data}) => {
    return (
        <section>
            <h1>{data.nome}</h1>
            <p>R$ {data.preco}</p>
            {data.fotos.length > 0 && (
                data.fotos.map(foto => <Image key={foto.src} image={foto} />)
            )}
        </section>
    )
}

export default Product
