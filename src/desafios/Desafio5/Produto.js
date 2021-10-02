import React from 'react'

const Produto = ({data}) => {
    return (
        <section>
            <h1>{data.nome}</h1>
            <p>R$ {data.preco}</p>
        </section>
    )
}

export default Produto
