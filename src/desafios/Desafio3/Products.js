import React from 'react'
import Menu from './Menu';
import Product from './Product';
import Title from './Title';

const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Products = () => {
    return (
        <>
            <Menu />
            <Title text="Produtos" />
            {
                produtos.map((produto) => (
                    <div style={{border: "2px solid black", marginBottom:"5px", paddingRight:"10px", paddingLeft:"10px"}} key={produto.nome}>
                        <Product produto={produto} />
                    </div>
                ))
            }
        </>
    )
}

export default Products
