import React from 'react'

const Product = ({produto}) => {
    return (
        <>
            <h4>{produto.nome}</h4>
            <ul>
                {
                    produto.propriedades.map((propriedade) => (
                        <li key={propriedade}>{propriedade}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default Product
