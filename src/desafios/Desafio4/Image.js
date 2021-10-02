import React from 'react'

const Image = ({image}) => {
    return (
        <div>
            <img src={image.src} alt={image.titulo} height="200px" width="200px" title={image.titulo} />
        </div>
    )
}

export default Image
