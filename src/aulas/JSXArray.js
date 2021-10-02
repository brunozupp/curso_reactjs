import React from 'react'

const JSXArray = () => {

    const filmes = ['Before Sunrise', 'Before Sunset', 'Amanhacer', 'Nova Onda'];

    const livros = [
        { nome: 'A Game of Thrones', ano: 1996 },
        { nome: 'A Clash of Kings', ano: 1998 },
        { nome: 'A Storm of Swords', ano: 2000 },
    ];

    return (
        <div>
            <ul>
                {
                    filmes.map(filme => (
                        <li key={filme}>{filme}</li>
                    ))
                }
            </ul>
            <br /><br />
            <ul>
                {
                    livros
                    .filter(({ano}) => ano >= 1998)
                    .map(({nome,ano}) => (
                        <li key={nome}>{nome} - {ano}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default JSXArray
