import React from 'react'

const Header = () => {
    console.log("Renderizou")
    return (
        <div>
            <h1>Header Aqui</h1>
        </div>
    )
}

// Assim vai memorizar esse componente evitando que seja renderizado toda vez que o pai na árvore DOM seja atualizado
// Se passar algum estado reativo como argumento pra esse cara ele vai voltar a renderizar normal
export default React.memo(Header)
