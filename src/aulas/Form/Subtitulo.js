import React from 'react'

const Subtitulo = ({texto,cor, children}) => {

    console.log(children);

    return (
        <div>
            <h3 style={{color: cor}}>
                {texto}
            </h3>
            {
                children != undefined && (
                    <p>Categorias: {children}</p>
                )
            }
        </div>
    )
}

export default Subtitulo
